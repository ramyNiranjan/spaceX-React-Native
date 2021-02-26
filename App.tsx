import 'react-native-gesture-handler';
import App from './src/App';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Expected style', 'Remote debugger is in a background tab']);

export default App;
