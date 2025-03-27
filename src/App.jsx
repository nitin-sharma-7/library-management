import React from "react";
import Navbar from "./components/Navbar";

import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { Outlet } from "react-router";

function App() {
  // we pass 'store' so receive this store in any component as store
  return (
    <Provider store={appStore}>
      <Navbar />
      <Outlet />
    </Provider>
  );
}

export default App;
