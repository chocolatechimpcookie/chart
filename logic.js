document.getElementById("start").onclick = function() {runProgram();};

function runProgram()
{
    
    
    
    
    if (window.File && window.FileReader && window.FileList && window.Blob)
    {
        
        var upload_txt = document.getElementById('input');
        var read = new FileReader();
        var new_string = read.readAsText(upload_txt.files[0]);
        
        read.onload = function(e)
        {
            new_string = e.target.result;
            comparisons(new_string);
			
			
			            
//            test, remember to comment out comparisons
            //generate_graphs(
            //    gen_x(0.5), gen_y(0.5),
            //    gen_x(-0.5), gen_y(0.5),
            //    gen_x(1), gen_y(1)
            //    );

        };
        
    }

    else
    {
        alert("This browser does not support this app, please try a different one.");
    }
    
    
}


function comparisons(corpus)
{
    //console.log(corpus);
    var total_words = /\s+/gi;
    total_words = corpus.trim().replace(total_words, ' ').split(' ').length;
    // the reg ex looks for all the white space
    //    .trim() takes out all excess white space (not regular spaces),
    //replace() parameter whitespaces with parameter two
    //split takes all the white spaces and turns it into a string with ""
    //length is the size of the string
    console.log("Word count " + total_words);
    //console.log(calc_percentage("starch", total_words, corpus));
    
    var quad_total_cond = 0;
    var quad_x = 0;
    var quad_y = 0;
    
    //^ variables for quadrant conditions
    var x_econ_cond= 0;
    var y_auth_cond = 0;
    var total_x_cond = 0;
    var total_y_cond = 0;
    var axis_total_cond = 0;
    //axis aconditions
    

    
//    if (calc_percentage("pizza", total_words, corpus) > 1.703037) 
//	{
//		quad_total_cond++;
//		quad_x--;
//		quad_y--;
//	}
//    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);
//    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    

    
    if (calc_percentage("fed", total_words, corpus) <= 1.703037) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
    

	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("governm", total_words, corpus) <= 0.571843) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("spen", total_words, corpus) <= 0.50991) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("spen", total_words, corpus) > 0.50991) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x-1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("environm", total_words, corpus) > 0.204987) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	

	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("bad", total_words, corpus) > 0.244377) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("born", total_words, corpus) > 0.417647) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("rac", total_words, corpus) > 0.361492) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("clean", total_words, corpus) > 0.184437) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("lot", total_words, corpus) > 0.809956) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("quit", total_words, corpus) > 0.28268) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("growth", total_words, corpus) > 1.703719) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("dol", total_words, corpus) > 0.172751) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("gu", total_words, corpus) > 0.509629) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("enorm", total_words, corpus) > 0.425139) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("itl", total_words, corpus) > 0.788765) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("prayer", total_words, corpus) > 0.372178) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("tr", total_words, corpus) > 0.269453) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("enterpr", total_words, corpus) > 0.804586) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("reason", total_words, corpus) > 0.598165) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("girl", total_words, corpus) > 0.257647) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("smart", total_words, corpus) > 0.228455) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("apolog", total_words, corpus) > 0.590565) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("dynam", total_words, corpus) > 0.504058) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("middl", total_words, corpus) > 0.829508) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("democr", total_words, corpus) > 0.129739) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("bl", total_words, corpus) > 0.997438) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("florid", total_words, corpus) > 0.426403) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("allow", total_words, corpus) > 0.229542) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("obamacar", total_words, corpus) > 0.656365) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("dad", total_words, corpus) > 0.212081) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("er", total_words, corpus) > 0.225399) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("human", total_words, corpus) > 0.09691) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("chanc", total_words, corpus) > 0.464182) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("innov", total_words, corpus) > 0.256173) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("faith", total_words, corpus) > 0.204603) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("worker", total_words, corpus) > 0.181359) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("energ", total_words, corpus) > 0.2481) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("god", total_words, corpus) > 0.133486) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("mad", total_words, corpus) > 0.171552) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("maryland", total_words, corpus) > 0) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x-1;
		quad_y=quad_y+1; 
	}
	
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("clean", total_words, corpus) > 1.273548) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x-1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("warm", total_words, corpus) > 0.624291) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x-1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("warm", total_words, corpus) <= 0.624291) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y-1;
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("stronger", total_words, corpus) > 1.598825) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x-1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("1990", total_words, corpus) > 0.165737) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x-1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("renew", total_words, corpus) > 1.144967) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x-1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("dynam", total_words, corpus) > 0.504058) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("clean", total_words, corpus) > 1.315122) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x-1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("florid", total_words, corpus) > 0.828234) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("faith", total_words, corpus) > 1.070745) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y+1; 
	}
	
	
	
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("marijuan", total_words, corpus) > 1.031098) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y-1;
	}
	
	
	
    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);    
    if (calc_percentage("reserv", total_words, corpus) > 1.609765) 
	{
		quad_total_cond = quad_total_cond + 1;
		quad_x = quad_x+1;
		quad_y=quad_y-1;
	}

    

    
    
    
    
    	// axis_total_cond = all the conditions overall in the axis graph,
		//each time there is a condition +1, for normalization. for graph Axis B
	// x_econ_cond and y_auth are for the positions themselves,
		//this determines the position on x and y axis, both graphs share this variable
	// total_x_cond is for normalization as well, but it normalizes by a specific axis
		//for graph Axis B
	
	
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("fuel", total_words, corpus) <= 0.753099)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("glob", total_words, corpus) <= 0.122952)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("publ", total_words, corpus) <= 0.336472)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("democr", total_words, corpus) <= 0.131396)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("wal", total_words, corpus) <= 0.21543)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("health", total_words, corpus) <= 0.279524)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("long", total_words, corpus) <= 0.133316)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("unit", total_words, corpus) <= 0.100087)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("unit", total_words, corpus) > 0.100087)
	{
		x_econ_cond = x_econ_cond-1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond +1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("except", total_words, corpus) > 0.685163)
	{
		x_econ_cond = x_econ_cond-1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond +1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("long", total_words, corpus) > 0.665871)
	{
		x_econ_cond = x_econ_cond-1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond +1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("not", total_words, corpus) > 0.806223)
	{
		x_econ_cond = x_econ_cond-1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond +1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("think", total_words, corpus) > 0.5724)
	{
		x_econ_cond = x_econ_cond-1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond +1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("spen", total_words, corpus) > 0.472806)
	{
		x_econ_cond = x_econ_cond-1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond +1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("think", total_words, corpus) <= 0.281206)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("think", total_words, corpus) > 0.281206)
	{
		x_econ_cond = x_econ_cond-1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond +1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("obam", total_words, corpus) > 0.994639)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("gover", total_words, corpus) > 0.457643)
	{
		x_econ_cond = x_econ_cond+1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond + 1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("poison", total_words, corpus) > 0)
	{
		x_econ_cond = x_econ_cond-1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond +1;
	} 
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("envir", total_words, corpus) > 1.149202)
	{
		x_econ_cond = x_econ_cond-1;
		total_x_cond = total_x_cond + 1;
		axis_total_cond = axis_total_cond +1;
	}
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("virtu", total_words, corpus) <= 0.931321)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("polit", total_words, corpus) <= 0.237842)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("elect", total_words, corpus) <= 0.560449)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("high", total_words, corpus) <= 0.112347)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	

	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("famil", total_words, corpus) > 0.282042)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("profit", total_words, corpus) > 0.296112)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("low", total_words, corpus) > 0.812634)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("girl", total_words, corpus) > 1.456897)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("mom", total_words, corpus) > 1.244084)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("tough", total_words, corpus) > 1.421983)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("ce", total_words, corpus) > 1.502845)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("wir", total_words, corpus) > 0.79713)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("warm", total_words, corpus) > 0.617083)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("sak", total_words, corpus) > 0.705006)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("outd", total_words, corpus) > 0.64869)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("row", total_words, corpus) > 0.757359)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("red", total_words, corpus) > 0.50893)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("fighter", total_words, corpus) > 0.207306)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("pac", total_words, corpus) > 0.186537)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("craft", total_words, corpus) > 0.196271)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("reinst", total_words, corpus) > 0.196271)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("bl", total_words, corpus) > 1.171268)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("parent", total_words, corpus) > 0.749417)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("baltimor", total_words, corpus) > 0.481838)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("incentiv", total_words, corpus) > 0.186537)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("1990", total_words, corpus) > 0.162761)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("val", total_words, corpus) > 0.355658)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("refus", total_words, corpus) > 0.338005)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("wom", total_words, corpus) > 1.004544)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("innov", total_words, corpus) > 1.280496)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("opportun", total_words, corpus) > 0.766685)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("ship", total_words, corpus) > 0.275442)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("florid", total_words, corpus) > 0.394617)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("brother", total_words, corpus) > 0.237779)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("comp", total_words, corpus) > 0.989489)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("gradu", total_words, corpus) > 0.951273)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("growth", total_words, corpus) > 1.099483)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("colleg", total_words, corpus) > 0.931256)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("ga", total_words, corpus) > 0.150022)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("chanc", total_words, corpus) > 1.093799)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("ri", total_words, corpus) > 0.892522)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("stronger", total_words, corpus) > 0.937671)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("team", total_words, corpus) > 0.447079)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("hit", total_words, corpus) > 0.837779)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("greatest", total_words, corpus) > 0.839726)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("built", total_words, corpus) > 0.217989)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("mad", total_words, corpus) > 0.630417)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("dream", total_words, corpus) > 1.043446)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("rebuild", total_words, corpus) > 0.133976)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("technolog", total_words, corpus) > 0.660041)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("child", total_words, corpus) > 0.084326)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("born", total_words, corpus) > 0.413037)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("gradu", total_words, corpus) <= 0.098862)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("gradu", total_words, corpus) > 0.098862)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("wait", total_words, corpus) > 0.267579)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("growth", total_words, corpus) > 0.158318)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("born", total_words, corpus) > 0.413037)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("innov", total_words, corpus) > 0.250661)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("matter", total_words, corpus) > 0.445616)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("low", total_words, corpus) > 0.179675)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("chanc", total_words, corpus) > 0.189707)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("parent", total_words, corpus) > 0.253473)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("god", total_words, corpus) > 0.130614)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("colleg", total_words, corpus) > 0.097032)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("famil", total_words, corpus) > 0.560538)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("bl", total_words, corpus) > 0.118789)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("mad", total_words, corpus) > 0.128315)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("opportun", total_words, corpus) > 0.092978)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("wait", total_words, corpus) <= 0.655097)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("wait", total_words, corpus) > 0.655097)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("gradu", total_words, corpus) > 0.098862)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("born", total_words, corpus) > 0.413037)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("innov", total_words, corpus) > 0.250661)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("matter", total_words, corpus) > 0.445616)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("chanc", total_words, corpus) > 0.762968)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("low", total_words, corpus) > 0.179675)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("parent", total_words, corpus) > 0.253473)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("colleg", total_words, corpus) > 0.368537)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("mad", total_words, corpus) > 0.434054)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("god", total_words, corpus) > 0.130614)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("famil", total_words, corpus) > 0.560538)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("bl", total_words, corpus) > 0.118789)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("opportun", total_words, corpus) > 0.092978)
	{
		y_auth_cond = y_auth_cond+1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond + 1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("trillion", total_words, corpus) > 1.593644)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("slav", total_words, corpus) > 0.485171)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("establishm", total_words, corpus) > 0)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	
	
	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
    if (calc_percentage("abus", total_words, corpus) > 0.349027)
	{
		y_auth_cond = y_auth_cond-1;
		total_y_cond = total_y_cond + 1;
		axis_total_cond = axis_total_cond +1; 
	}
	

