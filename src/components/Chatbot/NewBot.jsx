import React, { useEffect } from 'react';

const ChatbotIntegration = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://askelliebots.blob.core.windows.net/askelliefiles/widget-integration-98.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // You can replace this with any UI for the chatbot component if needed
};

export default ChatbotIntegration;
