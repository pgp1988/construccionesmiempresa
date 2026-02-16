import "../../styles.css";

export const Card = ({title,items,clave}) => {
  return (
        <div className={clave}>
            <div className="cardHeading">
                <h3>{title}</h3>
            </div>
            <div className="cardText">
                <ul>
                    {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </div>
  )
}
