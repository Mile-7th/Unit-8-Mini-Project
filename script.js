let dramamovies = ["https://whsat-imagehosting.glitch.me/uploaded/85d559bc3cceb05efd043c92a6346115.jpg", "https://whsat-imagehosting.glitch.me/uploaded/ee850ff3ec8319e958dd8d14e89720ec.jpg"];

let actionmovies = ["https://whsat-imagehosting.glitch.me/uploaded/c89d8e2e912042e43c278c7eff24435f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/d0ee69b99156627ee05c4d91d91b7178.jpg"];

$(".submit-button").click(function() {
    let genreInput = $(".get-suggestions").val();
    $(".shows").empty();
    //Write code for Task Two below this line1
    if (genreInput === "action") {
        for (let action of actionmovies) {
        	$(".shows").append("<img src=" + action + ">");
        }
    }  else if (genreInput === "action") {
        for (let drama of dramamovies) {
            $(".shows").append("<img src=" + drama + ">");
        }
    }
});

$(".submit-button").click(function() {
    let genreInput = $(".get-suggestions").val();
    $(".shows").empty();
    //Write code for Task Three below this line!
});