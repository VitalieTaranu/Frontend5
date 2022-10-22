export default function NameInput({ value, setValue, placeholder }) {
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input placeholder={placeholder} value={value} onChange={onChange} />
      {/* <button onClick={() => setCount(count + 1)}>
              Click me!
          </button> */}
    </div>
  );
}

// import React from "react";

// const NameInput = ({ name, setName }) => {
//   const onChange = (event) => {
//     const inputValue = event.target.value;
//     if (inputValue.length > 0) {
//       setName(event.target.value);
//     } else {
//       setName("Person");
//     }
//   };

//   return (
//     <div>
//       <h2>Hello, {name}</h2>
//       <input placeholder="Please enter your name" onChange={onChange} />
//     </div>
//   );
// };
// export default NameInput;
