import React from "react";

interface TextFieldProps {
  value: string;
  isCopied: boolean;
  onCopyBtnClick: (e: any) => void;
}

export const TextField = ({
  value,
  isCopied,
  onCopyBtnClick,
}: TextFieldProps) => {
  return (
    <div className="text-field">
      <input
        className="text-field-input"
        value={value}
        type="text"
        placeholder="P4$5W0rD!"
      />
      <button
        onClick={onCopyBtnClick}
        className={`copy-btn ${isCopied ? "is-copied" : ""}`}
      >
        {isCopied && <span className="copy-btn-text">COPIED</span>}
        <i className="far fa-copy copy-btn-icon"></i>
      </button>
    </div>
  );
};
