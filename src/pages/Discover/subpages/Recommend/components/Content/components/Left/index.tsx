import React from "react";
import style from './index.less';
import Hot from './components/Hot';
import New from './components/New';
import List from './components/List';

const Left: React.FC = () => {
  return (
    <div className={style.left}>
      <Hot/>
      <New/>
      <List/>
    </div>
  );
};

export default Left;
