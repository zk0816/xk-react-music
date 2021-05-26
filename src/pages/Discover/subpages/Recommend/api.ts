import { http } from '@/request/http';
import request from '@/request/request';

type P<T> = http.PromiseResp<T>;

//获取轮播图列表
export function GetCarouselList (type?:number):P<any> {
  return request.get(`/api/banner?type=${type}`)
}
