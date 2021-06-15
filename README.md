# clickhouse-tableau-connector-odbc
Tableau connector to ClickHouse using ODBC driver

This connector is Tableau extension that improves compatibility between  Tableau and ClickHouse.

**Pre-Requisites**
Before installing the ClickHouse connector with Tableau Desktop, the following pre-requisites must be installed:

 - Tableau Desktop installed for Microsoft Windows or Apple OS X. Version 2020.2 or above is required.
 - The clickhouse-odbc driver version 1.1.9 and above.
 - A Tableau account to access their Extension gallery.

Instructions on how to install the **clickhouse-odbc** driver are available  from the [clickhouse-odbc](https://github.com/ClickHouse/clickhouse-odbc) Github repository. A Windows installer is available on the clickhouse-odbc [Releases](https://github.com/ClickHouse/clickhouse-odbc/releases) page.

#### How to install

Soon this connector will be available in [Tableau Extension Gallery](https://extensiongallery.tableau.com/connectors?version=2021.1) and you could install it directly from there.
Before that you could install connector using Tableau developer mode ( procedure described [here](https://tableau.github.io/connector-plugin-sdk/docs/run-taco#run-your-under-development-connector)).
Just checkout( or download) connector code and add command line argument to Tableau Desktop to folder that contains **tableau_odbc_connector** folder with connector sources.

#### How to use
After connector successfully installed open Tableau Desktop and you should see new connection type - **ClickHouse by Altinity Inc**. Just enter credentials to dialog window,  enter this query "**SELECT version();**" into Initial SQL tab ( it will help to verify that connection was established successfully) and click "Sign in".;
You dont need to create ODBC DSN, connection credentials that you entered in dialog window will be used by connector directly.
