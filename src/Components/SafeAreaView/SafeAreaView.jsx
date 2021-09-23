import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SafeAreaView = ({children}) => {
    return ( 
        <View style={styles.container}>
            {children}
        </View>
     );
}
 
export default SafeAreaView;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#22272E',
      padding:40,
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });