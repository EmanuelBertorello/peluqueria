import {connect } from "react-redux"
import {NavLink} from "react-router-dom"
import fondo from "assest/img/fondonegro.png"
function Navbar(){
    return(
      <div className="border-b border-gray-200 bg-black p-7 sm:px-6 	">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <img src={fondo}
          height={120}
          width={150}
          className="inline-flex border-left-60 px-5" />
          
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
        <NavLink to="/nosotros"className="text-lg text-slate-100 inline-flex px-5 font-medium leading-6 text-gray-900  ">nosotros</NavLink>
        <NavLink to="/contacto"className="text-lg text-slate-100	 inline-flex px-5 font-medium leading-6 text-gray-900  ">contacto</NavLink>
        <NavLink to="/servicios"className="text-lg text-slate-100	 inline-flex px-5 font-medium leading-6 text-gray-900  ">servicios</NavLink>
          <button 
            type="button"
            className="m-3 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
   >
            pedir un turno
          </button >
        </div>
      </div>
    </div>
    )
}
export default Navbar