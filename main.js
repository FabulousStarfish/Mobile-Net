Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90,

    constraints:{
        facingMode:"environment"
    }
});
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image_result" src="'+data_uri+'">';
    });
}
console.log("Ml5 Version",ml5.version);

classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("Model Has Been Loaded");
}
function check(){
    img=document.getElementById("image_result");
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result)
        answer=result[0].label;
        document.getElementById("output").innerHTML=answer;
    }
}