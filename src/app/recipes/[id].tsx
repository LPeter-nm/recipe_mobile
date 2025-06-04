import { useLocalSearchParams } from "expo-router/build/hooks";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

const Recipe = () => {
  const { id, ingredients, instructions, image, name } = useLocalSearchParams()
  
  return ( 
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: image as string }} 
          style={styles.recipeImage}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay}>
          <Text style={styles.title}>{name || `Receita #${id}`}</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredientes</Text>
          <Text style={styles.text}>{ingredients}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instruções</Text>
          <Text style={styles.text}>{instructions}</Text>
        </View>
      </View>
    </ScrollView>
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
    height: 250,
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
    fontSize: 24,
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
})