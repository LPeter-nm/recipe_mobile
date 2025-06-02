import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { StyleSheet, Text, View } from "react-native";

const Recipe = () => {
  const { id, instructions } = useLocalSearchParams()
  return ( 
    <View style={styles.container}>
      <Text>Receita {id}</Text>
      <Text>{instructions}</Text>
    </View>
   );
}
 
export default Recipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center'   
  }
})