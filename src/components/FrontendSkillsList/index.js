import React from "react";
import SkillItem from "../SkillItem";

const FrontendSkillsList = () => {
    return (
        <div className="skills-list frontend-skills-list">
            <SkillItem text="HTML & CSS" skillLevel={90} />
            <SkillItem text="JavaScript" skillLevel={85} />
            <SkillItem text="UX / UI" skillLevel={70} />
            <SkillItem text="jQuery" skillLevel={70} />
            <SkillItem text="React.js" skillLevel={75} />
            <SkillItem text="Bootstrap" skillLevel={75} />
        </div>
    )
}

export default FrontendSkillsList;