"use strict";

/*
 * every time a window is loaded this checks what to do.
 */
window.onload = function () {
    var currentProject = document.cookie.split("=");
    if (document.cookie.length != 0) {

        var path = window.location.pathname;
        switch (path) {
        case "/home.html":
            var userArray = document.cookie.split("=");
            var userJSON = JSON.parse(userArray[1]);
            document.getElementById("profilSymb").textContent = userJSON.data.Firstname;
            creator = userJSON.data.Firstname;

            //loading all Projects where the User collaborates
            loadAllProjects();
            break;

        case "/work.html":
            var userArray = document.cookie.split("=");
            var userJSON = JSON.parse(userArray[1]);
            document.getElementById("workProfilSymb").textContent = userJSON.data.Firstname;
            console.log(userArray);

            document.getElementById("rootList").textContent = currentProject[3];

            createTree();
            break;

        case "/profiledit.html":
            var userArray = document.cookie.split("=");
            var userJSON = JSON.parse(userArray[1]);
            document.getElementById("editProfilSymb").textContent = userJSON.data.Firstname;
            break;
        case "/impressum.html":
            var userArray = document.cookie.split("=");
            var userJSON = JSON.parse(userArray[1]);
            document.getElementById("imprProfilSymb").textContent = userJSON.data.Firstname;
            break;

        case "/profil.html":
            var userArray = document.cookie.split("=");
            var userJSON = JSON.parse(userArray[1]);
            document.getElementById("profilProfilSymb").textContent = userJSON.data.Firstname;
            break;

        }
    }

}

/*
 * sets the cookie to the logged in user
 */
function setUserCookie() {
    var userLogin = loginUser;
    console.log(userLogin);
    document.cookie = "User=" + userLogin;
}

/*
 * sets the cookie to "" and loads the login&regitry.html
 */
function logout() {
    document.cookie = "";
    window.location.href = "login&registry.html";
}





function createTree() {
    $(function () {
        // 6 create an instance when the DOM is ready
        $('#jstree').jstree();
        // 7 bind to events triggered on the tree
        $('#jstree').on("changed.jstree", function (e, data) {
            console.log(data.selected);
        });
        // 8 interact with the tree - either way is OK
        $('button').on('click', function () {
            $('#jstree').jstree(true).select_node('child_node_1');
            $('#jstree').jstree('select_node', 'child_node_1');
            $.jstree.reference('#jstree').select_node('child_node_1');
        });
    });
}