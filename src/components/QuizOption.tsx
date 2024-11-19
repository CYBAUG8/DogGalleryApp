import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface QuizOptionProps {
  option: string;
  isCorrect: boolean;
  onSelect: (isCorrect: boolean) => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ option, isCorrect, onSelect }) => (
  <TouchableOpacity style={styles.option} onPress={() => onSelect(isCorrect)}>
    <Text style={styles.optionText}>{option}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  option: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default QuizOption;
