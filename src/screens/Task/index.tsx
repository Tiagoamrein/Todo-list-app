import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export default function Task(){
  return(
    <View style={styles.container}>
      <View>
      <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text2}> Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}