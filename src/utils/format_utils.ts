//格式化数字 主要处理播放量 评论人数
export function getCount(count:number) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}
