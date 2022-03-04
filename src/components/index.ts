import Button, { ButtonProps } from "./Button";

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
export { Button };

// Export Theme utils
export { colors, ThemeProvider, ThemeConsumer, ThemeContext, withTheme };

// Components Props Exports
export type { ButtonProps, Colors };

// Theme Props Exports
export type { FullTheme, ReplaceTheme, Theme, ThemeProps, UpdateTheme };
