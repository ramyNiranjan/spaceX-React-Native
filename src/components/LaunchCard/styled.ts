/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import layout from '../../theme/Layout';

export const Container = styled(TouchableOpacity)`
  background: #408080;
  width: ${layout.width};
  height: ${layout.height * 0.4};
`;

export const Cover = styled.View`
  width: 100%;
  height: 50%;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  height: 60px;
  background-color: #ddd;
  padding: 5px;
`;

export const Title = styled.Text`
  color: #3c4560;
  font-size: 16px;
  font-weight: bold;
`;
export const Detail = styled.Text`
  color: #3c4560;
  font-size: 12px;
  font-weight: 300;
`;
export const TimeDate = styled.Text`
  color: #008040;
  font-size: 14px;
  font-weight: 300;
`;
export const Divider = styled.View`
  border-bottom-color: red;
  border-bottom-width: 10px;
  border-style: solid;
`;

export const Success = styled.Text`
  color: blue;
  font-size: 15px;
  font-weight: 600;
  margin-top: -4px;
`;
