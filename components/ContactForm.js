'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * A contact form component that submits form data to the /api/contact API route.
 * The component displays a success or error message based on the response from the API.
 *
 * @returns A JSX element representing the contact form.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Please fill in all required fields.',
      });
      return;
    }
    
    // Submit the form
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: '',
    });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Your message has been sent successfully!',
      });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error.message || 'An error occurred while sending your message.',
      });
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Send us a Message</h2>
        <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
      </div>

      {/* Status messages */}
      {(formStatus.isSuccess || formStatus.isError) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg p-4 ${
            formStatus.isSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
          }`}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              {formStatus.isSuccess ? (
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{formStatus.message}</p>
            </div>
          </div>
        </motion.div>
      )}
      
      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name field */}
        <div className="relative">
          <label 
            htmlFor="name" 
            className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        
        {/* Email field */}
        <div className="relative">
          <label 
            htmlFor="email" 
            className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
      </div>
      
      {/* Subject field */}
      <div className="relative">
        <label 
          htmlFor="subject" 
          className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      
      {/* Message field */}
      <div className="relative">
        <label 
          htmlFor="message" 
          className="absolute -top-2 left-2 bg-white px-1 text-xs font-medium text-gray-600"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
          required
        ></textarea>
      </div>
      
      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={formStatus.isSubmitting}
        className={`w-full py-3 px-6 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ${
          formStatus.isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
        }`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className="flex items-center justify-center">
          {formStatus.isSubmitting && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
        </span>
      </motion.button>
    </motion.form>
  );
}