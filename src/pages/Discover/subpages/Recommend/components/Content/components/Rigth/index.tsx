import React from "react";
import Login from './components/Login';
import ResidentSinger from './components/ResidentSinger';
import PopularAnchors from './components/PopularAnchors';
import style from './index.less';

const Right: React.FC = () => {
  return (
    <div className={style.header}>
      <Login />
      <ResidentSinger />
      <PopularAnchors />
    </div>
  )
};

export default Right;
