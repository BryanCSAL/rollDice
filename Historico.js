import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useHistorico } from './HistoricoContext';

export default function Historico() {
  const { historico } = useHistorico();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico Global</Text>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        {historico.length === 0 ? (
          <Text style={styles.empty}>Nenhuma rolagem feita ainda.</Text>
        ) : (
          historico.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.dado}>{item.dado}</Text>
              <Text>{`Resultado: ${item.valor}`}</Text>
              <Text style={styles.time}>{item.timestamp}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 40, // espaço extra no fim
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  empty: {
    fontStyle: 'italic',
    color: 'gray',
    textAlign: 'center',
  },
  item: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  dado: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
});
