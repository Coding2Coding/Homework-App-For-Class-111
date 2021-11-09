var emojiprediction1 = "";
var emojiprediction2 = "";

Webcam.set({
    width: 350, 
    height: 350, 
    image_format: 'png', 
    png_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach(camera);

function takePicture() {
    Webcame.snap(function (image) {
        document.getElementById("picture").innerHTML = "<img src='"+image+"' id='clickedPicture'>";
    });
}

console.log("ml5 version: ", ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-T60qOtVM/model.json", modelLoaded);