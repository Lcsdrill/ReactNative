import react, {useState} from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Header from "./Header";
import { DateTimePicker } from "@react-native-community/datetimepicker";
import { Platform } from "expo-modules-core";

const TelaAddTarefa = ({ navigation, route }) => {
    const [tarefa, setTarefa] = useState ({nome: '',descricao: '', data: new Date(date.now())});
    const [showDatePicker, setShowDatePicker] = useState(false)

    const adicionaTarefa = () => {
        route.params.addTarefa(tarefa);
        setTarefa({nome: '', descricao: '', data: new Date(Date.now())});
        navigation.goBack();
    };

    const saveDate = (event, value) => {
        setTarefa({...tarefa, data: value});
        if (Platform.OS === 'android') {
            setShowDatePicker(false);
        }
    }

    return (
        <view style={styles.container}>
            <Header />
            <TextInput
                style={styles.input}
                placeholder="Nome da Tarefa"
                value={tarefa.nome}
                onChangeText={(value) => setTarefa({...tarefa, nome: value})}
                />
                <TextInput
                    style={[styles.input, styles.description]}
                    placeholder="Descrição"
                    multiline={true}
                    value={tarefa.descricao}
                    onChangeText={(value) => setTarefa({...tarefa, descricao: value})}
                    />
                    {showDatePicker && (
                        <DateTimePicker
                        value={tarefa.data}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={saveDate}
                        style={styles.datePicker}
                        />
                    )}
                <Button title="Salvar" onPress={adicionaTarefa}/>
        </view>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    description: {
        height: 120
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        padding: 10,

    },
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
});

export default TelaAddTarefa;