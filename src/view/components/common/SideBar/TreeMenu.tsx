import { SingleMenu } from './SingleMenu'

export const TreeMenu = () => {
  return (
    <>
      <SingleMenu name={'환경설정'} childrenName={['환경설정']} />
      <SingleMenu name={'마켓연동'} childrenName={['상품수신', '상품관리', '작업관리']} />
      <SingleMenu name={'카테고리'} childrenName={['카테고리', '매핑관리']} />
      <SingleMenu name={'통계정보'} childrenName={['통계정보']} />
    </>
  )
}
