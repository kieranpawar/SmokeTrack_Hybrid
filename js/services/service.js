/*
 * Service settings
 */
var smoketrack_db_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "57295c1be4b0a5ceda957e27"
}
var Facebook_Settings = {
    "client_id": "1730035460574948",
    "project_id": "da764cdb-3229-46d7-9f98-087c70a41728"
}

/*
 * Services
 */

var smoketrack_db_profile_query_service = new Apperyio.RestService({
    'url': '{database_url}/collections/profile',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': smoketrack_db_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var Facebook_MeService = new Apperyio.RestService({
    'url': 'https://graph.facebook.com/me',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': Facebook_Settings

    ,
    'defaultRequest': {
        "headers": {},
        "parameters": {
            "access_token": "{access_token}"
        },
        "body": null
    }
});

var smoketrack_db_cigarettes_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/cigarettes',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': smoketrack_db_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});
var GeolocationService = new Apperyio.GeolocationService({
    'defaultRequest': {
        "data": {
            "options": {
                "maximumAge": 3000,
                "timeout": 5000,
                "enableHighAccuracy": true,
                "watchPosition": false
            }
        }
    }
});

var smoketrack_db_profile_list_service = new Apperyio.RestService({
    'url': '{database_url}/collections/profile',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': smoketrack_db_settings

    ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}"
        },
        "parameters": {},
        "body": null
    }
});

var smoketrack_db_profile_update_service = new Apperyio.RestService({
    'url': '{database_url}/collections/profile/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': smoketrack_db_settings

    ,
    'defaultRequest': {
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
    }
});
var CameraService = new Apperyio.CameraService({
    'defaultRequest': {
        "data": {
            "quality": 80,
            "destinationType": "Data URL",
            "sourceType": "Camera",
            "allowEdit": true,
            "encodingType": "JPEG",
            "targetWidth": 1024,
            "targetHeight": 768
        }
    }
});