


export default function AccordionCategory({ category }) {

  console.log(category)

  const skillsList = category.items.map((item) => {
    return (
      (category.id == 1) ? (
        <div className="skills__content-program">{item}</div>
      ) : (
        <div className="skills__content-skill">{item}</div>
      )
    )
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