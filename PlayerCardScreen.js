// src/PlayerCardScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlayerCardScreen = ({ name, image, position, stats }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.position}>{position}</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Points per Game: {stats.pointsPerGame}</Text>
        <Text style={styles.statsText}>Assists per Game: {stats.assistsPerGame}</Text>
        <Text style={styles.statsText}>Rebounds per Game: {stats.reboundsPerGame}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  position: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  statsContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  statsText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PlayerCardScreen;
