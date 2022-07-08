import { SubTab } from '@components/common/Panel/SubTab/SubTab'
import { ITabs } from 'src/others/type'
import { ProductList } from './ProductList'

export const ProductManager = () => {
  const productManagerTabs: ITabs[] = [
    { tabName: '전체상품', isOpen: true, panel: <ProductList /> },
  ]
  return (
    <>
      <div className='grid grid-rows-[100px_1fr]'>
        <div className='grid m-1'>검색인풋</div>
        <div className='grid grid-flow-col justify-center grid-cols-[1fr_9fr]'>
          <div className='grid border-TabBorder border m-1'>트리</div>
          <div className='grid border-TabBorder border m-1 ml-0'>
            <SubTab initialTabs={productManagerTabs} />
          </div>
        </div>
      </div>
    </>
  )
}
