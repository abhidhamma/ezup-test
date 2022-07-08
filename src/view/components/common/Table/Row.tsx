import * as R from 'ramda'

export const Row = () => {
  const makeCells = () => {
    const makeCell = (number: number) => (
      <div className='grid border-SoftTabBorder border' key={number}>
        {number}
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
