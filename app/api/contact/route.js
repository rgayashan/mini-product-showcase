export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Extract form data
    const { name, email, subject, message } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // In a real application, you would send an email here
    // For this demo, we'll just log the data and return success
    console.log('Contact form submission:', { name, email, subject, message });
    
    // Simulate a delay for the API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success response
    return Response.json({
      success: true,
      message: 'Message sent successfully',
      data: { name, email, subject }
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return Response.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request' 
      },
      { status: 500 }
    );
  }
}