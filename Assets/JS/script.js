var answerone = "1. 2. 3. 4. 5.";
var answertwo = "1. 2. 3. 4. 5.";
var answerthree = "1. 2. 3. 4. 5.";
var answerfour = "1. 2. 3. 4. 5.";
var answerfive = "1. 2. 3. 4. 5.";
var questionone = "Javascript is a..."

$(".card-body .btn-primary").click (function(){
    console.log("yo");
});

$(".card-body").on("click", "button", function(){
    console.log("oy");
    var question = $(this).closest(".game-card").find(".question");
    $(question).html(questionone);
    console.log(question);
})