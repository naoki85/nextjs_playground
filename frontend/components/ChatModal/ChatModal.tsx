import React, { useState } from 'react';
import styles from './ChatModal.module.scss';

interface ChatResponse {
  message: string;
  error?: boolean;
  errorMessage?: string;
}

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = async () => {
    setMessages((prev) => [...prev, message]);
    console.log(messages);
    try {
      const response = await fetch(`/api/chat?content=${message}`);
      const data: ChatResponse = await response.json();
      console.log(data);
      if (data.error) {
        console.error(data.errorMessage || 'An error occurred');
      } else {
        setMessages((prev) => [...prev, data.message]);
        setMessage('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <button onClick={handleOpen} className={styles.chatButton}>
          Open Chat
        </button>
      )}
      {isOpen && (
        <div className={styles.chatModal}>
          <div className={styles.chatHeader}>
            <h2>Chat</h2>
            <button onClick={handleClose}>Close</button>
          </div>
          <div className={styles.chatBody}>
            {messages.map((message, index) => (
              <div key={index} className='chat-message'>
                {message}
              </div>
            ))}
          </div>
          <div className='chat-input'>
            <input
              type='text'
              value={message}
              onChange={handleInputChange}
              placeholder='Type your message here'
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatModal;
