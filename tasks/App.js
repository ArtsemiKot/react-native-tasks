import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tasks from './src/Tasks/Tasks';
import Task1 from './src/Task1/Task1';
import Task2 from './src/Task2/Task2';
import Task3 from './src/Task3/Task3';
import Task4 from './src/Task4/Task4';
import Task5 from './src/Task5/Task5';
import Task6 from './src/Task6/Task6';
import Task7 from './src/Task7/Task7';
import Task8 from './src/Task8/Task8';
import Task9 from './src/Task9/Task9';
import Task10 from './src/Task10/Task10';
import Task11 from './src/Task11/Task11';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tasks">
      <Stack.Screen name="Tasks" component={Tasks} />
      <Stack.Screen name="Task1" component={Task1} />
      <Stack.Screen name="Task2" component={Task2} />
      <Stack.Screen name="Task3" component={Task3} />
      <Stack.Screen name="Task4" component={Task4} />
      <Stack.Screen name="Task5" component={Task5} />
      <Stack.Screen name="Task6" component={Task6} />
      <Stack.Screen name="Task7" component={Task7} />
      <Stack.Screen name="Task8" component={Task8} />
      <Stack.Screen name="Task9" component={Task9} />
      <Stack.Screen name="Task10" component={Task10} />
      <Stack.Screen name="Task11" component={Task11} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}