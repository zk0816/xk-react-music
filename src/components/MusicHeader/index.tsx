import React from 'react';
import { NavLink } from 'react-router-dom';

const MusicHeader = () => {
  return (
    <div style={{ display: 'flex', textAlign: 'center' }}>
      <NavLink to="/discover">发现音乐111</NavLink>
      <NavLink to="/mine">我的音乐</NavLink>
      <NavLink to="/friend">朋友</NavLink>
    </div>
  );
};

export default MusicHeader;
