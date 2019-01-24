
  document.addEventListener("DOMContentLoaded", init)
    function init(){

    //selectors here
    const seaLifeContainer = document.querySelector("#seaLife-container")
      seaLifeContainer.class = "slider2"
    const oceanBar = document.querySelector("#ocean-bar")
    const seaLifeURL = "http://localhost:3000/api/v1/sea_lives"
    const oceansURL = "http://localhost:3000/api/v1/oceans"
    const navBar = document.querySelector("#navBar")
    const oceanTank = document.querySelector(".ocean-tank")
    const fullCarousel = document.querySelector("#full")
    const carousel = document.querySelector(".carousel-section")
    const infoCard = document.querySelector(".info-card")
    const pacificCarousel = document.querySelector("#ocean-1")
    const atlanticCarousel = document.querySelector("#ocean-2")
    const indianCarousel = document.querySelector("#ocean-3")

    //let filteredCreatures = {creatures: []};
    //fetches here

     // fetch(seaLifeURL)
     //    .then(r=> r.json())
     //    .then(data => {
     //        renderAllSeaLife(seaLifeContainer, data)
     //     })


    fetch(oceansURL)
    .then(r=> r.json())
    .then(data => {
       data.forEach(function(element){
         oceanDiv(oceanBar, element, navBar)
        });
     })


     //event listeners here
     //for the ocean creatures they select
    navBar.addEventListener("click", function(event){seaLifeHandler(event, seaLifeURL, oceanTank, navBar, fullCarousel)})


    //for dom removal or for choosing favorite
    infoCard.addEventListener("click", function (event) {clickHandler(event, seaLifeURL, oceanTank)})


     //for rendering selected card
    carousel.addEventListener("click", function(event){
      // debugger
      if (event.target.tagName === "IMG"){
      let id = event.target.parentElement.dataset.id
        fetch(seaLifeURL)
        .then(r=> r.json())

        .then(data => {

        let selected = data.find(function(element){
          return element.id === parseInt(id);
        });

         infoCard.innerHTML = "";
         renderInfoCard(infoCard, selected)
        })

      }//end of if

       else if(event.target.className.includes("slick-arrow"))  {
           // debugger
          console.dir(event.target)
      // document.querySelector(`#logo`).innerHTML = ""
        if(event.target.parentElement.id == "ocean-1"){
        document.querySelector(`#listed`).innerHTML = "All Pacific SeaLife"
      }
        else if(event.target.parentElement.id == "ocean-2"){
      document.querySelector(`#listed`).innerHTML = "All Atlantic SeaLife"
      }
    else if(event.target.parentElement.id == "ocean-3"){
    document.querySelector(`#listed`).innerHTML = "All Indiana SeaLife"
    }
      }

       else if(event.target.id.includes("slick-slide-control")){
         debugger
         if(event.target.parentElement.parentElement.parentElement.id == "ocean-1"){
         document.querySelector(`#listed`).innerHTML = "All Pacific SeaLife"
       }

         else if(event.target.parentElement.parentElement.parentElement.id == "ocean-2"){
       document.querySelector(`#listed`).innerHTML = "All Atlantic SeaLife"
       }
     else if(event.target.parentElement.parentElement.parentElement.id == "ocean-3"){
     document.querySelector(`#listed`).innerHTML = "All Indiana SeaLife"
     }
       }

  //
   })
    // }






  //functions go here
  //putting in tank
  function seaLifeHandler(event, seaLifeURL, oceanTank, navBar, fullCarousel, filteredCfreatures) {
    // debugger
    if(event.target.className === "ocean-image"){
      let oceanId = event.target.dataset.id

      fetch(seaLifeURL)
        .then(r=> r.json())

        .then(data => {
           let filtered = data.filter(function(element){
             //debugger
             return element.ocean.id === parseInt(oceanId)
           })
           // debugger

           //seaLifeContainer.innerHTML = ""
           oceanTank.innerHTML = `<span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>`

           renderAllSeaLife(oceanTank, filtered)

           //filteredCreatures.creatures = filtered

        })
       let viewedCarousel = document.querySelector(`#ocean-${oceanId}`)
       pacificCarousel.style.display = "none"
       atlanticCarousel.style.display = "none"
       indianCarousel.style.display = "none"
       fullCarousel.style.display = "none";

       viewedCarousel.style.display = "block";

       if (oceanId == 1){
         document.querySelector(`#listed`).innerText = "Pacific SeaLife (Click arrow/dots to expand)"
       }
       else if (oceanId == 2){
         document.querySelector(`#listed`).innerText = "Atlantic SeaLife (Click arrow/dots to expand)"
       }
       else if (oceanId == 3){
         document.querySelector(`#listed`).innerText = "Indian SeaLife (Click arrow/dots to expand)"
       }


      }//end of if
  }


  function clickHandler(event, seaLifeURL, oceanTank) {

     if (event.target.className === "delete-btn"){
       let id = event.target.dataset.id
         console.log(oceanTank)
        let selected = oceanTank.querySelector(`#creature-${id}`)
        //console.log(selected);
        //debugger;
         // let selected = filteredCreatures.creatures.find(function(element){

         //    if (element.id === parseInt(id)){
         //      return element;
         //    }
         // })
         selected.remove()
     }
     else if (event.target.className === "favorite-btn"){

       let buttonVal = event.target.dataset.value
       let isTrueSet = buttonVal === "true";
       isTrueSet = !isTrueSet

       let body = {
         isMyFavorite: isTrueSet
       }
        // debugger

       fetch(`${seaLifeURL}/${event.target.dataset.id}`,
       {
          method: "PATCH",
          headers: {
                     "Content-Type": "application/json",
                      "Accept": "application/json"
                   },
          body: JSON.stringify(body)
        })

        .then(r=> r.json())
        .then(data => {console.log(data)
          infoCard.innerHTML= ""
           renderInfoCard(infoCard, data);
           textButton(event.target, data)
        })
      }

     else if (event.target.className === "speed-btn"){

       let id = event.target.dataset.id

       let selected = oceanTank.querySelector(`#creature-${id}`)

          if (selected.className === "slow") {
            selected.className = "medium"
          }
         else if (selected.className === "medium") {
            selected.className = "fast"
          }
         else if (selected.className === "fast") {
            selected.className = "slow"
          }
      }//end of else if statement
  }
}


  function renderSeaLife(oceanTank, creature) {
    let imageSeaLife = document.createElement("img")
      imageSeaLife.src = creature.ocean_image
      imageSeaLife.className = "slow"
      imageSeaLife.id = `creature-${creature.id}`
      oceanTank.append(imageSeaLife)
  }

  function renderInfoCard(infoCard, creature){
    const seaCardName = document.createElement("p")
       seaCardName.innerHTML = `You picked: ${creature.name}
       <br><br> Description: ${creature.description}`
  //   let articleTag = document.createElement("article")
  //   seaCard.append(articleTag)
  //   let newElement = document.createElement("div")
  //   newElement.className = "col-xs-5 img-box"
  //   articleTag.append(newElement)
  //   let imageElement = document.createElement("img")
  //   imageElement.src = creature.image
  //   newElement.append(imageElement)
  //
  //   // debugger
  //   const seaFrame = document.createElement("div")
  //   seaFrame.className = "seaLife-frame"
  //   const h1 = document.createElement("h1")
  //   h1.className = "center-text"
  //   h1.innerHTML = creature.name
  //   const image = document.createElement("img")
  //   image.className= "seaLife-image"
  //   image.src = creature.image
  //   image.style.maxWidth = "200 px"
  //   image.style.maxHeight = "200 px"
  //
    const isMyFavorite = document.createElement("button");
      isMyFavorite.className = "favorite-btn"
      isMyFavorite.innerHTML = textButton(isMyFavorite, creature);
      isMyFavorite.dataset.id = creature.id

    const goFaster = document.createElement("button");
      goFaster.className = "speed-btn"
      goFaster.innerHTML =  "Change my size, and I'll move a little more too!"
      goFaster.dataset.id = creature.id

    const deleteButton = document.createElement("button")
      deleteButton.className = "delete-btn"
      deleteButton.innerHTML = "Remove me from Ocean Tank"
      deleteButton.dataset.value = "delete"
      deleteButton.dataset.id = creature.id

     infoCard.append(seaCardName, isMyFavorite, goFaster, deleteButton, )
    }

  function renderAllSeaLife(oceanTank, seaLife){
    return seaLife.map(function(creature){
      renderSeaLife(oceanTank, creature);
    });
  }

  function textButton(button, creature) {
    if (creature.isMyFavorite === true) {
      button.innerHTML = "My Favorite!"
      button.dataset.value = true;
      }
    else {
      button.innerHTML = "Choose me as Your Favorite!"
      button.dataset.value = false;
    }
    return button.innerHTML;
  }


  function oceanDiv(oceanBar, water, navBar){
    let oceanDiv = document.createElement("span")
    oceanDiv.dataset.id = water.id
    oceanDiv.classList = "ocean-name";
    // oceanBar.innerHTML += ` <span class="waterName">${water.name}</span> `
    const imgOcean = document.createElement("img")
    imgOcean.dataset.id = water.id
    imgOcean.style.width = "240px"
    imgOcean.style.height = "115px"
    // imgOcean.style.padding.right = "15px"
    imgOcean.className= "ocean-image"
    imgOcean.src = water.image
    // debugger
    oceanDiv.append(imgOcean)
    // oceanBar.append(oceanDiv);

    navBar.append(oceanDiv)

  }


