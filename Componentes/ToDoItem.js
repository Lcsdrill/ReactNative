import React, { useEffect, useRef, useState } from "react";
import { View,Text,TouchableOpacity,StyleSheet,Switch, LayoutAnimation, UIManager, Platform } from "react-native";
import { Animated } from "react-native-web";

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TodoItem = ({Item, trocaEstado,deleta}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current
  const expand = () => {
    LayoutAnimation.spring()
    setIsExpanded(!isExpanded)
  }
  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: item.completado ? 0.25 : 1, 
      duration: 1000,
      useNativeDriver: true,
    }).start(); 
  }, [item.completado])

    return (
      <Animated.View style={[styles.container, {opacity: animationValue}]}>
        <View style={styles.todoItem}>
            <Switch value={Item.completado}
                    onValueChange={() => trocaEstado(item.id)}>
            </Switch>
            <TouchableOpacity onPress={expand}>
              <Text style={item.completado ? styles.completedText : styles.text}>
                {item.tarefa.nome}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleta(item.id)}>
                <text style={styles.deleteButton}>Excluir</text>
            </TouchableOpacity>
        </View>
        {isExpanded && (
          <View>
            <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>&#8226; Data: </Text>{item.tarefa.data.toLocaleString().split('')[0]}</Text>
            <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>&#8226; Descrição: </Text>{item.tarefa.descricao}</Text> 
          </View>
        )}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#ededed',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#fff'
    },
    text: {
      fontSize: 18,
    },
    completedText: {
        fontSize: 18,
        textDecorationLine: 'line-throught',
        color: '#ccc'
      },
      deleteButton: {
        color: 'red',
        fontSize: 18,
      },
  });
  
  export default TodoItem;