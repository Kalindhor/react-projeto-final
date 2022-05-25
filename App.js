import { StatusBar, StyleSheet, SafeAreaView, View, FlatList, ScrollView} from 'react-native';

import Topo from './source/telas/Carrinho/Topo';
import Detalhes from './source/telas/Carrinho/Detalhes';
import Item from './source/telas/Carrinho/Item';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import Mocks from './source/mocks/carrinho';
import Texto from './source/components/Texto';


export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    
      <FlatList
        data={Mocks.itens.lista}
        renderItem={Item}
        ketExtractor={({nome})=> nome}
        ListHeaderComponent={
          () =>{
            return<>
          <Topo {...Mocks.topo}/>
          <Detalhes {...Mocks.detalhes}/>
          <Texto Texto style={styles.titulo}>
                  {Mocks.itens.titulo}
          </Texto>
            </>
          }
        }
        
        ListFooterComponent={
         ()=> { 
           return<>
           <Texto style={styles.titulo}>{Mocks.itemx.list}</Texto>
           </>
          
         }
        }
      />
      <StatusBar />
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },  titulo:{
    color:"#ffa500",
    fontWeight:'bold',
    marginTop:30,
    marginBottom:30,
    fontSize:25
},
  
});
