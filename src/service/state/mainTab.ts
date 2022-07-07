import { atom } from 'recoil'

export interface IMainTab {
  tabName: string
  isOpen: boolean
}

export const mainTabAtom = atom<IMainTab[]>({
  key: 'mainTab',
  default: [
    { tabName: 'home', isOpen: true },
    { tabName: '환경설정', isOpen: false },
  ],
})
