//上线后 要开启如下 全局代码 桥接代码 ，如何调试写在文档最底部。
//  dataXayer = clientSideData.Omniture;
//


var omCityCountry = [["AE","AsianPacific"],["AF","AsianPacific"],["AR","Americas"],["AT","Europe"],["AU","Australia"],["AZ","AsianPacific"],["BA","Europe"],["BE","Europe"],["BG","Europe"],["BH","AsianPacific"],["BJ","Africa"],["BR","Europe"],["CA","Americas"],["CH","Europe"],["CN","AsianPacific"],["CU","Americas"],["CZ","Europe"],["DE","Europe"],["DK","Europe"],["ES","Europe"],["ET","Africa"],["FI","Europe"],["FR","Europe"],["GB","Europe"],["GR","Europe"],["HK","Region"],["HU","Europe"],["ID","AsianPacific"],["IL","AsianPacific"],["IN","AsianPacific"],["IR","AsianPacific"],["IT","Europe"],["JP","AsianPacific"],["KH","AsianPacific"],["KR","AsianPacific"],["LU","Europe"],["MM","AsianPacific"],["MN","AsianPacific"],["MO","Region"],["MX","Americas"],["MY","AsianPacific"],["NL","Europe"],["NO","Europe"],["NP","AsianPacific"],["NZ","Australia"],["OM","AsianPacific"],["PA","Americas"],["PH","AsianPacific"],["PK","AsianPacific"],["PL","Europe"],["PT","Europe"],["RO","Europe"],["RU","Europe"],["SE","Europe"],["SG","AsianPacific"],["SK","Europe"],["TH","AsianPacific"],["TR","Europe"],["TW","Region"],["UG","Africa"],["US","Americas"],["VN","AsianPacific"],["ZA","Africa"],["/","/"]]

//add
function multiCity(a)
{
var re= /^(CA\d{4}\-\/\-)+(CA\d{4}\-)+(CA\d{3}\-)+\/(\-CA\d{4})+$|^(CA\d{4}\-\/\-)+(CA\d{4}\-)+(CA\d{3}\-)+\/(\-CA\d{3})+$|^(CA\d{4}\-\/\-)+(CA\d{3}\-\/\-)+CA\d{4}$|^(CA\d{4}\-\/\-)+(CA\d{3}\-\/\-)+CA\d{3}$|^(CA\d{4}\-\/\-)+(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{4})+$|^(CA\d{4}\-\/\-)+(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{3})+\-\/(\-CA\d{4})+$|^(CA\d{4}\-\/\-)+(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{3})+$|^(CA\d{4}\-)+\/(\-CA\d{4})*(\-CA\d{3})+\-\/(\-CA\d{3})+(\-CA\d{4})*$|^(CA\d{4}\-)+(CA\d{3}\-)+\/\-(CA\d{4}\-)*(CA\d{3}\-)*\/(\-CA\d{4})+$|^(CA\d{3}\-\/\-)+(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{4})+$|^(CA\d{4}\-)+(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{3})+(\-CA\d{4})+$|^(CA\d{4}\-)+(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{3})+(\-CA\d{4})*$|^(CA\d{4}\-)*(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{3})+(\-CA\d{4})+$|^(CA\d{4}\-)+(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{3})*(\-CA\d{4})+$|^(CA\d{4}\-)+\/\-(CA\d{4}\-\/\-)+(CA\d{3}\-\/\-)+(CA\d{3}\-)*(CA\d{4}\-)*(CA\d{4})*$|^(\w{2}\d{4}\-(.+)?\-)+(\w{2}\d{3,4}\-)+(.+)?(.+)?(\w{2}\d{3,4}\-)+(.+)?(.+)?(\-?\w{2}\d{3,4}\-\/?)+(\-?\w{2}\d{4})+$|^(\w{2}\d{4}\-(.+)?(.+)?)+(\-\w{2}\d{3})+$/ig
if(re.test(a))
{return true}
else
{return false}

}

function omRTtRe(a)
{
var re= /^(\w{2}\d{4}\-)+(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{3})+(\-\w{2}\d{4})+$|^(\w{2}\d{4}\-)+(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{3})+(\-\w{2}\d{4})*$|^(\w{2}\d{4}\-)*(CA\d{3}\-)+(CA\d{4}\-)*\/(\-CA\d{4})*(\-CA\d{3})+(\-\w{2}\d{4})+$/ig
if(re.test(a))
{return true}
else
{return false}

}

function omOWtRe(a)
{
var re= /^\w{2}\d{4}\-CA\d{3}$/ig
if(re.test(a))
{return true}
else
{return false}

}


//add

function omCityCountryWholeITI(fx){  
if(!fx){return ""}

var mi = omCityCountry

var d = fx.split("-")
var e = mi.length
var out = new Array()
var outX = new Array()
		 
	     for(var x=0;x<d.length;x++)
	     { 
		    
		      for(var i =0;i<mi.length;i++)
               {
	               if(d[x] == mi[i][0] )
	               { 
		           
			        //out.push(mi[i][1])
					outX.push(mi[i][1])
					
	                }
			  
			   }
	        
		  }
		 
		  
		  return outX.join("-")
}


//add
function omCitytoCountryS(x){
if(!x){return ""}

for(var i =0;i<omCityCountry.length;i++)
               {
	               if(x == omCityCountry[i][0] )
	               { 
		           
			        
					var outpx = omCityCountry[i][1]
	                }
			  
			   }
			   
			   
			   return outpx
}
//add

function omprdTRX(x){
var p = dataXayer.products
var g = p.substr(1,2) //output rt
var a = p.indexOf(";",10)
var b = p.substring(1,a) //RT:SAN-BJS:SAN-PEK-/-PEK-SAN:E:Ad
var c = b.indexOf(":",3)
var d = b.substring(3,c)  //output OD
var j = d.substr(0,3) //out put O
var k = d.substr(4,3) //out put d
var e = b.indexOf(":",11)
var f = b.substring(c+1,e) //output whoiti
var h = b.substr(e+1,1) //output cabin
//
if(h==":")
{
   h = "x"    
}
//
var i = g+":"+h //output RT:E
if(x=="a")
return i
else if(x=="b")
return j
else if(x=="c")
return k
else if (x=="d")
return f
else return ""
}

