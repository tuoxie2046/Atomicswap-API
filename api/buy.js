var exec = require('child_process').exec;
var util = require('util');

exports.index = (req, res) => {
    var currency1 = req.query.currency1;
    var amount1 = req.query.amount1;
    var currency2 = req.query.currency2;
    var amount2 = req.query.amount2;
    var pubkey = req.query.pubkey;

    if (currency1 == "btc" && currency2 == "eth") {
        var initiate = util.format('btcatomicswap --testnet --rpcuser=user --rpcpass=pass initiate %s %s', pubkey, amount1);

        exec(initiate, (error, stdout, stderr) => {
            console.log(initiate);
            console.log(stdout);
        });
    }
    else {

    }
    res.send("success");
}
