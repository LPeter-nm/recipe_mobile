import { Text, View, StyleSheet, ScrollView, Animated, Image } from "react-native";
import { useEffect, useRef } from "react";

const About = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const AnimatedSection = ({ children, delay = 0 }) => {
    const sectionOpacity = useRef(new Animated.Value(0)).current;
    const sectionTranslate = useRef(new Animated.Value(10)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(sectionOpacity, {
          toValue: 1,
          duration: 600,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(sectionTranslate, {
          toValue: 0,
          duration: 700,
          delay,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);

    return (
      <Animated.View
        style={{
          opacity: sectionOpacity,
          transform: [{ translateX: sectionTranslate }]
        }}
      >
        {children}
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <AnimatedSection delay={200}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}><Image style={{width: 20, height: 20}}source={require('../../assets/images/cozimento.png')}/> Sobre nosso site</Text>
            <Text style={styles.text}>
              Bem-vindo ao mundo das receitas deliciosas! Nosso aplicativo foi criado para 
              tornar a culinária mais acessível para todos. Aqui você encontra 
              uma vasta coleção de receitas cuidadosamente selecionadas.
            </Text>
          </View>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}><Image style={{width: 20, height: 20}}source={require('../../assets/images/ferramentas.png')}/> Tecnologias</Text>
            <View style={styles.techList}>
              <View style={styles.techItem}>
                <Text style={styles.techName}>React Native</Text>
              </View>
              <View style={styles.techItem}>
                <Text style={styles.techName}>Expo Router</Text>
              </View>
              <View style={styles.techItem}>
                <Text style={styles.techName}>DummyJSON API</Text>
              </View>
            </View>
          </View>
        </AnimatedSection>
      </ScrollView>
    </View>
  );
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  section: {
    backgroundColor: '#ffffff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#e74c3c',
    paddingBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#495057',
    textAlign: 'justify',
  },
  techList: {
    marginTop: 15,
  },
  techItem: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  techName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
});