import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    marginBottom: 12,
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: '-11'
  },
});

export default memo(Logo);
