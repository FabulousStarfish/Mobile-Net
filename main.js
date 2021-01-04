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