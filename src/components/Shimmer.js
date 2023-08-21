const Shimmer = () => {
  const dummyCards = Array(10).fill(
    <div className="w-52 h-36 rounded-2xl bg-gray-200 m-2 "></div>
  );

  return (
    <div className="flex flex-wrap w-4/5 mx-auto">
      {dummyCards.map((card, index) => (
        <div key={index}> {card} </div>
      ))}
    </div>
  );
};
export default Shimmer;
