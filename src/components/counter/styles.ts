import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({

  container: {
    
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
    backgroundColor: '#272727',
    padding:50

  },
  maids: {
    color:'#4EA8DE',
    marginRight:200,
    fontSize:15
  },
  completed:{
    color: '#8284FA',
    fontSize:15
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