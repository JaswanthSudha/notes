import { useEffect,useState } from "react"
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";
const NotesListPage=()=>{
const [notes,setNotes]=useState([]);
useEffect(()=>{
    getNotes();
},[])
const getNotes=async()=>{
    const response=await fetch("/api/notes/");
    const data=await response.json();
    console.log(data);
    setNotes(data);
}
    return <div>
        {
            notes.map((note,index)=>{
                return <div key={index}>
                <ListItem note={note} key={index} />
                </div>
            })
        }
        <AddButton/>
    </div>
}
export default NotesListPage;