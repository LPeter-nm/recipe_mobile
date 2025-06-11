import { Stack, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function CustomBackButton() {
  const router = useRouter();
  
  return (
    <TouchableOpacity 
      style={styles.backButton}
      onPress={() => router.back()}
      activeOpacity={0.7}
    >
      <Text style={styles.backButtonText}>← Voltar</Text>
    </TouchableOpacity>
  );
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#e74c3c',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => <CustomBackButton />,
        headerTitle: "",
        headerShadowVisible: false,
        animation: 'slide_from_right',
        animationDuration: 300,
        contentStyle: {
          backgroundColor: '#f8f9fa',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="recipes" 
        options={{
          title: 'Receitas',
          headerTitle: "Receitas",
        }}
      />
      <Stack.Screen 
        name="recipes/[id]" 
        options={{
          title: 'Detalhes',
          headerTitle: "Detalhes da Receita",
        }}
      />
      <Stack.Screen 
        name="about" 
        options={{
          title: 'Sobre',
          headerTitle: "Sobre o App",
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: '500',
  },
});