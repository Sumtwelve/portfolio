import React from "react";
import SkillItem from "../SkillItem";

const BackendSkillsList = () => {
    return (
        <div className="skills-list backend-skills-list">
            <SkillItem text="Node.js" skillLevel={90} />
            <SkillItem text="Express.js" skillLevel={80} />
            <SkillItem text="REST API" skillLevel={75} />
            <SkillItem text="MySQL" skillLevel={90} />
            <SkillItem text="Sequelize ODM" skillLevel={90} />
            <SkillItem text="MongoDB" skillLevel={80} />
            <SkillItem text="Mongoose ODM" skillLevel={85} />
            <SkillItem text="GraphQL" skillLevel={70} />
            <SkillItem text="Apollo GraphQL" skillLevel={70} />
        </div>
    )
}

export default BackendSkillsList;