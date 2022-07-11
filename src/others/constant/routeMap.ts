type IRouteMap = {
  [key: string]: string
}

export const routeMap: IRouteMap = {
  //home
  home: '/home',
  //환경설정
  환경설정: '/preference/general',
  일반: '/preference/general',
  '쇼핑몰/ID관리': '/preference/management',
  //상품수신
  상품수신: '/productReception',
  //상품관리
  상품관리: '/productManagement',
  //작업관리
  작업관리: '/taskManagement',
  //주문연동
  주문연동: '/orderManagement',
  //문의연동
  문의연동: '/inquiryManagement',
  //카테고리
  카테고리: '/categoryManagement',
  //매핑관리
  매핑관리: '/mappingManagement',
  //통계정보
  통계정보: '/statistics',
}
