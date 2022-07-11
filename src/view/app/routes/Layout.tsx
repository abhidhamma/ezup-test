import { IconBar } from '@components/layout/IconBar/IconBar'
import { MainTab } from '@components/layout/MainTab/MainTab'
import { TreeMenu } from '@components/layout/SideBar/TreeMenu'
import { StatusBar } from '@components/layout/StatusBar/StatusBar'

import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <div className='grid grid-rows-[25px_1fr_25px] h-full bg-Tab'>
        <IconBar />
        <div className='grid grid-flow-col grid-cols-[1fr_9fr]'>
          <div className='bg-SoftTab col-span-1 border-TabBorder border m-1'>
            <TreeMenu />
          </div>
          <div className='grid grid-rows-[26px_1fr] bg-Tab col-span-8 border-TabBorder border m-1 ml-0'>
            <MainTab />
            <Outlet />
          </div>
        </div>
        <StatusBar />
      </div>
    </>
  )
}
