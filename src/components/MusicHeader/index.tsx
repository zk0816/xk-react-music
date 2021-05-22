import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./index.less";

const MusicHeader = () => {
  return (
    <div className={style.m_top}>
      <div style={{display: 'flex'}}>
        <div className={style.top_img}></div>
        <div className={style.top_title}>
          <NavLink to="/discover">发现音乐</NavLink>
          <NavLink to="/mine">我的音乐</NavLink>
          <NavLink to="/friend">朋友</NavLink>
          <NavLink to="/one">商城</NavLink>
          <NavLink to="/two">音乐人</NavLink>
          <NavLink to="/three">下载客户端</NavLink>
        </div>
      </div>
      <div>666</div>
    </div>
  );
};

export default MusicHeader;
