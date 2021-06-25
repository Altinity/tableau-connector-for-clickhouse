# Tableau connector to ClickHouse using ODBC driver

This connector is a Tableau extension that improves compatibility between Tableau and ClickHouse. The connector gives users full access to Tableau data modeling and exploration features on ClickHouse data. 

### Documentation
For official documentation on installing and use of the connector, please refer to the [Altinity Tableau Documentation](https://docs.altinity.com/integrations/clickhouse-and-tableau/). Or you can follow the directions shown below, which assume you understand how ODBC and Tableau connectors work. 

### Pre-Requisites
Before installing the ClickHouse connector with Tableau Desktop, the following pre-requisites must be installed:

 - Tableau Desktop installed for Microsoft Windows or Apple OS X. Version 2020.2 or above is required.
 - The clickhouse-odbc driver version 1.1.9 and above.
 - A Tableau account to access the Extension gallery. (Required in future)
 
Instructions on how to install the **clickhouse-odbc** driver are available  from the [clickhouse-odbc](https://github.com/ClickHouse/clickhouse-odbc) Github repository. A Windows installer is available on the clickhouse-odbc [Releases](https://github.com/ClickHouse/clickhouse-odbc/releases) page.

### How to install

In future this connector will be available in [Tableau Extension Gallery](https://extensiongallery.tableau.com/connectors?version=2021.1). You will be able to install it directly from there.

For now, you must install the connector using Tableau developer mode ( procedure described [here](https://tableau.github.io/connector-plugin-sdk/docs/run-taco#run-your-under-development-connector)).

Just checkout( or download) connector code. Locate the tableau_odbc_connector and move it to a directory like TableauConnectors. Add a command line argument to direct Tableau Desktop to the folder that contains **tableau_odbc_connector** folder with connector sources. Here is an example. 
```
"C:\Program Files\Tableau\Tableau 2021.2\bin\tableau.exe" -DConnectPluginsPath=C:\Users\someuser\Documents\TableauConnectors
```

### How to use
After the connector is successfully installed, open Tableau Desktop. 

1. You should see a new connection type - **ClickHouse by Altinity Inc**. 
2. Just enter credentials in the dialog window.
3. Enter this query "**SELECT version();**" into Initial SQL tab to verify that connection was established successfully and click "Sign in".

You dont need to create an ODBC DSN. The connection credentials that you entered in dialog window will be used by connector directly.
