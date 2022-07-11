// interface ISelectBox {
//   options: ISelectBoxOption[]
// }
// interface ISelectBoxOption {
//   text: string
//   value: string
// }

// export const SelectBox = ({ options }: ISelectBox) => {
//   return (
//     <select className='border'>
//       {options.map(({ text, value }) => (
//         <option key={value} value={value}>
//           {text}
//         </option>
//       ))}
//     </select>
//   )
// }

export const SelectBox = ({ text }: any) => {
  return (
    <select className='border-black border mx-2 w-[120px]'>
      <option key={text} value={text}>
        {text}
      </option>
    </select>
  )
}
