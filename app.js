



let btn = document.querySelector("#button");
btn.addEventListener("click", () => {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let yellow = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${yellow})`;
     let h2 =  document.querySelector("#h2");
     let div = document.querySelector(".colorbox");
      h2.innerText = color;
      div.style.backgroundColor = color;
    //   h2.style.color = color;
});



let butn = document.querySelector("#lightbtn");
butn.addEventListener("click", () => {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let yellow = Math.floor(Math.random()*255);
    // let opacity = 0.5;
    let ncolor = `rgba(${red},${green},${yellow},${0.4})`;
     let h2 =  document.querySelector("#lighth2");
     let div = document.querySelector("#lightdiv");
      h2.innerText = ncolor;
      div.style.backgroundColor = ncolor;
    //   h2.style.color = color;
});



