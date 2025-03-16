import { useEffect, useState } from "react"
import { ColorRing } from "react-loader-spinner"
import ProductTile from "../components/product-tile/ProductTile"

const Home = () => {


    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()

            setProducts(data)
            setLoading(false)

        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
            {
                loading ?
                    <div className="min-h-screen py-2 w-full flex justify-center items-center">
                        <ColorRing
                            visible={true}
                            height={"192"}
                            width={"192"}
                            ariaLabel="color-ring-loading"
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87', "#fac0c3"]}
                        />
                    </div>
                    :
                    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto p-3">
                        {
                            products && products.length ?
                                products.map(productItem => (
                                    <ProductTile key={productItem.id} product={productItem} />
                                ))
                                : null
                        }
                    </div>
            }
        </>
    )
}

export default Home
