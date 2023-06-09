import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import unidadesService from '../services/unidadesService';


const Unidade = () => {

  const [unidade,setUnidades] = useState([]);

  useEffect(() => {
    async function fetchUnidades () {
    
    try {

      //const response = await axios.get('http://localhost:5000/api/salas');
      
      const response = await unidadesService.getUnidades();
      console.log(response.data)
      setUnidades(response.data);
    } catch (error) {
      console.error(error);
    }

    };
    fetchUnidades();
  },[]); 

  const navigation = useNavigation();

  const handleUnidade = () => {
    navigation.navigate('Servico');
  };

  return (
    <View style={styles.page}>
      <View style={styles.logoContainer}>
        <Image source={require('../imagens/logo.png')} style={styles.logo} />
        <Text style={styles.caption}>Selecione uma unidade</Text>
      </View>
      <View style={styles.formLogin}>
        {
          unidade.map((row,index)=>{
            return (
              <TouchableOpacity style={styles.UnidadeButton} onPress={handleUnidade}>
                <Text style={styles.btnText}>{row.unidade}</Text>
              </TouchableOpacity>
            );
          })
        }
     
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
  formLogin: {
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -200,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 200,
  },
  caption: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: -200,
  },
  UnidadeButton: {
    width: 282,
    height: 49,
    backgroundColor: 'transparent',
    borderColor: '#890A1F',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 15,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Unidade;
