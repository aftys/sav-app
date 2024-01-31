import React, { useEffect, useState } from 'react';

export interface IMessage {
    content: string;
    writer: string;
    time: string; 
}

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('backendApi/messages');
                if (response.ok) {
                    const data = await response.json();
                    setMessages(data.messages); // Assuming your API returns messages as an array
                } else {
                    console.error('Failed to fetch messages');
                }
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h1>Messages</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        <p>Content: {message.content}</p>
                        <p>Writer: {message.writer}</p>
                        <p>Time: {message.time}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;
