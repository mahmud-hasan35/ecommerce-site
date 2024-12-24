import Slider from "react-slick";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";


export default function Categories() {

  const {categories} = useSelector((store) => store.categories);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
};

  return (
    <div className="py-8 container mx-auto gap-3">
      <Slider {...settings}>
        {categories.map(category => <CategoryItem key={category.id} category= {category}/>)}

      </Slider>
    
    </div>
  )
}
