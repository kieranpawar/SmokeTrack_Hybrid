/*
 * JS for calculate generated by Appery.io
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

function calculate_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'calc': 'calculate_calc',
        'mobilelabel_42': 'calculate_mobilelabel_42',
        'mobilelabel_8': 'calculate_mobilelabel_8',
        'spacer_17': 'calculate_spacer_17',
        'mobilelabel_9': 'calculate_mobilelabel_9',
        'brandlist': 'calculate_brandlist',
        'brandlist-0': 'calculate_brandlist-0',
        'mobilelabel_12': 'calculate_mobilelabel_12',
        'cigAmount': 'calculate_cigAmount',
        'calculatechems': 'calculate_calculatechems',
        'spacer_18': 'calculate_spacer_18',
        'mobilelabel_15': 'calculate_mobilelabel_15',
        'mobilegrid_22': 'calculate_mobilegrid_22',
        'mobilegridcell_23': 'calculate_mobilegridcell_23',
        'mobilelabel_31': 'calculate_mobilelabel_31',
        'mobilegridcell_24': 'calculate_mobilegridcell_24',
        'mobilelabel_32': 'calculate_mobilelabel_32',
        'mobilegridcell_25': 'calculate_mobilegridcell_25',
        'mobilelabel_33': 'calculate_mobilelabel_33',
        'mobilegridcell_26': 'calculate_mobilegridcell_26',
        'tarAmount': 'calculate_tarAmount',
        'mobilegridcell_27': 'calculate_mobilegridcell_27',
        'mobilelabel_34': 'calculate_mobilelabel_34',
        'mobilegridcell_28': 'calculate_mobilegridcell_28',
        'nicotineAmount': 'calculate_nicotineAmount',
        'mobilegridcell_29': 'calculate_mobilegridcell_29',
        'mobilelabel_35': 'calculate_mobilelabel_35',
        'mobilegridcell_30': 'calculate_mobilegridcell_30',
        'coAmount': 'calculate_coAmount',
        'navbar1': 'calculate_navbar1',
        'mobilenavbaritem_3': 'calculate_mobilenavbaritem_3',
        'mobilenavbaritem_4': 'calculate_mobilenavbaritem_4',
        'mobilenavbaritem_5': 'calculate_mobilenavbaritem_5',
        'mobilenavbaritem_6': 'calculate_mobilenavbaritem_6'
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

    Apperyio.mappings["calculate_geolocation1_onsuccess_mapping_0"] = {
        "homeScreen": "calculate",
        "directions": []
    };

    Apperyio.mappings["calculate_geolocation1_onbeforesend_mapping_0"] = {
        "homeScreen": "calculate",
        "directions": [

        {

            "to_name": "geolocation1",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "data": {
                    "options": {
                        "maximumAge": 3000,
                        "timeout": 5000,
                        "enableHighAccuracy": true,
                        "watchPosition": false
                    }
                }
            },

            "mappings": []
        }

        ]
    };

    Apperyio.mappings["calculate_listbrands_onsuccess_mapping_0"] = {
        "homeScreen": "calculate",
        "directions": [

        {
            "from_name": "listbrands",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "calculate",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][0]['tar']",
                "target": "$['tarAmount:text']"

            },

            {

                "source": "$['body'][0]['nicotine']",
                "target": "$['nicotineAmount:text']"

            },

            {

                "source": "$['body'][0]['co']",
                "target": "$['coAmount:text']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["calculate_listbrands_onbeforesend_mapping_0"] = {
        "homeScreen": "calculate",
        "directions": [

        {

            "to_name": "listbrands",
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

    Apperyio.datasources = Apperyio.datasources || {};

    window.geolocation1 = Apperyio.datasources.geolocation1 = new Apperyio.DataSource(GeolocationService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["calculate_geolocation1_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["calculate_geolocation1_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    window.listbrands = Apperyio.datasources.listbrands = new Apperyio.DataSource(smoketrack_db_cigarettes_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["calculate_listbrands_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["calculate_listbrands_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'calculate';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var calculate_onLoad = function() {
            calculate_elementsExtraJS();

            Apperyio('calc').css('margin', 'auto');
            Apperyio('calc').css('display', 'block');

            calculate_deviceEvents();
            calculate_windowEvents();
            calculate_elementsEvents();
        };

    // screen window events


    function calculate_windowEvents() {

        $('#calculate').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#calculate').on({
            swipeleft: function(event) {
                Apperyio.navigateTo('track', {
                    transition: 'pop',
                    reverse: false
                });
            },
        });

    };

    // device events


    function calculate_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function calculate_elementsExtraJS() {
        // screen (calculate) extra code

        /* brandlist */

        $("#calculate_brandlist").parent().find("a.ui-btn").attr("tabindex", "8");

    };

    // screen elements handler


    function calculate_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#calculate_mobilecontainer [name="calculatechems"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) { //Retrieve the data from brand list
                    var brand = Apperyio('brandlist').val();

                    //Declare variables
                    //Brand Variables
                    var brandTar = 0,
                        brandNicotine = 0,
                        brandCO = 0;
                    //Output Totals
                    var tarTotal = 0,
                        nicotineTotal = 0,
                        coTotal = 0;
                    //Amount per day variable
                    var dailyAmount = Apperyio('cigAmount').val();

