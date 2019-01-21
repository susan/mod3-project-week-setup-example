
//selectors go here

// const seaLifeContainer = document.querySelector("#seaLife-container")
// const oceanBar = document.querySelector("#ocean-bar")
// const seaLifeURL = "http://localhost:3000/seaLife"
// const oceansURL = "http://localhost:3000/oceans"

  document.addEventListener("DOMContentLoaded", init)
    function init(){

    const seaLifeContainer = document.querySelector("#seaLife-container")
    const oceanBar = document.querySelector("#ocean-bar")
    const seaLifeURL = "http://localhost:3000/seaLife"
    const oceansURL = "http://localhost:3000/oceans"

    //fetches here

     fetch(seaLifeURL)
        .then(r=> r.json())
        .then(data => {
            renderAllSeaLife(seaLifeContainer, data)
         })


    fetch(oceansURL)
    .then(r=> r.json())
    .then(data => {
       data.forEach(function(element){
         oceanDiv(oceanBar, element)
        });
     })


     //event listeners here
     //for the ocean creatures they select
    oceanBar.addEventListener("click", function(event){seaLifeHandler(event, seaLifeURL, seaLifeContainer)})


    //for dom removal or for choosing favorite
    seaLifeContainer.addEventListener("click", function (event) {clickHandler(event, seaLifeURL, seaLifeContainer)})

 }

  //functions go here
  //dom removal or for choosing favorites
  function seaLifeHandler(event, seaLifeURL, seaLifeContainer) {
    if(event.target.className === "ocean-image"){
      let oceanId = event.target.dataset.id

      fetch(seaLifeURL)
        .then(r=> r.json())

        .then(data => {
           let filtered = data.filter(function(element){
             return element.oceanId === parseInt(oceanId)
           })
           seaLifeContainer.innerHTML = ""
           renderAllSeaLife(seaLifeContainer, filtered)
        })
     }
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
        .then(data => {
           renderSeaLife(seaLifeContainer, data);
           textButton(event.target, data)
        })

      }//end of else if statement
  }



  function renderSeaLife(seaLifeContainer, creature) {

    const seaCard = document.createElement("div")
    seaCard.className = "seaLife-card"
    const seaFrame = document.createElement("div")
    seaFrame.className = "seaLife-frame"
    const h1 = document.createElement("h1")
    h1.className = "center-text"
    h1.innerHTML = creature.name
    const image = document.createElement("img")
    image.className= "seaLife-image"
    image.src = creature.image
    image.style.maxWidth = "200 px"
    image.style.maxHeight = "200 px"

    const isMyFavorite = document.createElement("button");
    isMyFavorite.className = "favorite-btn"
    isMyFavorite.innerHTML = textButton(isMyFavorite, creature);
    isMyFavorite.dataset.id = creature.id

    deleteButton = document.createElement("button")
    deleteButton.className = "delete-btn"
    deleteButton.innerHTML = "x"
    deleteButton.dataset.value = "delete"


    seaFrame.append(seaCard)
    seaCard.append(h1, image, isMyFavorite, deleteButton)
    seaLifeContainer.append(seaFrame)
  }

  function renderAllSeaLife(seaLifeContainer, seaLife){
    return seaLife.map(function(creature){
      renderSeaLife(seaLifeContainer, creature);
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


  function oceanDiv(oceanBar, water){
    let oceanDiv = document.createElement("span")
    oceanDiv.dataset.id = water.id
    oceanDiv.classList = "ocean-name";
    oceanDiv.innerHTML = water.name
    const imgOcean = document.createElement("img")
    imgOcean.dataset.id = water.id
    imgOcean.style.maxWidth = "300px"
    imgOcean.style.maxHeight = "90px"
    imgOcean.className= "ocean-image"
    imgOcean.src = water.image
    oceanDiv.append(imgOcean)
    oceanBar.append(oceanDiv);
  }
