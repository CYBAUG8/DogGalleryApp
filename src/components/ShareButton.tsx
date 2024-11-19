import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Share from 'react-native-share';

interface ShareButtonProps {
  message: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ message }) => {
  const handleShare = async () => {
    try {
      await Share.Button
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleShare}>
      <Text style={styles.text}>Share on WhatsApp</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { backgroundColor: '#25D366', padding: 16, borderRadius: 8, alignItems: 'center' },
  text: { color: '#fff', fontWeight: 'bold' },
});

export default ShareButton;
