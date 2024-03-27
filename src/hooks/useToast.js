import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

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
  animation: ${({ visible }) =>
    visible
      ? css`
          ${slideIn} 0.5s ease forwards
        `
      : css`
          ${slideOut} 0.5s ease forwards
        `};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 16px;
  height: 16px;
`;

const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, duration = 3000) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prevToasts) => [...prevToasts, { id, message, duration }]);
    setTimeout(() => removeToast(id), duration);
  };

  const removeToast = (idToRemove) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== idToRemove)
    );
  };

  return {
    Toast: () => (
      <>
        {toasts.map((toast) => (
          <ToastContainer key={toast.id} visible={true}>
            <span>{toast.message}</span>
            <CloseButton onClick={() => removeToast(toast.id)}>
              &times;
            </CloseButton>
          </ToastContainer>
        ))}
      </>
    ),
    addToast,
  };
};

export default useToast;
