import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface BreedCardProps {
  breed: string;
  imageUrl: string;
  onPress: () => void;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed, imageUrl, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <Text style={styles.text}>{breed}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { margin: 8, padding: 16, backgroundColor: '#fff', borderRadius: 8 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  text: { marginTop: 8, fontSize: 18, fontWeight: 'bold' },
});

export default BreedCard;
