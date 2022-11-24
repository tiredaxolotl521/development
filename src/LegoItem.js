export default function displayBakeryItem(props) {
    const {id, Name, rating, price, pieces, age, minifigures, model_type, available, type, image} = props.item;
    return (
        <div class="item_box">
            <img class = "img" src={image}/> 
            <div class = "item_info">
                <div class="title">
                    <h3>{Name}</h3>
                    <div class="center_text">
                        <p>{rating} stars</p>
                    </div>
                </div>
                <h4>Price: ${price}</h4>
                <div class="item_info_box">
                    <p>Minifigures: {minifigures}</p>
                    <p>{pieces} pieces</p>
                    <p>Age {age}+</p>
                    <p>{available}</p>
                    <p>{type}</p>
                    <p>{model_type}</p>
                </div>
                <div class = "button_div">
                    <button class = "button" onClick={() => props.updateCart(id)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}