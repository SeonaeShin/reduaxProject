import { Navigation } from 'react-native-navigation';

import LoadingScreen from './LoadingScreen';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab1Detail from './Tab1Detail';

// * redux를 위한 추가
import configureStore from '../store/configureStore'
const Store = configureStore()
import { Provider } from 'react-redux'
// *

// register all screens of the app (including internal ones)
export function registerScreens() {
    //네비게이터에 로딩화면 등록
    // Navigation.registerComponent('LoadingScreen', () => LoadingScreen);
    Navigation.registerComponent('LoadingScreen', () => LoadingScreen, Store, Provider);
    Navigation.registerComponent('Tab1', () => Tab1, Store, Provider);
    Navigation.registerComponent('Tab2', () => Tab2);
    Navigation.registerComponent('Tab1Detail', () => Tab1Detail);
}