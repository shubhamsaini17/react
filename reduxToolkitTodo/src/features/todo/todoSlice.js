//  ya ak reducer ha isko redux tool kit ma naming convention ka according slice khata ha

import { createSlice,nanoid } from "@reduxjs/toolkit";

// initialState:- ki store starting ma kasa dika ga empty hoga , kuch value hogi, ya database sa koi value lega uska andar [initialState array bhe ho skati ha or objext bhe]
// niche val object ha
const initialState = {
    todos: [{id: 1, text: "hello world"}]   // first state, initalStat  todo vala array jisma sare todos task aye ge array or uska andar object
}


//  reducer- ka functionality ha
//  slice - almost reducer ka ak baada version ha

// reducer
export const todoSlice = createSlice({      // slice created 
    name: 'todo',
    initialState,  // pura uper val initialState ya bhe lik skata the colan kage ka  initialState:  , or simple reference bhe de sakte ha 
    reducers: { // reduce crated: isma ati ha properties and function

        // first reducer
        addTodo: (state,action)=>{      // addTodo- property ha uska andar aya ga ak function, uska andar hamesa hame 2 chij mile ge STATE, ACTION

            // state:= ka andar hame updated state value in the store milti ha

            // STATE- initialState ma initial changes hone se phela kya kya values ha unka access dage , or initalstate age jake change ho ge
            // action - kuch value take kani hoti ha jab use kare ge
            // state - current state of todo array, object

            // ** Action-> is an object that describes what changes need to be made to the state of your application. It sends data from your application to the Redux store and serves as the only way to update the store.
            const todo = {      
                id: nanoid(),
                text: action.payload  // todo take ki value lege
                // action use apna task pass kare ga jiko action ki madad se le ge or todo ma add kar dege
            }
            state.todos.push(todo)
            // initalState ko update kra ge task dale ge initial todo ma
            // jo initial state ka object ha wo he mari state ha, function value state ka pass  uska he access ha tabhi usko update kar pa raha ha  // ye vala => { todos: [{id: 1, text: "hello world"}]   } or new task to uska andar push kar dege todo list k andar
            // array banya to push kar do , object ho to property add akr deo 
        },

        // second reducer
        removeTodo: (state,action)=>{  // action ma - > id mila ge , kisi take ko remave katna ha todo array ma se to fileter laga de ge
            state.todos = state.todos.filter((todos) => todos.id !== action.payload
            //  initial array ma jitna bhe todo ha wo ajaya ge filter ki mada se fir id mach kar le ge { todos.id !== action.payload } agar id different to use add nhi krde ge dubar initialState todo array ma, matlab wo remove ho gya
            )
        },
    }
})

// examle two reucer / slice
// export const authentication = createSlice({ })

/*
Reducers
In Redux, a reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.

The state argument represents the current state of your application, while the action argument represents the action dispatched to modify the state.

A perfect analogy for a reducer would be a kitchen blender. Just like a blender takes in different ingredients, blends them, and produces a smooth mixture, a reducer takes in the current state of an application and an action, processes them together, and produces a new state.
*/

export const {addTodo, removeTodo} = todoSlice.actions
//  reducer ka andar vali functionality ko export kar de kyo i ini ka though ham state ko access kara ge
// ye individucal reducer  components ka andar kam aya ge

export default todoSlice.reducer
//  store ko sare reducer ke awareness dene ka le, kyo ki ye store a restrective store ha , iska andar jo jo reducer register hoga matlab export unse he bas ye value lake update karega
//  agar or bante to wo bhe ase he export karne padte reducer / ya slice 
//  example :-   export defaul authentication.reducer



