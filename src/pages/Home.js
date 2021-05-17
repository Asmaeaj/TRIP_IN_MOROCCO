import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div class="slider">
                    <div class="slides">
                        <div class="slide">
                            <img src="Pictures/pic3.jpg" class="slider-img" alt="" />
                        </div>
                        <div class="slide">
                            <img src="Pictures/pic7.jpg" class="slider-img" alt="" />
                        </div>
                        <div class="slide">
                            <img src="Pictures/pic2.jpg" class="slider-img" alt="" />
                        </div>
                        <div class="slide">
                            <img src="Pictures/pic4.jpg" class="slider-img" alt="" />
                        </div>
                        <div class="slide">
                            <img src="Pictures/pic8.jpg" class="slider-img" alt="" />
                        </div>
                        <div class="slide">
                            <img src="Pictures/pic9.jpg" class="slider-img" alt="" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Home