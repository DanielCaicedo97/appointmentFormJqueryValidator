 
var inMinutes = (5)/(24*60);  // 1/24*1/60*(Valor en mintuos) = (Valor Minutos)/(24*60)

let nIntervId; // variable para almacenar nuestro intervalID

const eliminarLocalStorage = () => {
    localStorage.removeItem("datos")
    //localStorage.clear()
}


const ComprobarCookie = () =>{
        let cookie = Cookies.get('name')
        cookie != "Alejo" ? eliminarLocalStorage(): console.log(cookie) ;

}

$(document).ready(()=>{
// Creamos el cookie
Cookies.set('name', 'Alejo', {
    expires: inMinutes
});

if(localStorage.getItem('datos') !== undefined){ //verificamos si hay algo en el local Storage
//Creamos el interval a 1s
nIntervId = setInterval(ComprobarCookie, 1000);
}

});