import React, { useState } from "react";
import ItemButton from "./components/ItemButton.js";
import ItemInfo from "./components/ItemInfo.js";
import ItemQuantity from "./components/ItemQuantity.js";
import ItemTotal from "./components/ItemTotal.js";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="item">
      <img src={info.image} alt={info.name} />
      <ItemInfo>
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </ItemInfo>
      <ItemQuantity>
        <ItemButton disabled={total === 0} onClick={handleLessClick}>
          –
        </ItemButton>
        <ItemTotal>{total ? total : ""}</ItemTotal>
        <ItemButton onClick={handleMoreClick}>+</ItemButton>
      </ItemQuantity>
    </div>
  );
}
