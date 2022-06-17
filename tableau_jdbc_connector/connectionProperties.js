(function propertiesbuilder(attr) {

    var props = {};
    props["user"] = attr[connectionHelper.attributeUsername];
    props["password"] = attr[connectionHelper.attributePassword];

    props["use_server_time_zone_for_dates"] = 1;
    props["use_server_time_zone_for_dates"] = 1;
    props["socket_timeout"] = 300000;

    if ( attr["v-timeout"] > "" && !isNaN(attr["v-timeout"]) )
    {
        props["socket_timeout"] = attr["v-timeout"];
    }

    if (attr[connectionHelper.attributeSSLMode] == "require" || attr[connectionHelper.attributePort] == "8443" || attr[connectionHelper.attributePort] == "443")
    {
        props["ssl"] = "true";
        props["sslmode"] = "STRICT";
    }

    return props;
}
)
