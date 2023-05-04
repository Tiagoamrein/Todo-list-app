import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
  },
  tasks:{
    flex:1,
    width:'100%',
    padding:0,
    marginTop:40,
    backgroundColor: '#272727',
  },
  inputContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 36,
    alignItems: 'center',
    zIndex: 1,
    marginTop:18
   
  },
  input:{
    backgroundColor:'#363636',
    height: 42,
    width: 265,
    borderRadius: 10,
    padding: 10,
    color: '#0D0D0D',
  },
  button: {
    width: 42,
    height: 42,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginLeft: 1,
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  empty:{
    height: 42,
    backgroundColor: '#272727',
  },
});
