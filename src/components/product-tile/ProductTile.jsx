import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../store/slices/cart-slice"


const ProductTile = ({ product }) => {

    const { cart } = useSelector(state => state)

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id))
    }

    return (
        <div>
            <div className={`group flex flex-col items-center border-2 border-red-900 g-3 p-4 max-h-[360px] ml-5 rounded-2xl mt-20`}>
                <div className="h-[180px]">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="object-covered w-full h-full"
                    />
                </div>
                <div className="w-40 truncate mt-10 text-grey-800 text-xl font-semibold">
                    {product?.title}
                </div>
                <div className="flex items-center justify-center w-full mt-5">
                    <button
                        onClick={
                            cart.some(item => item?.id === product?.id) ? handleRemoveFromCart : handleAddToCart
                        }
                        className="bg-red-950 text-white py-2 px-4 rounded-lg font-semibold cursor-pointer"
                    >
                        {
                            cart.some(item => item?.id === product?.id) ? "Remove from Cart" : "Add to Cart"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductTile
