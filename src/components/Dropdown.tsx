import React, { FC, useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, FlatList, View ,Image} from 'react-native';

interface Props {
    label: string;
    data: Array<{ label: string; value: string }>;
    onSelect: (item: { label: string; value: string }) => void;
    customStyle: StyleSheet;
    modalStyle: StyleSheet;
}
const Dropdown: FC<Props> = ({ label, data, onSelect, customStyles, modalStyle }) => {
    const [visible, setVisible] = useState(false);
    const DropdownButton = useRef();
    const [dropdownTop, setDropdownTop] = useState(0);
    const [selected, setSelected] = useState(undefined);
    const toggleDropdown = (): void => {
        visible ? setVisible(false) : openDropdown();
    };

    const openDropdown = (): void => {
        DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
            setDropdownTop(py + h);
        });
        setVisible(true);
    };
    const onItemPress = (item): void => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    };
    const renderItem = ({ item }): ReactElement<any, any> => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );
    const renderDropdown = (): ReactElement<any, any> => {
        return (
            <Modal visible={visible} transparent animationType="none">
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={() => setVisible(false)}
                >
                    <View style={modalStyle ? [modalStyle, {
                        top: dropdownTop,
                        position: 'absolute',
                    }] : [styles.dropdown, {
                        top: dropdownTop,
                        position: 'absolute',
                    }]}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    };

    return (
        <TouchableOpacity
            ref={DropdownButton}
            style={customStyles ? customStyles : styles.button}
            onPress={toggleDropdown}
        >
            {renderDropdown()}
            <Text style={selected!== undefined?styles.buttonText:styles.labelStyle}>
                {(selected && selected.label) || label}
            </Text>
            <Image style={{ width: 15, height: 15,resizeMode:'contain',position:'absolute',right:10 }} source={require('../assets/down.png')} />
            {/* <Icon type='font-awesome' name='chevron-down'/> */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        width: '100%',
        zIndex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: 2,
        justifyContent: 'space-between',
       
    },
    buttonText: {
        fontSize: 15,
        width:'80%',
        textAlign:'left',
        marginRight:15
    },
    labelStyle: {
        fontSize: 15,
        width:'80%',
        textAlign:'left',
        marginRight:15,
        color:'#bbb'
    },
    dropdown: {
        backgroundColor: '#fff',
        width: '100%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,

    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    overlay: {
        backgroundColor: '#f00',
    }
});

export default Dropdown;