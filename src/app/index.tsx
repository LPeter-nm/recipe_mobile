import { useRouter } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native'; // Adicionado Image
import { useEffect, useRef } from 'react';

const Index = () => {
  const router = useRouter();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const buttonSlideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(buttonSlideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const AnimatedButton = ({ title, onPress, style, delay = 0 }) => {
    const buttonScale = useRef(new Animated.Value(1)).current;
    const buttonOpacity = useRef(new Animated.Value(0)).current;
    const buttonTranslate = useRef(new Animated.Value(30)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 500,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(buttonTranslate, {
          toValue: 0,
          duration: 600,
          delay,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);

    return (
      <Animated.View
        style={[
          {
            opacity: buttonOpacity,
            transform: [
              { translateY: buttonTranslate },
              { scale: buttonScale }
            ]
          }
        ]}
      >
        <TouchableOpacity
          style={[styles.button, style]}
          onPress={onPress}
          activeOpacity={1}
        >    
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View style={{height: '100%', backgroundColor: 'rgb(255, 208, 0)'}}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.headerContainer,
              {
                transform: [
                  { translateY: slideAnim },
                  { scale: scaleAnim }
                ]
              }
            ]}
          >
            <Image
              source={require('../../assets/images/chefe-de-cozinha.png')} 
              style={styles.image} 
            />
            <Text style={styles.welcomeTitle}>Seja Bem-vindo</Text>
            <Text style={styles.subtitle}>Descubra receitas incríveis</Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.buttonsContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: buttonSlideAnim }]
              }
            ]}
          >
            <AnimatedButton
              title="🍳 Lista de Receitas"
              onPress={() => {
                Animated.timing(fadeAnim, {
                  toValue: 1,
                  duration: 200,
                  useNativeDriver: true,
                }).start(() => {
                  router.push('/recipes');
                });
              }}
              style={styles.primaryButton}
              delay={200}
            />

            <AnimatedButton
              title="ℹ️ Sobre"
              onPress={() => {
                Animated.timing(fadeAnim, {
                  toValue: 1,
                  duration: 200,
                  useNativeDriver: true,
                }).start(() => {
                  router.push('/about');
                });
              }}
              style={styles.secondaryButton}
              delay={400}
              
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.footer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
              }
            ]}
          >
            <Text style={styles.footerText}>Explore o mundo da culinária</Text>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 80,
    paddingBottom: 50,
  },
  headerContainer: {
    alignItems: 'center',
  },
  image: { 
    width: 150, 
    height: 150,
    marginBottom: 20, 
  },
  welcomeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#f8f9fa',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '300',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    width: 280,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  primaryButton: {
    backgroundColor: '#e74c3c',
    borderWidth: 2,
    borderColor: '#c0392b',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#ecf0f1',
    fontStyle: 'italic',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});