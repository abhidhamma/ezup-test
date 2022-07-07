import { subTabAtom } from '@state/subTab'
import { useRecoilValue } from 'recoil'
import { SingleSubTab } from './SingleSubTab'

export const SubTab = () => {
  const subTab = useRecoilValue(subTabAtom)
  return (
    <div className='grid grid-flow-col justify-start row-span-1 border-MainTabBorder border-b grid-cols-[repeat(10,fit-content(300px))]'>
      {subTab.map(({ tabName, isOpen }) => (
        <SingleSubTab key={tabName} tabName={tabName} isOpen={isOpen} />
      ))}
      <div className='grid justify-center  border-SubTabBorder border-b'></div>
    </div>
  )
}
