


export default function SkillBubble({ item, categoryID }) {

  

  const itemClass = (categoryID == 1) ? (
    "skills__content-program"
  ) : (
    "skills__content-skill"
  )
  
  return (
    <div className={itemClass}>{item}</div>
  )
}