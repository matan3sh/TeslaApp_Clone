import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';

import styles from './styles';

const CarItem = ({ car }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={car.image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{car.name}</Text>
        <Text style={styles.subtitle}>
          {car.tagline} <Text style={styles.subtitleCTA}>{car.taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type='primary'
          content='custom order'
          onPress={() => {
            console.warn('Custom order was pressed');
          }}
        />
        <StyledButton
          type='secondary'
          content='existing inventory'
          onPress={() => {
            console.warn('Existing inventory was pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
