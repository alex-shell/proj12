import React, { useState } from "react";
import Item from "./Item.js";
import useFetch from "./useFetch.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const { get, loader } = useFetch();

  get("https://covid-shop-mcs.herokuapp.com/")
    .then((data) => setItems(data))
    .catch((err) => console.log(err));

  return (
    <div className="shop">
      {loader && "Загрузка товаров"}
      {items.map((item) => (
        <Item key={item.id} info={item} />
      ))}
    </div>
  );
}
