import { Constraints } from "./enums";

export interface PasswordConstraints {
  [Constraints.UPPERCASE]: boolean;
  [Constraints.LOWERCASE]: boolean;
  [Constraints.NUMBERS]: boolean;
  [Constraints.SYMBOLS]: boolean;
}
