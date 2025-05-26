'use Client';

import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
    label: string | ReactNode;
    onClick?: () => void;
    variant? : 'primary' | 'secondary';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
};

export const LoginButton = ({
    label,
    onClick,
    variant = 'primary',
    type = 'button',
    disabled = false,
    className = '',
}: ButtonProps) => {
    return (
        <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={clsx(
        'w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors',
        variant === 'primary' && 'bg-accent text-white hover:bg-[#7a9e44]',
        variant === 'secondary' && 'border-2 border-accent text-accent hover:bg-gray-50',
        className
    )}
    >
        {label}
        </button>
        );
    };

    