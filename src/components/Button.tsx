import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ text, onClick, disabled = false }: ButtonProps) => {
  return (
    <div className="btn-container">
      <button disabled={disabled} className="btn" onClick={onClick}>
        <span className="btn-text">{text}</span>
        <i className="btn-icon fas fa-arrow-right"></i>
      </button>
    </div>
  );
};
