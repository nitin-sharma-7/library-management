import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../utils/bookSlice";
const appStore = configureStore({
  reducer: {
    books: bookReducer,
    //the books we receive in the component like const books = useSelector((store) => store.books.items);
    // store pass from app
    // books pass from here
    // items define in the bookSlice
  },
});

export default appStore;
