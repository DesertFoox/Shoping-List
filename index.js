import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import { CounterContextProvider } from './src/Core/Context/UserContext';

import App from './src/Container/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
