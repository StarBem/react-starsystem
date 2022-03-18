import styled from "styled-components";
import { colors } from "../../config";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.bg};
`;

export const LeftContent = styled.div`
  display: flex;
  padding-left: 20px;
`;

export const RightContent = styled.div`
  display: flex;
  padding-right: 20px;
`;

export const Logo = styled.img`
  width: 164px;
  height: 32.67px;
  resize: contain;
`;
