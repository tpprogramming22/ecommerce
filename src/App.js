import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/routes/home/home.components";

import Navigation from "./components/routes/navigation/navigation.components";

import Authentication from "./components/routes/authentication/authentication.component";

const Shop = () => {
  return <h1>This is the shop.</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
