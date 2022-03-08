

//function for calculate compute intrest
function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;

    // Check the input is valid or not
    if(principal == 0 ||  principal < 0){
        alert("Enter a positive number")
        document.getElementById("principal").focus();
    }else{
        // formula for calculate interest
        let interest = principal * years * rate / 100; 

        //convert year to actule year for showing in result
        let year = new Date().getFullYear()+parseInt(years);

        //Message showing if user input all correct inputes
        document.getElementById("result").innerHTML=`If you deposite <strong>${principal}</strong> \<br\> an interest rate of <strong>${rate}</strong> \<br\> you will received an amount of <strong>${interest}</strong> \<br\> in the year <strong>${year}</strong>`
    }
}
     
//function for update rate
function updateRate(){
    let rateval = document.getElementById("rate").value;
    //replace dynamic input to the span field in form
    document.getElementById("rate_val").innerText=rateval+'%';
}

