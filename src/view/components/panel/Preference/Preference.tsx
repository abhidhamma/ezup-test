import { SubTab } from '@components/common/SubTab/SubTab'
import { Outlet } from 'react-router-dom'
import { ITabs } from 'src/others/type'

export const Preference = () => {
  const preferenceTabs: ITabs[] = [
    { tabName: '일반', isOpen: true },
    { tabName: '쇼핑몰/ID관리', isOpen: false },
  ]

  return (
    <>
      <div className='grid grid-rows-[25px_1fr] m-1 border-TabBorder border-t-0'>
        <SubTab initialTabs={preferenceTabs} />
        <Outlet />
      </div>
    </>
  )
}
