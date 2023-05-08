import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, [getData]);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('todos');
      if (value !== null) {
        setTodos(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo = {
        id: Math.random().toString(),
        text: inputText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
      storeData([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    storeData(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    storeData(filteredTodos);
  };

  const renderItem = ({ item }) => (
    // <View onPress={() => toggleTodo(item.id)}>
      <View style={[styles.todo,{flexDirection: 'row'}]}>
        <View style={{flex: 1, alignItems: 'center', borderColor: 'red', borderWidth: 2}}>
          <Text>
            checkbox
          </Text>
        </View>
        <View style={{flex: 4, alignItems: 'center', borderColor: 'red', borderWidth: 2}}>
          <Text style={[styles.todoText, item.completed && styles.completedTodo]}>
            {item.text}
          </Text>
        </View>
        <View onPress={() => deleteTodo(item.id)} style={{flex: 1, alignItems: 'center', borderColor: 'red', borderWidth: 2}}>
          <TouchableOpacity onPress={() => deleteTodo(item.id)}>
            <Icon name="trash" size={50} color="#900" />
          </TouchableOpacity>
        </View>
      </View>
    // </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tambahkan todo"
          placeholderTextColor={'black'}
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Icon name="plus" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList style={{backgroundColor: 'white', marginTop: 2, height: 100}} data={todos} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    color: 'black'
  },
  addButton: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 44/2,
  },
  addButtonText: {
    color: 'white',
  },
  todo: {
    marginTop: 2,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black', 
    borderWidth: 2
  },
  delete: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 20
  }
});