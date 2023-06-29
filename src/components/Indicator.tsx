import React from "react";

export enum Strength {
  TOO_WEAK = "TOO_WEAK",
  WEAK = "WEAK",
  MEDIUM = "MEDIUM",
  STRONG = "STRONG",
  EMPTY = "Empty",
}
enum StrengthClass {
  TOO_WEAK = "too-weak",
  WEAK = "weak",
  MEDIUM = "medium",
  STRONG = "strong",
}

enum StrengthTitle {
  TOO_WEAK = "TOO WEAK!",
  WEAK = "WEAK",
  MEDIUM = "MEDIUM",
  STRONG = "STRONG",
}

const strengthTitleMap = {
  [Strength.TOO_WEAK]: StrengthTitle.TOO_WEAK,
  [Strength.WEAK]: StrengthTitle.WEAK,
  [Strength.MEDIUM]: StrengthTitle.MEDIUM,
  [Strength.STRONG]: StrengthTitle.STRONG,
  [Strength.EMPTY]: "",
};

const strengthClassMap = {
  [Strength.TOO_WEAK]: StrengthClass.TOO_WEAK,
  [Strength.WEAK]: StrengthClass.WEAK,
  [Strength.MEDIUM]: StrengthClass.MEDIUM,
  [Strength.STRONG]: StrengthClass.STRONG,
  [Strength.EMPTY]: "",
};

interface IndicatorProps {
  strength: Strength;
}

export const Indicator = ({ strength = Strength.EMPTY }: IndicatorProps) => {
  return (
    <div className="indicator-wrapper">
      <h1 className="body-text text-grey">STRENGTH</h1>
      <div className="indicator">
        <h1 className="md-text text-almost-white">
          {strengthTitleMap[strength]}
        </h1>
        <div className={`strength ${strengthClassMap[strength]}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
