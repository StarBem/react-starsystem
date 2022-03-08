import styled from "styled-components";
import { colors } from "../../config";

export const Container = styled.div`
  width: 100%;
  min-width: 0;
  height: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.grey3};
  border-radius: 8px;
  padding: 0 16px;
  background-color: ${colors.white};
`;

export const Icon = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 4px;
  margin: 0 4px;
`;

export const InputComponent = styled.input`
  display: flex;
  flex: 1;
  border: none;
  outline: none;
  color: ${colors.black};
  font-size: 14px;
  font-family: "Poppins", sans-serif;

  ::placeholder {
    color: ${colors.grey3};
  }
`;

export const ErrorMessage = styled.p`
  font-family: "Poppins", sans-serif;
`;

export const InputText = styled.div`
  margin-left: 16px;
`;
