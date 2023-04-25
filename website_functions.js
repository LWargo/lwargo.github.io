//Index Page//
//Index Page Image Carosel//
var images = [], x = -1;
images[0]=src="assets/May2021PurpleShirtGeese.JPG";
images[1]=src="assets/Jan2022Pilot.JPEG";
images[2]=src="assets/May2021OrangeSunshine.jpg";
images[3]=src="assets/Apr2023OCPs.JPG";
images[4]=src="assets/Dec2022GoApe.JPG";

function change_img(){
    if(x== 4){
        x=0;
    }else{
        x = (x=== images.length -1) ? 0 : x + 1;
    }
    document.getElementById("img").src = images[x];
}
function start_img_timer(){
    setInterval(change_img, 10000);
}