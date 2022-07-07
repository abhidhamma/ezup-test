import { testAtom } from '@state/recoilTest'
import { Suspense } from 'react'
import { useRecoilState } from 'recoil'

export const IconBar = () => {
  const [test, setTest] = useRecoilState<string>(testAtom)

  const testFn = () => {
    if (test === '아이콘그룹false') {
      setTest('아이콘그룹true')
    } else {
      setTest('아이콘그룹false')
    }
  }
  return (
    <Suspense fallback={<div></div>}>
      <div className='mb-1' onClick={testFn}>
        {test}
      </div>
    </Suspense>
  )
}
