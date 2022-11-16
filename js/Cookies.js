 
var inMinutes = (1)/(24*60);  // 1/24*1/60*(Valor en mintuos)

let nIntervId; // variable para almacenar nuestro intervalID

const eliminarLocalStorage = () => {
    localStorage.removeItem("datos")
    nIntervId = null;
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

//Creamos el interval a 1s
nIntervId = setInterval(ComprobarCookie, 1000);

});