5.2.9-SNAPSHOT / WIP
==================

5.2.8 / 2025-03-31
==================

5.2.7 / 2025-01-13
==================
Improvements:
* [SELV3-793](https://openlmis.atlassian.net/browse/SELV3-793): Use EXTERNAL_DOMAINS env variable and dynamically include domains in csp

5.2.6 / 2024-10-31
==================
* [OIS-22](https://openlmis.atlassian.net/browse/OIS-22): Implemented automatic page direction change, after switching language to the RTL based.
* [OIS-24](https://openlmis.atlassian.net/browse/OIS-24): Adjusted all components styles to support RTL
* [OIS-50](https://openlmis.atlassian.net/browse/OIS-50): Added security headers to the index.html file

5.2.5 / 2023-11-07
==================

5.2.4 / 2023-06-26
==================
Bug fixes:
* [OLMIS-7772](https://openlmis.atlassian.net/browse/OLMIS-7772): Fix issues with new Chrome popover functionality
* [OLMIS-7998](https://openlmis.atlassian.net/browse/OLMIS-7998): Added Superset address to Content-Security-Policy header

5.2.3 / 2023-04-05
==================

5.2.2 / 2022-10-07
==================

Improvements:
* [MW-1137](https://openlmis.atlassian.net/browse/MW-1137): Refactor menu creation and main component for React pages.

5.2.0 / 2021-10-28
==================

Improvements:
* [OLMIS-7405](https://openlmis.atlassian.net/browse/OLMIS-7405): Minimize difference between uat Mobile UI and demo-v3 Mobile UI servers
* [OLMIS-7342](https://openlmis.atlassian.net/browse/OLMIS-7342): Create navigation bar and make it responsive.
* [OLMIS-7321](https://openlmis.atlassian.net/browse/OLMIS-7321): Improved the home page screen to be responsive with standard breakpoints.
* [OLMIS-7314](https://openlmis.atlassian.net/browse/OLMIS-7314): Update scss files to enable webpack build.
* [OLMIS-7379](https://openlmis.atlassian.net/browse/OLMIS-7379): Add support for viewport
* [OLMIS-7315](https://openlmis.atlassian.net/browse/OLMIS-7315): Add manifest file to the header.

5.1.9 / 2021-05-27
==================

Improvements:
* Updated dev-ui version to 9.0.2.
* Updated ui-components version to 7.2.5.
* Updated auth-ui version to 6.2.6.

5.1.8 / 2020-11-17
==================

Improvements:
* Updated ui-components version to 7.2.4.
* Updated auth-ui version to 6.2.5.

5.1.7 / 2020-05-12
==================

Improvements:
* Updated ui-components version to 7.2.3.
* Updated auth-ui version to 6.2.4.

5.1.6 / 2020-04-14
==================

Improvements:
* Updated ui-components version to 7.2.2.
* Updated auth-ui version to 6.2.3.

5.1.5 / 2019-12-19
==================

Improvements:
* Updated ui-components version to 7.2.1.
* Updated auth-ui version to 6.2.2.

5.1.4 / 2019-10-17
==================

Improvements:
* Updated dev-ui version to 9.0.1.
* Updated ui-components version to 7.2.0.
* Updated auth-ui version to 6.2.1.

5.1.3 / 2019-05-27
==================

Bug fixes:
* [OLMIS-5665](https://openlmis.atlassian.net/browse/OLMIS-5665): Added no-translate to disable Google translations.
* [OLMIS-6330](https://openlmis.atlassian.net/browse/OLMIS-6330): fixed trigerring reference-ui build.

5.1.2 / 2018-12-12
==================

Improvements:
* [OLMIS-3696](https://openlmis.atlassian.net/browse/OLMIS-3696): Added dependency and development dependency locking.
* [OLMIS-5500](https://openlmis.atlassian.net/browse/OLMIS-5500): Added template for a flex page.

Bug fixes:
* [OLMIS-5665](https://openlmis.atlassian.net/browse/OLMIS-5665): Added no-translate to disable Google translations.

5.1.1 / 2018-08-16
==================

Improvements:
* [OLMIS-4745](https://openlmis.atlassian.net/browse/OLMIS-4745): Added Jenkinsfile.
* [OLMIS-4732](https://openlmis.atlassian.net/browse/OLMIS-4732): Added role assignments tables to the User Profile screen.
* [OLMIS-4795](https://openlmis.atlassian.net/browse/OLMIS-4795): Updated dev-ui to version 8.
* [OLMIS-4813](https://openlmis.atlassian.net/browse/OLMIS-4813): Updated ui-components to version 6.0.0.

5.1.0 / 2018-04-24
==================

New features added in a backwards compatible manner:
* [OLMIS-3108:](https://openlmis.atlassian.net/browse/OLMIS-3108) Updated to use dev-ui v7 transifex build process
* [OLMIS-3166:](https://openlmis.atlassian.net/browse/OLMIS-3166) Added openlmis-app-cache component to the header

Bug fixes:
* [OLMIS-4187](https://openlmis.atlassian.net/browse/OLMIS-4187): Added reload on state using breadcrumbs.

5.0.3 / 2017-11-09
======================

New features:
* [OLMIS-2956:](https://openlmis.atlassian.net/browse/OLMIS-2956) Added loadingService with $stateChangeStart interceptor

Improvements:
* [OLMIS-3303:](https://openlmis.atlassian.net/browse/OLMIS-3303) Added warning for users with Javascript disabled
* Updated dev-ui version to 6.

5.0.2 / 2017-09-01
==================

New features:
* [OLMIS-2543:](https://openlmis.atlassian.net/browse/OLMIS-2543) Added interceptor for displaying
server errors

5.0.1 / 2017-05-26
==================

Bug fixes:
* [OLMIS-2428:](https://openlmis.atlassian.net/browse/OLMIS-2428) Fixed missing error message for 500 error modal

5.0.0 / 2017-05-08
==================

Compatibility breaking changes:

* [OLMIS-2107:](https://openlmis.atlassian.net/browse/OLMIS-2107) Add breadcrumbs to top of page navigation
  * This change requires modification of all the states due to adding a main state.

Dev and tooling updates made in a backwards-compatible manner:

* [OLMIS-1609:](https://openlmis.atlassian.net/browse/OLMIS-1609) UI i18N message strings are not standardized
* [OLMIS-1853:](https://openlmis.atlassian.net/browse/OLMIS-1853) Separate push and pull Transifex tasks in build
  * Migrated to dev-ui v3.
