import { Dimensions, StyleSheet } from "react-native"
export default StyleSheet.create({
    input: {
      textAlignVertical:'center',
      color:'#000000',
      fontSize:15,
      marginTop:10,
      marginLeft:20,
      marginRight:20,
      borderColor: '#E8E8E8',
      borderWidth: 0.17,
      borderRadius: 5,
      padding: 10,
      shadowColor: '#000000',
      shadowOpacity: 0.5,
      backgroundColor:'#ffffff',
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 1,
      elevation: 2,
      
  
    },
    accessory: {
      width: Dimensions.get('window').width,
      height: 48,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
      paddingHorizontal: 8
    },
});