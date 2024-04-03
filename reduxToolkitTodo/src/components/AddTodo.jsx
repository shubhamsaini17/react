import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() { 
  
  
  const [input,setInput] = useState('')
  const dispatch = useDispatch()

  // addTOdo STORE ka andar kuch add karna ha add kase hota ha DISPACH se, to dispach use hoga

   const addTodoHandler = (e) => {
    e.preventDefault()

    // DISPACH - ak reducer ka use karte hua STORE ka andar changes karta ha/ add karta ha 
    // dispach ka andar he reducer ko call karna padata ha - addToDO ko
    dispatch(addTodo(input)) // input - value form ma se utha ka input ma daga or wo  usestate ko / or addtodo ko  pass ho ge( value={input} )
    setInput('') // input filed form ka ander usko clean karne ka le, ak bar value le lene ka baad uske state ko clean kardo 
   }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo