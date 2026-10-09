# Third-Party License Attribution

This file lists third-party software incorporated into the source of
`Altinity/tableau-connector-for-clickhouse`, with SPDX license identifiers.

The inventory was audited against repository `main` at commit
`2d32a5fe8c7e14717d705b9ff7bd757df8af28f5`.

The connector repository contains no package-manager manifest and no vendored
JAR, DLL, shared library, Node, Python, Go, or other third-party binary/library
directory. The third-party source identified in the connector itself is derived
from the Tableau Connector Plugin SDK sample connector components. In
particular, the dialect/function-map structure and resolver/connection-builder
patterns correspond to Tableau SDK sample files. The SDK is licensed under MIT.

The main project license is Apache-2.0; see [`LICENSE`](LICENSE).

## Summary

| License | Packages |
|---------|----------|
| MIT | 1 |

**Total packages:** 1

## Packages

| Package | License | License file |
|---------|---------|--------------|
| `tableau/connector-plugin-sdk@71f076d57b9c885d41fccc6bafb52cdc5cf2ca7c` | MIT | [LICENSE](https://github.com/tableau/connector-plugin-sdk/blob/71f076d57b9c885d41fccc6bafb52cdc5cf2ca7c/LICENSE) |

## External runtime prerequisites not bundled with this connector

The following software is required or referenced by the connector, but is
installed separately by the user or supplied by Tableau. It is **not bundled in
this repository and is not counted in the package total above**.

| Component | Relationship | License / status | Source |
|-----------|--------------|------------------|--------|
| ClickHouse JDBC driver (`ClickHouse/clickhouse-java`, formerly `clickhouse-jdbc`) | The JDBC connector points users to the upstream driver release page. The connector does not pin or bundle a driver version. | Apache-2.0 | https://github.com/ClickHouse/clickhouse-java |
| ClickHouse ODBC driver (`ClickHouse/clickhouse-odbc`) | The ODBC connector resolves an externally installed driver; `manifest.xml` requires at least driver version `1.1.10.25734`. | Apache-2.0 | https://github.com/ClickHouse/clickhouse-odbc |
| Tableau Desktop / Tableau Server | Host application/runtime for `.taco` connectors; not redistributed by this repository. | Proprietary commercial software; outside this open-source notice inventory. | https://www.tableau.com/ |

If a future release starts embedding or redistributing either ClickHouse driver,
its complete transitive dependency/license inventory must be added here and to
the CSV before release.

## Tableau Connector Plugin SDK — MIT License

The connector incorporates/adapts sample connector material from Tableau's
Connector Plugin SDK. The following MIT notice is retained to satisfy the
attribution condition for copies or substantial portions of that material.

```text
MIT License

Copyright (c) 2018 Tableau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
