
<?php


$hundred_array=array('www.flipkart.com','www.youtube.com','www.facebook.com','www.baidu.com','www.wikipedia.org','www.yahoo.com','www.google.co.in','www.reddit.com','www.qq.com','www.amazon.com','www.taobao.com','www.twitter.com','www.tmall.com','www.google.co.jp','www.live.com','www.vk.com','www.instagram.com','www.sohu.com','www.sina.com.cn','www.jd.com','www.weibo.com','www.360.cn','www.google.de','www.google.co.uk','www.linkedin.com','www.google.com.br','www.list.tmall.com','www.google.fr','www.google.ru','www.yandex.ru','www.netflix.com','www.google.com.hk','www.yahoo.co.jp','www.google.it','www.t.co','www.ebay.com','www.google.es','www.imgur.com','www.bing.com','www.msn.com','www.onclkds.com','www.twitch.tv','www.google.com.mx','www.google.ca','www.tumblr.com','www.gmw.cn','www.alipay.com','www.livejasmin.com','www.mail.ru','www.microsoft.com','www.ok.ru','www.aliexpress.com','www.wordpress.com','www.hao123.com','www.stackoverflow.com','www.imdb.com','www.github.com','www.amazon.co.jp','www.blogspot.com','www.pinterest.com','www.csdn.net','www.wikia.com','www.apple.com','www.google.com.tr','www.popads.net','www.linkedin.com','www.office.com','www.bongacams.com','www.paypal.com','www.microsoftonline.com','www.google.com.tw','www.google.com.au','www.whatsapp.com','www.google.pl','www.detail.tmall.com','www.diply.com','www.google.co.id','www.adobe.com','www.coccoc.com','www.craigslist.org','www.dropbox.com','www.amazon.in','www.googleusercontent.com','www.google.com.pk','www.booking.com','www.thepiratebay.org','www.google.co.th','www.pixnet.net','www.tianya.cn','www.google.com.eg','www.china.com');

$domain = "www.google.com";
 

$googlearr =array();
$arr = array(
    "A", "MX", "NS", "SOA",
    "PTR", "CNAME", "AAAA", "A6",
    "SRV", "NAPTR", "TXT", "ANY"
);


foreach( $arr as $element) {
  //echo $element . ":";
   
  if(dns_check_record($domain, $element)) {
      //echo "found <br>\n";
      array_push($googlearr,"found");
  } else {
      //echo "not found <br>\n";
      array_push($googlearr,"not found");
  }
  

}

   $val=0;
   //$name="www.google.com";
   $name=$_GET['url'];
   //echo $name;
   $length_names=sizeof($name);
   $data=array();
   for($i=0;$i<$length_names;$i++)
   {
    $ip = gethostbyname($name[$i]);
   $namesss=gethostbyaddr($ip);

    if($ip === $name[$i]) {

       // echo "Could not resolve the IP address for the host!<BR/>\n";
        $val=1;
    } else {

        //echo "The IP address for the host is: $ip<BR/>\n";
        $val=0;
    }
    
    if($namesss === $ip){
      //echo "domain name invalid, hence fake";
      $val=1;
    }
    else {
      //echo "The domain name is: $namesss<BR/>\n";
      $val=0;
    
  }
  if(in_array($name[$i],$hundred_array)){
    $data[$name[$i]]="true";
  }
elseif($val === 0)
{
  // echo "The IP address for the host is: $ip<BR/>\n";
  // echo "The domain name is: $namesss<BR/>\n";
  // echo "Hence valid";
  //array_push($data, array("url_name"=>$namesss, "status"=>"true"));
  $data[$name[$i]]="true";
}

else{
  $cur_domain = $name[$i];
  $score=0;

$sample_arr =array();
$arr_2 = array(
    "A", "MX", "NS", "SOA",
    "PTR", "CNAME", "AAAA", "A6",
    "SRV", "NAPTR", "TXT", "ANY"
);
foreach($arr_2 as $ele) {
  //echo $element . ":";
   
  if(dns_check_record($cur_domain, $ele)) {
      //echo "found <br>\n";
      array_push($sample_arr,"found");
      //$score+=1;
      
  } else {
      //echo "not found <br>\n";
      array_push($sample_arr,"not found");
  }
  

}

for($count=0;$count<12;$count++)
  {
    if($sample_arr[$count] === $googlearr[$count])
    {
      $score+=1;
    }
  }

//   if($score===12) 
//    {
//     $data[$name[$i]]="true";
//   }
  

//   elseif($score===11){
//     $data[$name[$i]]="yellow";
  
//   }

//   elseif($score===10){
//     $data[$name[$i]]="yellow";
//   }

//   elseif($score===9){
//     $data[$name[$i]]="orange";
  
//   }
//   elseif($score===8){
//     $data[$name[$i]]="orange";
  
//   }
//   elseif($score===7){
//     $data[$name[$i]]="orange";
  
//   }
//   else{
//  $data[$name[$i]]="fake";}
switch($score){
  case 12: 
    $data[$name[$i]]="true";
    break;
  case 11:
    $data[$name[$i]]="yellow";
    break;
  case 10:
    $data[$name[$i]]="yellow";
    break;
  case 9:
    $data[$name[$i]]="orange";
    break;
  case 8:
    $data[$name[$i]]="orange";
    break;
  case 7:
    $data[$name[$i]]="orange";
    break;
  default:
    $data[$name[$i]]="fake";
}
}
   }

   
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data); 



 
// $domain = "1pad.com";
 
// if(dns_check_record($domain, "MX")) {
//     echo "Record exists.";
// } else {
//     echo "Record not found or error occurred.";
// }




//echo $_POST[0];
//$v=$_POST[$val];
 ?>

    

