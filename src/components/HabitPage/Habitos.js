import { useContext } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

function Habitos(){
    
    const {user} = useContext(UserContext);

    

    function postHeader(event){
        event.preventDefault();
        
    }
    
    return(
        <form onSubmit={postHeader}>
            <input type="submit"/>

        </form>
    );
}

export default Habitos;