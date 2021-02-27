// post with Ajax
async function postWithAjax(elem) {

    var response = await fetch(elem.action, {
        method: elem.method,
        body: new FormData(elem)
    });

    console.log(response);

    var bookings = await response.json();
    
    console.log(bookings);


    var Time1 = bookings.filter(function (booking) {
        return booking.time == "time1";
    });

    var Time2 = bookings.filter(function (booking) {
        return booking.time == "time2";
    });

    var Time3 = bookings.filter(function (booking) {
        return booking.time == "time3";
    });

    var Time4 = bookings.filter(function (booking) {
        return booking.time == "time4";
    });

    var Time5 = bookings.filter(function (booking) {
        return booking.time == "time5";
    });


    var Place1 = bookings.filter(function (booking) {
        return booking.place == "place1";
    });

    var Place2 = bookings.filter(function (booking) {
        return booking.place == "place2";
    });

    var Place3 = bookings.filter(function (booking) {
        return booking.place == "place3";
    });

    var Place4 = bookings.filter(function (booking) {
        return booking.place == "place4";
    });

    var Place5 = bookings.filter(function (booking) {
        return booking.place == "place5";
    });

     
    
     


    chart1.data = [
        {
            time: "None",
            votes: Time1.length || 0
        },
        {
            time: "Once",
            votes: Time2.length || 0
        },
        {
            time: "Twice",
            votes: Time3.length || 0
        },
        {
            time: "Three",
            votes: Time4.length || 0
        },
        {
            time: "More",
            votes: Time5.length || 0
        }
    ];


    chart2.data = [
        {
            place: "Asia",
            votes: Place1.length || 0
        },
        {
            place: "Europe",
            votes: Place2.length || 0
        },
        {
            place: "America",
            votes: Place3.length || 0
        },
        {
            place: "Africa",
            votes: Place4.length || 0
        },
        {
            place: "Others",
            votes: Place5.length || 0
        }
    ];
    
}