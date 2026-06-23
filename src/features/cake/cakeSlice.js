// import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

// export default function cakeReducer(state = initialState, action) {
//   switch (action.type) {
//     case BUY_CAKE: {
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// }

const cakeSlice = createSlice({
  name: "cake",
  initialsState,
  reducers: {
    //buyCake: function(){}
    //buyCake() {},
    buyCake: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
      //immerjs => that allows us to mutate states!
    },
  },
});

export const { buyCake } = cakeSlice.actions;

export default cakeSlice.reducer;
