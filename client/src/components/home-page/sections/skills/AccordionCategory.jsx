import SkillBubble from "./SkillBubble"


export default function AccordionCategory({ category }) {

  const skillsList = category.items.map((item, index=1) => {
    return <SkillBubble key={index} item={item} categoryID={category.id} />
  })

  return (
    <div>
      <h4 className="skills__content-subtitle">{category.name}</h4>
        <div className="skills__content-list">
          {skillsList}
        </div>
    </div>
  )
}