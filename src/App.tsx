import React, {FC} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Layout} from "antd";

const App: FC = () => {
  return (
      <Layout>
          <NavBar/>
          <Layout.Content>
              <AppRouter/>
          </Layout.Content>
      </Layout>
  );
}

export default App;
