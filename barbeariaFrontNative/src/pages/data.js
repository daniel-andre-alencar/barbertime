import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const Data = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleConfirm = () => {
    // Lógica para lidar com a data selecionada
    navigation.navigate('Hora', { selectedDate });
    console.log('Data selecionada:', selectedDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../imagens/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.caption}>Selecione uma Data</Text>

      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#FFFFFF', selectedTextColor: '#FFFFFF' },
          }}
          theme={{
            calendarBackground: 'transparent',
            dayTextColor: '#FFFFFF',
          }}
        />
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080B16',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
  },
  caption: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 100,
  },
  calendarContainer: {
    marginTop: 50,
    width: 320,
    height: 300,
    backgroundColor: '#890A1F',
    borderRadius: 20,
    overflow: 'hidden',
  },
  confirmButton: {
    backgroundColor: '#890A1F',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Data;
