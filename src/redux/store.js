import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";
import { contactsReducer } from "../redux/contactsSlice";
import { filterReducer } from "../redux/filterSlice";

// const persistConfig = {
// 	key: 'root',
// 	storage,
// };

// const persistedReducer = persistReducer(
// 	persistConfig,
// 	combineReducers({
// 		contacts: contactsReducer,
// 		filter: filterReducer,
// })
// );

// export const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: getDefaultMiddleware =>
// 		getDefaultMiddleware({
// 		serializableCheck: false,
// }),
// });

// export const persistor = persistStore(store);

export const store = configureStore({
	reducer: {
			contacts: contactsReducer,
			filter: filterReducer,
	},
});