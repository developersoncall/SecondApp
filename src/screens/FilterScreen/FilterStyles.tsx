

import { StyleSheet } from "react-native";

const FilterScreenStyle = StyleSheet.create({

  borderView: {
    backgroundColor: '#808080',
    width: '100%',
    height: 0.5,
  },
  content: {
    flexDirection: 'row',
    width:'100%',
    height:'85%'
    
  },
  settingsView:{
   // backgroundColor: '#f00',
   marginLeft:10
  },

  // menu Column - left
  menuColumn: {
      width:'40%',
      height:'100%',
    flexDirection: 'column',
    borderRightColor:'#bbb',
    borderRightWidth:1,
    paddingLeft:5
  },
  menuItem: {
    height:60,
    justifyContent: 'center',
    //alignItems: 'center',
  },

  header: {
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '100%',
   
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: '#606070',
    padding: 10,
  },
  content1: {
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
  searchView:{
   flexDirection:'row',
   alignItems:'center',
   borderBottomWidth:1,
   borderBottomColor:'#bbb',
  },
  menuItemText: {
    marginLeft: 10,
    alignSelf: 'flex-start',
    fontSize: 14,
    fontFamily:'Poppins-Medium'
  },
  searchBarStyle:{
    fontSize: 16,
    fontFamily:'Poppins-Medium',
    height:60,
    paddingLeft:10,
    color:'#bbb'
  },
  itemStyle: {
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 20,
    overflow: 'hidden',
    paddingVertical: 10,
    marginBottom: 5,
  },
  // settings column -right
  settingsColumn: {
   
    height:'100%',
    width:'60%',
  },
  buttonContainer: {
    height:'15%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bottomButton: {
    borderRadius:10,
    width: '42%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
  },
  startItemText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    alignSelf:'flex-start',
    textAlign:'left'
  },
  itemText: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    textAlign:'left'
  },
  
});




export default FilterScreenStyle;