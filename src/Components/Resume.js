import React, { Component } from "react";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getColor(num) {
    const compare = Number(num.slice(0,-1))
    if (compare >= 80) {
      return "#F2B807"
    } else if (compare >= 60) {
      return "#049DD9"
    } else if (compare >= 40) {
      return "#88212C"
    } else if (compare >= 20) {
      return "#D7483E"
    }
    return "#D4C7D9"
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;

    const skills = this.props.data.skills.map(skills => {
      // const backgroundColor = this.getRandomColor();
      const backgroundColor = this.getColor(skills.level);
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    const otherSkills = this.props.data.otherSkills.map(skill => {
      return (
        <span class="otherskill">{skill}</span>
      )
    })

    return (
      <section id="resume">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Tech Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>

        <div className="row complementary">
          <div className="three columns header-col">
            <h1>
              <span>Other Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>These are some additional skills I find helpful in designing and building solutions.</p>
            <div className="otherskills-wrapper"> 
              {otherSkills}
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
