import { HomeRouter, PreferenceRouter, ProductManagementRouter } from './SubTabRouter'

export const MainTabRouter = ({ mainTabName }: any) => {
  const mainTabRoute = (mainTabName: string) => {
    switch (mainTabName) {
      case 'home':
        return <HomeRouter />
      case '환경설정':
        return <PreferenceRouter />
      case '상품관리':
        return <ProductManagementRouter />
      default:
        return <>메인탭</>
    }
  }
  return mainTabRoute(mainTabName)
}
