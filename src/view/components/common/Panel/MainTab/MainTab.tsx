import { mainTabAtom } from '@state/mainTab'
import { useRecoilValue } from 'recoil'
import { SingleMainTab } from './SingleMainTab'

export const MainTab = () => {
  const mainTab = useRecoilValue(mainTabAtom)
  return (
    <div
      className={
        'grid grid-flow-col border-MainTabBorder border-b justify-start row-span-1 grid-cols-[repeat(10,fit-content(300px))]'
      }
    >
      {mainTab.map(({ tabName, isOpen }) => (
        <SingleMainTab key={tabName} tabName={tabName} isOpen={isOpen} />
      ))}
    </div>
  )
}
