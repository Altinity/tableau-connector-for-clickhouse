(function dsbuilder(attr)
{
    var params = {};

    params["SERVER"] = attr[connectionHelper.attributeServer];
    params["PORT"] = attr[connectionHelper.attributePort];
    params["DATABASE"] = attr[connectionHelper.attributeDatabase];
    params["UID"] = attr[connectionHelper.attributeUsername];
    params["PWD"] = attr[connectionHelper.attributePassword];
    params["BOOLSASCHAR"] = "0";
    params["LFCONVERSION"] = "0";
    params["UseDeclareFetch"] = "1";
    params["Fetch"] = "2048";
    params["Timeout"] = "300";

    if (attr[connectionHelper.attributeSSLMode] == "require")
    {
        params["sslmode"] = "require";
        params["CALocation"] = "/usr/local/etc/openssl@1.1/cert.pem";
    }

    var formattedParams = [];

    formattedParams.push(connectionHelper.formatKeyValuePair(driverLocator.keywordDriver, driverLocator.locateDriver(attr)));

    for (var key in params)
    {
        formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }

    return formattedParams;
})
