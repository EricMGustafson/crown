import { categories } from "../../dbcontext/categories.context";
import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";

function Directory() {
  return (
    <div className="categories-container">
      hi
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Directory;
