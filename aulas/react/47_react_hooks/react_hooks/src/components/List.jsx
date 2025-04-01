// aula 645 - useCallback
import { useEffect, useState } from "react";
import React from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando dados no DB...");
    setMyItems(getItems);
  }, [getItems]);

  return (
    <div>{myItems && myItems.map((item) => <p key={item}>{item}</p>)}</div>
  );
};

export default List;
