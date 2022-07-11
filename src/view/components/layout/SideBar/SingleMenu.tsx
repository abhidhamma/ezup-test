import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { mainTabAtom } from '@state/mainTab'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { routeMap } from 'src/others/constant/routeMap'

export const SingleMenu = ({ name, childrenName }: any) => {
  const [mainTab, setMainTab] = useRecoilState(mainTabAtom)
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  const toggle = () => {
    setOpen((open) => !open)
  }

  const addTab = (childName: string) => {
    if (checkDuplicateTab(childName)) {
      setMainTab((tabs) => {
        const beforeTabs = tabs.map((tab) => ({ tabName: tab.tabName, isOpen: false }))
        return [...beforeTabs, { tabName: childName, isOpen: true }]
      })
    } else {
      setMainTab((tabs) => {
        return tabs.map((tab) =>
          tab.tabName === childName
            ? { tabName: tab.tabName, isOpen: true }
            : { tabName: tab.tabName, isOpen: false }
        )
      })
    }
    navigate(`${routeMap[childName]}`)
  }

  const checkDuplicateTab = (childName: string) => {
    for (const tab of mainTab) {
      if (tab.tabName === childName) {
        return false
      }
    }
    return true
  }

  return (
    <>
      <div className='grid grid-flow-col place-content-start w-28'>
        {open ? (
          <ChevronDownIcon className='w-6 h-6' onClick={toggle} />
        ) : (
          <ChevronRightIcon className='w-6 h-6' onClick={toggle} />
        )}
        <div className='w-16'>{name}</div>
      </div>
      {childrenName.map(
        (childName: string) =>
          open && (
            <div key={childName} className='pl-10 w-28' onDoubleClick={() => addTab(childName)}>
              {childName}
            </div>
          )
      )}
    </>
  )
}
