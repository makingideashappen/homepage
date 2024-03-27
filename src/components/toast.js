import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: 1s ease;
  animation: ${slideOut} 0.5s ease forwards;
  animation-delay: ${({ visible }) => (visible ? "0s" : "1s")};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

const Toast = ({ message, duration = 3000, onClose = () => {} }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <ToastContainer visible={visible}>
      <span>{message}</span>
      <CloseButton onClick={handleClose}>&times;</CloseButton>
    </ToastContainer>
  );
};

export default Toast;
