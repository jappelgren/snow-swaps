import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import modal from "./modal.reducer";
import gear from "./gear.reducer";
import gearDetails from "./gearDetails.reducer";
import favorites from "./favorites.reducer";
import ownedSwaps from "./ownedSwaps.reducer";
import searchedUser from "./searchedUser.reducer";
import swapItems from "./swapItems.reducer";
import editItem from "./editItem.reducer";
import allSwaps from "./allSwaps.reducer";
import selectedSwap from "./selectedSwap.reducer";
import categories from "./category.reducer";
import filterObject from "./filter.reducer";
import joinedSwaps from './joinedSwaps.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  modal, // reducer with status of modals
  gear, // reducer containing gear
  gearDetails,
  favorites,
  ownedSwaps,
  searchedUser,
  swapItems,
  editItem,
  allSwaps,
  selectedSwap,
  categories,
  filterObject,
  joinedSwaps
});

export default rootReducer;