////////////////////////////////////////////////////////////////////////////////
//test
//	    console.log("Conditions are over");    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);          
//    if (calc_percentage("pizza", total_words, corpus) > 0.349027)
//	{
//        x_econ_cond = x_econ_cond-1;
//		y_auth_cond = y_auth_cond-1;
//		total_y_cond = total_y_cond + 1;
//		axis_total_cond = axis_total_cond +1; 
//	}
    
    
    
    // axis A, total conditions, axis B conditions by axis, quadrant by total conditions
    	// axis_total_cond = all the conditions overall in the axis graph,
		//each time there is a condition +1, for normalization. for graph Axis A
	// x_econ_cond and y_auth_cond are for the positions themselves,
		//this determines the position on x and y axis, both graphs share this variable
	// total_x_cond is for normalization as well, but it normalizes by a specific axis
		//for graph Axis B
	// total_y_cond is for normalization as well, but it normalizes by a specific axis
		//for graph Axis B
    
    //axis A
    console.log("Conditions are over");
    console.log("quad_total " + quad_total_cond + " quad x " + quad_x + " quad y " + quad_y);
    console.log("x_econ_cond " + x_econ_cond + " y_auth_cond " + y_auth_cond);

    var axis_a_x = 0;
    var axis_a_y = 0;
        //Axis B    
    var axis_b_x = 0;
    var axis_b_y = 0;
    
    if (x_econ_cond !== 0)
    {
        axis_a_x = x_econ_cond/axis_total_cond;
        axis_b_x = x_econ_cond/total_x_cond;
    }
    
    if (y_auth_cond !== 0)
    {
        axis_a_y = y_auth_cond/axis_total_cond;
        axis_b_y = y_auth_cond/total_y_cond;
    }


    var quad_perc_x == 0;
    var quad_perc_y == 0;
    
    if (quad_x !== 0)
    {
        quad_perc_x = quad_x/quad_total_cond;
    }

    if (quad_y !== 0)
    {
        quad_perc_y = quad_y/quad_total_cond;
    }
    console.log("after calculations");
    console.log("Axis A X:" + axis_a_x + " Y: " + axis_a_y
                + " Axis B X: " + axis_b_x + " Y: " + axis_b_y
                + " Quad X: " + quad_perc_x + " Y: " + quad_perc_y);
    
        console.log("Axis A X:" + gen_x(axis_a_x) + " Y: " + gen_y(axis_a_y)
                + " Axis B X: " + gen_x(axis_b_x) + " Y: " + gen_y(axis_b_y)
                + " Quad X: " + gen_x(quad_perc_x) + " Y: " + gen_y(quad_perc_y));
    
