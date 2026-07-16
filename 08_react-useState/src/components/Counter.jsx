export const Counter = (props) => {
  return (
    <div className="text-center text-amber-50 border-2 border-amber-600 py-12 px-26 w-fit rounded-lg bg-gray-600">
      <h1 className="text-6xl">{props.count}</h1>
    </div>
  );
};
