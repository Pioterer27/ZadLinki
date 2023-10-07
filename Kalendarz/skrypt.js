function tenM(x){
const dzien = new Date();
month= dzien.getMonth()+x;
switch(month){
    case 0: 
    document.write("Styczeń");
    break;
    case 1:
    document.write("Luty");
    break;
    case 2: 
    document.write("Marzec");
    break;
    case 3:
    document.write("Kwiecień");
    break;
    case 4: 
    document.write("Maj");
    break;
    case 5:
    document.write("Czerwiec");
    break;
    case 6: 
    document.write("Lipiec");
    break;
    case 7:
    document.write("Sierpień");
    break;
    case 8: 
    document.write("Wrzesień");
    break;
    case 9:
    document.write("Październik");
    break;
    case 10: 
    document.write("Listopad");
    break;
    case 11:
    document.write("Grudzień");
    break;
    case 13: 
    document.write("Styczeń");
    break;
}
}