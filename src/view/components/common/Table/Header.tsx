import * as R from 'ramda'

export const Header = () => {
  const makeCells = () => {
    const makeCell = (number: number) => (
      <div
        className='grid bg-TableHeader text-white justify-center border-white border-[0.5px]'
        key={number}
      >
        헤더
      </div>
    )
    return R.pipe(R.range(1), R.map(makeCell))(22)
  }
  // console.log('makeCells : ', makeCells())
  return (
    <>
      <div className='grid grid-flow-col auto-cols-[100px] hover:bg-TableHover'>{makeCells()}</div>
    </>
  )
}
