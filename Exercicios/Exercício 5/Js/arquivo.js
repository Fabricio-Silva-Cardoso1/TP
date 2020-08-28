function clicked(){
   var resultado =  confirm("Você quer apagar o formulario?")
        if(resultado==true){
            document.getElementById("formas").reset();
        }
}

function enviar(){

    nome();

    estadoCivil();
    
    objetivos();
   
    mailtel();
 
    valing();

    prog_lang();

function objetivos(){
    var obj = document.getElementById("objetivo").value.toLowerCase();
    document.getElementById("objetivo").value = obj;
    return false;
}

function nome(){
    if(document.tx_nome.informacoes.value.length < 4 || document.tx_nome.informacoes.value==""){
        alert("Preencha o campo NOME corretamente!");
        document.tx_nome.informacoes.focus();
        document.tx_nome.informacoes.value = "";
        return false;
    }else{
       var name = document.getElementById("informacoes").value.toUpperCase();
       document.getElementById("informacoes").value = name;
       return false;
    }
}

function estadoCivil(){

    try{
        document.getElementById("civil").removeChild(document.getElementById("span"));
    }catch(error){

    }
    
    if(document.tx_nome.EstadoCivil.value=="Selecione o estado civil"){
        let span=document.createElement("span");
        span.textContent = "Selecione um estado civil válido!";
        span.style.color="red";
        span.style.fontSize="small"
        span.id= "error";
   
        document.getElementById("civil").appendChild(span);
    }
}

function mailtel(){
    var tel = document.tx_nome.cel.value
 var email = document.tx_nome.mail.value
    if(tel==""&&email==""){
        alert("Necessario informar telefone ou email");
        document.tx_nome.informacoes.focus();
        return false;
    }
}

function valing(){
    if(document.tx_nome.english.value =="" || document.tx_nome.spanish.value ==""){
        alert("Escolha os níves das línguagens");
        return false;
    }
}

function prog_lang(){
    var linguagens = document.getElementsByName("linguagem");
    
    for(i = 0; i< linguagens.length; i++){

        if(linguagens[i].checked ==false){
            
            if(confirm("Deseja enviar o formulário sem nenhuma linguagem?")==true){
                alert("Dados enviados, obrigado pela colaboração");
                document.tx_nome.submit();
                break;
           }else{break;}
            }
        
        }   
    return false;
}

}



