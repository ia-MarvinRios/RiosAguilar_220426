const canvas = document.getElementById("lineChart");
const ctx =canvas.getContext("2d");

const labels= ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic',];
const sanSalvador = [30,32,34,35,36,37,36,35,34,32,31,30]; // Temperaturas registradas en San Salvador por mes
const santaTecla = [25,26,28,29,31,32,32,31,30,28,27,26]; // Temperaturas registradas en Santa Tecla por mes

const marginLeft = 50; // Margen izq
const marginRight = 50; // Margen der

function drawLineWithLabels(data, color){

    ctx.beginPath();
    ctx.lineWidth = 2; // Grosor de la línea
    ctx.strokeStyle = color;

    // Se recorre por cada valor de data
     for(let i = 0; i < data.length; i++) {
        
        // Ajustar posición de la gráfica
        const x = (i / (data.length - 1)) * (canvas.width - marginLeft - marginRight) + marginLeft;
        const y = (canvas.height - 50) - (data[i] - 20) * 10;

        // Dibujar
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }

        ctx.fillStyle = color;
        ctx.font = "12px Arial";
        ctx.fillText(data[i] + "°C", x + 5, y - 5); // Escribir el valor de la etiqueta
         
    }

    ctx.stroke();
}

function drawAxes() {
    
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    // Dibujar eje x
    ctx.moveTo(50, canvas.height - 50);
    ctx.lineTo(canvas.width - 50, canvas.height - 50);

    // Dibujar eje y
    ctx.moveTo(50, canvas.height - 50);
    ctx.lineTo(50, 50);

    ctx.stroke();

    // Escribir etiquetas
    for (let i = 0; i < labels.length; i++) {
        const x = (i / (labels.length - 1)) * (canvas.width - 100) + 50;
        ctx.fillText(labels[i], x, canvas.height - 30);
    }

    // Escribir etiquetas en eje y
    for (let i = 20; i <= 40; i += 5) {
        const y = canvas.height - 50 - (i - 20) * 10;
        ctx.fillText(i + "°C", 20, y + 5);
    }
}

drawAxes();
drawLineWithLabels(sanSalvador, 'red');
drawLineWithLabels(santaTecla, 'blue');

// Escribir leyenda
ctx.fillStyle = "red";
ctx.fillRect(70, 20, 10, 10);
ctx.fillStyle = "black";
ctx.fillText("San Salvador", 85, 30);

ctx.fillStyle = "blue";
ctx.fillRect(170, 20, 10, 10);
ctx.fillStyle = "black";
ctx.fillText("Santa Tecla", 185, 30);

// Stuff ---------------------------------
var canvases = document.getElementsByClassName("grupo1");

if (canvases.getContext){
    alert("Si tiene conteto");
}else{
    alert("No tiene contexto");
}