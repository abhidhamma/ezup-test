import { ISubTab } from '@state/subTab'

export const SingleSubTab = ({ tabName, isOpen, setTabs }: any) => {
  const selectTab = () => {
    setTabs((tabs: ISubTab[]): ISubTab[] =>
      tabs.map((tab) =>
        tab.tabName === tabName ? { ...tab, isOpen: true } : { ...tab, isOpen: false }
      )
    )
  }

  const backgroundColor = isOpen ? 'bg-white' : 'bg-Tab'
  const border = isOpen ? 'border border-b-0' : 'border'

  return (
    <>
      <div
        className={`grid justify-center  border-SoftTabBorder border ${border} ${backgroundColor}`}
        onClick={selectTab}
      >
        {tabName}
      </div>
    </>
  )
}
