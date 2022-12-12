const slider = document.querySelectorAll(".slide");
const skilTran = document.querySelector(".skil-tran");
const sections = document.querySelector(".asd");
const progressSpan = document.querySelector(".progress-span");
const phoneImg = document.querySelectorAll(".phone-img");

const skills = document.querySelector(".skills");
const design = document.getElementById("design");
const photography = document.getElementById("photography");
const marking = document.getElementById("marking");
const photoshop = document.getElementById("photoshop");

const recomenUser = document.querySelectorAll(".recomen-user");
const rcnBulet = document.querySelectorAll(".rcn-bulet");
const navLi = document.querySelectorAll(".nav-li");
const navA = document.querySelectorAll(".nav-a");
const idWork = document.querySelector("#idWork");
const idMockup = document.querySelector("#idMockup");
const idPsd = document.querySelector("#idPsd");
const idLOgo = document.querySelector("#idLOgo");
const idPresen = document.querySelector("#idPresen");
const idIcon = document.querySelector("#idIcon");
const navbarInfo = document.querySelectorAll(".navbar-info");
const navbarImg = document.querySelectorAll(".navbar-img");
const formulaO = document.querySelector(".f1");
const forImg2 = document.querySelector(".f2");
const idWorkImg = document.querySelector("#idWork-img");
const formMain = document.querySelector("#form-main");

const userName = document.querySelector("#username");
const emailId = document.querySelector("#emailid");
const webSite = document.querySelector("#website");
const textAreaId = document.querySelector("#textareaid");

const modal = document.querySelector("#sign-in-model");
const closeModalBtn = document.querySelector(".modal-close");

function navbarFun() {
  navLi.forEach((el, index) => {
    console.log(el);
  });
}

let activeIndex = 0;

function activeIndecFun() {
  slider.forEach((slide, index) => {
    if (activeIndex === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  // console.log("next slide");

  if (activeIndex === slider.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }

  activeIndecFun();
}
activeIndecFun();

function startAutoSlidingFn() {
  sliderIntervalId = setInterval(nextSlide, 5000);
}

function initSlider() {
  activeIndecFun();
  startAutoSlidingFn();
}
initSlider();

// section 2

window.addEventListener("scroll", () => {
  if (skills.getBoundingClientRect().top <= 500) {
    design.style.width = 80 + "%";
    photography.style.width = 50 + "%";
    marking.style.width = 65 + "%";
    photoshop.style.width = 30 + "%";
  }
});

let activeIn = 0;

function activeUser() {
  recomenUser.forEach((elem, index) => {
    if (activeIn === index) {
      elem.classList.add("appear");
    } else {
      elem.classList.remove("appear");
    }
  });
}

function nextBulet() {
  rcnBulet.forEach((el, index) => {
    el.addEventListener("click", () => {
      console.log(11111);
      activeIn = index;

      activeUser(rcnBulet);
    });
  });
}

function recomenNextUser() {
  activeUser();
  nextBulet();
}
recomenNextUser();

// 6 seqciaaaa xelovnebis nimushi:)

navLi.forEach((el) =>
  el.addEventListener("click", (e) => {
    let pressedItemID = e.target.getAttribute("id");
    if (pressedItemID != "idAll") {
      showReferenceImage(pressedItemID);
    } else {
      showAllImages();
    }
  })
);

function showReferenceImage(itemID) {
  let activeImage = itemID + "-img";
  //console.log(activeImage);

  navbarInfo.forEach((el) => {
    let x = el.getAttribute("id");
    console.log(x);
    if (activeImage != x) {
      el.classList.add("opaci");
    } else {
      el.classList.remove("opaci");
    }
  });
}

function showAllImages() {
  navbarInfo.forEach((el) => {
    el.classList.remove("opaci");
  });
}

// form sect

const sendMessage = "https://borjomi.loremipsum.ge/api/send-message";

formMain.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNameValue = userName.value;
  const useremailValue = emailId.value;
  const userWebSiteValue = webSite.value;
  const userTextAreaIdValue = textAreaId.value;

  const user = {
    name: userNameValue,
    email: useremailValue,
    website: userWebSiteValue,
    message: userTextAreaIdValue,
  };
  console.log(user);

  sendNewData(user);
});

function sendNewData(userInfo) {
  fetch(sendMessage, {
    method: "POST",
    headers: { "COntent-Type": "append;ocation/json" },
    body: JSON.stringify(userInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showMOdel();
      formMain.reset();
      // console.log(111);
    })
    .catch((err) => {
      console.log(err);
    });
}
function showMOdel() {
  modal.classList.add("open");
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}
