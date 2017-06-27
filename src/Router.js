import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
//import LayoutTwo from './components/LayoutTwo';
//import LayoutOne from './components/LayoutOne';
import TopDashboard from './components/TopDashboard';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="initial">
        <Scene key="dashboard" component={TopDashboard} title="Dashboard" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
