import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  background-color: #A7D3FF;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  flex: 1;
`;

export const ContInterfaceTop = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ContInterfaceMid = styled.View`
  flex-direction: row;
  gap: 0px;
  justify-content: center;
  align-items: flex-start;
`
export const ContainerRDP = styled.View`
  width: 100%;
  padding: 12px 20px;

  background-color: #000000;

  flex-direction: row;
  justify-content: flex-end;

  position: absolute;
  bottom: 47px;
  left: 0px;
  right: 0px;
`