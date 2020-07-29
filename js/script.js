// for search box=-=====================================================
var action = 1;

$("#search-icon").on("click", viewSomething);

function viewSomething() {
    if ( action == 1 ) {
        $("#search-bnt").css("opacity", "1");
        action = 2;
    } else {
        $("#search-bnt").css("opacity", "0");
        action = 1;
    }
}

// skill tabs-------



// for skill==========================================================


// for active button
