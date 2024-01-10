import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function NotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  useEffect(() => {
    getNote();
  }, [id]);
  const getNote = async () => {
    if(id=='new'){
      return
    }
    const response = await fetch(`/api/notes/${id}/`);
    const data = await response.json();
    setNote(data);
  };
  const handleUpdate=()=>{
    updateNote();
  }
  const deleteNote=async ()=>{
    await fetch(`/api/notes/${id}/delete/`,{
      method:"DELETE",
      headers:{
        "Content-Type":'application/json'
      },
    })
  }
  const updateNote=async()=>{
   await fetch(`/api/notes/${id}/update/`,{
      method:"PUT",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify(note)
    })
  }
  const createNote=async()=>{
    await fetch(`/api/notes/create/`,{
       method:"POST",
       headers:{
         "Content-Type":'application/json'
       },
       body:JSON.stringify(note)
     })
   }
  return (
    <div>
        <Link onClick={handleUpdate}  to="/">Home</Link><br/>
        {id!=='new'?( <Link onClick={deleteNote}  to="/">Delete Notes</Link>):(<Link onClick={createNote } to="/">Done</Link>)}
        <textarea onChange={(e)=>{
          setNote({...note,'body':e.target.value})
        }} defaultValue={note?.body}></textarea>

    </div>
  );
}
export default NotePage;
