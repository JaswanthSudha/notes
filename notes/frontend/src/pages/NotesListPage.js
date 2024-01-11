import { useEffect,useState } from "react"
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";
import './NotesListPage.css'
const NotesListPage=()=>{
    // const arr=[
    //     {
    //         body:"Notes1"
    //     },
    //     {
    //         body:"Notes1"
    //     }, {
    //         body:"Notes1"
    //     }, {
    //         body:"Notes1"
    //     },
    // ]
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
    return <div className="ListPage">
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
const person={
    name:"jashu",
    age:20,
}