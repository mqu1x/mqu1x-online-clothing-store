import React, { useState } from 'react';

const ChatGPTComponent = () => {
    const [messages, setMessages] = useState([]);

    const handleMessageSubmit = async (message) => {
        // Логика отправки сообщения и получения ответа от ChatGPT API
        const response = await fetch('https://api.chatgpt.com/message', {
            method: 'POST',
            body: JSON.stringify({ message }),
            headers: {
                'Content-Type': 'application/json',
                // Вам также понадобится заголовок с вашим API ключом
            },
        });

        const data = await response.json();

        setMessages([
            ...messages,
            { text: message, isUser: true },
            { text: data.message, isUser: false },
        ]);
    };

    return (
        <div>
            {messages.map((message, index) => (
                <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
                    {message.text}
                </div>
            ))}
            <input
                type='text'
                placeholder='Введите сообщение'
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleMessageSubmit(e.target.value);
                        e.target.value = '';
                    }
                }}
            />
        </div>
    );
};

export default ChatGPTComponent;
