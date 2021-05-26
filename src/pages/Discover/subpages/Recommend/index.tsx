import React, { useEffect } from 'react';
import * as API from './api';

const Recommend: React.FC = () => {

  useEffect(() =>{
    API.GetCarouselList(0).then(res=>{
      console.log('res',res)
    })
  },[])
  return (
    <div>
      <div>Recommend</div>
    </div>
  );
};

export default Recommend;
