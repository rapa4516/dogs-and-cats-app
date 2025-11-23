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
  justify-content: space-between;
  align-items: center;
`
export const ContainerRDP = styled.View`
  width: 100%;
  padding: 12px 20px;

  background-color: #696969;
  border-top-width: 2px;
  border-top-color: #D3D3D3;

  flex-direction: row;
  justify-content: flex-end
`