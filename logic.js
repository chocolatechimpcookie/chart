            var canvas = document.getElementById("graph");
            var con = canvas.getContext("2d");
            con.fillStyle = "rgba(209, 16, 57, 1)";
            con.fillRect(0,0,150,75);
            //^authleft
            con.fillStyle = "rgba(34, 34, 158, 1)";
            con.fillRect (150, 0, 150, 75);
            //auth right
            con.fillStyle = "rgba(226, 144, 18, 1)";
            con.fillRect (0, 75, 150, 75);
            //lib left
            con.fillStyle = "rgba(12, 149, 108, 1)";
            con.fillRect (150, 75, 150, 75);
            con.fillStyle = 'black';
            //lib right
            con.beginPath();
            con.arc(150, 75, 1.5, 0, Math.PI*2, true); 
            con.closePath();
            con.fill();
            //dot
            
//            arc placement
           //(x, but at its left most = 0, 150 = center, 300 = right most
           //,y at its top most = 0, 75 = center, 112.5  center of lib, 150 = bottom )
          
          //0- 300 left-right     center = 150
          //0-75 top-bottom       center = 75
          // Points system, and it needs to stay within the 100 percent range
          //How do I make sure it stays within the range?
          //Need to turn any number into a range of 1
          // But I'd also need a standard or extremity/non extremity
          //larger numbers matter
          //I guess use corpus size? That doesn't really put someone in place of extremity
          //I guess what matters is HOW far they are from the 0.
          
          //left and right:
            //if x = 0, then x = 150
            // if greater than/ less than:
                // + or - 150
            //top and down:
            //if y = 0, then y = 75
            // if greater than/ less than;
                // + or - 75
            
            
            //This will put people in a quadrant moreso than an actual place
            //Because the basis is whether they are in the center
            //SO, left words will cancel out right words
            //the more left, the less closer to zero.
            
            //What I could use is words that are picked up as political language in the file
            // variables in program:
            // left words
            // right words
            // top words
            // bottom words
            
            //Depends on the tree as well, whether it is by quadrant or by axis
            //so the alternative could be
            //left bottom
            //left top
            //right top
            //right bottom//
            //I can pit these against each as well but it'll take more thinking
            //What I can use for logic is make add to both directions depending on quadrant
            //left bottom +left + bottom
            //left top +left + top
            //right top +top + right
            //right bottom +right + bottom
            
        
            
            
            