import { atom } from 'recoil'

export interface ISubTab {
  tabName: string
  isOpen: boolean
}

export const subTabAtom = atom<ISubTab[]>({
  key: 'subTab',
  default: [
    { tabName: '일반', isOpen: true },
    { tabName: '쇼핑몰/ID관리', isOpen: false },
  ],
})
