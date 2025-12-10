(function propertiesbuilder(attr) {

    var props = {};

    // Determine authentication method: username/password or OAuth
    var auth = attr["authentication"] || "auth-user-pass";

    if (auth === "oauth") {
        // OAuth flow: Tableau puts the access token into ACCESSTOKEN
        // Property name "access_token" may need to be adjusted to what
        // your ClickHouse JDBC driver expects (e.g. accessToken / token).
        if (attr["ACCESSTOKEN"]) {
            props["access_token"] = attr["ACCESSTOKEN"];
        }

        // Optionally still pass username if it exists (depends on your backend)
        if (attr[connectionHelper.attributeUsername]) {
            props["user"] = attr[connectionHelper.attributeUsername];
        }

        // Do NOT set password in OAuth mode
    } else {
        // Classic username/password authentication
        props["user"] = attr[connectionHelper.attributeUsername];
        props["password"] = attr[connectionHelper.attributePassword];
    }

    // Common properties
    props["use_server_time_zone_for_dates"] = 1;
    props["socket_timeout"] = 300000;

    if (attr["v-timeout"] > "" && !isNaN(attr["v-timeout"])) {
        props["socket_timeout"] = attr["v-timeout"];
    }

    if (attr[connectionHelper.attributeSSLMode] == "require" ||
        attr[connectionHelper.attributePort] == "8443" ||
        attr[connectionHelper.attributePort] == "443") {

        props["ssl"] = "true";
        props["sslmode"] = "STRICT";
    }

    return props;
})