//merger
function routeTypeRTOW(a)  
{
if(!a){return ;} 
var omzzflghd = dataXayer.wholefltNbr
var cldowft = dataXayer.wholefltNbr
var claftT = dataXayer.aircftTp
var q = a.indexOf(":") 
var u = a.substring(0,q) //output OW
if(u=="MC")	{return ;}
var b = a.indexOf(":",10)
var c = a.substring(0,b) //output ow:e:us-us
var d = a.substring(b+1,a.length)  

var b4 = a.indexOf(":",4)
var c4 = a.substr(b4+1,5)  //output US-CN
var cOx = a.substr(b4+1,2) //output us
var cDy = a.substr(b4+4,2) //output cn
//console.log("rtOD:" + cOx +":"+ cDy ) 
//add 0614
var b6 = a.indexOf(":",10)
var d6 = a.substring(b6+1,a.length)  //out put us-cn-/-cn-us

//add 0614
var e5 = d6.split("-")
	var fe5 = omuniqX(e5)
	var fx5 = fe5.join("")
	
	if (fx5 == "CN")
	{return "pureDOM"}
//ADD 0614
    else  
{            
              
              if(u == "OW")
			  {
				    //no6
					var re50 =  /^((?!CN).)+-((?!CN).)+$/ig     
             
			         if(re50.test(d6))
                   {
               
                        var r3X = /ES-BR|BR-ES|CA-CU|CU-CA|US-PA|PA-US|HU-BY|BY-HU/ig    //GR-DE|DE-GR  AT-ES|ES-AT    
                         if(r3X.test(d6))
                      {return "5thFreedom"}
                      else
                      {return "I+I/6thFreedom"}

                   }
			       else
				   {
					
					//no6
					
				    var reL1 =  /^(CN)+-((?!CN).)+$|^((?!CN).)+-(CN)+$/ig 
				     if(reL1.test(d6))
					{ 
					  
				      if(omzzflghd)
					  {
						   
						   var rXXT = /^\w{2}\d+$/ig
					        if(rXXT.test(omzzflghd))
					     {   
					       //chg for lh code share
						   var re401 = /CA[7][0123456][\d][\d]|CA[6][102456789][\d][\d]|CA[5][2325641960][\d][\d]/ig  //add201808
									  if (re401.test(omzzflghd))
									  return "PointToPoint(codeShare)"   
									  else
									  return "PointToPoint" 
						   //chg for lh code share 
							 
						 } 
						 else
						 { 
						 
						        var reltt =/^(\w+){1}(-\w+){1,}$/ig    
                                 
								if(reltt.test(omzzflghd))
						       { 
							      //JIXUXHAIFEN I+D
								  
								 var rJX =/^(\w+-)*(((?!CA).)+\d+-?)+(\w+-?)*$|^([\w\/]+-)*(((?!CA).)+\d+-?)+([\w\/]+-?)*$/ig
                                 if(rJX.test(omzzflghd))
								  {
									  
									  var rJw = /9B/ig
									   if(rJw.test(omzzflghd))
									 { 
									   //ADD
									  if(omcountry == "DE")
									  {return "DBrailway"}
									  else if(omcountry == "IT")
									  {
									    if(claftT)
										   {
											   if((claftT).indexOf("ITRail") != -1)
										       return "ITrailway"
										   }
									 
									  
									  }
									}
									  //
									  else
									  {
									 
									   return "IET" 
									  								  
									  
									  }
								  }
								  else
								  {
						var re101 = /CA[7][0123456][\d][\d]|CA[6][102456789][\d][\d]|CA[5][2325641960][\d][\d]/ig  //add201808
									  if (re101.test(omzzflghd))
									  return "CodeShare(OverSeas)"
                                      else	
									  //add
									  { 
									        if(cOx == "CN")
									        {
											     if(omOWtRe(omzzflghd))
											     return "D+I"
												 else
												 return "I+D"
										    }
											else
											{
												 return "I+D"
											}
									  //add
									 // 
									  }
								  }
								  
								  
								  //
							   }
							   else
						       {return "Others" }
						 }
						  
					  }
					  else
				  	{return "PtoP/ConnectingFlights"}
					
					}
				   }
				  
			  }
			  else if(u == "RT")
		{	 
			 var re0 =  /^((?!CN).)+-((?!CN).)+$/ig     
             
			 if(re0.test(c4))
             {
               
var rX = /ES-BR|BR-ES|CA-CU|CU-CA|US-PA|PA-US|HU-BY|BY-HU/ig    //GR-DE|DE-GR  AT-ES|ES-AT
             if(rX.test(c4))
              {return "5thFreedom"}
              else
              {return "I+I/6thFreedom"}

              }
	          else
			  {
               var re3 =  /^(CN)+-((?!CN).)+$|^((?!CN).)+-(CN)+$/ig  
              if(re3.test(c4))
                 { 
			 
			 			 
              
				    if(cldowft)
				   {
					  var ret = /^\w{2}\d+-\/-\w{2}\d+$/ig
					   if(ret.test(cldowft))
					  { 
					  //chg for lh codeshare
					   var re491 = /CA[7][0123456][\d][\d]|CA[6][102456789][\d][\d]|CA[5][2325641960][\d][\d]/ig  //add201808
									  if (re491.test(cldowft))
									  return "PointToPoint(codeShare)"
									  else
									  return "PointToPoint" 
					  //chg for lh codeshare
					  
					  
					  } 
					  else
					  {    //add
					     var relt =/^(\w+-){2,}\/(-\w+){2,}$|^(\w+-){1,}\/(-\w+){2,}$|^(\w+-){2,}\/(-\w+){1,}$/ig     
                          if(relt.test(cldowft))
						   //add
					       //gaizaoijiad
						   {
							   var rdd = /^(\w+-)*(((?!CA).)+\d+-)+(\w+-)*\/(-\w+)*(-((?!CA).)+\d+)+(-\w+)*$|^(\w+-)*(((?!CA).)+\d+-)+(\w+-)*\/(-\w+)+$|^(\w+-)+\/(-\w+)*(-((?!CA).)+\d+)+(-\w+)*$|^([\w\/]+-)*(((?!CA).)+\d+-?)+([\w\/]+-?)*$/ig
                                             if(rdd.test(cldowft))		
											 {
											 
											  var rJw = /9B/ig
									   if(rJw.test(cldowft))
									   
									   {
										   
										 if(omcountry == "DE")
									  {return "DBrailway"}
									  else if(omcountry == "IT")
									  {
									    if(claftT)
										   {
											   if((claftT).indexOf("ITRail") != -1)
										       return "ITrailway"
										   }
									 
									  
									  }   
										   
										   }
									  //return "DBrailway"
									  else
									  {
									 
										
									      return "IET" 
									   }
									  
										
										
										
									 
											 }
											 else
											 //add
					var re102 = /CA[7][0123456][\d][\d]|CA[6][102456789][\d][\d]|CA[5][2325641960][\d][\d]/ig  //add201808
									          if (re102.test(cldowft))
									          return "CodeShare(OverSeas)"
											  else
											 //add
											      if(cOx == "CN")
									              {
											        if(omRTtRe(cldowft))
											        return "D+I"
													else
													return "I+D"
										          }
												  else
												  {
													  
												    return "I+D"
												  }
											 
											
											 
						   }
						   //return "I+D"
						   //gaizaoijiad
					       
						   else
						   {return "ConnectingFlights" } 
					  }
				   }
			       else
				   {
			            return "PtoP/ConnectingFlights"  
				   }
				  } 
			  }
		}
		else
		return "Others"

}
}

