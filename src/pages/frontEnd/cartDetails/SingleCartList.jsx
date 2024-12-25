

export default function SingleCartList({cart}) {

    const {
        cartId,
        productId,
        productImageUrl,
            productPrice,
            quantity,
            productName,
    } = cart

    return (

        <li className=" border p-2 mb-2">
            <div className="flex items-center gap-4 relative">
            <button
                    className="absolute top-[2px] right-[2px] z-10"
                >
                    <svg
                        className="w-5 h-5 text-red-500 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                        />
                    </svg>
                </button>
                <img className="w-[90px] h-[120px] object-cover" src={productImageUrl} alt="img" />
                <div className="ml-2">
                    <h3 className="font-semibold">{productName}</h3>
                    <span className="font-bold text-blue-500">$ {productPrice}</span>
                </div>
                <div className=" flex ml-auto gap-3">
                    <button disabled= {false} className="w-8 h-8 border rounded-sm flex justify-center items-center bg-indigo-700 text-white disabled:bg-indigo-400">
                        <svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14" />
                        </svg>

                    </button>
                    <span className="text-xl font-bold">{quantity}</span>
                    <button disabled= {false} className="w-8 h-8 border rounded-sm flex justify-center items-center bg-indigo-700 text-white disabled:bg-indigo-400">
                        <svg class="w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
                        </svg>

                    </button>
                </div>

            </div>
        </li>
    )
}
