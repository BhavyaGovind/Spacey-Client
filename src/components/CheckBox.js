import React from 'react'

export const CheckBox = props => {
    return (
      <li class="topics">
       <input key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}

export default CheckBox;
