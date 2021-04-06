import { useState } from "react";

import "./Select.css"
const Select = ({onChange}) => {
  const [isChecked, setIsChecked] = useState(false)

  const selectList = [
    { id: 1, name: "Unknown" },
    { id: 2, name: "Book"},
    { id: 3, name: "Fossile"},
    { id: 4, name: "Jewelry"},
    { id: 5, name: "Game" },
    { id: 6, name: "Toy"},
    { id: 7, name: "Doll"},
    { id: 8, name: "Tech"},
    { id: 9, name: "Bag"},

  ];

  const handleChange = (e) => {
    onChange(e)
    setIsChecked((curr) => !curr)
  }

  return (
    <div className="select-box">
      {
        selectList.map(item => 
          <div className='select-div' key={item.id}>
            <label className='select'  >
              {item.name}
              <input
                className="checkbox"
                name={item.name}
                onChange={handleChange}
                type="checkbox"
                check={isChecked.toString()}
                value={item.name}
              />
            </label>
          </div>
        )}
    </div>)
}

export default Select;