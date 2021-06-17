var product = dinero;
var status = null;

function sub(){
product = document.getElementsByName("dinero")[0].value;
//document.write(`Usted retirara: ${product}`);
if (product>5000 || product <= 0 || product %1000 != 0){

    document.write(`Solo puede extraer $5000 o ingreso una cifra menor a 0 o no es multiplo de 1000`);

}
else if (product<=5000 && product>0) {

    if(product == 1000){
        document.write(`2 billetes de $500`);          
    }
    else if(product == 2000){
        document.write(`4 billetes de $500`);          
    }
    else if(product == 3000){
        document.write(`6 billetes de $500`);          
    }
    else if(product == 4000){
        document.write(`8 billetes de $500`);          
    }
    else if(product == 5000){
        document.write(`10 billetes de $500`);          
    }

    
}

};

