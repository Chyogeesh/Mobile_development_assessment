// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import PlayerCardScreen from './src/PlayerCardScreen';

const App = () => {
  // Mock data for the player
  const player = {
    name: 'Michael Jordan',
    image: 'https://example.com/michael-jordan.jpg',
    position: 'Shooting Guard',
    stats: {
      pointsPerGame: 30.1,
      assistsPerGame: 5.3,
      reboundsPerGame: 6.2,
    },
  };

  return (
    <View style={styles.container}>
      <PlayerCardScreen
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
