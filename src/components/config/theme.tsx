/* eslint-disable import/no-anonymous-default-export */
import { ButtonProps } from "../common/Button";

import colors, { Colors } from "./colors";

export default {
  colors,
};

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export interface FullTheme {
  Button: Partial<ButtonProps>;
  colors: RecursivePartial<Colors>;
}

export type Theme<T = {}> = Partial<FullTheme> & T;
export type UpdateTheme = (updates: RecursivePartial<FullTheme>) => void;
export type ReplaceTheme = (updates: RecursivePartial<FullTheme>) => void;
