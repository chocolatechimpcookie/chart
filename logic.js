


//document.getElementById("start").onclick = function() {runProgram()};
//
//
//
//function runProgram()
//{
//    
//    
//    
//    
//    if (window.File && window.FileReader && window.FileList && window.Blob)
//    {
//        
//    //    Need to grab file, turn into data structure, count words
//        var upload_txt = document.getElementById('input');
//        var status = document.getElementById('status')
//        if (typeof window.FileReader === 'txt')
//        {
//            status.innerHTML="Correct filetype has been uploaded.";
//        }
//        else
//        {
//            status.innerHTML="Incorrect";
//        }
//       
//       
//       
//       
//       
//       
//       
//        
//        
//        
//        
//        
//        
//        
//        
//        
//        
//        
//
//    
//    }
//
//    else
//    {
//        alert("File APIs are not supported on this browser and the application will now halt.")
//    }
//    
//    
//}




//percent algorithm also has to account for 0, division by zero
//percentage correct
//three sets of these are needed

var x_percent = 0;
var y_percent = 0;

if (x_percent > 0)
{
    var x_1 = (x_percent * 139) + 140;
//    right
}

if (x_percent === 0)
{
    var x_1 = 140;
}

else
{
    x_percent = x_percent * -1;
    var x_1 = 140 + (x_percent * 140);
//    left
// Greater the left percentage, the less the number
}

if (y_percent > 0)
{
    var y_1 = 71 - (y_percent * 71);
//    top
// most authoritarian is 0, center is 71
}

if (y_percent === 0)
{
    var y_1 = 71;
    //mid y
}

else
{
    var y_1 = 71 + (y_percent * 69);
//    libertar
//  
}

generate_graphs(x_1, y_1, x_1, y_1, x_1, y_1);


//generate_graphs(0, 0, 0, 0, 0, 0);
//this should be upper left

//generate_graphs(140, 71, 140, 71, 140, 71);
//this should be center

//generate_graphs(280, 141, 280, 141, 280, 141);
//bottom rightmost


//function must take phrase starting letters, total words and corpus list to check and return a percentage
// It has 17 words, 12 start with pi, 5 do not.
// Therefore the outcome must be 70.5%

function calc_percentage(phrase,totl_words,corp)
{
    
}
        
            
function generate_graphs(x1, y1, x2, y2, x3, y3)
{
    var canvas = document.getElementById("graph1");
    var con = canvas.getContext("2d");
    con.fillStyle = "rgba(209, 16, 57, 1)";
    con.fillRect(0,0,145,73);
    //^authleft
    con.fillStyle = "rgba(34, 34, 158, 1)";
    con.fillRect (145, 0, 145, 73);
    //auth right
    con.fillStyle = "rgba(226, 144, 18, 1)";
    con.fillRect (0, 73, 145, 73);
    //lib left
    con.fillStyle = "rgba(12, 149, 108, 1)";
    con.fillRect (145, 73, 145, 73);
    //lib right
    
    con.fillStyle = 'white';
    con.fillRect(x1,y1, 10,5);
    con.fill();


    
    var canvas = document.getElementById("graph2");
    var con = canvas.getContext("2d");
    con.fillStyle = "rgba(209, 16, 57, 1)";
    con.fillRect(0,0,145,73);
    //^authleft
    con.fillStyle = "rgba(34, 34, 158, 1)";
    con.fillRect (145, 0, 145, 73);
    //auth right
    con.fillStyle = "rgba(226, 144, 18, 1)";
    con.fillRect (0, 73, 145, 73);
    //lib left
    con.fillStyle = "rgba(12, 149, 108, 1)";
    con.fillRect (145, 73, 145, 73);
    //lib right
    
    con.fillStyle = 'white';
    con.fillRect(x2,y2, 10,5);
    con.fill();
    

    
    var canvas = document.getElementById("graph3");
    var con = canvas.getContext("2d");
    con.fillStyle = "rgba(209, 16, 57, 1)";
    con.fillRect(0,0,145,73);
    //^authleft
    con.fillStyle = "rgba(34, 34, 158, 1)";
    con.fillRect (145, 0, 145, 73);
    //auth right
    con.fillStyle = "rgba(226, 144, 18, 1)";
    con.fillRect (0, 73, 145, 73);
    //lib left
    con.fillStyle = "rgba(12, 149, 108, 1)";
    con.fillRect (145, 73, 145, 73);
    //lib right
    con.fillStyle = 'white';
    con.fillRect(x3,y3, 10,5);
    con.fill();
    //
            
}