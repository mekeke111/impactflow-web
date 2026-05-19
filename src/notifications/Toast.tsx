import React from 'react';
import { Notification } from './NotificationContext';

const ToastContainer: React.FC<{ notifications: Notification[]; onDismiss: (id: string) => void }> = ({ notifications, onDismiss }) => {
  return (
    <div className="toast-root">
      {notifications.map(n => (
        <div key={n.id} className={`toast toast-${n.type}`} role="status" aria-live="polite">
          <div className="toast-message">{n.message}</div>
          <button className="toast-close" onClick={() => onDismiss(n.id)} aria-label="Dismiss notification">✕</button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
