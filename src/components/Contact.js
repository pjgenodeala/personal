import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setStatus({
        submitting: false,
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      const response = await fetch('https://formspree.io/f/xoveywle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: inputs.name,
          email: inputs.email,
          subject: inputs.subject,
          message: inputs.message
        }),
      });
      
      const responseData = await response.json();
      if (response.ok) {
        handleServerResponse(true, 'Thank you! Your message has been submitted.');
      } else {
        handleServerResponse(false, responseData.error || 'Error submitting form. Please try again.');
      }
    } catch (error) {
      handleServerResponse(false, 'Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
            </p>
            {/* ... rest of your contact info ... */}
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleOnSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  onChange={handleOnChange}
                  required
                  value={inputs.name}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  onChange={handleOnChange}
                  value={inputs.subject}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status.submitting}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition w-full disabled:bg-blue-400"
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Send Message'
                    : 'Sent!'
                  : 'Sending...'}
              </button>
              
              {status.info.error && (
                <div className="error text-red-500">{status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (
                <div className="success text-green-500">{status.info.msg}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;