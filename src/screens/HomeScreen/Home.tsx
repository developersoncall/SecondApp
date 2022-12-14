import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import SvgIcon from '../../components/SvgIcon'
import { ItemData ,cat} from '../../constatnts/data'
import imagePath from '../../constatnts/imagePath';
import Card from '../../components/Card';
import Dropdown from '../../components/Dropdown';
const fundData = [
    { label: 'Monthly Income', value: '1' },
    { label: 'I dont know', value: '2' },
  ];
const Home = ({navigation}) => {
    const [selected, setSelected] = React.useState(undefined);
    const onClicked = (item) => {
        navigation.navigate("Profile");
      };
    const renderItems = (item, index) => {
        item= item.item;
        return (

            <TouchableOpacity style={[styles.listItem, {
                marginLeft: index === 0 ? 0 : 15
            }]}>
                <View style={styles.mainListContainer}>
                <SvgIcon
                name={item.icon}
                height={'50%'}
                width={'50%'}
                //onPress={() => onIconClick("plus")}
              />
                </View>
                <Text style={{ marginTop: 10, fontWeight: "500",fontFamily:'Eczar-Bold' }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    const renderList = (item, index) => {
      var  dataItem = item.item;
        return (
            
                   <Card data={dataItem} nav={navigation}/>
            
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
            <SvgIcon
                name={'logo'}
                height={'50%'}
                width={'25%'}
                //onPress={() => onIconClick("plus")}
              />
                <TouchableOpacity style={styles.profileIcon} onPress={()=>onClicked()} />
            </View>
            <View style={styles.borderView} />
            <ScrollView>
            <View style={styles.catogiriesView}>
                <FlatList
                showsHorizontalScrollIndicator={false}
                    data={cat}
                    horizontal
                    renderItem={renderItems}

                />
            </View>
            <View style={styles.catogiriesView}><Image
                    source={imagePath.banner1} 
                    style={{
                        width:'100%',
                        height:200,
                    }}
                    resizeMode={'contain'}
                    /></View>
                   <DropDown label="Select Product" data={fundData} 
                   //onSelect={(item) => setProductValue(item.label)} 
                   customStyles={styles.dropDownStyles}
                   modalStyle={styles.dropDownItemStyles}
                 />
            <View >
                <FlatList
                  showsHorizontalScrollIndicator={false}
                    data={ItemData}
                    horizontal
                    renderItem={renderList}
contentContainerStyle={{paddingVertical:20}}
                />
            </View>
            {/* <View style={styles.headerView}>
                <Text style={styles.textStyle}>Popular Items</Text>
            </View> */}
            <View style={styles.catogiriesView}><Image
                    source={imagePath.banner3} 
                    style={{
                        width:'100%',
                        height:200,
                    }}
                    resizeMode={'contain'}
                    /></View>
                    <View style={styles.catogiriesView}><Image
                    source={imagePath.banner2} 
                    style={{
                        width:'100%',
                        height:200,
                    }}
                    resizeMode={'contain'}
                    /></View>
            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor:'#fff'
    },
    borderView: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        marginVertical: 10
    },
    headerView: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#bbb',
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
    },
    dropDownItemStyles: {
        backgroundColor: '#fff',
        width: '40%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        borderRadius: 10,
        right: 38
      },
      dropDownStyles: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        paddingHorizontal: 0,
      }
})