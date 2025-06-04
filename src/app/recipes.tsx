import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native";

const Recipes = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar receitas:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#e74c3c" />
        <Text style={styles.loadingText}>Carregando receitas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Receitas</Text>
        <Text style={styles.subtitle}>{recipes.length} receitas disponíveis</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {recipes.map((recipe, index) => (
          <TouchableOpacity
            key={recipe.id}
            style={[
              styles.recipeCard,
              index === recipes.length - 1 && styles.lastCard
            ]}
            onPress={() => router.push(`/recipes/${recipe.id}?ingredients=${recipe.ingredients}&instructions=${recipe.instructions}&image=${recipe.image}&name=${recipe.name}`)}
            activeOpacity={0.7}
          >
            <Image 
              source={{ uri: recipe.image }} 
              style={styles.recipeImage}
              resizeMode="cover"
            />
            
            <View style={styles.cardContent}>
              <Text style={styles.recipeName}>{recipe.name}</Text>
              
              <View style={styles.recipeInfo}>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Tempo:</Text>
                  <Text style={styles.infoValue}>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</Text>
                </View>
                
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Porções:</Text>
                  <Text style={styles.infoValue}>{recipe.servings}</Text>
                </View>
                
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Dificuldade:</Text>
                  <Text style={styles.infoValue}>{recipe.difficulty}</Text>
                </View>
              </View>

              <View style={styles.tagsContainer}>
                {recipe.tags?.slice(0, 2).map((tag, tagIndex) => (
                  <View key={tagIndex} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
            
            <View style={styles.arrow}>
              <Text style={styles.arrowText}>›</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6c757d',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  recipeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    height: 120,
  },
  lastCard: {
    marginBottom: 20,
  },
  recipeImage: {
    width: 100,
    height: '100%',
  },
  cardContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  recipeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  recipeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoItem: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 10,
    color: '#6c757d',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#495057',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 4,
    marginBottom: 2,
  },
  tagText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '500',
  },
  arrow: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  arrowText: {
    fontSize: 20,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
});