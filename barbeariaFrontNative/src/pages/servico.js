import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import servicosService from '../services/servicosService';

const Servico = () => {
  const [servico, setServicos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchServicos() {
      try {
        const response = await servicosService.getServico();
        console.log(response.data)
        setServicos(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchServicos();
  }, []);

  const handleCorte = () => {
    // Lógica para lidar com o corte
  };

  const handleBarba = () => {
    // Lógica para lidar com a barba
  };

  const handleCombo = () => {
    // Lógica para lidar com o combo
  };

  const handleSobrancelha = () => {
    // Lógica para lidar com a sobrancelha
  };

  const handleConfirmar = () => {
    navigation.navigate('Profissional');
  };

  return (
    <View style={styles.page}>
      <View style={styles.logoContainer}>
        <Image source={require('../imagens/logo.png')} style={styles.logo} />
        <Text style={styles.caption}>Selecione um serviço</Text>
      </View>
      <View style={styles.formLogin}>
        {servico.map((row, index) => {
          return (
            <TouchableOpacity style={styles.button} onPress={handleCorte} key={index}>
              <Text style={styles.btnText}>{row.nome}</Text>
              <View style={styles.bola}>
                <View style={styles.innerBola}></View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmar}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080B16',
  },
  formLogin: {
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: -200,
  },
  logo: {
    width: 300,
    height: 300,
  },
  caption: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 282,
    height: 49,
    backgroundColor: 'transparent',
    borderColor: '#890A1F',
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  bola: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#890A1F',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10, // Posição à direita dos botões
  },
  innerBola: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#890A1F',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  confirmButton: {
    width: 150,
    height: 49,
    backgroundColor: '#890A1F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Servico;
