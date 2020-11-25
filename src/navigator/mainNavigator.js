import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen014969Navigator from '../features/CopyOfCopyOfBlankScreen014969/navigator';
import CopyOfBlankScreen014968Navigator from '../features/CopyOfBlankScreen014968/navigator';
import CopyOfBlankScreen014967Navigator from '../features/CopyOfBlankScreen014967/navigator';
import CopyOfBlankScreen014965Navigator from '../features/CopyOfBlankScreen014965/navigator';
import CopyOfBlankScreen014964Navigator from '../features/CopyOfBlankScreen014964/navigator';
import BlankScreen114955Navigator from '../features/BlankScreen114955/navigator';
import BlankScreen014947Navigator from '../features/BlankScreen014947/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfCopyOfBlankScreen014969: { screen: CopyOfCopyOfBlankScreen014969Navigator },
CopyOfBlankScreen014968: { screen: CopyOfBlankScreen014968Navigator },
CopyOfBlankScreen014967: { screen: CopyOfBlankScreen014967Navigator },
CopyOfBlankScreen014965: { screen: CopyOfBlankScreen014965Navigator },
CopyOfBlankScreen014964: { screen: CopyOfBlankScreen014964Navigator },
BlankScreen114955: { screen: BlankScreen114955Navigator },
BlankScreen014947: { screen: BlankScreen014947Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
