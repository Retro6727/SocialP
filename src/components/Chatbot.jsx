import React, { useState, useRef, useEffect } from 'react';
import { FaWindowMinimize, FaComments } from 'react-icons/fa';

const botWelcome = "Hi! I'm TwixBot. How can I help you today?";

const getBotReply = (userMsg) => {
  const msg = userMsg.toLowerCase();
  if (/hello|hi|hey/.test(msg)) return "Hello! How can I assist you?";
  if (/price|pricing/.test(msg)) return "Our pricing plans are listed on the Pricing page. Please visit it for more details.";
  if (/register|signup/.test(msg)) return "You can register using the Registration page.";
  if (/login/.test(msg)) return "Click Login at the top right to sign in.";
  if (/bye|exit|thanks/.test(msg)) return "You're welcome! Have a great day!";
  if (/features|what can you do/.test(msg)) return "TwixTalks offers connecting with others through tweets, joining groups, and staying updated with trends. How can I help you further?";
  if(/contact.*support|helpdesk|customer.*service/.test(msg)) return "You can contact our support team via the Contact Us page for any assistance.";
  if("What is TwixTalks?".toLowerCase() === msg) return "TwixTalks is a social platform where you can connect with others through tweets, join groups, and stay updated with the latest trends.";
  if("Is TwixTalks free to use?".toLowerCase() === msg) return "Yes, TwixTalks offers a free tier with basic features. We also have premium plans with additional benefits.";
  if("Can we add another user to a group?".toLowerCase() === msg) return "Yes, you can add users to a group by going to the group page and selecting 'Add Members'.";
  if("What can we look at Trending section?".toLowerCase() === msg) return "In the Trending section, you can explore the latest popular topics, hashtags, and discussions happening on TwixTalks.";
  if(/retrieve.*password|forgot.*password|change.*password|reset.*password/.test(msg)) return "To retrieve or change your password, go to the Login page and click 'Forgot Password'. Follow the instructions to reset your password.";
  if("Can we add images or videos to our tweets?".toLowerCase() === msg) return "Yes, you can add images and videos to your tweets by clicking the media icon while composing a tweet.";

  // Custom queries
  if (/group|make.*group|create.*group/.test(msg)) return "To make a group, go to the Groups page and click 'Create Group'. Fill in the details and invite members.";
  if (/what.*content|add.*content|type.*content/.test(msg)) return "You can add text, images, videos, and links. Please ensure your content follows our community guidelines.";
  if (/restriction|rules|prohibited|not allowed/.test(msg)) return "Restrictions: No hate speech, spam, illegal content, or harassment. Please respect all users and follow our guidelines.";
  if (/policy|privacy|terms/.test(msg)) return "We believe in privacy, safety, and inclusivity. Read our full policy on the Terms & Conditions page.";
  if (/retrieve.*password|forgot.*password|change.*password|reset.*password/.test(msg)) return "To retrieve or change your password, go to the Login page and click 'Forgot Password'. Follow the instructions to reset your password.";
  if(/contact.*support|helpdesk|customer.*service/.test(msg)) return "You can contact our support team via the Contact Us page for any assistance.";

  return "Sorry, I didn't understand that. Can you rephrase or ask something else?";
};


const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: botWelcome, sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const [minimized, setMinimized] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);
  const messagesEndRef = useRef(null);
  const prevMsgCount = useRef(messages.length);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, minimized]);

  // Notification logic: if minimized and a new bot message arrives, show notification
  useEffect(() => {
    if (minimized && messages.length > prevMsgCount.current) {
      const last = messages[messages.length - 1];
      if (last && last.sender === 'bot') setHasNotification(true);
    }
    prevMsgCount.current = messages.length;
  }, [messages, minimized]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(msgs => [...msgs, { text: input, sender: 'user' }]);
    setTimeout(() => {
      setMessages(msgs => [...msgs, { text: getBotReply(input), sender: 'bot' }]);
    }, 700);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleOpen = () => {
    setMinimized(false);
    setHasNotification(false);
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 24, width: minimized ? 60 : 340, height: minimized ? 60 : 'auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.15)', zIndex: 1000, display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'width 0.3s, height 0.3s' }}>
      {minimized ? (
        <button onClick={handleOpen} style={{ width: 60, height: 60, background: 'linear-gradient(90deg,#3b82f6,#10b981)', color: '#fff', border: 'none', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, cursor: 'pointer', position: 'relative' }} title="Open Chatbot">
          <FaComments />
          {hasNotification && (
            <span style={{ position: 'absolute', top: 10, right: 10, width: 14, height: 14, background: '#ef4444', borderRadius: '50%', border: '2px solid #fff', display: 'block', boxShadow: '0 0 0 2px #fff', zIndex: 2 }} />
          )}
        </button>
      ) : (
        <>
          <div style={{ background: 'linear-gradient(90deg,#3b82f6,#10b981)', color: '#fff', padding: '12px 16px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>TwixBot Chat</span>
            <button onClick={() => setMinimized(true)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer' }} title="Minimize">
              <FaWindowMinimize />
            </button>
          </div>
          <div style={{ flex: 1, padding: 16, overflowY: 'auto', maxHeight: 320 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.sender === 'bot' ? 'left' : 'right', marginBottom: 10 }}>
                <span style={{ background: msg.sender === 'bot' ? '#f3f4f6' : '#dbeafe', padding: '8px 12px', borderRadius: 8, display: 'inline-block', maxWidth: '80%' }}>{msg.text}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #eee', padding: 8, background: '#fafafa' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              style={{ flex: 1, border: 'none', outline: 'none', padding: 8, borderRadius: 6, fontSize: 15, background: '#fff' }}
            />
            <button onClick={handleSend} style={{ marginLeft: 8, background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, padding: '0 16px', fontWeight: 500, cursor: 'pointer' }}>Send</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbot;
