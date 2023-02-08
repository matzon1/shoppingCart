import "../styles/About.css"
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { ImFacebook2} from 'react-icons/im';


export function About() {
  return (
    <div className="bg">
      <h1 className="mt-4 pt-5 title">Quienes somos?</h1>
      <div className="parrafo-nosotros">
      <p className=" w-20 mb-4 mt-3">
        Somos Dietéticas Tomy. Y somos la opción más rica, saludable y económica
        en productos naturales. Nuestros altos estándares de calidad hacen
        posible que lleguemos a cada local con las más sanas y ricas opciones. Y
        esa calidad es insuperable cuando, además, llega a cada persona con el
        mejor precio. Porque para nosotros, un producto saludable lo es más
        cuando muchas personas pueden acceder a él.
      </p>
      </div>
      <div className="contacto">
      <h1 className="contact mt-4">Contacto</h1>
      <div className=" icons d-flex m-2">
        <a href="" className="instagram p-2">
       <BsInstagram/>
       </a>
       <a href="" className="facebook p-2">
       <ImFacebook2/>
       </a>
       <a href="" className="whatsapp p-2">
       <BsWhatsapp/>
       </a>
      </div>
      </div>
    </div>
  );
}
