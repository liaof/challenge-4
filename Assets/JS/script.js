//2D array containing all answers to all questions
var answerall = [[' 1. A type of coffee bean',' 2. A movie script',' 3. The country',' 4. A programming language'],
                [" 1. 1423"," 2. During WW2"," 3. 1995"," 4. Pollen"],
                [" 1. Sandwiches"," 2. Internal Combustion"," 3. Websites"," 4. Nukes"],
                [" 1. .jpg"," 2. .exe"," 3. .png"," 4. .js"]];
//array in which we store the spliced answers
var eachanswer = [4];
//array of questions
var questionkey = ["Javascript is a...","Javascript was invented in...","Javascript is a core technology of...","A filename extention for Javascript is..."];
//first dimension of the answerall 2d array
var n = 0;
var score = 0;
//player index, for the scoreboard
var player = 0;
var savescore;
var timer = 75;
var playername;
var leadername=[];
var leaderscore=[];
var leaderindex = 0;
myStorage = window.localStorage;



$(".card-body").on("click", "button", function(){
        console
        
        //var q = $(this).closest(".game-card").find(".question");
       // $(question).html(questionone);
        if (n==0){
        setInterval (function(){
            if(timer>0){
                timer--;
                var t = $("#time-left");
                $(t).html(timer);
         
            }
            else{
                $(".question").html("You have Run out of Time");
                //when the time is out, disable the gamespace
                $(".game-card").html("GAME OVER");
                
            }
         },  1000 );
        }
        //when there are still questions left
        
        if (n<4){
            //change the button to a skip button after the first the it's pressed.
            //$(this).html("Skip");
            createQuestion(this, n);
            createAnswer(this,n);
            $(this).remove();
       
        }
        //upon completion of the questions
        else if (n==4){
            playername = prompt("Your Score is "+score+"! Enter your Name to save your score");
            clearInterval(myInt);
            if (playername){
                //save name and score into an array
                leadername[leaderindex]=playername;
                leaderscore[leaderindex]=score;
                window.localStorage.setItem("names",JSON.stringify(leadername));
                window.localStorage.setItem("scores", JSON.stringify(leaderscore));
                leaderindex++;
                clearInterval(myInt);
            }
            else {clearInterval(myInt)}
            n==0;
            clearInterval(myInt);
        }
        
        
       
    
});

var nvalue = function(card){
    
    createQuestion(card,n);
    createAnswer(card,n);
    
    
}



var createQuestion = function(card, n){
    
    var q = $(card).closest(".game-card").find(".question");
    return $(q).html(questionkey[n]); 
};

var createAnswer = function(card, n){
    var a = $(card).closest(".game-card").find(".card-text");
    $(a).html("");
    var alist = $("<ul>").addClass("answer-list  pl-0");
    $(a).append(alist);
    acurrent = answerall[n];
    for (var i = 0; i<4; i++){
       
        //using slice instead of splice so we don't have to reset our answer array each time the quiz is run
        eachanswer[i]= acurrent.slice(i,i+1)
        var aitem = $("<button>").addClass("list-group-item list-group-item-action w-100 rounded-pill").attr("element-value", i).attr("href","#").attr("onclick","checkAnswer();").html(eachanswer[i]);
        $(alist).append(aitem);
    }
}

var checkAnswer = function (){
    
    //get the value of the answer chosen
    var m= event.target.getAttribute("element-value");
    console.log(m);
    console.log(n);
    //check the answers against the questions
    if (n==0 && m==3){
        score++;
        $("#status").html("Correct");
    }
    else if (n==1 && m==2){
        score++;
        $("#status").html("Correct");
    }
    else if (n==2 && m==2){
        score++;
        $("#status").html("Correct");
    }
    else if (n==3 && m==3){
        score++;
        $("#status").html("Correct");
    }
    //if we get the wrong answer, 5 seconds are deducted 
    else{score=score; timer=timer-5; $("#status").html("Incorrect");}
    
    n++;
    
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

$("#top-score").click( function(){
    var namez = localStorage.getItem(leadername);
    console.log(namez);
})




$(".answer-list").on("click", "button", function(){
    
    console.log("asd");
});

$(".answer-list button").click( function(){
    
    console.log("Asd");
});
