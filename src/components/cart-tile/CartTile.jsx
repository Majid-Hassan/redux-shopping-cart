import { useDispatch, } from "react-redux"
import { removeFromCart } from '../../store/slices/cart-slice';

const CartTile = ({ cartItem }) => {

    const dispatch = useDispatch()


    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cartItem.id))
    }

    return (
        <>
            <div className="w-[500px] flex items-center py-5 justify-between bg-red-500 mt-40 mb-2 rounded-xl">
                <div className="flex p-3">
                    <img
                        src={cartItem?.image}
                        alt={cartItem?.title}
                        className="h-38 w-h[200] rounded-lg truncate"
                    />
                    <div className="ml-10 self-start space-y-5">
                        <h1 className="text-lg text-white font-semibold">{cartItem?.title}</h1>
                        <p className="text-white text-3xl font-extrabold">{cartItem?.price}$</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleRemoveFromCart}
                        className="bg-red-950 text-white p-4 rounded-lg font-semibold w-[170px] cursor-pointer"
                    >
                        Remove from Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartTile
