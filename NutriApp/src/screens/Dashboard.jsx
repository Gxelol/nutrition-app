import React from 'react';
import styles from '../styles/Dashboard.styles';
import { ThemeProvider, useTheme } from '../../contexts/ThemeContext';
import { View, Text, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Dashboard</Text>

      {/* Gráfico de Progresso */}
      <View style={styles.graphContainer}>
        <View style={styles.graph}></View>
      </View>

      <Text style={styles.sectionTitle}>Resumos</Text>

      {/* Resumo */}
      <View style={styles.summary}>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Calorias</Text>
          <Text style={styles.summaryValue}>1800 / 2200 kcal</Text>
        </View>
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Água</Text>
          <Text style={styles.summaryValue}>1.5L / 3L</Text>
        </View>
      </View>

      {/* Próximas Refeições */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Próximas Refeições</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Almoço</Text>
          <Text style={styles.cardText}>12:30 - 500 kcal</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Lanche da Tarde</Text>
          <Text style={styles.cardText}>15:30 - 200 kcal</Text>
        </View>
      </View>

      {/* Lembretes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lembretes</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Beber Água</Text>
          <Text style={styles.cardText}>A cada 2h</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 NutriApp</Text>
      </View>
    </ScrollView>
  );
}
