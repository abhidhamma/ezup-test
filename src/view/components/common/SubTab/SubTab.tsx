import { subTabAtom } from '@state/subTab'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { ITabs } from 'src/others/type'
import { SingleSubTab } from './SingleSubTab'

type SubTabProps = {
  initialTabs: ITabs[]
}

export const SubTab = ({ initialTabs }: SubTabProps) => {
  const [tabs, setTabs] = useState(initialTabs)

  return (
    // <div className='grid grid-rows-[25px_1fr] m-1 border-TabBorder border-t-0'>
    <div className='grid grid-flow-col justify-start row-span-1 border-SoftTabBorder border-b grid-cols-[repeat(10,fit-content(300px))]'>
      {tabs.map(({ tabName, isOpen }) => (
        <SingleSubTab key={tabName} tabName={tabName} isOpen={isOpen} setTabs={setTabs} />
      ))}
      <div className='grid justify-center  border-SoftTabBorder border-b'></div>
    </div>
    // {tabs.find(({ isOpen }) => isOpen)?.panel}
    // </div>
  )
}
