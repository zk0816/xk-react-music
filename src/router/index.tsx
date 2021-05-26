// src/router->index.js  (配置路由映射)
// import React from 'react'
// const RMDiscover = React.lazy(() => import('@/pages/Discover'))
// const RMRecommend = React.lazy(() => import('@/pages/Discover/subpages/Recommend'));
// const RMRanking = React.lazy(() => import('@/pages/Discover/subpages/Ranking'));
// const RMSongs = React.lazy(() => import('@/pages/Discover/subpages/Songs'));
// const RMDjradio = React.lazy(() => import('@/pages/Discover/subpages/Djradio'));
// const RMArtist = React.lazy(() => import('@/pages/Discover/subpages/Artist'));
// const RMAlbum = React.lazy(() => import('@/pages/Discover/subpages/Album'));
// const RMPlayer = React.lazy(() => import('@/pages/Discover/subpages/Player'));
import {Redirect} from 'react-router-dom';
import React from 'react';
import RMDiscover from '@/pages/Discover'
import RMRecommend from '@/pages/Discover/subpages/Recommend'
import RMRanking from '@/pages/Discover/subpages/Ranking'
import RMAlbum from '@/pages/Discover/subpages/Album'
import RMDjradio from '@/pages/Discover/subpages/Djradio'
import RMArtist from '@/pages/Discover/subpages/Artist'
import RMSongs from '@/pages/Discover/subpages/Songs'
import RMPlayer from '@/pages/Discover/subpages/Player'

import Mine from "@/pages/Mine";
import Friend from "@/pages/Friend";

const RedIndex = () => {
  return <Redirect to="/discover" />;
}

const RedRecommend = () => {
  return <Redirect to="/discover/recommend" />;
};

const routes = [
  {
    path: "/",
    exact: true,
    render: RedIndex,
  },
  {
    path: "/discover",
    component: RMDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: RedRecommend,
      },
      { path: "/discover/recommend", component: RMRecommend },
      { path: "/discover/ranking", component: RMRanking },
      { path: "/discover/album", component: RMAlbum },
      { path: "/discover/djradio", component: RMDjradio },
      { path: "/discover/artist", component: RMArtist },
      { path: "/discover/songs", component: RMSongs },
      { path: "/discover/song", component: RMPlayer },
    ],
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/friend",
    component: Friend,
  },
];

export default routes;
