let calcularVF = document.getElementById('calcularVF');


function pace () {
    let nome = document.getElementById('nome').value;
    let AplicacaoP = parseFloat(document.getElementById('AplicacaoP').value);
    let ParcelasN = parseFloat(document.getElementById('ParcelasN').value);
    let taxadejurosI = parseFloat(document.getElementById('taxadejurosI').value/100);
    let NOTIFICACAO = document.getElementById('NOTIFICACAO');

    if (nome == '' && AplicacaoP == '' && ParcelasN == '' && taxadejurosI == "") {
    
    }
    else
    { 
        let VF = (AplicacaoP*((((1+ taxadejurosI)**ParcelasN) - 1) / taxadejurosI)).toFixed(2);
        var JUROS = (taxadejurosI * 100);
        NOTIFICACAO.style.color = "Black";
        NOTIFICACAO.textContent = `Bem vindo ${nome}! Com um investimento de  R$
         ${AplicacaoP} com o período de  ${ParcelasN} meses, e juros de ${JUROS}%, você irá ter um VF de R$ ${VF}. `;
    }

}

calcularVF.addEventListener('click', pace);
       
        
        

        
        