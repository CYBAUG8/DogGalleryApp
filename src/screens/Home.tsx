import React, { useEffect } from 'react';
// CORRECT
import { Text } from 'react-native';
import { View, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs } from '../redux/dogsSlice';
import { RootState, AppDispatch } from '../redux/store';
import BreedCard from '../components/BreedCard';
import ShareButton from '../components/ShareButton';

const HomeScreen: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { breeds, loading } = useSelector((state: RootState) => state.dogs);

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  if (loading) return <View><Text>Loading...</Text></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={breeds}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <BreedCard
            breed={item}
            imageUrl={`https://via.placeholder.com/150?text=${item}`}
            onPress={() => alert(`${item} clicked!`)}
          />
        )}
      />
      <ShareButton message="Check out this dog breed!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default HomeScreen;
