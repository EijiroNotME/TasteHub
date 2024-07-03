import Hero from "../../Components/Hero/Hero";
import CategoryWrapper from "../Category/CategoryWrapper";
import DisplayPage from "../DisplayPage/DisplayPage";

const Home = () => {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWrapper />
        <section className="mt-6">
          <DisplayPage />
        </section>
      </section>
    </div>
  );
};

export default Home;
