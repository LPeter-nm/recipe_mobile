import { useRouter } from 'expo-router';
import { Button, Text, View, StyleSheet, ImageBackground } from 'react-native'

const Index = () => {
  const router = useRouter()
  return (  
    <View style={styles.container}>
      <Text>Seja Bem vindo</Text>
      <Button title='Lista de receitas' onPress={() => router.push('/recipes')}/>
      <Button title='Sobre' onPress={() => router.push('/about')}/>
    </View>
   );
}
 
export default Index;

const styles = StyleSheet.create({
 container: {
    flex: 1,
    gap: 5,
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
})