import numbers from "../models/numbers";

const Number = (numArray: numbers) => {
  return (
    <>
      {numArray.map((num) => {
        return (
          <div>
            <label>{num.name}</label>
            <p>{num.value}</p>
          </div>
        );
      })}
    </>
  );
};

export default Number;
