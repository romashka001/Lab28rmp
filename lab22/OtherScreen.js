import React, {useEffect, useRef} from 'react';
import {Animated, Button, Text, View} from 'react-native';

const OtherScreen = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    const startAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start(() => {
            animatedValue.setValue(0);
            startAnimation();
        });
    };

    useEffect(() => {
        startAnimation();
    }, []);

    const interpolatedScale = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [100, 300, 100],
    });

    return (
        <View>
            <Text>Some text here</Text>
            <Button title="Press me" onPress={startAnimation}/>
            <Animated.Image
                source={{uri: 'https://i.pinimg.com/564x/a4/a0/5a/a4a05a906fb3ec517ed69e0fb5d2ca54.jpg'}}
                style={{width: interpolatedScale, height: interpolatedScale}}
            />
        </View>
    );
};

export default OtherScreen;
