import { useState } from 'react'
import cls from './MultiSelect.module.css'
const ITEMS = [
    {"nikki": 1},
    {"vasiliy": 2},
    {"ivan": 3},
    {"paevel": 4},
    {"ibragim": 5}
]
function MultiSelect({options, ...props}) {
    options = [...ITEMS]
    const [hidden, setHidden] = useState(false);
    const [selected, setSelected] = useState([]);
    const toggleHidden = () => setHidden(!hidden);
    // const hideDropdown = () => setHidden(true);
    const hide= () => setHidden(true);
    const cleanSelected = () => setSelected([]);
  return (
    // <div tabIndex={0} className={cls.multiSelect} onBlur={hideDropdown()}>
    <div tabIndex={0} className={cls.multiSelect} onBlur={e=> hidden ? '' : ''} role="combobox" aria-controls="hello">
        <div className={cls.label} >{
          selected.length ?
            selected.map(item=>(<btn>{item}</btn>))
            :
            "select some items"}
            </div>

        <div className={cls.controls}>
        <div className={cls.delBtn}>X</div>
        <div className={cls.dropdownArrow} onClick={e=>toggleHidden()}>V</div>
        </div>

        <ul className={
          hidden ?
          [cls.droppedItems, cls.hidden].join(' ')
          :
          cls.droppedItems
        }
        aria-multiselectable="true"
        role="listbox"
        tabIndex={-1}
        id="hello"
        // <div tabindex="0" role="combobox" aria-controls=":R9alalp9l6kud6:" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="demo-multiple-name-label demo-multiple-name" id="demo-multiple-name" class="MuiSelect-select MuiSelect-outlined MuiSelect-multiple MuiInputBase-input MuiOutlinedInput-input css-qiwgdb">Omar Alexander, Carlos Abbott</div>
          // onBlur={e => hide()}
          >
<li className={cls.dropItem} tabindex="-1" role="option" aria-selected="true" data-value={''}>Carlos Abbott<span class="MuiTouchRipple-root css-w0pj6f"></span></li>
<li className={cls.dropItem} tabindex="-1" role="option" aria-selected="true" data-value={''}>Carlos Abbott<span class="MuiTouchRipple-root css-w0pj6f"></span></li>
<li className={cls.dropItem} tabindex="-1" role="option" aria-selected="true" data-value={''}>Carlos Abbott<span class="MuiTouchRipple-root css-w0pj6f"></span></li>
<li className={cls.dropItem} tabindex="-1" role="option" aria-selected="true" data-value={''}>Carlos Abbott<span class="MuiTouchRipple-root css-w0pj6f"></span></li>
<li className={cls.dropItem} tabindex="-1" role="option" aria-selected="true" data-value={''}>Carlos Abbott<span class="MuiTouchRipple-root css-w0pj6f"></span></li>
<li className={cls.dropItem} tabindex="-1" role="option" aria-selected="true" data-value={''}>Carlos Abbott<span class="MuiTouchRipple-root css-w0pj6f"></span></li>
<li className={cls.dropItem} tabindex="-1" role="option" aria-selected="true" data-value={''}>Carlos Abbott<span class="MuiTouchRipple-root css-w0pj6f"></span></li>
        </ul>
    </div>
  )
}

export default MultiSelect