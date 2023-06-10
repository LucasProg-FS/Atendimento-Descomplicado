import "./styles.scss"

const DivError = ({title, description}) => {
  return (
    <div className="error" data-aos="fade-up" data-aos-duration="2000">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
  )
}

export default DivError