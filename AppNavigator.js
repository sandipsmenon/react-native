import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import BodyComponent from './src/BodyComponent';
import TransactionComponent from './src/TransactionComponent'
import CardSummary from './src/CreditCardTransaction'
import Accounts from './src/Home'
import LoanSummary from './src/LoanTransaction'
import HeaderComponent from './src/HeaderComponent';
import Summary from './src/Transfer';
import Support from './src/Support';
import More from './src/More';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Accounts,
    Summary,
    Support,
    More
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
     
      return {
        headerTitle: routeName
      };
    },
    tabBarOptions: {
      activeTintColor: '#fff',
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: '#00402e',
      },
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    TabNavigator: DashboardTabNavigator,
    AccountSummary: { screen: TransactionComponent},
    CardSummary: { screen: CardSummary},
    LoanSummary: { screen: LoanSummary}
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
        backgroundColor: '#00402e',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#fff'
        },
      };
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
