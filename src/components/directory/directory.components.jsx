import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";
import { Link } from "react-router-dom";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Link to={`/myportfolio/${category.id}`} key={category.id}>
          <CategoryItem key={category.id} category={category}></CategoryItem>
        </Link>
      ))}
    </div>
  );
};


export default Directory;