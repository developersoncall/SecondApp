import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import SvgIcon from '../../components/SvgIcon'
import { ItemData, cat } from '../../constatnts/data'
import imagePath from '../../constatnts/imagePath';
import colors from '../../constatnts/colors';

const Profile = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <TouchableOpacity style={styles.profileIcon} />
          <Text style={{ marginTop: 10, fontWeight: "800", fontSize: 20 }}>Anuj Sharma</Text>
          <Text style={{ marginTop: 5, fontWeight: "500", }}>anujshrki@gmail.com</Text>
        </View>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity style={{ 
            backgroundColor: colors.shadowGrey,
             width: '80%',
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
             padding:10,borderRadius:20,
             borderColor: colors.blue,
             borderWidth: 2,
             paddingHorizontal:20
             }}>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>My Order</Text>
            <Text style={{ fontWeight: "600", }}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ 
            backgroundColor: colors.shadowGrey,
             width: '80%',
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
             padding:10,borderRadius:20,
             borderColor: colors.blue,
             borderWidth: 2,
             marginTop:20,
             paddingHorizontal:20
             }}>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>Settings</Text>
            <Text style={{ fontWeight: "600", }}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ 
            backgroundColor: colors.shadowGrey,
             width: '80%',
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
             padding:10,borderRadius:20,
             borderColor: colors.blue,
             borderWidth: 2,
             marginTop:20,
             paddingHorizontal:20
             }}>
            <Text style={{ fontWeight: "600", fontSize: 18 }}>LogOut</Text>
            <Text style={{ fontWeight: "600", }}>></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Text style={{ fontWeight: "600", fontSize: 16 ,color:'#bbb',textAlign:'center',marginBottom:5}}>version 1.2.4</Text>
      <Text style={{ fontWeight: "600", fontSize: 12 ,color:'#bbb',textAlign:'center',marginBottom:20}}>Made with ❤️ in Bengaluru</Text>
      
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff'
  },

  headerView: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300
  },
  profileIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.blue,
    borderWidth: 2
  },
  textStyle: {
    fontSize: 20,
  },
  catogiriesView: {
  },
  listView: {
    backgroundColor: '#00ff00',
    marginLeft: 20,
    padding: 10,
    borderRadius: 10,
    height: 250,
    width: 150
  },
  //ItemView
  listItem: {
    height: 110,
    width: 80,
    justifyContent: 'center', alignItems: 'center',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  mainListContainer: {
    backgroundColor: '#eee',
    height: 60,
    width: 60,
    borderRadius: 30, justifyContent: 'center', alignItems: 'center',
    shadowColor: "#414141",
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 2,
  }
})