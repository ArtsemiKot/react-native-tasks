import { useState } from "react";
import { Button, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function Task1() {
    const [inp, setInp] = useState({})

    const isCheck = (e) => {
        setInp({ ...inp, [e.target.name]: e.target.value })
    }
    const isShowLog =()=>{
        console.log(inp);
    }

    return (
        <>
            <Text>1. Реализуйте форму для ввода почты и пароля. По клику на кнопку получите данные из полей ввода с использованием useState. Напишите для их валидацию. В cлучае успешного ввода отобразите в console.log сообщение "success".</Text>
            <TextInput placeholder="email" onChange={isCheck}></TextInput>
            <TextInput placeholder="password" onChange={isCheck}></TextInput>
            <Button title="Click me" onPress={isShowLog}></Button>
        </>
    );
}

export default Task1;