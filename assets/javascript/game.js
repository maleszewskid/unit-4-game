var score = "";
var win = 0;
var loss = 0;
var counter = 0;
var images = ["./assets/images/1.jpg", "./assets/images/2.jpg", "./assets/images/3.jpg", "./assets/images/4.jpg"];

function rScore() {
    score = Math.floor(Math.random() * 102) + 19;
}

function resetGems() {
    for (var i = 0; i < images.length; i++) {
        var Gem = $("<img>");
        Gem.addClass("Gem");
        Gem.attr("src", images[i]);
        Gem.attr("value", (Math.floor(Math.random() * 12) + 1));
        Gem.attr("height", "100");
        $(".Gem-images").append(Gem);
    }
}

function resetCounter() {
    $(".target-number").html(score);
    $(".counter").html("<br><p>Win: " + win + "</p>" + "<p>Loss: " + loss + "</p><br>");
    $(".score").html(counter);
    $(".Gem-images").empty();
}

function totalReset() {
    rScore();
    counter = 0;
    resetCounter();
    resetGems();
}

function clickGem() {

    counter += parseInt($(this).attr("value"));
    $(".score").html(counter);
    if (counter == score) {
        win++;
        alert("WINNER!!!")
        totalReset();
    } else if (counter > score) {
        loss++;
        alert("LOSER!!!")
        totalReset();
    };
};
rScore();
resetCounter();
resetGems();

$(document).on("click", ".Gem", clickGem);