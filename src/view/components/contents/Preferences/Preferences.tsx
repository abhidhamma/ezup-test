import { IconBar } from '@components/common/IconBar/IconBar'
import { StatusBar } from '@components/common/StatusBar/StatusBar'
import { MainTab } from '@components/common/Panel/MainTab/MainTab'
import { SubTab } from '@components/common/Panel/SubTab/SubTab'
import { Content } from '@components/common/Panel/Content/Content'

export const PreferencesContents = () => {
  return (
    <>
      <div className='grid grid-rows-[25px_1fr_25px] h-full bg-MainTab'>
        <IconBar />
        <div className='grid grid-flow-col '>
          <div className='bg-SubTab col-span-1 border-MainTabBorder border m-1'></div>
          <div className='grid grid-rows-[25px_1fr] bg-MainTab col-span-8 border-MainTabBorder border m-1'>
            <MainTab />
            <div className='grid grid-rows-[26px_1fr] m-2 border-MainTabBorder border-t-0'>
              <SubTab />
              <Content />
            </div>
          </div>
        </div>
        <StatusBar />
      </div>
    </>
  )
}