//    need to make sure that there are no divide by zeros
//at the end I will pass the percentages of the three graphs
//What is the exact algorithm for that? I know it involves zeroes    
    
    //x left- right+
    //y lib - top +
    generate_graphs(
                gen_x(axis_a_x), gen_y(axis_a_y),
                gen_x(axis_b_x), gen_y(axis_b_y),
                gen_x(quad_perc_x), gen_y(quad_perc_y)
                );
}


























//function must take phrase starting letters, total words and corpus list to check and return a percentage
// It has 17 words, 12 start with pi, 5 do not.
// Therefore the outcome must be 70.5%

function calc_percentage(phrase, total, corp)
{
    //var word_find = /\bword+/ig;
    //var phrase_count = corp.match(word_find);
     //   if you need to match the WHOLE word /\bst\w*/ig;
     //this matches the beggining of the phrase only
    console.log("total inside calc_percentage " + total);
    var first = "\\" + "b" + phrase + "+" ;
    var word_find = new RegExp(first , "ig");
    var phrase_count = corp.match(word_find);
	var percentage;
    if (phrase_count !== null)
    {
        phrase_count = phrase_count.length;
        console.log(phrase + " was found " + phrase_count);
        console.log("total" + phrase_count);
        percentage = phrase_count/total;
    }
    else
    {
        percentage = 0;
        console.log(phrase + " was not found");
    }
    percentage = percentage * 100;
    console.log("percentage before passing " + percentage);
    return percentage;
}
        
        
function gen_x(x_percent)
{
	var x;
    if (x_percent === 0)
    {
        x = 140;
    }
    
    else if (x_percent > 0)
    {
        x = (x_percent * 140) + 140;
    //    right
    }
    
    else
    {
        x = 140 + (x_percent * 140);
    //    left
    // from negative # to 139-0, 0 is most left
    // 
    }
    if (x < 0)
    {
        console.log("Too left, value " + x + " setting to max");
        x = 0;
    }
    
    if (x > 280)
    {
        console.log("Too right, value " + x + " setting to max");
        x = 280;
    }
    
    return x;    
}


function gen_y(y_percent)
{
    var y;
    if (y_percent === 0)
    {
        y = 71;
        //mid y
    }
    
    else if (y_percent > 0)
    {
        y = 71 - (y_percent * 71);
    //    top
    // most authoritarian is 0, center is 71
    }
    

    else
    {
        y = 71 - (y_percent * 70);
    //    libertar
    //  negative number to 72-141, subtracting by negative,higher numbers == more lib

    }
    
    if (y < 0)
    {
        console.log("Too top, value " + y + " setting to max");
        y = 0;
    }
    
    if (y > 141)
    {
        console.log("Too bottom, value " + y + " setting to max");
        y = 141;
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


    
    canvas = document.getElementById("graph2");
    con = canvas.getContext("2d");
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
    

    
    canvas = document.getElementById("graph3");
    con = canvas.getContext("2d");
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

