import { useState } from 'react'
import Header from './MyComponents/Header'
import Content from './MyComponents/Content'
import Footer from './MyComponents/Footer'

function App() {
  const [items,setItems]=useState([
    { id:1, checked:false, item:'One half pound of cocoa powder'},
    { id:2, checked:false, item:'Item2'},
    { id:3, checked:false, item:"Item3"}
  ]);

  const handleChange=(id)=>{
    const listItems = items.map((item)=>item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
  }
  const handleDelete=(id)=>{
    const listItems=items.filter((item)=>item.id !==id);
    setItems(listItems)
  }
  

  return (
    <div className='App'>
    <Header title='Groceries'/>
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
