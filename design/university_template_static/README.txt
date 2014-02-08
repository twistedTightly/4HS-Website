==============================
University Template
==============================
If you have any questions regarding the markup or implementation of these templates, please contact webdev@nd.edu.

==============================
Header h2
==============================
The h2 in #header will either need to be deleted or updated with the department name and url. To load the correct graphic for the text (since the theme is using image replacement to ensure the correct type treatment), the class on the h2 will need to be changed as well. The possible values are:
dept-arch /* School of Architecture */
dept-athl /* Athletics */
dept-buso /* Office of Business Operations */
dept-coal /* College of Arts and Letters */
dept-cosc /* College of Science */
dept-engr /* College of Engineering */
dept-evpo /* Office of the Executive Vice President */
dept-fyst /* First Year of Studies */
dept-genc /* Office of General Council */
dept-grad /* The Graduate School */
dept-hurs /* Office of Human Resources */
dept-invs /* Investment Office */
dept-mcob /* Mendoza College of Business */
dept-laws /* The Law School */
dept-ooit /* Office of Information Technology */
dept-opac /* Office of Public Affairs and Communications */
dept-ores /* Office of Research */
dept-pres /* Office of the President */
dept-prov /* Office of the Provost */
dept-staf /* Office of Student Affairs */
dept-urel /* Office of University Relations */
dept-vpor /* Office of the Vice President for Research */
dept-intr /* Office of Internationalization */
dept-spir /* Office of Strategic Planning and Institutional Research */
dept-acfs /* Office of Finance */
dept-fdao /* Facilities Design and Operations */
dept-auxo /* Auxiliary Operations */
dept-cams /* Campus Services */

==============================
Resource Paths
==============================
The CSS and JS in these templates are root-relative and will be modified depending on the environment in which they're used. If the location of the "stylesheets" directory is moved, then the mark image in both #header and #footer will need to be updated as it is currently pointing at "/stylesheets/images/ndmark300.png".

==============================
Search
==============================
Update the "as_sitesearch" value on all search forms. The value should be the url of
your site (ie mydomain.nd.edu). They are located in the header as #search-header of each document and in the body of error.html and search.html.

==============================
Changelog
==============================
2011-10-13 - Initial commit