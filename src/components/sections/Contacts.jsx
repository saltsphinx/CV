import Input from "../Input"
import Fieldset from "../Fieldset"

export default function Contacts({ info }) {
  return (
    <Fieldset title='Contacts'>
      <Input labelText='Name: ' type='input' name='name' value={info.name} />
      <Input labelText='Email: ' type='input' name='email' value={info.email} />
      <Input labelText='Phone: ' type='input' name='tel' value={info.tel} />
    </Fieldset>
  )
}