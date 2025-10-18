import { useState } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("User message:", message);
    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition-transform transform hover:scale-110"
      >
        {open ? <FaTimes size={22} /> : <FaComments size={22} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 animate-slide-up">
          <div className="bg-blue-600 text-white p-3 font-semibold text-center">
            💬 Need Help? Chat with us!
          </div>

          <div className="p-4 max-h-64 overflow-y-auto text-gray-800 dark:text-gray-200 text-sm space-y-3">
            <p>Hi there! 👋 How can we help you today?</p>
            {/* Add future chat responses here */}
          </div>

          <div className="p-3 flex items-center border-t border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm outline-none dark:bg-gray-700 dark:text-white"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
