import request from '@/request/request';

type P<T> = Promise<T>;

//获取轮播图列表
export function GetCarouselList (type?:number):P<any> {
  return request.get(`/api/banner?type=${type}`)
}

//获取热门推荐歌单
export function GetPersonalized (limit?:number):P<any> {
  return request.get(`/api/personalized?limit=${limit}`)
}

//新碟上架
export function GetNewest ():P<any> {
  return request.get('/api/album/newest')
}

//3个榜单
export function GetList (id:number):P<any> {
  return request.get(`/api/playlist/detail?id=${id}`)
}
