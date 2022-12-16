import React, { FC, useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';

interface Props {
    data: Array<{ label: string; value: string }>;
    nav: any;
    onSelect: (item: { label: string; value: string }) => void;
}
const Card: FC<Props> = ({ data, onSelect, nav }) => {

    // const onItemPress = (item): void => {


    // };
    return (
        <TouchableOpacity style={styles.cardView} >
            <View style={{
                backgroundColor: '#f00',
                position: 'absolute',
                top: 0,
                zIndex: 1,
                left: 0,
                padding: 5,

                borderBottomRightRadius: 10,
            }}>
                <Text style={{
                    fontSize: 15,
                    fontWeight: '900',
                    color: '#fff'
                }}>New</Text>
            </View>
            <Image source={data.image} style={{
                width: 120, height: 120
            }} />
            <View style={{
                width: 120,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: '500'
                }}>{data.name}</Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '800'
                }}><Text style={{
                    fontSize: 15,
                    fontWeight: '800',

                }}>$</Text>{data.price}.00</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '900',
                        color: '#fff'
                    }}>Order</Text>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardView: {
        alignItems: 'center',
        padding: 10,
        // height: 40,
        zIndex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: 2,
        justifyContent: 'space-between',
        marginLeft: 20,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#033',
        height: 35,
        borderRadius: 20,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
    },
    item: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        //backgroundColor:'#f00',
        marginHorizontal: 15
    },
});

export default Card;