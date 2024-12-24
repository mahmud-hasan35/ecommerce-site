

export default function CategoryItem({ category }) {
    const { categoryImageUrl, categoryName } = category
        
    return (
        <div className=" bg-white shadow-lg cursor-pointer mx-3 ">
        <div className=" w-full h-[180px] text-center ">
            <img
                className=" max-w-[120px] object-cover mx-auto"
                src={categoryImageUrl} alt="image"/>
            <h4 className="text-lg font-semibold py-2 text-center">{categoryName}</h4>
               
        </div>

        </div>
    )
}
