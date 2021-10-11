import './HomeScreen.css';
import { Link } from 'react-router-dom';


const HomeScreen = () => {


    return (
        <div className="homescreen">
            <div className="parallax" id="block1">
                <div id="text_box">
                    <h1 className="home-header">Benvenuto su <strong>BookShop.com</strong></h1>	
                    <h2 className="home-header">Qui puoi comprare i migliori libri besteller del momento</h2>
                </div>
            </div>    

            <div className="parallax" id="block2"> 
                <div id="text_box">
                    <Link to="/search" className="home-header">Inizia la ricerca</Link>
                </div>
            </div>

            <div className="parallax" id="block3"> 
                <div id="text_box">
                    <Link to="/cart" className="home-header">I tuoi ordini</Link>
                </div>
            </div> 

        </div>
    )
}

export default HomeScreen