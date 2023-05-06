import { View, Text, Image,TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props={
  task: string
  onRemove: ()=> void
  onComplete:()=> void
}

export default function TaskEmpty({task, onRemove, onComplete}:Props){

  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={onComplete}>
      <Image style={styles.check} source={require("../../../assets/check.png")} />
      </TouchableOpacity>
      <Text style={styles.text}>{task}</Text>
      <TouchableOpacity onPress={onRemove}>
      <Image style={styles.trash} source={require("../../../assets/trash.png")} />
      </TouchableOpacity> 
    </View>
  )}