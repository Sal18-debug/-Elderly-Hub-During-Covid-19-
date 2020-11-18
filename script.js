function showdemo(e) {
  e.preventDefault();

  if ($("#search").val() == "") {
      let element = document.getElementById("warning");
      element.classList.remove("hidden");
  } else {

      let element = document.getElementById("hidden-content");
      element.classList.remove("hidden");

      let ele = document.getElementById("my-form");
      ele.reset();


      setTimeout(
                  function () {
                      var element = document.getElementById("hidden-content");

                      element.scrollIntoView({ behavior: "smooth" });

                      let element1 = document.getElementById("warning");
                      element1.classList.add("hidden");
                  }
                  , 300);

  }
}
function checkoutshow(e) {
  e.preventDefault();

  let element = document.getElementById("hidden-content");
      element.classList.remove("hidden");


      setTimeout(
                  function () {
                      var element = document.getElementById("hidden-content");

                      element.scrollIntoView({ behavior: "smooth" });
                  }
                  , 300);

}