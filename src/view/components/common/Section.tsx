interface ISection {
  title: string
  children: any
}

export const Section = ({ title, children }: ISection) => {
  return (
    <div className='relative border-SoftTabBorder border m-1 my-2 p-2'>
      <div className='absolute bg-SoftTab top-[-12px] left-[4px] px-1'>{title}</div>
      {children}
    </div>
  )
}
