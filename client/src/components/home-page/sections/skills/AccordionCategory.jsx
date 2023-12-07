


export default function AccordionCategory({ category }) {

  const skillsList = category.items.map((item) => {
    return (
      (category.id == 1) ? (
        <div key={category.id} className="skills__content-program">{item}</div>
      ) : (
        <div key={category.id} className="skills__content-skill">{item}</div>
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