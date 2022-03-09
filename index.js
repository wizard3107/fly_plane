var number = 1;
var country=document.getElementById("countryName");
setInterval(()=>{
    var name = document.getElementById("country"+number);
    country.innerText=name.innerText;
    var line1 = document.getElementById("country"+number);
    line1.style.borderBottom= "thick solid #0000FF";
    for(var i=1;i<=10;i++)
    {  
        if(i!==number)
        {
            line1.style.borderBottom="0";
        }
    }
    number++;
    if(number===11){
        number=1;
    }
},3000);


document.querySelector(".burger").addEventListener("click",()=>{
    var x = document.getElementById("topnav")

    if(x.style.display === "block")
    {
        x.style.display = "none"
        x.style.transition= "2s,ease-out";
    }
    else{
        x.style.display = "block"
        x.style.borderBottom="thick solid #0000FF"
    }
})

var featureSS = document.querySelector(".first");
var slide = 20
// setInterval(()=>{
// featureSS.style.marginLeft= `${0-slide}%`
// slide=slide+20;
// if(slide===80)
// {
//     slide=0;
// }
// var n=1;
// var btn = document.getElementById("mbtn"+n);
// btn.style.backgroundColor="#4d3af7";
// n++;
// if(n===6)
// n=0;
// for(var i=1;i<=5;i++)
// {
//     // if(i!==n)
//     // {
//     //     btn.style.backgroundColor="#dfe1e296"
//     // }
// }

// },5000)


