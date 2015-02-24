var request = require('request');
var pdfDocument = require('pdfkit');
var moment = require('moment');
var sizeOf = require('image-size');
var fs = require('fs');
var Q = require('q');

var defaultObj = {
  "_id": "549a611102b0a678c25ba77e",
  "name": "Stewart Stout",
  "agent": "Waller Martinez",
  "group_name": "ea magna",
  "message": "Reprehenderit sint veniam proident aliquip elit reprehenderit. Eu et officia qui commodo adipisicing eiusmod incididunt sint aliquip nulla. Ex duis esse minim esse dolor deserunt enim eiusmod nostrud fugiat.\r\nCulpa cupidatat esse deserunt incididunt dolore pariatur magna elit qui. Eu ullamco ut quis ad Lorem nostrud sunt. Ullamco ullamco pariatur et cillum irure tempor culpa aliquip amet nostrud ex irure eu culpa. Sunt cupidatat voluptate veniam labore exercitation eiusmod voluptate non non.\r\n",
  "arrival_date": "490-07-07T13:34:52 +04:00",
  "services": [
    {
      "name": "sint do eu fugiat anim",
      "description": "Ad dolor tempor adipisicing commodo magna nisi mollit qui. Laboris proident ullamco sit esse mollit labore sit fugiat in ipsum ad laboris. Consequat elit cillum non nostrud eu.\r\nVelit ut proident Lorem ad laborum ad in est. Sunt excepteur consequat deserunt et id velit consequat quis officia. Consectetur culpa excepteur exercitation consectetur excepteur sunt.\r\n",
      "service_date": "2015-01-21T10:11:23 +05:00",
      "quantity": {
        "adults": 1,
        "children": 2
      },
      "price_person": "$159.05",
      "banner": ""
    },
    {
      "name": "cillum dolor laboris culpa voluptate",
      "description": "Incididunt ad Lorem qui sint sunt aliqua pariatur reprehenderit reprehenderit in minim veniam amet. Aliquip culpa laborum proident aliqua magna velit aute proident aliquip. Commodo ipsum eu ut anim reprehenderit quis veniam dolore.\r\nNon commodo duis esse irure esse velit exercitation non consectetur amet veniam laborum aliqua exercitation. Ad tempor esse Lorem elit culpa Lorem aute et Lorem duis ex anim. Tempor ut elit voluptate velit ipsum cupidatat nostrud fugiat minim culpa voluptate id. Enim minim non est commodo cillum cupidatat cupidatat occaecat sit cupidatat minim ipsum amet.\r\n",
      "service_date": "2015-01-21T09:48:20 +05:00",
      "quantity": {
        "adults": 2,
        "children": 1
      },
      "price_person": "$234.00",
      "banner": ""
    },
    {
      "name": "ex reprehenderit proident velit proident",
      "description": "Eu est id commodo culpa quis nisi officia sint et ullamco commodo officia quis esse. Laboris culpa sit aliqua commodo minim aute officia ullamco magna excepteur. Nulla laboris nisi culpa et sunt aute anim pariatur nostrud voluptate. Incididunt ipsum qui cillum nostrud laboris deserunt ipsum ea sint magna cupidatat eu magna adipisicing. Elit consectetur sunt velit irure exercitation sint non ex qui eiusmod excepteur incididunt exercitation. Ad enim et non aliquip.\r\nQuis proident sit laboris aliquip magna sint in magna minim sunt pariatur laborum sint. Ea et magna pariatur velit consectetur sunt occaecat cillum dolore. Ea dolore voluptate irure labore qui aute consectetur in aliquip aliquip. Non cillum laboris nostrud esse dolore id. Ex laborum tempor eiusmod consectetur laboris laboris occaecat cupidatat dolore proident voluptate sit amet. Sit culpa duis tempor labore ut laborum nulla.\r\n",
      "service_date": "2015-01-21T04:36:07 +05:00",
      "quantity": {
        "adults": 1,
        "children": 3
      },
      "price_person": "$231.45",
      "banner": "http://s3-us-west-2.amazonaws.com/abgv1/banners/img_4.jpg"
    },
    {
      "name": "in est consequat minim ex",
      "description": "Nisi labore labore minim dolore reprehenderit cupidatat excepteur. Nisi magna elit pariatur dolore magna qui aliquip irure pariatur officia anim. In qui laboris pariatur fugiat nisi mollit elit non ullamco in commodo. Eiusmod nisi quis qui exercitation elit adipisicing sunt sit.\r\nQuis Lorem deserunt minim amet in. Nisi officia minim nostrud dolor deserunt ad deserunt nulla adipisicing laboris laborum est incididunt quis. Ad ex dolor ad voluptate ut laboris aliquip voluptate Lorem sit labore aliquip id non. Reprehenderit nulla sint irure ad. Et anim id cillum dolor id non labore adipisicing id labore. Ipsum proident ex do tempor culpa id Lorem mollit laborum excepteur ea minim amet.\r\n",
      "service_date": "2015-01-19T12:46:01 +05:00",
      "quantity": {
        "adults": 2,
        "children": 1
      },
      "price_person": "$197.96",
      "banner": "http://s3-us-west-2.amazonaws.com/abgv1/banners/img_4.jpg"
    },
    {
      "name": "mollit velit sunt magna non",
      "description": "Nulla nulla ullamco nostrud eiusmod eiusmod cillum. Nisi eiusmod occaecat esse nisi enim qui nostrud adipisicing amet minim. Fugiat ea sit quis adipisicing aliquip ut voluptate nisi minim amet aliquip culpa eu culpa. Dolor amet ad duis laboris laboris laboris non.\r\nUt ex aliquip ex proident exercitation incididunt mollit amet consequat. Sunt in qui incididunt velit officia. Do do ullamco veniam cupidatat consectetur officia laborum aliqua culpa labore consequat. Magna consectetur Lorem fugiat deserunt magna.\r\n",
      "service_date": "2015-01-21T20:32:46 +05:00",
      "quantity": {
        "adults": 1,
        "children": 2
      },
      "price_person": "$220.66",
      "banner": "http://s3-us-west-2.amazonaws.com/abgv1/banners/img_4.jpg"
    },
    {
      "name": "pariatur voluptate nisi minim ex",
      "description": "Laboris commodo occaecat reprehenderit cupidatat. Laborum aute nisi ullamco nostrud nostrud tempor eu. In consequat tempor pariatur non mollit cupidatat nisi qui. Voluptate magna minim dolore adipisicing culpa in exercitation excepteur proident. Culpa magna do incididunt adipisicing aute id qui ut culpa. Exercitation est magna veniam dolore elit enim cillum. Enim exercitation duis proident ullamco sint mollit sit commodo ullamco ea id reprehenderit.\r\nAliquip elit mollit et quis elit id incididunt pariatur labore dolor ullamco sunt nostrud esse. Elit cillum irure ipsum excepteur nulla do eiusmod ex reprehenderit incididunt. Ea aliquip reprehenderit proident elit enim in proident consectetur nisi.\r\n",
      "service_date": "2015-01-22T04:56:36 +05:00",
      "quantity": {
        "adults": 2,
        "children": 2
      },
      "price_person": "$355.55",
      "banner": "http://s3-us-west-2.amazonaws.com/abgv1/banners/img_4.jpg"
    },
    {
      "name": "tempor aute consectetur deserunt qui",
      "description": "Enim dolore magna et laboris sunt velit eiusmod sint. Non aliquip consequat Lorem quis reprehenderit aliquip anim. Culpa irure aute est id aliquip. Officia cupidatat tempor est ut nostrud laboris reprehenderit reprehenderit fugiat. Voluptate aliqua sunt incididunt consequat ullamco qui deserunt laborum non enim do exercitation. Lorem aliqua deserunt enim voluptate ea in pariatur eu ad do aute anim consectetur. Labore aute in ullamco adipisicing labore.\r\nElit laboris sint nisi sunt do fugiat minim pariatur est ea Lorem excepteur magna. Esse laboris nulla aliqua ut ad et minim. Occaecat ut anim esse ullamco id labore est pariatur id adipisicing. Tempor velit consectetur Lorem ut ullamco eu. Dolore aliqua ea voluptate ex.\r\n",
      "service_date": "2015-01-22T12:29:14 +05:00",
      "quantity": {
        "adults": 2,
        "children": 2
      },
      "price_person": "$209.08",
      "banner": "http://s3-us-west-2.amazonaws.com/abgv1/banners/img_3.jpg"
    },
    {
      "name": "dolore qui laboris anim dolore",
      "description": "Minim adipisicing tempor commodo deserunt ipsum elit aute ad laboris nostrud. Est sunt exercitation esse ad consequat. Ad proident id aute proident id Lorem minim laborum. Enim labore aliqua qui veniam sint excepteur ad exercitation sint aute deserunt nostrud. Pariatur voluptate labore sunt dolor voluptate occaecat nisi amet aliqua elit aliqua incididunt duis culpa. Proident eu anim officia ut laborum fugiat.\r\nDolor sint elit sit ad proident nostrud ullamco. Ea culpa occaecat non ipsum cillum do labore commodo esse. Quis reprehenderit dolore velit aute pariatur consectetur.\r\n",
      "service_date": "2015-01-22T07:35:02 +05:00",
      "quantity": {
        "adults": 1,
        "children": 2
      },
      "price_person": "$198.66",
      "banner": "http://s3-us-west-2.amazonaws.com/abgv1/banners/img_3.jpg"
    }
  ],
  "grand_total": "$1,247.24"
};

