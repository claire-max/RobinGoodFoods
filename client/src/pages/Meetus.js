import React from "react";
import { AiOutlineGithub} from 'react-icons/ai';
import claire from "../images/Meettheteam/claireLONDON copy.jpg";
import santi from "../images/Meettheteam/SantiagoInArgentina copy.jpg";
import prateek from "../images/Meettheteam/prateekYOLK copy.jpeg";
import rima from "../images/Meettheteam/remaAtTheBeach copy.jpeg";
import suzanne from "../images/Meettheteam/sue.jpg";


export default function meetus() {
    const posts = [
        {
            title: "Claire",
            img: claire,
            content: <a href="https://github.com/claire-max"><AiOutlineGithub/></a> 
        },
        {
            title: "Santiago",
            img: santi,
            content: <a href="https://github.com/Everyone1138"><AiOutlineGithub/></a>
        },
        {
            title: "Prateek",
            img: prateek,
            content: <a href="https://github.com/iTeak"><AiOutlineGithub/></a>
        },
        {
            title: "Rima",
            img: rima,
            content: <a href="https://github.com/rimadas9878"><AiOutlineGithub/></a>
        },

        {
          title: "Suzanne",
          img: suzanne, 
          content: <a href="https://github.com/subie23"><AiOutlineGithub/></a>
      },
    ];
    return (
    <>
        <br></br>
        <header className="meetushead text-dark" style={{fontSize:"x-large", textAlign: "center", backgroundColor:'background-color: rgb(114, 79, 79);' }}>Meet The Team</header>
            <div className="cardimg" style={{margin : "10px",fontColor:'white'}}>
                {posts.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" style={{fontWeight:'bolder'}} key={key}>
                        <img
                            className=" img1 object-cover w-full h-48"
                            src={items.img}
                            alt="image"
                        />
                        <div className=" cardback p-4" style={{backgroundColor:"rgba(116,132,85)", textAlign: "center", color:'white' }}>
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                           
                            <p className=" contentgithub mb-2 leading-normal" style={{textAlign:"center", fontSize:'larger' }}>
                            {items.content} 
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            </button>
                            
                        </div>
                    
                        </div>
                       
                   
                
               ))}

            </div>
        </>    
        );
        }