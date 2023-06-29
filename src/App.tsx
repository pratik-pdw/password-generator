import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Indicator,
  Slider,
  TextField,
  Strength,
} from "./components";
import { generatePassword } from "./functions/generate-password";
import { useGetStrength } from "./hooks/useGetStrength";
import { PasswordConstraints } from "./constants/types";
import { Constraints } from "./constants/enums";

const checkboxes = [
  { id: Constraints.UPPERCASE, text: "Include Uppercase Letters" },
  { id: Constraints.LOWERCASE, text: "Include Lowercase Letters" },
  { id: Constraints.NUMBERS, text: "Include Numbers" },
  { id: Constraints.SYMBOLS, text: "Include Symbols" },
];

function App() {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [constraints, setConstraints] = useState<PasswordConstraints>({
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  });
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [isCopyBtnClicked, setIsCopyBtnClicked] = useState(false);

  const strength = useGetStrength(constraints, sliderValue);

  const handleOnSliderChange = (e: any) => {
    setSliderValue(parseInt(e.target.value, 10));
  };

  const handleOnCheckboxClick = (id: string, value: boolean) => {
    setConstraints((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleOnGenerateBtnClick = () => {
    setIsCopyBtnClicked(false);
    setGeneratedPassword(generatePassword(constraints, sliderValue));
  };

  const handleCopyBtnClick = () => {
    setIsCopyBtnClicked(true);
    if (navigator) navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <React.Fragment>
      <h1 className="title md-text">Password Generator</h1>
      <div className="container">
        <TextField
          onCopyBtnClick={handleCopyBtnClick}
          value={generatedPassword}
          isCopied={isCopyBtnClicked}
        />
        <Slider
          value={sliderValue}
          titleText="Character Length"
          min={0}
          max={16}
          handleOnChange={handleOnSliderChange}
        />
        <div className="checkboxes">
          {checkboxes.map(({ id, text }) => (
            <Checkbox
              onChange={(e: any) => handleOnCheckboxClick(id, e.target.checked)}
              text={text}
              isChecked={constraints[id]}
            />
          ))}
        </div>
        <Indicator strength={strength} />
        <Button
          disabled={
            sliderValue === 0 ||
            !Object.entries(constraints).some(([constraint, value]) => value)
          }
          text="Generate"
          onClick={handleOnGenerateBtnClick}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
