import { useState } from "react";

import "./Select.css"
const Select = (props) => {
  const [isChecked, setIsChecked] = useState(false)

  

  const selectList = [
  { id: 1, name: "Unknown", case: "Unkown" },
  { id: 2, name: "Book", case: "Book" },
  { id: 3, name: "Fossile", case: "Fossile" },
  { id: 4, name: "Jewelry", case: "Jewelry" },
  { id: 5, name: "Game", case: "Game" },
  { id: 6, name: "Doll", case: "Doll" },
  { id: 7, name: "Toy", case: "Toy" },

];

const handleChange = (event) => {
  props.onChange(event)
  setIsChecked((curr) => !curr)
}
  return (
  <div className="select-box">
    {
      selectList.map((item) => (
      <label className='select' >
          {item.name}
          <input
            key={item.id}
            name={item.name}
            onChange={handleChange}
            type="checkbox"
            check={isChecked}
            value={item.case}
          />
        </label>
    ) 
      )}
 </div> )
}

export default Select;