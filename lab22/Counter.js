import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import useRandomColor from "./useRandomColor";

const Counter = () => {
    const color = useRandomColor()
 const [count, setCount] = useState(0);
 const increment = () => setCount(count + 1);
 const decrement = () => setCount(count - 1);
 return (
 <View style={{backgroundColor: color}}>
 <Text>Count: {count}</Text>
 <Button title="Increment" onPress={increment} color="pink" />
 <Button title="Decrement" onPress={decrement} color="blue" />
 </View>
 );
};
export default Counter;