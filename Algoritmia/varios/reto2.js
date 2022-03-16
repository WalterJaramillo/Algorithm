var nombres = prompt("Indica tu nombre y apellidos")
var edad = parseInt(prompt("Indique tu edad"))
var ingreso_familiar = parseFloat(prompt("Indica tu ingreso familiar"))
var puntaje_examen = parseInt(prompt('Indique su puntaje'))


let salario_minimo = 1.0
let porcentaje_edad = 0
let porcentaje_ingreso_familiar = 0
let porcentaje_puntaje_ingreso = 0
let total_porcentaje = 0

if(edad >=15 && edad <= 18){
    porcentaje_edad = 0.25
    if(ingreso_familiar<= salario_minimo){
        porcentaje_ingreso_familiar = 0.30
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`)
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo && ingreso_familiar <= salario_minimo*2){
        porcentaje_ingreso_familiar = 0.20
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo*2 && ingreso_familiar <= salario_minimo*3){
        porcentaje_ingreso_familiar = 0.10
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo*3 && ingreso_familiar <= salario_minimo*4){
        porcentaje_ingreso_familiar = 0.5
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar >= salario_minimo*5){
        porcentaje_ingreso_familiar = 0
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }
    }

}else if(edad >= 19 && edad <= 21){
    porcentaje_edad =  0.15
    if(ingreso_familiar<= salario_minimo){
        porcentaje_ingreso_familiar = 0.30
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo && ingreso_familiar <= salario_minimo*2){
        porcentaje_ingreso_familiar = 0.20
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo*2 && ingreso_familiar <= salario_minimo*3){
        porcentaje_ingreso_familiar = 0.10
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo*3 && ingreso_familiar <= salario_minimo*4){
        porcentaje_ingreso_familiar = 0.5
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar >= salario_minimo*5){
        porcentaje_ingreso_familiar = 0
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }
    }

}else if(edad >= 22 && edad <= 25){
    porcentaje_edad = 0.10
    if(ingreso_familiar<= salario_minimo){
        porcentaje_ingreso_familiar = 0.30
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo && ingreso_familiar <= salario_minimo*2){
        porcentaje_ingreso_familiar = 0.20
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo*2 && ingreso_familiar <= salario_minimo*3){
        porcentaje_ingreso_familiar = 0.10
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo*3 && ingreso_familiar <= salario_minimo*4){
        porcentaje_ingreso_familiar = 0.5
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar >= salario_minimo*5){
        porcentaje_ingreso_familiar = 0
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }
    }
     
}else if(edad > 25){
    porcentaje_edad =  0
    if(ingreso_familiar<= salario_minimo){
        porcentaje_ingreso_familiar = 0.30
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${porcentaje_edad}`) 
        }

    }else if(ingreso_familiar > salario_minimo && ingreso_familiar <= salario_minimo*2){
        porcentaje_ingreso_familiar = 0.20
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo*2 && ingreso_familiar <= salario_minimo*3){
        porcentaje_ingreso_familiar = 0.10
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar > salario_minimo*3 && ingreso_familiar <= salario_minimo*4){
        porcentaje_ingreso_familiar = 0.5
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }

    }else if(ingreso_familiar >= salario_minimo*5){
        porcentaje_ingreso_familiar = 0
        if(puntaje_examen >= 80 && puntaje_examen <= 86){
            porcentaje_puntaje_ingreso = 0.30
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 86 && puntaje_examen < 91){
            porcentaje_puntaje_ingreso = 0.35
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 91 && puntaje_examen < 96){
            porcentaje_puntaje_ingreso = 0.40
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen >= 96){
            porcentaje_puntaje_ingreso = 0.45
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }else if(puntaje_examen < 80){
            porcentaje_puntaje_ingreso = 0
            total_porcentaje = porcentaje_edad + porcentaje_ingreso_familiar + porcentaje_puntaje_ingreso
            console.log(`${porcentaje_edad}, ${porcentaje_ingreso_familiar}, ${porcentaje_puntaje_ingreso}, Total: ${total_porcentaje}`) 
        }
    }
}
