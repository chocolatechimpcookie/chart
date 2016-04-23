if (window.File && window.FileReader && window.FileList && window.Blob)
{
    
    
    
    
    var canvas = document.getElementById("graph");
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
    con.fillRect(145,73, 10,5);
    con.fill();



}

else
{
    alert("File APIs are not supported on this browser and the application will now halt.")
}



        
            
            
            