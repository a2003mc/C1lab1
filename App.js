// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList'; // 确保路径正确

const App = () => {
  return (
    <View style={styles.container}>
      <ToDoList  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   width: '100%',
  },
});

export default App;
