import styled from "styled-components/native";

export const Form = styled.View`
  margin-top: 32px;
  gap: 24px;
  
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.placeholderColor || '#000000',
}))`
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  border-width: 1px;
  border-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 12px;
`;
