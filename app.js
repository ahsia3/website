/*
Logo ANIMATION
*/
document.addEventListener(
  "DOMContentLoaded",
  () => {
    function animateSgv(id, delay, delayIncrement) {
      const logo = document.getElementById(id);
      const logoPaths = document.querySelectorAll(`#${id} path`);
      const random = Math.random();

      for (let i = 0; i < logoPaths.length; i++) {
        delay = random;
        //console.log(logoPaths[i].getTotalLength());
        logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
        logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
        logoPaths[
          i
        ].style.animation = `line-anim 2s ease forwards ${delay}s, bigger 1s  ease infinite alternate-reverse`;

        delay += random;
      }

      logo.style.animation = `fill 3s ease forwards ${delay}s`;
    }

    animateSgv("logo", 0, 0.3);
  },
  false
);

const logo_con = document.querySelector(".logo-container");
document.addEventListener("scroll", (e) => {
  var opacity = (logo_con.offsetHeight - scrollY) / logo_con.offsetHeight;
  var scale = (logo_con.offsetHeight - scrollY) / logo_con.offsetHeight;
  let moveY = (scrollY / logo_con.scrollHeight) * 1000;
  let anim_right = (scrollY / logo_con.scrollHeight) * 100 * 1.15;
  logo_con.style.setProperty("--headerOpacity", opacity);
  logo_con.style.setProperty("--headerScale", scale);
  const logo = document.querySelector("#logo");
  const logo_h1 = document.querySelector(".logo-container h1");

  logo.style.transform = `translate(-50%, -50%)  scale(${scale})  translateY(-${moveY}px)`;
  logo_h1.style.transform = `translate(-50%, -5%) scale(${scale}) translateY(-${moveY}px)`;

  if (anim_right < 70) {
    logo_h1.style.backgroundPosition = `-${anim_right}%`;
  }
});

/*
MODAL PAGE
*/
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const previewsEsports = document.querySelectorAll(".gallery-esports img");

previewsEsports.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    document.body.style.overflow = "hidden";
    //Dynamic change text and image
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./images/${originalSrc}`;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    document.body.style.overflow = "hidden";
    //Dynamic change text and image
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./images/${originalSrc}`;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  modal.classList.remove("open");
  original.classList.remove("open");
  document.body.style.overflow = "visible";
});

function bgChanger() {
  if (this.scrollY > this.innerHeight / 1.5) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
}

window.addEventListener("scroll", bgChanger);

/*
INTERSECTION OBSERVER
*/
const options = {
  threshold: 0.3,
};

let observer = new IntersectionObserver(navCheck, { threshold: 0.1 });

const full_page = document.querySelector(".fullpage-container");
function navCheck(entries) {
  entries.forEach((entry) => {
    const class_name = entry.target.className;
    const select = document.querySelector(`.${class_name}`);
    // console.log(class_name);
    if (entry.isIntersecting) {
      select.style.transition = "opacity 0.5s ease-in";
      select.style.opacity = "1";

      full_page.style.transition = "opacity 0.5s ease-in";
      full_page.style.opacity = "1";
    } else {
      select.style.transition = "opacity 1s ease-out";
      select.style.opacity = "0";

      full_page.style.transition = "opacity 0.5s ease-in";
      full_page.style.opacity = "0";
    }
  });
}

function movingY(entries) {
  entries.forEach((entry) => {
    const class_name = entry.target.className;
    const select = document.querySelector(`.${class_name}`);
    //  console.log(class_name);
    if (entry.isIntersecting) {
      select.style.transition = "transform 0.5s ease-in";
      select.style.transform = "translateY(0px)";
    } else {
      select.style.transition = "transform 1s ease-out";
      select.style.transform = "translateY(-100px)";
    }
  });
}

function movingX(entries) {
  entries.forEach((entry) => {
    const class_name = entry.target.className;
    const select = document.querySelector(`.${class_name}`);
    //  console.log(class_name);
    if (entry.isIntersecting) {
      select.style.transition = "transform 0.5s ease-in";
      select.style.transform = "translateX(0px)";
    } else {
      select.style.transition = "transform 1s ease-out";
      select.style.transform = "translateX(100px)";
    }
  });
}
/*sections.forEach((section) => {
  observer.observe(section);
});
*/
const section_full = document.querySelector(".middle-index");
section_full.style.opacity = "0";
observer.observe(section_full);

const simpleCon = document.querySelector(".simple-container");
let simpleObserver = new IntersectionObserver(fade, { threshold: 0 });
simpleObserver.observe(simpleCon);

function fade(entries) {
  entries.forEach((entry) => {
    const class_name = entry.target.className;
    const select = document.querySelector(`.${class_name}`);
    //  console.log(class_name);
    if (entry.isIntersecting) {
      select.style.transition = "all 1s ease-in";
      select.style.opacity = "1";
    } else {
      select.style.transition = "all 1s ease-out";
      select.style.opacity = "0";
    }
  });
}

/*
BUTTON GROUP FOR PROJECT
*/

function smoothScroll(elementId) {
  elementId.scrollIntoView({
    behavior: "smooth",
  });
}
