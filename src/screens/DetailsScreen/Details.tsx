import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import React from 'react'

const Details = ({
    navigation,
    route,
}) => {
    const { data } = route.params
    const [qtyValue, setQtyValue] = React.useState<number>(0);
    const onIconClick = (value: any) => {
        if (value === "plus") {
            setQtyValue(qtyValue + 1);
        } else {
            if (qtyValue === 0) {
                null;
            } else {
                setQtyValue(qtyValue - 1);
            }
        }
    };
    return (
        <View style={styles.container}>
            <StatusBar translucent={true}/>
            <View style={styles.topContainer}>
                {/* Header View */}
                <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: 50,
                        width: '100%',
                        zIndex: 100,
                        backgroundColor:'transparent',
                        //backgroundColor:'#fff',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        marginTop:30,
                        paddingHorizontal:15
                    }}>
                        <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                           
                            backgroundColor:'#f00',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                   onPress={() => navigation.goBack()}><Text style={{ fontSize: 16, color: '#000' }}>{"<"}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                           
                            backgroundColor:'#f00',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                   onPress={() => navigation.goBack()}><Text style={{ fontSize: 16, color: '#000' }}>{"<"}</Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.contentContainer}>
                    <View style={styles.profileIcon} />
                    <View style={styles.profileIcon} />
                    <View style={styles.profileIcon} />
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={data.image}
                        style={{
                            width: '90%',
                            height: '70%'
                        }}
                        resizeMode={'cover'}
                    />
                </View>
            </View>
            <View style={{ paddingLeft: '20%' }}>
                <View style={styles.rowContainer}>
                    <Image
                        source={data.image}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 50
                        }}
                        resizeMode={'cover'}
                    />
                    <Image
                        source={require('../../assets/images/products/jacket-2.jpg')}
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: 50,
                            marginLeft: 10
                        }}
                        resizeMode={'cover'}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",

                        marginBottom: 10,
                    }}
                >
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => onIconClick("minus")}><Text style={{ fontSize: 20, fontWeight: '600' }}>-</Text></TouchableOpacity>
                    <View
                        style={{
                            justifyContent: "center",

                            borderRadius: 5,
                            padding: 5,
                            //alignItems:'center',
                            width: 50,
                        }}
                    >
                        <Text
                            style={{
                                color: "#000",
                                fontWeight: '600',
                                fontSize: 20,
                                textAlign: "center",
                            }}
                        >
                            {qtyValue}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => onIconClick("plus")}><Text style={{ fontSize: 20, fontWeight: '600' }}>+</Text></TouchableOpacity>
                </View>
                <Text style={{ fontSize: 25, color: '#000', marginBottom: 5, fontWeight: '600' }}>{data.name}</Text>
                <Text style={{ fontSize: 16, color: '#000' }}>Price: ${data.price}</Text>
                <Text style={{ fontSize: 16, color: '#000' }}>{data.dec}</Text>

            </View>
            <View style={{ width: '80%', position: 'absolute', bottom: 40, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#f00',
                        width: '20%',
                        height: 50,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}><Text style={{ fontSize: 20, fontWeight: '600' }}>+</Text></TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#f00',
                        width: '75%',
                        height: 50,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}><Text style={{ fontSize: 20, fontWeight: '600' }}>Add to Cart</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E4E2',

    },
    topContainer: {
        flexDirection: 'row',
        height: '45%'

    },
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginVertical: 10
    },
    contentContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: '#fff',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 50
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 20
    },
    buttonStyle: {
        width: 40,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#fff',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
})