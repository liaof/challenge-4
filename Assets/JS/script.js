//2D array containing all answers to all questions
var answerall = [[' 1. A type of coffee bean',' 2. A movie script',' 3. The country',' 4. A programming language'],
                [" 1. 1423"," 2. During WW2"," 3. 1995"," 4. Pollen"],
                [" 1. Sandwiches"," 2. Internal Combustion"," 3. Websites"," 4. Nukes"],
                [" 1. .jpg"," 2. .exe"," 3. .png"," 4. jpg"]];
//array in which we store the spliced answers
var eachanswer = [4];
//array of questions
var questionkey = ["Javascript is a...","Javascript was invented in...","Javascript is a core technology of...","A filename extention for Javascript is..."];
var n = 0;
var score = 0;



$(".card-body").on("click", "button", function(){
    
        
        //var q = $(this).closest(".game-card").find(".question");
       // $(question).html(questionone);
        //change the button to a skip button after the first the it's pressed.
        
        if (n<=3){
        $(this).html("Skip");
        createQuestion(this, n);
        
        
        
        createAnswer(this,n);
       
        }
        if (n==4){
            alert("Your Score is");
        }
        nvalue(this);
       
       
    
});

var nvalue = function(card){
    
    createQuestion(card,n);
    createAnswer(card,n);
    return n++;
    
}

setInterval (function(){
   
},  2000 );

var createQuestion = function(card, n){
    
    var q = $(card).closest(".game-card").find(".question");
    return $(q).html(questionkey[n]); 
};

var createAnswer = function(card, n){
    var a = $(card).closest(".game-card").find(".card-text");
    $(a).html("");
    var alist = $("<ul>").addClass("answer-list");
    $(a).append(alist);
    acurrent = answerall[n];
    for (var i = 0; i<4; i++){
       
        //using slice instead of splice so we don't have to reset our answer array each time the quiz is run
        eachanswer[i]= acurrent.slice(i,i+1)
        var aitem = $("<button>").addClass("list-group-item list-group-item-action").attr("element-value", i).attr("href","#").attr("onclick","checkAnswer();").attr("id", "answerbutton").html(eachanswer[i]);
        $(alist).append(aitem);
    }
}

var checkAnswer = function (){
    
    //get the value of the answer chosen
    var m= event.target.getAttribute("element-value");
    console.log(chosenanswer);
    //check the answers against the questions
    if (n=0 && m){

    }
    
}
var taskButtonHandler = function (event){
    console.log(event.target);
    //event.target reports the element on with the event occurs
    if (event.target.matches(".delete-btn")) {
        var taskId = event.target.getAttribute("data-task-id");
        
    }
    if (event.target.matches(".edit-btn")) {
        var taskId = event.target.getAttribute("data-task-id");
        
        editTask(taskId);
    }
};




$(".answer-list").on("click", "button", function(){
    
    console.log("asd");
});

$(".answer-list button").click( function(){
    
    console.log("Asd");
});
