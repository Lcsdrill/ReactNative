import {useNavigation} from './node_modules/@react-navigation/native';
import { FlatList } from './node_modules/react-native/types';
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