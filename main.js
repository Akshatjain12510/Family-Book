var img=[ "FAMILY_BOOK.JPG" , "FATHER.jpg" , "MOTHER.jpg" , "BROTHER.jpg" , "MYSELF.jpg"];
var name=[ "The Family Book" , "Sachin Jain (Father)" , "Anshu Jain (Mother)" , "Atiksh Jain (Younger Sibling)" , "Akshat Jain (Me)"]; 
var i=0;
var y= name[0];
function nextslide(){
    if(i==5){
        i=0;    }
document.getElementById("family_book").src=img[i];
document.getElementById("names").innerHTML=name[i];
i++;
}

