import colors, { Colors } from "./colors";
import colorsDark from "./colorsDark";
import ThemeProvider, {
  ThemeConsumer,
  ThemeContext,
  ThemeProps,
} from "./ThemeProvider";
import withTheme from "./withTheme";
import { Theme, FullTheme, UpdateTheme, ReplaceTheme } from "./theme";

export {
  colors,
  colorsDark,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
};
export type { Theme, FullTheme, UpdateTheme, ReplaceTheme, ThemeProps, Colors };
