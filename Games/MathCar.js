$(function () {
    // alert(123);
    function init() {
        if (document.layers) document.captureEvents(Event.MOUSEMOVE);
        document.onmousemove = mousemove;
    }
    function mousemove(event) {
        var mouse_x = mouse_y = 0;
        if (document.attachEvent != null) {
            mouse_x = window.event.clientX;
            mouse_y = window.event.clientY;
        } else if (!document.attachEvent && document.addEventListener) {
            mouse_x = event.clientX;
            mouse_y = event.clientY;
        }
        status = "x = " + mouse_x + ", y = " + mouse_y;
        document.getElementById('xy').innerHTML = "x = " + mouse_x + ", y = " + mouse_y;
    }
    init()
    $("#b2").on("click",function () {
    var rul = "Правила игры в MathCar!\n 1.Нажимаете на кнопку \"START\" \n 2.Машинка едет до специльного знака <?> и вам будет задан вопрос\n3.Если вы отвечаете на вопрос верно, то машинка поедет дальше, если нет, то вернеться на начальную позицию\n Все легко и просто. Удачи!!!";
    alert(rul);
    })
    $("#b1").on("click",function () {
        $(this).fadeOut(2000);
        $("#car").animate({
            left: "+=941"
        },5000,function () {
            $(this).rotate(90)
        })
        $("#car").animate({
            top: "+=142"
        },3000,function () {
        $(this).rotate(180)
        })
        $("#car").animate({
            left: "-=95"
            },2000,function () {
            $("#z1").rotate({animateTo: 360})
            var num1 = getRand(6,10);
            var num2 = getRand(1,5);
            var result = num1 - num2;
            var answer = "Решите уравнение:\n"+num1+" - "+num2+" =  ?";
            if(prompt(answer) == result)
            {
                $("#info").text("Вы ответили верно! Поздравляю!").toggle(4000).rotate({animateTo: 360});
                $("#z1").fadeOut(10000);
                $("#info").toggle(6000);
                //////////////Езда ко второму знаку/////////////
                $("#car").animate({
                    left: "-=997px"
                },10000,function () {
                    $("#car").rotate(90)
                })
                $("#car").animate({
                    top: "+=100px"
                },2000,function () {
                    $(this).rotate(0)
                })
                $("#car").animate({
                    left: "+=100px"
                },2000,function () {
                    $("#z2").rotate({animateTo:360})
                    var num1_2 = getRand(1,10);
                    var num2_2 = getRand(1,10);
                    var result2 = parseInt(num1_2) + parseInt(num2_2);
                    alert(num1_2);
                    alert(num2_2);
                    alert(result2);
                    var answer2 = "Решите уравнение:\n"+num1_2+" + "+num2_2+" =  ?"
                    if(prompt(answer2) == result2)
                    {
                        $("#info").text("Вы ответили верно! Поздравляю!").toggle(6000).rotate({animateTo: 360});
                        $("#z2").fadeOut(10000);
                        $("#info").toggle(6000);
                        //////////////////Езда к третьему знаку///////////////////////////
                        $("#car").animate({
                            left: "+=990px"
                        },10000,function () {
                            $(this).rotate(90)
                        })
                        $("#car").animate({
                            top: "+=130px"
                        },2000,function () {
                            $(this).rotate(180)
                        })
                        $("#car").animate({
                            left: "-=50px"
                        },1500,function () {
                            $("#z3").rotate({animateTo:360})
                            var num1_3 = getRand(1,5);
                            var num2_3 = getRand(1,5);
                            var result3 = num1_3 * num2_3;
                            var answer3 = "Решите уравнение:\n"+num1_3+" * "+num2_3+" =  ?"
                            if(prompt(answer3) == result3)
                            {
                                $("#info").text("Вы ответили верно! Поздравляю!").toggle(6000).rotate({animateTo: 360});
                                $("#z3").fadeOut(10000);
                                $("#info").toggle(6000);
                                ///////////////////Езда до финиша///////////////////////
                                $("#car").animate({
                                    left: "-=990px"
                                },8000,function () {
                                    $("#win").fadeIn(3000).rotate({animateTo:720});
                                })

                                ///////////////////////////////////////////////////////
                            }else{
                                alert("Вы проиграли!!!");
                                $("#b1").fadeIn(2000);
                                $("#car").animate({
                                    top: "72px",
                                    left: "178px"
                                },function () {
                                    $(this).rotate(0)
                                })
                            }
                        })

                        ///////////////////////////////////////////////////////////////////
                    }else{
                        alert("Вы проиграли!!!");
                        $("#b1").fadeIn(2000);
                        $("#car").animate({
                            top: "72px",
                            left: "178px"
                        },function () {
                            $(this).rotate(0)
                        })
                    }

                })
                ///////////////////////////////////
            }else{
                alert("Вы проиграли!!!");
                $("#b1").fadeIn(2000);
                $("#car").animate({
                    top: "72px",
                    left: "178px"
                },function () {
                    $(this).rotate(0)
                })
            }
        })
    })

})
function getRand(min,max) {
    return Math.floor(Math.random()*max)+min;

}
