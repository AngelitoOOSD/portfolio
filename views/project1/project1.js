

function populate(){

    

    var table = document.getElementById("table");

    var images = new Array();

    images[0] = new Image();
    images[0].src = '../background.jpg';

    images[1] = new Image();
    images[1].src = '../forest-background.gif';

    images[2] = new Image();
    images[2].src = '../background2.jpg';

    images[3] = new Image();
    images[3].src = '../background3.jpg';

    images[4] = new Image();
    images[4].src = '../background4.jpg';

    images[5] = new Image();
    images[5].src = '../background5.jpg';

    images[6] = new Image();
    images[6].src = '../background3.jpg';



    var vidContainer = document.getElementById("video-container");

    for(var i = 0; i < images.length; i++){

        var img = document.createElement('img');
        img.id = "images";

        img.src = images[i].src;

        //video desc
        var desc = document.createElement("p");
        desc.id = "description";
        desc.innerText = "Video " + i;

        vidContainer.appendChild(img);
        //vidContainer.appendChild(desc);
       
    }
}
