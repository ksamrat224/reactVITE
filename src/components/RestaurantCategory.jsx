import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    // console.log(data);
    return (
        <div>
            {/* Header*/}
        <div className="w-6/12 mx-auto my-6 bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between">
        <span className="font-bold text-sm">
                {data.title} ({data.categories.length})
            </span>
            <span>⬇️</span>
        </div>
        {/* Accordion Body */}
            <ItemList items={data.categories}/>
        </div>
        </div>

    );
};

export default RestaurantCategory;