function routeTypeMC(a){ 
if(!a){return ""}
var xa = dataXayer.products 
var z4 = dataXayer.wholeIti //OSA-SHA-/-PEK-KIX 
var z5 = dataXayer.wholefltNbr //CA164-/-CA927
var bx = a.indexOf(":")
var cx = a.substring(0,bx)
//ADD
var b4 = a.indexOf(":",4)
var c4 = a.substr(b4+1,5)  //output US-CN
var cOx = a.substr(b4+1,2) //output us
var cDy = a.substr(b4+4,2) //output cn
//ADD

if(xa){
var z1 = xa.indexOf(":")
var z2 = xa.substr(z1+1,3)    //o
var z3 = xa.substr(z1+5,3) }  //d

//add
var _omL = z4.substring(0,3)
var _omR = z4.slice(-3)
//add

var b = a.indexOf(":",10)
var d = a.substring(b+1,a.length)  //output US-CN-/-CN-US
if(z4.indexOf("/")!=-1){
var bm = z4.indexOf("/")
var cm = z4.indexOf("-")
var dm = z4.substring(cm+1,bm-1) //o  
var em = z4.substr(bm+2,3) }//d
//console.log("mcOD:" + cOx +":"+ cDy)

if(cx != "MC"){return ;}
if(cx=="MC")
{
	var e = d.split("-")
	var fe = omuniqX(e)
	var fx = fe.join("")
	
	if (fx == "CN")
	{return "pureDOM"}
	else 
	{
	 
	        if(fe.length >=3) 	
		   { 
		       
		       var mxgg = /^.*((?!CN).)+-(CN)+-((?!CN).)+.*$/ig
					      var tss = d
						 if(d.indexOf("/") != -1)
						  {tss = d.replace("/-","")}
						 
						 if(mxgg.test(d) & c4 != "CN-CN")  //adx
						 {
						     
						    
						     return "I+I/6thFreedom"
						     
						     
						 }
			             else
						 {
						    //adx
                           var re01 = /^\.*((?!CN).)+\.*$/ig
                               if(re01.test(d) & c4 != "CN-CN") //adx
						       {return "I+I/6thFreedom"}
						       else
						       {
							          //adx
									 var or6 = "ConnectingFlights(MultiCity)" 
									 var re0 = /^(\w+-)*(\w+)-\/-\2(-\w+)*$/ig
                                     if(re0.test(z4))
								     {
									   //ad IET ADED
									   var reIET = /^([\w\/]+-)*(((?!CA).)+\d+-?)+([\w\/]+-?)*$/ig
                                        if(reIET.test(z5))
									     {
										 
										 
									  var rJw = /9B/ig
									   if(rJw.test(z5))
									  return "DBrailway"
									  else
									  return "IET" 
										 
										 
										 }
									     //ad IET ADD
									   if(omRpatch("CN",d)>=2)
									   {
									       
										    //add
					 var re103 = /CA[7][0123456][\d][\d]|CA[6][102456789][\d][\d]|CA[5][2325641960][\d][\d]/ig  //add201808
									          if (re103.test(z5))
									          return "CodeShare(OverSeas)"
											  else
											  {  //add
											       if(cOx == "CN")
									               {
											        if(multiCity(z5))
											        return "D+I"
													else
													return "ConnectingFlights(MultiCity)"
													 //adx
										           }
											       else
												   {
											  
											  
										             return "I+D" //adx
											  
												   }
											  
											  }
									   
									   }
									   else
									   {
									   return "ConnectingFlights(MultiCity)"
									   }
									 
								     }
								     else
								     {
										 //var orx7 ="" //adx
												//adx			  
								        if(z2 != z3 || _omL != _omR)
									    {or6 = "OpenJaw(OriginOJ)" } 
									   	if(z4.indexOf("/")!=-1)
										{
											

										   if (dm !=em)
									     //  {or6 = "OpenJaw(TurnaroundOJ)" }  //adx
										 {
											or6 = "OpenJaw(TurnaroundOJ)" //adx
										 }
										   if (z2 != z3 && dm != em)
										   {or6 = "OpenJaw(DoubleOJ)"}	
										    if (_omL != _omR && dm != em)
										   {or6 = "OpenJaw(DoubleOJ)"}	
										   //if(orx7){return orx7} //adx above all
										}
										if(omRpatch("CN",d)>=2)
										
									     { 
										       //add
					 var re107 = /CA[7][0123456][\d][\d]|CA[6][102456789][\d][\d]|CA[5][2325641960][\d][\d]/ig  //add201808
									          if (re107.test(z5))
									          or6 = "CodeShare(OverSeas)"
											  else
											  // add
										      {
												    if(cOx == "CN")
									               {
											        if(multiCity(z5))
											        or6 = "D+I"
													 //else
													 //or6 = "ConnectingFlights(MultiCity)"
													 //adx youwenti
										           }
												   else
												   {
													 or6 = "I+D"
													  //adx
												   }
												  
											  }
										     
											 
											 //add
											 //
										 
										 
										 }
										
										var reIET = /^([\w\/]+-)*(((?!CA).)+\d+-?)+([\w\/]+-?)*$/ig
                                         if(reIET.test(z5))
									     {
										 
										   var rJw = /9B/ig
									   if(rJw.test(z5))
									  or6 = "DBrailway"
									  else
									  or6 = "IET" 
										 
										 
										 
										 
										 }
								     }
									 
							    	 if(or6)
									 {return or6}
									 else
									 {return "ConnectingFlights(MultiCity)"}
							   }
							  						 
						 }
		   }
	        else
	       { 
	           if(fe.length ==2) 	
		       { 
		          
		          var omoj = ""
		         
		         var rX7 = /ESBR|BRES|CACU|CUCA|USPA|PAUS|HUBY|BYHU/ig    //ATES|ESAT GRDE|DEGR
                    if(rX7.test(fx))	  
		            { return "5thFreedom" }
			       
			        else
		            {
		               
					   //
		                var ts = d
						 if(d.indexOf("/") != -1)
						  {ts = d.replace("/-","")}
		               var re01 = /^((?!CN).)+$/ig
                           if(re01.test(d))
						    {
						        
						        return "I+I/6thFreedom"}
						       else
						       {
								     ////OSA-SHA-/-PEK-KIX
								 if(z4.indexOf("-/-") != -1)   
								 {     var r0e3 = /^(\w+-)*(\w+)-\/-(\2)(-\w+)*$/ig
									   if(r0e3.test(z4))                        // if(omRpatch("CN",d)>=2)
									 { 
									   omoj = "Others3"
									 }
									 else
									 { //add
									      //addxx
									   
									    
									    //addxx
									  
									    if(z2 != z3  || _omL != _omR)
									    {omoj = "OpenJaw(OriginOJ)"} 
									   if(z4.indexOf("/")!=-1)
									   {
									      if(dm !=em)
									      {omoj = "OpenJaw(TurnaroundOJ)"} 
									      if(z2 != z3 && dm != em)
										  {omoj = "OpenJaw(DoubleOJ)"}  
										  if( _omL != _omR && dm != em)
										  {omoj = "OpenJaw(DoubleOJ)"}  
									    }
																		        
									   
											   //add0421
									 
									 }
								 
								   //if(omoj){return omoj};
								 }
								  
								
								 
								 
								 
											//add0421
									//add04210000
						var r00xe = /^(\w+-)+(\w+)-\/-(\w+)(-\w+)+$|^(\w+-)+(\w+)-\/-(\w+)$|^(\w+)-\/-(\w+)(-\w+)+$/ig	
										
								   
									  if(r00xe.test(z5))
										{
											//gaizaozheli
											var rdd = /^(\w+-)*(((?!CA).)+\d+-)+(\w+-)*\/(-\w+)*(-((?!CA).)+\d+)+(-\w+)*$|^(\w+-)*(((?!CA).)+\d+-)+(\w+-)*\/(-\w+)+$|^(\w+-)+\/(-\w+)*(-((?!CA).)+\d+)+(-\w+)*$|^([\w\/]+-)*(((?!CA).)+\d+-?)+([\w\/]+-?)*$/ig
                                             if(rdd.test(z5))		
											 {
											 
											   var rJw = /9B/ig
									   if(rJw.test(z5))
									  omoj = "DBrailway"
									  else
									  omoj = "IET" 
											 
											 
											 
											 }
											 else
											
											 {
												 //add
					  var re110 = /CA[7][0123456][\d][\d]|CA[6][102456789][\d][\d]|CA[5][2325641960][\d][\d]/ig  //add201808
									          if (re110.test(z5))
									             omoj = "CodeShare(OverSeas)"
											  else
											    {
											        if(cOx == "CN")
									               {
											           if(multiCity(z5))
											           {omoj = "D+I"}
													   
												        else
													   {omoj = "I+D"}
										           }
												   else
												   {omoj = "I+D"}
												   
												   
												   
												}
												 //omoj = 
											 }  
										   if(omoj){return omoj}
											
											
											//gaizaozheli 
									   }
										else
										{
											        //iplusd once more4  CH-CN-CN-CH
													var micop = ""
													//add
													  var r0me = /^(\w+)-(\w+)-(\w+)-(\1)$/ig      // /^(\w+)-(\w+)-(\1)$/ig  //JP-CN-JP
                                                    if(r0me.test(d.replace("-/","")))
                                                    {
	                                                 var re111 = /^(\w+)-\/-(\w+)$/ig
	                                                 if(re111.test(z5))
	                                                 {micop = "PointToPoint"}
	                                                 else
												     {}
												     }
													//add
													if(z2 != z3 || _omL != _omR)
													{micop = "OpenJaw(OriginOJ)"}
													 if(z4.indexOf("/")!=-1)
									              {
													if(dm !=em)
													{micop = "OpenJaw(TurnaroundOJ)"}
									                if(z2 != z3 && dm != em)
													{micop = "OpenJaw(DoubleOJ)"}
													if(_omL != _omR && dm != em)
													{micop = "OpenJaw(DoubleOJ)"}
												   }
													var rmie = /^.*CN-CN.*$/ig
                                                     if(rmie.test(d))
													 
													 {
														 
														  //add
						  var re109 = /CA[7][0123456][\d][\d]|CA[6][102456789][\d][\d]|CA[5][2325641960][\d][\d]/ig  //add201808
									          if (re109.test(z5))
									          micop = "CodeShare(OverSeas)"
											  else
											  //add
											  {
												  
												  if(cOx == "CN")
									               {
											           if(multiCity(z5))
											           { micop = "D+I"}
													   else
													   { micop = "I+D"}
												   }
													   
												  else
												   { 
												         //add19
													 micop = "I+D"	 
													// if(z2 != z3 || _omL != _omR)
													// {micop = "OpenJaw(OriginOJxx4)"}
													 if(z4.indexOf("/")!=-1)
									                 {
													    if(dm !=em)
													    {micop = "OpenJaw(TurnaroundOJ)"}
									                    if(z2 != z3 && dm != em)
													    {micop = "OpenJaw(DoubleOJ)"}
												    	if(_omL != _omR && dm != em)
													    {micop = "OpenJaw(DoubleOJ)"}
												      }
														 
														 //add19
														
												   }
											  }
											  
											  
											  
											  //add
																									 
											 //
														 
														 
													 }
													 else
								{
									var re110 = /CA[7][0123456][\d][\d]|CA[6][102456789][\d][\d]|CA[5][2325641960][\d][\d]/ig  //add201808
									          if (re110.test(z5))
									            { 
												    micop = "CodeShare(OverSeas)"
												}
												 else
												{
														  //add
														     if(cOx == "CN")
									                       {
											                  if(multiCity(z5))
											                  { micop = "D+I"}
													   
												            }
												 }//add
								 }
													//iplusd once more4 fixed hhaha
													//
													//asdf
											      
	                                                 if(micop)
													 {return micop}
													 else
													 {
													     //add here 
													     if(omTaopiao(z4))
													      {return "TAOPIAO"}
												       else
													       {  
													       
													       //add
													       	  var r1me = /^(\w+)-(\w+)-(\w+)-(\1)$/ig  //JP-CN-JP   CN-JP-/-JP-CN
                                                    
                                                    if(r1me.test(d.replace("-/","")))  //CN-JP-JP-CN
                                                    {
	                                                 
	                                                 var re112 = /^(\w+)-\/-(\w+)$/ig
	                                                 if(re112.test(z5))
	                                                 {return "PointToPoint"}
	                                                 else
												     {return "ConnectingFlights(MultiCity)here1"}
												     }
													       
													       }
													       
													       //add
													 }
											     //asdf
											   
										}
										
									//add04210000	
								
									
							    }
		                 
		            }  
					    
					
					
		            
				} 
			}
				
	}
}
else
return ""
}

