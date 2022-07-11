import { IMainTab, mainTabAtom } from '@state/mainTab'
import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { routeMap } from 'src/others/constant/routeMap'

export const SingleMainTab = ({ tabName, isOpen }: any) => {
  const setMainTab = useSetRecoilState(mainTabAtom)
  const navigate = useNavigate()

  const selectTab = () => {
    setMainTab((tabs: IMainTab[]): IMainTab[] =>
      tabs.map((tab) =>
        tab.tabName === tabName
          ? { tabName, isOpen: true }
          : { tabName: tab.tabName, isOpen: false }
      )
    )
    navigate(`${routeMap[tabName]}`)
  }

  const removeTab = (e: SyntheticEvent) => {
    e.stopPropagation()

    let lastTabName = 'home'
    setMainTab((tabs: IMainTab[]): IMainTab[] => {
      const removedTabs = tabs.filter((tab) => tab.tabName !== tabName)
      const lastIndex = removedTabs.length - 1
      lastTabName = removedTabs[lastIndex].tabName

      return removedTabs.map((tab, index) =>
        index === lastIndex ? { tabName: tab.tabName, isOpen: true } : tab
      )
    })

    navigate(`${routeMap[lastTabName]}`)
  }

  const backgroundColor = isOpen ? 'bg-white' : 'bg-Tab'
  const border = isOpen ? 'border border-b-0' : 'border'
  return (
    <>
      <div
        className={`grid grid-flow-col justify-center px-1 border-TabBorder ${border} ${backgroundColor}`}
        onClick={selectTab}
      >
        {tabName}
        {isOpen && tabName !== 'home' && (
          <div className='mx-1 leading-5' onClick={removeTab}>
            x
          </div>
        )}
      </div>
    </>
  )
}
