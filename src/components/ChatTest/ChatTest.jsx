import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function ChatTest() {
  const [message, setMessage] = useState('');
  const [fullMessage, setFullMessage] = useState('');
  const socket = io('ws://localhost:3001');

  const handleSubmit = (event) => {
    event.preventDefault();
    setFullMessage(message);
    setMessage('');
  };

  useEffect(() => {
    socket.on('connect', () => {
      socket.send(fullMessage);
      socket.emit(
        'saluations',
        'Hello',
        { mr: 'john' },
        Uint8Array.from([1, 2, 3, 4])
      );
    });
  }, []);

  socket.on('message', (data) => {
    console.log(data);
  });

  socket.on('greetings', (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          type="text"
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
