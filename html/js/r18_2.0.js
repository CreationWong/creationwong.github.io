function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}
function checkCookie() {
    var user = getCookie("username");
    if (user == "") {
        user = prompt("请输入你的名字:", "");
        if (user != "" && user != null) {
            var password = 22533;
            var testV = 1;
            var pass1 = prompt("请输入密码");
            while (testV < 3) {
                if (pass1 == password) {
                    setCookie("username", user, 30);
                    break;
                }
                testV += 1;
                var pass1 = prompt("密码错误!请重新输入:");
            }
            if (testV == 3) {
                var user = "NOPASS"
                setCookie("username", user, 30);
                history.go(0);
                return " ";
            }
        } else {
            alert("无授权！");
            return " ";
        }
    }
}