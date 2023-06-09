import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';

const Galeria = () => {
  const images = [
    { source: require('../imagens/barb1.jpg'), caption: 'Legenda 1' },
    { source: require('../imagens/barb1.jpg'), caption: 'Legenda 2' },
    { source: require('../imagens/barb1.jpg'), caption: 'Legenda 3' },
    { source: require('../imagens/barb1.jpg'), caption: 'Legenda 4' },
    { source: require('../imagens/barb1.jpg'), caption: 'Legenda 5' },
    { source: require('../imagens/barb1.jpg'), caption: 'Legenda 6' },
    // Adicione mais objetos de imagem aqui
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const handleDoubleTap = () => {
    if (selectedImage) {
      closeImage();
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.logoCaptionContainer}>
        <Image source={require('../imagens/logo.png')} style={styles.logo} />
        <Text style={styles.caption}>Sua legenda aqui</Text>
      </View>
      <ScrollView contentContainerStyle={styles.gallery}>
        {/* Loop para renderizar as imagens */}
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => !selectedImage && openImage(image)}
            activeOpacity={1}
            style={styles.imageContainer}
          >
            <Image source={image.source} style={styles.image} />
            <View style={styles.captionContainer}>
              <Text style={styles.captionText}>{image.caption}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedImage && (
        <View style={styles.overlay}>
          <Image source={selectedImage.source} style={styles.fullScreenImage} resizeMode="contain" />
          <TouchableOpacity style={styles.closeButton} onPress={closeImage}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      )}
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
  logoCaptionContainer: {
    marginTop: -65,
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
    alignItems: 'center',
    paddingBottom: 20, // Espaçamento inferior para a rolagem
  },
  imageContainer: {
    marginBottom: 20, // Espaço vertical entre as imagens
    width: 300, // Ajuste a largura do container de imagem
    height: 300, // Ajuste a altura do container de imagem
  },
  image: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#890A1F',
  },
  captionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
  },
  captionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  fullScreenImage: {
    width: '90%', // Ajuste o tamanho da imagem em tela cheia conforme desejado
    height: '90%', // Ajuste o tamanho da imagem em tela cheia conforme desejado
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    zIndex: 9999,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Galeria;
