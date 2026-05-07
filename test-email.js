async function testEmail() {
  const payload = {
    service_id: "service_4alybxw",
    template_id: "template_k64wqzg",
    user_id: "m_iRqAhT5n7dtzj3q", 
    template_params: {
      from_name: "Test Name",
      from_email: "test@example.com",
      subject: "Test Subject",
      message: "Test Message"
    }
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const text = await response.text();
    console.log("Status:", response.status);
    console.log("Response Body:", text);
  } catch (error) {
    console.error("Error:", error);
  }
}

testEmail();
