function modelLoaded(){
    console.log("model is loaded")
    statuss=true
    objectdetector.detect(img,gotresult)

}
function gotresult(error,result){
    if(error){
        console.error(error)

    }
    console.log(result)
    object=result

}