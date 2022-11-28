const cardAray = getArrayFromFirebase("Card");
const Card = document.querySelector(".card");

setTimeout(() => {
    cardAray.forEach((element) => {
    Card.innerHTML += `
    <div class="card">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src="${element.data.imgSrc}"
            alt="Avatar"
          />
        </div>
        <div class="flip-card-back">
          <div class="title">
            <h1>${element.data.Name}</h1>
          </div>
          <div class="text">
            <p>
            ${element.data.text}            
            </p>
          </div>
          <div class="contact">
            <p>
              <i class="fa-brands fa-wikipedia-w"></i>
             ${element.data.veblocation}
            </p>
            <p>
              <i class="fa-solid fa-location-pin three"></i>
              Location:${element.data.Location}
            </p>
            <p><i class="fa-solid fa-clock"></i>${element.data.uploadTime} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
    } )
},3000)