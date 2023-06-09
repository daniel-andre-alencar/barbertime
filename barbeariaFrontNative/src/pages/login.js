import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usuarioService from '../services/usuarioService';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    console.log(email, senha);

    usuarioService
      .loginUsuario(email, senha)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          Alert.alert('Bem-vindo!');
          setEmail('');
          setSenha('');
          setErrorMessage(''); // Limpar a mensagem de erro em caso de sucesso
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Email ou senha inválidos');
      });
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.wrapper}>
      <Image source={require('../imagens/logo.png')} style={styles.logo} />

      <View style={styles.contentLogin}>
        <Text style={styles.heading}>Entre Agora</Text>

        <View style={styles.boxLogin}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={(text) => setEmail(text)}
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua Senha"
            placeholderTextColor="#FFFFFF"
            secureTextEntry
            value={senha}
            onChangeText={(text) => setSenha(text)}
            required
          />
          {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#080B16',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: -10,
  },
  contentLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  errorMessage: {
    fontSize: 14,
    color: '#4125f7',
    margin: 0,
  },
  input: {
    padding: 20,
    fontSize: 14,
    borderWidth: 2,
    marginBottom: 20,
    marginTop: 5,
    color: '#FFFFFF',
    backgroundColor: '#',
    borderColor: '#890A1F',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    textAlign: 'left', // Alinha o texto à esquerda
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#890A1F',
    borderRadius: 4,
    paddingVertical: 5, // Reduz o espaço vertical interno
    paddingHorizontal: 10, // Reduz o espaço horizontal interno
    marginTop: 20,
    borderRadius: 10,
    height: 40,
    width: 70,
    top: 55,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
};

export default Login;
