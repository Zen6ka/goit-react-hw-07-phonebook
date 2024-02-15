import { createSlice, isAnyOf} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./fetchData";
// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: initialState,
//     reducers: {
//         addContact: {
//             reducer: (state, action) => {
//                 state.push(action.payload);
//             },
//             prepare: (name, number) => {
//                 return {
//                     payload: {
//                         id: nanoid(),
//                         name: name.trim(),
//                         number: number.trim(),
//                     },
//                 };
//             },
//         },
//         deleteContact: (state, action) => {
//             const index = state.findIndex(contact => contact.id === action.payload);
//             state.splice(index, 1);
//         },

//         deleteAllContacts: state => {
//             state.splice(0, state.legth);
//         },
//     },
// });

// export const { addContact, deleteContact, deleteAllContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;



const initialState = {
    items: [],
    siLoading: false,
    error: null,
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const arrOfActions = [fetchContacts, addContact, deleteContact];

const addStatusToActions = status => arrOfActions.map((el) => el[status]);

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(payload);
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(item => item.id !== payload.id);
            })
            .addMatcher(isAnyOf(...addStatusToActions('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActions('rejected')), onRejected)
    },  
});

export const { reducer: contactsReducer} = contactsSlice;
export default contactsReducer;