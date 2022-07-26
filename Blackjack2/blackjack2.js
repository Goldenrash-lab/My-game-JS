
$(function () {
    // alert(132);
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
    ];
    // for(var i = 0; i < desc.length; i++){
    //     $("<img>").addClass("suit1").appendTo("#cards").attr("src","images/"+desc[i].suit+"/"+desc[i].name+".jpg");
    // }
    for(var i = 0; i < desc.length; i++){
        $("<img>").addClass("suit").appendTo("#cards").attr("src","images/hit_small.jpg").attr("id",(i+1));
    }


    var number = 0;

    for(var j = 0; j< desc.length; j++)
    {
        $("#"+[j+1]).on("click",function () {

                for(let k = 0; k < desc.length; k++)
                {
                        $(this).attr("src","images/"+desc[k+number].suit+"/"+desc[k+number].name+".jpg");
                        number++;
                        break;
                }

        })
    }



    // $("#"+(12-7)).on("click",function () {
    //     $("#"+(12-7)).hide(3000);
    // })


    // alert(desc[0].name);
    // alert(desc[0].suit);
    // alert(desc[0].value);

})