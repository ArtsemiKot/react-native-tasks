import { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
function Task8() {
    const [open, setOpen] = useState(false)

    function clickButton() {
        if (!open) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }
    const [num, setNum] = useState(0);

    function plusCount() {
        setNum(num + 1)
    }

    function minusCount() {
        setNum(num - 1)
    }

    function deleteCount() {
        setNum(0)
    }

    const [inp, setInp] = useState('')
    function changeInput(e) {
        setInp(e.target.value)
    }

    function isPalindrom() {
        if (inp === inp.split('').reverse().join('')) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

    function getData(e) {
        setInp(e.target.value);
    }

    useEffect(() => {
        console.log(inp);;
    }, [inp])
    return (
        <View>
                        <Text>Задача№1</Text>
            <Text>Сделай компонент выезжающего меню из 3 параграфов. по нажатию на кнопку ,,открыть,, отображаешь меню. </Text>
            <Button onPress={clickButton}>Открой меня</Button>
            <View>{open ? <View><Text>1</Text><Text>2</Text><Text>3</Text></View> : null}</View>

            <Text>Задача№2</Text>
            <Text>Дополните предыдущую задачу. Создайте компонент, который отображает счетчик и кнопку "Сброс". При нажатии на
                кнопку, счетчик должен сбрасываться в ноль. Используйте useState, чтобы управлять значением счетчика. </Text>
            <Button onPress={plusCount}>+1</Button>
            <Button onPress={minusCount}>-1</Button>
            <Button onPress={deleteCount}>Сброс</Button>
            <Text>{num}</Text>

            <Text>Задача№3</Text>
            <Text>Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
                данные из input и проверить вводимую строку на палиндром. Результат
                отображать в консоль</Text>
            <TextInput onChange={changeInput}></TextInput>
            <Button onPress={isPalindrom}>Нажми</Button>

            <Text>Задача№4</Text>
            <Text>Форма ввода с использованием useState и useEffect: Создайте компонент React, который содержит форму с полем ввода. Используйте
                хук useState для хранения значения введенного текста и хук useEffect для отслеживания изменений этого значения. При каждом
                изменении значения в поле ввода, выводить его в консоль с помощью useEffect</Text>
            <TextInput onChange={getData} value={inp}></TextInput>
        </View>
    );
}

export default Task8;