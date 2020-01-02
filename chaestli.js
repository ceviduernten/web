$(function(){
    function renderChaestlizettel(group) {
        // code to be executed
        $("#chaestli-nodata").hide();
        $("#chaestli-error").hide();
        $("#chaestli-result").hide();
        let url = "https://api.ceviduernten.ch/Appointments/" + group + "/next";
        $.get(url, function(data, status){
            if (status === "success" && data.statusCode === 200) {
                let result = data.data;
                if (result == null) {
                    $("#chaestli-nodata").show();
                } else {
                    let bla = new Date(result.date).toLocaleDateString();
                    let timeString = bla + ", " + result.time;
                    $("#data-time").text(timeString);
                    $("#data-location").text(result.location);
                    $("#data-infos").text(result.infos);
                    $("#chaestli-result").show();
                }
            } else {
                $("#chaestli-error").show();
            }
        });
    }
});