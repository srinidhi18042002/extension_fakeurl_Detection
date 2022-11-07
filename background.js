//fetch('http://localhost/new/try.php')
//.then(response => response.json())
//.then(response => console.log(response.status));
// chrome.runtime.onMessage.addListener((request,sender,callback)=>
// {
//    console.log(request.msg);
//     //let response= await fetch(`http://localhost/new/try.php/?url${message.url}`);
//    // chrome.tabs.sendMessage(tabId,{status: response.status});

// });
// const checkValidity = async (url) => {
//     console.log(url);
//     const response = await fetch(`http://localhost/new/try.php/?url=${url}`);
    
  //}
  const validities={};
  let checkValidity= async (URL,tab_id)=>{
    console.log("message received by background.js");
    let queryString="";
    for (let url_id of URL){
    queryString+=`&url[]=${url_id}`;}
      let response= await fetch(`http://localhost/new/try.php/?${queryString}`);
      console.log("sent to php file");
    let data= await response.json();
    console.log("message received from php");
    //console.log(data);
    // if (typeof validities[tab_id] === 'undefined') {
    //     validities[tab_id] = {};
    //   }
      
      validities[tab_id] = data;
    
    
    console.log(validities);
    chrome.tabs.sendMessage(tab_id,validities[tab_id]);
    
    return;
    //return data;
}
  
  const messageHandler = (request, sender, callback) => {
    //console.log(sender);
    checkValidity(request.url, sender.tab.id);
    
    return true;
  };
  
 chrome.runtime.onMessage.addListener(messageHandler);
 

//  fetch('http://localhost/new/try.php')
// .then(response => response.json())
// .then(response => console.log(response.status));




//   var x="hey";
//   chrome.runtime.sendMessage({heyy:x});
