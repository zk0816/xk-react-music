import React from "react";
import RecommendHeader from "@/components/common/RecommendHeader";
import useInitial from '@/hooks/useInitial';
import * as API from '@/pages/Discover/subpages/Recommend/api';
import MV from '@/components/common/MV';
import style from './index.less';
import { Carousel } from 'antd';

const New: React.FC = () => {
  const { data } = useInitial(API.GetNewest, [], "", "albums");
  return (
    <div>
      <RecommendHeader left="新碟上架" />
      <div className={style.top}>
        <Carousel className={style.carou} dots={false} style={{width:685}}>
          <div>
            <div className={style.imglist}>
              {data.slice(0, 5).map((item: any) => (
                <MV
                  name={item.name}
                  artist={item.artist}
                  key={item.id}
                  blurPicUrl={item.blurPicUrl}
                />
              ))}
            </div>
          </div>
          <div>
            <div className={style.imglist}>
              {data.slice(5, 10).map((item: any) => (
                <MV
                  name={item.name}
                  artist={item.artist}
                  key={item.id}
                  blurPicUrl={item.blurPicUrl}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default New;
