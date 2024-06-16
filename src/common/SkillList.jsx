/* eslint-disable react/prop-types */

function SkillList({src , skill}) {
    return (
      <span>
          <img src={src} alt="checkmark item" />
          <p>{skill}</p>
      </span>
    )
  }
  
  export default SkillList
  