/* eslint-disable prettier/prettier */
// import {Button} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  padding: 10px;
`;

export const FloatingBTN = styled.TouchableOpacity`
  width: 100;
  height: 60;
  border-radius: 30;
  background-color: #008080;
  position: absolute;
  bottom: 10;
  right: 10;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18;
  color: #fff;
  font-weight: bold;
`;
