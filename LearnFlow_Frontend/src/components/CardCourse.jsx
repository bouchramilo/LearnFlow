
export default function CardCourse() {
  return (
    <div>
         <div className="course-card">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Course 1"
            className="course-image"
          />
          <div className="course-content">
            <h3>Introduction au développement web</h3>
            <p>
              Apprenez les bases du HTML, CSS et JavaScript pour créer vos
              premiers sites web.
            </p>
            <a href="#" className="btn">
              Voir plus
            </a>
          </div>
        </div>
    </div>
  )
}
