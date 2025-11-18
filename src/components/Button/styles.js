import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ primary, disabled }) => disabled ? '#999' : primary ? '#FA824C' : '#FFF'};
  border-color: ${({ disabled }) => disabled ? '#999' : '#FA824C'};
  border-width: 1px;
  padding: 14px 24px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;