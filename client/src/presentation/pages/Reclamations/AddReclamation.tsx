import { addReclamation } from '@services/reclamation.service';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

export const AddReclamation = () => {
    const [input, setInput] = useState('');
    const user = { id: '1', name: 'user1' };

    const { mutate } = useMutation({ mutationFn: () => addReclamation(input, user.id) })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input) {
            mutate()
            setInput('');
        }
    }

    return (
        <form
            className="fixed  gap-2 px-4 mx-auto  max-w-screen-md h-12 bottom-5 justify-around w-full flex items-center text-lg"
            onSubmit={handleSubmit}
        >
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Réclamer quelque chose"
                className="w-5/6 h-full text-lg bg-gray-100 border border-gray-300 text-black outline-none rounded-xl pr-[10px] text-center"
            />
            <button
                type="submit"
                className="h-full w-1/6 bg-[#22d3ee] rounded-xl text-white flex items-center justify-center p-3  disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Send
            </button>
        </form>
    );
};
