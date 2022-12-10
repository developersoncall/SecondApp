import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { useIsFocused } from "@react-navigation/native";
import Home from '../screens/HomeScreen/Home'
import Profile from '../screens/ProfileScreen/Profile';

import Details from '../screens/DetailsScreen/Details'
const Stack = createNativeStackNavigator();


const MainStack = () => {
  const [key, setKey] = React.useState(0);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (!isFocused) setKey((k: number) => k + 1);
  }, [isFocused]);

  return (
    <Stack.Navigator
      key={key}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        swipeEnabled: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// const DrawerStack = () => {
//   return (
//     <Drawer.Navigator
//       useLegacyImplementation
//       screenOptions={{
//         drawerStyle: {
//           width: "100%",
//           backgroundColor: "#002720",
//         },
//         drawerType: "back",
//       }}
//       hideStatusBar={true}
//       drawerContent={(props) => <CustomSideBarMenu {...props} />}
//     >
//       <Drawer.Screen
//         name="MainStack"
//         component={MainStack}
//         options={{
//           headerShown: false,
//           gestureEnabled: false,
//           swipeEnabled: false,
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default DrawerStack;
export default MainStack;
