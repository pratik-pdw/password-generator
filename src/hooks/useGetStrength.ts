import { PasswordConstraints } from "./../constants/types";
import { useEffect, useState } from "react";
import { Strength } from "../components";

export const useGetStrength = (
  constraints: PasswordConstraints,
  sliderValue: number
): Strength => {
  const [strongness, setStrongness] = useState<number>(0);
  const [strength, setStrength] = useState<Strength>(Strength.EMPTY);

  useEffect(() => {
    const y = 20;
    let x = 0;
    const constraintTotal = Object.entries(constraints).reduce(
      (acc, [constraint, val]) => {
        if (val) acc = acc + 1;
        return acc;
      },
      0
    );
    x = constraintTotal + sliderValue;
    setStrongness(Math.floor((x / y) * 100));
  }, [constraints, sliderValue]);

  useEffect(() => {
    if (strongness === 0) setStrength(Strength.EMPTY);
    if (strongness > 0 && strongness <= 25) setStrength(Strength.TOO_WEAK);
    if (strongness > 25 && strongness <= 50) setStrength(Strength.WEAK);
    if (strongness > 50 && strongness <= 75) setStrength(Strength.MEDIUM);
    if (strongness > 75 && strongness <= 100) setStrength(Strength.STRONG);
  }, [strongness]);

  return strength;
};
