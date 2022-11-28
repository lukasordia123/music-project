let Name = document.querySelector(".inputone");
let LOcation = document.querySelector(".inputtwo");
let veblocation = document.querySelector(".inputthree");
let text = document.querySelector(".inputfour");
let image = document.querySelector(".inputfive");
let BTN = document.querySelector(".Btn");

BTN.addEventListener("click",() => {
    let Namevalue = Name.value;
    let LOcationvalue = LOcation.value;
    let veblocationvalue = veblocation.value;
    let textvalue = text.value;
    if(Namevalue== "" || LOcationvalue == "" || veblocationvalue== "" ||textvalue == ""){
        return;
    }
    let imgSrc = "";
  try {
    const reader = new FileReader();
    reader.readAsDataURL(image.files[0]);
    reader.onload = () => {
      imgSrc = reader.result;
      addElementInFirebase("Card/", {
        Name : Namevalue,
        Location: LOcationvalue,
        veblocation:veblocationvalue,
        text : textvalue,
        imgSrc: imgSrc,
        uploadTime: new Date().toLocaleString(),
      });
    };
  } catch (err) {
    imgSrc =
      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
    addElementInFirebase("Card/", {
        Name : Namevalue,
        Location: LOcationvalue,
        veblocation:veblocationvalue,
        text : textvalue,
        imgSrc: imgSrc,
        uploadTime: new Date().toLocaleString(),
    });
  }
  displayAlert("წარმატებული ოპერაცია", "პოსტი წარმატებით დაემატა", "success");
  Name.value = "";
  setTimeout(() => {
    location.href = "index.html";
  }, 1500);
} )
