

const FoodCard = (item) => {
    
    console.log('this is',item)
    return (
         <div>
            <div className="card w-64 bg-base-100 shadow-xl">
                <figure><img src={item.item.image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white ">${item.item.price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title">{item.item.name}</h2>
                    <p>{item.item.recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;