//add

function omuniqX(arr){
if(!arr){return ""}
var tmp = new Array();
for(var i in arr){
if(tmp.indexOf(arr[i])==-1){
if(arr[i] != "/"){
tmp.push(arr[i]);}
}
}
return tmp;
}
function omRpatch(re,s){

  re=eval("/"+re+"/ig")

  return s.match(re).length;

}
//add
function omTaopiao(x)
{
 var a = String(x)
 var e = new Array()
 var f = new Array()
 var b = a.split("/")
    for(var i=0;i<b.length;i++)
   {
       if(i%2==0)
       {
	    e.push(b[i])
       }
       else
       {
	    f.push(b[i])
       }
   }
 var nx = new Array() 
                     
 for(var xx in e)
 {
	nx.push(e[xx].replace(/\-+/ig,""))  
 }
 var result = omuniqW(nx)

 var xs = new Array()
 for(var ax in f)  
 {
   xs.push(f[ax].replace(/\-+/ig,""))	  
 }
 var reXult = omuniqW(xs)
 if(result.length ==1 && reXult.length ==1 )
 {
	var xB = result.join()
	var xC = reXult.join()
	var xD = xB +":"+ xC 
	var re = /^(\w{3})(\w{3})\:\2\1$/ig 
	 if(re.test(xD))
	 return "taopiao"
	 else
	 return ;
 }
 else
 {
     return ;
 }

}



