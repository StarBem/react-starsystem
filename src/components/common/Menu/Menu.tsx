import React from "react";
import { renderNode, StarFunctionComponent } from "../../helpers";
import { colors } from "../../config";
import { Theme } from "../../config/theme";
import * as L from "./styles";

export type MenuProps = {
  containerStyle?: React.CSSProperties;
};

export const Menu: StarFunctionComponent<MenuProps> = ({
  containerStyle,
  ...props
}) => {
  return <L.Container style={{ ...containerStyle }}></L.Container>;
};

Menu.displayName = "Menu";