if(process.argv[2]){
	var file = fs.readFileSync(process.argv[2], {encoding: 'utf-8'});
	var output = process.argv[2].split('.')[0]+'.pdf';
};

var input = JSON.parse(file) || defaultObj;
var output_name = output || 'output.pdf';

//pdf creation function
var makePDF = function(object){

	//add header to pdf
	var headerMessage = function(doc){
		doc.font('Bitter-Regular.ttf')
		.fontSize(25)
		.image("abgBanner.png",0,0,{width: 612})
		.fontSize(11)
    .text(moment().format("MMMM DD, YYYY"),460,153,{lineBreak:false})
		.text('Dear '+object.name+',',50, 165)
		.moveDown(.6)
		.text(object.message,65,190,{align:"justify",indent:15})
		.moveDown(.8)
		.text(object.agent,50)
		.moveDown(.9)
		.fontSize(16)
		.fillColor("#2980b9")
		.text('Itinerary - '+object.group_name,{align:'center'});
	}

	//add dateHeader to pdf
	var dateHeader = function(doc,serviceDate){
		doc.moveDown(.7)
		.fontSize(16)
		.fillColor("#3498db")
		.text(serviceDate, 50);
	}

  //add Terms of Condition to pdf
  var tocFoot = function(doc){
    doc.moveDown(.7)
     .text('                                                                                                                                                                                   ',{underline:true})
     // .text('---------------------------------------------------------------------------------------------------------------',{underline:true})
    .fontSize(10)
    .moveDown()
    .fillColor("#D2D7D3")
    .text(input.tocText);
  }

	//add serviceBody to pdf
	var serviceBody = function(doc,service){
		doc.fontSize(12)
		.fillColor("black")
		.moveDown(.75)
		.font('Bitter-Bold.ttf')
		.text(service.name,  82)
		.font('Bitter-Regular.ttf')
		.moveUp()
		.fontSize(11)
		.text('Price per person: USD '+service.price_person, {align:"right"})
		.moveDown(.45)
		.text(service.description,82)
		.moveDown(.8)
	}

  //generate and center image on doc, adding a page if image will overflow
 var imageGen = function(doc,image){
    var a4 = (doc.page.width - sizeOf(image).width);
    if(doc.y>666){
      doc.addPage();
    }
    doc.image(image,a4/2);
  }

	//get a single image from a url
	function getImage(url){
		var deferred = Q.defer();
		if(url.length == 0){
			deferred.resolve('empty');
		}
		request({url: url, encoding: null}, function(error, response, body){
			if(!error && response.statusCode == 200){
				deferred.resolve(body);
			}
      // else if(error){
      //   console.log("Error Getting The Image. Error is: "+error);
      // }
		});
		return deferred.promise;
	}
	//end the pdf
	function endPDF(){
		doc.end();
		console.log('PDF created succesfully: ', output_name);
	}

	var services = input.services;
	//sort services by date in ascending order
	var sortedServices = services.sort(function(service1,service2) {
		date1 = (new Date(service1.service_date)).setHours(0,0,0,0);
		date2 = (new Date(service2.service_date)).setHours(0,0,0,0);
		return date1 > date2;
	});

	doc = new pdfDocument();
  // pdfVar = "";
	doc.pipe(fs.createWriteStream(output_name));
  // doc.pipe(pdfVar);
	doc.save();
	headerMessage(doc);

	//get all the images and store it on an array of promises
	function storeImages(services){
		var promises = [];
		services.forEach(function(service){
			promises.push(getImage(service.banner));
		})
		return Q.all(promises);
	}

	//helper variable to end the loop of services
	total = sortedServices.length;

	//adds all the services to the pdf, takes an array of images in the same order as sorted services
	function servicestoPDF(images){
		var deferred = Q.defer();
		var count=0;
		//Loop through all the services
		sortedServices.forEach(function(service, index){
			// console.log('count:', count, ' ',service.name);
			if(index == 0){
				var a = service.service_date.replace(/\s/g, '');
				var headerDate = moment(a).format("MMMM DD, YYYY");
				//print out the first date header
	      dateHeader(doc,headerDate);
	      //print out the body of the service
	      serviceBody(doc,service);
	      //if there is an image, put it here
	      if(images[index]!='empty'){
          imageGen(doc,images[index]);
	      }
		  }
		  else{
				//compare the dates
				var cA = service.service_date.replace(/\s/g, '');
				var currentDate = moment(cA).format("MMMM DD, YYYY");

				var pB = services[index-1].service_date.replace(/\s/g, '');
				var previousDate = moment(pB).format("MMMM DD, YYYY");

				// compare dates and print out new one if they are different
				(currentDate == previousDate) ? null : dateHeader(doc,currentDate);

				//print out the body of the service
				serviceBody(doc,service);

				//if there is an image, put it here
	     	if(images[index]!='empty'){
          imageGen(doc,images[index]);
	      }
			}
			count++;
			if(count > total - 1){
        tocFoot(doc);
        // console.log(pdfVar);
				console.log('inside resolve condition');
				deferred.resolve();
			}
		});
		return deferred.promise;
	}

	//store images, then put services on the pdf and then end
	storeImages(sortedServices).then(function(results){
		servicestoPDF(results).then(endPDF);
	});
}
makePDF(input);


