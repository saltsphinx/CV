import Input from "../Input"
import Fieldset from "../Fieldset"

export default function Education( { info }) {
  return (
    <Fieldset title='Education'>
      <Input labelText='School: ' type='input' name='school' value={info.school} />
      <Input labelText='Major: ' type='input' name='major' value={info.major} />
      <Input labelText='Date From: ' type='input' name='dateFrom' value={info.dateFrom} />
      <Input labelText='Date to: ' type='input' name='dateTo' value={info.dateTo} />
    </Fieldset>
  );
}