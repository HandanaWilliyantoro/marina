import React, { Component } from 'react'
import Background from "../asset/marina-bg-1.png"
import BackgroundMarina from "../asset/marina-bg-2.png"
import Logo from "../asset/marina-logo.png"
import ComingSoonText from "../asset/marina-coming-soon.png"
import "./ComingSoon.css"

export class ComingSoon extends Component {
    constructor(props){
        super(props);

        const images = [
            Background,
            BackgroundMarina
        ]

        this.state = {
            currentImg: 0,
            images
        }

    }

    componentDidMount(){
        this.interval = setInterval(() => this.changeBackgroundImage(), 5000);
    }

    componentWillUnmount() {
    if (this.interval) {
        clearInterval(this.interval);
        }
    }

    changeBackgroundImage() {
      let newCurrentImg = 0;
      const {images, currentImg} = this.state;
      const noOfImages = images.length;

      if (currentImg !== noOfImages - 1) {
        newCurrentImg = currentImg + 1;
      }

      this.setState({currentImg: newCurrentImg});
    }

    render() {
        const {images, currentImg} = this.state;
        const urlString = `url('${images[currentImg]}')`;

        return (
            <div className="marina-background" style={{backgroundImage: urlString}}>
                <img src={Logo} className="marina-logo" /><br />
                <img src={ComingSoonText} className="marina-coming-soon" />
            </div>
        )
    }
}

export default ComingSoon
