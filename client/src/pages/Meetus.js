import React from "react";
import { AiOutlineGithub} from 'react-icons/ai';
import claire from "../images/Meettheteam/claireLONDON copy.jpg";
import santi from "../images/Meettheteam/SantiagoInArgentina copy.jpg";
import prateek from "../images/Meettheteam/prateekYOLK copy.jpeg";
import rima from "../images/Meettheteam/remaAtTheBeach copy.jpeg";
import suzanne from "../images/Meettheteam/sue.jpg";
import Footer from "../components/Footer";

export default function meetus() {
   
    return (
    <>
    <div className="meetdiv1">
   <header className="meetushead text-dark" style={{fontSize:"x-large", textAlign: "center", backgroundColor:'background-color: rgb(114, 79, 79);' }}>Meet The Team</header>
        <div className="meetdiv2">
   
      <div className="meet1">
    <div className="meet2">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="meetbutton" type="button">
        </button>
    </div>
    <div className=" meet3 flex flex-col items-center pb-10">
        <img className="meetimg" src={prateek} alt="Bonnie image"/>
        <h5 className="names">Prateek</h5>
        {/* <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
        <div class="flex mt-4 space-x-3 md:mt-6">
        <a className="githubmeet" href="https://github.com/iTeak"><AiOutlineGithub size={30} style={
            {color:"rgb(74, 61, 61)" }}/></a>
           
        </div>
    </div>
</div>

<div className="meet1">
    <div className="meet2">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="meetbutton" type="button">
        </button>
    </div>
    <div className="meet3 flex flex-col items-center pb-10">
        <img className="meetimg" src={claire} alt="Bonnie image"/>
        <h5 className="names">Claire</h5>
        {/* <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
        <div className="flex mt-4 space-x-3 md:mt-6">
        <a href="https://github.com/claire-max"><AiOutlineGithub size={30} style={
            {color:"rgb(74, 61, 61)" }}/></a>
           
        </div>
    </div>
</div>


<div clasNames="meet1">
    <div className="meet2">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="meetbutton" type="button">
        </button>
    </div>
    <div className=" meet3 flex flex-col items-center pb-10">
        <img className="meetimg" src={rima} alt="Bonnie image"/>
        <h5 className="names">Rima</h5>
        {/* <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
        <div className="flex mt-4 space-x-3 md:mt-6">
        <a href="https://github.com/rimadas9878"><AiOutlineGithub size={30} style={
            {color:"rgb(74, 61, 61)" }}/></a>
    
        </div>
    </div>
</div>

<div clasNames="meet1">
    <div className="meet2">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="meetbutton" type="button">
        </button>
    </div>
    <div className=" meet3 flex flex-col items-center pb-10">
        <img className="meetimg object-fit: contain;" src={santi} alt="Bonnie image"/>
        <h5 className="names">Santiago</h5>
        {/* <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
        <div className="flex mt-4 space-x-3 md:mt-6">
        <a href="https://github.com/Everyone1138"><AiOutlineGithub size={30} style={
            {color:"rgb(74, 61, 61)" }}/></a>
    
        </div>
    </div>
</div>

<div className="meet1">
    <div className="meet2">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="meetbutton" type="button">
        </button>
    </div>
    <div className=" meet3 flex flex-col items-center pb-10">
        <img className="meetimg" src={suzanne} alt="Bonnie image"/>
        <h5 className="names">Suzanne</h5>
        {/* <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
        <div className="flex mt-4 space-x-3 md:mt-6">
        <a href="https://github.com/subie23"><AiOutlineGithub size={30} style={
            {color:"rgb(74, 61, 61)" }}/></a>
        </div>
    
    </div>
   
</div>
</div>
</div>
<Footer/>

        </>
        );
    }
        