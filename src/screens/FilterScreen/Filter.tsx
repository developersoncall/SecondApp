import React, { FC, useEffect, useState, } from "react";
import {
    View, Text, Dimensions, TouchableOpacity, UIManager,
    Platform,
    LayoutAnimation, TextInput, ScrollView,SafeAreaView
} from "react-native";
import FilterScreenStyle from "./FilterStyles";
export const { width: SIZE } = Dimensions.get('window');

const amcItems = [
    { id: '101', name: 'Aditya Birla Sun Life Mutual Fund', },
    { id: '102', name: 'Axis Mutual Fund', },
    { id: '103', name: 'Baroda BNP Paribas Mutual Fund', },
    { id: '104', name: 'Canara Robeco Mutual Fund', },
    { id: '105', name: 'DSP Mutual Fund', },
    { id: '106', name: 'Edelweiss Mutual Fund', },
    { id: '107', name: 'Franklin Templeton Mutual Fund', },
    { id: '108', name: 'HDFC Mutual Fund', },
    { id: '109', name: 'HSBC Mutual Fund', },
    { id: '110', name: 'ICICI Prudential Mutual Fund', },
    { id: '111', name: 'IDFC Mutual Fund', },
    { id: '112', name: 'Invesco Mutual Fund', },
    { id: '113', name: 'Kotak Mahindra Mutual Fund', },
];

const ratingFilterItems = [
  { id:'301', name :'⭐️ ⭐️ ⭐️ ⭐️ ⭐️'},
  { id:'302', name :'⭐️ ⭐️ ⭐️ ⭐️ & Up'},
  { id:'303', name :'⭐️ ⭐️ ⭐️  & Up'},
  { id:'304', name :'⭐️ ⭐️  & Up'}
];
const riskFilterItems = [
  { id:'401', name :'Low'},
  { id:'402', name :'Moderately Low'},
  { id:'403', name :'Moderate'},
  { id:'404', name :'Moderately High'},
  { id:'405', name :'High'},
  { id:'406', name :'very High'}
];
const investFilterItems = [
  { id:'501', name :'SIP'},
  { id:'502', name :'ONE-TIME'},
];
const sortByFilterItems = [
  { id:'601', name :'Popularity'},
  { id:'602', name :'Ratings - High To Low'},
  { id:'603', name :'3 Y Returns - High To Low'},
]
const categoryFilterItems = [
  { id:'201', name :'Debt Schemes'},
  { id:'202', name :'Equity Schemes'},
  { id:'203', name :'Hybrid Schemes'},
  { id:'204', name :'Other Schemes'},
  { id:'205', name :'Solution Oriented Schemes'},
];
const CONTENT = [
  {
    isExpanded: false,
    id:'201',
    category_name: 'Debt Schemes',
    subcategory: [
      {id: 1, val: 'Banking and PSU'},
      {id: 2, val: 'Coporate Bond'},
      {id: 3, val: 'Credit Risk'},
    ],
  },
  {
    isExpanded: false,
    id:'202', 
    category_name: 'Equity Schemes',
    subcategory: [
      {id: 4, val: 'Sub Cat 4'},
      {id: 5, val: 'Sub Cat 5'},
    ],
  },
  {
    isExpanded: false,
    id:'203', 
    category_name: 'Hybrid Schemes',
    subcategory: [
      {id: 7, val: 'Sub Cat 7'},
      {id: 9, val: 'Sub Cat 9'},
    ],
  },
  {
    isExpanded: false,
    id:'204', 
    category_name: 'Other Scheme',
    subcategory: [
      {id: 10, val: 'Sub Cat 10'},
      {id: 12, val: 'Sub Cat 2'},
    ],
  },
  {
    isExpanded: false,
    id:'205', 
    category_name: 'Solution Oriented Schemes',
    subcategory: [
      {id: 13, val: 'Sub Cat 13'},
      {id: 15, val: 'Sub Cat 5'},
    ],
  },
];

