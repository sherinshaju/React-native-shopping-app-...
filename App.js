import React, { Component } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import Footer from "./Component/Footer/Footer";
import Search from "./Component/Search/Search";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer/Reducer";
import Home from "./Component/Home";
import Cart from "./Component/Cart";
import { NativeRouter, Route, Switch } from "react-router-native";

const store = createStore(rootReducer);
const unsubscribe = store.subscribe(() => console.log(store.getState()));

console.log(store.getState());

unsubscribe();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
    
            <View>
              <ScrollView>
                <View style={{ width: "100%", height: 70 }}>
                  <Search />
                </View>
                <Route exact path="/" component={Home} />
                <Route exact path="/cart" component={Cart} />
              </ScrollView>
              <Footer />
            </View>
      
        </NativeRouter>
      </Provider>
    );
  }
}
export default App;
