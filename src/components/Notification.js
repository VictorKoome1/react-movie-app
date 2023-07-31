import React from 'react';
import './Notification.css'; // Import the CSS file for styling

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification-container">
      <div className="notification">
        <p>{message}</p>
        <button onClick={onClose}>close❌</button>
      </div>
    </div>
  );
};

export default Notification;
