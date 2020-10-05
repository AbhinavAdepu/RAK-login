import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import LogoWithoutBG from '../components/LogoWithoutBG';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton style={{ color: '#fff' }} goBack={() => navigation.navigate('HomeScreen')} />

      <LogoWithoutBG />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoFocus="true"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
        style={styles.register}
      >
        <div style={{ color: '#fff', fontSize: '12px' }}>Register</div>
      </Button>
      <Button mode="contained" style={styles.login} onPress={_onLoginPressed}>
        <div style={{ color: '#fff' }}>Submit</div>
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  register: {
    width: '30%',
    marginVertical: 10,
    position: 'fixed',
    borderRadius: '20px',
    borderColor: '#fff',
    border: '1px solid #fff',
    right: 0,
    top: 0,
    backgroundColor: '#f0305b',
    color: '#fff !important',
    fontSize: '12px',
    marginRight: '12px'
  },
  login: {
    backgroundColor: '#3b383c',
    color: '#fff',
    borderRadius: '20px',
    position: 'fixed',
    bottom: '20%',
    width: '60%'
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default memo(LoginScreen);
