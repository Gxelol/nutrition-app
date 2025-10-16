import React from 'react';
import LoginPage from '../login';
import { StyleSheet } from 'react-native';

const HomePage: React.FC = () => {
  return (
    <>
      <LoginPage />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffffff',
  },
});

export default HomePage;