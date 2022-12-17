import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import SvgIcon from '../../components/SvgIcon'
import { ItemData ,cat} from '../../constatnts/data'
import imagePath from '../../constatnts/imagePath';

const Profile = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ScrollView>
              <View style={styles.headerView}>
              <TouchableOpacity style={styles.profileIcon}  />
              <Text style={{ marginTop: 10, fontWeight: "500", }}>Anuj Sharma</Text>
              </View>
            </ScrollView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor:'#fff'
    },
    
    headerView: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height:300
    },
    profileIcon: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: '#bbb',
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle: {
        fontSize: 20,
    },
    catogiriesView: {
    },
    listView:{
    backgroundColor: '#00ff00', 
    marginLeft: 20,
    padding:10,
    borderRadius:10,
    height:250,
    width:150 
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