import React, { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import Swipe from "react-easy-swipe";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
    
  }
  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };
  
  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  componentDidMount(){
    setInterval(() => {
      if(this.state.paused === false){
        let newSlide = this.state.currentSlide === CarouselData.length - 1 ? 0 : this.state.currentSlide + 1
        this.setState({currentSlide: newSlide})
      }
    }, 3000)
  }


  render() {
    return (
      <div className="mt-2">
        
        <div className="max-w-lg h-72 flex overflow-hidden ">
          {CarouselData.map((slide, index) => {
            return (
              <img
              onMouseEnter={() => {
                this.setState({paused: true})
            }}
            onMouseLeave={() => {
              this.setState({paused: false})
          }}
                src={slide.image}
                alt="This is a carousel slide"
                key={index}
                className={
                  index === this.state.currentSlide
                    ? "block w-full h-auto object-cover"
                    : "hidden"
                }
              />
            );
          })}
          
        <AiOutlineLeft onClick={this.prevSlide} className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer' style={{fontWeight:'bolder',color:'white' }} /> 
        <AiOutlineRight onClick={this.nextSlide} className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer' style={{fontWeight:'bolder',color:'white' }}  /> 
        
        </div>
      </div>
      
    );
  }
}

export default Carousel;