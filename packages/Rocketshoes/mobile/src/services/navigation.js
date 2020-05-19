import { NavigationActions } from '@react-navigation/compat';

let navigator;

function setNavigator(ref) {
  console.tron.log(ref);
  navigator = ref;
}

function navigate(routeName, params = {}) {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
}

export default { setNavigator, navigate };
