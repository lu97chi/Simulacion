$(".brand-logo").sideNav();
$('#ejercice1').hide()
let velocidades = [];
let velAux = [];
let option;
let equals = false;
$('#first').on('click',()=>{
    option = 1;
    if (option == 1) {
        $('#menuOption').hide();
        $('#ejercice1').show();
    } 
})
$('#pCal').on('click', ()=> {
    $('#pCal').hide();
    const g = 9.81;
    let t = 0;
    const m = $('#pesoP').val();
    const c = 12.5;
    while(!equals) {
        const row = $("<tr>")
        simular(g,c,m,t);
        llenadoVelocidad(resultado);
        llenadoAux(resultado.toFixed(3));
        row.append($("<td>").text(t));
        row.append($("<td>").text(resultado.toFixed(3)));
        $('#pTable').append(row);
        if(velAux[t] == velAux[t-1]){
            equals = true;
        }
        t++;
    }

    $('#grafica').highcharts({
        title: {
            text: 'Caida paracaidista',
            x: -20 //center
        },
        xAxis: {
            title: {
                text: 'Segundos (s)'
            }
        },
        yAxis: {
            title: {
                text: 'Velocidad (km/s)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 's'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Caida',
            data: velocidades
        }]
    });
    
       
})



function simular(g,c,m,t){
    return resultado = (((g*m)/c)*(1-Math.exp(-(c/m)*t)));
}

function llenadoVelocidad(r) {
    velocidades.push(r);
}

function llenadoAux(r){
    velAux.push(r);
}



