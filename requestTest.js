var request = require('request');
var pdfDocument = require('pdfkit');
var fs = require('fs');
var async = require('async');

var Urls = ['http://s3-us-west-2.amazonaws.com/abgv1/banners/img_2.jpg',
					'http://s3-us-west-2.amazonaws.com/abgv1/banners/img_3.jpg',
					'http://s3-us-west-2.amazonaws.com/abgv1/banners/img_4.jpg'];

doc = new pdfDocument();
doc.pipe(fs.createWriteStream('output.pdf'));
// doc.save();

function imagetoPDF(url, callback){
	request({url: url, encoding: null}, function(error, response, body){
		if(!error && response.statusCode == 200){
			doc.image(body);
			callback(error, 'done');
		}
	});
}

async.eachSeries(Urls, imagetoPDF, function(err,data){
	if(err){
		throw err;
	}else{
		console.log(data);
		doc.end();
	}
})


