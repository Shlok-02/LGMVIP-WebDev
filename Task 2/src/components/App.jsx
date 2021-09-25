import React,{useState} from "react";
import Card from "./Card";
import "../style.css";
import Loader from "./Loader";


function App(){

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
  
    function getData() {
      document.querySelector(".loader").classList.add("display");
       // setTimeout is implemented only to show that loader is implemented api is not taking time to load.
      setTimeout(() => {   
        fetch("https://reqres.in/api/users?page=1")
        .then(res => res.json())
        .then(data => {
          setItems(data.data);
        })
        document.querySelector(".loader").classList.remove("display");
        setLoading(true);
        }, 5000);
    }
  
    return (
    <div>
            <div className="navbar">
                <div className="heading"> 
                   <h1>Users Info</h1>
                </div>
            <div className="btn">
               <button  className="btn" onClick={getData}>Get Users</button></div>
            </div>

            <div className="wrap">
            <div className="loader"></div>
            <div className="users">  
                {loading ?
                items.map((item, index) => {
                    return <Card key={index} avatar={item.avatar} name={item.first_name} email={item.email} />
                }) : <Loader />
            }
            </div>
          
            </div>
            
    </div>);
    
}

export default App;