import React from 'react';
import '../index.css';

import bannerimg3 from'../images/bannerimg3.jpg';
import bannerimg2 from'../images/bannerimg2.jpg';
import bannerimg1 from'../images/bannerimg1.jpg';
import bannerimg4 from'../images/movies.jpg';



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [  
        bannerimg4,
        bannerimg3,
        bannerimg2,
        bannerimg1,
      ],
      selectedImage: bannerimg1
    };
  }

  componentDidMount() {
    let intervalId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.selectedImage === this.state.images[0]) {
          var x = this.state.images 
          for (var i = 0; i < x.length; i++){
            
          }
          return {
           
            selectedImage: this.state.images[i]
          };
        } else {
          return {
            selectedImage: this.state.images[1]
          };
        }
      });
    }, 2000);

    this.setState({
      intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

   

  render() {
    const showimg = this.state.selectedImage
    return (
      <nav className="Header"  >
        <img src={showimg} className="bannerimg" />
        <div className="morediv">
            <h1>testing</h1>
        </div>
      </nav>
    );
  }
}


export default Header;

