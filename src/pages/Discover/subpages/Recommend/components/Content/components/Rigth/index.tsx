import React from "react";
import Login from './components/Login';
import ResidentSinger from './components/ResidentSinger';
import style from './index.less';

const Right: React.FC = () => {
  return (
    <div className={style.header}>
      <Login />
      <ResidentSinger />
    </div>
  )
};

export default Right;
