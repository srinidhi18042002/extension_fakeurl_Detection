
//let a = window.location.href;
//alert(a);
//var a = window.location;
   //var a=window.location.hostname;
  // alert(a);
   //var fso  = new ActiveXObject("Scripting.FileSystemObject");
   //var fh = fso.CreateTextFile("C:\\Users\\Srinidhi\\Desktop\\Test.txt", true);
   //fh.WriteLine(window.location.hostname);
   //fh.close();
   //const fs = require('fs')

//const { stringify } = require('querystring');

//const content = 'this is what i want to write to file'


//if (typeof window !== 'undefined') {
   //console.log('You are on the browser')
   //var a = window.location.hostname;
   //var a=window.location.hostname.hostname;
   //alert(a);
   //var b=String(a);
   
 //} else {
   //const fs = require('fs')

//const content = 'this is what i want to write to file'

//fs.writeFile('test.txt', b, err => {
  //if (err) {
    //console.error(err)
    //return
  //}
  //file written successfully
//})
 //}




 //var emoji = String.fromCodePoint(0x1F621)
 //var xhr = new XMLHttpRequest();





alert("please wait for about 30 seconds until the links on the page changes to a colour");
//  setTimeout(myTimer, 45000);

// function myTimer() {
//   alert("it is taking more than 45 seconds, higher possibility that the website you are looking for is fake");
// }
 let i= document.getElementsByTagName('a');

console.log(i.length);
//let count=0;
const url=[];
 for(let x=0; x<i.length;x++){
  // console.log(x+": "+i[x]+": "+emoji);
  // console.log(x+": "+i[x]+": "+i[x].innerHTML = String.fromCodePoint(0x1F525));
  //var y=i[x]+" "+emoji; 
  //i[x].src=y;
  //console.log(y);
   url_trimmed= i[x].hostname;
  //console.log(url_trimmed);
  url.push(url_trimmed);
  //chrome.runtime.sendMessage({url:url_trimmed});
  //count+=1;
  
 }
 chrome.runtime.sendMessage({url});
 console.log("message sent to background.js");

//  const messageHandler = (request, sender, callback) => {
//   console.log(request);
//   console.log(sender);
//return true;
//};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("msg received from background.js");
  console.log(request);
  let res= request;
  console.log(res);
  var result=[];
  var final_trimmed=[];

  for (var j in res)
  {   
    let k= document.getElementsByTagName('a');
    if(res[j]==="fake")
    {
      //var elt;
      for(let x=0; x<k.length;x++)
      {
        if(k[x].hostname===j){
          k[x].style['background-color']='#FF0000';
          k[x].style['display']='inline-block';
          k[x].style['pointer-events']='none';
        }
        
   
      }
      


      
        
    }

    else if(res[j]==="yellow"){
      for(let x=0; x<k.length;x++)
      {
        if(k[x].hostname===j)
        {
          k[x].style['background-color']='#FFFF00';
          //var element = document.getElementById('name');
//         k[x].addEventListener('mouseover', function() {
//         alert('Yellow accounts to 80% to 90% similarity between the dns record of the highlighted link and that of google');
// });
        }
      }
    }


    else if(res[j]==="orange"){
      for(let x=0; x<k.length;x++)
      {
        if(k[x].hostname===j)
        {
          k[x].style['background-color']='#FFA500';
        //   k[x].addEventListener('mouseover', function() {
        //     alert('Yellow accounts to approximately 60% to 75% similarity between the dns record of the highlighted link and that of google');
        // });
      }
      }
    }


    else
    {
      for(let x=0; x<k.length;x++)
      {
        if(k[x].hostname===j)
        {
          k[x].style['background-color']='#00FF00';
        }
      }
    }
    // {
    //   var elt;
    //   for (elt of k){
    //     if (elt.href === j){
    //       elt.style['background-color']='#FF0000';
    //       elt.style['display']='inline-block';
    //       elt.style['pointer-events']='none';
    //     }
    //   }
    // }
    // else{
    //   elt.style['background-color']='#00FF00';
    // }

    
  } 

  alert("You are good to go. Click on the green links. The colour green indicates it is safe to open that link");
  alert("Yellow accounts to 80% to 90% similarity between the dns record of the highlighted link and that of google");
  alert("orange accounts to 60% to 75% similarity between the dns record of the highlighted link and that of google");
  
});

// for(elt of i){
//    elt.style['background-color']='#FF0000';
//    elt.style['display']='inline-block';
//    elt.style['pointer-events']='none';
// }

//chrome.runtime.sendMessage({'msg':'url'});







 