import styled from 'styled-components/native'

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

export const ButtonDone = styled.TouchableOpacity`
  width: 100px;
  padding: 12px;
  border-radius: 10px;
  color: #fff;
  background-color: #120a8f;
`;

export const TextInputTask = styled.TextInput`
  background-color: #ffffff;
  padding: 10px;
  color: #000000;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;