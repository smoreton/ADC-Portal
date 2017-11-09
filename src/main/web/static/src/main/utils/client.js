import Jwt from "jsonwebtoken"
import $ from "jquery"

class JWT_Extender {
  TOKEN_KEY = "jwtToken";
  ROLES = "roles";
  ERROR = "error";

  baseURL = null;
  storage = null;
  roles;

  constructor(storage, baseURL) {
    this.storage = storage;
    this.baseURL = baseURL;
    this.decode = this.decode.bind(this);
    this.setJwtToken = this.setJwtToken.bind(this);
    this.getJwtToken = this.getJwtToken.bind(this);
    this.gotResponse = this.gotResponse.bind(this);
    this.errorResponse = this.errorResponse.bind(this);
    this.doLogin = this.doLogin.bind(this);
    this.getRoles=this.getRoles.bind(this);
    this.setRoles=this.setRoles.bind(this);
    //this.clearLocalStorage();
  }

  clearLocalStorage() {
    this.storage.removeItem(this.TOKEN_KEY);
    this.storage.removeItem(this.ROLES);
    this.storage.removeItem(this.ERROR);
  }

  getJwtToken() {
    return this.storage.getItem(this.TOKEN_KEY);
  }

  setJwtToken(token) {
    this.storage.setItem(this.TOKEN_KEY, token);
  }

  getRoles(){
    return this.storage.getItem(this.roles);
  }

  setRoles(roles){
    this.storage.setItem(this.roles,roles);
  }
  decode() {
    let token = this.getJwtToken();
    let decoded = Jwt.decode(token, {complete: true});
    let roles = decoded.payload.roles;
    this.setRoles(roles);
  }

  doLogin(userName, passWord) {
    let req = $.ajax({
      url: this.baseURL + "/auth",
      type: "POST",
      data: JSON.stringify({username: userName, password: passWord}),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false
    });

    req.done((data, textStatus, jqXHR) => this.gotResponse(data, textStatus, jqXHR));

    req.fail((data, textStatus, jqXHR) => this.errorResponse(data, textStatus, jqXHR));
  }


  errorResponse(data, testStatus, jqXHR) {
    if (jqXHR.status === 401) {
      this.storage.setItem(this.ERROR, "Unathorised access prohibited.")
    } else {
      this.storage.setItem(this.ERROR, "An unexpected error occurred.")
    }
  }


  gotResponse(data, textStatus, jqXHR) {
    this.setJwtToken(data.token);
    this.decode();
  }

}

export default JWT_Extender;

/*

$(function () {
    // VARIABLES =============================================================
    var TOKEN_KEY = "jwtToken"
    var $notLoggedIn = $("#notLoggedIn");
    var $loggedIn = $("#loggedIn").hide();
    var $loggedInBody = $("#loggedInBody");
    var $response = $("#response");
    var $login = $("#login");
    var $userInfo = $("#userInfo").hide();

    // FUNCTIONS =============================================================
    function getJwtToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    function setJwtToken(token) {
        localStorage.setItem(TOKEN_KEY, token);
    }

    function removeJwtToken() {
        localStorage.removeItem(TOKEN_KEY);
    }

    function doLogin(loginData) {
        $.ajax({
            url: "/auth",
            type: "POST",
            data: JSON.stringify(loginData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                setJwtToken(data.token);
                $login.hide();
                $notLoggedIn.hide();
                showTokenInformation();
                showUserInformation();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if (jqXHR.status === 401) {
                    $('#loginErrorModal')
                        .modal("show")
                        .find(".modal-body")
                        .empty()
                        .html("<p>Spring exception:<br>" + jqXHR.responseJSON.exception + "</p>");
                } else {
                    throw new Error("an unexpected error occured: " + errorThrown);
                }
            }
        });
    }

    function doLogout() {
        removeJwtToken();
        $login.show();
        $userInfo
            .hide()
            .find("#userInfoBody").empty();
        $loggedIn.hide();
        $loggedInBody.empty();
        $notLoggedIn.show();
    }

    function createAuthorizationTokenHeader() {
        var token = getJwtToken();
        if (token) {
            return {"Authorization": "Bearer " + token};
        } else {
            return {};
        }
    }

    function showUserInformation() {
        $.ajax({
            url: "/user",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: createAuthorizationTokenHeader(),
            success: function (data, textStatus, jqXHR) {
                var $userInfoBody = $userInfo.find("#userInfoBody");

                $userInfoBody.append($("<div>").text("Username: " + data.username));
                $userInfoBody.append($("<div>").text("Email: " + data.email));

                var $authorityList = $("<ul>");
                data.authorities.forEach(function (authorityItem) {
                    $authorityList.append($("<li>").text(authorityItem.authority));
                });
                var $authorities = $("<div>").text("Authorities:");
                $authorities.append($authorityList);

                $userInfoBody.append($authorities);
                $userInfo.show();
            }
        });
    }

    function showTokenInformation() {
        var jwtToken = getJwtToken();
        var decodedToken = jwt_decode(jwtToken);

        $loggedInBody.append($("<h4>").text("Token"));
        $loggedInBody.append($("<div>").text(jwtToken).css("word-break", "break-all"));
        $loggedInBody.append($("<h4>").text("Token claims"));

        var $table = $("<table>")
            .addClass("table table-striped");
        appendKeyValue($table, "sub", decodedToken.sub);
        appendKeyValue($table, "aud", decodedToken.aud);
        appendKeyValue($table, "iat", decodedToken.iat);
        appendKeyValue($table, "exp", decodedToken.exp);

        $loggedInBody.append($table);

        $loggedIn.show();
    }

    function appendKeyValue($table, key, value) {
        var $row = $("<tr>")
            .append($("<td>").text(key))
            .append($("<td>").text(value));
        $table.append($row);
    }

    function showResponse(statusCode, message) {
        $response
            .empty()
            .text("status code: " + statusCode + "\n-------------------------\n" + message);
    }

    // REGISTER EVENT LISTENERS =============================================================
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        var $form = $(this);
        var formData = {
            username: $form.find('input[name="username"]').val(),
            password: $form.find('input[name="password"]').val()
        };

        doLogin(formData);
    });

    $("#logoutButton").click(doLogout);

    $("#exampleServiceBtn").click(function () {
        $.ajax({
            url: "/persons",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: createAuthorizationTokenHeader(),
            success: function (data, textStatus, jqXHR) {
                showResponse(jqXHR.status, JSON.stringify(data));
            },
            error: function (jqXHR, textStatus, errorThrown) {
                showResponse(jqXHR.status, errorThrown);
            }
        });
    });

    $("#adminServiceBtn").click(function () {
        $.ajax({
            url: "/protected",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            headers: createAuthorizationTokenHeader(),
            success: function (data, textStatus, jqXHR) {
                showResponse(jqXHR.status, data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                showResponse(jqXHR.status, errorThrown);
            }
        });
    });

    $loggedIn.click(function () {
        $loggedIn
            .toggleClass("text-hidden")
            .toggleClass("text-shown");
    });

    // INITIAL CALLS =============================================================
    if (getJwtToken()) {
        $login.hide();
        $notLoggedIn.hide();
        showTokenInformation();
        showUserInformation();
    }
});*/
