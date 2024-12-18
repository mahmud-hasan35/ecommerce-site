import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../../features/products/productsSlice";
import Modal from "../../../component/Modal";
import { Link } from "react-router";


export default function ProductSection() {

    const products = useSelector((state) => state.products)
    const [deleteProductId, setDeleteProductId] = useState(false)


    const dispatch = useDispatch();

    const data = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    console.log(data);


    const handleDeleteProductClick = (id) => {
        setDeleteProductId(id);
    };
    const handleModalClose = () => {
        setDeleteProductId(false)
    };

    const handleDeleted = () => {

        if (deleteProductId) {
            dispatch(deleteProducts(deleteProductId))
            setDeleteProductId(false)
        }
    };


    return (
        <div>

            {deleteProductId && <Modal onClose={handleModalClose} onDelete={handleDeleted} />}

            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {products.products.map((product) => (
                            <div
                                key={product.id}
                                className="  rounded-lg shadow overflow-hidden"
                            >
                                <img
                                    src={product.productImageUrl}
                                    alt={product.name}
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {product.productName}
                                    </h3>
                                    <p className="text-red-500 font-bold">
                                        ${product.productPrice.toFixed(2)}
                                    </p>
                                    <div className="flex items-center mt-2">
                                        {Array.from({ length: 5 }).map((_, index) =>
                                        (
                                            <svg
                                                key={index}
                                                className={`w-5 h-5 ${index < product.rating
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.208a1 1 0 00.95.69h4.42c.969 0 1.371 1.24.588 1.81l-3.584 2.597a1 1 0 00-.364 1.118l1.357 4.208c.3.921-.755 1.688-1.539 1.118l-3.584-2.597a1 1 0 00-1.176 0L5.98 17.688c-.784.57-1.838-.197-1.539-1.118l1.357-4.208a1 1 0 00-.364-1.118L1.85 9.635c-.783-.57-.381-1.81.588-1.81h4.42a1 1 0 00.95-.69l1.357-4.208z" />
                                            </svg>
                                        )
                                        )}
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <Link to={`/edit-product/${product.id}`} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDeleteProductClick(product.id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}
