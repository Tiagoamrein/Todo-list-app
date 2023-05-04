import { View, Text, Image } from "react-native";
import { styles } from "./styles";

type Props={
  name: string
}

export default function TaskEmpty({name}:Props){

  return(
    <View style={styles.container}>
      <View>
      <Text style={styles.text}>Esta rederizando a task</Text>
      <Text style={styles.text2}> Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )}