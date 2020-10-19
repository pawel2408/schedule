function display_c()
{
    var refresh = 1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}
    
function display_ct() 
{
    var x = new Date()
    // var x1 = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();

    var hour = x.getHours();
    var minute = x.getMinutes();
    var second = x.getSeconds();
    if(hour < 10 ) { hour= '0' + x.getHours(); }
    if(minute < 10 ) { minute= '0' + x.getMinutes(); }
    if(second < 10 ) { second= '0' + x.getSeconds(); }
    var x1 = hour + ':' + minute + ':' + second;

    //document.getElementById('ct').innerHTML = x1;
    //document.getElementById('t1').value = x1;
    document.getElementById('t2').value = x1;
    display_c();
}

function myFunction() 
{
    var y = document.getElementsByClassName("lectures");
    //y[0].innerHTML = "Hello World!";
    var i;
    for(i = 0; i < y.length; i++){
        y[i].classList.add("highlight");
    }

    var z = document.getElementsByClassName("exercises");
    //y[0].innerHTML = "Hello World!";
    var i;
    for(i = 0; i < z.length; i++){
        z[i].classList.remove("highlight");
    }
}

    let b2 = document.getElementById("b2");
    b2.addEventListener("click", myFunction);

function myFunction2() 
{
    var y = document.getElementsByClassName("exercises");
    var i;
    for(i = 0; i < y.length; i++){
        y[i].classList.add("highlight");
    }
    

    var p = document.getElementsByClassName("lectures");
    var i;
    for(i = 0; i < p.length; i++){
        p[i].classList.remove("highlight");
    }
}
      
    let b1 =document.getElementById("b1");
    b1.addEventListener("click", myFunction2);

    function myFunction3() 
    {
        var p = document.getElementsByClassName("lectures");
        var i;
        for(i = 0; i < p.length; i++){
            p[i].classList.remove("highlight");
        }

        var z = document.getElementsByClassName("exercises");
        //y[0].innerHTML = "Hello World!";
        var i;
        for(i = 0; i < z.length; i++){
            z[i].classList.remove("highlight");
        }
    }

    let b3 =document.getElementById("b3");
    b3.addEventListener("click", myFunction3);