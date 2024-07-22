let sliders = document.querySelectorAll('input[type="range"]');
let colors = document.querySelectorAll('input[type="color"]');
let output = document.getElementById("css-code");
let btnCopy = document.getElementById("copy");

sliders.forEach((slider) => {
  slider.addEventListener("input", createBox);
});

colors.forEach((color) => {
  color.addEventListener("change", createBox);
});

btnCopy.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
  alert("Code Copied");
});

function createBox() {
  let X = sliders[0].value;
  let Y = sliders[1].value;
  let blurRadius = sliders[2].value;
  let spreadRadius = sliders[3].value;

  let shadowcolor = colors[0].value;
  let boxShadow = `${X}px ${Y}px ${blurRadius}px ${spreadRadius}px`;

  document.getElementById(
    "box"
  ).style.cssText = `box-shadow: ${boxShadow} ${shadowcolor}`;
  output.value = `box-shadow: ${boxShadow}`;
}

createBox();..
....................
............
///////////////
................
9000
546
////////////
;;;;;;;;;;;
'''''''''''''
/////////////
/////////////
///////////////
/////////////
/////////////
/////////////
///////
  </div>
        <!--end of single store item-->
        <!-- single item -->
        <div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item doughnuts" data-item="dougnuts">
          <div class="card ">
            <div class="img-container">
              <img src="img/doughnut-1.jpeg" class="card-img-top store-img" alt="">
              <span class="store-item-icon">
                <i class="fas fa-shopping-cart"></i>
              </span>
            </div>
            <div class="card-body">
              <div class="card-text d-flex justify-content-between text-capitalize">
                <h5 id="store-item-name">dougnut item</h5>
                <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">5</strong></h5>

              </div>
            </div>
