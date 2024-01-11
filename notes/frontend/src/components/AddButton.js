import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function AddButton(){
    return <Link to="/note/new">
    <Button className="variant" size="flat">Add</Button>
    
    </Link>

}
export default AddButton;
