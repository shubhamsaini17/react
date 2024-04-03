import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; 
// store ko bataye ge hamre reducer kaha ha

export const store = configureStore({ 
    reducer: todoReducer
})

// blog:- https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/
// The Store
// The Redux store is like a giant container that holds all the data for your application.

//Imagine you are building a house and need to keep track of all the materials you use and how much money you spend. Instead of keeping track of everything in your head or on a piece of paper, you could use a ledger to keep track of every transaction. Redux works similarly by keeping track of your application's state in a single place called the "store."

//Let's say you're building an e-commerce site. You may need to keep track of the items in a user's cart, their payment information, and their shipping details.
//Instead of passing this information from component to component using props, Redux allows you to store them in one central location where they can be easily accessed and updated. This makes it easier to manage complex states and keep your application organized.