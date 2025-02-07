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
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
    console.log(items); 

    return (
        <div>
            {items.map((item) => (
                item.itemCards.map((card) => (
                  <div key={card.card.info.id} className="p-4 m-2 border-b-2 border-gray-400 text-left flex justify-between ">
                   
                    
                    <div className="w-9/12">
                       <div className="py-2">
                            <span>{card.card.info.name}</span>
                            <span>-₹{card.card.info.price/100}</span>
                        </div>
                        <p className="text-xs" >{card.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-2 mx-5 rounded-lg bg-black text-white shadow-lg ">Add +</button>

                    </div>
                    <img src={CDN_URL+card.card.info.imageId} className="w-full"/>
                    </div>
                    </div>
                ))
            ))}
        </div> 
    );
};

export default ItemList;
