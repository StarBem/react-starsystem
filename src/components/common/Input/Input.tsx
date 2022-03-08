import React, { useRef, InputHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderNode, pathWebProps, StarFunctionComponent } from "../../helpers";
import { colors, ThemeProps } from "../../config";
import * as L from "./styles";

const renderText = (content: any, defaultProps: any, style: object) =>
  renderNode(L.InputText, content, {
    ...defaultProps,
    style: { ...style, ...(defaultProps && defaultProps.style) },
  });

export type InputProps = InputHTMLAttributes<any> & {
  containerStyle?: React.CSSProperties;
  disabled?: boolean;
  disabledInputStyle?: React.CSSProperties;
  inputContainerStyle?: React.CSSProperties;
  leftIcon?: React.ReactElement<{}>;
  leftIconContainerStyle?: React.CSSProperties;
  rightIcon?: React.ReactElement<{}>;
  rightIconContainerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  errorProps?: object;
  errorStyle?: React.CSSProperties;
  errorMessage?: string;
  label?: string | React.ReactNode;
  labelColor?:
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
    | "error";
  labelStyle?: React.CSSProperties;
  labelProps?: object;
  renderErrorMessage?: boolean;
  value?: string;
};

export const Input: StarFunctionComponent<
  InputProps & Partial<ThemeProps<InputProps>>
> = ({
  containerStyle,
  disabled = false,
  disabledInputStyle,
  inputContainerStyle,
  leftIcon,
  leftIconContainerStyle,
  rightIcon,
  rightIconContainerStyle = {},
  inputStyle = {},
  errorProps = {},
  errorStyle = {},
  errorMessage,
  label,
  labelColor,
  labelStyle,
  labelProps,
  theme,
  renderErrorMessage = true,
  value,
  ...props
}) => {
  const input = useRef<any>(null);

  const hideErrorMessage = !renderErrorMessage && !errorMessage;

  return (
    <L.Container>
      {label &&
        renderText(
          label,
          { style: labelStyle, ...labelProps },
          {
            fontSize: 14,
            marginTop: 10,
            marginBottom: 4,
            color: labelColor ? colors[labelColor] : theme?.colors?.grey3,
          }
        )}
      <L.Content style={{ ...inputContainerStyle }}>
        {leftIcon && (
          <L.Icon style={{ ...leftIconContainerStyle }}>
            {renderNode(FontAwesomeIcon, leftIcon)}
          </L.Icon>
        )}
        <L.InputComponent
          disabled={disabled}
          ref={input}
          value={value}
          style={{
            color: theme?.colors?.black,
            fontSize: 14,
            minHeight: 40,
            ...inputStyle,
          }}
          {...pathWebProps(props)}
        />
        {rightIcon && (
          <L.Icon style={{ ...rightIconContainerStyle }}>
            {renderNode(FontAwesomeIcon, rightIcon)}
          </L.Icon>
        )}
      </L.Content>
      <L.ErrorMessage
        {...errorProps}
        style={{
          margin: hideErrorMessage ? 0 : 5,
          height: hideErrorMessage ? 0 : "auto",
          fontSize: 12,
          color: theme?.colors?.error,
          ...errorStyle,
        }}
      >
        {errorMessage}
      </L.ErrorMessage>
    </L.Container>
  );
};

Input.displayName = "Input";
