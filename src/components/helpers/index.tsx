import renderNode from "./renderNode";
import { ThemeProps } from "../config";

export type StarFunctionComponent<T> = React.FunctionComponent<
  T & Partial<ThemeProps<T>>
>;

export { renderNode };
