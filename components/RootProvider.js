import { Provider } from "react-redux";
import { useStore } from "../redux/store.js";

export default function RootProvider(props) {
  const store = useStore(props.pageProps.initialReduxState);

  return <Provider store={store}>{props.children}</Provider>;
}
