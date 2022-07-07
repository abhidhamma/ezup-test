import { ISubTab, subTabAtom } from '@state/subTab'
import { useSetRecoilState } from 'recoil'

export const SingleSubTab = ({ tabName, isOpen }: any) => {
  const setSubTab = useSetRecoilState(subTabAtom)

  const selectTab = () => {
    setSubTab((tabs: ISubTab[]): ISubTab[] =>
      tabs.map((tab) =>
        tab.tabName === tabName
          ? { tabName, isOpen: true }
          : { tabName: tab.tabName, isOpen: false }
      )
    )
  }

  const backgroundColor = isOpen ? 'bg-white' : 'bg-MainTab'
  const border = isOpen ? 'border border-b-0' : 'border'

  return (
    <>
      <div
        className={`grid justify-center  border-SubTabBorder border ${border} ${backgroundColor}`}
        onClick={selectTab}
      >
        {tabName}
      </div>
    </>
  )
}
