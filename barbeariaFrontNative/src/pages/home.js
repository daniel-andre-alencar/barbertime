import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleAgendarHorario = () => {
    navigation.navigate('Unidade');
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../imagens/logo.png')}
            style={styles.logo}
          />
          <Image
            source={require('../imagens/im.png')}
            style={styles.image}
          />
        </View>
      
        <TouchableOpacity style={styles.agendarButton} onPress={handleAgendarHorario}>
          <Text style={styles.btnText}>Agende seu horário</Text>
        </TouchableOpacity>
      </View>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 100,
    left: 0,
    right: 0,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  image: {
    width: 225,
    height: 225,
    marginBottom: 15,
  },
  agendarButton: {
    alignSelf: 'center',
    backgroundColor: '#890A1F',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home;
