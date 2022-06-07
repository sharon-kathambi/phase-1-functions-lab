// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
    if(blocks > 42){
        return blocks - 42;
    }
    else if(blocks < 42){
        return 42 - blocks;
    }
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264;
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, stop){
    if(start < stop){
        return (stop-start)*264;
    }
    else if(start > stop){
        return (start-stop)*264;
    }
}

function calculatesFarePrice(start,stop) {
    if(distanceTravelledInFeet(start, stop) <= 400){
        return 0;
    }
    else if(distanceTravelledInFeet(start, stop)>400 && distanceTravelledInFeet(start, stop)<= 2000){
        return (distanceTravelledInFeet(start, stop) - 400)* 0.02;
    }
        else if(distanceTravelledInFeet(start, stop)> 2000 && distanceTravelledInFeet(start, stop)<=2500){
            return 25;
    }
    else if(distanceTravelledInFeet(start, stop) > 2500) {
        return "cannot travel that far";
    }
}