const Filter: FC<{ navigation: any }> = ({
    navigation,
}) => {
    const [menuItems, setMenuItems] = useState([
        { id: '1', name: 'AMC', },
        { id: '2', name: 'Category', },
        { id: '3', name: 'Rating', },
        { id: '4', name: 'Risk', },
        { id: '5', name: 'Available to Invest', },
        { id: '6', name: 'Sort By', },
    ])
    const [selectedItem, setSelectedItem] = useState('1');
    const [amcSelectedItem, setAMCSelectedItem] = useState('0');
    const [startSelectedItem, setStartSelectedItem] = useState('0');
    const [riskSelectedItem, setRiskSelectedItem] = useState('0');
    const [sortSelectedItem, setSortSelectedItem] = useState('0');
    const [investSelectedItem, setInvestSelectedItem] = useState('0');
    const [catSelectedItem, setCatselectedItem] = useState('0');
    const [subCatId, setSubCatId] = useState(0);
    const [amcData, setAMCData] = useState(amcItems)
    const [open, setopen] = useState(false);

    const [listDataSource, setListDataSource] = useState(CONTENT);
    const [multiSelect, setMultiSelect] = useState(false);

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if (multiSelect) {
            // If multiple select is enabled
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            // If single select is enabled
            array.map((value, placeindex) =>
                placeindex === index
                    ? (array[placeindex]['isExpanded'] =
                        !array[placeindex]['isExpanded'])
                    : (array[placeindex]['isExpanded'] = false),
            );
        }
        setListDataSource(array);
    };
    const searchFilterFunction = (value) => {
        const newData = amcItems.filter(function (item) {
            const leavetypeData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            const textData = value.toUpperCase();
            return (leavetypeData.indexOf(textData) > -1);
        });
        setAMCData(newData);
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            {/* <Header navigation={navigation} name={'Filter - Sort'} rightText={'CLEAR ALL'} /> */}

            <View style={FilterScreenStyle.content}>
                <View style={FilterScreenStyle.menuColumn}>
                    {menuItems.map(
                        (item, index) => {
                            return (
                                <><TouchableOpacity key={item.id} onPress={() => setSelectedItem(item.id)} style={FilterScreenStyle.menuItem}>
                                    <Text style={[FilterScreenStyle.menuItemText, { color: item.id === selectedItem ? '#f00' : '#000', fontFamily: 'Poppins-Regular' }]}>{item.name}</Text>
                                </TouchableOpacity>
                                    {borderView()}</>
                            )
                        })
                    }</View>
                <View style={FilterScreenStyle.settingsColumn}>
                    {selectedItem === '1' && <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={FilterScreenStyle.settingsView} >
                        <View style={FilterScreenStyle.searchView}>
                            <TextInput style={FilterScreenStyle.searchBarStyle}
                                placeholder='Search'
                                maxLength={12}
                                onChangeText={(e) => {
                                    searchFilterFunction(e);
                                }}
                            />
                        </View>

                        {amcData.map(
                            (item, index) => {
                                return (
                                    <><TouchableOpacity key={item.id} onPress={() => setAMCSelectedItem(item.id)} style={FilterScreenStyle.menuItem}>
                                        <Text style={[FilterScreenStyle.menuItemText, { color: item.id === amcSelectedItem ? '#f00' : '#bbb' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                        {borderView()}</>
                                )
                            })
                        }
                    </ScrollView>}
                    {selectedItem === '2' && <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={FilterScreenStyle.settingsView} >
                        {listDataSource.map((item, key) => (
                            <ExpandableComponent
                                key={item.category_name}
                                catSelectedItem={catSelectedItem}
                                onClickFunction={() => {
                                    updateLayout(key);
                                    setCatselectedItem(item.id)
                                }}
                                subCatId={subCatId}
                                onClickSubCat={(id)=>{setSubCatId(id)}}
                                item={item}
                            />
                        ))}
                    </ScrollView>}
                    {selectedItem === '3' && <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={FilterScreenStyle.settingsView} >
                        {ratingFilterItems.map(
                            (item, index) => {
                                return (
                                    <><TouchableOpacity key={item.id} onPress={() => setStartSelectedItem(item.id)} style={FilterScreenStyle.menuItem}>
                                        <Text style={[FilterScreenStyle.startItemText, { color: item.id === startSelectedItem ? '#f00' : '#bbb' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                        {borderView()}</>
                                )
                            })
                        }
                    </ScrollView>}
                    {selectedItem === '4' && <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={FilterScreenStyle.settingsView} >
                        {riskFilterItems.map(
                            (item, index) => {
                                return (
                                    <><TouchableOpacity key={item.id} onPress={() => setRiskSelectedItem(item.id)} style={FilterScreenStyle.menuItem}>
                                        <Text style={[FilterScreenStyle.startItemText, { color: item.id === riskSelectedItem ? '#f00' : '#bbb' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                        {borderView()}</>
                                )
                            })
                        }
                    </ScrollView>}
                    {selectedItem === '5' && <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={FilterScreenStyle.settingsView} >
                        {investFilterItems.map(
                            (item, index) => {
                                return (
                                    <><TouchableOpacity key={item.id} onPress={() => setInvestSelectedItem(item.id)} style={FilterScreenStyle.menuItem}>
                                        <Text style={[FilterScreenStyle.startItemText, { color: item.id === investSelectedItem ? '#f00' : '#bbb' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                        {borderView()}</>
                                )
                            })
                        }
                    </ScrollView>}
                    {selectedItem === '6' && <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={FilterScreenStyle.settingsView} >
                        {sortByFilterItems.map(
                            (item, index) => {
                                return (
                                    <><TouchableOpacity key={item.id} onPress={() => setSortSelectedItem(item.id)} style={FilterScreenStyle.menuItem}>
                                        <Text style={[FilterScreenStyle.startItemText, { color: item.id === sortSelectedItem ? '#f00' : '#bbb' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                        {borderView()}</>
                                )
                            })
                        }
                    </ScrollView>}
                </View>
            </View>
            <View style={FilterScreenStyle.buttonContainer}>
                <TouchableOpacity
                    style={[FilterScreenStyle.bottomButton, { borderWidth: 2, borderColor: '#f00' }]} >
                    <Text style={[FilterScreenStyle.buttonText, { color: '#f00' }]}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[FilterScreenStyle.bottomButton, { backgroundColor: '#f00' }]} >
                    <Text style={[FilterScreenStyle.buttonText, { color: '#fff' }]}>APPLY</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const borderView = () => {
    return (
        <View style={{
            backgroundColor: '#808080',
            width: '100%',
            height: 0.5,
        }} />
    )
}

const ExpandableComponent = ({ item, onClickFunction,catSelectedItem,onClickSubCat,subCatId }) => {
    //Custom Component for the Expandable List
    const [layoutHeight, setLayoutHeight] = useState(0);

    useEffect(() => {
        if (item.isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0);
        }
    }, [item.isExpanded]);
    return (
        <View>
            {/*Header of the Expandable List Item*/}
            <TouchableOpacity key={item.id} activeOpacity={0.8}
                onPress={onClickFunction} style={FilterScreenStyle.menuItem}>
                <Text style={[FilterScreenStyle.startItemText, { color:catSelectedItem === item.id?'#f00': '#bbb' }]}> {item.category_name}</Text>
            </TouchableOpacity>
            {item.Expandable ? null : borderView()}
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden',

                }}>
                {/*Content under the header of the Expandable List Item*/}
                {item.subcategory.map((item, key) => (
                    <TouchableOpacity
                        key={key}
                        style={FilterScreenStyle.content1}
                        onPress={
                            () =>  onClickSubCat(item.id)
                        }>
                        <Text style={[FilterScreenStyle.startItemText, { color:subCatId === item.id?'#f00': '#bbb', paddingVertical: 15 }]}>
                            {item.val}
                        </Text>
                        <View style={FilterScreenStyle.separator} />
                    </TouchableOpacity>
                ))}

            </View>
        </View>
    );
};


export default Filter;
