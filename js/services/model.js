/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "profile_firstname": new $a.LocalStorage("profile_firstname", "String"),

    "profile_age": new $a.LocalStorage("profile_age", "Number"),

    "profile_startamount": new $a.LocalStorage("profile_startamount", "Number"),

    "profile_currentamount": new $a.LocalStorage("profile_currentamount", "Number"),

    "profile_targetamount": new $a.LocalStorage("profile_targetamount", "Number"),

    "target_achieved": new $a.LocalStorage("target_achieved", "Boolean"),

    "profile_lastname": new $a.LocalStorage("profile_lastname", "String"),

    "access_token": new $a.LocalStorage("access_token", "String"),

    "profile_image": new $a.LocalStorage("profile_image", "String"),

    "test": new $a.LocalStorage("test", "String"),

    "password1": new $a.LocalStorage("password1", "String"),

    "access_token_0": new $a.LocalStorage("access_token_0", "String"),

    "email": new $a.LocalStorage("email", "String"),

    "secretquestion": new $a.LocalStorage("secretquestion", "String"),

    "secretanswer": new $a.LocalStorage("secretanswer", "String")
};