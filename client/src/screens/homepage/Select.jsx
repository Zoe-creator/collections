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
    { id: 6, name: "Toy", case: "Toy" },
    { id: 7, name: "Doll", case: "Doll" },
    { id: 8, name: "Tech", case: "Tech" },
    { id: 9, name: "Bag", case: "Bag" },

  ];

  const handleChange = (event) => {
    props.onChange(event)
    setIsChecked((curr) => !curr)
  }

  return (
    <div className="select-box">
      {
        selectList.map((item) => (
          <div className='select-div'>
            <label className='select' >
              {item.name}
              <input
                className="checkbox"
                key={item.id}
                name={item.name}
                onChange={handleChange}
                type="checkbox"
                style={{backgroundColor: `yellow`}}
                check={isChecked.toString()}
                value={item.case}
              />
            </label>
          </div>
        )
        )}
    </div>)
}

export default Select;