function omuniqW(arr){
if(!arr){return ""}
var tmp = new Array();
for(var i in arr){
if(tmp.indexOf(arr[i])==-1)
{

tmp.push(arr[i]);

}
}
return tmp;
}

//////调试代码开始
//如何调用 和 模拟调试 routeTypeRT.js 和 routeTypeMC.js
var dataXayer = {};
    dataXayer.routeType = "RT";
	dataXayer.cabin = "E";
	dataXayer.depandArrCountry = "US-CN"
    dataXayer.wholeitibyCountry = "DE-CN-/-CN-DE"
	dataXayer.aircftTp = "E90:330:330:32N";
    dataXayer.wholefltNbr = "CA986-/-CA985" ; 
	dataXayer.products = "RT:SFO-PEK:SFO-PEK-/-PEK-SFO:E:Ad"
	dataXayer.depCountry = "US";
	dataXayer.arrCountry = "CN";
	dataXayer.routeType = "RT";
var seVar68 = dataXayer.routeType + ":" + dataXayer.cabin +":"+ dataXayer.depandArrCountry + ":" + dataXayer.wholeitibyCountry; 
var seVar46 = (routeTypeRTOW(seVar68) ? routeTypeRTOW(seVar68) : routeTypeMC(seVar68) )
var seVar62 = dataXayer.routeType +":"+ omCitytoCountryS(dataXayer.depCountry) + "-" + omCitytoCountryS(dataXayer.arrCountry)   
     
console.log(seVar46)
alert(seVar46)	
console.log(seVar62)
alert(seVar62)	
//上述代码用于 调试，上线后 全部删除即可

//上线后 要开启如下 全局代码 桥接代码 
//  dataXayer = clientSideData.Omniture;
//调试代码结束


