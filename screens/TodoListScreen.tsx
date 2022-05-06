import * as React from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { View } from '../components/Themed';
import { ButtonAdd, ButtonText, TaskLine, ButtonDone, TextInputTask, Container, TextTask, Wrapper } from '../styles/style-todoListScreen';

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
      <TextTask
        completed={props.task.completed}
      >
        {props.task.title}
      </TextTask>

      <ButtonDone
        isDone={props.task.completed}
        onPress={() => (props.onCompleted(props.index))}
      >
        <ButtonText>
          {props.task.completed ? "Undone" : "Done"}
        </ButtonText>
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
    <Wrapper>
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
    </Wrapper>
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

