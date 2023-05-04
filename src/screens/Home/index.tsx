import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import Counter from "../../components/counter"
import Task from "../../components/Task"
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState('');

  function taskAdd(){
    console.log('adicinou uma tarefa');
  }
  
//Verificar se esta execultando a funcion acima
///Tentar adicinar qualquer task para começar a densenvolver o app


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Adicione uma nova tarefa" 
          placeholderTextColor="#888888" 
          style={styles.input}
          
          
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasks} >
        <Counter/>
        <FlatList  
          data={task}
          keyExtractor={item => item}
          renderItem={({item})=> (
            <Task
            name={item}
            key={item}
            />
          )}
          ListEmptyComponent={item => {
            return(
              <Text style={styles.empty}>
                Nenhuma tarefa cadastrada
              </Text>
            )
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
