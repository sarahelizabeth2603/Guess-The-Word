player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1Score = 0;
player2Score = 0;

document.getElementById("player1_name").innerHTML = player1_name +" : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("Player1_score").innerHTML = player1Score;
document.getElementById("Player2_score").innerHTML = player2Score;

document.getElementById("Player_question").innerHTML = player1_name;
document.getElementById("Player_answer").innerHTML = player2_name;


function Send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("Word in lower case  = " + word);

    Char1 = word.charAt(1);
    console.log(Char1);

    length_divided_by2 = Math.floor(word.length/2);
    Char2 = word.charAt(length_divided_by2);
    console.log(Char2);

    length_minus1 = word.length -1;
    Char3 = word.charAt(length_minus1);
    console.log(Char3);

    remove_Char1 = word.replace(Char1,"_");
    remove_Char2 = remove_Char1.replace(Char2,"_");
    remove_Char3 = remove_Char2.replace(Char3,"_");
    console.log(remove_Char3);

    question_word = "<h4>Q . "+remove_Char3+"</h4>";
    input_box = "<br> Answer : <input id='Entered_answer' type='text'>";
    check_button = "<br><br><button class='btn btn-info' onclick ='check()'>Check</button>";
    row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("Entered_answer").value;
    answer = get_answer.toLowerCase();
    console.log("Answer in lower case = " + answer);

    if(answer == word){

        if(answer_turn == "player1"){
            player1Score = player1Score +1;
            document.getElementById("Player1_score").innerHTML = player1Score;

        }
        else{
            player2Score = player2Score +1;
            document.getElementById("Player2_score").innerHTML = player2Score;
        }
    }

    if(question_turn == "player1"){

        question_turn = "player2";
        document.getElementById("Player_question").innerHTML = player2_name;


    }
    else{
        question_turn = "player1";
        document.getElementById("Player_question").innerHTML = player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("Player_answer").innerHTML = player2_name;
    
    }
    else{
        answer_turn = "player1";
        document.getElementById("Player_answer").innerHTML = player1_name;
    }

    document.getElementById("output").innerHTML = "";

}
