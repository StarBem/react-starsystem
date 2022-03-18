import Button, { ButtonProps } from "./common/Button";
import Input, { InputProps } from "./common/Input";
import Menu, { MenuProps } from "./common/Menu";
import Header, { HeaderProps } from "./common/Header";

import {
  Colors,
  colors,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  UpdateTheme,
  ReplaceTheme,
  FullTheme,
  Theme,
  ThemeProps,
} from "./config";

// Export Components
export { Button, Input, Menu, Header };

// Export Theme utils
export { colors, ThemeProvider, ThemeConsumer, ThemeContext, withTheme };

// Components Props Exports
export type { ButtonProps, InputProps, HeaderProps, MenuProps, Colors };

// Theme Props Exports
export type { FullTheme, ReplaceTheme, Theme, ThemeProps, UpdateTheme };
