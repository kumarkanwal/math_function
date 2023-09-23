let radius;
let check;
let area;
let circumference;
let diameter;

document.getElementById("radius_btn").onclick = function () {


    console.log("radius_btn clicked");


    radius = document.getElementById("input").value;
    radius = Number(radius);
    check = radius;
    if (check) {

        //  here formula of  radius 
        area = Math.PI * Math.pow(radius, 2);
        document.getElementById("area").innerHTML = area.toFixed(2);


        // here is circumference formula 
        circumference = 2 * Math.PI * radius;
        document.getElementById("circumference").innerHTML = circumference.toFixed(2);

        // here is diameter foumula 

        diameter = 2 * radius;
        document.getElementById("diameter").innerHTML = diameter.toFixed(2);

    } else {

        alert("Please enter a number value");
    }






};


