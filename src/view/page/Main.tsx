import { IconBar } from '@components/common/IconBar/IconBar'
import { Content } from '@components/common/Panel/Content/Content'
import { MainTab } from '@components/common/Panel/MainTab/MainTab'
import { SubTab } from '@components/common/Panel/SubTab/SubTab'
import { TreeMenu } from '@components/common/SideBar/TreeMenu'
import { StatusBar } from '@components/common/StatusBar/StatusBar'
import { mainTabAtom } from '@state/mainTab'
import { subTabAtom } from '@state/subTab'
import { useRecoilValue } from 'recoil'

export const Main = () => {
  const mainTab = useRecoilValue(mainTabAtom)
  const subTab = useRecoilValue(subTabAtom)

  console.log('Main : ', mainTab)
  const [{ tabName: currentMainTab }] = mainTab.filter((tab) => tab.isOpen)
  const [{ tabName: currentSubTab }] = subTab.filter((tab) => tab.isOpen)
  // const currentMainTab = mainTab.find((tab) => tab.isOpen)?.tabName
  // const currentSubTab = subTab.find((tab) => tab.isOpen)?.tabName

  return (
    <>
      <div className='grid grid-rows-[25px_1fr_25px] h-full bg-MainTab'>
        <IconBar />
        <div className='grid grid-flow-col '>
          <div className='bg-SubTab col-span-1 border-MainTabBorder border m-1'>
            <TreeMenu />
          </div>
          <div className='grid grid-rows-[26px_1fr] bg-MainTab col-span-8 border-MainTabBorder border m-1'>
            <MainTab />
            <div className='grid grid-rows-[26px_1fr] m-2 border-MainTabBorder border-t-0'>
              {/* <SubTab />
              <Content /> */}
              {currentMainTab === 'home' && <div>home</div>}
              {currentMainTab === '환경설정' && (
                <>
                  <SubTab />
                  {currentSubTab === '일반' && <Content />}
                  {currentSubTab === '쇼핑몰/ID관리' && <div>쇼핑몰/ID관리</div>}
                </>
              )}
            </div>
          </div>
        </div>
        <StatusBar />
      </div>
    </>
  )
}
