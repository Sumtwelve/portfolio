import React from "react";

function getBGColor(skillLevel) {
    let red = 0;
    let blue = 0;

    if (skillLevel <= 10) {
        red = skillLevel * (4 / 10);
        blue = skillLevel * (255 / 10);
    } else {
        red = (skillLevel * (251 / 90)) - (215 / 9)
        blue = (skillLevel * (-255 / 90)) + (850 / 3);
    }

    // I eyeballed these offsets, with the goal of letting the notch's
    // color flow with the gradient rather than interrupt it.
    return `-webkit-linear-gradient(0deg, rgb(${red - 10},0,${blue - 10}), rgb(${red + 20},0,${blue + 20}))`;
}

const SkillItem = ({ text, skillLevel }) => {
    return (
        <div className="skill-item">
            <p>{text}</p>
            <div className="meter">
                <div className="notch"
                    style={{
                        left: `${skillLevel - 10}%`,
                        background: getBGColor(skillLevel)
                    }}
                >{skillLevel}</div>
            </div>
            
        </div>
    )
}

export default SkillItem;