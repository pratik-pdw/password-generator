import { Constraints } from "../constants/enums";
import { PasswordConstraints } from "../constants/types";

const charset: Record<Constraints, string> = {
  [Constraints.UPPERCASE]: "QWERTYUIOPASDFGHJKLZXCVBNM",
  [Constraints.LOWERCASE]: "qwertyuiopasdfghjklzxcvbnm",
  [Constraints.SYMBOLS]: "!@#$%^&*()_-~`?<>",
  [Constraints.NUMBERS]: "0123456789",
};

export function generatePassword(
  constraints: PasswordConstraints,
  length: number
): string {
  if (length === 0) return "";

  const password = new Set();
  const validCharset: any = {};

  let count = 0;

  for (let key in constraints) {
    //@ts-ignore
    if (constraints[key]) {
      //@ts-ignore
      validCharset[count++] = charset[key];
    }
  }

  // to make sure we have atleast each char from the constraint
  for (let key in validCharset) {
    const charIdx = Math.floor(Math.random() * validCharset[key].length);
    const char = validCharset[key][charIdx];
    password.add(char);
  }

  while (password.size !== length) {
    const key = Math.floor(Math.random() * Object.keys(validCharset).length);
    const charIdx = Math.floor(Math.random() * validCharset[key].length);
    const char = validCharset[key][charIdx];
    password.add(char);
  }

  return [...password].sort(() => Math.random() - Math.random()).join("");
}
