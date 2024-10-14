import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa'; // Icons for the chat button

const ChatBot = () => {
  // State to manage the messages
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of the chatbot

  // Predefined responses from the chatbot
  const botResponses = {
    hello: "Hello! How can I assist you today?",
    booking: "You can book your tickets directly from our movie section.",
    movies: "We have the latest blockbusters available! Check the movie section for more details.",
    thanks: "You're welcome! Feel free to ask if you need more assistance.",
    default: "I'm not sure I understand. Can you please rephrase your question?",
  };

  // Handle user input and bot response
  const handleSendMessage = () => {
    if (!userInput.trim()) return; // prevent empty messages

    // Add user's message to the chat
    const newMessages = [...messages, { text: userInput, sender: 'user' }];

    // Get bot's response based on user input
    const botReply = botResponses[userInput.toLowerCase()] || botResponses['default'];

    // Add bot's response to the chat after a short delay
    setTimeout(() => {
      setMessages([...newMessages, { text: botReply, sender: 'bot' }]);
    }, 500);

    setMessages(newMessages);
    setUserInput(''); // Clear the input field
  };

  // Toggle the chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat icon button */}
      {!isOpen && (
        <button
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg focus:outline-none hover:bg-blue-600 transition-all"
          onClick={toggleChatbot}
        >
          <FaComments size={24} />
        </button>
      )}

      {/* ChatBot window */}
      {isOpen && (
        <div className="relative w-80 h-auto sm:w-96 bg-white shadow-lg rounded-lg">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-red-500 hover:text-red-600 focus:outline-none"
            onClick={toggleChatbot}
          >
            <FaTimes size={20} />
          </button>

          {/* Chat Header */}
          <div className="bg-blue-500 text-white text-center py-2 rounded-t-lg font-semibold">
            MovieWorld Chatbot
          </div>

          {/* Chat Body */}
          <div className="h-64 p-4 overflow-y-auto">
            {messages.length === 0 && (
              <p className="text-gray-500 text-center">
                Hello! Ask me anything about movies or booking tickets.
              </p>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 max-w-xs rounded-lg ${
                  msg.sender === 'user' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="flex p-2 border-t">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2 focus:outline-none"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
