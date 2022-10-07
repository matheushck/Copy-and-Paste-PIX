function copyToClickBoard(){
    var content = document.getElementById('textArea').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert('Urruull! ?? Voce copiou minha chave pix, agora � s� me doar uma graninha ?? ');
    })
        .catch(err => {
        alert('Acho que deu erro ao copiar o codigo ?? ');
      
    })
 
}


