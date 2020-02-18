$(document).ready(function(){
    // $('.box_info').hide();
    
    $('.search').click(function(){
        // $('.box_info').show();
        var url= "http://api.openweathermap.org/data/2.5/weather?q="+$('input:text').val()+"&appid=82f1e8483d8b0d1caf10816e7be413df";
        console.log(url);
        $.get(url, function(res){
            $('#temp').attr('value',Math.floor(res.main.temp-273)+"°C");
            $('#feels').attr('value',Math.floor(res.main.feels_like-273)+"°C");
            $('#temp_max').attr('value',Math.floor(res.main.temp_max-273)+"°C");
            $('#temp_min').attr('value',Math.floor(res.main.temp_min-273)+"°C");
            // $('#feels').attr('value',res.main.feels_like);
            console.log(res);
            console.log(res.main.temp);
        },'json');
        return false
    })

});