import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView, Text, View, TouchableOpacity } from "react-native";

const Recipes = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch(err => console.error('Erro ao buscar receitas:', err));
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Lista de Receitas</Text>

      <ScrollView>
        {recipes.map(recipe => (
          <TouchableOpacity
            key={recipe.id}
            onPress={() => router.push(`/recipes/${recipe.id}?instructions=${recipe.instructions}`)}
          >
            <Text style={{ fontSize: 18 }}>{recipe.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Recipes;

