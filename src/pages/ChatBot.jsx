import { useState } from "react";
import axios from "axios";
import { LuSendHorizontal } from "react-icons/lu";
import { marked } from "marked"; // Import the markdown parser
import "./ChatBot.css";
import icon from "../assets/icons/vector.png";
import icon1 from "../assets/icons/Vector1.png";
import icon2 from "../assets/icons/Vector2.png";
import icon3 from "../assets/icons/Vector3.png";

const ChatBot = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!query.trim()) return;

    const userMessage = { sender: "user", text: query.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setIsLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/chat/", {
        query,
      });
      const botMessage = { sender: "bot", text: response.data.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Too many requests, try again later." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src={icon} alt="AI Icon" className="chat-icon" />
        <h2>Your Daily AI Assistant</h2>
      </div>
      <div className="chat-box">
        {messages.length === 0 && (
          <div className="suggested-topics">
            {[
              { text: "Elaborate Funding Process", icon: icon },
              { text: "Generate a business model", icon: icon1 },
              { text: "Trending Startups and Industries", icon: icon2 },
              { text: "Create a Professional Pitch Deck", icon: icon3 },
            ].map((topic, index) => (
              <button
                key={index}
                className="topic-btn"
                onClick={() => setQuery(topic.text)}
              >
                <img src={topic.icon} alt="icon" className="topic-icon" />
                <span className="topic-text">{topic.text}</span>
              </button>
            ))}
          </div>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div
              className="message-content"
              dangerouslySetInnerHTML={{ __html: marked(msg.text) }} // Convert Markdown to HTML
            />
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Enter a prompt here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="send-button" onClick={sendMessage} disabled={isLoading}>
          <LuSendHorizontal style={{ color: "#8692A6", padding: "2px", paddingRight: "10px", fontSize: "35px" }} />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
