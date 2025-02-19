import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '#fff',
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor });
    Alert.alert(newMessage);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <ButtonComponent backgroundColor="green" message="Green button clicked!" onClick={this.handleButtonClick} colorChange="#32CD32"/>
        <ButtonComponent backgroundColor="blue" message="Blue button clicked!" onClick={this.handleButtonClick} colorChange="#0a28ff"/>
        <ButtonComponent backgroundColor="brown" message="Brown button clicked!" onClick={this.handleButtonClick} colorChange="#721c03"/>
        <ButtonComponent backgroundColor="yellow" message="Yellow button clicked!" onClick={this.handleButtonClick} colorChange="#ffff0a"/>
        <ButtonComponent backgroundColor="red" message="Red button clicked!" onClick={this.handleButtonClick} colorChange="#FF6347"/>
        <ButtonComponent backgroundColor="black" message="Black button clicked!" onClick={this.handleButtonClick} colorChange="#000000"/>
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

class TitleComponent extends Component {
  render() {
    const { title, color } = this.props;
    return <Text style={[styles.title, { color: color }]}>{title}</Text>;
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange)}
      >
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;