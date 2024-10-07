'use client';

import { invertedColor } from '@/styles/colors';
import React, { useEffect, useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaXmark, FaCheck } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';
import Alert, { AlertProps, DEFAULT_ALERT_DURATION } from '../alerts/Alert';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  name: string,
  defaultValue?: string,
}

export default function Input({
  label, name, defaultValue = '', ...props
}: InputProps) {
  const t = useTranslations('components.form.input');
  const ERROR_UPLOADING = t('error-update');
  // const SUCCESS_UPLOADING = t('success-update');
  const SENDIND_MESSAGE = t('sending');
  const [alert, setAlert] = useState<AlertProps | null>(null);
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [onSending, setOnSending] = useState<boolean>(false);
  const [savedValue/* setSavedValue */] = useState<string>(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const showAlert = ({ message, type, duration }: AlertProps) => {
    setAlert({ message, type, duration });
    setTimeout(() => {
      setAlert(null);
    }, duration || DEFAULT_ALERT_DURATION);
  };
  const handleEdit = () => {
    setOnEdit(true);
  };
  const handleSending = () => {
    setOnEdit(false);
    setOnSending(true);
    setAlert(null);
    console.log('El valor de la entrada es: ', inputRef.current?.value);
    // Simula el envío de datos y esperar respuesta
    setTimeout(() => {
      setOnSending(false);
      if (inputRef.current) {
        // Si no hay errores en el envío
        // setSavedValue(inputRef.current?.value);
        // showAlert({ message: SUCCESS_UPLOADING, type: 'success' });
        // De otra manera
        inputRef.current.value = savedValue;
        showAlert({ message: ERROR_UPLOADING, type: 'error', duration: 10000 });
      }
    }, 500);
  };
  const handleCancel = () => {
    setOnEdit(false);
    if (inputRef.current) {
      inputRef.current.value = savedValue;
    }
  };
  useEffect(() => {
    if (onEdit) {
      inputRef.current?.focus();
    }
  }, [onEdit]);
  const baseStyle = 'flex flex-col gap-2 justify-center w-fit p-3';
  return (
    <div
      className={baseStyle}
    >
      {label && (
        <label
          htmlFor={name}
          className="font-audiowide text-primary text-xl"
        >
          {label}
        </label>
      )}
      <div
        className="text-secondary flex justify-between gap-4 items-center"
      >
        <input
          ref={inputRef}
          name={name}
          disabled={!onEdit}
          defaultValue={savedValue}
          className="bg-transparent cursor-text focus:outline-none focus:border-b-2 border-b-transparent focus:border-b-primary transition-colors font-exo text-lg"
          {...props}
        />
        {
          onSending && (
            <p className="font-exo text-sm">{SENDIND_MESSAGE}</p>
          )
        }
        {
          onEdit && !onSending && (
            <div
              className="flex gap-1"
            >
              <FaCheck
                onClick={handleSending}
                size={25}
                className="text-green border-[1px] rounded-sm border-transparent hover:border-green transition-colors p-0.5 hover:bg-green-dark cursor-pointer"
              />
              <FaXmark
                onClick={handleCancel}
                size={25}
                className="text-red border-[1px] rounded-sm border-transparent hover:border-red transition-colors p-0.5 hover:bg-red-dark cursor-pointer"
              />
            </div>
          )
        }
        {
          !onEdit && !onSending && (
            <FaEdit
              onClick={handleEdit}
              className={`${invertedColor} cursor-pointer`}
            />
          )
        }
      </div>
      {alert && <Alert {...alert} />}
    </div>
  );
}
