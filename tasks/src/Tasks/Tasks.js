import {Text, View } from 'react-native';

export default function Tasks({navigation}) {

    return (
        <View>
            <Text>Задания</Text>
            <Text onPress={()=>navigation.navigate('Task1')}>Задание 1</Text>
            <Text onPress={()=>navigation.navigate('Task2')}>Задание 2</Text>
            <Text onPress={()=>navigation.navigate('Task3')}>Задание 3</Text>
            <Text onPress={()=>navigation.navigate('Task4')}>Задание 4</Text>
            <Text onPress={()=>navigation.navigate('Task5')}>Задание 5</Text>
            <Text onPress={()=>navigation.navigate('Task6')}>Задание 6</Text>
            <Text onPress={()=>navigation.navigate('Task7')}>Задание 7</Text>
            <Text onPress={()=>navigation.navigate('Task8')}>Задание 8</Text>
            <Text onPress={()=>navigation.navigate('Task9')}>Задание 9</Text>
            <Text onPress={()=>navigation.navigate('Task10')}>Задание 10</Text>
            <Text onPress={()=>navigation.navigate('Task11')}>Задание 11</Text>

        </View>
    );
}
