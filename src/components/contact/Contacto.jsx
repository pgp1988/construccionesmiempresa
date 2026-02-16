import { Footer } from "../footer/Footer";
import { NavBar } from "../menu/NavBar";
import "../../styles.css";
import { Form } from "./Form";

export const Contacto = () => {
  return (
    <>
    <div className="gridtemplateContact">
        <NavBar/>

          <Form/>

        <Footer/>
    </div>
    </>
  )
}
