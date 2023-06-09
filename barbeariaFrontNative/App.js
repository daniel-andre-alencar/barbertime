import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Cadastro from './src/pages/usuario';
import Login from './src/pages/login';
import Home from './src/pages/home';
import Unidade from './src/pages/unidade';
import Servico from './src/pages/servico';
import Profissional from './src/pages/profissional';
import Data from './src/pages/data';
import Confirmar from './src/pages/comfirmar';
import Reservar from './src/pages/reservas';
import Hora from './src/pages/hora';
import Routes from './src/routes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Routes">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Servico" component={Servico} />
        <Stack.Screen name="Profissional" component={Profissional} />
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="Hora" component={Hora} />
        <Stack.Screen name="Unidade" component={Unidade} />
        <Stack.Screen name="Confirmar" component={Confirmar} />
        <Stack.Screen
          name="Routes"
          component={Routes} // Use the TabNavigator component here
          options={({ route }) => ({
            headerShown: false,
            headerTintColor: '#fff',
            headerTitleStyle: { textAlign: 'center' },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
