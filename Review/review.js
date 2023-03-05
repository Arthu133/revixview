function buscarTodosOsReviews(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3001/review", false);
    xhttp.send();
    let todosReviews = JSON.parse(xhttp.responseText);



    todosReviews.forEach(element => {
    let divMeusReview = document.getElementsByClassName("meusReviews");

    let divReview = document.createElement('div');
    divReview.className = 'review';
    divReview.id = element.idReview;

    let labeltitulo = document.createElement('label');
    labeltitulo.innerText = "Filme:"

    let spantitulo = document.createElement('span');
    spantitulo.innerText = element.idFilme;

    let divtitulo = document.createElement('div');
    divtitulo.className = 'titulo';

    divtitulo.appendChild(labeltitulo);
    divtitulo.appendChild(spantitulo);
   

     let divnota = document.createElement('div');
     divnota.className = 'nota';
     let spanNota = document.createElement('span');
     spanNota.innerText = ConverteNota(element.nota);
    
     divnota.appendChild(spanNota);


    let spanDescricao = document.createElement('span');
    spanDescricao.innerText = element.descricao;
    let divdescricao = document.createElement('div');
    divdescricao.className = 'descricao';
    divdescricao.appendChild(spanDescricao);


    let labeldata = document.createElement('label');
    labeldata.innerText = "Data de Publicação:"
    let spandata = document.createElement('span');
    spandata.innerText = element.dataPublicada;
    let divdata = document.createElement('div');
    divdata.className = 'data';
    
divdata.appendChild(labeldata);
divdata.appendChild(spandata);



divReview.appendChild(divtitulo);
divReview.appendChild(divnota);
divReview.appendChild(divdescricao);   
divReview.appendChild(divdata);   

divMeusReview[0].appendChild(divReview);
    });
}

function ConverteNota(nota){
  let estrelas = "";
  let i = 0;
    while(i<nota){
        estrelas+="⭐";
        i++;
    }
    return estrelas;
}

function adicionarNovoReview(){
    event.preventDefault ();

    let nomeFilme  = document.getElementById('txt_nomeFilme').value;
    let nota  = document.getElementById('txt_nota').value;
    let descricao  = document.getElementById('txt_descricao').value;
    let data  = document.getElementById('txt_data').value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3001/review", false);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    const body = JSON.stringify({
        idUsuario:8,
        idFilme:nomeFilme,
        nota:nota,
        descricao:descricao,
        dataPublicada:data
    
    });
    xhttp.onload = () => {
        if (xhttp.readyState == 4 && xhr.status == 201) {
          console.log(JSON.parse(xhttp.responseText));
        } else {
          console.log(`Error: ${xhttp.status}`);
        }
      };
      xhttp.send(body);

 alert("Review Salvo Com Sucesso!")
 buscarTodosOsReviews();
}