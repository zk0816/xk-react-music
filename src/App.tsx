import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from "react-router-dom";

import MusicHeader from '@/components/MusicHeader';
import MusicFooter from '@/components/MusicFooter';
import routes from '@/router';
import "./app.less";



const App = () => {
  return (
    <HashRouter>
      <MusicHeader />
      {renderRoutes(routes)}
      <MusicFooter />
    </HashRouter>
  );
};

export default memo(App);
