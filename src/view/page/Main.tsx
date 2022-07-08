import { MainTabRouter } from '@app/router/panelRouter/MainTabRouter'
import { IconBar } from '@components/common/IconBar/IconBar'
import { MainTab } from '@components/common/Panel/MainTab/MainTab'
import { TreeMenu } from '@components/common/SideBar/TreeMenu'
import { StatusBar } from '@components/common/StatusBar/StatusBar'
import { mainTabAtom } from '@state/mainTab'
import { useRecoilValue } from 'recoil'

export const Main = () => {
  const mainTab = useRecoilValue(mainTabAtom)
  const currentMainTabName = mainTab.find((tab) => tab.isOpen)?.tabName

  return (
    <>
      <div className='grid grid-rows-[25px_1fr_25px] h-full bg-Tab'>
        <IconBar />
        <div className='grid grid-flow-col '>
          <div className='bg-SoftTab col-span-1 border-TabBorder border m-1'>
            <TreeMenu />
          </div>
          <div className='grid grid-rows-[26px_1fr] bg-Tab col-span-8 border-TabBorder border m-1 ml-0'>
            <MainTab />
            <MainTabRouter mainTabName={currentMainTabName} />
          </div>
        </div>
        <StatusBar />
      </div>
    </>
  )
}
