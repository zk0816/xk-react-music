import request from '@/request/request';

type P<T> = Promise<T>;

//全局请假音乐接口
export function Music (ids:number):P<any> {
  return request.get(`/api/song/detail?ids=${ids}`)
}

//音乐是否可用
export function MusicTrue(id:number):P<any> {
  return request.get(`/api/check/music?id=${id}`)
}
