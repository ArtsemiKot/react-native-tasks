import { useState } from "react";
import { Button, View, Text } from "react-native";

function Task2() {
    const [date, setDate] = useState(['Comp1', 'Comp2', 'Comp3', 'Comp4'])
    const [open, setOpen] = useState(false)
    const [text, setText] = useState('Text')
    function clickButton() {
        if (!open) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }
    return (
        <>
            <Text>2. Создайте компонент выпадающего списка, который позволяет выбрать одно из нескольких заранее определённых значений параметра.</Text>
            <Button title={text} onPress={clickButton}></Button>
            <View>{open ? date.map((el) => <View><Text onPress={()=>setText(el)}>{el}</Text></View>) : null}</View>
        </>
    );
}

export default Task2;