import '../css/ayuda.css'
import imagen1 from '../img/bici2.jpg';
import imagen2 from '../img/bicicleta.jpg';
import imagen3 from '../img/perrito.jpg';
import svg1 from '../img/plantita.svg';
import svg2 from '../img/plantita2.svg';
import svg3 from '../img/plantita3.svg';
import svg4 from '../img/plantita4.svg';
import svg5 from '../img/plantita5.svg';
import Navbar from '../componentes/navbar.jsx'

function App() {

  return (
    <>
    <Navbar></Navbar>
    
        <section className='sec-Titulos'>
        <img src={svg2} alt="" className='svg svg1'/>
        <img src={svg1} alt="" className='svg svg2'/>
        <img src={svg3} alt="" className='svg svg3'/>
            <div className='div-content'>
                <h1 className='titulo'><span className='spanvolteado'>En que nos</span>Ayuda</h1>
                
            </div>
            <div className='div-elementos'>
                <div className='elemento1'>
                   <h2 className='h2ayuda'>Materiales <br /> Reutilizables</h2>
                </div>
                <div className='elemento2'>
                <h2 className='h2ayuda'>Materiales <br /> Reciclables</h2>
                </div>
                <div className='elemento3'>
                <h2 className='h2ayuda'>Materiales <br /> No contaminantes</h2>
                </div>
            </div>
        </section>
        <section className='sec-elementos'>
                <div className='cajas caja1'>
                    <div><img src={imagen1} alt="" className='imagen'/></div>
                    <div><p className='letrap'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid ut quia obcaecati magnam odit culpa dolore molestias! Beatae id eveniet dolores eos ducimus necessitatibus delectus. Voluptates sapiente dolore cum.
                    Mollitia harum maiores voluptate, necessitatibus, unde eius fugit nulla accusamus id nobis aliquam eum at quod, fuga architecto eligendi omnis delectus excepturi ratione ipsa fugiat. Natus error reprehenderit quia dolore!</p></div>
                </div>
                <div className='cajas caja2'>
                <div><img src={imagen2} alt="" className='imagen'/></div>
                    <div><p className='letrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis explicabo vitae minima? Error laboriosam modi consequatur facilis ex dolores quos cum dolore amet nulla adipisci, repudiandae corporis. Inventore, corporis!
                    Suscipit voluptatum illum vero minima officia quia sapiente explicabo, aspernatur cupiditate sequi vel unde atque quidem officiis necessitatibus sint ex dolore praesentium eius nemo cumque ab totam impedit? Deleniti, minus.</p></div>
                </div>
                <div className='cajas caja3'>
                <div><img src={imagen3} alt="" className='imagen'/></div>
                    <div><p className='letrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto totam corporis reiciendis quisquam omnis beatae tempore repudiandae odio odit ratione placeat repellendus quam, assumenda exercitationem deserunt neque sapiente explicabo!
                    Perferendis et aut esse reprehenderit tempore saepe fuga voluptatem magnam accusamus, ipsum quis assumenda sed id. Sit similique ipsa vitae nam quam perspiciatis deleniti officia rerum harum doloribus, molestiae libero!</p></div>
                </div>
                <img src={svg4} alt="" className='svg svg4'/>
                <img src={svg5} alt="" className='svg svg5'/>
        </section>
    </>
  )
}

export default App
