import { SubTab } from '@components/common/SubTab/SubTab'
import { ProductManager } from '@components/panel/ProductManager/ProductManager'
import { ISubTab } from '@state/subTab'
import { ITabs } from 'src/others/type'

export const HomeRouter = ({ subTabName }: any) => {
  return <>Home</>
}
export const PreferenceRouter = () => {
  const preferenceTabs: ITabs[] = [
    { tabName: '일반', isOpen: true },
    { tabName: '쇼핑몰/ID관리', isOpen: false },
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
