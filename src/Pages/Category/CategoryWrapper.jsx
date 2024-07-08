import { Link } from "react-router-dom";

function CategoryItem({ name, href, backgroundColor, color }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };
  return (
    <div>
      <Link to={href} className="rounded-full">
        <div
          className="uppercase px-6 py-2 text-center rounded-full font-medium"
          style={style}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      <CategoryItem
        name="entrees"
        href="/categories/entrees"
        backgroundColor="#d4e8d4"
        color="#59871f"
      />

      <CategoryItem
        name="breakfast"
        href="/categories/breakfast"
        backgroundColor="#fffacd"
        color="#756C1A"
      />

      <CategoryItem
        name="lunch"
        href="/categories/lunch"
        backgroundColor="#ffe8cc"
        color="#d67d2b"
      />

      <CategoryItem
        name="dessert"
        href="/categories/desserts"
        backgroundColor="#d8e8ff"
        color="#5971a8"
      />

      <CategoryItem
        name="sides"
        href="/categories/sides"
        backgroundColor="#e6d6f7"
        color="#7159a8"
      />

      <CategoryItem
        name="drinks"
        href="/categories/drinks"
        backgroundColor="#f7d6d6"
        color="#a83f3f"
      />
    </div>
  );
}

const CategoryWrapper = () => {
  return (
    <div>
      <CategoryList />
    </div>
  );
};

export default CategoryWrapper;
