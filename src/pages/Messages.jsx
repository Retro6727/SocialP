import React, { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'twixtalks_dm_demo_v1';

// Demo users for local chat
const USERS = [
  { id: 'user1', name: 'Alice' },
  { id: 'user2', name: 'Bob' }
];

function getOtherUser(currentId) {
  return USERS.find(u => u.id !== currentId);
}

const Messages = () => {
  const [currentUser, setCurrentUser] = useState(USERS[0].id);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setMessages(JSON.parse(raw));
    } catch {
      setMessages([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    setMessages(msgs => [
      ...msgs,
      {
        id: Date.now(),
        from: currentUser,
        to: getOtherUser(currentUser).id,
        text: input.trim(),
        time: new Date().toISOString()
      }
    ]);
    setInput('');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') send();
  };

  const otherUser = getOtherUser(currentUser);
  const chat = messages.filter(m =>
    (m.from === currentUser && m.to === otherUser.id) ||
    (m.from === otherUser.id && m.to === currentUser)
  );

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Messages</h1>
      <div className="mb-4 flex gap-2">
        <span className="text-sm">Switch user:</span>
        {USERS.map(u => (
          <button key={u.id} onClick={() => setCurrentUser(u.id)} className={`px-3 py-1 rounded ${currentUser === u.id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>{u.name}</button>
        ))}
      </div>
      <div className="border rounded bg-white p-3 h-96 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-2 pr-2">
          {chat.length === 0 && <div className="text-gray-400 text-center mt-8">No messages yet. Say hello!</div>}
          {chat.map(m => (
            <div key={m.id} className={`mb-2 flex ${m.from === currentUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded px-3 py-2 max-w-xs ${m.from === currentUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}>{m.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 border rounded px-3 py-2"
            placeholder="Type a message..."
          />
          <button onClick={send} className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </div>
      </div>
    </main>
  );
};

export default Messages;