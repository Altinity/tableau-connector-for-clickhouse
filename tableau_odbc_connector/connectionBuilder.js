(function dsbuilder(attr)
{
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
            .join("&");
    }

    var params = {};
    var protocol = "http";
    var sessionParameters = normalizeSessionParameters(attr["v-session-parameters"]);

    params["SERVER"] = attr[connectionHelper.attributeServer];
    params["PORT"] = attr[connectionHelper.attributePort];
    params["DATABASE"] = attr[connectionHelper.attributeDatabase];
    params["UID"] = attr[connectionHelper.attributeUsername];
    params["PWD"] = attr[connectionHelper.attributePassword];
    params["Timeout"] = "600";
    params["VerifyConnectionEarly"] = "on";
    params["HugeIntAsString"] = "on";

    if ( attr[connectionHelper.attributeSSLMode] == "require" || attr[connectionHelper.attributePort] == "8443" )
    {
        params["sslmode"] = "allow";
        protocol = "https";
    }

    if ( attr["v-timeout"] > "" && !isNaN(attr["v-timeout"]) )
    {
        params["Timeout"] = attr["v-timeout"];
    }

    if (sessionParameters) {
        params["Url"] = protocol + "://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/?" + sessionParameters;
    }

    var formattedParams = [];

    formattedParams.push(connectionHelper.formatKeyValuePair(driverLocator.keywordDriver, driverLocator.locateDriver(attr)));

    for (var key in params)
    {
        formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }

    return formattedParams;
})
