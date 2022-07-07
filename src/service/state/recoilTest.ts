import { atom } from 'recoil'

export const testAtom = atom<string>({
  key: 'user',
  default: '아이콘그룹false',
})
