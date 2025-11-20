function calculateLinolium() {
    let roomWidth = parseFloat(document.getElementById("roomWidth").value);
    let roomLenght = parseFloat(document.getElementById("roomLenght").value);
    let linoliumWidth = parseFloat(document.getElementById("linoliumWidth").value);
    let linoliumPrice = parseFloat(document.getElementById("linoliumPrice").value);



    let stripsNeededCross = Math.ceil(roomWidth/linoliumWidth);
    let linoliumLenghtCross = stripsNeededCross * roomWidth;
    let linoliumAreaCross = linoliumLenghtCross * linoliumWidth;
    let costCross = linoliumAreaCross * linoliumPrise;
    let wasteCross = linoliumAreaCross - (roomWidth*roomLenght);
    let wasteCostCross = wasteCross * linoliumPrice;


    document.getElementById("lengthCross").value = linoliumLenghtCross.toFixed(2) + " m";
    document.getElementById("costCross").value = costCross.toFixed(2) + " EUR";
    document.getElementById("wasteCross").value = costCross.toFixed(2) + " m2";
    document.getElementById("wastecostCross").value = wastecostCross.toFixed(2) + " EUR";

}