import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
    margin:0,
    zIndex:1,
    gap:-100
    
  },
  image:{
    marginTop:90
  },
  main:{
    flex:1,
    width:'100%',
    
    flexDirection:'row',
    alignItems:'center',
    marginBottom:-140,
    padding:0,
    justifyContent: 'space-between',
  },
  input:{
    backgroundColor:'#363636',
    height: 42,
    width:276,
    borderRadius: 10,
    marginLeft:26,
    padding:10,
    color:'#0D0D0D'
  },
  button: {
    width: 42,
    height: 42,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight:26
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  


})

