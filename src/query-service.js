export const endpoint = "https://endpoint.mint.isi.edu/ds/query";
export const endpointQuoted = encodeURIComponent(endpoint);
export const host = "https://query.mint.isi.edu/api/mintproject/MINT-ModelCatalogQueries";

/**
 * Get the uri model by label
 * @param label
 * @returns {string}
 */
export function queryModel(label){
    var model_iri = "";
    let qt = `${host}/getModel?endpoint=${endpointQuoted}`;
    let query = qt + "&label=" + label;
    $.ajax({
        url: query,
        type: "GET",
        cache: false,
        timeout: 5000,
        async: false,
        success: function(data) {
            if (data["results"]["bindings"].length > 0)
                model_iri = data["results"]["bindings"][0]["model"]["value"];
        },
        error: function(jqXHR, exception) {
            var msg = '';
            if (jqXHR.status === 0) {
                msg = 'Not connected.\n Verify Network.';
            }
            else if (jqXHR.status == 404) {
                msg = 'Requested page not found. [404]';
            }
            else if (jqXHR.status == 500) {
                msg = 'Internal Server Error [500].';
            }
            else if (exception === 'parsererror') {
                msg = 'Requested JSON parse failed.';
            }
            else if (exception === 'timeout') {
                msg = 'Time out error.';
            }
            else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            }
            else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
        }
    });
    return model_iri
}