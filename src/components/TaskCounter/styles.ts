import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap:90,
    backgroundColor: '#272727',
    height:60,
    paddingTop:30
  },
  maids: {
    color:'#4EA8DE',
    fontSize:18,
    
  },
  completed:{
    color: '#8284FA',
    fontSize:18,
    
  },
  count:{
    color:'white',
  },
  circle: {
    backgroundColor: '#363636',
    borderRadius: 50,
    padding: 40,
    margin: 10,
    alignItems: 'center',
    fontSize:2
  }


})