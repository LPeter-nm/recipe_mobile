import { Text, View, StyleSheet, ScrollView, Animated, TouchableOpacity, Linking } from "react-native";
import { useEffect, useRef } from "react";

const About = () => {
  // Animações
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    // Animação de entrada
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const AnimatedSection = ({ children, delay = 0 }) => {
    const sectionOpacity = useRef(new Animated.Value(0)).current;
    const sectionTranslate = useRef(new Animated.Value(30)).current;

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
          transform: [{ translateY: sectionTranslate }]
        }}
      >
        {children}
      </Animated.View>
    );
  };

  const handleLinkPress = (url: any) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <Animated.View
          style={[
            styles.header,
            {
              opacity: fadeAnim,
              transform: [
                { translateY: slideAnim },
                { scale: scaleAnim }
              ]
            }
          ]}
        >
          <Text style={styles.title}>Sobre o App</Text>
          <View style={styles.decorativeLine} />
          <Text style={styles.subtitle}>Receitas Deliciosas</Text>
        </Animated.View>

        {/* Descrição Principal */}
        <AnimatedSection delay={200}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🍳 Sobre nosso site</Text>
            <Text style={styles.text}>
              Bem-vindo ao mundo das receitas deliciosas! Nosso aplicativo foi criado para 
              tornar a culinária mais acessível e divertida para todos. Aqui você encontra 
              uma vasta coleção de receitas cuidadosamente selecionadas para inspirar suas 
              aventuras culinárias.
            </Text>
          </View>
        </AnimatedSection>

       

        {/* Tecnologias */}
        <AnimatedSection delay={600}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🛠️ Tecnologias</Text>
            <Text style={styles.text}>
              Este aplicativo foi desenvolvido com as mais modernas tecnologias:
            </Text>
            <View style={styles.techList}>
              <View style={styles.techItem}>
                <Text style={styles.techName}>React Native</Text>
                <Text style={styles.techDescription}>Framework multiplataforma</Text>
              </View>
              <View style={styles.techItem}>
                <Text style={styles.techName}>Expo Router</Text>
                <Text style={styles.techDescription}>Navegação moderna</Text>
              </View>
              <View style={styles.techItem}>
                <Text style={styles.techName}>DummyJSON API</Text>
                <Text style={styles.techDescription}>Fonte de dados das receitas</Text>
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
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  decorativeLine: {
    width: 60,
    height: 3,
    backgroundColor: '#e74c3c',
    borderRadius: 2,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#6c757d',
    fontStyle: 'italic',
  },
  section: {
    backgroundColor: '#ffffff',
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  featuresList: {
    marginTop: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  featureIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#495057',
    flex: 1,
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
  techDescription: {
    fontSize: 14,
    color: '#f8f9fa',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  contactButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  versionText: {
    fontSize: 14,
    color: '#adb5bd',
  },
});