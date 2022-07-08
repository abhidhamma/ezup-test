import { Content } from '@components/common/Panel/Content/Content'
import { SubTab } from '@components/common/Panel/SubTab/SubTab'
import { ProductManager } from '@components/contents/ProductManager/ProductManager'
import { ISubTab } from '@state/subTab'
import { ITabs } from 'src/others/type'

export const HomeRouter = ({ subTabName }: any) => {
  return <>Home</>
}
export const PreferenceRouter = () => {
  const preferenceTabs: ITabs[] = [
    { tabName: '일반', isOpen: true, panel: <Content /> },
    { tabName: '쇼핑몰/ID관리', isOpen: false, panel: <div>쇼핑몰/ID관리</div> },
  ]

  return (
    <>
      <SubTab initialTabs={preferenceTabs} />
    </>
  )
}
export const ProductManagementRouter = ({ subTabName }: any) => {
  const productManagementTabRoute = (subTabName: string) => {
    switch (subTabName) {
      default:
        return <ProductManager />
    }
  }
  return <>{productManagementTabRoute(subTabName)}</>
}
