import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import AdminNavi from './App/navigation/AdminNavi';
import UserNavi from './App/navigation/UserNavi';
import { MessagesList } from './App/screens';


const Drawer = createDrawerNavigator();

const  App =({navigation})=>{

  const [user, setUser] = React.useState(null) // This user
  const [users, setUsers] = React.useState([]) // Other Users
  

 


 

  
  return (
    <NavigationContainer /*independent={true}*/
    >
      <UserNavi/>
    </NavigationContainer>
  );
}

export default App;
