  //title Change using dom

  document.title = 'Appiness';


  //Heading Change using DOM
  var headd = document.getElementById('tst');

  headd.textContent = 'Testimonials'

  //changing innerhtml
  var heading__for = document.querySelector('.heading__for')
  heading__for.innerHTML = '<h3>Testimonials</h3>'


  //playing with parent node

  var items = document.querySelector('.section__main2');


  //footer

  document.querySelector(".adult ").style.fontsize = '30px'

  //button event
  document.getElementById("myBtn").onclick = alertGame;

  function alertGame() {
      alert('hello')
  }

  var x = document.getElementById("myBtn");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("click", mySecondFunction);
  x.addEventListener("mouseout", myThirdFunction);

  function myFunction() {
      console.log("Moused over")

  }

  function mySecondFunction() {
      console.log("Moused out")
  }

  function myThirdFunction() {
      console.log('Mouse clicked')
  }

  let y = document.getElementById("book");
  y.addEventListener = () => {
      document.getElementsByClassName("icons").style.display = "none";
  }