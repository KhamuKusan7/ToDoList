import { useState } from 'react'
import Header from './MyComponents/Header'
import SearchItem from './MyComponents/SearchItem'
import AddItem from './MyComponents/AddItem'
import Content from './MyComponents/Content'
import Footer from './MyComponents/Footer'
import { useEffect } from 'react'

function App() {
  const [items,setItems]=useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem,setNewItem]=useState('')
  const [search,setSearch]=useState('')

  useEffect(()=>{
    localStorage.setItem('shoppingList',JSON.stringify(items));
  },[items])
  
  const addItem =(item)=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id,checked:false,item}
    const listItems = [...items, addNewItem]
    setItems(listItems) 
  }

  const handleChange=(id)=>{
    const listItems = items.map((item)=>item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
  }
  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id !==id);
    setItems(listItems)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }
  

  return (
    <div className='App'>
    <Header title='To-Do List'/> 
    <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
    />
    <SearchItem
      search={search}
      setSearch={setSearch}
    />
    <Content
    items={items.filter(item=>((item.item).toLowerCase().includes(search.toLowerCase())))}
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
