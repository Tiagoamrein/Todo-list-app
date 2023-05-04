import { View, Text, Image } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

export default function Counter(){

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return(
    <View style={styles.container}>
     
      <Text style={styles.maids}>Criadas <Text style={styles.count}>{count} </Text></Text>
      <Text style={styles.completed}>Concluidas <Text style={styles.count}>{count} </Text></Text> 
    </View>
  )
}