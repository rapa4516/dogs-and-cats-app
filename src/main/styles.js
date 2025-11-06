import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
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
export const ContainerRodape = styled.View`
  
`