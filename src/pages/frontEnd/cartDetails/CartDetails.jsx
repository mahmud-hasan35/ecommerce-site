import { useSelector } from "react-redux"
import { Navigate } from "react-router"
import SingleCartList from "./SingleCartList"



export default function CartDetails() {
    const {user} = useSelector((store) => store.auth);
    const {carts} = useSelector((store) => store.carts);
    const {products} = useSelector((store) => store.products);
    

    const updateCarts = carts.map((cart) => {
        let findProduct = products.find(product => product.id=== cart.productId);
        return {
            cartId:cart.id,
            productId:cart.productId,
            productImageUrl: findProduct.productImageUrl,
            productPrice: findProduct.productPrice,
            Quantity: cart.quantity,
            productName: findProduct.productName
        }
        
    });

    let totalPrice = updateCarts.reduce((total, cart) => {
        return total + cart.productPrice;
    }, 0)
    console.log(updateCarts);
    

    if (!user) {
        return <Navigate to = {"/login"}/>
    }
  return (
    <div className="max-w-md mx-auto py-8">
        <h1 className="text-2xl font-bold text-center mb-4">Hello {user.name},Your Cart Details</h1>
        <ul>
            {
                updateCarts.map((cart) => (<SingleCartList key={cart.cartId}
                cart= {cart}/>))
            }
         
        </ul>
        <button className="inline-block px-4 py-2 bg-red-600 text-white rounded mt-6">
            Payment Now $ {totalPrice}
        </button>
    </div>
  )
}
