import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import BodyComponent from './src/BodyComponent';
import TransactionComponent from './src/TransactionComponent'

const AppSwitchNavigator = createSwitchNavigator({
    Home: { screen: BodyComponent },
    AccountSummary: { screen: TransactionComponent }
  });

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;