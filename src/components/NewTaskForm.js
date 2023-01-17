import React,{useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {

  const [newItemPosts, setNewItemPosts]=useState({
    text:'',
    category:'Code'
  })

  function handlePosts(e){
    const{name,value}=e.target
    setNewItemPosts({...newItemPosts,[name]:value})

  }


  return (
    <form
    onSubmit={(e)=>{
      e.preventDefault()
      onTaskFormSubmit(newItemPosts)}}
    className="new-task-form"
    >
      <label>
        Details
        <input value={newItemPosts.text} onChange={handlePosts}  type="text" name="text" />
      </label>

      <label>
        Category
        <select value={newItemPosts.category} onChange={handlePosts} name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category,index)=>(
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;