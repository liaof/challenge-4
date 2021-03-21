var answerall = [[' 1. A type of coffee bean',' 2. A movie script',' 3. The country',' 4. A programming language'],
                [" 1. "," 2. "," 3. "," 4. "],
                [" 1. "," 2. "," 3. "," 4. "],
                [" 1. "," 2. "," 3. "," 4. "]];

var questionone = "Javascript is a..."

$(".card-body .btn-primary").click (function(){
    console.log("yo");
});

$(".card-body").on("click", "button", function(){
    var eachanswer = [5];
    console.log("oy");
    var question = $(this).closest(".game-card").find(".question");
    $(question).html(questionone);
    var answers = $(this).closest(".game-card").find(".card-text");
    $(answers).html("");
    var answerslist = $("<ul>").addClass("answer-list");
    $(answers).append(answerslist);
    var answercurrent = answerall[0];
    console.log (answercurrent);
    for (var i = 0; i<4; i++){
       
        //using slice instead of splice so we don't have to reset our answer array each time the quiz is run
        eachanswer[i]= answercurrent.slice(i,i+1)
        var answeritem = $("<a>").addClass("list-group-item list-group-item-action").attr("element-value", i).html(eachanswer[i]);
        
        $(answerslist).append(answeritem);

    }
})

$(".answer-list").on("click", "list-group-item-action", function(){
    
    console.log(i);
});

$(".answer-list .list-group-item-action").click( function(){
    
    console.log(i);
});
