const canvas = document.getElementById("lineChart");
const ctx =canvas.getContext("2d");

const labels= ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic',];
const sanSalavador = [30,32,34,35,36,37,36,35,34,32,31,30];
const santaTecla = [25,26,28,29,31,32,32,30,28,27,26];

const marginLetf = 50;
const marginRight = 50;

function drawLineWithLabels(data, color){
    ctx.beginPath();
    ctx.lineWidth= 2;
     ctx.strokeStyle =color;

     for(let i = 0; i<data.lenght; i++){
        const x = (i/(data.lenght -1))*(canvas.width - marginLetf-marginRight)+marginLetf;
        const y= canvas.heigth() - (data[i]-15)*10;

        if (i == 0){
            ctx.moveTo(x,y);
        }else{
            ctx.lineTo(x,y);
        }

        ctx.fillStyle = color;
        ctx.font = "12px Arial";
        ctx.fillText(data[i]+"°C", x+5,y-5);
         
    }
    ctx.stroke();
}
