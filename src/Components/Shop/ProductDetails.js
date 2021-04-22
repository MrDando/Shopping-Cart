import { useState ,useEffect } from 'react'

function ProductDetails(props) {
    const [product, setProduct] = useState({title: ''})
    const [quantity, setQuantity] = useState(1)
    const [quantityError, setQuantityError] = useState(false)

    useEffect(() => {
        fetchItem()
    }, [])

    function updateQuantity(e) {
        let newQuantity = ''

        if (e.target.value !== '') {
            newQuantity = Number(e.target.value)
        }
        
        if (!Number.isInteger(newQuantity)) {
            setQuantityError(true)
        } else {
            setQuantityError(false)
        }

        if (newQuantity >= 1 || newQuantity === '') {
            setQuantity(newQuantity)
        }

    }

    function sendToCart() {
        const productOrder = {  product: product,
                                quantity: quantity}

        console.log(productOrder)
    }

    async function fetchItem() {
        const response = await fetch (`https://fakestoreapi.com/products/${props.product.id}`)
        const data = await response.json()
        setProduct(data)
    }

    return (
        <div className='product-details-container'>
            <div className='product-details'>
                <div className='image-container flex justify-center align-center'>
                    <img src={product.image}></img>
                </div>
                <div className='info flex column'>
                    <header>
                        <h2 className='product-title'>{product.title.toUpperCase()}</h2>
                    </header>
                    <p className='price'>$ {product.price}</p>
                    <div className='flex column buy-options'>
                        <p>Quantity:</p>
                        <div className='flex'> 
                            <input type='number' value={quantity} onChange={updateQuantity}></input>
                            <button onClick={sendToCart}>ADD TO CART</button>
                        </div>
                    {quantityError ? <p className='quantity-error'>You can only enter whole numbers here. Please correct your input.</p> : null}
                    </div>
                    <p className='product-description'>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails