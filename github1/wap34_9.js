var x=document.getElementById("frm");
x.onsubmit=function demo(){
    var y=Number(document.getElementById("user").value);
    var z=y.toString();
    var num=z.length;
    var i;
    for(i=0;i<num;i++){
        switch(z.charAt(i)){
            case '0' : {document.write("zero ");}
            break;
            case '1' :{document.write("one ");}
            break;
            case '2' :{document.write("two ");}
            break;
            case '3' :{document.write("three ");}
            break;
            case '4' :{document.write("four ");}
            break;
            case '5' :{document.write("five ");}     
            break;
            case '6' :{document.write("six ");}
            break;
            case '7' :{document.write("seven ");}
            break;
            case '8' :{document.write("eight ");}
            break;
            case '9' :{document.write("nine ");}
            break;

            default :{document.write("your input is error ");}
        }
    }
};