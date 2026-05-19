import React, { createContext, useCallback, useContext, useState } from 'react';
import ToastContainer from './Toast';
import './toast.css';

export type NotificationType = 'success' | 'error' | 'info';

export type Notification = {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number;
};

type NotificationContextValue = {
  notify: (n: Omit<Notification, 'id'>) => void;
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
};

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const remove = useCallback((id: string) => {
    setNotifications(s => s.filter(n => n.id !== id));
  }, []);

  const notify = useCallback((n: Omit<Notification, 'id'>) => {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    const notif: Notification = { id, ...n };
    setNotifications(s => [...s, notif]);
    const duration = n.duration ?? 5000;
    setTimeout(() => remove(id), duration);
  }, [remove]);

  const success = useCallback((message: string, duration?: number) => notify({ type: 'success', message, duration }), [notify]);
  const error = useCallback((message: string, duration?: number) => notify({ type: 'error', message, duration }), [notify]);
  const info = useCallback((message: string, duration?: number) => notify({ type: 'info', message, duration }), [notify]);

  return (
    <NotificationContext.Provider value={{ notify, success, error, info }}>
      {children}
      <ToastContainer notifications={notifications} onDismiss={remove} />
    </NotificationContext.Provider>
  );
};

export function useNotifications() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error('useNotifications must be used within NotificationProvider');
  return ctx;
}
