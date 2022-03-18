export interface Colors {
  readonly bg: string;
  readonly primary: string;
  readonly primaryLight: string;
  readonly secondary: string;
  readonly secondaryLight: string;
  readonly white: string;
  readonly black: string;
  readonly grey0: string;
  readonly grey1: string;
  readonly grey2: string;
  readonly grey3: string;
  readonly grey4: string;
  readonly grey5: string;
  readonly greyOutline: string;
  readonly searchBg: string;
  readonly success: string;
  readonly warning: string;
  readonly error: string;
  readonly disabled: string;
  readonly divider: string;
}

const colors: Colors = {
  bg: "#F1F5F8",
  primary: "#FF6B19",
  primaryLight: "#FF9B00",
  secondary: "#FF3F72",
  secondaryLight: "#FFE4EB",
  white: "#ffffff",
  black: "#2C2B43",
  grey0: "#525166",
  grey1: "#787887",
  grey2: "#C5C9D5",
  grey3: "#D9DCE6",
  grey4: "#F0F2F8",
  grey5: "#e1e8ee",
  greyOutline: "#bbb",
  searchBg: "#303337",
  success: "#1FBA5D",
  error: "#FF4242",
  warning: "#F89F4D",
  disabled: "hsl(208, 8%, 90%)",
  divider: "#bcbbc1",
};

export default colors;
