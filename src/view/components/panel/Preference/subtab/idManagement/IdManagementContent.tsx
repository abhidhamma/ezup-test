import { SelectBox } from '@components/common/SelectBox'
import { Table } from '@components/common/Table/Table'

export const IdManagementContent = () => {
  return (
    <>
      <div className='grid grid-rows-[1fr_15fr] m-1 '>
        <div className='grid m-2'>
          <div>
            검색항목 <SelectBox text={'쇼핑몰명'} /> <input className='border-black border' />
            <input type={'button'} value='검색' className='border-black border' /> 선택사항
            <SelectBox text={'서비스'} /> <SelectBox text={'거래중'} />
          </div>
        </div>
        <Table />
      </div>
    </>
  )
}
