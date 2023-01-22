const request = require("request");

module.exports = {
    name: "truecaller",
    alias: ["tc"],
    desc: "Get a number info",
    category: "Essentials",
    usage: "tc @user",
    react: "🍁",
    start: async (
      Miku,
      m,
      { text, prefix, args}
    ) => {
        if(!args[0]) return m.reply(`Please provide me a phone number and country code splitted by "|" \n\n example: ${prefix}tc 458455554111|US where US is country code`);
        if (!args[0].includes("|")){
            return m.reply(`Please provide me a phone number and country code splitted by "|" \n\n example: ${prefix}tc 458455554111|US where US is country code`);
        }
        else{
            var number = args.join(" ").split("|")[0];
            var code = args.join(" ").split("|")[1];

            const options = {
                url: 'https://api.truecaller.com/v2/search',
                qs: {
                  phone: number, // The phone number you want to look up
                  countryCode: code, // The country code for the phone number
                  apiKey: 'zIHUE72d8c8a3b0ab4290a98d5d2115c50cbe' // Your Truecaller API key
                }
              };

                request(options, function (error, response, body) {
                    console.log(body);
                    console.log(response)
                    console.log(error)
                    /*if (!error && response.statusCode == 200) {
                        var info = JSON.parse(body);
                        console.log(info);
                        //var name = info.name;
                        //var photo = info.photo;
                        //var location = info.location;
                    }*/
                });
        }
    }
}

                        

