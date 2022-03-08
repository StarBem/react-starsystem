import Button, { ButtonProps } from "./common/Button";
import Input, { InputProps } from "./common/Input";
import Layout, { LayoutProps } from "./common/Layout";

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
export { Button, Input, Layout };

// Export Theme utils
export { colors, ThemeProvider, ThemeConsumer, ThemeContext, withTheme };

// Components Props Exports
export type { ButtonProps, InputProps, LayoutProps, Colors };

// Theme Props Exports
export type { FullTheme, ReplaceTheme, Theme, ThemeProps, UpdateTheme };
