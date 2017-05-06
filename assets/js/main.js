var CORRECT = "correct",
    WRONG = "wrong",
    CONTENT = "content";

$correct = $("#correct");
$wrong = $("#wrong");
$content = $("#content");
var show = function showCorrect(element){
  switch(element){
    case CORRECT:
        if($correct.css("display") === "none"){
          $content.css("display", "none");
          $wrong.css("display", "none");
          $correct.css("display", "block");
        }
        else{
          $correct.css("display", "none");
          $wrong.css("display", "none");
          $content.css("display", "block");
        }
        break;
    case WRONG:
        if($wrong.css("display") === "none"){
          $content.css("display", "none");
          $correct.css("display", "none");
          $wrong.css("display", "block");
        }
        else{
          $wrong.css("display", "none");
          $correct.css("display", "none");
          $content.css("display", "block");
        }
        break;
    case CONTENT:
        if($content.css("display") === "none"){
          $correct.css("display", "none");
          $wrong.css("display", "none");
          $content.css("display", "block");
        }
        break;
    default:
        break;
  }
  
};
