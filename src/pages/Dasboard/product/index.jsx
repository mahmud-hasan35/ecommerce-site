import { useSelector } from "react-redux";
import Table from "../../../component/Table";
import { useNavigate } from "react-router";


export default function IndexProduct() {
    const {products} = useSelector((store) => store.products);
    const {categories} = useSelector((store => store.categories));
    const navigate = useNavigate();
    
    const updateProducts = products.map((item) => {
        let findCat = categories.find((data) => data.id == item.productCategory);
        
        return {
            ...item,
            productCategory: findCat?.categoryName
        }
    });
    console.log(updateProducts);
    
    return (
    <>
    <h1 className="text-3xl font-bold mb-4">Our Product</h1>
    <Table tableContent={updateProducts}
    onAdd={() => navigate("/dashboard/create-product")
    }
    onEdit={(data) => navigate(`/dashboard/edit-product/${data.id}`)}
    
    />

    </>
    
)
}