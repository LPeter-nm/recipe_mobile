import { Stack } from "expo-router";

const RootLayout = () => {
  return ( 
    <Stack screenOptions={{
      headerBackTitle:'Voltar'
    }}/>
   );
}
 
export default RootLayout;