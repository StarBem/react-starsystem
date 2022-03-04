import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { renderNode, StarFunctionComponent } from "../helpers";
import { colors } from "../config";
import { Theme } from "../config/theme";
import * as L from "./styles";

const defaultLoadingProps = (
  type: "solid" | "clear" | "outline",
  theme: Theme<ButtonProps> | undefined
): any => ({
  color: type === "solid" ? "white" : theme?.colors?.primary,
  size: "lg",
});

export type ButtonProps = {
  title?: string | React.ReactElement<{}>;
  titleStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  type?: "solid" | "clear" | "outline";
  loading?: boolean;
  loadingStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  disabled?: boolean;
  disabledStyle?: React.CSSProperties;
  disabledTitleStyle?: React.CSSProperties;
  raised?: boolean;
  rounded?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?:
    | "primary"
    | "primaryLight"
    | "secondary"
    | "secondaryLight"
    | "white"
    | "black"
    | "grey0"
    | "grey1"
    | "grey2"
    | "grey3"
    | "grey4"
    | "grey5"
    | "success"
    | "warning"
    | "error"
    | undefined;
  textColor?:
    | "primary"
    | "primaryLight"
    | "secondary"
    | "secondaryLight"
    | "white"
    | "black"
    | "grey0"
    | "grey1"
    | "grey2"
    | "grey3"
    | "grey4"
    | "grey5"
    | "success"
    | "warning"
    | "error"
    | undefined;
};

export const Button: StarFunctionComponent<ButtonProps> = ({
  containerStyle,
  onClick = () =>
    console.log("Please attach an onClick method to this component"),
  buttonStyle,
  type = "solid",
  loading = false,
  loadingStyle,
  disabled = false,
  disabledStyle = {},
  disabledTitleStyle = {},
  title = "",
  titleStyle: passedTitleStyle,
  raised = false,
  rounded = false,
  theme,
  variant = "secondary",
  textColor = "white",
  ...attributes
}) => {
  const handleOnClick = useCallback(
    (evt) => {
      if (!loading && !disabled) {
        onClick(evt);
      }
    },
    [loading, onClick, disabled]
  );

  const titleStyle = {
    color:
      type === "solid"
        ? (textColor && colors[textColor]) || "white"
        : (variant && colors[variant]) || theme?.colors?.primary,
    ...passedTitleStyle,
  };

  const loadingProps = {
    ...defaultLoadingProps(type, theme),
  };

  return (
    <L.Container style={{ ...containerStyle }}>
      <L.ButtonInternal
        onClick={handleOnClick}
        disabled={disabled}
        style={{
          ...buttonStyle,
          ...{
            backgroundColor:
              type === "solid"
                ? (variant && colors[variant]) || theme?.colors?.primary
                : "transparent",
            borderColor: variant ? colors[variant] : theme?.colors?.primary,
            borderWidth: type === "outline" ? 1 : 0,
            borderStyle: type === "outline" ? "solid" : "none",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.8 : 1,
            borderRadius: rounded ? 20 : 8,
          },
        }}
        {...attributes}
      >
        {loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            color={loadingProps.color}
            size={loadingProps.size}
            spin
          />
        )}
        {!loading &&
          !!title &&
          renderNode(L.ButtonText, title, {
            style: titleStyle,
          })}
      </L.ButtonInternal>
    </L.Container>
  );
};

Button.displayName = "Button";
