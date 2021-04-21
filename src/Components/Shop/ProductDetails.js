import { useState ,useEffect } from 'react'

function ProductDetails(props) {
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetchItem()
    }, [])

    async function fetchItem() {
        const productId = props.location.state.productId
        const response = await fetch (`https://fakestoreapi.com/products/${productId}`)
        const data = await response.json()
        setProduct(data)
    }
    console.log(product)
    return (
        <div className='product-details'>
            <div className='image-container flex justify-center align-center'>
                <img src={product.image}></img>
            </div>
            <div className='info flex column'>
                <header>
                    <h2 className='product-title'>{product.title}</h2>
                </header>
                <p>$ {product.price}</p>
                <div className='flex buy-options'>
                    <div className='flex column'>
                        <p>Quantity</p>
                        <input type='number'></input>
                    </div>
                    <div>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <p>{product.description}</p>
            </div>

        </div>
    )
}

export default ProductDetails