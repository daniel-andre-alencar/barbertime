import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';

import Home from "./pages/home";
import Reservar from "./pages/reservas";
import Galeria from "./pages/galeria";
import Perfil from "./pages/perfil";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const getTabBarIcon = (route, focused, color, size) => {
    let iconName;

    if (route.name === "inicio") {
      iconName = focused ? "home" : "home";
    } else if (route.name === "reservas") {
      iconName = focused ? "calendar" : "calendar";
    } else if (route.name === "Galeria") {
      iconName = focused ? "image" : "image";
    } else if (route.name === "Perfil") {
      iconName = focused ? "check" : "check";
    }

    const iconColor = focused ? "#FFFFFF" : color;

    return <Entypo name={iconName} size={size} color={iconColor} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          paddingHorizontal: 5,
          backgroundColor: '#080B16',
          position: 'absolute',
          borderTopWidth: 1,
          borderTopColor: 'red',
        },
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route, focused, color, size),
        tabBarActiveTintColor: "#FFFFFF",
      })}
    >
      <Tab.Screen
        name="inicio"
        component={Home}
      />

      <Tab.Screen
        name="reservas"
        component={Reservar}
      />

      <Tab.Screen
        name="Galeria"
        component={Galeria}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
