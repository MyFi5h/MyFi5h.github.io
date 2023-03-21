$(document).ready(() => {
    $("#content").html(main);
    $("#home-button").on("click", () => {
        $("#content").html(main);
    });
    $("#about-button").on("click", () => {
        $("#content").html(about);
    });
    $("#coding-button").on("click", () => {
        $("#content").html(coding);
    });
    $("#art-button").on("click", () => {
        $("#content").html(art);
    });
    $("#contact-button").on("click", () => {
        $("#content").html(err404);
    });
});

// Code for the slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* individual page code */
const err404 = `<h1 style="text-align: center">GitHub Pages Does Not Support This</h1>`

const main =
`<h1 style="text-align: center">Welcome to <i>My Name Isn't Mitch</i></h1>
<div class="slideshow-container">

  <div class="mySlides fade">
    <img src="./img/PlaceHolder.jpg" style="width:100%">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <img src="./img/PlaceHolder.jpg" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <img src="./img/PlaceHolder.jpg" style="width:100%">
    <div class="text">Caption Three</div>
  </div>

  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>`;

const about = 
`<div id='about'>
    <h1>About Me</h1>
    <p style="text-indent: 1em">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Cursus metus aliquam eleifend mi in nulla. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Diam vel quam elementum pulvinar. Rhoncus dolor purus non enim praesent elementum facilisis leo. Laoreet non curabitur gravida arcu ac tortor dignissim. Sit amet massa vitae tortor condimentum lacinia quis. Quam id leo in vitae turpis massa sed elementum tempus. Elementum sagittis vitae et leo duis ut diam quam. Ut tristique et egestas quis. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Nulla facilisi cras fermentum odio eu.
    </p>
    <p style="text-indent: 1em">
    Quisque id diam vel quam elementum pulvinar. Proin nibh nisl condimentum id venenatis a condimentum. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Amet consectetur adipiscing elit ut aliquam. Gravida arcu ac tortor dignissim convallis aenean et tortor. Sit amet volutpat consequat mauris nunc congue. Magnis dis parturient montes nascetur ridiculus mus. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Eget nullam non nisi est sit amet facilisis magna. Pellentesque elit ullamcorper dignissim cras tincidunt. Eu lobortis elementum nibh tellus molestie nunc non blandit. Tincidunt arcu non sodales neque sodales ut. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Sed vulputate odio ut enim blandit volutpat maecenas. Ac ut consequat semper viverra nam libero justo laoreet. Ac tortor dignissim convallis aenean et tortor at. Aenean euismod elementum nisi quis eleifend quam. Arcu dui vivamus arcu felis bibendum ut.
    </p>
    <p style="text-indent: 1em">
    Aliquet enim tortor at auctor urna nunc id cursus metus. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Et netus et malesuada fames ac. Tortor at risus viverra adipiscing. Commodo viverra maecenas accumsan lacus. Et odio pellentesque diam volutpat commodo sed egestas. Venenatis cras sed felis eget. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Et egestas quis ipsum suspendisse. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Auctor elit sed vulputate mi sit amet mauris commodo. Ipsum dolor sit amet consectetur adipiscing elit. Aenean sed adipiscing diam donec adipiscing. Semper viverra nam libero justo laoreet. Est pellentesque elit ullamcorper dignissim cras. Eu mi bibendum neque egestas congue quisque egestas diam in. Vulputate mi sit amet mauris commodo quis. Viverra maecenas accumsan lacus vel facilisis volutpat est. Amet volutpat consequat mauris nunc congue nisi.
    </p>
    <p style="text-indent: 1em">
    Gravida cum sociis natoque penatibus et magnis dis parturient. Sollicitudin ac orci phasellus egestas tellus. Sodales ut etiam sit amet nisl purus in mollis. Sed turpis tincidunt id aliquet risus feugiat in ante. Integer enim neque volutpat ac tincidunt vitae. Cras sed felis eget velit aliquet sagittis id consectetur purus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mi eget mauris pharetra et ultrices neque ornare aenean. Integer eget aliquet nibh praesent tristique magna sit. Pellentesque habitant morbi tristique senectus et netus et. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Adipiscing commodo elit at imperdiet. Quisque egestas diam in arcu cursus euismod quis. Lectus nulla at volutpat diam ut venenatis tellus in metus. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Pulvinar neque laoreet suspendisse interdum consectetur libero id.
    </p>
    <p style="text-indent: 1em">
    In iaculis nunc sed augue lacus. Imperdiet proin fermentum leo vel orci porta non pulvinar. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Id consectetur purus ut faucibus pulvinar elementum. Pulvinar elementum integer enim neque volutpat ac. Diam phasellus vestibulum lorem sed risus ultricies. Accumsan sit amet nulla facilisi. Eu facilisis sed odio morbi quis commodo. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Urna condimentum mattis pellentesque id nibh tortor id aliquet. In tellus integer feugiat scelerisque. Consectetur a erat nam at lectus urna duis. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Turpis in eu mi bibendum neque egestas congue quisque egestas. Vitae tortor condimentum lacinia quis vel eros donec ac. Non sodales neque sodales ut etiam sit amet nisl purus. Urna nunc id cursus metus aliquam eleifend mi. Sed viverra tellus in hac.
    </p>
    <br>
</div>`;

const coding = 
`<div id='coding'>
    <h1>Coding Projects</h1>
    <ul style="font-size: 1.5rem">
        <li>Cacciatori's Redesign - <b>HTML, CSS, & JS</b></li>
    </ul>
    <br>
</div>`;

const art = 
`<h1>Dots & Lines</h1>
<div id="art-grid">
    <div id="box">One</div>
    <div id="box">Day</div>
    <div id="box">These</div>
    <div id="box">Will</div>
    <div id="box">Hold</div>
    <div id="box">Drawings</div>
    <br>
</div>`;

const contact = 
`<h1 style="text-align: center">CONTACT ME</h1>
<div class="formcarry-container">
    <form action="form-process.php" method="POST" class="formcarry-form">
      <label for="name">Your Name</label>
      <input type="text" id="name" name="fullName" required />

      <label for="email">Your Email Address</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Your Message</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>

      <button type="submit">Send</button>
    </form>
    <br>
  </div>`;