import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NotePage.css"

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
    <div className="Note">
        <Link onClick={handleUpdate}  to="/"><Button>Back</Button></Link><br/>
        {id!=='new'?( <Link onClick={deleteNote}  to="/"><Button>Delete</Button></Link>):(<Link onClick={createNote } to="/"><Button>Done</Button></Link>)}
        <textarea  style={{
          height:300,
  
     width:500,
        }} onChange={(e)=>{
          setNote({...note,'body':e.target.value})
        }} defaultValue={note?.body}></textarea>

    </div>
  );
}
export default NotePage;
