import { DEFAULT_ALERT_DURATION } from '@/constants/defaults';
import { useState, useCallback } from 'react';

export interface AlertOptions {
  message: string;
  type?: 'error' | 'success';
  duration?: number;
}

export function useAlert() {
  const [isVisible, setIsVisible] = useState(false);
  const [alertOptions, setAlertOptions] = useState<AlertOptions>({
    message: '',
    type: 'success',
    duration: DEFAULT_ALERT_DURATION,
  });

  const showAlert = useCallback(({ message, type = 'success', duration = DEFAULT_ALERT_DURATION }: AlertOptions) => {
    setAlertOptions({ message, type, duration });
    setIsVisible(true);
    if (duration > 0) {
      setTimeout(() => {
        setIsVisible(false);
      }, duration);
      // return () => clearTimeout(timer);
    }
    // return () => { };
  }, []);

  const hideAlert = useCallback(() => {
    setIsVisible(false);
  }, []);

  return {
    isVisible, alertOptions, showAlert, hideAlert,
  };
}
