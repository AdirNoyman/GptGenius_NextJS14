'use client';
import React, { useState } from 'react';

const Chat = () => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-5xl">messages</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message GeniusGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(event) => setText(event.target.value)}
          />
          <button className="btn btn-primary join-item" type="submit">
            Ask question
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
