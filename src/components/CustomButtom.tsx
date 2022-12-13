import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CustomButtom: FC<{
  title: string;
  icon: string;
  desc:string;
  onPress?: (t: any) => void;
}> = ({ title, icon, desc,onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ height: 200, width: '100%', borderRadius: 10,
    overflow:'hidden' }}
    >
      <View
        style={{
          flex:1,
          flexDirection:'row',
          alignItems:'center'
        }}>

    <View style={{ width:'70%' }}>
      <Text
        style={{
          fontSize: 20,
          color:'#fff',
          fontFamily: "Poppins-Bold",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color:'#f00',
          fontFamily: "Poppins-SemiBold",
        }}
      >
        {desc}
      </Text>
    </View></View>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    shadowOffset: { width: 10, height: 10 },
    overflow: "hidden",
    padding: 5,
  },
  text: {
    fontSize: 20,
    marginTop: 5,
    color: "#457C78",
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
});

export default CustomButtom;
