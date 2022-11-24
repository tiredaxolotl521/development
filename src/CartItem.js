export default function displayCartItem(props) {
    return (
        <div class = "add_to_cart">
            <div class="cart_text">
                <h4>{props.name}</h4>
                <h4>${props.price}</h4>   
            </div>
            <div class="cart_text">
                <img class = "small_img" src={props.img}/> 
                <div class="cart_items">
                    <button class="cart_button item_count" onClick={() => props.removeItem(props.name)}>-</button>
                    <p class="item_count">{props.count}</p>
                    <button class="cart_button item_count" onClick={() => props.addItem(props.name)}>+</button>
                </div>
            </div>
        </div>
        
    );
}