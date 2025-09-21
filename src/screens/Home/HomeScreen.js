import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/common/Header';
import AppConfig from '../../services/config';

const HomeScreen = () => {
  console.log('App Config:', AppConfig);

  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to CPAN 213</Text>
        <Text style={styles.description}>
          This is your properly structured React Native application.
        </Text>

        {/* ADD THESE LINES TO SEE ENV VARIABLES IN THE APP */}
        <Text style={styles.debugTitle}>Environment Variables:</Text>
        <Text style={styles.debugText}>App: {AppConfig.appName}</Text>
        <Text style={styles.debugText}>Version: {AppConfig.version}</Text>
        <Text style={styles.debugText}>API: {AppConfig.apiBaseUrl}</Text>
        <Text style={styles.debugText}>Student: {AppConfig.studentName}</Text>
        <Text style={styles.debugText}>ID: {AppConfig.studentId}</Text>
        <Text style={styles.debugText}>
          Debug Mode: {AppConfig.debugMode ? 'ON' : 'OFF'}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  // Added new styles to see the environment variables
  debugTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 15,
    textAlign: 'center',
  },
  debugText: {
    fontSize: 14,
    color: '#2c3e50',
    marginVertical: 2,
    textAlign: 'center',
  },
});

export default HomeScreen;
