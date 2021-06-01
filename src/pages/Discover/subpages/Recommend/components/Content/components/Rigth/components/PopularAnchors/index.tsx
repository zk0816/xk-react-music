import React from 'react';
import useInitial from '@/hooks/useInitial';
import * as API from '@/pages/Discover/subpages/Recommend/api';
import style from './index.less';
import Anchors from './compoents/Anchors';

const PopularAnchors = () => {
  const { data } = useInitial(API.GetHotAnchor, {}, 5, "data");
  const hot = data.list === undefined ? [] : data.list;
  console.log("ddd",hot);
  return (
    <div className={style.top}>
      <div className={style.header}>
        <span>热门主播</span>
      </div>
      <div>
        {hot.map((item:any) => (
          <Anchors name={item.nickName} url={item.avatarUrl} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularAnchors;
