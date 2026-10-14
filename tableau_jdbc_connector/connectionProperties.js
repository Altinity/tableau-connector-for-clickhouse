(function propertiesbuilder(attr) {
    function normalizeSessionParameters(rawValue) {
        if (!rawValue) {
            return "";
        }

        var normalizedValue = rawValue.replace(/\r\n/g, "\n").trim();
        if (!normalizedValue) {
            return "";
        }

        return normalizedValue
            .split(/[\n,;&]+/)
            .map(function(entry) {
                return entry.trim();
            })
            .filter(function(entry) {
                return entry.length > 0;
            })
            .join(",");
    }

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

    var sessionParameters = normalizeSessionParameters(attr["v-session-parameters"]);
    if (sessionParameters) {
        props["custom_http_params"] = sessionParameters;
    }

    return props;
}
)
