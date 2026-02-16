import { Footer } from "../footer/Footer";
import { NavBar } from "../menu/NavBar";
import { cardItem } from "../../data/cardItem";
import { Card } from "./Card";


export const Servicios = () => {
  return (
    <>
        <div className="gridtemplateServices">
                <NavBar/>

                <div className="card">
                  {cardItem.map(({title, items, id}) => <Card title={title} items={items} key={id} clave={id}/>)}  
                </div>
                <Footer/>
            </div>
        </>
  )
}
