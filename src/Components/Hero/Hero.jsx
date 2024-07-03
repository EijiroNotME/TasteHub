import { IoSearchSharp } from "react-icons/io5";
const Hero = () => {
  return (
    <section className="px-5 xl:px-10 md:w-[60%] mb-10">
      <h1 className="mt-6 mb-10 text-3xl xl:text-5xl font-bold text-center text-secondary">
        Bringing Joy to Your Table: Discover, Cook, and Enjoy with{" "}
        <span className="text-accent">Tastehub</span>
      </h1>
      <form
        action="/search"
        className="bg-white p-4 relative flex items-center rounded-lg"
      >
        <IoSearchSharp className="w-5 h-5 mr-2 text-neutral-300" />
        <input
          className="outline-none w-full placeholder:text-neutral-400"
          name="query"
          type="search"
          placeholder="Search for recipe here"
          id="search"
          required=""
        />
      </form>
    </section>
  );
};

export default Hero;
