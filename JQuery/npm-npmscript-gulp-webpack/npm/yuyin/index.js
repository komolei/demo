// #! /usr/bin/env node

// var axios = require("../clcweather/node_modules/axios");
// var tok = "grant_type=client_credentials&" +
//     "clinet_id=eXSAhUDxx7TGLg15ZexjQKAoKarhZwNr" +
//     "clinet_secret=2INPrDQNsn0wLU9I8OGq3DrKy33iHGzk";
// var q = process.argv[2];
// // var url = "http://tsn.baidu.com/text2audio?tex=apple&lan=zh&cuid=00000000000000E0&ctp=1&tok=" +
// //     tok
// // +"ctp=1&spd=5&pit=5&vol=5&per=0";
// // console.log(url);

//     axios.get("https://openapi.baidu.com/oauth/2.0/token?" +
//         "grant_type=authorization_code&" +
//         "code=ANXxSNjwQDugOnqeikRMu2bKaXCdlLxn&" +
//         "client_id=eXSAhUDxx7TGLg15ZexjQKAoKarhZwNr" +
//         "client_secret=2INPrDQNsn0wLU9I8OGq3DrKy33iHGzk" +
//         "redirect_uri=http%3A%2F%2Fwww.example.com%2Foauth_redirect").then(function (data) {
//         var tok = data.access_token;
//         url = "http://tsn.baidu.com/text2audio?tex=apple&lan=zh&cuid=00000000000000E0&ctp=1&tok=" +
//             tok;
//         axios.get(url).then(function (response) {
//             console.log(response.data);
//         }).catch(function (error) {
//             console.log(error);
//         })
//     })
  <!-- main translate.js library -->
      <script type="text/javascript" src="./lib/translate.js"></script>

      <!-- load up the languages definition file -->
      <script type="text/javascript" src="./lib/languages.js"></script>

      <!-- jquery not required, just used in the demo page -->
      <script type="text/javascript" src="./vendor/jquery.js"></script>

      <script type="text/javascript">
        var languages;

        $(document).ready(function(){

          languages = getLangs();

          // populate the select box
          for(var lang in languages){
            $('#langInput').append('<option value = "'+lang+'">' + lang + '</option>');
          }

          for(var lang in languages){
            $('#langOutput').append('<option value = "'+lang+'">' + lang + '</option>');
          }

          /***** NAMED EVENTS *****/

            $(document).bind('##TRANSLATE_TEXT##', function(e){

              $('#run').attr('disabled','disabled');
              $('#run').val('translating...');     
              var input = $('#langInput').val(), output = $('#langOutput').val();

              translate.text({input:input,output:output}, $('#theCode').val(), function(result){
                $('#run').attr('disabled','');
                $('#run').val('<== translate ==>');
                $('#output').val( result );
              });
            });

          /**** END NAMED EVENTS ****/

          /**** BIND UI EVENTS ****/

            // select box change
            $('#langSelector').change(function(){
              $(document).trigger('##CHANGE_LANGUAGE##', {"fontName":$(this).val()})
            });

            $('#run').click(function(e){
              $(document).trigger('##TRANSLATE_TEXT##');
            });

          /**** END UI BIND EVENTS ****/

          // little bit of a onReady hack. i'll fix the API a bit so this can be done better
          $(document).trigger('##CHANGE_LANGUAGE##', {"fontName":'Doh'});
          $('#langInput').val('English');
          $('#langOutput').val('Spanish');

        });
      </script>
