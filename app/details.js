/*
 * JS for details generated by Appery.io
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

function details_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_43': 'details_mobilebutton_43',
        'mobilelabel_2': 'details_mobilelabel_2',
        'mobilelabel_4': 'details_mobilelabel_4',
        'spacer_5': 'details_spacer_5',
        'mobilelabel_6': 'details_mobilelabel_6',
        'firstnamechange': 'details_firstnamechange',
        'mobilelabel_8': 'details_mobilelabel_8',
        'lastnamechange': 'details_lastnamechange',
        'mobilelabel_10': 'details_mobilelabel_10',
        'agechange': 'details_agechange',
        'spacer_18': 'details_spacer_18',
        'mobilelabel_12': 'details_mobilelabel_12',
        'amountbeforechange': 'details_amountbeforechange',
        'mobilelabel_14': 'details_mobilelabel_14',
        'amountnowchange': 'details_amountnowchange',
        'mobilelabel_16': 'details_mobilelabel_16',
        'amounttargetchange': 'details_amounttargetchange',
        'spacer_22': 'details_spacer_22',
        'mobilebutton_21': 'details_mobilebutton_21',
        'spacer_29': 'details_spacer_29',
        'mobilelabel_38': 'details_mobilelabel_38',
        'mobilelabel_39': 'details_mobilelabel_39',
        'mobilelabel_23': 'details_mobilelabel_23',
        'password1': 'details_password1',
        'mobilelabel_25': 'details_mobilelabel_25',
        'password2': 'details_password2',
        'mobilelabel_40': 'details_mobilelabel_40',
        'secretquestion': 'details_secretquestion',
        'mobilelabel_42': 'details_mobilelabel_42',
        'secretanswer': 'details_secretanswer',
        'setpassword': 'details_setpassword',
        'spacer_35': 'details_spacer_35',
        'mobilelabel_31': 'details_mobilelabel_31',
        'removepassword1': 'details_removepassword1',
        'removepassword2': 'details_removepassword2',
        'removepasswordbutton': 'details_removepasswordbutton'
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

    Apperyio.mappings["details_findrecord_onsuccess_mapping_0"] = {
        "homeScreen": "details",
        "directions": [

        {
            "from_name": "findrecord",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "details",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][0]['firstname']",
                "target": "$['firstnamechange:text']"

            },

            {

                "source": "$['body'][0]['lastname']",
                "target": "$['lastnamechange:text']"

            },

            {

                "source": "$['body'][0]['age']",
                "target": "$['agechange:text']"

            },

            {

                "source": "$['body'][0]['startamount']",
                "target": "$['amountbeforechange:text']"

            },

            {

                "source": "$['body'][0]['currentamount']",
                "target": "$['amountnowchange:text']"

            },

            {

                "source": "$['body'][0]['targetamount']",
                "target": "$['amounttargetchange:text']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["details_findrecord_onbeforesend_mapping_0"] = {
        "homeScreen": "details",
        "directions": [

        {

            "to_name": "findrecord",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {},
                "body": null
            },

            "mappings": []
        }

        ]
    };

    Apperyio.mappings["details_updaterecords_onsuccess_mapping_0"] = {
        "homeScreen": "details",
        "directions": []
    };

    Apperyio.mappings["details_updaterecords_onbeforesend_mapping_0"] = {
        "homeScreen": "details",
        "directions": [

        {
            "from_name": "details",
            "from_type": "UI",

            "to_name": "updaterecords",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}",
                    "Content-Type": "application/json"
                },
                "parameters": {},
                "body": {
                    "acl": {
                        "*": {
                            "write": true,
                            "read": true
                        }
                    }
                }
            },

            "mappings": [

            {

                "source": "$['firstnamechange:text']",
                "target": "$['body']['firstname']"

            },

            {

                "source": "$['lastnamechange:text']",
                "target": "$['body']['lastname']"

            },

            {

                "source": "$['agechange:text']",
                "target": "$['body']['age']"

            },

            {

                "source": "$['amountbeforechange:text']",
                "target": "$['body']['startamount']"

            },

            {

                "source": "$['amountnowchange:text']",
                "target": "$['body']['currentamount']"

            },

            {

                "source": "$['amounttargetchange:text']",
                "target": "$['body']['targetamount']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.findrecord = Apperyio.datasources.findrecord = new Apperyio.DataSource(smoketrack_db_profile_query_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["details_findrecord_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["details_findrecord_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.updaterecords = Apperyio.datasources.updaterecords = new Apperyio.DataSource(smoketrack_db_profile_update_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["details_updaterecords_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["details_updaterecords_onsuccess_mapping_0"]);
            Apperyio.navigateTo('profile', {
                reverse: false
            });
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'details';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var details_onLoad = function() {
            details_elementsExtraJS();

            try {
                $a.c15r("agechange", "set", "text", $a.storage["profile_age"].get("$"))
            } catch (e) {
                console.error(e)
            };
            try {
                $a.c15r("amountbeforechange", "set", "text", $a.storage["profile_startamount"].get("$"))
            } catch (e) {
                console.error(e)
            };
            try {
                $a.c15r("amounttargetchange", "set", "text", $a.storage["profile_targetamount"].get("$"))
            } catch (e) {
                console.error(e)
            };
            try {
                $a.c15r("amountnowchange", "set", "text", $a.storage["profile_currentamount"].get("$"))
            } catch (e) {
                console.error(e)
            };
            try {
                $a.c15r("firstnamechange", "set", "text", $a.storage["profile_firstname"].get("$"))
            } catch (e) {
                console.error(e)
            };
            try {
                $a.c15r("lastnamechange", "set", "text", $a.storage["profile_lastname"].get("$"))
            } catch (e) {
                console.error(e)
            };
            try {
                $a.c15r("secretquestion", "set", "text", $a.storage["secretquestion"].get("$"))
            } catch (e) {
                console.error(e)
            };
            try {
                $a.c15r("secretanswer", "set", "text", $a.storage["secretanswer"].get("$"))
            } catch (e) {
                console.error(e)
            };

            details_deviceEvents();
            details_windowEvents();
            details_elementsEvents();
        };

    // screen window events


    function details_windowEvents() {

        $('#details').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function details_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function details_elementsExtraJS() {
        // screen (details) extra code

    };

    // screen elements handler


    function details_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#details_mobileheader [name="mobilebutton_43"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('profile', {
                        reverse: false
                    });

                }
            },
        }, '#details_mobileheader [name="mobilebutton_43"]');

        $(document).off("click", '#details_mobilecontainer [name="mobilebutton_21"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        $a.storage["profile_firstname"].update("$", $a.c15r($a.UIHandler.resolveGeneratedComponent('firstnamechange', this), 'get', 'text'))
                    } catch (e) {
                        console.error(e)
                    };
                    try {
                        $a.storage["profile_lastname"].update("$", $a.c15r($a.UIHandler.resolveGeneratedComponent('lastnamechange', this), 'get', 'text'))
                    } catch (e) {
                        console.error(e)
                    };
                    try {
                        $a.storage["profile_age"].update("$", $a.c15r($a.UIHandler.resolveGeneratedComponent('agechange', this), 'get', 'text'))
                    } catch (e) {
                        console.error(e)
                    };
                    try {
                        $a.storage["profile_startamount"].update("$", $a.c15r($a.UIHandler.resolveGeneratedComponent('amountbeforechange', this), 'get', 'text'))
                    } catch (e) {
                        console.error(e)
                    };
                    try {
                        $a.storage["profile_currentamount"].update("$", $a.c15r($a.UIHandler.resolveGeneratedComponent('amountnowchange', this), 'get', 'text'))
                    } catch (e) {
                        console.error(e)
                    };
                    try {
                        $a.storage["profile_targetamount"].update("$", $a.c15r($a.UIHandler.resolveGeneratedComponent('amounttargetchange', this), 'get', 'text'))
                    } catch (e) {
                        console.error(e)
                    };
                    alert("Information has been updated");

                }
            },
        }, '#details_mobilecontainer [name="mobilebutton_21"]');

        $(document).off("click", '#details_mobilecontainer [name="setpassword"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var password1;
                    var password2;
                    var checkquestion;
                    var checkanswer;

                    password1 = Apperyio('password1').val();
                    password2 = Apperyio('password2').val();

                    checkquestion = Apperyio('secretquestion');
                    checkanswer = Apperyio('secretanswer');

                    if (password1 == password2) {
                        Apperyio.storage.password1.set(password1);
                        alert("New password has been set.");
                    } else {
                        alert("Sorry, passwords do not match.");
                    };
                    try {
                        $a.storage["secretquestion"].update("$", $a.c15r($a.UIHandler.resolveGeneratedComponent('secretquestion', this), 'get', 'text'))
                    } catch (e) {
                        console.error(e)
                    };
                    try {
                        $a.storage["secretanswer"].update("$", $a.c15r($a.UIHandler.resolveGeneratedComponent('secretanswer', this), 'get', 'text'))
                    } catch (e) {
                        console.error(e)
                    };

                }
            },
        }, '#details_mobilecontainer [name="setpassword"]');

        $(document).off("click", '#details_mobilecontainer [name="removepasswordbutton"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var password1;
                    var password2;

                    password1 = Apperyio('removepassword1').val();
                    password2 = Apperyio('removepassword2').val();

                    if (password1 == password2) {
                        Apperyio.storage.password1.set(null);
                        alert("Password has been removed");
                    } else {
                        alert("Sorry, passwords do not match");
                    };

                }
            },
        }, '#details_mobilecontainer [name="removepasswordbutton"]');

    };

    $(document).off("pagebeforeshow", "#details").on("pagebeforeshow", "#details", function(event, ui) {
        Apperyio.CurrentScreen = "details";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    details_onLoad();
};

$(document).off("pagecreate", "#details").on("pagecreate", "#details", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    details_js();
});