import React from "react"
import ItemCount from "./ItemCount"


export function Itemlistcontainer({ texto }) {

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };



  return (
    <><div className="texto"> {texto} </div>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
}
export default Itemlistcontainer;