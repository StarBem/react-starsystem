import renderNode from "./renderNode";
import { ThemeProps } from "../config";

export type StarFunctionComponent<T> = React.FunctionComponent<
  T & Partial<ThemeProps<T>>
>;

export const pathWebProps = <T extends Record<any, any>>({ ...rest }: T) => {
  return rest;
};

export { renderNode };
