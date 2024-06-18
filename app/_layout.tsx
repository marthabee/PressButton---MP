import React from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, View } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('Hello!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Press me"
          onPress={handlePress}
          accessibilityLabel="Press this button to trigger an alert"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
});

export default App;
