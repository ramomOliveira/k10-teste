import { TextProps, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native'

interface IPropsTextTask extends TextProps {
  completed: boolean
}

interface IPropsButtonDone extends TouchableOpacityProps {
  isDone: boolean
}

export const ButtonAdd = styled.TouchableOpacity`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  color: #fff;
  background-color: #00a000;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

export const TaskLine = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

`;

export const TextTask = styled.Text<IPropsTextTask>`
  text-decoration: ${props => props.completed ? "line-through" : "none"};
  margin-right: 20px;
  font-size: 18px;
`;

export const ButtonDone = styled.TouchableOpacity<IPropsButtonDone>`
  width: 100px;
  padding: 12px;
  border-radius: 10px;
  color: #fff;
  background-color: ${props => props.isDone ? "#cc0000" : "#120a8f"};
`;

export const TextInputTask = styled.TextInput`
  background-color: #ffffff;
  padding: 10px;
  color: #000000;
  border-radius: 10px;
  margin-bottom: 10px;
  border: 1px solid #BDBDBD;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Wrapper = styled.View`
  display: flex;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  height: 100%;
  justify-content: flex-start;
`;