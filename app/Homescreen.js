import React from 'react';
import {View, Text, Button} from 'react-native';

function Homescreen({navigation}) {
  return (
    <View style={{alignItems: 'center', marginTop: 100}}>
      <Button
        title="submit"
        onPress={() => {
          navigation.navigate('Videoshow');
        }}
      />
    </View>
  );
}

export default Homescreen;
