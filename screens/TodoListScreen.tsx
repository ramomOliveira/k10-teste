import * as React from 'react';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, TextInput, } from 'react-native';
import { Text, View } from '../components/Themed';
import { ButtonAdd, ButtonText, TaskLine, ButtonDone, TextInputTask, Container } from '../styles/style-todoListScreen';

export type Task = {
  title: string
  completed: boolean
}

export default function TodoListScreen() {
  return (
    <Container>
      <Todo />
    </Container>
  );
}

function Task(props: { task: Task, index: number, onCompleted: (index: number) => void }) {
  return (
    <TaskLine >
      <Text style={{
        textDecorationLine: props.task.completed ? "line-through" : "none",
        marginRight: 20
      }}>
        {props.task.title}
      </Text>

      <ButtonDone onPress={() => (props.onCompleted(props.index))} >
        <ButtonText>{props.task.completed ? "Undone" : "Done"}</ButtonText>
      </ButtonDone>
    </TaskLine >
  );
}

function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: false
    }

  ]);

  const AddTask = async (title: string) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);

  };

  const CompleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <View style={{
      display: 'flex',
      width: '90%',
      height: '100%',
      justifyContent: 'flex-start',

    }}>
      <ScrollView>
        {tasks.map((task, index) => (
          <Task
            onCompleted={CompleteTask}
            task={task}
            index={index}
            key={index}
          />
        ))}
      </ScrollView>
      <View>
        <CreateTask AddTask={AddTask} />
      </View>
    </View>
  );
}

function CreateTask(props: { AddTask: (value: string) => void }) {
  const [value, setValue] = useState("");


  const handleSubmit = () => {
    if (!value) return;
    props.AddTask(value);
    setValue("");
  }


  return (
    <View>
      <TextInputTask
        value={value}
        placeholder="Add a new task"
        onChangeText={e => setValue(e)}
      />
      <ButtonAdd onPress={handleSubmit}>
        <ButtonText>Add</ButtonText>
      </ButtonAdd>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