/*
      - SET VARIABLES OF EACH BRAND 
      - Use if statements to set each brand
      - Set the amount of tar for each brand in 'brandTar'
      - Set the amount of nictotine for each brand in 'brandNicotine'
      - Set the amount of Carbon Monoxide for each brand in 'brandCO'
    */

                    //B&H Gold
                    if (brand == "bhGold") {
                        brandTar = 10;
                        brandNicotine = 0.9;
                        brandCO = 10;
                    }

                    //B&H Silver
                    else if (brand == "bhSilver") {
                        brandTar = 8;
                        brandNicotine = 0.6;
                        brandCO = 9;

                    }

                    //B&H Menthol
                    else if (brand == "bhMenthol") {
                        brandTar = 8;
                        brandNicotine = 0.7;
                        brandCO = 8;

                    }

                    //Embassy
                    else if (brand == "embassy") {
                        brandTar = 10;
                        brandNicotine = 0.9;
                        brandCO = 10;

                    }

                    //Silkcut
                    else if (brand == "silkcut") {
                        brandTar = 5;
                        brandNicotine = 0.5;
                        brandCO = 5;

                    }

                    //Silkcut Silver
                    else if (brand == "silkcutSilver") {
                        brandTar = 1;
                        brandNicotine = 0.1;
                        brandCO = 1;
                    }

                    //Lambert and Butler
                    else if (brand == "lambert") {
                        brandTar = 10;
                        brandNicotine = 0.9;
                        brandCO = 10;
                    }

                    //Marlboro Red
                    else if (brand == "marlboroRed") {
                        brandTar = 10;
                        brandNicotine = 0.8;
                        brandCO = 10;
                    }

                    //Marlboro Gold
                    else if (brand == "marlboroGold") {
                        brandTar = 8;
                        brandNicotine = 0.6;
                        brandCO = 9;
                    }

                    //Marlboro Menthol
                    else if (brand == "marlboroMenthol") {
                        brandTar = 10;
                        brandNicotine = 0.8;
                        brandCO = 10;
                    }

                    //Mayfair
                    else if (brand == "mayfair") {
                        brandTar = 10;
                        brandNicotine = 0.8;
                        brandCO = 10;
                    }

                    //Sterling
                    else if (brand == "sterling") {
                        brandTar = 10;
                        brandNicotine = 0.8;
                        brandCO = 10;
                    }

                    //John Player Special
                    else if (brand == "jps") {
                        brandTar = 10;
                        brandNicotine = 0.8;
                        brandCO = 10;
                    }

                    //Pall Mall Red
                    else if (brand == "pallmallRed") {
                        brandTar = 10;
                        brandNicotine = 0.8;
                        brandCO = 10;
                    }

                    //Pall Mall Blue
                    else if (brand == "pallmallBlue") {
                        brandTar = 7;
                        brandNicotine = 0.6;
                        brandCO = 8;
                    }

                    //Camel Yellow
                    else if (brand == "camelYellow") {
                        brandTar = 10;
                        brandNicotine = 0.8;
                        brandCO = 10;
                    }

                    //Camel Blue
                    else if (brand == "camelBlue") {
                        brandTar = 8;
                        brandNicotine = 0.6;
                        brandCO = 9;
                    }

                    //L&M
                    else if (brand == "landm") {
                        brandTar = 10;
                        brandNicotine = 0.8;
                        brandCO = 10;
                    }

                    //Calculate the totals depending on the amount smoked per day
                    tarTotal = (brandTar * dailyAmount).toFixed(1);
                    nicotineTotal = (brandNicotine * dailyAmount).toFixed(1);
                    coTotal = (brandCO * dailyAmount).toFixed(1);

                    //Display the results in the correct labels
                    Apperyio('tarAmount').text(tarTotal + "mg");
                    Apperyio('nicotineAmount').text(nicotineTotal + "mg");
                    Apperyio('coAmount').text(coTotal + "mg");

                    //alert ("brand:"+ brand + "\n tar:" + brandTar + "\n nicotine:" + brandNicotine + "\n CO:" + brandCO + "\n \n tar total:" + tarTotal + "\n nicotine total:" + nicotineTotal + "\n CO total:" + coTotal);
                }
            },
        }, '#calculate_mobilecontainer [name="calculatechems"]');

        $(document).off("click", '#calculate_mobilefooter [name="mobilenavbaritem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('track', {
                        reverse: false
                    });

                }
            },
        }, '#calculate_mobilefooter [name="mobilenavbaritem_4"]');
        $(document).off("click", '#calculate_mobilefooter [name="mobilenavbaritem_5"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('get_help', {
                        reverse: false
                    });

                }
            },
        }, '#calculate_mobilefooter [name="mobilenavbaritem_5"]');
        $(document).off("click", '#calculate_mobilefooter [name="mobilenavbaritem_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('profile', {
                        reverse: false
                    });

                }
            },
        }, '#calculate_mobilefooter [name="mobilenavbaritem_6"]');

    };

    $(document).off("pagebeforeshow", "#calculate").on("pagebeforeshow", "#calculate", function(event, ui) {
        Apperyio.CurrentScreen = "calculate";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    calculate_onLoad();
};

$(document).off("pagecreate", "#calculate").on("pagecreate", "#calculate", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    calculate_js();
});