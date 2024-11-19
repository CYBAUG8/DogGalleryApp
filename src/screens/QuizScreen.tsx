// src/screens/QuizScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import QuizOption from '../components/QuizOption';

const QuizScreen: React.FC = () => {
  const [question, setQuestion] = useState<string>('Which breed is this?');
  const [image, setImage] = useState<string>('https://random.dog/image.jpg'); // Replace with real API logic
  const [options, setOptions] = useState<string[]>(['Beagle', 'Labrador', 'Poodle', 'Husky']);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
    // Fetch the next question...
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      {options.map((option, index) => (
        <QuizOption
          key={index}
          option={option}
          isCorrect={option === 'Labrador'}
          onSelect={handleAnswer}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  question: { fontSize: 24, marginBottom: 16 },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 16 },
});

export default QuizScreen;
