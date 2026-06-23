const initialState = {
  numOfMilks: 10,
};

const milkSlice = createSlice({
  name: "milk",
  initialsState,
  reducers: {
    //buyCake: function(){}
    //buyCake() {},
    buyMilk: (state, action) => {
      state.numOfMilks = state.numOfMilks - 1;
      //immerjs => that allows us to mutate states!
    },
  },
});

export const { buyMilk } = milkSlice.actions;

export default milkSlice.reducer;
