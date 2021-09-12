$(document).ready(function(){
    $("#dd1").click(function(){
        $("#dd1").hide();
        $("#dd2").show();
        $("#dd2").click(function(){
            $("#dd2").hide();
            $("#dd1").show();
        });
    })
    $("#dev1").click(function(){
        $("#dev1").hide();
        $("#dev2").show();
        $("#dev2").click(function(){
            $("#dev2").hide();
            $("#dev1").show();
        });
    })

    
    $("#pm1").click(function(){
        $("#pm1").hide();
        $("#pm2").show();
        $("#pm2").click(function(){
            $("#pm2").hide();
            $("#pm1").show();
        });
    })
})