import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Componentes/Header';
import TodoList from './Componentes/ToDoList';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import {createStackNavigator } from './node_modules/@react-navigation/native'
import TelaAddTarefa from './Telas/addTarefa';
import TelaLogin from './Telas/login';
import TelaAddUser from './Telas/addUser';

const Stack = createStackNavigator(); 
export default function App() {
  const [tarefas, setTarefas] = useState([
    {id: 1, text: 'Estudar React Native', completado: false},
    {id: 2, text: 'Fazer Exercicios', completado: false},
    {id: 3, text: 'Ler um livro', completado: false},
  ]);
  const deleta = (tarefaId) => {
    setTarefas((Tarefas) => {
      let novasTarefas = Tarefas.filter((item) => item.id !==tarefaId)
      return novasTarefas
    })
  }
  const trocaEstado = (tarefaId) => {
    setTarefas((Tarefas) => 
    {
      let novasTarefas = Tarefas.map((item) =>
      item.id === tarefaId ? {... item, completado: !item.completado} : item)
      return novasTarefas
    })
  }
  const adicionaTarefa = (text) => {
    setTarefas((Tarefas) => [
      ...Tarefas,
      { id: Date.now(), text: text, completed: false},
    ]);
  
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          options={{ headerShown: false}}
          name="Login"
          component={TelaLogin}
        />
        <Stack.Screen name="Home" options={{ headerShown: false}}>
          {() => (  
    <View style={styles.container}>
      <Header />
      <TodoList itens={tarefas} trocaEstado={trocaEstado} deleta={deleta} />
      <StatusBar style="auto"/>
    </View>
  )}
  </Stack.Screen>
  <Stack.Screen
    options={{ headerShown: false}}
    name="addUser"
    component={TelaAddUser}
  />
  <Stack.Screen
    options={{ headerShown: false }}
    name="addTarefa"
    componet={TelaAddTarefa}
    initialParams={{ addTarefa: adicionaTarefa }}>
    </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
