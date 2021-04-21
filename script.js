const content = document.getElementById('content')

const secret = document.createElement('script')
secret.src = 'senha.js'
document.head.appendChild(secret)

function confirmSenha() {
    var pergunta = document.cv.senha.value
    if (pergunta==finalSenha) {
        window.location.href = "acertou.html"
    } else {
        window.location.href = "errou.html"
    }



}