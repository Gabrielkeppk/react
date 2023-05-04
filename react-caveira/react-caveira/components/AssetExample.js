import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       
      </Text>
      <Image style={styles.logo} source={require('../vector-mexican-skull-collection-vector-eps-svg-thumbnail.jpg')} />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
     backgroundColor: "black"
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  logo: {
    height: 228,
    width: 299,
  }
  
});
