import Layouts from "hocs/layouts/layouts"
import Navbar from "componentes/navegacion/navbar"
import Footer from "componentes/navegacion/footer"
import Header from "componentes/home/header"
function Home(){
    
    return(
        <Layouts>
            <Navbar/>
            <Header/>
            <Footer/>
        </Layouts>
    )
}
export default Home