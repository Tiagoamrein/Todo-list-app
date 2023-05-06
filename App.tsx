import { StatusBar, View, } from "react-native"
import Home from "./src/screens/Home"
import Counter from "./src/components/TaskCounter"
import Header from "./src/components/Header"



export default function App() {
  return (
    
   <>
  <StatusBar  backgroundColor='transparent' barStyle="default" translucent  />
  <Header/>
   <Home/>
   
  </>
)}


