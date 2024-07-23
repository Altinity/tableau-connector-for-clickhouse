# Altinity Tableau Connector for ClickHouse®

This connector is a Tableau extension that improves compatibility between Tableau and ClickHouse. The connector gives users full access to Tableau data modeling and exploration features on ClickHouse data. Connector is extension that still needs database driver to comunicate with ClickHouse. Tableau does support 2 driver types: ODBC and JDBC. So there are 2 versions of this connector that are based on these protocols. Decision which one to use should be based on what operating system you use to run Tableau Dekstop (or Server). Windows platform has good support of ODBC protocol and its much easier to install ClickHouse ODBC driver on Windows. So if you use Windows then its better to go with ODBC version. If you run Tableau Desktop on Mac or want that your Tableau dashboards work on any platform (Windows, MacOS, Linux, Tableau Cloud) - you should use JDBC connector.

### Documentation
For official documentation on installing and use of the connector, please refer to the [Altinity Tableau Documentation](https://docs.altinity.com/integrations/clickhouse-and-tableau/). Or you can follow the directions shown below, which assume you understand how ODBC/JDBC and Tableau connectors work.

### Pre-Requisites for JDBC version
Before installing the Altinity JDBC for ClickHouse with Tableau Desktop/Server, the following pre-requisites must be installed:

 - Tableau Desktop (or Server) installed. Version 2020.2 or above is required. Supported platforms: Microsoft Windows, MacOS, Linux.

### How to install JDBC version with Tableau Dekstop
1. Download the Clickhouse JDBC Driver from [Releases page](https://github.com/ClickHouse/clickhouse-jdbc/releases) and place the file in the following location based on your operating system:
- macOS: ~/Library/Tableau/Drivers
- Windows: C:\Program Files\Tableau\Drivers
If the folder doesn’t exist then you need to create it.
2. Download the latest JDBC connector file from  [Releases](https://github.com/Altinity/tableau-connector-for-clickhouse/releases) and place it in:
- macOS: ~/Documents/My Tableau Repository/Connectors
- Windows: C:\Users\[Windows User]\Documents\My Tableau Repository\Connectors
3. Restart Tableau Desktop and you should be able to see new connection type "**Altinity JDBC for ClickHouse by Altinity In**c"

### How to install JDBC version with Tableau Server
1. Download the Clickhouse JDBC Driver from [Releases page](https://github.com/ClickHouse/clickhouse-jdbc/releases) and place the file in the following location based on your operating system:
- Windows: C:\Program Files\Tableau\Drivers
- Linux: /opt/tableau/tableau_driver/jdbc
If this folder doesn’t exist then you need to create it. Also check that Tableau has access to this directory
Here are sample commands for Linux:
```bash
    sudo mkdir -p /opt/tableau/tableau_driver/jdbc
    sudo cp [/path/to/download driver file name] /opt/tableau/tableau_driver/jdbc
    sudo chmod 755 /opt/tableau/tableau_driver/jdbc/[driver file name].jar
```
2. Download the latest JDBC connector file [Releases](https://github.com/Altinity/tableau-connector-for-clickhouse/releases) and place it in:
    Windows: C:\Program Files\Tableau\Connectors
    Linux: /opt/tableau/connectors
3.  Restart Tableau Server. Just run the command “tsm restart”. It will take some time, usually less than 10 mins. If you have more than one instance of Tableau Server you need to repeat steps 1-3 on each node.
4. Check that Tableau Server has “Altinity JDBC for ClickHouse” in supported connections.

### How to use JDBC version
After the connector is successfully installed, open Tableau Desktop.

1. You should see a new connection type - **Altinity JDBC for ClickHouse by Altinity Inc**.
2. Just enter credentials in the dialog window.
3. Click "Sign in" and you should be able to see list of available databases.


### Pre-Requisites for ODBC version
Before installing the Altinity Tableau Connector for ClickHouse with Tableau Desktop, the following pre-requisites must be installed:

 - Tableau Desktop (or Server) installed for Microsoft Windows. Version 2020.2 or above is required.
 - The clickhouse-odbc driver version 1.1.9 and above.
 - A Tableau account to access the Extension gallery. (Required in future)
 
Instructions on how to install the **clickhouse-odbc** driver are available  from the [clickhouse-odbc](https://github.com/ClickHouse/clickhouse-odbc) Github repository. A Windows installer is available on the clickhouse-odbc [Releases](https://github.com/ClickHouse/clickhouse-odbc/releases) page.

### How to install ODBC version

This connector is available in [Tableau Extension Gallery](https://exchange.tableau.com/products/604). You could install it directly from there directly in Tableau Desktop. Just find it in list of avaialble connectors and click install.

Or you could download connector file from release page (check for ODBC in filename) and copy it into "C:\Users\[Windows User]\Documents\My Tableau Repository\Connectors" directory.
Then restart Tableu Desktop (or Server) and you should be able to see new connection type "Altinity ODBC for ClickHouse"

### How to use ODBC version
After the connector is successfully installed, open Tableau Desktop. 

1. You should see a new connection type - **Altinity ODBC for ClickHouse by Altinity Inc**.
2. Just enter credentials in the dialog window.
3. Enter this query "**SELECT version();**" into Initial SQL tab to verify that connection was established successfully and click "Sign in".

**You dont need to create an ODBC DSN!** The connection credentials that you entered in dialog window will be used by connector directly.
