import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import barbeirosService from '../services/barbeirosService';

const Profissional = () => {
  const [barbeiro, setBarbeiros] = useState([]);

  useEffect(() => {
    async function fetchBarbeiros() {
      try {
        const response = await barbeirosService.getBarbeiro();
        console.log(response.data);
        setBarbeiros(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBarbeiros();
  }, []);

  const navigation = useNavigation();

  const handleImagePress = (imageName) => {
    navigation.navigate('Data');
    console.log('Imagem pressionada:', imageName);
  };

  return (
    <View style={styles.page}>
      <View style={styles.logoContainer}>
        <Image source={require('../imagens/logo.png')} style={styles.logo} />
        <Text style={styles.caption}>Selecione um Profissional</Text>
      </View>
      <ScrollView>
        <View style={styles.gallery}>
          {barbeiro.map((row, index) => {
            return (
              <TouchableOpacity onPress={() => handleImagePress(row.nome)} key={index}>
                <Image source={{ uri: row.imagem }} style={styles.image} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
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
  logoContainer: {
    marginTop: -60,
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  caption: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 1,
  },
  gallery: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 160,
    margin: 10,
    borderWidth: 2,
    borderColor: '#890A1F',
  },
});

export default Profissional;
