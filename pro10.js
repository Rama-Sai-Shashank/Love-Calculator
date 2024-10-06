function calculatelove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1===""||name2===""){
        alert("Please enter the names");
    }

    const lovepercentage = Math.floor(Math.random()*101);

    const result = document.getElementById("result");

    if(lovepercentage<30){
        result.innerHTML += "<br> Not a Great Match";
    }else if(lovepercentage>=30||lovepercentage<=70){
        result.innerHTML += "<br> If you try you can be a great match";
    }else{
        result.innerHTML += "<br> You are a Great Match";
    }

    result.innerHTML = `${name1} and ${name2}'s love percentage: ${lovepercentage}% `;
}