//This is best practise if multipe values are being returned in an action/function

// export const incNumber = () => {
//     return{
//         true:"INCREMENT"
//     }
// }

// This is best practise if single values are returned in an action/function

// export const incNumber = () => { type: "INCREMENT" }
// export const decNumber = () => { type: "DECREMENT" }

export const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
