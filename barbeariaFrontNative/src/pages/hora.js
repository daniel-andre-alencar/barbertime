import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Hora = () => {
  const horarios = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00'
  ];

  const navigation = useNavigation();
  const [horarioSelecionado, setHorarioSelecionado] = useState('');

  const selecionarHorario = (horario) => {
    setHorarioSelecionado(horario);
  };

  const agendarHorario = () => {
    if (horarioSelecionado) {
      // Faça algo com o horário selecionado, como enviar para o servidor ou armazenar localmente
      navigation.navigate('Reservar');
    } else {
      // Exiba uma mensagem de erro ou instrução para selecionar um horário antes de prosseguir
    }
  };

  const styles = StyleSheet.create({
    modalAgendamento: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#080B16',
    },
    titulo: {
      width: 200,
      height: 42,
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 28,
      lineHeight: 42,
      color: '#FFFFFF',
      marginBottom: 20,
    },
    agendar: {
      width: 250,
      height: 286,
      borderRadius: 8,
      borderColor: '#890A1F',
      marginTop: -200,
    },
    confirmar: {
      width: 250,
      height: 40,
      backgroundColor: '#6F0D1D',
      borderRadius: 8,
      alignSelf: 'center',
      marginTop: 70,
    },
    confirmarText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
      textAlign: 'center',
    },
    tituloHorario: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      color: '#FFFFFF',
    },
    horario: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 30,
    },
    inputHorario: {
      flexBasis: '50%',
      height: 37,
      backgroundColor: '#080B16',
      borderWidth: 1,
      borderColor: '#890A1F',
      borderRadius: 8,
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    inputHorarioSelecionado: {
      backgroundColor: '#6F0D1D',
    },
    horarioText: {
      color: '#FFFFFF',
    },
    imagem: {
      width: 200,
      height: 200,
      marginBottom: 190,
    },
    espacoVertical: {
      height: 20,
    },
  });

  return (
    <View style={styles.modalAgendamento}>
      <Image
        source={require('../imagens/logo.png')}
        style={styles.imagem}
      />

      <View style={styles.agendar}>
        <Text style={styles.tituloHorario}>Selecione um horário</Text>

        <View style={styles.horario}>
          {horarios.map((horario, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.inputHorario,
                horario === horarioSelecionado && styles.inputHorarioSelecionado,
              ]}
              onPress={() => selecionarHorario(horario)}
            >
              <Text style={styles.horarioText}>{horario}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.confirmar}
        onPress={agendarHorario}
      >
        <Text style={styles.confirmarText}>Agendar horário</Text>
      </TouchableOpacity>

      <View style={styles.espacoVertical} />
    </View>
  );
};

export default Hora;
