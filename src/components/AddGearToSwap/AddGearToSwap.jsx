import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../AddGearToSwap/AddGearToSwap.css";

export default function AddGearToSwap({selectedSwap}) {
  const dispatch = useDispatch();

  
  const gear = useSelector((state) => state?.gear);
  const gearToAdd = useSelector((state) => state?.gearToAdd);
  const swapItems = useSelector(state => state?.swapItems)
  const [availableItems, setAvailableItems] = useState([])

  useEffect(() => {
    dispatch({ type: "FETCH_GEAR" });
  }, []);

  // useEffect(() => {
  //   unaddedItems();
  // }, [swapItems]);

  const addGear = (piece) => {
    dispatch({ type: "ADD_SELECTED_TO_SWAP", payload: {piece_id: piece.id, selectedSwap} });
  };

  // const unaddedItems = () => {
  //   let result = [];
  //   for (const item of gear) {
  //     for (const swapItem of swapItems) {
  //       if(item.id === swapItem.item_id){
  //         result.push(item)
  //       }
  //     }
  //   }
  //   setAvailableItems(result)
  // }

  

  return (
    <>
      <p className="title"> Add Items to Swap Here: </p>
      <div className="container">
        {gear?.map((piece) => (
          <div className="item">
            <img className="image" src={piece.image[0]} />
            <p className="name">{piece.title}</p>
            <p className="mygear-price">${piece.price}</p>
              <button onClick={() => addGear(piece)} className="add-button">
                Add
              </button>
            
          </div>
        ))}
      </div>
    </>
  );
}
