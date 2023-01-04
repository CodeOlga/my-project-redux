import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div>
      <h1>What would you like to buy?</h1>

      {["NECKLACE", "BRACELETS", "EARRINGS", "RINGS", "ALL"].map((category) => (
        <Filter category={category} />
      ))}
    </div>
  );
};
export default AllCategories;
