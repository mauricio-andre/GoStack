import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // adb reverse tcp:9090 tcp:9090
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
