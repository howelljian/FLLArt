var count = 0;
var vermeerLikes = 0;
var leonardoLikes = 0;
var michaelLikes = 0;
var vincentLikes = 0;
var edvardLikes = 0;


function one()
{
    count = 0;
    document.getElementById("pic").src="vincent.jpg";
    document.getElementById("text").innerHTML="Starry Night - Vincent Van Gogh";
    document.getElementById("likes").innerHTML="Likes: "+vincentLikes;
}

function two()
{
    count = 1;
    document.getElementById("pic").src="edvard.jpg";
    document.getElementById("text").innerHTML="Scream - Edvard Munch";
    document.getElementById("likes").innerHTML="Likes: "+edvardLikes;

}

function three()
{
    count = 2;
    document.getElementById("pic").src="leonardo.jpg";
    document.getElementById("text").innerHTML="Mona Lisa - Leonardo Da Vinci";
    document.getElementById("likes").innerHTML="Likes: "+leonardoLikes;
}

function four()
{
    count = 3;
    document.getElementById("pic").src="michael.jpg";
    document.getElementById("text").innerHTML="Look - Michael Lang";
    document.getElementById("likes").innerHTML="Likes: "+michaelLikes;
}

function five()
{
    count = 4;
    document.getElementById("pic").src="vermeer.jpg";
    document.getElementById("text").innerHTML="Girl with a Pearl Earring - Johannes Vermeer";
    document.getElementById("likes").innerHTML="Likes: "+vermeerLikes;
}


function Like()
{
    if((count == 0)||(count == 5))
    {
        vincentLikes = vincentLikes+1;
        document.getElementById("likes").innerHTML = "Likes: "+vincentLikes;
    }

    if(count == 1)
    {
        leonardoLikes = leonardoLikes+1;
        document.getElementById("likes").innerHTML = "Likes: "+leonardoLikes;
    }

    if(count == 2)
    {
        michaelLikes = michaelLikes+1;
        document.getElementById("likes").innerHTML = "Likes: "+michaelLikes;
    }

    if(count == 3)
    {
        vermeerLikes = vermeerLikes+1;
        document.getElementById("likes").innerHTML = "Likes: "+vermeerLikes;
    }

    if(count == 4)
    {
        edvardLikes = edvardLikes+1;
        document.getElementById("likes").innerHTML = "Likes: "+edvardLikes;
    }
}









