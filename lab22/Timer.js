// components/Timer.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View>
            <Text>Seconds: {seconds}</Text>
        </View>
    );
};

export default Timer;
