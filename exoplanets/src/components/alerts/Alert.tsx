import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FaXmark } from 'react-icons/fa6';

export const DEFAULT_ALERT_DURATION = 3000;

export interface AlertProps {
  message: string;
  type: 'error' | 'success';
  duration?: number;
}

export default function Alert({
  message, type,
  duration = DEFAULT_ALERT_DURATION,
}: AlertProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // No renderizar si no está visible

  const baseStyle = 'fixed top-0 right-0 rounded-md border-2 max-w-56 w-fit p-3 shadow-lg z-50 flex gap-2 m-1.5 text-sm font-exo';
  const determinateStyleType = clsx({
    'bg-green-dark text-green border-green': type === 'success',
    'bg-red-dark text-red border-red': type === 'error',
  });

  return (
    <div className={twMerge(baseStyle, determinateStyleType)}>
      <span>{message}</span>
      <FaXmark
        onClick={handleClose}
        className="cursor-pointer"
      />
    </div>
  );
}
