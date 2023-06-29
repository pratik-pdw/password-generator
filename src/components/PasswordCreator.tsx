import React, { useState } from "react";
import { Button } from "./Button";

const MIN = 0;
const MAX = 16;

export const PasswordCreator = () => {
  const [characterLength, setCharacterLength] = useState(0);

  const handleOnChange = (e: any) => {
    setCharacterLength(e.target.value);
  };

  return (
    <div className="password-creator">
      <div className="character-length">
        <h1 className="body-text text-almost-white">Character Length</h1>
        <h1 className="lg-text text-neon-green">{characterLength}</h1>
      </div>

      <input
        value={characterLength}
        style={{
          backgroundSize: `${
            ((characterLength - MIN) * 100) / (MAX - MIN)
          }% 100%`,
        }}
        onChange={handleOnChange}
        min={MIN}
        max={MAX}
        step={1}
        type="range"
      />

      <Button text="Generate" onClick={() => ""} />
    </div>
  );
};
