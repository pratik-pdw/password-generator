import React from "react";

interface CheckboxProps {
  text: string;
  isChecked: boolean;
  onChange: (e: any) => void;
}
export const Checkbox = ({
  text,
  isChecked = false,
  onChange,
}: CheckboxProps) => {
  return (
    <label className="checkbox body-text">
      <input onChange={onChange} type="checkbox" checked={isChecked} />
      <span className="checkmark">
        <i className="fas fa-check" />
      </span>
      {text}
    </label>
  );
};
