import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title: 'My Books List'
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkblue',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Header;
