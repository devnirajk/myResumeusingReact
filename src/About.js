import React from 'react';
import dp_n from './other_src/dp_n.jpeg';

class About extends React.Component{
    render(){
        return(
            <div class="About_Style">
            <div class="Profile">
            <img style={styles.dp} src={dp_n} alt="__dp"/>
            </div>
            <div class="Intro">
            NIRAJ KUMAR YADAV
            <br/>
            <br/>
            3RD YEAR B.TECH | WEB DEVELOPER | COMPETITIVE PROGRAMMER
            <br/>
            <br/>
            CODECHEF - 3 STAR | CODEFORCES - 967
            </div>
            </div>
        );
    }
}

const styles = {
dp:{
height: 140,
width: 140,
borderRadius: "50%",
}
}

export default About;