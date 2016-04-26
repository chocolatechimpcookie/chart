


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





//x left- right+
//y lib - top +

generate_graphs(
                gen_x(0.7), gen_y(0.7),
                gen_x(1), gen_y(1),
                gen_x(0.5), gen_y(0.5)
                );





//function must take phrase starting letters, total words and corpus list to check and return a percentage
// It has 17 words, 12 start with pi, 5 do not.
// Therefore the outcome must be 70.5%

function calc_percentage(phrase,totl_words,corp)
{
    
}
        
        
function gen_x(x_percent)
{

    if (x_percent === 0)
    {
        var x = 140;
    }
    
    else if (x_percent > 0)
    {
        var x = (x_percent * 140) + 140;
    //    right
    }
    
    else
    {
        var x = 140 + (x_percent * 140);
    //    left
    // from negative # to 139-0, 0 is most left
    // 
    }
    
    return x;    
}


function gen_y(y_percent)
{
    
    if (y_percent === 0)
    {
        var y = 71;
        //mid y
    }
    
    else if (y_percent > 0)
    {
        var y = 71 - (y_percent * 71);
    //    top
    // most authoritarian is 0, center is 71
    }
    

    else
    {
        var y = 71 - (y_percent * 70);
    //    libertar
    //  negative number to 72-141, subtracting by negative,higher numbers == more lib

    }
    return y;
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



    //var canvas = document.getElementById("graph1");
    //var con = canvas.getContext("2d");
    //con.fillStyle = "rgba(209, 16, 57, 1)";
    //con.fillRect(0,0,145,73);
    ////^authleft
    //con.fillStyle = "rgba(34, 34, 158, 1)";
    //con.fillRect (145, 0, 145, 73);
    ////auth right
    //con.fillStyle = "rgba(226, 144, 18, 1)";
    //con.fillRect (0, 73, 145, 73);
    ////lib left
    //con.fillStyle = "rgba(12, 149, 108, 1)";
    //con.fillRect (145, 73, 145, 73);
    ////lib right
    //con.fillStyle = 'white';
    //con.fillRect(0,0, 10,5);
    //con.fill();

