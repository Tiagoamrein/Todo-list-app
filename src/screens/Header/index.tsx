import { View, Text, Image,TextInput,TouchableOpacity } from "react-native";
import { styles } from "./styles";


export default function Header(){
  return(
    <View style={styles.container}>
      <View style={styles.image}>
      <Image source={require('../../../assets/Logo.png')}/>
      </View>
      <View style={styles.main}>
      <TextInput placeholder="Adicione uma nova tarefa"  placeholderTextColor="#888888" style={styles.input}/>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>
        +
      </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}