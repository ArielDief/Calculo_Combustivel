import { useState } from 'react';
import { TextInput, View, Button, StyleSheet, Text} from 'react-native';

export default function Home({ navigation }) {
    const [kilometro,setKilometro] = useState();
    const [gasolina,setGasolina] = useState();

    const nKilometro = parseFloat(kilometro);
    const nGasolina = parseFloat(gasolina);

 return (
   <View style={styles.container}>
    <Text style={styles.text}>Calculo de consumo de gasolina</Text>
    <TextInput
        style={styles.textInput}
        value={kilometro}
        onChangeText={setKilometro}
        placeholder='Quilometragem percorrida (Km)'
        keyboardType='numeric'
    />
    <TextInput
        style={styles.textInput}
        value={gasolina}
        onChangeText={setGasolina}
        placeholder='Gasolina consumida (L)'
        keyboardType='numeric'
    />
    <Button
        color='black'
        title='Calcular'
        onPress={() => navigation.navigate("Details", {gasolina: nGasolina, km: nKilometro})}
    />
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textInput: {
        width: '45%',
        borderRadius: 10,
        borderWidth: 3,
        marginBottom: 25,
        padding: 20,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        
    },
})