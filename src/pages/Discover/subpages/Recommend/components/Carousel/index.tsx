import useInitial from "@/hooks/useInitial";
import { Carousel } from 'antd';
import React, { useCallback, useRef, useState } from "react";
import * as API from "../../api";
import style from './index.less';

const CarouselList: React.FC = () => {
  const { data:banners } = useInitial(API.GetCarouselList, [], 0, "banners");
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<any>();
  console.log('dsadada', bannerRef,currentIndex)
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(from);
    }, 0);
  }, []);
  return (
    <div>
      <div className={style.banner}>
        <div className={style.left_top}>
          <div
            className={style.left}
            onClick={() => bannerRef.current.prev()}
          ></div>
        </div>
        <div className={style.banner_top}>
          <Carousel autoplay beforeChange={bannerChange} ref={bannerRef}>
            {banners.map((item: any) => {
              return (
                <div className={style.banner_item} key={item.imageUrl}>
                  <a>
                    <img
                      className={style.image}
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </a>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div style={{ height: 285 }}>
          <a
            href="https://music.163.com/#/download"
            className={style.download}
          ></a>
        </div>
        <div className={style.right_top}>
          <div
            className={style.right}
            onClick={() => bannerRef.current.next()}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselList;
