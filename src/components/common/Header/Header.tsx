import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../Input";
import * as L from "./styles";

import defaultLogo from "../../../assets/images/logo-default.png";

export type HeaderProps = {};

export const Header = () => {
  return (
    <L.Container>
      <L.LeftContent>
        <L.Logo src={defaultLogo} />
        <Input
          inputContainerStyle={{ border: "none" }}
          // leftIcon={<FontAwesomeIcon icon={faSearch} color={} />}
        />
      </L.LeftContent>
      <L.RightContent></L.RightContent>
    </L.Container>
  );
};

Header.displayName = "Header";
