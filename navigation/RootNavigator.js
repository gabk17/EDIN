import React from 'react';
import { useSelector } from 'react-redux';

import SetUpStackNavigator from './SetUpStackNavigator';
import TabsNavigation from './TabsNavigation';

const RootNavigator = () => {

  const auth = useSelector(state => state.checkAuth)

  return (
    !auth ? (
      <SetUpStackNavigator />
    ) :
      <TabsNavigation />
  );
};

export default RootNavigator;
