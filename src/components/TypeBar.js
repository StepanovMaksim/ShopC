import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ul className="list-group">
      {device.types.map((type) => (
        <li 
            className="list-group-item" 
            style={{cursor: "pointer", backgroundColor: type.id === device.selectedType.id ? "Cyan" : "white"}}
            onClick={() => device.setSelectedType(type)}
            key={type.id}
        >
          {type.name}
        </li>
      ))}
    </ul>
  );
});

export default TypeBar;
