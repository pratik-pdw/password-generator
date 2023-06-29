import React from "react";

interface SliderProps {
  titleText: string;
  value: number;
  min: number;
  max: number;
  handleOnChange: (e: any) => void;
}

export const Slider = ({
  titleText,
  value,
  min,
  max,
  handleOnChange,
}: SliderProps) => {
  return (
    <div className="slider">
      <div className="slider-text">
        <h1 className="body-text text-almost-white">{titleText}</h1>
        <h1 className="lg-text text-neon-green">{value}</h1>
      </div>

      <input
        value={value}
        style={{
          backgroundSize: `${((value - min) * 100) / (max - min)}% 100%`,
        }}
        onChange={handleOnChange}
        min={min}
        max={max}
        step={1}
        type="range"
      />
    </div>
  );
};
