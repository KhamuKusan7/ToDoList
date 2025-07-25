import { useState } from 'react'
import Header from './MyComponents/Header'
import AddItem from './MyComponents/AddItem'
import Content from './MyComponents/Content'
import Footer from './MyComponents/Footer'

function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('shoppingList')));
  const [newItem,setNewItem]=useState('')

  const setAndSaveItems=(newItems)=>{
    setItems(newItems);
    localStorage.setItem('shoppingList',JSON.stringify(newItems));
  }
  
  const addItem =(item)=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id,checked:false,item}
    const listItems = [...items, addNewItem]
    setAndSaveItems(listItems) 
  }

  const handleChange=(id)=>{
    const listItems = items.map((item)=>item.id === id ? {...item, checked: !item.checked} : item)
    setAndSaveItems(listItems)
  }
  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id !==id);
    setAndSaveItems(listItems)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }
  

  return (
    <div className='App'>
    <Header title='Groceries'/>
    <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
    />
    <Content
    items={items}
    handleChange={handleChange}
    handleDelete={handleDelete}
    />
    <Footer
      length={items.length}
    />
    </div>
  )
}

export default App
