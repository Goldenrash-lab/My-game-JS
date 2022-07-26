$(function () {
    $("#imgResult").on("click",function () {
        restart();
    })
    // alert(123);
    function Card(name,suit,value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
    }
    var desc = [
        new Card('Ace','Clubs',11),
        new Card("Eight","Clubs",8),
        new Card("Five","Clubs",5),
        new Card("Four","Clubs",4),
        new Card("Jack","Clubs",10),
        new Card("King","Clubs",10),
        new Card("Nine","Clubs",9),
        new Card("Queen","Clubs",10),
        new Card("Seven","Clubs",7),
        new Card("Six","Clubs",6),
        new Card("Ten","Clubs",10),
        new Card("Three","Clubs",3),
        new Card("Two","Clubs",2),

        new Card('Ace','Diamonds',11),
        new Card("Eight","Diamonds",8),
        new Card("Five","Diamonds",5),
        new Card("Four","Diamonds",4),
        new Card("Jack","Diamonds",10),
        new Card("King","Diamonds",10),
        new Card("Nine","Diamonds",9),
        new Card("Queen","Diamonds",10),
        new Card("Seven","Diamonds",7),
        new Card("Six","Diamonds",6),
        new Card("Ten","Diamonds",10),
        new Card("Three","Diamonds",3),
        new Card("Two","Diamonds",2),

        new Card('Ace','Hearts',11),
        new Card("Eight","Hearts",8),
        new Card("Five","Hearts",5),
        new Card("Four","Hearts",4),
        new Card("Jack","Hearts",10),
        new Card("King","Hearts",10),
        new Card("Nine","Hearts",9),
        new Card("Queen","Hearts",10),
        new Card("Seven","Hearts",7),
        new Card("Six","Hearts",6),
        new Card("Ten","Hearts",10),
        new Card("Three","Hearts",3),
        new Card("Two","Hearts",2),

        new Card('Ace','Spades',11),
        new Card("Eight","Spades",8),
        new Card("Five","Spades",5),
        new Card("Four","Spades",4),
        new Card("Jack","Spades",10),
        new Card("King","Spades",10),
        new Card("Nine","Spades",9),
        new Card("Queen","Spades",10),
        new Card("Seven","Spades",7),
        new Card("Six","Spades",6),
        new Card("Ten","Spades",10),
        new Card("Three","Spades",3),
        new Card("Two","Spades",2)
    ]
    var used_cards = new Array();
    var hand = {//Создаем обьект рука игрока
        cards: new Array(),//Свойства массив карт в руке игрока
        current_total:0,//Сума значений карт которые есть в руке игрока
        SumCardTotal: function () {//Метод подсчитывает сумму карт в руке и сообщает програш или выиграш
            this.current_total = 0;//Каждый раз когда срабатывает функция обнуляем свойство сума значений карт
            for(var i = 0; i < this.cards.length; i++){//Перебираем карты  в руке
                var c = this.cards[i];// В Переменную сохраняем карту которая есть в руке игрока
                this.current_total+= c.value;//Накапливаем сумму очков всех карт в руке
            }
            $("#hdrTotal").html("Total: "+this.current_total);//Выводим очки
            if(this.current_total > 21){//Если сумма очков больше 21 то пользователь проиграл
                $("#btnStick").trigger("click");//Имитируем клик по элементу
                $("#hdrResult").html("Bust");//Сообщаем програш
                $("#result").show();
                $("#imgResult").attr("src","images/x.png");
                $("#imgResult").animate({
                    top: "-=300px",
                    left: "-=500px",
                    width: "+=300"
                })

                // alert(this.current_total);
            }else if(this.current_total == 21){//Если игрок набрал ровно 21 очко это блэк джэк
                $("#btnStick").trigger("click");//Имитируем клик
                $("#hdrResult").html("BLACK JACK!");//Сообщаем что блэк джэк
                $("#result").show();
                $("#imgResult").attr("src","images/check.png");
                $("#imgResult").animate({
                    top: "-=300px",
                    left: "-=500px",
                    width: "+=300"
                })

            }else if(this.current_total < 21 && this.cards.length == 5)//Если у игрока пять карт и их сумма меньше 21 то сообщаем супер блэк джэк
            {
                $("#btnStick").trigger("click");
                $("#hdrResult").html("Super Black Jack!!");
                $("#result").show();
                $("#imgResult").attr("src","images/check.png");
                $("#imgResult").animate({
                    top: "-=300px",
                    left: "-=500px",
                    width: "+=300"
                })

            }else {
                ///////////////
            }
        }
    }
    function hit() {
        var good_card = false;//Подходящий карты нет
        do {//Выполняем тело цикла
            var index = Rand(desc.length);//Получаем рандомный индекс карты
            // alert(index);
            //if(!$.inArray(index,used_cards) >-1){//Если значение функции инэрай не больше -1, то карта нам подходит
            if ($.inArray(index, used_cards) == -1) {
                //Функция InArray() - ищет значения в массиве и если находит то возвращает индекс этого значения, если не находит то возращает -1
                good_card = true;//Подходящая карта найдена значение тру остановит цикл
                var c = desc[index];//Достаем обьект карту из колоды в отдельную переменную
                used_cards[used_cards.length] = index;//В массиве использованых карт создаем новый элемент в конце и записываем в него индекс карты которую вытащили из колоды это делается для того чтобы повторно карта не зыграла
                hand.cards[hand.cards.length] = c;//Добавляем в руку игрока новую карту
                var $d = $("<div>");//Создаем тэг див в оперативной памяти компьютера
                $d.addClass("current_hand").appendTo("#my_hand");//Созданому диву добавляем класс и вставляем див в элемент с айди #май хэнд
                $("<img>").appendTo($d).attr("src", "images/" + c.suit + "/" + c.name + ".jpg").fadeOut("slow").fadeIn("slow");//Создаемм обьект имг и этот тэг вставляем в заранее соданный див Устанавливаем СРС и с помощью фадэин и фадэаут делаем мерцание
                 }

            }
            while (!good_card) ;//Цикл повторится если подходящая карта не найдена
            good_card = false;
            hand.SumCardTotal();//Заставляем игрока пересчитать карты и сообщить выиграл или проиграл

    }
    //hit();
    $("#btnDeel").on("click",function () {
        deal();
        $("#btnHit").toggle();
        $(this).toggle();
        $("#btnStick").toggle();
    })
    $("#btnHit").on("click",function () {
        hit();
    })
    $("#btnStick").on("click",function () {
        $("#hdrResult").html("Stick!");
        $("#result").toggle();
    })
    $("#btnRestart").on("click",function () {
        // $("#result").toggle();
        $(this).toggle();
        $("#my_hand").empty();
        $("#hdrResult").html("");
        used_cards.length = 0;
        hand.current_total = 0;
        $("#btnDeel").toggle().trigger("click");
        $("#imgResult").animate({
            left: "500px",
            top: "400px",
            width: "500px"

        })
    });
    // alert(desc.length);

function deal() {
    for(var i = 0; i < 2;i++){
        hit();
    }
}

function Rand(num) {

    return  Math.floor(Math.random()*num);
}

function restart() {
    $("#result").hide();
    $("#my_hand").empty();
    used_cards.length = 0;
    hand.current_total = 0;
    $("#hdrResult").html(" ");
    $("#hdrTotal").html(" ");
    $("#btnStick").toggle();
    $("#btnHit").toggle();
    $("#btnRestart").toggle();
    // hand.SumCardTotal();
    hand.cards = [];}



})