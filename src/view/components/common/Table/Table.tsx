import * as R from 'ramda'
import { Header } from './Header'
import { Row } from './Row'

export const Table = () => {
  const makeRows = () => {
    const makeRow = (number: number) => <Row key={number} />
    return R.pipe(R.range(1), R.map(makeRow))(44)
  }
  return (
    <>
      <div className='grid bg-white'>
        <div className='grid auto-rows-min h-[648px] overflow-x-scroll overflow-y-scroll'>
          <Header />
          {makeRows()}
        </div>
      </div>
    </>
  )
}
