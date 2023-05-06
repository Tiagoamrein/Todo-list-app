import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import TaskCounter from "../../components/TaskCounter"
import Task from "../../components/Task"
import { useState } from "react";

export default function Home() {
  const [newTask, setNewTask] = useState<string[]>([])
  const [taskName, setTaskName]= useState('')
  const [completedTasks, setCompletedTasks] = useState<string[]>([])

  function taskAdd(){
    if(taskName.length ===0){
      return Alert.alert("Digite uma tarefa")
    }
    setNewTask(prevState =>[...prevState, taskName])
    setTaskName('')
  }
  
  function HandlerRemoveTask(task:string) {
    Alert.alert("Remover", `Remover a tarefa ${taskName}?`, [
      {
        text: 'Sim',
        onPress:()=> setNewTask(prevState=> prevState.filter(p=> p!==task))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleCompleteTask(task: string) {
    Alert.alert('Tarefa concluida','', 
    [
      {
        text: 'Sim',
        onPress: () => setCompletedTasks(prevState => [...prevState, task])
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]
    
    )
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Adicione uma nova tarefa" 
          placeholderTextColor="#888888" 
          style={styles.input}
          onChangeText={setTaskName}
          value={taskName}
          
          
        />
        <TouchableOpacity style={styles.button} onPress={taskAdd}>
          <Text style={styles.buttonText} >
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tasks} >
      <TaskCounter created={newTask.length} completed={completedTasks.length} />
        <FlatList
        data={newTask}
        keyExtractor={item=>item}
        renderItem={({ item }) => <Task task={item} onRemove={() => HandlerRemoveTask(item)} onComplete={() => handleCompleteTask(item)} />}
         
        ListEmptyComponent={()=>(
          <View style={styles.empty}>
          <Image style={styles.emptyImg} source={require('../../../assets/Clipboard.png')}/>
          <Text style={[styles.emptyText, {fontWeight:'bold'}]}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        )}
        />
        
      </View>
    </View>
  )
}
