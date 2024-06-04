import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Task4() {
    const [val1, setVal1] = useState();
    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', gap: 15, padding: 10 }}>
                <Text>4. Создайте компонент простого калькулятора, который выполняет команды: +, -, *, /</Text>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => (
                        <Text style={{ backgroundColor: 'pink', padding: 10 }} key={i}>
                            {el}
                        </Text>
                    ))}
                </View>

                <View style={{ flexDirection: 'row', gap: 10 }}>
                    {['+', '-', '/', '*'].map((el, i) => (
                        <Text style={{ backgroundColor: 'pink', padding: 10 }} key={i}>
                            {el}
                        </Text>
                    ))}
                </View>

                <Button title='='></Button>
            </View>
        </>
    );
}

export default Task4;