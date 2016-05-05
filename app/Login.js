/*
 * JS for Login generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'da764cdb-3229-46d7-9f98-087c70a41728';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Facebook_Login",
    "location": "Facebook_Login.html"
}, {
    "name": "get_help",
    "location": "get_help.html"
}, {
    "name": "Facebook_Me",
    "location": "Facebook_Me.html"
}, {
    "name": "track",
    "location": "track.html"
}, {
    "name": "Login",
    "location": "Login.html"
}, {
    "name": "forgotpassword",
    "location": "forgotpassword.html"
}, {
    "name": "details",
    "location": "details.html"
}, {
    "name": "profile",
    "location": "profile.html"
}, {
    "name": "calculate",
    "location": "calculate.html"
}];

function Login_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_2': 'Login_mobilelabel_2',
        'spacer_4': 'Login_spacer_4',
        'mobilelabel_3': 'Login_mobilelabel_3',
        'password': 'Login_password',
        'login': 'Login_login',
        'spacer_10': 'Login_spacer_10',
        'mobilebutton_8': 'Login_mobilebutton_8'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'Login';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Login_onLoad = function() {
            Login_elementsExtraJS();

            var password;
            password = Apperyio.storage.password1.get();

            if (password === "null") {
                alert("You have not set a password \n \n To set a password, go to your profile and edit details.");
                Apperyio.navigateTo('calculate', {
                    transition: 'pop'
                });
            };

            Login_deviceEvents();
            Login_windowEvents();
            Login_elementsEvents();
        };

    // screen window events


    function Login_windowEvents() {

        $('#Login').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Login_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Login_elementsExtraJS() {
        // screen (Login) extra code

    };

    // screen elements handler


    function Login_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Login_mobilecontainer [name="login"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var password;
                    var passwordcheck;
                    password = Apperyio.storage.password1.get();
                    passwordcheck = Apperyio('password').val();

                    if (password == passwordcheck) {
                        Apperyio.navigateTo('calculate', {
                            transition: 'pop'
                        });
                    } else if (password != passwordcheck) {
                        alert("Sorry, wrong password. \n Please try again.");
                    }

                    ;

                }
            },
        }, '#Login_mobilecontainer [name="login"]');

        $(document).off("click", '#Login_mobilecontainer [name="mobilebutton_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var secretanswer, answercheck;

                    secretanswer = Apperyio.storage.secretanswer.get();
                    //alert(secretanswer);
                    while (secretanswer != answercheck) {
                        answercheck = prompt("Please answer your secret question to continue \n \n Secret Question: \n" + Apperyio.storage.secretquestion.get());

                        if (answercheck === null) {
                            return;
                        }
                    };
                    Apperyio.navigateTo('forgotpassword', {
                        reverse: false
                    });

                }
            },
        }, '#Login_mobilecontainer [name="mobilebutton_8"]');

    };

    $(document).off("pagebeforeshow", "#Login").on("pagebeforeshow", "#Login", function(event, ui) {
        Apperyio.CurrentScreen = "Login";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Login_onLoad();
};

$(document).off("pagecreate", "#Login").on("pagecreate", "#Login", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Login_js();
});