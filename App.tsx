import { StatusBar, View, } from "react-native"
import Header from "./src/screens/Header"
import Task from "./src/screens/Task"
import Counter from "./src/components/counter"



export default function App() {
  return (
    
   <>
  <StatusBar  backgroundColor='transparent' barStyle="default" translucent  />
   <Header/>
   <Counter/>
   <Task/>
  </>
)}


