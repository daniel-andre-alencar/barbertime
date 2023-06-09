/*import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Voltar = () => {
  const navigation = useNavigation();

  const handleVoltarInicio = () => {
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.page}>
      <View style={styles.logoContainer}>
        <img
          src={require('../imagens/gif.gif')}
          alt="GIF"
          style={styles.gif}
        />
      </View>
      <TouchableOpacity style={styles.voltarInicioButton} onPress={handleVoltarInicio}>
        <Text style={styles.btnText}>Voltar para o Início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080B16',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  gif: {
    width: 225,
    height: 225,
  },
  voltarInicioButton: {
    width: 282,
    height: 49,
    backgroundColor: '#890A1F', // Cor vermelha como exemplo
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
};

export default Voltar;
 */