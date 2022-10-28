https://teachablemachine.withgoogle.com/models/k7igMPMJM/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/k7igMPMJM/model.json" , modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}