(function dsbuilder(attr)
{
    var params = {};

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
    }

    if ( attr["timeout"] > "" && !isNaN(attr["timeout"]) )
    {
        params["Timeout"] = attr["timeout"];
    }

    var formattedParams = [];

    formattedParams.push(connectionHelper.formatKeyValuePair(driverLocator.keywordDriver, driverLocator.locateDriver(attr)));

    for (var key in params)
    {
        formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }

    return formattedParams;
})
