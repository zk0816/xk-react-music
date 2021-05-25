import React from 'react';
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { dicoverMenu } from "@/common/local-data";
import style from './index.less';

const RMDiscover: React.FC = (props:any) => {
  const { route } = props;
  return (
    <div className={style.header}>
      <div className="top">
        <div className="wrap-v1" style={{display: 'flex'}}>
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </div>
      </div>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default RMDiscover;
