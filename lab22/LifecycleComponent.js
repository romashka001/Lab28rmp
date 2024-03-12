// LifecycleComponent.js
import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    componentDidUpdate() {
        console.log('Component Did Update');
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should Component Update');
        // Add your custom logic for deciding whether the component should update
        return nextState.count % 2 === 0; // Render only when count is even
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        console.log('Render');
        return (
            <View >
                <Text>Component Lifecycle</Text>
                <Text>Count: {this.state.count}</Text>
                <Button title="Increment" onPress={this.handleIncrement} color="pink"/>
            </View>
        );
    }
}

export default LifecycleComponent;
