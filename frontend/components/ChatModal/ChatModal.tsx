import React, { useState } from 'react';
import styles from './ChatModal.module.scss';

interface ChatResponse {
  message: string;
  error?: boolean;
  errorMessage?: string;
}

interface ChatMessage {
  message: string;
  sender: 'self' | 'other';
}

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = async () => {
    setMessages((prev) => [...prev, { message, sender: 'self' }]);
    console.log(messages);
    try {
      const response = await fetch(`/api/chat?content=${message}`);
      const data: ChatResponse = await response.json();
      console.log(data);
      if (data.error) {
        console.error(data.errorMessage || 'An error occurred');
      } else {
        setMessages((prev) => [...prev, { message: data.message, sender: 'other' }]);
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
          <ol className={styles.chat}>
            {messages.map((message, index) => (
              <li key={index} className={message.sender == 'self' ? styles.self : styles.other}>
                <div className={styles.msg}>
                  <p>{message.message}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.msgerInputarea}>
            <input
              type='text'
              value={message}
              onChange={handleInputChange}
              placeholder='Type your message here'
              className={styles.msgerInput}
            />
            <button onClick={handleSend} className={styles.msgerSendBtn}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatModal;
