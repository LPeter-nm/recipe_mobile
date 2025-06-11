import { useLocalSearchParams } from "expo-router/build/hooks";
import { StyleSheet, Text, View, ScrollView, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";

const Recipe = () => {
  const { id, ingredients, instructions, image, name } = useLocalSearchParams();
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  
  return ( 
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View 
          style={[
            styles.imageContainer,
            { 
              transform: [{ scale: scaleAnim }] 
            }
          ]}
        >
          <Image 
            source={{ uri: image as string }} 
            style={styles.recipeImage}
            resizeMode="cover"
          />
          <View style={styles.imageOverlay}>
            <Animated.Text 
              style={[
                styles.title,
                { 
                  transform: [{ translateY: slideAnim }],
                  opacity: fadeAnim 
                }
              ]}
            >
              {name || `Receita #${id}`}
            </Animated.Text>
          </View>
        </Animated.View>
        
        <Animated.View 
          style={[
            styles.content,
            { 
              transform: [{ translateY: slideAnim }],
              opacity: fadeAnim 
            }
          ]}
        >
          <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
            <Text style={styles.sectionTitle}>Ingredientes</Text>
            <Text style={styles.text}>{ingredients}</Text>
          </Animated.View>
          
          <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
            <Text style={styles.sectionTitle}>Instruções</Text>
            <Text style={styles.text}>{instructions}</Text>
          </Animated.View>
        </Animated.View>
      </ScrollView>
    </Animated.View>
   );
}
 
export default Recipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  imageContainer: {
    position: 'relative',
    height: 300,
    overflow: 'hidden',
  },
  recipeImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
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
    color: '#e74c3c',
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#e74c3c',
    paddingBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495e',
    textAlign: 'justify',
  },
});