export default function Input({
  labelText,
  type,
  name,
  value
}) {
  return (
    <label>
      {labelText}
      {type == 'input' ? 
      <input name={name} defaultValue={value}/> :
      <textarea name={name} defaultValue={value}/>}
    </label>
  )
}

/*Small unit is the Input component. It has label and input
elements.Props are label text, input type, value, id
*/