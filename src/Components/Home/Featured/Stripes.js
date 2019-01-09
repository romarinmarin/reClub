import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "#98c5e9",
        left: 120,
        rotate: 25,
        top: -260,
        delay: 0
      },
      {
        background: "#ffffff",
        left: 360,
        rotate: 25,
        top: -397,
        delay: 200
      },
      {
        background: "#98c5e9",
        left: 600,
        rotate: 25,
        top: -498,
        delay: 400
      }
    ]
  };

  renderStripes = () => {
    return this.state.stripes.map((stripe, i) => {
      let show = true;
      let { background, top, left, rotate, delay } = stripe;
      return (
        <Animate
          key={i}
          show={show}
          start={{
            backgroundColor: "fff",
            left: 0,
            top: 0,
            rotate: 0,
            opacity: 0
          }}
          enter={{
            backgroundColor: [background],
            left: [left],
            top: [top],
            timing: { delay: delay, duration: 200, ease: easePolyOut },
            opacity: 1,
            rotate: [rotate],
            events: {
              end() {
                console.log("animation finished");
              }
            }
          }}
        >
          {({ opacity, backgroundColor, top, left, rotate }) => {
            return (
              <div
                className="stripe"
                style={{
                  backgroundColor: backgroundColor,
                  opacity,
                  transform: `rotate(${rotate}deg) translate(${left}px,${top}px)`
                }}
              />
            );
          }}
        </Animate>
      );
    });
  };

  render() {
    return <div className="featured_stripes">{this.renderStripes()}</div>;
  }
}

export default Stripes;
