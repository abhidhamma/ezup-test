import { IMainTab, mainTabAtom } from '@state/mainTab'
import { SyntheticEvent } from 'react'
import { useSetRecoilState } from 'recoil'

export const SingleMainTab = ({ tabName, isOpen }: any) => {
  const setMainTab = useSetRecoilState(mainTabAtom)

  const selectTab = () => {
    console.log('selectTab')
    setMainTab((tabs: IMainTab[]): IMainTab[] =>
      tabs.map((tab) =>
        tab.tabName === tabName
          ? { tabName, isOpen: true }
          : { tabName: tab.tabName, isOpen: false }
      )
    )
  }

  const removeTab = (e: SyntheticEvent) => {
    e.stopPropagation()

    setMainTab((tabs: IMainTab[]): IMainTab[] => {
      const removedTabs = tabs.filter((tab) => tab.tabName !== tabName)
      const lastIndex = removedTabs.length - 1

      return removedTabs.map((tab, index) =>
        index === lastIndex ? { tabName: tab.tabName, isOpen: true } : tab
      )
    })
  }

  const backgroundColor = isOpen ? 'bg-white' : 'bg-MainTab'
  const border = isOpen ? 'border border-b-0' : 'border'
  return (
    <>
      <div
        className={`grid grid-flow-col justify-center px-1 border-MainTabBorder ${border} ${backgroundColor}`}
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
