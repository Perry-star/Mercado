import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    productName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },

    form: {
        width: '100%',
        flexDirection:'row',
        marginTop: 36,
        marginBottom: 42
       
      },
    input: {
        flex:1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize:16,
        marginRight: 12,
      
    },

    button: {
      width:56,
      height:56,
      borderRadius:5,
      backgroundColor:"#31CF67",
      alignItems: 'center',
      justifyContent: 'center',
      
     
    },
    buttonText: {
      color:'#FFF',
      fontSize: 24
    },

    listEmptyText: {
      color:'#fff',
      fontSize: 14,
      textAlign: 'center'
    }

})