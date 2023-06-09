import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const Confirmar = () => {
  const handleSubmit = (servico) => {
    // Lógica para quando um serviço for selecionado
  };

  const handleConfirmar = () => {
    // Lógica para quando o botão de confirmar for pressionado
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../imagens/logo.png')} style={styles.logo} />
        <Text style={styles.logoText}>O seu Agendamento:</Text>
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.formButton} onPress={() => handleSubmit('Data')}>
          <Text style={styles.btnText}>Data:</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.formButton} onPress={() => handleSubmit('Unidade')}>
          <Text style={styles.btnText}>Unidade:</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.formButton} onPress={() => handleSubmit('Serviço')}>
          <Text style={styles.btnText}>Serviço:</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.formButton} onPress={() => handleSubmit('Profissional')}>
          <Text style={styles.btnText}>Profissional:</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.formButton} onPress={() => handleSubmit('Hora')}>
          <Text style={styles.btnText}>Hora:</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B16',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: -20,
  },
  logo: {
    width: 300,
    height: 300,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  formButton: {
    width: 282,
    height: 49,
    backgroundColor: 'transparent',
    borderColor: '#890A1F',
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  confirmButton: {
    width: 282,
    height: 49,
    backgroundColor: '#890A1F',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Confirmar;
