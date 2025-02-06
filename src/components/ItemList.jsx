// const ItemList= ({items})=> {
//     console.log(items);
//     return(
//         <div>
//          {items.map((item)=> (
//             <div key={item.itemCards.card.info.id}>
//                 <div>
//                     <span>{item.itemCards.card.info.name}</span>
//                     <span>{item.itemCards.card.info.price}</span>
//                 </div>
//                 <p>{item.itemCards.card.info.description} </p>
                
//             </div>
//          ))}
//         </div>
//     );
// };
// export default ItemList;
const ItemList = ({ items }) => {
    console.log(items); // Log the items to inspect their structure

    return (
        <div>
            {items.map((item) => (
                item.itemCards.map((card) => (
                    <div key={card.card.info.id} className="p-4 m-2 border-b-2 border-gray-400 text-left ">
                        <div className="py-2">
                            <span>{card.card.info.name}</span>
                            <span>-₹{card.card.info.price/100}</span>
                        </div>
                        <p className="text-xs" >{card.card.info.description}</p>
                    </div>
                ))
            ))}
        </div>
    );
};

export default ItemList;
