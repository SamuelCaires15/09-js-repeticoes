function calcular() {
    var início = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('preencha os três espaços e tente novamente.')
        res.innerHTML = 'Contagem impossibilitada!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let c = 0
        i = Number(início.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Usando passo 1 no lugar...')
            p = 1
        }
        if (i < f) { 
            //contagem crescente
            for (c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1} `
            }
        } else { 
            //contagem decrescente
            for(c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{27A1} `
            }
        }res.innerHTML += `\u{1F3C1}`
    }
}