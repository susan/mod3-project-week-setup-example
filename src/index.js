
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
    seaLifeContainer.addEventListener("click", function (event) {clickHandler(event, seaLifeURL, seaLifeContainer)})


    // }




 }

  //functions go here
  //dom removal or for choosing favorites
  function seaLifeHandler(event, seaLifeURL, oceanTank, navBar, fullCarousel) {
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
           renderAllSeaLife(oceanTank, filtered)
        })
       let viewedCarousel = document.querySelector(`#ocean-${oceanId}`)
       viewedCarousel.style.display = "block";
       fullCarousel.style.display = "none";
      }//end of if
  }


  function clickHandler(event, seaLifeURL, seaLifeContainer) {

     if (event.target.className === "delete-btn"){
       event.target.parentElement.remove()
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
           renderSeaLife(seaLifeContainer, data);
           textButton(event.target, data)
        })

      }//end of else if statement
  }



  function renderSeaLife(oceanTank, creature) {
    console.log(oceanTank, creature)
    let imageSeaLife = document.createElement("img")
      imageSeaLife.src = creature.image
      imageSeaLife.className = "slow"
      oceanTank.append(imageSeaLife)
  }
  //
  //   const seaCard = document.createElement("div")
  //   seaCard.className = "seaLife-card"
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
  //   const isMyFavorite = document.createElement("button");
  //   isMyFavorite.className = "favorite-btn"
  //   isMyFavorite.innerHTML = textButton(isMyFavorite, creature);
  //   isMyFavorite.dataset.id = creature.id
  //
  //   deleteButton = document.createElement("button")
  //   deleteButton.className = "delete-btn"
  //   deleteButton.innerHTML = "x"
  //   deleteButton.dataset.value = "delete"
  //
  //   // debugger
  //   seaFrame.append(seaCard)
  //   seaCard.append(h1, image, isMyFavorite, deleteButton)
  //   // debugger
  //   seaLifeContainer.append(seaFrame)
  //}

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
      button.innerHTML = "Choose Favorite!"
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
        slidesToShow: 1
      }

    }]
});
