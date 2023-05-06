import { View, Text, Image } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

type TaskCounterProps = {
  created: number;
  completed: number;
}


export default function TaskCounter({ created, completed }: TaskCounterProps){


  return(
    <View style={styles.container}>
     
      <Text style={styles.maids}>Criadas <Text style={styles.count}>{created} </Text></Text>
      <Text style={styles.completed}>Concluidas <Text style={styles.count}>{completed} </Text></Text> 
    </View>
  )
}