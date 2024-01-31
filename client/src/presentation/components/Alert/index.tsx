
import React from 'react';

interface IAlertProps {
    message: string | null;
    type: 'success' | 'error' | 'warning' | 'info';
    className?: string;
}

const Alert: React.FC<IAlertProps> = ({ message, type, className }) => {
    return (
        <div className={`text-center ${className}`}>
            <div className={`text-${type}-500 bg-${type}-100 border dark:bg-[rgba(155, 68, 68, 0.37)] border-${type}-500 px-4 py-3 rounded-lg  relative`} role="alert">
                <strong className="font-bold">{message}</strong>
            </div>
        </div>
    );
}

export default Alert;