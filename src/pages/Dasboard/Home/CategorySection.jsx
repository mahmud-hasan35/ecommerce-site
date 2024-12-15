import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategories, getCategories } from "../../../features/categories/categorySlice";
import { Link } from "react-router";
import Modal from "../../../component/Modal";



export default function CategorySection() {

    const categoriesData = useSelector((state) => state.categories);
    const [deleteCategoryId, setDeleteCategoryId] = useState(false);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());

    }, [dispatch]);


    const handleClick = (id) => {
        setDeleteCategoryId(id);
    };

    const handleModalClose = () => {
        setDeleteCategoryId(false)

    };
    const handleDelete = () => {
        if (deleteCategoryId) {
            //  removeDataFromFirebase("categories/" + deleteCategoryId)
            dispatch(deleteCategories(deleteCategoryId))
            setDeleteCategoryId(null)
        }

    };


    let categoriesSectionContent;

    if (categoriesData.isLoading) {
        categoriesSectionContent = (<div className="text-xl">Data is loading...</div>);
    };

    if (!categoriesData.isLoading && categoriesData.isError) {
        categoriesSectionContent = (<div className="text-xl">Error || {categoriesData.error}</div>)
    };

    if (!categoriesData.isLoading && !categoriesData.isError && categoriesData.categories.length == 0) {
        categoriesSectionContent = <div className="text-xl">no category found</div>
    };


    if (!categoriesData.isLoading && !categoriesData.isError && categoriesData.categories.length > 0) {
        categoriesSectionContent = categoriesData.categories.map((category) => (
            <div
                key={category.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
                <img
                    src={category.categoryImageUrl}
                    alt={category.categoryName}
                    className="w-24 h-24 object-cover mb-3"
                />
                <p className="text-lg font-semibold">
                    {category.categoryName}
                </p>

                <div className="flex justify-between mt-4">
                    <Link to={`/edit-category/${category.id}`} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                        Edit
                    </Link>
                    <button onClick={() => handleClick(category.id)} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ml-3'">
                        Delete
                    </button>
                </div>
            </div>
        ))
    }

    return (
        <div>
            
            {deleteCategoryId && <Modal onClose={handleModalClose} onDelete={handleDelete} />}

            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-6">
                        Categories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

                        {categoriesSectionContent}

                    </div>
                </div>
            </section>

        </div>

    )
}
