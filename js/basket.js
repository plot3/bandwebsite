function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function deleteCookie(cname){
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function basketdisplay() {
    var currentbasket = getCookie("basket");
    if (currentbasket == null || currentbasket == "") {
        $("#checkout").hide();
        $("#checkoutcounter").hide();
    }
    else {
        $("#checkout").show();
        $("#checkoutcounter").show();
        var basketarray = currentbasket.split('|');
        $("#checkoutcounter").text(basketarray.length);
    }
}
function basketopen() {
    //$("#container").hide();
    $(".purchaseimage").hide();
}
function loadimages() {
    var basketstring = getCookie('basket');
    var productselector = basketstring.split('|');
    var i;
    for (i = 0; i < productselector.length; i++) {
        $("#" + productselector[i]).parent().show();
    }
}
function buyalert() {
    alert("Thank you come again");
}
