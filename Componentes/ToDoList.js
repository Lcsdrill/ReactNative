import {useNavigation} from '@react-navigation/native';
import { FlatList } from 'react-native/types';
import TodoItem from './ToDoItem';

const TodoList = ({itens, trocaEstado, deleta}) => {
    const navigation = useNavigation();
    const navegaAddTarefa = () => {
        navigation.navigate('addTarefa');
    };
    return (
        <view style={styles.container}>
            <FlatList
                data={itens}
                renderItem={({ item }) => (
                    <TodoItem Item={item} trocaEstado={trocaEstado} deleta={deleta} />
                )}
                keyextractor= {item => item.id}
                />
                <button title="Adicionar Tarefa" onProgress={navegaAddTarefa}></button>
        </view>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
})

export default TodoList;