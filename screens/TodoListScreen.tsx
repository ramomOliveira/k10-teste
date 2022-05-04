import * as React from 'react';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

export type Task = {
  title: string
  completed: boolean
}

export default function TodoListScreen() {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
}

function Task(props: { task: Task, index: number, onCompleted: (index: number) => void }) {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    }}>
      <Text style={{
        textDecorationLine: props.task.completed ? "line-through" : "none",
        marginRight: 20
      }}>
        {props.task.title}
      </Text>
      <Button onPress={() => (props.onCompleted(props.index))} title={props.task.completed ? "Undone" : "Done"} />
    </View >
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
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
  ]);

  const AddTask = (title: string) => {
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
      <TextInput
        style={{ backgroundColor: '#ffffff', padding: 10, color: '#000000' }}
        value={value}
        placeholder="Add a new task"
        onChangeText={e => setValue(e)}
      />
      <Button onPress={handleSubmit} title={"Add"} />
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
