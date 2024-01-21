import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AddTask from './AddTask.js'; 
import { v4 as uuidv4 } from 'uuid';

const ToDoList = ({ initialTasks }) => {
  const [toDos, setToDos] = useState(
    initialTasks.map(task => ({ id: uuidv4(), title: task }))
  );

  const addToDo = newTitle => {
    setToDos([...toDos, { id: uuidv4(), title: newTitle }]);
  };

  const removeToDo = id => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  return (
    
    <View style={styles.container}>
        <text style={styles.toDoTexts}>To Do List</text>
      {toDos.map(toDo => (
        <View key={toDo.id} style={styles.toDoItem}>
          <Text style={styles.toDoText}>{toDo.title}</Text>
          <Button title="delete" onPress={() => removeToDo(toDo.id)} color="pink" /> {/* 使用粉红色按钮 */}
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

ToDoList.defaultProps = {
    initialTasks: ['hello', 'bye',"123"] ,
};

const styles = StyleSheet.create({
  addTodoForm: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ToDoList;
