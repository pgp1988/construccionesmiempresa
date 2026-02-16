import { Footer } from "../footer/Footer";
import { NavBar } from "../menu/NavBar";
import "../../styles.css";
import { Geolocalizacion } from "./Geolocalizacion";

export const QuienesSomos = () => {
  return (
    <>
      <div className="gridtemplateAbout">
        <NavBar />
        <h2 className="companyHeading">Sobre nuestro equipo</h2>
        <p className="companyDescription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          consequuntur libero nihil! Neque quisquam repellat, quod facilis illo
          tempora ratione reprehenderit nihil, rem corporis molestiae ipsam hic
          eos maxime distinctio! Nihil doloremque nisi vel hic est distinctio
          unde voluptatem ullam maiores id quos modi incidunt, officiis tempora
          ea, odit cupiditate omnis pariatur optio ducimus quibusdam similique
          dolor aperiam? Reprehenderit nihil ad ipsam. Ad, asperiores quibusdam
          nesciunt, dolorem eligendi rerum voluptates perspiciatis, fugiat nam
          dignissimos unde consequatur in expedita? Modi saepe esse, quis quo
          sed voluptatibus sint, adipisci qui ipsam odio magnam perferendis,
          exercitationem soluta quam aliquam dolor sequi expedita. Ea odio
          veniam, ducimus accusamus tempora quidem debitis aliquam, hic deserunt
          laudantium corporis non explicabo magni ipsa, pariatur suscipit error
          eligendi!
        </p>
        <img src="/assets/images/equipo.jpg" alt="equipo de trabajo" style={{width:"300px"}} className="team1" />
        <img src="/assets/images/equipo2.jpg" alt="otra imagen del equipo" style={{width:"300px"}} className="team2" />
        <img src="/assets/images/equipo3.jpg" alt="una imagen más del equipo" style={{width:"300px"}} className="team3" />
        <h3 className="h3map">Puedes encontrarnos en el mapa:</h3>
        <Geolocalizacion />
        <div className="h3mapVisita"><h3>Visítanos en la siguiente dirección:</h3><p>
          C/ Mayor N3, 1A (Ciudad ficticia, País ficticio)
        </p></div>
        <Footer />
      </div>
    </>
  );
};
