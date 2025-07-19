  
        //    Whatsapp 

function sendMessage(){
    let phonenumber ="919884289591";
    let message="Hello sir";
    let encodeMessage = encodeURIComponent(message);
    let url ="https://wa.me/"+phonenumber+"?text="+encodeMessage;
    window.open(url,'blank');
}


const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");

const all = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

setInterval(() => {
    // Step 1: Fade out all
    all.forEach(img => img.style.opacity = 0.5);

    // Step 2: Wait 500ms then swap
    setTimeout(() => {
        let temp = img1.src;
        img1.src = img2.src;
        img2.src = img3.src;
        img3.src = img4.src;
        img4.src = img5.src;
        img5.src = img6.src;
        img6.src = img7.src;
        img7.src = img8.src;
        img8.src = img9.src;
        img9.src = img10.src;
        img10.src = temp;

        // Step 3: Fade back in
        all.forEach(img => img.style.opacity = 1);
    }, 500); // Match with CSS transition time
}, 3000);

const img11 = document.getElementById("img11");
const img12 = document.getElementById("img12");
const img13 = document.getElementById("img13");
const img14 = document.getElementById("img14");
const img15 = document.getElementById("img15");
const img16 = document.getElementById("img16");
const img17 = document.getElementById("img17");
const img18 = document.getElementById("img18");
const img19 = document.getElementById("img19");
const img20 = document.getElementById("img20");

const all2 = [img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

setInterval(() => {
    // Step 1: Fade out all
    all2.forEach(img => img.style.opacity = 0.5);

    // Step 2: Wait 500ms then swap
    setTimeout(() => {
        let temp = img20.src;
        img20.src = img19.src;
        img19.src = img18.src;
        img18.src = img17.src;
        img17.src = img16.src;
        img16.src = img15.src;
        img15.src = img14.src;
        img14.src = img13.src;
        img13.src = img12.src;
        img12.src = img11.src;
        img11.src = temp;


        // Step 3: Fade back in
        all2.forEach(img => img.style.opacity = 1);
    }, 500);

}, 3000);

let check = true;
let showspan = (val) => {
    if (check) {
        let spantag = document.querySelector(`.blogbox${val} p span`);
        spantag.style = "display:block;"
        document.getElementById(val).innerText = "less";
        check = !check;
    }
    else {
        let spantag = document.querySelector(`.blogbox${val} p span`);
        spantag.style = "display:none;"
        document.getElementById(val).innerText = "Read More";
        check=!check;
    }
}
// console.log(spantag.innerHTML);


        //    Counter 

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter1');


  const animate = () => {
     let speed = 10000000; 
    const target = +counter.dataset.target;
    const time = target / speed;
    const duration = 200;
    const stepTime = 1;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter2');


  const animate = () => {
     const speed = 10000; 
    const target = +counter.dataset.target;
    const time = target / speed;
    const duration = 2000;
    const stepTime = 50;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter3');


  const animate = () => {
     var speed = 2000; 
    const target = +counter.dataset.target;
    const time = target / speed;
    const duration = 2000;
    const stepTime = 50;
    const step = Math.ceil(target / (duration / stepTime));
    let current = 0;

    const update = () => {
      current += step;
      counter.textContent = current < target ? current : target;
      if (current < target) setTimeout(update, stepTime);
    };
    update();
  };

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animate();
      obs.disconnect();
    }
  });

  obs.observe(counter);
});
