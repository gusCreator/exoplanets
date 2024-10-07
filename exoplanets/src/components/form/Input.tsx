'use client';

import { invertedColor } from '@/styles/colors';
import React, { useEffect, useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaXmark, FaCheck } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';
import { AlertOptions, useAlert } from '@/lib/hooks';
import Alert from '../alerts/Alert';

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
  const {
    isVisible, alertOptions, showAlert, hideAlert,
  } = useAlert();
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [onSending, setOnSending] = useState<boolean>(false);
  const [savedValue/* setSavedValue */] = useState<string>(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleShowAlert = ({ message, type, duration }: AlertOptions) => {
    showAlert({
      message,
      type,
      duration,
    });
  };
  const handleEdit = () => {
    setOnEdit(true);
  };
  const handleSending = () => {
    setOnEdit(false);
    const valueInput = inputRef.current?.value || '';
    if (valueInput === savedValue) {
      return;
    }
    setOnSending(true);
    console.log('El valor de la entrada es: ', inputRef.current?.value);
    // Simula el envío de datos y esperar respuesta
    setTimeout(() => {
      setOnSending(false);
      if (inputRef.current) {
        // Si no hay errores en el envío
        // setSavedValue(inputRef.current?.value);
        // handleShowAlert({ message: SUCCESS_UPLOADING, type: 'success' });
        // De otra manera
        inputRef.current.value = savedValue;
        handleShowAlert({ message: ERROR_UPLOADING, type: 'error' });
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
          defaultValue={savedValue}
          onFocus={handleEdit}
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
              <button
                type="button"
                onClick={handleSending}
                className="text-green border-[1px] rounded-sm border-transparent hover:border-green transition-colors p-0.5 hover:bg-green-dark cursor-pointer"
              >
                <FaCheck
                  size={20}
                />
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="text-red border-[1px] rounded-sm border-transparent hover:border-red transition-colors p-0.5 hover:bg-red-dark cursor-pointer"
              >
                <FaXmark
                  size={20}
                />
              </button>
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
      <Alert alertOptions={alertOptions} hideAlert={hideAlert} isVisible={isVisible} />
    </div>
  );
}
