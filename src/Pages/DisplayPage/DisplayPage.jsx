import Card from "../../Components/Card/Card";
import items from "../../../public/Data/Items";

const DisplayPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {items.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DisplayPage;
