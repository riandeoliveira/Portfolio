import styled from "styled-components";
import { theme } from "styles/theme";

export const Modal = styled.div`
  background-color: ${theme.colors.purple};
  border-radius: 10rem;
  display: flex;
  flex-direction: column;
  gap: 18rem;
  left: 50%;
  outline: 0;
  padding: 24rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600rem;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-size: 24rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const Subtitle = styled.h5`
  font-size: 18rem;
`;