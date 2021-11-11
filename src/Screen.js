import React from 'react';
import About from './About';
import Skill from './Skill';
import Contact from './Contact';


class Screen extends React.Component{
    constructor(){
        super();
        this.state = {
            show: <About />,
            active: "MyIntro"
        }
    }

    showAbout = () =>{
        this.setState({
            show:<About />,
            active: "MyIntro"
        });
    }

    showSkill = () =>{
        this.setState({
            show:<Skill />,
            active: "MySkills"
        });
    }

    showContact = () =>{
        this.setState({
            show:<Contact />,
            active:"MyCont"
        });
    }

    render(){
        const show = this.state.show;
        const active = this.state.active;

        return(
            <div class="Home">

            <div class="Side">

            <div onClick={this.showAbout} class={`options${
                active==="MyIntro"?'':'Not'
            }`}>
            Home
            </div>

            
            <div onClick={this.showSkill} class={`options${
                active==="MySkills"?'':'Not'
            }`}>
            Skill
            </div>

            <div onClick={this.showContact} class={`options${
                active==="MyCont"?'':'Not'
            }`}>
            Contact
            </div>

            </div>

            <div class="Main">
            {show}
            </div>
            
            </div>
        );
}
}

export default Screen;