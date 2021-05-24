import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import MusicHeader from '@/components/MusicHeader';
import MusicFooter from '@/components/MusicFooter';
import routes from '@/router';
import "./app.less";



const App = () => {
  return (
    <BrowserRouter>
      <MusicHeader />
      {renderRoutes(routes)}
      <MusicFooter />
    </BrowserRouter>
  );
};

export default memo(App);
