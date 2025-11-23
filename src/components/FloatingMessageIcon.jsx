import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const FloatingMessageIcon = () => (
  <a
    href="/messages"
    title="Messages"
    style={{
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 1100,
      width: 60,
      height: 60,
      background: 'linear-gradient(90deg,#3b82f6,#10b981)',
      color: '#fff',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 28,
      boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
      textDecoration: 'none',
      transition: 'background 0.2s',
    }}
  >
    <FaEnvelope />
  </a>
);

export default FloatingMessageIcon;
