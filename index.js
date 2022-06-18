const Twitter = require('twitter');
const dotenv = require('dotenv');

dotenv.config();

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const date = new Date();
const today = `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}時${date.getMinutes()}分${date.getSeconds()}秒`

const params = {status: `${today}\n日本語ツイート検証`};

client.post('statuses/update', params, function(error, tweets, response){
	if(error){
		console.log(error);
	}
});