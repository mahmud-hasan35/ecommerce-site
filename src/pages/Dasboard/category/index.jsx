



import {  useSelector } from "react-redux"
import Table from "../../../component/Table"
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { removeDataFromFirebase } from "../../../database/firebaseUtils";
import Modal from "../../../component/Modal";


export default function IndexCategory  () {
    const {categories} = useSelector((store => store.categories));
    const navigate = useNavigate()

    const [deletCategoryId, setDeleteCategoryId] = useState(false)
    
    const handleAdd = () => {
      navigate("/dashboard/create-category");
    };

    const handleEdit = (data) => {
      navigate(`/dashboard/edit-category/${data.id}`);
    };
    const handleDelete = () => {
           if (deletCategoryId) {
            async function deleteCat() {
                const del = await removeDataFromFirebase("categories/" + deletCategoryId)
                // dispatch(deleteCategories(deletCategoryId))
            }
            deleteCat()
            setDeleteCategoryId(false)
            }
       
    };


     useEffect(() => {
            // dispatch(getCategories());
           
        }, []);
  return (
    <>
    <h1 className="text-3xl font-bold mb-4">Our Categories</h1>
    <Table tableContent={categories} onAdd={handleAdd}
     onDelete={(id) => setDeleteCategoryId(id) }
      onEdit={handleEdit}/>
      {deletCategoryId && <Modal onDelete={handleDelete} onClose={() => setDeleteCategoryId(!deletCategoryId)}/>}
    </>

    
  )
}