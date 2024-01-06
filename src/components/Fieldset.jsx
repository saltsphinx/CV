import { Fragment } from "react";

export default function Fieldset({
  title,
  children,
  className= ''
}) {
  return (
    <fieldset className={className ? className : null}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  )
}

//  Second is Fieldset component. Returns a fieldet and legend element. Props are title and children of Inputs