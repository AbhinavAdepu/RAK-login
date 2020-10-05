import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Button style={styles.login} mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      <div style={{ color: '#fff' }}>Login With User ID</div>

    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
      style={styles.register}
    >
      <div style={{ color: '#fff', fontSize: '12px' }}>Register</div>
    </Button>
  </Background>
);

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#3b383c',
    color: '#fff',
    borderRadius: '20px',
    position: 'fixed',
    bottom: '20%',
    width: '70%'
  },
  register: {
    width: '30%',
    marginVertical: 10,
    position: 'fixed',
    borderRadius: '20px',
    border: '1ps solid #fff',
    right: 0,
    top: 0,
    backgroundColor: '#f0305b',
    color: '#fff !important',
    fontSize: '12px',
    marginRight: '12px'
  },
});

export default memo(HomeScreen);
