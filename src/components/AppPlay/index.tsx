import { Button } from 'antd';
import React, { useState } from 'react'
import style from './index.less'

const AppPlay = () => {
  const [lock,setLock] = useState(true)
  const onChange = () => {
    setLock(!lock)
  }
  return (
    <div className={style.fill}>
      <Button onClick={onChange}>2222</Button>
      <div className={lock ? style.top : style.top_lock}>111</div>
    </div>
  );
}

export default AppPlay;
