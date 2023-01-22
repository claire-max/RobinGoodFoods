import React from 'react';
import Pan1 from "../../images/Food/Pancakes/pancakeapplecinnamon.png"
import Pan2 from "../../images/Food/Pancakes/pancakematcha.png";
import Pan3 from "../../images/Food/Pancakes/pancakeblueberry.png";
import Pan4 from "../../images/Food/Pancakes/pancakeprotein.png";
import Pan5 from "../../images/Food/Pancakes/pancakematcha.png";
import Pan6 from "../../images/Food/Pancakes/pancaketurmeric.png";
import Footer from "../../components/Footer";
// import Single from '../assets/single.png'
// import Double from '../assets/double.png'
// import Triple from '../assets/triple.png'
const Pancakes = () => {
  return (
   <div>
     <header className="head font-bold text-lg"  style={{  fontSize:"x-large", textAlign: "center" }}>Pancake Subscription Boxes</header>
    {/* <div className='div1 w-full py-[10rem] px-4 bg-white'>  */}
    <br></br>
      <div className='div2 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
       
          <div className='cardpan w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='cardimage w-20 mx-auto mt-[-3rem] bg-transparent' src={Pan6}alt="/" />
              <h2 className='cardtext text-2xl font-bold text-center py-8'>Turmeric Cinnamon with Ginger</h2>
              <p className='cardprice text-center text-4xl font-bold'>$149</p>
              <div className='divcardinfo text-center font-medium'>
                  <p className='divptag1 py-2 border-b mx-8 mt-8'>Our Classic mix is deliciously balanced with whole grains and good for the mind, body and planet.</p>
                  <p className='divptag2 py-2 border-b mx-8'></p>
                  <p className='divptag3 py-2 border-b mx-8'>Pancake & Waffle Mix </p>
              </div>
              <button className='cardbutton bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      
          <div className='cardpan w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='cardimage w-20 mx-auto mt-[-3rem] bg-transparent' src={Pan5}alt="/" />
              <h2 className='cardtext text-2xl font-bold text-center py-8'>The Matcha</h2>
              <p className='cardprice text-center text-4xl font-bold'>$149</p>
              <div className='divcardinfo text-center font-medium'>
                  <p className='divptag1 py-2 border-b mx-8 mt-8'>Freshest of the Matcha, made from freshly cut grass</p>
                  <p className='divptag2 py-2 border-b mx-8'></p>
                  <p className='divptag3 py-2 border-b mx-8'>Pancake & Waffle Mix</p>
              </div>
              <button className='cardbutton bg-black text-[#cddf00] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='cardpan w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='cardimage w-20 mx-auto mt-[-3rem] bg-transparent' src={Pan4}alt="/" />
              <h2 className='cardtext text-2xl font-bold text-center py-8'>Wholesome Protein with Chocolate Chip</h2>
              <p className='cardprice text-center text-4xl font-bold'>$149</p>
              <div className='divcardinfo text-center font-medium'>
                  <p className='divptag1 py-2 border-b mx-8 mt-8'>A sure source of vegan protein to get you through the workout</p>
                  <p className='divptag2 py-2 border-b mx-8'></p>
                  <p className='divptag3 py-2 border-b mx-8'>Pancake & Waffle Mix</p>
              </div>
              <button className='cardbutton bg-black text-[#cddf00] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='cardpan w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='cardimage w-20 mx-auto mt-[-3rem] bg-transparent' src={Pan3}alt="/" />
              <h2 className='cardtext text-2xl font-bold text-center py-8'>Berry Blues</h2>
              <p className='cardprice text-center text-4xl font-bold'>$199/YR</p>
              <div className='divcardinfo text-center font-medium'>
                  <p className='divptag1 py-2 border-b mx-8 mt-8'>Freshest of the Matcha, made from freshly cut grass</p>
                  <p className='divptag2 py-2 border-b mx-8'></p>
                  <p className='divptag3 py-2 border-b mx-8'>Pancake & Waffle Mix</p>
              </div>
              <button className='cardbutton bg-black text-[#cddf00] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='cardpan w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='cardimage w-20 mx-auto mt-[-3rem] bg-transparent' src={Pan1}alt="/" />
              <h2 className='cardtext text-2xl font-bold text-center py-8'>The Cinnamon of the apples</h2>
              <p className='cardprice text-center text-4xl font-bold'>$249/ YR</p>
              <div className='divcardinfo text-center font-medium'>
                  <p className='divptag1 py-2 border-b mx-8 mt-8'>The Classic taste of apple cinnamon</p>
                  <p className='divptag2 py-2 border-b mx-8'></p>
                  <p className='divptag3 py-2 border-b mx-8'>Pancake & Waffle Mix </p>
              </div>
              <button className='cardbutton bg-black text-[#cddf00] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
      <Footer/>
    </div>
    
    // </div>
  );
};

export default Pancakes;