// ------------------------Carousel-----------------------//

$('.slider2').slick({
	dots: true,
  arrows: true,
	infinite: true,
	centerMode: true,
	centerPadding: '1%',
	slidesToShow: 4,
	speed: 500,
responsive: [{

      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }

    }]
});
// ------------------------oceanTank-----------------------//
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$.fn.randomOrder = function(animate) {
  this.each(function() {
    var image = $(this);

    // Viewport Dimensions
    var vpHeight = $(window).height();
    var vpWidth = $(window).width();

    // Image Position
    var xPos = getRandomInt(0, vpWidth - image.width());
    var yPos = getRandomInt(0, vpHeight - image.height());
    var zIndex = getRandomInt(0,13);

    // Animation Duration
    if(animate) var dur = 3500;
    else var dur = 0;

    

    image.animate({left: xPos, top: yPos, 'z-index': zIndex}, dur);
  });
};


//Setup
$('.slow').randomOrder(false);
$('.slow').draggable({stack: "img"});


// Change after 10 Seconds
window.setInterval(function(){
  $('.slow').randomOrder(true);
}, 4000);

//Setup
$('.medium').randomOrder(false);
$('.medium').draggable({stack: "img"});


// Change after 10 Seconds
window.setInterval(function(){
  $('.medium').randomOrder(true);
}, 30);

//Setup
$('.fast').randomOrder(false);
$('.fast').draggable({stack: "img"});


// change after 10 Seconds
window.setInterval(function(){
  $('.fast').randomOrder(true);
},10);
