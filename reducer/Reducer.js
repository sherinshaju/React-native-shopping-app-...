import image1 from "./image/1.jpg";
import image3 from "./image/3.jpg";
import image5 from "./image/5.jpg";
import image7 from "./image/7.jpg";
import image8 from "./image/10.jpg";

let CrateState = {
  count: "4",
  fullproduct: [
    {
      id: 1,
      name: "jgfjghjghj",
      price: "699",
      image: image1,
      fav: false,
      isCart: true
    },
    {
      id: 2,
      name: "dfsdyutryurfsd",
      price: "999",
      image: image3,
      fav: false,
      isCart: true
    },
    {
      id: 3,
      name: "rtysrturtydfsd",
      price: "788",
      image: image5,
      fav: false,
      isCart: true
    },
    {
      id: 4,
      name: "rtyrtygf",
      price: "899",
      image: image7,
      fav: true,
      isCart: true
    },
    {
      id: 5,
      name: "jghjghd",
      price: "100",
      image: image8,
      fav: false,
      isCart: true
    }
  ],
  NewCart: []
};

export default function rootReducer(state = CrateState, action) {
  switch (action.type) {
    case "AddCart":
      let NewValCart = action.product;
      var AddData = state.fullproduct.map(addCount =>
        addCount.id === action.id
          ? { ...addCount, isCart: action.isCart }
          : addCount
      );

      return {
        ...state,
        fullproduct: AddData,
        NewCart: [...state.NewCart, NewValCart]
      };
      case "RemoveBtn":
      var RemoveData = state.fullproduct.map(addCount =>
        addCount.id === action.id
          ? { ...addCount, isCart: action.isCart }
          : addCount
      );

      return {
        ...state,
        fullproduct: RemoveData,
        NewCart :  [...state.NewCart.filter(NewCart => NewCart.id !== action.id)]
      };

    default:
      return state;
  }
}
