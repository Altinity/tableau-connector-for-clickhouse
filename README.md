# Altinity Tableau Connector for ClickHouse®

This connector is a Tableau extension that provides connectivity between Tableau and ClickHouse. The connector gives users full access to Tableau's data modeling and exploration features on ClickHouse data. However, the connector still needs a database driver to comunicate with ClickHouse. Tableau supports 2 driver types: ODBC and JDBC. For that reason there are 2 versions of this connector based on the two protocols. Which one you should use depends on the operating system you use to run Tableau Dekstop (or Server). The Windows platform has good support for ODBC protocol, so it's much easier to install the ClickHouse ODBC driver on Windows. On the other hand, if you run Tableau Desktop on a Mac or want your Tableau dashboards to work on any platform (Windows, MacOS, Linux, Tableau Cloud), use the JDBC connector.

## Documentation
The directions below assume you understand how ODBC/JDBC and Tableau connectors work. For complete information, see the following resources at clickhouse.com: 

* [The complete JDBC driver documentation](https://clickhouse.com/docs/en/integrations/java#jdbc-driver)
* [The README from the ODBC driver\'s repo](https://github.com/ClickHouse/clickhouse-odbc?tab=readme-ov-file#odbc-driver-for-clickhouse--)

### Pre-Requisites for the JDBC version
Before using the Altinity Tableau Connector for ClickHouse, you must install Tableau Desktop (or Server) version 2020.2 or above. Supported platforms are Windows, MacOS, and Linux.

### How to install the JDBC version with Tableau Dekstop
1. Download the Clickhouse JDBC Driver from [the ClickHouse JDBC driver releases page](https://github.com/ClickHouse/clickhouse-jdbc/releases) and place the file in the following location based on your operating system:
- macOS: `~/Library/Tableau/Drivers`
- Windows: `C:\Program Files\Tableau\Drivers`
  
If the folder doesn’t exist, you need to create it.

2. Download the latest JDBC connector file from [the Altinity Tableau Connector for ClickHouse releases page](https://github.com/Altinity/tableau-connector-for-clickhouse/releases) and place it in the following location based on your operating system:
- macOS: `~/Documents/My Tableau Repository/Connectors`
- Windows: `C:\Users\[Windows User]\Documents\My Tableau Repository\Connectors`
3. Restart Tableau Desktop and you should be able to see the connection type **Altinity JDBC for ClickHouse by Altinity Inc**.

### How to install the JDBC version with Tableau Server
1. Download the Clickhouse JDBC Driver from [the ClickHouse JDBC driver releases page](https://github.com/ClickHouse/clickhouse-jdbc/releases) and place the file in the following location based on your operating system:

- Windows: `C:\Program Files\Tableau\Drivers`
- Linux: `/opt/tableau/tableau_driver/jdbc`

If this folder doesn’t exist, you need to create it. 

Also check that Tableau has access to this directory. Here are sample commands for Linux:
```bash
    sudo mkdir -p /opt/tableau/tableau_driver/jdbc
    sudo cp [/path/to/download driver file name] /opt/tableau/tableau_driver/jdbc
    sudo chmod 755 /opt/tableau/tableau_driver/jdbc/[driver file name].jar
```
2. Download the latest JDBC connector file from [the Altinity Tableau Connector for ClickHouse releases page](https://github.com/Altinity/tableau-connector-for-clickhouse/releases) and place it in:
   - Windows: `C:\Program Files\Tableau\Connectors`
   - Linux: `/opt/tableau/connectors`
4.  Restart the Tableau Server and run the command `tsm restart`. It will take some time, usually less than 10 mins. If you have more than one instance of Tableau Server you need to repeat steps 1-3 on each node.
5. Check that the Tableau Server has **Altinity JDBC for ClickHouse** in the list of supported connections.

### How to use the JDBC version
After the connector is successfully installed, open Tableau Desktop.

1. You should see a new connection type - **Altinity JDBC for ClickHouse by Altinity Inc**.
2. Enter your credentials in the dialog window.
3. Click "Sign in" and you should see the list of available databases.


### Pre-Requisites for the ODBC version

Before installing the Altinity Tableau Connector for ClickHouse with Tableau Desktop, the following pre-requisites must be installed:

 - Tableau Desktop (or Server) installed for Microsoft Windows. Version 2020.2 or above is required.
 - The clickhouse-odbc driver version 1.1.9 or above.
 - A Tableau account to access the Extension gallery. (Required in future)
 
Instructions on how to install the **clickhouse-odbc** driver are available  from the [clickhouse-odbc](https://github.com/ClickHouse/clickhouse-odbc?tab=readme-ov-file#installation) Github repository. A Windows installer is available on [the clickhouse-odbc releases page](https://github.com/ClickHouse/clickhouse-odbc/releases).

### How to install the ODBC version

This connector is available in [the Tableau Extension Gallery](https://exchange.tableau.com/products/604). You can install it directly from there directly in Tableau Desktop. Just find it in list of avaialble connectors and click Install.

You can also download the connector file from the release page (check for ODBC in filename) and copy it into the `C:\Users\[Windows User]\Documents\My Tableau Repository\Connectors` directory.
Then restart Tableu Desktop (or Server) and you should see the new connection type **Altinity ODBC for ClickHouse**.

### How to use the ODBC version
After the connector is successfully installed, open Tableau Desktop. 

1. You should see a new connection type - **Altinity ODBC for ClickHouse by Altinity Inc**.
2. Enter your credentials in the dialog window.
3. Enter the query `SELECT version();` into the Initial SQL tab to verify that connection was established successfully and click **Sign in**.

**You dont need to create an ODBC DSN!** The connection credentials that you entered in dialog window will be used by the connector directly.
