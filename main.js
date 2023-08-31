const container = document.querySelector('.container')
const card = document.querySelectorAll('.card')


//pega os dados do json e muda p html da div card
const pegaDados = (date) => { 
return fetch('./data.json')
.then(response => {
  return response.json();
}).then(dados => {
       card.forEach((texto, index) => {
        const dado = dados[index]
        texto.innerHTML = ` 
       <div class="container-card__img ${dado.title.toLowerCase()}__img">
       <img src="./images/icon-${dado.title}.svg" alt="">
     </div>
     <div class="container__card container__${dado.title.toLowerCase()}" >
       <h4 class="title__card">${dado.title} </h4>
       <h4 class="description__card">${dado.timeframes[date].current}hrs</h4>
       <img class="card__more" src="./images/icon-ellipsis.svg" alt="">
       <p class="card__day">Last Week - ${dado.timeframes[date].previous}hrs</p>
   </div>
     `;
       })
    })
  }
pegaDados('weekly')


//seleciona o botao e executa a funcao pegaDados de acordo com o botao acionado
let menu = document.querySelectorAll('#dashboard__button');
 menu.forEach(itemMenu => {
    itemMenu.addEventListener('click', (event) => {
      menu.forEach(btn =>{
        btn.classList.remove('botao__ativo')
      })
      event.preventDefault()
      event.target.classList.add('botao__ativo')
      pegaDados(event.target.textContent.toLowerCase())
      
    });
 });



 