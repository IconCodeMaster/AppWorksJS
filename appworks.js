(function( $ ) {
  $.fn.apwRegistry = function() {
	  $(document.body).append('<span id="apwRegistry"></span>');
	  var datTrackerSelectorName = "#apwRegistry";
	  
	  //Create the starting arrays that will hold our registry information.
	  var startingDSR = [];
	  var startingCRR = [];
	  var startingCER = [];
	  var startingHR = [];
	  var startingBR = [];
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('dataStoreRegister', startingDSR);
	  elt.data('writeLockDSR', 0);
	  elt.data('contextRepresentativeRegister', startingCRR);
	  elt.data('writeLockCRR', 0);
	  elt.data('contentElementRegister', startingCER);
	  elt.data('writeLockCER', 0);
	  elt.data('handlerRegister', startingHR);
	  elt.data('writeLockHR', 0);
	  elt.data('bindingRegister', startingBR);
	  elt.data('writeLockBR', 0);
	  
	  var futureCall = "apwLangoliers()";
	  setTimeout(futureCall, 2000);
  };
})( jQuery );

function apwRegistryAddDataStore(inSelector, inApwID, inDSID)
{
	var curLock = $("#apwRegistry").data("writeLockDSR");
	var myLock = Math.floor(Math.random() * 1000000);
	
	if(curLock == 0)
	{
		//Lock is open. Set it to our lock value.
		$("#apwRegistry").data("writeLockDSR", myLock);
		var newLock = $("#apwRegistry").data("writeLockDSR");
		if(newLock == myLock)
		{
			//It looks like we got the lock. Proceed.
			var curDSR = $("#apwRegistry").data("dataStoreRegister");
			var newRow = [inSelector, inApwID, inDSID];
			curDSR.push(newRow);
			$("#apwRegistry").data("dataStoreRegister", curDSR);
			$("#apwRegistry").data("writeLockDSR", 0);
		}
		else
		{
			//We had trouble getting the lock. Run again in 50 ms.
			setTimeout(function(){apwRegistryAddDataStore(inSelector, inApwID, inDSID);}, 50);
		}
	}
	else
	{
		setTimeout(function(){apwRegistryAddDataStore(inSelector, inApwID, inDSID);}, 50);	
	}
}

function apwRegistryAddContextRepresentative(inSelector, inApwID, inCRID)
{
	var curLock = $("#apwRegistry").data("writeLockCRR");
	var myLock = Math.floor(Math.random() * 1000000);
	
	if(curLock == 0)
	{
		//Lock is open. Set it to our lock value.
		$("#apwRegistry").data("writeLockCRR", myLock);
		var newLock = $("#apwRegistry").data("writeLockCRR");
		if(newLock == myLock)
		{
			//It looks like we got the lock. Proceed.
			var curCRR = $("#apwRegistry").data("contextRepresentativeRegister");
			var newRow = [inSelector, inApwID, inCRID];
			curCRR.push(newRow);
			$("#apwRegistry").data("contextRepresentativeRegister", curCRR);
			$("#apwRegistry").data("writeLockCRR", 0);
		}
		else
		{
			//We had trouble getting the lock. Run again in 50 ms.
			setTimeout(function(){apwRegistryAddContextRepresentative(inSelector, inApwID, inCRID);}, 50);
		}
	}
	else
	{
		setTimeout(function(){apwRegistryAddContextRepresentative(inSelector, inApwID, inCRID);}, 50);	
	}
}

function apwRegistryAddContentElement(inSelector, inApwID, inCEID)
{
	var curLock = $("#apwRegistry").data("writeLockCER");
	var myLock = Math.floor(Math.random() * 1000000);
	
	if(curLock == 0)
	{
		//Lock is open. Set it to our lock value.
		$("#apwRegistry").data("writeLockCER", myLock);
		var newLock = $("#apwRegistry").data("writeLockCER");
		if(newLock == myLock)
		{
			//It looks like we got the lock. Proceed.
			var curCER = $("#apwRegistry").data("contentElementRegister");
			var newRow = [inSelector, inApwID, inCEID];
			curCER.push(newRow);
			$("#apwRegistry").data("contentElementRegister", curCER);
			$("#apwRegistry").data("writeLockCER", 0);
		}
		else
		{
			//We had trouble getting the lock. Run again in 50 ms.
			setTimeout(function(){apwRegistryAddContentElement(inSelector, inApwID, inCEID);}, 50);
		}
	}
	else
	{
		setTimeout(function(){apwRegistryAddContentElement(inSelector, inApwID, inCEID);}, 50);	
	}
}

function apwRegistryAddHandler(inSelector, inApwID, inDelegationContext, inDelegationSelector, inEventType, inHandlerObject)
{
	var curLock = $("#apwRegistry").data("writeLockHR");
	var myLock = Math.floor(Math.random() * 1000000);
	
	if(curLock == 0)
	{
		//Lock is open. Set it to our lock value.
		$("#apwRegistry").data("writeLockHR", myLock);
		var newLock = $("#apwRegistry").data("writeLockHR");
		if(newLock == myLock)
		{
			//It looks like we got the lock. Proceed.
			var curHR = $("#apwRegistry").data("handlerRegister");
			var newRow = [inSelector, inApwID, inDelegationContext, inDelegationSelector, inEventType, inHandlerObject];
			curHR.push(newRow);
			$("#apwRegistry").data("handlerRegister", curHR);
			$("#apwRegistry").data("writeLockHR", 0);
		}
		else
		{
			//We had trouble getting the lock. Run again in 50 ms.
			setTimeout(function(){apwRegistryAddHandler(inSelector, inApwID, inDelegationContext, inDelegationSelector, inEventType, inHandlerObject);}, 50);
		}
	}
	else
	{
		setTimeout(function(){apwRegistryAddHandler(inSelector, inApwID, inDelegationContext, inDelegationSelector, inEventType, inHandlerObject);}, 50);
	}
}

function apwRegistryAddBinding(inSelector, inApwID, inBindingSelector, inBindingObjectFlag, inEventType, inHandlerObject)
{
	var curLock = $("#apwRegistry").data("writeLockBR");
	var myLock = Math.floor(Math.random() * 1000000);
	
	if(curLock == 0)
	{
		//Lock is open. Set it to our lock value.
		$("#apwRegistry").data("writeLockBR", myLock);
		var newLock = $("#apwRegistry").data("writeLockBR");
		if(newLock == myLock)
		{
			//It looks like we got the lock. Proceed.
			var curBR = $("#apwRegistry").data("bindingRegister");
			var newRow = [inSelector, inApwID, inBindingSelector, inBindingObjectFlag, inEventType, inHandlerObject];
			curBR.push(newRow);
			$("#apwRegistry").data("bindingRegister", curBR);
			$("#apwRegistry").data("writeLockBR", 0);
		}
		else
		{
			//We had trouble getting the lock. Run again in 50 ms.
			setTimeout(function(){apwRegistryAddBinding(inSelector, inApwID, inBindingSelector, inBindingObjectFlag, inEventType, inHandlerObject);}, 50);
		}
	}
	else
	{
		setTimeout(function(){apwRegistryAddBinding(inSelector, inApwID, inBindingSelector, inBindingObjectFlag, inEventType, inHandlerObject);}, 50);
	}
}

function apwLangoliers()
{
	//Do DataStoreRegister processing...
	var curDSRLock = $("#apwRegistry").data("writeLockDSR");
	if(curDSRLock == 0)
	{
		var myDSRLock = Math.floor(Math.random() * 1000000);
		$("#apwRegistry").data("writeLockDSR", myDSRLock);
		var newDSRLock = $("#apwRegistry").data("writeLockDSR");
		if(newDSRLock == myDSRLock)
		{
			var curDSR = $("#apwRegistry").data("dataStoreRegister");
			var i = 0;
			for(i = 0; i < curDSR.length; i++)
			{
				var subDSR = curDSR[i];
				var curSelector = subDSR[0];
				var curApwID = subDSR[1];
				var curDSID = subDSR[2];
				var finder = $(curSelector + "[apwid=" + curApwID + "]");
				if(finder.length > 0)
				{
					//Don't do anything. We still have this item in the DOM.
				}
				else
				{
					//Can't find this item anymore. Kill the data store.
					$('#' + curDSID).remove();
					curDSR.splice(i, 1);
					i = i -1;
				}
			}
			//Put the adjusted array back in the registry.
			$("#apwRegistry").data("dataStoreRegister", curDSR);
			//Release the lock and move on.
			$("#apwRegistry").data("writeLockDSR", 0);
		}
	}
	
	//Do ContextRepresentativeRegister processing...
	var curCRRLock = $("#apwRegistry").data("writeLockCRR");
	if(curCRRLock == 0)
	{
		var myCRRLock = Math.floor(Math.random() * 1000000);
		$("#apwRegistry").data("writeLockCRR", myCRRLock);
		var newCRRLock = $("#apwRegistry").data("writeLockCRR");
		if(newCRRLock == myCRRLock)
		{
			var curCRR = $("#apwRegistry").data("contextRepresentativeRegister");
			var i = 0;
			for(i = 0; i < curCRR.length; i++)
			{
				var subCRR = curCRR[i];
				var curSelector = subCRR[0];
				var curApwID = subCRR[1];
				var curCRID = subCRR[2];
				var finder = $(curSelector + "[apwid=" + curApwID + "]");
				if(finder.length > 0)
				{
					//Don't do anything. We still have this item in the DOM.
				}
				else
				{
					//Can't find this item anymore. Kill the context representative.
					$('#' + curCRID).remove();
					curCRR.splice(i, 1);
					i = i -1;
				}
			}
			//Put the adjusted array back in the registry.
			$("#apwRegistry").data("contextRepresentativeRegister", curCRR);
			//Release the lock and move on.
			$("#apwRegistry").data("writeLockCRR", 0);
		}
	}
	
	//Do ContentElementRegister processing...
	var curCERLock = $("#apwRegistry").data("writeLockCER");
	if(curCERLock == 0)
	{
		var myCERLock = Math.floor(Math.random() * 1000000);
		$("#apwRegistry").data("writeLockCER", myCERLock);
		var newCERLock = $("#apwRegistry").data("writeLockCER");
		if(newCERLock == myCERLock)
		{
			var curCER = $("#apwRegistry").data("contentElementRegister");
			var i = 0;
			for(i = 0; i < curCER.length; i++)
			{
				var subCER = curCER[i];
				var curSelector = subCER[0];
				var curApwID = subCER[1];
				var curCEID = subCER[2];
				var finder = $(curSelector + "[apwid=" + curApwID + "]");
				if(finder.length > 0)
				{
					//Don't do anything. We still have this item in the DOM.
				}
				else
				{
					//Can't find this item anymore. Kill the content element.
					$('#' + curCEID).remove();
					curCER.splice(i, 1);
					i = i -1;
				}
			}
			//Put the adjusted array back in the registry.
			$("#apwRegistry").data("contentElementRegister", curCER);
			//Release the lock and move on.
			$("#apwRegistry").data("writeLockCER", 0);
		}
	}
	
	//Do HandlerRegister processing...
	var curHRLock = $("#apwRegistry").data("writeLockHR");
	if(curHRLock == 0)
	{
		var myHRLock = Math.floor(Math.random() * 1000000);
		$("#apwRegistry").data("writeLockHR", myHRLock);
		var newHRLock = $("#apwRegistry").data("writeLockHR");
		if(newHRLock == myHRLock)
		{
			var curHR = $("#apwRegistry").data("handlerRegister");
			var i = 0;
			for(i = 0; i < curHR.length; i++)
			{
				var subHR = curHR[i];
				var curSelector = subHR[0];
				var curApwID = subHR[1];
				var curDelCon = subHR[2];
				var curDelSel = subHR[3];
				var curEvType = subHR[4];
				var curHandObj = subHR[5];
				var finder = $(curSelector + "[apwid=" + curApwID + "]");
				if(finder.length > 0)
				{
					//Don't do anything. We still have this item in the DOM.
				}
				else
				{
					//Can't find this item anymore. Kill the handler.
					var handRemove = "$(" + curDelCon + ").undelegate('" + curDelSel + "', '" + curEvType + "', curHandObj)";
					var ret8 = eval(handRemove);
					curHR.splice(i, 1);
					i = i -1;
				}
			}
			//Put the adjusted array back in the registry.
			$("#apwRegistry").data("handlerRegister", curHR);
			//Release the lock and move on.
			$("#apwRegistry").data("writeLockHR", 0);
		}
	}
	
	//Do BindingRegister processing...
	var curBRLock = $("#apwRegistry").data("writeLockBR");
	if(curBRLock == 0)
	{
		var myBRLock = Math.floor(Math.random() * 1000000);
		$("#apwRegistry").data("writeLockBR", myBRLock);
		var newBRLock = $("#apwRegistry").data("writeLockBR");
		if(newBRLock == myBRLock)
		{
			var curBR = $("#apwRegistry").data("bindingRegister");
			var i = 0;
			for(i = 0; i < curBR.length; i++)
			{
				var subBR = curBR[i];
				var curSelector = subBR[0];
				var curApwID = subBR[1];
				var curBindSel = subBR[2];
				var curObjFlag = subBR[3];
				var curEvType = subBR[4];
				var curHandObj = subBR[5];
				var finder = $(curSelector + "[apwid=" + curApwID + "]");
				if(finder.length > 0)
				{
					//Don't do anything. We still have this item in the DOM.
				}
				else
				{
					//Can't find this item anymore. Kill the handler.
					var handRemove = "";
					if(curObjFlag == "Y")
					{
						handRemove = "$(" + curBindSel + ").unbind('" + curEvType + "', curHandObj)";
					}
					else
					{
						handRemove = "$('" + curBindSel + "').unbind('" + curEvType + "', curHandObj)";
					}
					var ret8 = eval(handRemove);
					curBR.splice(i, 1);
					i = i -1;
				}
			}
			//Put the adjusted array back in the registry.
			$("#apwRegistry").data("bindingRegister", curBR);
			//Release the lock and move on.
			$("#apwRegistry").data("writeLockBR", 0);
		}
	}
	
	//Call ourselves again with an odd number so we don't always lapse on other processes set to even numbers.
	setTimeout("apwLangoliers()", 199);
}

function apwFixBrowserIssues()
{
	var zIndexNumber = 1000;
	$("div").each(function() {
		$(this).css('zIndex', zIndexNumber);
    	zIndexNumber -= 10;
								});
}

jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

/*
AppWorks specific functions here.
Just making use of Klaus's cookie manager jQuery plugin above.
*/
function apwSetAccessToken(inToken)
{
	$.cookie('apwAccessToken', inToken, { expires: 14, path: '/' });
}

function apwDeleteAccessToken()
{
	$.cookie('apwAccessToken', null, { expires: 14, path: '/' });
}

function apwGetAccessToken()
{
	var currentToken = $.cookie('apwAccessToken');
	return currentToken;
}

function apwDataManagerSetGlobalVariable(varName, inValue)
{
	$.cookie(varName, inValue, { path: '/' });
}

function apwDataManagerGetGlobalVariable(varName)
{
	var currentValue = $.cookie(varName);
	return currentValue;
}

function apwDataManagerGatherMixedItems(selectionString, dataList, dataName)
{
	//selectionString is used to determine where to look for data.
	//If you are doing a PURE DATA grab, the elements selected with selectionString
	//will be the source of the data.
	//dataName is the name of the array that is returned, prepared for transmission to the server.
	//dataList can contain 2 different types of items.
	//The first is a DATA item, which is listed as "DATA~dataItem"
	//This will pull the data from the top-level item and name it how you want.
	//The second is a VALUE item, which is listed as "VALUE~.inputBox"
	//This will pull the value from the item found using the stuff to the right of the ~ as a selection string
	//Example: {"EmailID":"DATA~emailid","EmailDID":"DATA~emaildid","EmailValue":"VALUE~.emailTextBox","EmailType":"VALUE~.emailTypeSelect"}
	var checkyList = $(selectionString);
	var outString = "";
	if(checkyList.length > 0)
	{
		var i = 0;
		outString = dataName + "=[";
		for(i = 0; i < checkyList.length; i++)
		{
			var tmpElement = $(checkyList[i]);
			if(i == 0)
			{
				outString += "{";	
			}
			else
			{
				outString += ",{";
			}
			if(dataList.length > 1)
			{
				var obj = jQuery.parseJSON(dataList);
				var j = 0;
				for (var prop in obj)
				{
					var tmpDataValue = "";
					var valArray = obj[prop].split("~");
					var rightSide = valArray[1];
					if(valArray[0] == "VALUE")
					{
						var reallyTempElement = tmpElement.find(rightSide);
						tmpDataValue = reallyTempElement.val();
					}
					else
					{
						if(rightSide.substring(0,5) == "_apw_")
						{
							tmpDataValue = apwDataManagerGetGlobalVariable(rightSide);
						}
						else
						{
							tmpDataValue = tmpElement.data(rightSide);
						}	
					}
					
					if(valArray[0] == "SUBARRAY")
					{
						var strValue = String(tmpDataValue);
						var cleanValue = strValue.replace(/&/g, "%26");
						cleanValue = cleanValue.replace(/(\r\n|\r|\n)/g, '\\n');
						if(j > 0)
						{
							outString += ",";	
						}
						outString += '"' + prop + '":' + cleanValue;
					}
					else
					{
						var strValue = String(tmpDataValue);
						var cleanValue = strValue.replace(/&/g, "%26");
						cleanValue = cleanValue.replace(/(\r\n|\r|\n)/g, '\\n');
						cleanValue = cleanValue.replace(/"/g, '\\"');
						if(j > 0)
						{
							outString += ",";	
						}
						outString += '"' + prop + '":"' + cleanValue + '"';
					}
					j++;
				}
			}
			outString += "}";
		}
		outString += "]";
	}
	else
	{
		outString = dataName + "=0";	
	}
	return outString;
}

function apwDataManagerGatherMixedItemsFromClickedItem(clickedObject, dataList, dataName)
{
	//clickedObject is used to determine where to look for data.
	//If you are doing a PURE DATA grab, the elements selected with clickedObject
	//will be the source of the data.
	//dataName is the name of the array that is returned, prepared for transmission to the server.
	//dataList can contain 2 different types of items.
	//The first is a DATA item, which is listed as "DATA~dataItem"
	//This will pull the data from the top-level item and name it how you want.
	//The second is a VALUE item, which is listed as "VALUE~.inputBox"
	//This will pull the value from the item found using the stuff to the right of the ~ as a selection string
	//Example: {"EmailID":"DATA~emailid","EmailDID":"DATA~emaildid","EmailValue":"VALUE~.emailTextBox","EmailType":"VALUE~.emailTypeSelect"}
	var checkyList = $(clickedObject);
	var outString = "";
	if(checkyList.length > 0)
	{
		var i = 0;
		outString = dataName + "=[";
		for(i = 0; i < checkyList.length; i++)
		{
			var tmpElement = $(checkyList[i]);
			if(i == 0)
			{
				outString += "{";	
			}
			else
			{
				outString += ",{";
			}
			if(dataList.length > 1)
			{
				var obj = jQuery.parseJSON(dataList);
				var j = 0;
				for (var prop in obj)
				{
					var tmpDataValue = "";
					var valArray = obj[prop].split("~");
					var rightSide = valArray[1];
					if(valArray[0] == "VALUE")
					{
						var reallyTempElement = tmpElement.find(rightSide);
						tmpDataValue = reallyTempElement.val();
					}
					else
					{
						if(rightSide.substring(0,5) == "_apw_")
						{
							tmpDataValue = apwDataManagerGetGlobalVariable(rightSide);
						}
						else
						{
							tmpDataValue = tmpElement.data(rightSide);
						}	
					}
					var strValue = String(tmpDataValue);
					var cleanValue = strValue.replace(/&/g, "%26");
					cleanValue = cleanValue.replace(/(\r\n|\r|\n)/g, '\\n');
					cleanValue = cleanValue.replace(/"/g, '\\"');
					if(j > 0)
					{
						outString += ",";	
					}
					outString += '"' + prop + '":"' + cleanValue + '"';
					j++;
				}	
			}
			outString += "}";
		}
		outString += "]";
	}
	else
	{
		outString = dataName + "=0";	
	}
	return outString;
}

function apwDataManagerGatherFormValues(fieldList)
{
	var outString = "";
	if(fieldList.length > 1)
	{
		var obj = jQuery.parseJSON(fieldList);
		var j = 0;
		var radioSelectedFound = "";
		for (var prop in obj)
		{
			var tmpFieldName = "*[name=" + obj[prop] + "]";
			var tmpShortName = obj[prop];
			var tmpField = $(tmpFieldName);
			if(tmpField.is(":input"))
			{
				if(tmpField.is(":checkbox"))
				{
					if(tmpField.is(":checked"))
					{
						var tmpDataValue = tmpField.val();
						var strValue = String(tmpDataValue);
						var cleanValue = strValue.replace(/&/g, "%26");
						if(j > 0)
						{
							outString += "&";	
						}
						outString += prop + '=' + cleanValue;
					}
					else
					{
						if(j > 0)
						{
							outString += "&";	
						}
						outString += prop + '=0';
					}
				}
				else
				{
					if(tmpField.is(":radio"))
					{
						var n = 0;
						var findy = 0;
						for(n = 0; n < tmpField.length; n++)
						{
							if(radioSelectedFound == tmpShortName)
							{
								//Skip - we've found a selected radio button for this set.
							}
							else
							{
								if($(tmpField[n]).is(":checked"))
								{
									//This one is checked, and no other one is so far for this set.
									var tmpDataValue = $(tmpField[n]).val();
									var strValue = String(tmpDataValue);
									var cleanValue = strValue.replace(/&/g, "%26");
									if(j > 0)
									{
										outString += "&";	
									}
									outString += prop + '=' + cleanValue;
									radioSelectedFound = tmpShortName;
									findy = 1;
								}
								else
								{
									//Do nothing here.
								}
							}
						}
						if(findy == 0)
						{
							//We never found a checked item. Put in a 0.
							if(j > 0)
							{
								outString += "&";	
							}
							outString += prop + '=0';	
						}
					}
					else
					{
						if(tmpField.is("select"))
						{
							var tmpDataValue = tmpField.val() || [];
							if(jQuery.isArray(tmpDataValue))
							{
								//We have either an empty or filled array as the result.
								if(tmpDataValue.length > 0)
								{
									var k = 0;
									var finalString = "[";
									for(k = 0; k < tmpDataValue.length; k++)
									{
										var strValue = String(tmpDataValue[k]);
										var cleanValue = strValue.replace(/&/g, "%26");
										cleanValue = cleanValue.replace(/\\/g, '\\\\');
										cleanValue = cleanValue.replace(/"/g, '\\"');
										if(k > 0)
										{
											finalString += ",";	
										}
										finalString += '"' + cleanValue + '"';
									}
									finalString += "]";
									if(j > 0)
									{
										outString += "&";	
									}
									outString += prop + '=' + finalString;
								}
								else
								{
									if(j > 0)
									{
										outString += "&";	
									}
									outString += prop + '=0';
								}
							}
							else
							{
								//We have a straight value as the result.
								var strValue = String(tmpDataValue);
								var cleanValue = strValue.replace(/&/g, "%26");
								if(j > 0)
								{
									outString += "&";	
								}
								outString += prop + '=' + cleanValue;
							}
						}
						else
						{
							var tmpDataValue = tmpField.val();
							var strValue = String(tmpDataValue);
							var cleanValue = strValue.replace(/&/g, "%26");
							if(j > 0)
							{
								outString += "&";	
							}
							outString += prop + '=' + cleanValue;
						}
					}
				}
			}
			else
			{
				//Ignore this item. It's not an input item.	
			}
			j++;
		}	
	}
	return outString;
}

function apwDataManagerGatherRadioData(radioName, dataList, dataName)
{
	var checkyList = $("input[name=" + radioName + "]:radio:checked");
	var outString = "";
	if(checkyList.length > 0)
	{
		outString = dataName + "={";
		if(dataList.length > 1)
		{
			var obj = jQuery.parseJSON(dataList);
			var j = 0;
			for (var prop in obj)
			{
				var tmpDataValue = checkyList.data(obj[prop]);
				var strValue = String(tmpDataValue);
				var cleanValue = strValue.replace(/&/g, "%26");
				cleanValue = cleanValue.replace(/\\/g, '\\\\');
				cleanValue = cleanValue.replace(/"/g, '\\"');
				if(j > 0)
				{
					outString += ",";	
				}
				outString += '"' + prop + '":"' + cleanValue + '"';
				j++;
			}	
		}
		outString += "}";
	}
	else
	{
		outString = dataName + "=0";
	}
	
	return outString;
}

function apwDataManagerGetPreparedDataFromSelection(selectionString, dataList, dataName)
{
	var checkyList = $(selectionString);
	var outString = "";
	if(checkyList.length > 0)
	{
		var i = 0;
		outString = dataName + "=[";
		for(i = 0; i < checkyList.length; i++)
		{
			var tmpElement = $(checkyList[i]);
			if(i == 0)
			{
				outString += "{";	
			}
			else
			{
				outString += ",{";
			}
			if(dataList.length > 1)
			{
				var obj = jQuery.parseJSON(dataList);
				var j = 0;
				for (var prop in obj)
				{
					var tmpDataValue = "";
					if(obj[prop] == "VALUE")
					{
						tmpDataValue = tmpElement.val();
					}
					else
					{
						if(obj[prop].substring(0,5) == "_apw_")
						{
							tmpDataValue = apwDataManagerGetGlobalVariable(obj[prop]);
						}
						else
						{
							tmpDataValue = tmpElement.data(obj[prop]);
						}	
					}
					var strValue = String(tmpDataValue);
					var cleanValue = strValue.replace(/&/g, "%26");
					cleanValue = cleanValue.replace(/\\/g, '\\\\');
					cleanValue = cleanValue.replace(/"/g, '\\"');
					if(j > 0)
					{
						outString += ",";	
					}
					outString += '"' + prop + '":"' + cleanValue + '"';
					j++;
				}	
			}
			outString += "}";
		}
		outString += "]";
	}
	else
	{
		outString = dataName + "=0";	
	}
	
	return outString;
}

function apwDataManagerGetRawDataFromSelection(selectionString, dataList)
{
	var els = $(selectionString);
	if(els.length > 0)
	{
		var i = 0;
		if(dataList.length > 1)
		{
			var obj = jQuery.parseJSON(dataList);
			var outPut = [];
			for(i=0;i < els.length;i++)
			{
				var curEl = $(els[i]);
				var obj2 = jQuery.parseJSON(dataList);
				for (var prop in obj)
				{
					var tmpDataValue = curEl.data(obj[prop]);
					obj2[prop] = tmpDataValue;
				}
				outPut.push(obj2);
			}
			return outPut;
		}
		else
		{
			return 0;	
		}
	}
	else
	{
		return 0;	
	}
}

function apwDataManagerGetPreparedDataFromItem(elementID, dataList)
{
	var curEl = $("#" + elementID);
	var outString = "";
	if(curEl.length > 0)
	{
		if(dataList.length > 1)
		{
			var obj = jQuery.parseJSON(dataList);
			var i = 0;
			for (var prop in obj)
			{
				var tmpDataValue = curEl.data(obj[prop]);
				var strValue = String(tmpDataValue);
				var cleanValue = strValue.replace(/&/g, "%26");
				if(i > 0)
				{
					outString += "&";	
				}
				outString += prop + '=' + cleanValue;
				i++;
			}	
		}
	}
	else
	{
		outString = "nada=0";
	}
	
	return outString;
}

function apwDataManagerGetPreparedDataFromObject(elementObj, dataList)
{
	var curEl = $(elementObj);
	var outString = "";
	if(curEl.length > 0)
	{
		if(dataList.length > 1)
		{
			var obj = jQuery.parseJSON(dataList);
			var i = 0;
			for (var prop in obj)
			{
				var tmpDataValue = curEl.data(obj[prop]);
				var strValue = String(tmpDataValue);
				var cleanValue = strValue.replace(/&/g, "%26");
				if(i > 0)
				{
					outString += "&";	
				}
				outString += prop + '=' + cleanValue;
				i++;
			}	
		}
	}
	else
	{
		outString = "nada=0";
	}
	
	return outString;
}

function apwDataManagerGetRawDataFromItem(elementID, dataList)
{
	var curEl = $("#" + elementID);
	if(curEl.length > 0)
	{
		if(dataList.length > 1)
		{
			var obj = jQuery.parseJSON(dataList);
			var obj2 = jQuery.parseJSON(dataList);
			for (var prop in obj)
			{
				var tmpDataValue = curEl.data(obj[prop]);
				obj2[prop] = tmpDataValue;
			}
			return obj2;
		}
		else
		{
			return 0;
		}
	}
	else
	{
		return 0;	
	}
}

function apwDataManagerGetRawDataFromObject(elementObj, dataList)
{
	var curEl = $(elementObj);
	if(curEl.length > 0)
	{
		if(dataList.length > 1)
		{
			var obj = jQuery.parseJSON(dataList);
			var obj2 = jQuery.parseJSON(dataList);
			for (var prop in obj)
			{
				var tmpDataValue = curEl.data(obj[prop]);
				obj2[prop] = tmpDataValue;
			}
			return obj2;	
		}
		else
		{
			return 0;
		}
	}
	else
	{
		return 0;	
	}
}

function apwDataManagerSetData(selectorString, dataField, inData)
{
	$(selectorString).data(dataField, inData);
}

function apwDataManagerGatherCheckboxData(checkboxesSelector, dataList, dataName)
{
	var checkyList = $(checkboxesSelector);
	var outString = "";
	if(checkyList.length > 0)
	{
		var i = 0;
		outString = dataName + "=[";
		for(i = 0; i < checkyList.length; i++)
		{
			var tmpElement = $(checkyList[i]);
			if(i == 0)
			{
				outString += "{";	
			}
			else
			{
				outString += ",{";
			}
			if(dataList.length > 1)
			{
				var obj = jQuery.parseJSON(dataList);
				var j = 0;
				for (var prop in obj)
				{
					var tmpDataValue = tmpElement.data(obj[prop]);
					var strValue = String(tmpDataValue);
					var cleanValue = strValue.replace(/&/g, "%26");
					cleanValue = cleanValue.replace(/\\/g, '\\\\');
					cleanValue = cleanValue.replace(/"/g, '\\"');
					if(j > 0)
					{
						outString += ",";	
					}
					outString += '"' + prop + '":"' + cleanValue + '"';
					j++;
				}	
			}
			outString += "}";
		}
		outString += "]";
	}
	else
	{
		outString = dataName + "=0";	
	}
	
	return outString;
}

function apwDataManagerMergeData(inString1, inString2)
{
	return inString1 + "&" + inString2;
}

(function( $ ) {
  $.fn.apwAnalytics = function(options) {
  	
	var settings = $.extend( {
	  'passToken' : 'N',
	  'postURL' : '',
	  'analyticsHandle' : '',
	  'anchorSelector' : 'body'
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwAnalyticsData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwAnalyticsData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '" apwAnalyticsHandle="' + sets.analyticsHandle + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('passToken', sets.passToken);
	  elt.data('postURL', sets.postURL);
	  elt.data('analyticsHandle', sets.analyticsHandle);
	  elt.data('anchorSelector', sets.anchorSelector);
	  elt.data('presence', 'Y');
	  
	  var curAPWID = parseInt($(sets.anchorSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.anchorSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw errors as needed
	  if(sets.postURL.length < 1)
	  {
		  alert("AppWorks Exception 14010\nLibrary: apwAnalytics\nType: Input parameters missing\nCause:Destination URL for recording analytics is missing. See parameter 'postURL' in documentation.");
	  }
	  
	  if(sets.analyticsHandle.length < 1)
	  {
		  alert("AppWorks Exception 14020\nLibrary: apwAnalytics\nType: Input parameters missing\nCause:Named handle for this apwAnalytics instance is not defined. Posting analytics will not be possible. See parameter 'analyticsHandle' in documentation.");
	  }
	  
	  apwRegistryAddDataStore(sets.anchorSelector, curAPWID, datTrackerName);
  };
})( jQuery );

function apwAnalyticsRecordAction(analyticsHandle, actionString, parameter1, parameter2)
{
	//Get the real data handle...
	var realDataHandle = "#" + $("span[apwAnalyticsHandle=" + analyticsHandle + "]").attr("id");
	
	//Get the needed information
	var urly = $(realDataHandle).data("postURL");
	var passTok = $(realDataHandle).data("passToken");
	
	//Put together the transmission string...
	var actionStringStringed = String(actionString);
	var param1Stringed = String(parameter1);
	var param2Stringed = String(parameter2);
	var actionStringCleaned = actionStringStringed.replace(/&/g, "%26");
	var param1Cleaned = param1Stringed.replace(/&/g, "%26");
	var param2Cleaned = param2Stringed.replace(/&/g, "%26");
	var endString = "d=" + actionStringCleaned + "&p1=" + param1Cleaned + "&p2=" + param2Cleaned;
	
	if(passTok == "Y")
	{
		accTok = apwGetAccessToken();
		endString += "&t=" + accTok;
	}
	
	//Post the analytics information to the server...
	jQuery.ajax({type: "POST", url: urly, data:endString, dataType: "html"});
}

function apwAnalyticsReportBrowserInformation(analyticsHandle)
{
	//Get the browser information for the current visitor
	/*
	//NOTE: On 1-20-2013 this functionality was commented out because jQuery.browser() became unavailable
	//in jQuery 1.9.0 and later. Without jQuery.browser() functionality, additional scripts would need to be used
	//to detect the browser type and version... and would need to be updated regularly. Prior to AppWorks
	//being updated on a reliable schedule, the world is better off without this functionality being present
	//but unreliable. REMOVED UNTIL IMPROVED
	
	var curVers = jQuery.browser.version;
	var curBrow = "";
	
	if(jQuery.browser.msie)
	{
		curBrow = "Internet Explorer";
	}
	else
	{
		if(jQuery.browser.webkit)
		{
			curBrow = "Safari or Chrome";
		}
		else
		{
			if(jQuery.browser.mozilla)
			{
				curBrow = "Firefox";
			}
			else
			{
				if(jQuery.browser.opera)
				{
					curBrow = "Opera";
				}
				else
				{
					curBrow = "Other";
				}
			}	
		}
	}
	
	//Report it as a recorded action on this analytics handle.
	apwAnalyticsRecordAction(analyticsHandle, "Used Browser", curBrow, curVers);
	*/
}

(function( $ ) {
  $.fn.apwAnimation = function(options) {
	var settings = $.extend( {
      'animatablesSelector' : '',
	  'animationHandle' : '',
	  'imageURL' : '',
	  'loop' : 'N',
	  'advancedTiming' : 'N',
	  'timeBetweenFrames' : 100,
	  'frameCoordinates' : '',
	  'timingProgression' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwAnimationData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwAnimationData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '" apwAnimationHandle="' + sets.animationHandle + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('animatablesSelector', sets.animatablesSelector);
	  elt.data('animationHandle', sets.animationHandle);
	  elt.data('imageURL', sets.imageURL);
	  elt.data('loop', sets.loop);
	  elt.data('advancedTiming', sets.advancedTiming);
	  elt.data('timeBetweenFrames', sets.timeBetweenFrames);
	  elt.data('frameCoordinates', sets.frameCoordinates);
	  elt.data('timingProgression', sets.timingProgression);
	  elt.data('currentFrame', 1);
	  elt.data('stopCalled', 'N');
	  elt.data('stoppingFrame', 1);
	  elt.data('isRunning', 'N');
	  var blanky = [];
	  elt.data('frameArray', blanky);
	  elt.data('timingArray', blanky);
	  elt.data('numberOfFrames', 0);
	  elt.data('presence', 'Y');
	  
	  //Add apwID to the clickable element.
	  var curAPWID = parseInt($(sets.animatablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.animatablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Parse the frame coordinates and store them in an array.
	  var tempCoordArray = [];
	  var totalFrames = 0;
	  var topArr = sets.frameCoordinates.split(",");
	  //alert("About to parse frame coords - total splits is " + topArr.length);
	  for(i = 0; i < topArr.length; i++)
	  {
		  var subArr = topArr[i].split(":");
		  //alert("subArr length is " + subArr.length + " in iteration " + i);
		  var tempTop = parseInt(subArr[0]) * -1;
		  var tempLeft = parseInt(subArr[1]) * -1;
		  //alert("tempTop is " + tempTop + " and tempLeft is " + tempLeft);
		  tempCoordArray[i] = [];
		  tempCoordArray[i][0] = tempLeft;
		  tempCoordArray[i][1] = tempTop;
		  totalFrames++;
		  //alert("totalFrames is " + totalFrames);
	  }
	  
	  //alert("total frames was " + totalFrames);
	  //Set the new information back into the data repository.
	  elt.data('frameArray', tempCoordArray);
	  elt.data('numberOfFrames', totalFrames);
	  
	  if(totalFrames == 0)
	  {
		//Throw an error stating that no frames have been defined.
		alert("AppWorks Exception 13020\nLibrary: apwAnimation\nType: Input parameters parsing exception\nCause:No frames could be parsed. Frame count is zero.");
	  }
	  
	  //If we are using advanced timing, parse the timing chain into an array and store it.
	  if(sets.advancedTiming == "Y")
	  {
		  var tempTimingArray = [];
		  var totalTimes = 0;
		  timArr = sets.timingProgression.split(",");
		  for(j = 0; j < timArr.length; j++)
		  {
			  tempTimingArray[j] = parseInt(timArr[j]);
		  }
		  
		  totalTimes = timArr.length;
		  
		  //Throw an error if there are not enough timing items...
		  if(totalTimes == totalFrames)
		  {
			  //We can set the array in the data repository as the available timing information
			  elt.data('timingArray', tempTimingArray);
		  }
		  else
		  {
			  //We do not have a match. Throw an error and switch to simple animation mode.
			  alert("AppWorks Exception 13021\nLibrary: apwAnimation\nType: Input parameters parsing exception\nCause:Sequence of frames and specified timing chain do not contain the same number of items");
			  elt.data('advancedTiming', 'N');
		  }
	  }
	  
	  apwRegistryAddDataStore(sets.animatablesSelector, curAPWID, datTrackerName);
  };
})( jQuery );

function apwAnimationSequenceAdvance(realDataHandle)
{
	var curFrame = $(realDataHandle).data("currentFrame");
	var totFrame = $(realDataHandle).data("numberOfFrames");
	var stopCall = $(realDataHandle).data("stopCalled");
	var stopFrame = $(realDataHandle).data("stoppingFrame");
	
	if((stopCall == "Y") && ((stopFrame == curFrame) || (stopFrame == 0)))
	{
		//We are supposed to stop now.
		//Since we are already on the final frame, so just don't do anything.
		//We stop by NOT calling ourselves to load the next animation frame.
		$(realDataHandle).data("stopCalled", "N");
		$(realDataHandle).data("isRunning", "N");
	}
	else
	{
		var loopWant = $(realDataHandle).data("loop");
		
		if((loopWant == "N") && (curFrame == totFrame))
		{
			//We are NOT looping, and we have already played the last frame
			//So do nothing, and stop by not calling ourselves again.
			$(realDataHandle).data("isRunning", "N");
		}
		else
		{
			var nextFrame = 0;
			var nextTime = 0;
			
			if((loopWant == "Y") && (curFrame == totFrame))
			{
				//We need to go back to the first frame.
				nextFrame = 1;
			}
			else
			{
				nextFrame = curFrame + 1;
			}
			
			var advTim = $(realDataHandle).data("advancedTiming");
			
			if(advTim == "Y")
			{
				var timeArr = $(realDataHandle).data("timingArray");
				nextTime = timeArr[(nextFrame - 1)];
			}
			else
			{
				nextTime = $(realDataHandle).data("timeBetweenFrames");
			}
			
			var animObjectSel = $(realDataHandle).data("animatablesSelector");
			var frameArray = $(realDataHandle).data("frameArray");
			var tempTop = frameArray[(nextFrame - 1)][1];
			var tempLeft = frameArray[(nextFrame - 1)][0];
			var posString = "" + tempLeft + "px " + tempTop + "px";
			
			$(animObjectSel).css("background-position", posString);
			$(realDataHandle).data("currentFrame", nextFrame);
			
			//Call ourselves with the right timing, so we play the next frame or stop on the next round.
			setTimeout("apwAnimationSequenceAdvance('" + realDataHandle + "')", nextTime);
		}
	}
}

function apwAnimationStop(animationHandle, landingFrame)
{
	//Get the actual data handle
	var realDataHandle = "#" + $("span[apwAnimationHandle=" + animationHandle + "]").attr("id");
	
	//Set the stop flag
	$(realDataHandle).data("stopCalled","Y");
	$(realDataHandle).data("isRunning", "N");
	
	if(typeof landingFrame == "undefined")
	{
		//We didn't get anything for "landingFrame"
		//Set the stopping frame to "0" so we don't stop on anything in particular
		$(realDataHandle).data("stoppingFrame", 0);
	}
	else
	{
		//Set the stopping frame
		$(realDataHandle).data("stoppingFrame", landingFrame);
	}
}

function apwAnimationStart(animationHandle, startingFrame)
{
	//Get the actual data handle
	var realDataHandle = "#" + $("span[apwAnimationHandle=" + animationHandle + "]").attr("id");
	var curRun = $(realDataHandle).data("isRunning");
	if(curRun == "Y")
	{
		//This animation is already running... so don't do anything.
	}
	else
	{
		var theTarget = $(realDataHandle).data("animatablesSelector");
		var theURL = $(realDataHandle).data("imageURL");
		
		//Set the appropriate CSS attributes to make the screen element animate across browsers
		$(theTarget).css("background-repeat","no-repeat");
		//$(theTarget).css("background-attachment","fixed");
		$(theTarget).css("background-image","url('" + theURL + "')");
		
		if(typeof startingFrame == "undefined")
		{
			//We didn't get anything for "startingFrame"
			//Leave the current frame where it is, so that we start the animation from where we left off.
		}
		else
		{
			//Set the current frame to the starting frame
			$(realDataHandle).data("currentFrame", (startingFrame - 1));
		}
		
		//Kick off the animation
		$(realDataHandle).data("stopCalled", "N");
		$(realDataHandle).data("isRunning", "Y");
		apwAnimationSequenceAdvance(realDataHandle);
	}
}

function apwAnimationSetFrame(animationHandle, frameNumber)
{
	//Get the actual data handle
	var realDataHandle = "#" + $("span[apwAnimationHandle=" + animationHandle + "]").attr("id");
	var theTarget = $(realDataHandle).data("animatablesSelector");
	var theURL = $(realDataHandle).data("imageURL");
	var frameArray = $(realDataHandle).data("frameArray");
	var tempTop = frameArray[(frameNumber - 1)][1];
	var tempLeft = frameArray[(frameNumber - 1)][0];
	var posString = "" + tempLeft + "px " + tempTop + "px";
	
	//Set the current frame
	$(realDataHandle).data("currentFrame", frameNumber);
	
	//Set the appropriate CSS attributes to make the screen element animate across browsers
	$(theTarget).css("background-repeat","no-repeat");
	//$(theTarget).css("background-attachment","fixed");
	$(theTarget).css("background-image","url('" + theURL + "')");
	$(theTarget).css("background-position", posString);
}

(function( $ ) {
  $.fn.apwAutoComplete = function(options) {
  	
	var settings = $.extend( {
	  'loadingDisplayFunction' : 'apwAutoCompleteLoadingDisplayBlank',
	  'loadingFinishDisplayFunction' : 'apwAutoCompleteLoadingDisplayFinishBlank',
	  'loadFailedFunction' : 'apwAutoCompleteLoadFailedBlank',
	  'enterKeyFunction' : 'apwAutoCompleteEnterKeyBlank',
	  'listSelectorString' : '',
	  'listHighlightFunction' : 'apwAutoCompleteListHighlightBlank',
	  'listUnHighlightFunction' : 'apwAutoCompleteListUnHighlightBlank',
	  'listClickFunction' : 'apwAutoCompleteListClickBlank',
	  'inputBoxElement' : '',
	  'dataPostName' : '',
	  'minimumCharacters' : 3,
	  'width' : 40,
	  'height' : 0,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#000000',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#FFFFFF',
	  'slideSpeed': 0,
	  'fillFromURL' : '',
	  'passToken' : 'N',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'requiredState' : '',
	  'putDataValueInBox' : 'N',
	  'putDataValueFieldName' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwAutoCompleteData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwAutoCompleteData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwAutoCompleteRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwAutoCompleteRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwAutoComplete" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwAutoComplete" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('inputBoxElement', sets.inputBoxElement);
	  elt.data('minimumCharacters', sets.minimumCharacters);
	  elt.data('offsetTop', sets.offsetTop);
	  elt.data('offsetLeft', sets.offsetLeft);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('dataPostName', sets.dataPostName);
	  elt.data('isOpen', 'N');
	  //elt.data('didClickInside', 'N');
	  elt.data('isFocused', 'N');
	  elt.data('isEntering', 'N');
	  elt.data('slideSpeed', sets.slideSpeed);
	  elt.data('fillFromURL', sets.fillFromURL);
	  elt.data('lastValue', '');
	  elt.data('passToken', sets.passToken);
	  elt.data('loadDataPreparationFunction', sets.loadDataPreparationFunction);
	  elt.data('loadDataAdditionalString', sets.loadDataAdditionalString);
	  elt.data('loadingDisplayFunction', sets.loadingDisplayFunction);
	  elt.data('loadingFinishDisplayFunction', sets.loadingFinishDisplayFunction);
	  elt.data('listSelectorString', sets.listSelectorString);
	  elt.data('listHighlightFunction', sets.listHighlightFunction);
	  elt.data('listUnHighlightFunction', sets.listUnHighlightFunction);
	  elt.data('listClickFunction', sets.listClickFunction);
	  elt.data('enterKeyFunction', sets.enterKeyFunction);
	  elt.data('loadFailedFunction', sets.loadFailedFunction);
	  elt.data('autoCompleteName', finalDDName);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('putDataValueInBox', sets.putDataValueInBox);
	  elt.data('putDataValueFieldName', sets.putDataValueFieldName);
	  elt.data('currentChoice', 0);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  var boxSel = "#" + sets.inputBoxElement;
	  
	  var curAPWID = parseInt($(boxSel).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(boxSel).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 5009\nLibrary: apwAutoComplete\nType: Input parameters invalid\nCause:Auto Complete window width is set to 0 or less.");
	  }
	  
	  if(sets.listSelectorString.length < 1)
	  {
		  alert("AppWorks Exception 5011\nLibrary: apwAutoComplete\nType: Input parameters invalid\nCause:List Selector String for Auto Complete list items is blank. See parameter 'listSelectorString' in documentation.");
	  }
	  
	  if(sets.fillFromURL.length < 1)
	  {
		  alert("AppWorks Exception 5012\nLibrary: apwAutoComplete\nType: Input parameters invalid\nCause:URL for filling Auto Complete drop down area is blank. See parameter 'fillFromURL' in documentation.");
	  }
	  
	  if(sets.inputBoxElement.length < 1)
	  {
		  alert("AppWorks Exception 5013\nLibrary: apwAutoComplete\nType: Input parameters invalid\nCause:Element ID for attaching Auto Complete functionality is blank. See parameter 'inputBoxElement' in documentation.");
	  }
	  
	  if(sets.dataPostName.length < 1)
	  {
		  alert("AppWorks Exception 5014\nLibrary: apwAutoComplete\nType: Input parameters invalid\nCause:Data Post Name for passing Auto Complete search information to backend system is blank. See parameter 'dataPostName' in documentation.");
	  }
	  
	  
	  if($(boxSel).length > 0)
	  {
		  //Create the new DIV element and attach it to the clickable item.
		  var posit = $(boxSel).offset();
		  var newElString = '<div id="' + finalDDName + '" style="display:none;position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';
		  if(sets.height == 0)
		  {
			  //Do nothing - do not add a fixed height or add overflow:auto
			  //This should let the drop down area automatically adjust height to match the content.
		  }
		  else
		  {
			  newElString += 'height:' + sets.height + 'px;';
			  newElString += "overflow:auto;";
		  }
		  newElString += 'top:' + (posit.top + $(boxSel).height() + 1 + sets.offsetTop) + 'px;';
		  newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  if(sets.border == "Y")
		  {
			  newElString += 'border-width:thin;border-style:solid;border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
	
		  $('body').prepend(newElString);
	  }
	  
	  var focusFunc = function(ev1)
	  	{
			var DTSN = ev1.data.dName;
			var clickSel = "#" + $(DTSN).data("inputBoxElement");
			var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				clickedItem.select();
				apwAutoCompleteShow(DTSN);
			}
		};
		
	var blurFunc = function(ev3)
	{
		var DTSN = ev3.data.dName;
		var clickSel = "#" + $(DTSN).data("inputBoxElement");
			var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				//apwAutoCompleteClose(DTSN);
				setTimeout("apwAutoCompleteClose('" + DTSN + "')", 500);
			}
	};
	
	var keyFunc = function(ev6)
	{
		var DTSN = ev6.data.dName;
		var clickSel = "#" + $(DTSN).data("inputBoxElement");
			var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				apwAutoCompleteKeyPress(DTSN, ev6);
			}
	};
	
	var keyDownFunc = function(ev7)
	{
		var DTSN = ev7.data.dName;
		var clickSel = "#" + $(DTSN).data("inputBoxElement");
			var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				apwAutoCompleteKeyDownPress(DTSN, ev7);
			}
	};
	
	var clickFunc = function(ev22)
	{
		var DTSN = ev22.data.dName;
		var clickSel = "#" + $(DTSN).data("inputBoxElement");
			var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				var clickyItem = ev22.currentTarget;
				apwAutoCompleteClickHandler(DTSN, clickyItem);
			}
	};
	
	var highFunc = function(ev23)
	{
		var DTSN = ev23.data.dName;
		var clickedItem = ev23.currentTarget;
		apwAutoCompleteHighlightHandler(DTSN, clickedItem);
	}
	
	var unHighFunc = function(ev24)
	{
		var DTSN = ev24.data.dName;
		var clickedItem = ev24.currentTarget;
		apwAutoCompleteUnHighlightHandler(DTSN, clickedItem);
	}
	  
	  var observerFunc = function(ev2)
	  	{
			var DTSN = ev2.data.dName;
			var clickedItem = $(ev2.target);
			apwAutoCompleteHandleOutsideClick(DTSN, clickedItem);
		};
	  
	  var DDSel = "#" + finalDDName;
	  $(document).delegate(boxSel, 'focus', {dName:datTrackerSelectorName}, focusFunc);
	  $(document).delegate(boxSel, 'blur', {dName:datTrackerSelectorName}, blurFunc);
	  $(document).delegate(boxSel, 'keyup', {dName:datTrackerSelectorName}, keyFunc);
	  $(document).delegate(boxSel, 'keydown', {dName:datTrackerSelectorName}, keyDownFunc);
	  $(document).delegate(sets.listSelectorString, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  $(document).delegate(sets.listSelectorString, 'mouseenter', {dName:datTrackerSelectorName}, highFunc);
	  $(document).delegate(sets.listSelectorString, 'mouseleave', {dName:datTrackerSelectorName}, unHighFunc);
	  $(document).bind('click', {dName:datTrackerSelectorName}, observerFunc);
	  
	  apwRegistryAddDataStore(boxSel, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(boxSel, curAPWID, contextRepresentative);
	  apwRegistryAddContentElement(boxSel, curAPWID, finalDDName);
	  apwRegistryAddHandler(boxSel, curAPWID, 'document', boxSel, 'focus', focusFunc);
	  apwRegistryAddHandler(boxSel, curAPWID, 'document', boxSel, 'blur', blurFunc);
	  apwRegistryAddHandler(boxSel, curAPWID, 'document', boxSel, 'keyup', keyFunc);
	  apwRegistryAddHandler(boxSel, curAPWID, 'document', boxSel, 'keydown', keyDownFunc);
	  apwRegistryAddHandler(boxSel, curAPWID, 'document', sets.listSelectorString, 'click', clickFunc);
	  apwRegistryAddHandler(boxSel, curAPWID, 'document', sets.listSelectorString, 'mouseenter', highFunc);
	  apwRegistryAddHandler(boxSel, curAPWID, 'document', sets.listSelectorString, 'mouseleave', unHighFunc);
	  apwRegistryAddBinding(boxSel, curAPWID, 'document', 'Y', 'click', observerFunc);
  };
})( jQuery );

function apwAutoCompleteClickHandler(datTrackerSelectorName, clickedItem)
{
	var clickityFunc = $(datTrackerSelectorName).data("listClickFunction");
	var theClickSel = "#" + $(datTrackerSelectorName).data("inputBoxElement");
	var wantsDataInserted = $(datTrackerSelectorName).data("putDataValueInBox");
	var dataFieldName = $(datTrackerSelectorName).data("putDataValueFieldName");
	var newText = "";
	if(wantsDataInserted == "Y")
	{
		if(dataFieldName.length > 0)
		{
			newText = $(clickedItem).data(dataFieldName);
		}
		else
		{
			newText = "Error: Invalid Setting";
		}
	}
	else
	{
		newText = $(clickedItem).text();
	}
	$(theClickSel).val(newText);
	if(clickityFunc.length > 0)
	{
		var clickCall = clickityFunc + "(clickedItem)";
		var ret1 = eval(clickCall);
	}
}

function apwAutoCompleteHighlightHandler(datTrackerSelectorName, clickedItem)
{
	var clickityFunc = $(datTrackerSelectorName).data("listHighlightFunction");
	if(clickityFunc.length > 0)
	{
		var clickCall = clickityFunc + "(clickedItem)";
		var ret1 = eval(clickCall);
	}
}

function apwAutoCompleteUnHighlightHandler(datTrackerSelectorName, clickedItem)
{
	var clickityFunc = $(datTrackerSelectorName).data("listUnHighlightFunction");
	var curIndex = $(datTrackerSelectorName).data("currentChoice");
	var selString = $(datTrackerSelectorName).data("listSelectorString");
	var findIndex = $(selString).index(clickedItem);
	if(curIndex == 0)
	{
		//We have not chosen anything with the arrow keys. Proceed.
		if(clickityFunc.length > 0)
		{
			var clickCall7 = clickityFunc + "(clickedItem)";
			var ret7 = eval(clickCall7);
		}
	}
	else
	{
		curIndex = curIndex - 1;
		if(findIndex == curIndex)
		{
			//We are trying to un-highlight the item the user has currently chosen with the arrow keys. Do nothing.	
		}
		else
		{
			if(clickityFunc.length > 0)
			{
				var clickCall = clickityFunc + "(clickedItem)";
				var ret1 = eval(clickCall);
			}
		}
	}
}

function apwAutoCompleteShow(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = "#" + $(datTrackerSelectorName).data("autoCompleteName");
	var speedy = $(datTrackerSelectorName).data("slideSpeed");
	var minChar = $(datTrackerSelectorName).data("minimumCharacters");
	var theClickSel = "#" + $(datTrackerSelectorName).data("inputBoxElement");
	var curInputValue = $(theClickSel).val();
	$(datTrackerSelectorName).data("isFocused", "Y");
	setTimeout("apwAutoCompleteTimedProcess('" + datTrackerSelectorName + "')", 200);
	if(currentState == "N")
	{
		if(curInputValue.length >= minChar)
		{
			$(datTrackerSelectorName).data("isOpen", "Y");
			$(datTrackerSelectorName).data('currentChoice', 0);
			var loadFunc = $(datTrackerSelectorName).data("loadingDisplayFunction");
			var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
			var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
			var optTok = $(datTrackerSelectorName).data("passToken");
			var datLabel = $(datTrackerSelectorName).data("dataPostName");
			var urly = $(datTrackerSelectorName).data("fillFromURL");
			var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
			var loadCall = loadFunc + "('" + ddHandle + "')";
			var offTop = $(datTrackerSelectorName).data("offsetTop");
			var offLeft = $(datTrackerSelectorName).data("offsetLeft");
			var posit2 = $(theClickSel).offset();
			var newTop = (posit2.top + $(theClickSel).height() + 1 + offTop);
		  	var newLeft = (posit2.left + offLeft);
			$(ddHandle).css("top", newTop + "px");
			$(ddHandle).css("left", newLeft + "px");
			$(ddHandle).slideDown(speedy);
			var ret14 = eval(loadCall);
			
			var locky = Math.floor(Math.random() * 100000);
			$('#' + contextRep).data("apwAutoCompleteLockValue", locky);
			$(datTrackerSelectorName).data("LoaderLockValue", locky);
			
			var dataString = "";
			dataString = datLabel + "=" + curInputValue.replace(/&/g, "%26");
			
			var endString = "";
			if(optTok == "Y")
			{
				accTok = apwGetAccessToken();
				if(dataString.length > 0)
				{
					endString = dataString + "&t=" + accTok;
				}
				else
				{
					endString = "t=" + accTok;
				}
			}
			else
			{
				endString = dataString;
			}
			
			if(loadDataAdd.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + loadDataAdd;	
				}
				else
				{
					endString = loadDataAdd;	
				}
			}
			
			var dataFuncResult = "";
			if(loadDataFunc.length > 0)
			{
				var loadDataFuncCall = loadDataFunc + "()";
				dataFuncResult = eval(loadDataFuncCall);
				
				if(dataFuncResult.length > 0)
				{
					if(endString.length > 0)
					{
						endString += "&" + dataFuncResult;	
					}
					else
					{
						endString = dataFuncResult;	
					}	
				}
			}
			
			var tmpContRep = $("#" + contextRep).clone(true);
			var contextRepObj = tmpContRep[0];
			jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
			var datTrackName = $(this).data("mainDataSelector");
			var targEl2 = "#" + $(datTrackName).data("autoCompleteName");
			var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
			var clickSel2 = "#" + $(datTrackName).data("inputBoxElement");
			var myLockValue = $(this).data("apwAutoCompleteLockValue");
			var mainLockValue = $(datTrackName).data("LoaderLockValue");
			
			if(myLockValue == mainLockValue)
			{
				var loadFinDispCall = loadFinishFunc + "('" + targEl2 + "')";
				var ret3 = eval(loadFinDispCall);
				
				$(targEl2).empty();
				$(targEl2).append(dat);
			}
			else
			{
				//Do nothing - lock didn't match.
			}
			}, error: function(obj, code){
				var datTrackName = $(this).data("mainDataSelector");
				var failFunc = $(datTrackName).data("loadFailedFunction");
				var ddHandle = "#" + $(datTrackName).data("autoCompleteName");
				var myLockValue = $(this).data("apwAutoCompleteLockValue");
				var mainLockValue = $(datTrackName).data("LoaderLockValue");
				
				if(myLockValue == mainLockValue)
				{
					var failCall = failFunc + "('" + ddHandle + "')";
					var ret16 = eval(failCall);
				}
				}});	
		}
	}
}

function apwAutoCompleteHandleOutsideClick(datTrackerSelectorName, eventTarget)
{
	var clickableThing = "#" + $(datTrackerSelectorName).data("inputBoxElement");
	var theDDName = "#" + $(datTrackerSelectorName).data("autoCompleteName");
	if((eventTarget.parents(clickableThing).length > 0) || (eventTarget.is(clickableThing)) || (eventTarget.is(theDDName)) || (eventTarget.parents(theDDName).length > 0))
	{
		if((eventTarget.is(theDDName)) || (eventTarget.parents(theDDName).length > 0))
		{
			//Do nothing.
			//$(datTrackerSelectorName).data("didClickInside", "Y");
		}
	}
	else
	{
		//We have clicked outside of the active area. Close the drop down if it is currently open. 
		var currentState = $(datTrackerSelectorName).data("isOpen");
		if(currentState == "Y")
		{
			$(datTrackerSelectorName).data("isFocused", "N");
			$(datTrackerSelectorName).data("isOpen", "N");
			$(datTrackerSelectorName).data("isEntering", "N");
			$(datTrackerSelectorName).data('currentChoice', 0);
			$(theDDName).hide();	
		}
	}
}

function apwAutoCompleteClose(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	//var clickedInside = $(datTrackerSelectorName).data("didClickInside");
	var inBox = "#" + $(datTrackerSelectorName).data("inputBoxElement");
	var theDDName = "#" + $(datTrackerSelectorName).data("autoCompleteName");
	$(datTrackerSelectorName).data("isFocused", "N");
	/*if((currentState == "Y") && (clickedInside != "Y"))*/
	if(currentState == "Y")
	{
		$(datTrackerSelectorName).data("isOpen", "N");
		$(datTrackerSelectorName).data("isEntering", "N");
		$(datTrackerSelectorName).data('currentChoice', 0);
		$(theDDName).hide();	
	}
	
	/*
	if(clickedInside == "Y")
	{
		$(inBox).focus();
		$(datTrackerSelectorName).data("didClickInside", "N");
	}
	*/
}

function apwAutoCompleteKeyDownPress(datTrackerSelectorName, ev7)
{
	var keyNumber = ev7.which;
	var curIndex = $(datTrackerSelectorName).data('currentChoice');
	var highFunc = $(datTrackerSelectorName).data("listHighlightFunction");
	var unHighFunc = $(datTrackerSelectorName).data("listUnHighlightFunction");
	var selString = $(datTrackerSelectorName).data("listSelectorString");
	var curSelIndex = curIndex - 1;
	if(keyNumber == 13)
	{
		ev7.preventDefault();
		var enterFunc = $(datTrackerSelectorName).data("enterKeyFunction");
		if(curIndex == 0)
		{
			if(enterFunc.length > 0)
			{
				var enterCall = enterFunc + "()";
				var ret1 = eval(enterCall);
				apwAutoCompleteClose(datTrackerSelectorName);
			}
		}
		else
		{
			//We have highlighted an item with the arrow keys. Call click() on it.
			var enterItem = $(selString).eq(curSelIndex);
			enterItem.click();
			apwAutoCompleteClose(datTrackerSelectorName);
		}
	}
	else
	{
		if(keyNumber == 38)
		{
			ev7.preventDefault();
			if(curIndex == 0)
			{
				//We are already at the top. Do nothing.	
			}
			else
			{
				//Un-highlight the current item.
				var lastItem = $(selString).eq(curSelIndex)[0];
				unCall = unHighFunc + "(lastItem)";
				var retUn1 = eval(unCall);
				
				//Decrement the index
				curIndex = curIndex - 1;
				curSelIndex = curSelIndex - 1;
				
				if(curIndex == 0)
				{
					//If we are now at 0, we do not want to highlight anything.	
				}
				else
				{
					var newItem = $(selString).eq(curSelIndex)[0];
					hiCall = highFunc + "(newItem)";
					var retHi1 = eval(hiCall);
				}
				
				$(datTrackerSelectorName).data('currentChoice', curIndex);
			}
		}
		else
		{
			if(keyNumber == 40)
			{
				ev7.preventDefault();
				var listLength = $(selString).length;
				if(curIndex == listLength)
				{
					//We are already at the end. Do nothing.
				}
				else
				{
					if(curIndex == 0)
					{
						//We are at the beginning. Do not attempt to un-highlight the starting box.	
					}
					else
					{
						//Un-highlight the current item.
						var lastItem = $(selString).eq(curSelIndex)[0];
						unCall = unHighFunc + "(lastItem)";
						var retUn1 = eval(unCall);
					}
					
					//Increment the indexes.
					curIndex = curIndex + 1;
					curSelIndex = curSelIndex + 1;
					$(datTrackerSelectorName).data('currentChoice', curIndex);
					
					//Highlight the next item.
					var newItem = $(selString).eq(curSelIndex)[0];
					hiCall = highFunc + "(newItem)";
					var retHi1 = eval(hiCall);
				}
			}
			else
			{
				if(keyNumber == 27)
				{
					//Escape key pressed. Close the window.
					ev7.preventDefault();
					apwAutoCompleteClose(datTrackerSelectorName);
				}
			}
		}
	}
}

function apwAutoCompleteKeyPress(datTrackerSelectorName, ev6)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = "#" + $(datTrackerSelectorName).data("autoCompleteName");
	var speedy = $(datTrackerSelectorName).data("slideSpeed");
	var minChar = $(datTrackerSelectorName).data("minimumCharacters");
	var theClickSel = "#" + $(datTrackerSelectorName).data("inputBoxElement");
	var curInputValue = $(theClickSel).val();
	var keyNumber = ev6.which;
	if((keyNumber == 13) || ((keyNumber >= 33) && (keyNumber <= 40)) || (keyNumber == 44) || (keyNumber == 27) || ((keyNumber >= 16) && (keyNumber <= 20)) || (keyNumber == 45) || ((keyNumber >= 112) && (keyNumber <= 123)) || (keyNumber == 144) || (keyNumber == 145))
	{
		//Do nothing - we should have already caught these keys on keyDown event or we don't want to deal with them.
	}
	else
	{
		$(datTrackerSelectorName).data('lastValue', curInputValue);
		if(currentState == "N")
		{
			if((curInputValue.length) >= minChar)
			{
				$(datTrackerSelectorName).data("isOpen", "Y");
				$(datTrackerSelectorName).data("isEntering", "Y");
				$(datTrackerSelectorName).data('currentChoice', 0);
				var loadFunc = $(datTrackerSelectorName).data("loadingDisplayFunction");
				var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
				var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
				var optTok = $(datTrackerSelectorName).data("passToken");
				var datLabel = $(datTrackerSelectorName).data("dataPostName");
				var urly = $(datTrackerSelectorName).data("fillFromURL");
				var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
				var loadCall = loadFunc + "('" + ddHandle + "')";
				$(ddHandle).slideDown(speedy);
				var ret14 = eval(loadCall);
				
				var locky = Math.floor(Math.random() * 100000);
				$('#' + contextRep).data("apwAutoCompleteLockValue", locky);
				$(datTrackerSelectorName).data("LoaderLockValue", locky);
				
				var dataString = "";
				dataString = datLabel + "=" + curInputValue.replace(/&/g, "%26");
				
				var endString = "";
				if(optTok == "Y")
				{
					accTok = apwGetAccessToken();
					if(dataString.length > 0)
					{
						endString = dataString + "&t=" + accTok;
					}
					else
					{
						endString = "t=" + accTok;
					}
				}
				else
				{
					endString = dataString;
				}
				
				if(loadDataAdd.length > 0)
				{
					if(endString.length > 0)
					{
						endString += "&" + loadDataAdd;	
					}
					else
					{
						endString = loadDataAdd;	
					}
				}
				
				var dataFuncResult = "";
				if(loadDataFunc.length > 0)
				{
					var loadDataFuncCall = loadDataFunc + "()";
					dataFuncResult = eval(loadDataFuncCall);
					
					if(dataFuncResult.length > 0)
					{
						if(endString.length > 0)
						{
							endString += "&" + dataFuncResult;	
						}
						else
						{
							endString = dataFuncResult;	
						}	
					}
				}
				
				var tmpContRep = $("#" + contextRep).clone(true);
				var contextRepObj = tmpContRep[0];
				jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
				var datTrackName = $(this).data("mainDataSelector");
				var targEl2 = "#" + $(datTrackName).data("autoCompleteName");
				var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
				var clickSel2 = "#" + $(datTrackName).data("inputBoxElement");
				var myLockValue = $(this).data("apwAutoCompleteLockValue");
				var mainLockValue = $(datTrackName).data("LoaderLockValue");
				
				if(myLockValue == mainLockValue)
				{
					var loadFinDispCall = loadFinishFunc + "('" + targEl2 + "')";
					var ret3 = eval(loadFinDispCall);
					
					$(targEl2).empty();
					$(targEl2).append(dat);
				}
				else
				{
					//Do nothing - locks didn't match.	
				}
				}, error: function(obj, code){
					var datTrackName = $(this).data("mainDataSelector");
					var failFunc = $(datTrackName).data("loadFailedFunction");
					var ddHandle = "#" + $(datTrackName).data("autoCompleteName");
					var myLockValue = $(this).data("apwAutoCompleteLockValue");
					var mainLockValue = $(datTrackName).data("LoaderLockValue");
					
					if(myLockValue == mainLockValue)
					{
						var failCall = failFunc + "('" + ddHandle + "')";
						var ret16 = eval(failCall);
					}
					}});	
			}
		}
		else
		{
			if((currentState == "Y") && ((curInputValue.length) < minChar))
			{
				$(datTrackerSelectorName).data("isOpen", "N");
				$(datTrackerSelectorName).data("isEntering", "N");
				$(datTrackerSelectorName).data('currentChoice', 0);
				$(ddHandle).hide();	
			}
			else
			{
				if((currentState == "Y") && ((curInputValue.length) >= minChar))
				{
					$(datTrackerSelectorName).data("isEntering", "Y");
					var loadFunc = $(datTrackerSelectorName).data("loadingDisplayFunction");
					var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
					var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
					var optTok = $(datTrackerSelectorName).data("passToken");
					var datLabel = $(datTrackerSelectorName).data("dataPostName");
					var urly = $(datTrackerSelectorName).data("fillFromURL");
					var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
					var loadCall = loadFunc + "('" + ddHandle + "')";
					var ret14 = eval(loadCall);
					
					var locky = Math.floor(Math.random() * 100000);
					$('#' + contextRep).data("apwAutoCompleteLockValue", locky);
					$(datTrackerSelectorName).data("LoaderLockValue", locky);
					
					var dataString = "";
					dataString = datLabel + "=" + curInputValue.replace(/&/g, "%26");
					
					var endString = "";
					if(optTok == "Y")
					{
						accTok = apwGetAccessToken();
						if(dataString.length > 0)
						{
							endString = dataString + "&t=" + accTok;
						}
						else
						{
							endString = "t=" + accTok;
						}
					}
					else
					{
						endString = dataString;
					}
					
					if(loadDataAdd.length > 0)
					{
						if(endString.length > 0)
						{
							endString += "&" + loadDataAdd;	
						}
						else
						{
							endString = loadDataAdd;	
						}
					}
					
					var dataFuncResult = "";
					if(loadDataFunc.length > 0)
					{
						var loadDataFuncCall = loadDataFunc + "()";
						dataFuncResult = eval(loadDataFuncCall);
						
						if(dataFuncResult.length > 0)
						{
							if(endString.length > 0)
							{
								endString += "&" + dataFuncResult;	
							}
							else
							{
								endString = dataFuncResult;	
							}	
						}
					}
					
					var tmpContRep = $("#" + contextRep).clone(true);
					var contextRepObj = tmpContRep[0];
					jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
					var datTrackName = $(this).data("mainDataSelector");
					var targEl2 = "#" + $(datTrackName).data("autoCompleteName");
					var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
					var clickSel2 = "#" + $(datTrackName).data("inputBoxElement");
					var myLockValue = $(this).data("apwAutoCompleteLockValue");
					var mainLockValue = $(datTrackName).data("LoaderLockValue");
					
					if(myLockValue == mainLockValue)
					{
						var loadFinDispCall = loadFinishFunc + "('" + targEl2 + "')";
						var ret3 = eval(loadFinDispCall);
						$(datTrackName).data('currentChoice', 0);
						$(targEl2).empty();
						$(targEl2).append(dat);
					}
					else
					{
						//Do nothing - locks didn't match.
					}
					}, error: function(obj, code){
						var datTrackName = $(this).data("mainDataSelector");
						var failFunc = $(datTrackName).data("loadFailedFunction");
						var ddHandle = "#" + $(datTrackName).data("autoCompleteName");
						var myLockValue = $(this).data("apwAutoCompleteLockValue");
						var mainLockValue = $(datTrackName).data("LoaderLockValue");
						
						if(myLockValue == mainLockValue)
						{
							var failCall = failFunc + "('" + ddHandle + "')";
							$(datTrackName).data('currentChoice', 0);
							var ret16 = eval(failCall);
						}
						}});
				}
			}
		}
	}
}

function apwAutoCompleteTimedProcess(datTrackerSelectorName)
{
	var focusState = $(datTrackerSelectorName).data("isFocused");
	if(focusState == "Y")
	{
		var currentState = $(datTrackerSelectorName).data("isOpen");
		var keyState = $(datTrackerSelectorName).data("isEntering");
		var ddHandle = "#" + $(datTrackerSelectorName).data("autoCompleteName");
		var speedy = $(datTrackerSelectorName).data("slideSpeed");
		var minChar = $(datTrackerSelectorName).data("minimumCharacters");
		var theClickSel = "#" + $(datTrackerSelectorName).data("inputBoxElement");
		var lastValue = $(datTrackerSelectorName).data('lastValue');
		var curInputValue = $(theClickSel).val();
		if(keyState == "Y")
		{
			//Do nothing - we have not changed anything
		}
		else
		{
			if(lastValue == curInputValue)
			{
				//Do nothing - nothing has changed.	
			}
			else
			{
				$(datTrackerSelectorName).data('lastValue', curInputValue);
				
				if(currentState == "N")
				{
					if((curInputValue.length) >= minChar)
					{
						$(datTrackerSelectorName).data("isOpen", "Y");
						$(datTrackerSelectorName).data('currentChoice', 0);
						var loadFunc = $(datTrackerSelectorName).data("loadingDisplayFunction");
						var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
						var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
						var optTok = $(datTrackerSelectorName).data("passToken");
						var datLabel = $(datTrackerSelectorName).data("dataPostName");
						var urly = $(datTrackerSelectorName).data("fillFromURL");
						var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
						var loadCall = loadFunc + "('" + ddHandle + "')";
						$(ddHandle).slideDown(speedy);
						var ret14 = eval(loadCall);
						
						var locky = Math.floor(Math.random() * 100000);
						$('#' + contextRep).data("apwAutoCompleteLockValue", locky);
						$(datTrackerSelectorName).data("LoaderLockValue", locky);
						
						var dataString = "";
						dataString = datLabel + "=" + curInputValue.replace(/&/g, "%26");
						
						var endString = "";
						if(optTok == "Y")
						{
							accTok = apwGetAccessToken();
							if(dataString.length > 0)
							{
								endString = dataString + "&t=" + accTok;
							}
							else
							{
								endString = "t=" + accTok;
							}
						}
						else
						{
							endString = dataString;
						}
						
						if(loadDataAdd.length > 0)
						{
							if(endString.length > 0)
							{
								endString += "&" + loadDataAdd;	
							}
							else
							{
								endString = loadDataAdd;	
							}
						}
						
						var dataFuncResult = "";
						if(loadDataFunc.length > 0)
						{
							var loadDataFuncCall = loadDataFunc + "()";
							dataFuncResult = eval(loadDataFuncCall);
							
							if(dataFuncResult.length > 0)
							{
								if(endString.length > 0)
								{
									endString += "&" + dataFuncResult;	
								}
								else
								{
									endString = dataFuncResult;	
								}	
							}
						}
						
						var tmpContRep = $("#" + contextRep).clone(true);
						var contextRepObj = tmpContRep[0];
						jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
						var datTrackName = $(this).data("mainDataSelector");
						var targEl2 = "#" + $(datTrackName).data("autoCompleteName");
						var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
						var clickSel2 = "#" + $(datTrackName).data("inputBoxElement");
						var myLockValue = $(this).data("apwAutoCompleteLockValue");
						var mainLockValue = $(datTrackName).data("LoaderLockValue");
						
						if(myLockValue == mainLockValue)
						{
							var loadFinDispCall = loadFinishFunc + "('" + targEl2 + "')";
							var ret3 = eval(loadFinDispCall);
							
							$(targEl2).empty();
							$(targEl2).append(dat);
						}
						else
						{
							//Do nothing - locks didn't match.	
						}
						}, error: function(obj, code){
							var datTrackName = $(this).data("mainDataSelector");
							var failFunc = $(datTrackName).data("loadFailedFunction");
							var ddHandle = "#" + $(datTrackName).data("autoCompleteName");
							var myLockValue = $(this).data("apwAutoCompleteLockValue");
							var mainLockValue = $(datTrackName).data("LoaderLockValue");
							
							if(myLockValue == mainLockValue)
							{
								var failCall = failFunc + "('" + ddHandle + "')";
								var ret16 = eval(failCall);
							}
							}});	
					}
				}
				else
				{
					if((currentState == "Y") && ((curInputValue.length) < minChar))
					{
						$(datTrackerSelectorName).data("isOpen", "N");
						$(datTrackerSelectorName).data("isEntering", "N");
						$(datTrackerSelectorName).data('currentChoice', 0);
						$(ddHandle).hide();	
					}
					else
					{
						if((currentState == "Y") && ((curInputValue.length) >= minChar))
						{
							var loadFunc = $(datTrackerSelectorName).data("loadingDisplayFunction");
							var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
							var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
							var optTok = $(datTrackerSelectorName).data("passToken");
							var datLabel = $(datTrackerSelectorName).data("dataPostName");
							var urly = $(datTrackerSelectorName).data("fillFromURL");
							var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
							var loadCall = loadFunc + "('" + ddHandle + "')";
							var ret14 = eval(loadCall);
							
							var locky = Math.floor(Math.random() * 100000);
							$('#' + contextRep).data("apwAutoCompleteLockValue", locky);
							$(datTrackerSelectorName).data("LoaderLockValue", locky);
							
							var dataString = "";
							dataString = datLabel + "=" + curInputValue.replace(/&/g, "%26");
							
							var endString = "";
							if(optTok == "Y")
							{
								accTok = apwGetAccessToken();
								if(dataString.length > 0)
								{
									endString = dataString + "&t=" + accTok;
								}
								else
								{
									endString = "t=" + accTok;
								}
							}
							else
							{
								endString = dataString;
							}
							
							if(loadDataAdd.length > 0)
							{
								if(endString.length > 0)
								{
									endString += "&" + loadDataAdd;	
								}
								else
								{
									endString = loadDataAdd;	
								}
							}
							
							var dataFuncResult = "";
							if(loadDataFunc.length > 0)
							{
								var loadDataFuncCall = loadDataFunc + "()";
								dataFuncResult = eval(loadDataFuncCall);
								
								if(dataFuncResult.length > 0)
								{
									if(endString.length > 0)
									{
										endString += "&" + dataFuncResult;	
									}
									else
									{
										endString = dataFuncResult;	
									}	
								}
							}
							
							var tmpContRep = $("#" + contextRep).clone(true);
							var contextRepObj = tmpContRep[0];
							jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
							var datTrackName = $(this).data("mainDataSelector");
							var targEl2 = "#" + $(datTrackName).data("autoCompleteName");
							var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
							var clickSel2 = "#" + $(datTrackName).data("inputBoxElement");
							var myLockValue = $(this).data("apwAutoCompleteLockValue");
							var mainLockValue = $(datTrackName).data("LoaderLockValue");
							
							if(myLockValue == mainLockValue)
							{
								var loadFinDispCall = loadFinishFunc + "('" + targEl2 + "')";
								var ret3 = eval(loadFinDispCall);
								$(datTrackName).data('currentChoice', 0);
								$(targEl2).empty();
								$(targEl2).append(dat);
							}
							else
							{
								//Do nothing - locks didn't match.
							}
							}, error: function(obj, code){
								var datTrackName = $(this).data("mainDataSelector");
								var failFunc = $(datTrackName).data("loadFailedFunction");
								var ddHandle = "#" + $(datTrackName).data("autoCompleteName");
								var myLockValue = $(this).data("apwAutoCompleteLockValue");
								var mainLockValue = $(datTrackName).data("LoaderLockValue");
								
								if(myLockValue == mainLockValue)
								{
									var failCall = failFunc + "('" + ddHandle + "')";
									$(datTrackName).data('currentChoice', 0);
									var ret16 = eval(failCall);
								}
								}});
						}
					}
				}
			}
		}
		setTimeout("apwAutoCompleteTimedProcess('" + datTrackerSelectorName + "')", 200);
	}
	else
	{
		//Do nothing here - we want to stop this process.
	}
}

function apwAutoCompleteEnterKeyBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwAutoCompleteLoadingDisplayBlank(autoCompleteName)
{
	//Do nothing. I'm just a placeholder.
}

function apwAutoCompleteLoadingDisplayFinishBlank(autoCompleteName)
{
	//Do nothing. I'm just a placeholder.
}

function apwAutoCompleteLoadFailedBlank(autoCompleteName)
{
	//Do nothing. I'm just a placeholder.	
}

function apwAutoCompleteListHighlightBlank(listItem)
{
	//Do nothing. I'm just a placeholder.
}

function apwAutoCompleteListUnHighlightBlank(listItem)
{
	//Do nothing. I'm just a placeholder.
}

function apwAutoCompleteListClickBlank(listItem)
{
	//Do nothing. I'm just a placeholder.
}

(function( $ ) {
  $.fn.apwAutoScroll = function(options) {
  	
	var settings = $.extend( {
      'scrollBoxElement' : '',
	  'scrollPercentage' : 50,
	  'scrollContentElement' : '',
	  'scrollSpeed' : 800,
	  'seekSelector' : '',
	  'seekHandlerFunction' : ''
    }, options);
      
    var sets = settings;
	  
	var targEl = sets.scrollBoxElement;
	var scrollEl = sets.scrollContentElement;
	var scrollPerc = sets.scrollPercentage;
	var scrollSped = sets.scrollSpeed;
	var seekSel = sets.seekSelector;
	var seekHand = sets.seekHandlerFunction;
	
	if(seekSel.length > 0)
	{
		//We are being asked to seek a particular item. Get it's TOP offset and use that for scrolling, trying to place it in the middle, as well.
		var seekEl = $("#" + scrollEl).find(seekSel);
		var parPos = $("#" + scrollEl).position()["top"];
		var seekPos = seekEl.position()["top"];
		var eHeightony = $("#" + targEl).height();
		var halfHeight = eHeightony / 2;
		var finalPos = seekPos - parPos - halfHeight;
		$("#" + targEl).animate({scrollTop: finalPos}, scrollSped);
		if(seekHand.length > 0)
		{
			var soughtObj = seekEl[0];
			var handCall = seekHand + "(soughtObj)";
			var ret1 = eval(handCall);
		}
	}
	else
	{
		//We should just look to scroll to the percentage. No seek selector entered.
		var scrollPix = 0;
		var multip = scrollPerc / 100;
		var elHeight = $("#" + scrollEl).height();
		scrollPix = (elHeight * multip);
		$("#" + targEl).animate({scrollTop: scrollPix}, scrollSped);
	}
  };
})( jQuery );

(function( $ ) {
  $.fn.apwClickAction = function(options) {
  	    //typical funtion looks like this: $(document).apwClickAction({'clickablesModifierFunction' : 'EnterNewGFunctionNameHere','actionFunction' : 'EnterNewGFunctionNameHere','clickablesSelector' : '#NewaAtionDivNameHere','loadDataFields' : '','manageHover' : 'N','hoverInFunction' : 'EnterNewHoverInFunctionNameHere','hoverOutFunction' : 'EnterNewHoverOutFunctionNameHere','requiredState' : ''})
	var settings = $.extend( {
		//calls a user defined function to modify the clicked Item or does nothing if not specified
      'clickablesModifierFunction' : 'apwClickActionClickedItemModifierBlank',
	  	//Calls a user defined action function for the clicked item or takes no action if not specified
	  'actionFunction' : 'apwClickActionBlank',
	  	//looks for a specific div id on the item being clicked ie: '#divId' or '#divId > div'
	  'clickablesSelector' : '',
	  	//passes a user defined data string if used
	  'loadDataFields' : '',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickActionHoverInBlank',
	  'hoverOutFunction' : 'apwClickActionHoverOutBlank',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickActionData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickActionData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('clickablesModifierFunction', sets.clickablesModifierFunction);
	  elt.data('actionFunction', sets.actionFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('loadDataFields', sets.loadDataFields);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('presence', 'Y');
	  //alert(datTrackerSelectorName);
	  
	  //Add apwID to the clickable element.
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var clickSel = $(datTrackerSelectorName).data("clickablesSelector");
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this, '" + clickSel + "')";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var clickSel = $(datTrackerSelectorName).data("clickablesSelector");
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this, '" + clickSel + "')";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1){
		var datTrackerSelectorName = ev1.data.dName;
		var modFunc = $(datTrackerSelectorName).data("clickablesModifierFunction");
		var actFunc = $(datTrackerSelectorName).data("actionFunction");
		var loadDataFlds = $(datTrackerSelectorName).data("loadDataFields");
		var clickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var reqState = $(datTrackerSelectorName).data("requiredState");
		
		var runFlag = 1;
		if(reqState.length > 0)
		{
			var curState = $(this).attr("apwstate");
			if(curState == reqState)
			{
				runFlag = 1;
			}
			else
			{
				runFlag = 0;	
			}
		}
		else
		{
			runFlag = 1;	
		}
		
		if(runFlag == 1)
		{
			var modCall = modFunc + "(this, '" + clickSel + "')";
			var ret2 = eval(modCall);
			
			//alert(loadDataFlds);
			var obj;
			var obj2;
			
			if(loadDataFlds.length > 1)
			{
				obj = jQuery.parseJSON(loadDataFlds);
				obj2 = jQuery.parseJSON(loadDataFlds);
				for (var prop in obj)
				{
					var tmpDataValue = $(this).data(obj[prop]);
					obj2[prop] = tmpDataValue;
				}	
			}
			
			//alert("Contact ID is " + obj2.contactID);
			
			//Call the action function, passing the data object along with it.
			var actCall = actFunc + "(obj2)";
			var ret7 = eval(actCall);
		}
	   };
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickActionClickedItemModifierBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickActionHoverInBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickActionHoverOutBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickActionBlank(actionData)
{
	//Do nothing. I'm just a placeholder.
}

(function( $ ) {
  $.fn.apwClickDropDown = function(options) {
  	
	var settings = $.extend( {
      'openClickablesModifierFunction' : 'apwClickDropDownOpenClickedItemModifierBlank',
	  'closeClickablesModifierFunction' : 'apwClickDropDownCloseClickedItemModifierBlank',
	  'clickablesSelector' : '',
	  'width' : 40,
	  'height' : 0,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#ccc',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#F5F5F5',
	  'slideSpeed':400,
	  'fillFromID' : '',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickDropDownHoverInBlank',
	  'hoverOutFunction' : 'apwClickDropDownHoverOutBlank',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickDropDownData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickDropDownData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwDropDown" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwDropDown" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('openClickablesModifierFunction', sets.openClickablesModifierFunction);
	  elt.data('closeClickablesModifierFunction', sets.closeClickablesModifierFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('offsetTop', sets.offsetTop);
	  elt.data('offsetLeft', sets.offsetLeft);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('isOpen', 'N');
	  elt.data('slideSpeed', sets.slideSpeed);
	  elt.data('fillFromID', sets.fillFromID);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('dropDownName', finalDDName);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('presence', 'Y');
	  //alert(datTrackerSelectorName);
	  
	  //Add apwID to the clickable element.
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 7009\nLibrary: apwClickDropDown\nType: Input parameters invalid\nCause:Drop Down window width is set to 0 or less.");
	  }
	  
	  if(sets.height < 1)
	  {
		  alert("AppWorks Exception 7010\nLibrary: apwClickDropDown\nType: Input parameters invalid\nCause:Drop Down window height is set to 0 or less.");
	  }
	  
	  if(sets.clickablesSelector.length < 1)
	  {
		  alert("AppWorks Exception 7011\nLibrary: apwClickDropDown\nType: Input parameters invalid\nCause:Selector string for clickable items is blank. See parameter 'clickablesSelector' in documentation.");
	  }
	  
	  if(sets.fillFromID.length < 1)
	  {
		  alert("AppWorks Exception 7012\nLibrary: apwClickDropDown\nType: Input parameters invalid\nCause:Element ID for filling Drop Down area is blank. See parameter 'fillFromID' in documentation.");
	  }
	  
	  if($(sets.clickablesSelector).length > 0)
	  {
		  //Create the new DIV element and attach it to the clickable item.
		  var posit = $(sets.clickablesSelector).offset();
		  var newElString = '<div id="' + finalDDName + '" style="display:none;position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';
		  if(sets.height == 0)
		  {
			  //Do nothing - do not add a fixed height or add overflow:auto
			  //This should let the drop down area automatically adjust height to match the content.
		  }
		  else
		  {
			  newElString += 'height:' + sets.height + 'px;';
			  newElString += "overflow:auto;";
		  }
		  newElString += 'top:' + (posit.top + $(sets.clickablesSelector).height() + 1 + sets.offsetTop) + 'px;';
		  newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  if(sets.border == "Y")
		  {
			  newElString += 'border-width:1px;-webkit-border-radius: 0 0 5px 5px;-moz-border-radius: 0 0 5px 5px;border-radius: 0 0 5px 5px;;-webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);-webkit-background-clip: padding-box;-moz-background-clip: padding;background-clip: padding-box;*border-right-width: 2px;*border-bottom-width: 2px;border-style:solid;border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-image:-moz-linear-gradient(center top , #FFFFFF, #E6E6E6);background-repeat:repeat-x;background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
	
		  $('body').prepend(newElString);
		  
		  //Grab the specified content from elsewhere in the document and put it in the drop down space.
		  //This is a TOTAL HACK because for some reason the new DIV is not available until after we exit this setup function.
		  //We have to call it from another function, delayed by 500ms.
		  //Everyone - therefore - will have to hide their content (make it display:none) so it doesn't show for a moment then disappear.
		  var laterCall = setTimeout("apwClickDropDownLoadExistingContent('" + finalDDName + "','" + sets.fillFromID + "')",500);
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1)
	  	{
		  var DTSN = ev1.data.dName;
		  var clickSel = $(DTSN).data("clickablesSelector");
		  var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
		  		apwClickDropDownToggleDropDown(DTSN);
			}
		};
		
		var observerFunc = function(ev2)
		{
			var DTSN = ev2.data.dName;
			var clickedItem = $(ev2.target);
			apwClickDropDownHandleOutsideClick(DTSN, clickedItem);
		};
			
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  $(document).bind('click', {dName:datTrackerSelectorName}, observerFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContentElement(sets.clickablesSelector, curAPWID, finalDDName);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  apwRegistryAddBinding(sets.clickablesSelector, curAPWID, 'document', 'Y', 'click', observerFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickDropDownLoadExistingContent(ddName,pullFromID)
{
	//Don't try to do anything if this parameter is empty.
	if(pullFromID.length > 0)
	{
		$('#' + ddName).append($('#' + pullFromID));
		$('#' + pullFromID).show();
	}
}

function apwClickDropDownToggleDropDown(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("dropDownName");
	var speedy = $(datTrackerSelectorName).data("slideSpeed");
	if(currentState == "N")
	{
		$(datTrackerSelectorName).data("isOpen", "Y");
		var openModFunc = $(datTrackerSelectorName).data("openClickablesModifierFunction");
		var openCall = openModFunc + "()";
		var offTop = $(datTrackerSelectorName).data("offsetTop");
		var offLeft = $(datTrackerSelectorName).data("offsetLeft");
		var theClickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var posit = $(theClickSel).offset();
		newTop = (posit.top + $(theClickSel).height() + 1 + offTop);
		newLeft = (posit.left + offLeft);
		$("#" + ddHandle).css("top", newTop + "px");
		$("#" + ddHandle).css("left", newLeft + "px");
		$('#' + ddHandle).slideDown(speedy);
		var ret2 = eval(openCall);
	}
	else
	{
		$(datTrackerSelectorName).data("isOpen", "N");
		var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
		var closeCall = closeModFunc + "()";
		$('#' + ddHandle).slideUp(speedy);
		var ret3 = eval(closeCall);
	}	
}

function apwClickDropDownHandleOutsideClick(datTrackerSelectorName, eventTarget)
{
	var clickableThing = $(datTrackerSelectorName).data("clickablesSelector");
	var theDDName = "#" + $(datTrackerSelectorName).data("dropDownName");
	if((eventTarget.parents(clickableThing).length > 0) || (eventTarget.is(clickableThing)) || (eventTarget.is(theDDName)) || (eventTarget.parents(theDDName).length > 0))
	{
		//Do nothing because we have clicked inside the active drop-down area or the clickable that triggers it.
	}
	else
	{
		//We have clicked outside of the active area. Close the drop down if it is currently open.
		var currentState = $(datTrackerSelectorName).data("isOpen");
		if(currentState == "Y")
		{
			$(datTrackerSelectorName).data("isOpen", "N");
			var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
			var closeCall = closeModFunc + "()";
			var ret3 = eval(closeCall);
			$(theDDName).hide();	
		}
	}
}

function apwClickDropDownOpenClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropDownCloseClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropDownHoverInBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickDropDownHoverOutBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwClickDropDownDynamic = function(options) {
  	
	var settings = $.extend( {
      'openClickablesModifierFunction' : 'apwClickDropDownDynamicOpenClickedItemModifierBlank',
	  'closeClickablesModifierFunction' : 'apwClickDropDownDynamicCloseClickedItemModifierBlank',
	  'loadingDisplayFunction' : 'apwClickDropDownDynamicLoadingDisplayBlank',
	  'loadingFinishDisplayFunction' : 'apwClickDropDownDynamicLoadingDisplayFinishBlank',
	  'loadFailedFunction' : 'apwClickDropDownDynamicLoadFailedBlank',
	  'clickablesSelector' : '',
	  'width' : 40,
	  'height' : 0,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#ccc',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#F5F5F5',
	  'slideSpeed': 400,
	  'fillFromURL' : '',
	  'passToken' : 'N',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'loadDataFields' : '',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickDropDownDynamicHoverInBlank',
	  'hoverOutFunction' : 'apwClickDropDownDynamicHoverOutBlank',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickDropDownDynamicData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickDropDownDynamicData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwClickDropDownDynamicRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwClickDropDownDynamicRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwDropDown" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwDropDown" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('openClickablesModifierFunction', sets.openClickablesModifierFunction);
	  elt.data('closeClickablesModifierFunction', sets.closeClickablesModifierFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('offsetTop', sets.offsetTop);
	  elt.data('offsetLeft', sets.offsetLeft);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('isOpen', 'N');
	  elt.data('slideSpeed', sets.slideSpeed);
	  elt.data('fillFromURL', sets.fillFromURL);
	  elt.data('passToken', sets.passToken);
	  elt.data('loadDataFields', sets.loadDataFields);
	  elt.data('loadDataPreparationFunction', sets.loadDataPreparationFunction);
	  elt.data('loadDataAdditionalString', sets.loadDataAdditionalString);
	  elt.data('loadingDisplayFunction', sets.loadingDisplayFunction);
	  elt.data('loadingFinishDisplayFunction', sets.loadingFinishDisplayFunction);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('loadFailedFunction', sets.loadFailedFunction);
	  elt.data('dropDownName', finalDDName);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 6009\nLibrary: apwClickDropDownDynamic\nType: Input parameters invalid\nCause:Drop Down window width is set to 0 or less.");
	  }
	  
	  if(sets.height < 1)
	  {
		  alert("AppWorks Exception 6010\nLibrary: apwClickDropDownDynamic\nType: Input parameters invalid\nCause:Drop Down window height is set to 0 or less.");
	  }
	  
	  if(sets.clickablesSelector.length < 1)
	  {
		  alert("AppWorks Exception 6011\nLibrary: apwClickDropDownDynamic\nType: Input parameters invalid\nCause:Selector string for clickable items is blank. See parameter 'clickablesSelector' in documentation.");
	  }
	  
	  if(sets.fillFromURL.length < 1)
	  {
		  alert("AppWorks Exception 6012\nLibrary: apwClickDropDownDynamic\nType: Input parameters invalid\nCause:URL setting to fill Drop Down is blank. See parameter 'fillFromURL' in documentation.");
	  }
	  
	  //Create the new DIV element and attach it to the clickable item.
	  //Only attempt this if the clickablesSelector results in an actual item set. Otherwise we will throw JS errors
	  if($(sets.clickablesSelector).length > 0)
	  {
		  //Create the new DIV element and attach it to the clickable item.
		  var posit = $(sets.clickablesSelector).offset();
		  var newElString = '<div id="' + finalDDName + '" style="display:none;position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';
		  if(sets.height == 0)
		  {
			  //Do nothing - do not add a fixed height or add overflow:auto
			  //This should let the drop down area automatically adjust height to match the content.
		  }
		  else
		  {
			  newElString += 'height:' + sets.height + 'px;';
			  newElString += "overflow:auto;";
		  }
		  newElString += 'top:' + (posit.top + $(sets.clickablesSelector).height() + 1 + sets.offsetTop) + 'px;';
		  newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  if(sets.border == "Y")
		  {
			  newElString += 'border-width:1px;-webkit-border-radius: 0 0 5px 5px;-moz-border-radius: 0 0 5px 5px;border-radius: 0 0 5px 5px;;-webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);-webkit-background-clip: padding-box;-moz-background-clip: padding;background-clip: padding-box;*border-right-width: 2px;*border-bottom-width: 2px;border-style:solid;border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-image:-moz-linear-gradient(center top , #FFFFFF, #E6E6E6);background-repeat:repeat-x;background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
	
		  $('body').prepend(newElString);
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1)
	  	{
			var DTSN = ev1.data.dName;
			var clickSel = $(DTSN).data("clickablesSelector");
		  var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				apwClickDropDownDynamicToggleDropDown(DTSN);
			}
		};
	  
	  var observerFunc = function(ev2)
	  	{
			var DTSN = ev2.data.dName;
			var clickedItem = $(ev2.target);
			apwClickDropDownDynamicHandleOutsideClick(DTSN, clickedItem);
		};
	  
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  $(document).bind('click', {dName:datTrackerSelectorName}, observerFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(sets.clickablesSelector, curAPWID, contextRepresentative);
	  apwRegistryAddContentElement(sets.clickablesSelector, curAPWID, finalDDName);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  apwRegistryAddBinding(sets.clickablesSelector, curAPWID, 'document', 'Y', 'click', observerFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickDropDownDynamicToggleDropDown(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("dropDownName");
	var speedy = $(datTrackerSelectorName).data("slideSpeed");
	if(currentState == "N")
	{
		$(datTrackerSelectorName).data("isOpen", "Y");
		var openModFunc = $(datTrackerSelectorName).data("openClickablesModifierFunction");
		var loadFunc = $(datTrackerSelectorName).data("loadingDisplayFunction");
		var loadDataFlds = $(datTrackerSelectorName).data("loadDataFields");
		var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
		var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
		var optTok = $(datTrackerSelectorName).data("passToken");
		var theClickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var urly = $(datTrackerSelectorName).data("fillFromURL");
		var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
		var offTop = $(datTrackerSelectorName).data("offsetTop");
		var offLeft = $(datTrackerSelectorName).data("offsetLeft");
		var posit = $(theClickSel).offset();
		newTop = (posit.top + $(theClickSel).height() + 1 + offTop);
		newLeft = (posit.left + offLeft);
		$("#" + ddHandle).css("top", newTop + "px");
		$("#" + ddHandle).css("left", newLeft + "px");
		var openCall = openModFunc + "()";
		var loadCall = loadFunc + "('#" + ddHandle + "')";
		$('#' + ddHandle).slideDown(speedy);
		var ret2 = eval(openCall);
		var ret14 = eval(loadCall);
		
		var dataString = "";
		var datCounter = 0;
		
		//alert(loadDataFlds);
		if(loadDataFlds.length > 1)
		{
			var obj = jQuery.parseJSON(loadDataFlds);
			for (var prop in obj)
			{
				var varName = obj[prop];
				var tmpDataValue = "";
				var strValue = "";
				if(varName.substring(0,5) == "_apw_")
				{
					tmpDataValue = apwDataManagerGetGlobalVariable(varName);
				}
				else
				{
					tmpDataValue = $(theClickSel).data(obj[prop]);
				}
				strValue = String(tmpDataValue);
				if(datCounter > 0)
				{
					dataString += "&";
				}
				dataString += prop + "=" + strValue.replace(/&/g, "%26");
				datCounter++;
			}
		}
		
		var endString = "";
		if(optTok == "Y")
		{
			accTok = apwGetAccessToken();
			if(dataString.length > 0)
			{
				endString = dataString + "&t=" + accTok;
			}
			else
			{
				endString = "t=" + accTok;
			}
		}
		else
		{
			endString = dataString;
		}
		
		if(loadDataAdd.length > 0)
		{
			if(endString.length > 0)
			{
				endString += "&" + loadDataAdd;	
			}
			else
			{
				endString = loadDataAdd;	
			}
		}
		
		var dataFuncResult = "";
		if(loadDataFunc.length > 0)
		{
			var loadDataFuncCall = loadDataFunc + "()";
			dataFuncResult = eval(loadDataFuncCall);
			
			if(dataFuncResult.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + dataFuncResult;	
				}
				else
				{
					endString = dataFuncResult;	
				}	
			}
		}
		
		var contextRepObj = $('#' + contextRep)[0];
		$('#' + contextRep).data('apwClickedItem', this);
		jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
		var datTrackName = $(this).data("mainDataSelector");
		var targEl2 = $(datTrackName).data("dropDownName");
		var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
		var clickSel2 = $(datTrackName).data("clickablesSelector");
		
		var loadFinDispCall = loadFinishFunc + "('#" + targEl2 + "')";
		var ret3 = eval(loadFinDispCall);
		
		$('#' + targEl2).empty();
		$('#' + targEl2).append(dat);}, error: function(obj, code){
			var datTrackName = $(this).data("mainDataSelector");
			var failFunc = $(datTrackName).data("loadFailedFunction");
			var ddHandle = $(datTrackName).data("dropDownName");
			
			var failCall = failFunc + "('#" + ddHandle + "')";
			var ret16 = eval(failCall);
			}});
	}
	else
	{
		$(datTrackerSelectorName).data("isOpen", "N");
		var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
		var closeCall = closeModFunc + "()";
		$('#' + ddHandle).slideUp(speedy);
		var ret3 = eval(closeCall);
	}	
}

function apwClickDropDownDynamicHandleOutsideClick(datTrackerSelectorName, eventTarget)
{
	var clickableThing = $(datTrackerSelectorName).data("clickablesSelector");
	var theDDName = "#" + $(datTrackerSelectorName).data("dropDownName");
	if((eventTarget.parents(clickableThing).length > 0) || (eventTarget.is(clickableThing)) || (eventTarget.is(theDDName)) || (eventTarget.parents(theDDName).length > 0))
	{
		//Do nothing because we have clicked inside the active drop-down area or the clickable that triggers it.
	}
	else
	{
		//We have clicked outside of the active area. Close the drop down if it is currently open.
		var currentState = $(datTrackerSelectorName).data("isOpen");
		if(currentState == "Y")
		{
			$(datTrackerSelectorName).data("isOpen", "N");
			var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
			var closeCall = closeModFunc + "()";
			var ret3 = eval(closeCall);
			$(theDDName).hide();	
		}
	}
}

function apwClickDropDownDynamicOpenClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropDownDynamicCloseClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropDownDynamicLoadingDisplayBlank(displayAreaHandle)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropDownDynamicLoadingDisplayFinishBlank(displayAreaHandle)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropDownDynamicLoadFailedBlank(displayAreaHandle)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickDropDownDynamicHoverInBlank(hoveredItem)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickDropDownDynamicHoverOutBlank(hoveredItem)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwClickDropUp = function(options) {
  	
	var settings = $.extend( {
      'openClickablesModifierFunction' : 'apwClickDropUpOpenClickedItemModifierBlank',
	  'closeClickablesModifierFunction' : 'apwClickDropUpCloseClickedItemModifierBlank',
	  'clickablesSelector' : '',
	  'width' : 40,
	  'height' : 40,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#ccc',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#F5F5F5',
	  'slideSpeed':400,
	  'fillFromID' : '',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickDropUpHoverInBlank',
	  'hoverOutFunction' : 'apwClickDropUpHoverOutBlank',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickDropUpData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickDropUpData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwDropUp" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwDropUp" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('openClickablesModifierFunction', sets.openClickablesModifierFunction);
	  elt.data('closeClickablesModifierFunction', sets.closeClickablesModifierFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('offsetTop', sets.offsetTop);
	  elt.data('offsetLeft', sets.offsetLeft);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('isOpen', 'N');
	  elt.data('slideSpeed', sets.slideSpeed);
	  elt.data('fillFromID', sets.fillFromID);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('dropUpName', finalDDName);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('presence', 'Y');
	  //alert(datTrackerSelectorName);
	  
	  //Add apwID to the clickable element.
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 11009\nLibrary: apwClickDropUp\nType: Input parameters invalid\nCause:Drop Up window width is set to 0 or less.");
	  }
	  
	  if(sets.height < 1)
	  {
		  alert("AppWorks Exception 11010\nLibrary: apwClickDropUp\nType: Input parameters invalid\nCause:Drop Up window height is set to 0 or less.");
	  }
	  
	  if(sets.clickablesSelector.length < 1)
	  {
		  alert("AppWorks Exception 11011\nLibrary: apwClickDropUp\nType: Input parameters invalid\nCause:Selector string for clickable items is blank. See parameter 'clickablesSelector' in documentation.");
	  }
	  
	  if(sets.fillFromID.length < 1)
	  {
		  alert("AppWorks Exception 11012\nLibrary: apwClickDropUp\nType: Input parameters invalid\nCause:Element ID for filling Drop Up area is blank. See parameter 'fillFromID' in documentation.");
	  }
	  
	  //Create the new DIV element and attach it to the clickable item.
	  //Only attempt this if the clickablesSelector results in an actual item set. Otherwise we will throw JS errors
	  if($(sets.clickablesSelector).length > 0)
	  {
		  var posit = $(sets.clickablesSelector).offset();
		  var newElString = '<div id="' + finalDDName + '" style="display:none;position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';  
		  newElString += 'height:0px;';
		  newElString += "overflow:auto;";
		  newElString += 'top:' + (posit.top - $(sets.clickablesSelector).height() - 1 + sets.offsetTop) + 'px;';
		  newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  if(sets.border == "Y")
		  {
			  newElString += 'border-width:1px;-webkit-border-radius: 0 0 5px 5px;-moz-border-radius: 0 0 5px 5px;border-radius: 0 0 5px 5px;;-webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);-webkit-background-clip: padding-box;-moz-background-clip: padding;background-clip: padding-box;*border-right-width: 2px;*border-bottom-width: 2px;border-style:solid;border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-image:-moz-linear-gradient(center top , #FFFFFF, #E6E6E6);background-repeat:repeat-x;background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
	
		  $('body').prepend(newElString);
		  
		  //Grab the specified content from elsewhere in the document and put it in the drop down space.
		  //This is a TOTAL HACK because for some reason the new DIV is not available until after we exit this setup function.
		  //We have to call it from another function, delayed by 500ms.
		  //Everyone - therefore - will have to hide their content (make it display:none) so it doesn't show for a moment then disappear.
		  var laterCall = setTimeout("apwClickDropUpLoadExistingContent('" + finalDDName + "','" + sets.fillFromID + "')",500);
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1)
	  	{
		  var DTSN = ev1.data.dName;
		  var clickSel = $(DTSN).data("clickablesSelector");
		  var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
		  		apwClickDropUpToggleDropUp(DTSN);
			}
		};
		
		var observerFunc = function(ev2)
		{
			var DTSN = ev2.data.dName;
			var clickedItem = $(ev2.target);
			apwClickDropUpHandleOutsideClick(DTSN, clickedItem);
		};
			
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  $(document).bind('click', {dName:datTrackerSelectorName}, observerFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContentElement(sets.clickablesSelector, curAPWID, finalDDName);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  apwRegistryAddBinding(sets.clickablesSelector, curAPWID, 'document', 'Y', 'click', observerFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickDropUpLoadExistingContent(ddName,pullFromID)
{
	//Don't try to do anything if this parameter is empty.
	if(pullFromID.length > 0)
	{
		$('#' + ddName).append($('#' + pullFromID));
		$('#' + pullFromID).show();
	}
}

function apwClickDropUpToggleDropUp(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("dropUpName");
	var theHgt = $(datTrackerSelectorName).data("height");
	var speedy = $(datTrackerSelectorName).data("slideSpeed");
	if(currentState == "N")
	{
		$(datTrackerSelectorName).data("isOpen", "Y");
		var openModFunc = $(datTrackerSelectorName).data("openClickablesModifierFunction");
		var openCall = openModFunc + "()";
		var offTop = $(datTrackerSelectorName).data("offsetTop");
		var offLeft = $(datTrackerSelectorName).data("offsetLeft");
		var theClickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var posit = $(theClickSel).offset();
		newTop = (posit.top - $(theClickSel).height() - 1 + offTop);
		newLeft = (posit.left + offLeft);
		$("#" + ddHandle).css("top", newTop + "px");
		$("#" + ddHandle).css("left", newLeft + "px");
		$('#' + ddHandle).show();
		$('#' + ddHandle).animate({"height":("" + theHgt + ""),"top":("-=" + theHgt + "")},speedy);
		var ret2 = eval(openCall);
	}
	else
	{
		$(datTrackerSelectorName).data("isOpen", "N");
		var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
		var closeCall = closeModFunc + "()";
		$('#' + ddHandle).animate({"height":"0","top":("+=" + theHgt + "")},{duration:speedy,complete:function(){$('#' + ddHandle).hide();}});
		var ret3 = eval(closeCall);
	}	
}

function apwClickDropUpHandleOutsideClick(datTrackerSelectorName, eventTarget)
{
	var clickableThing = $(datTrackerSelectorName).data("clickablesSelector");
	var theDDName = "#" + $(datTrackerSelectorName).data("dropUpName");
	if((eventTarget.parents(clickableThing).length > 0) || (eventTarget.is(clickableThing)) || (eventTarget.is(theDDName)) || (eventTarget.parents(theDDName).length > 0))
	{
		//Do nothing because we have clicked inside the active drop-down area or the clickable that triggers it.
	}
	else
	{
		//We have clicked outside of the active area. Close the drop down if it is currently open.
		var currentState = $(datTrackerSelectorName).data("isOpen");
		if(currentState == "Y")
		{
			$(datTrackerSelectorName).data("isOpen", "N");
			var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
			var theHgt = $(datTrackerSelectorName).data("height");
			var closeCall = closeModFunc + "()";
			var ret3 = eval(closeCall);
			$(theDDName).css("height","0px");
			var curTop = parseInt($(theDDName).css("top"));
			var resultingTop = curTop + theHgt;
			$(theDDName).css("top", (resultingTop + "px"));
			$(theDDName).hide();
		}
	}
}

function apwClickDropUpOpenClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropUpCloseClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropUpHoverInBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickDropUpHoverOutBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwClickDropUpDynamic = function(options) {
  	
	var settings = $.extend( {
      'openClickablesModifierFunction' : 'apwClickDropUpDynamicOpenClickedItemModifierBlank',
	  'closeClickablesModifierFunction' : 'apwClickDropUpDynamicCloseClickedItemModifierBlank',
	  'loadingDisplayFunction' : 'apwClickDropUpDynamicLoadingDisplayBlank',
	  'loadingFinishDisplayFunction' : 'apwClickDropUpDynamicLoadingDisplayFinishBlank',
	  'loadFailedFunction' : 'apwClickDropUpDynamicLoadFailedBlank',
	  'clickablesSelector' : '',
	  'width' : 40,
	  'height' : 40,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#ccc',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#F5F5F5',
	  'slideSpeed': 400,
	  'fillFromURL' : '',
	  'passToken' : 'N',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'loadDataFields' : '',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickDropUpDynamicHoverInBlank',
	  'hoverOutFunction' : 'apwClickDropUpDynamicHoverOutBlank',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickDropUpDynamicData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickDropUpDynamicData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwClickDropUpDynamicRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwClickDropUpDynamicRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwDropUp" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwDropUp" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('openClickablesModifierFunction', sets.openClickablesModifierFunction);
	  elt.data('closeClickablesModifierFunction', sets.closeClickablesModifierFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('offsetTop', sets.offsetTop);
	  elt.data('offsetLeft', sets.offsetLeft);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('isOpen', 'N');
	  elt.data('slideSpeed', sets.slideSpeed);
	  elt.data('fillFromURL', sets.fillFromURL);
	  elt.data('passToken', sets.passToken);
	  elt.data('loadDataFields', sets.loadDataFields);
	  elt.data('loadDataPreparationFunction', sets.loadDataPreparationFunction);
	  elt.data('loadDataAdditionalString', sets.loadDataAdditionalString);
	  elt.data('loadingDisplayFunction', sets.loadingDisplayFunction);
	  elt.data('loadingFinishDisplayFunction', sets.loadingFinishDisplayFunction);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('loadFailedFunction', sets.loadFailedFunction);
	  elt.data('dropUpName', finalDDName);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 8009\nLibrary: apwClickDropUpDynamic\nType: Input parameters invalid\nCause:Drop Up window width is set to 0 or less.");
	  }
	  
	  if(sets.height < 1)
	  {
		  alert("AppWorks Exception 8010\nLibrary: apwClickDropUpDynamic\nType: Input parameters invalid\nCause:Drop Up window height is set to 0 or less.");
	  }
	  
	  if(sets.clickablesSelector.length < 1)
	  {
		  alert("AppWorks Exception 8011\nLibrary: apwClickDropUpDynamic\nType: Input parameters invalid\nCause:Selector string for clickable items is blank. See parameter 'clickablesSelector' in documentation.");
	  }
	  
	  if(sets.fillFromURL.length < 1)
	  {
		  alert("AppWorks Exception 8012\nLibrary: apwClickDropUpDynamic\nType: Input parameters invalid\nCause:URL setting to fill Drop Up is blank. See parameter 'fillFromURL' in documentation.");
	  }
	  
	  //Create the new DIV element and attach it to the clickable item.
	  //Only attempt this if the clickablesSelector results in an actual item set. Otherwise we will throw JS errors
	  if($(sets.clickablesSelector).length > 0)
	  {
		  //Create the new DIV element and attach it to the clickable item.
		  var posit = $(sets.clickablesSelector).offset();
		  var newElString = '<div id="' + finalDDName + '" style="display:none;position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';
		  newElString += 'height:0px;';
		  newElString += "overflow:auto;";
		  newElString += 'top:' + (posit.top - $(sets.clickablesSelector).height() - 1 + sets.offsetTop) + 'px;';
		  newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  if(sets.border == "Y")
		  {
			  newElString += 'border-width:1px;-webkit-border-radius: 0 0 5px 5px;-moz-border-radius: 0 0 5px 5px;border-radius: 0 0 5px 5px;;-webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);-moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);-webkit-background-clip: padding-box;-moz-background-clip: padding;background-clip: padding-box;*border-right-width: 2px;*border-bottom-width: 2px;border-style:solid;border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-image:-moz-linear-gradient(center top , #FFFFFF, #E6E6E6);background-repeat:repeat-x;background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
	
		  $('body').prepend(newElString);
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1)
	  	{
			var DTSN = ev1.data.dName;
			var clickSel = $(DTSN).data("clickablesSelector");
		  var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				apwClickDropUpDynamicToggleDropUp(DTSN);
			}
		};
	  
	  var observerFunc = function(ev2)
	  	{
			var DTSN = ev2.data.dName;
			var clickedItem = $(ev2.target);
			apwClickDropUpDynamicHandleOutsideClick(DTSN, clickedItem);
		};
	  
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  $(document).bind('click', {dName:datTrackerSelectorName}, observerFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(sets.clickablesSelector, curAPWID, contextRepresentative);
	  apwRegistryAddContentElement(sets.clickablesSelector, curAPWID, finalDDName);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  apwRegistryAddBinding(sets.clickablesSelector, curAPWID, 'document', 'Y', 'click', observerFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickDropUpDynamicToggleDropUp(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("dropUpName");
	var speedy = $(datTrackerSelectorName).data("slideSpeed");
	var theHgt = $(datTrackerSelectorName).data("height");
	if(currentState == "N")
	{
		$(datTrackerSelectorName).data("isOpen", "Y");
		var openModFunc = $(datTrackerSelectorName).data("openClickablesModifierFunction");
		var loadFunc = $(datTrackerSelectorName).data("loadingDisplayFunction");
		var loadDataFlds = $(datTrackerSelectorName).data("loadDataFields");
		var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
		var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
		var optTok = $(datTrackerSelectorName).data("passToken");
		var theClickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var urly = $(datTrackerSelectorName).data("fillFromURL");
		var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
		var offTop = $(datTrackerSelectorName).data("offsetTop");
		var offLeft = $(datTrackerSelectorName).data("offsetLeft");
		var posit = $(theClickSel).offset();
		newTop = (posit.top - $(theClickSel).height() - 1 + offTop);
		newLeft = (posit.left + offLeft);
		$("#" + ddHandle).css("top", newTop + "px");
		$("#" + ddHandle).css("left", newLeft + "px");
		var openCall = openModFunc + "()";
		var loadCall = loadFunc + "('#" + ddHandle + "')";
		$('#' + ddHandle).show();
		$('#' + ddHandle).animate({"height":("" + theHgt + ""),"top":("-=" + theHgt + "")},speedy);
		var ret2 = eval(openCall);
		var ret14 = eval(loadCall);
		
		var dataString = "";
		var datCounter = 0;
		
		//alert(loadDataFlds);
		if(loadDataFlds.length > 1)
		{
			var obj = jQuery.parseJSON(loadDataFlds);
			for (var prop in obj)
			{
				var varName = obj[prop];
				var tmpDataValue = "";
				var strValue = "";
				if(varName.substring(0,5) == "_apw_")
				{
					tmpDataValue = apwDataManagerGetGlobalVariable(varName);
				}
				else
				{
					tmpDataValue = $(theClickSel).data(obj[prop]);
				}
				strValue = String(tmpDataValue);
				if(datCounter > 0)
				{
					dataString += "&";
				}
				dataString += prop + "=" + strValue.replace(/&/g, "%26");
				datCounter++;
			}	
		}
		
		var endString = "";
		if(optTok == "Y")
		{
			accTok = apwGetAccessToken();
			if(dataString.length > 0)
			{
				endString = dataString + "&t=" + accTok;
			}
			else
			{
				endString = "t=" + accTok;
			}
		}
		else
		{
			endString = dataString;
		}
		
		if(loadDataAdd.length > 0)
		{
			if(endString.length > 0)
			{
				endString += "&" + loadDataAdd;	
			}
			else
			{
				endString = loadDataAdd;	
			}
		}
		
		var dataFuncResult = "";
		if(loadDataFunc.length > 0)
		{
			var loadDataFuncCall = loadDataFunc + "()";
			dataFuncResult = eval(loadDataFuncCall);
			
			if(dataFuncResult.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + dataFuncResult;	
				}
				else
				{
					endString = dataFuncResult;	
				}	
			}
		}
		
		var contextRepObj = $('#' + contextRep)[0];
		$('#' + contextRep).data('apwClickedItem', this);
		jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
		var datTrackName = $(this).data("mainDataSelector");
		var targEl2 = $(datTrackName).data("dropUpName");
		var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
		var clickSel2 = $(datTrackName).data("clickablesSelector");
		
		var loadFinDispCall = loadFinishFunc + "('#" + targEl2 + "')";
		var ret3 = eval(loadFinDispCall);
		
		$('#' + targEl2).empty();
		$('#' + targEl2).append(dat);}, error: function(obj, code){
			var datTrackName = $(this).data("mainDataSelector");
			var failFunc = $(datTrackName).data("loadFailedFunction");
			var ddHandle = $(datTrackName).data("dropUpName");
			
			var failCall = failFunc + "('#" + ddHandle + "')";
			var ret16 = eval(failCall);
			}});
	}
	else
	{
		$(datTrackerSelectorName).data("isOpen", "N");
		var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
		var closeCall = closeModFunc + "()";
		$('#' + ddHandle).animate({"height":"0","top":("+=" + theHgt + "")},{duration:speedy,complete:function(){$('#' + ddHandle).hide();}});
		var ret3 = eval(closeCall);
	}	
}

function apwClickDropUpDynamicHandleOutsideClick(datTrackerSelectorName, eventTarget)
{
	var clickableThing = $(datTrackerSelectorName).data("clickablesSelector");
	var theDDName = "#" + $(datTrackerSelectorName).data("dropUpName");
	if((eventTarget.parents(clickableThing).length > 0) || (eventTarget.is(clickableThing)) || (eventTarget.is(theDDName)) || (eventTarget.parents(theDDName).length > 0))
	{
		//Do nothing because we have clicked inside the active drop-down area or the clickable that triggers it.
	}
	else
	{
		//We have clicked outside of the active area. Close the drop down if it is currently open.
		var currentState = $(datTrackerSelectorName).data("isOpen");
		if(currentState == "Y")
		{
			$(datTrackerSelectorName).data("isOpen", "N");
			var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
			var theHgt = $(datTrackerSelectorName).data("height");
			var closeCall = closeModFunc + "()";
			var ret3 = eval(closeCall);
			$(theDDName).css("height","0px");
			var curTop = parseInt($(theDDName).css("top"));
			var resultingTop = curTop + theHgt;
			$(theDDName).css("top", (resultingTop + "px"));
			$(theDDName).hide();	
		}
	}
}

function apwClickDropUpDynamicOpenClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropUpDynamicCloseClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropUpDynamicLoadingDisplayBlank(displayAreaHandle)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropUpDynamicLoadingDisplayFinishBlank(displayAreaHandle)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickDropUpDynamicLoadFailedBlank(displayAreaHandle)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickDropUpDynamicHoverInBlank(hoveredItem)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickDropUpDynamicHoverOutBlank(hoveredItem)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwClickFileUpload = function(options) {
  	
	var settings = $.extend( {
      'clickablesModifierFunction' : 'apwClickFileUploadClickedItemModifierBlank',
	  'uploadFinishedModifierFunction' : 'apwClickFileUploadFinishedModifierBlank',
	  'uploadUnfinishedModifierFunction' : 'apwClickFileUploadUnfinishedModifierBlank',
	  'uploadFinishedProcessingFunction' : 'apwClickFileUploadFinishedProcessingBlank',
	  'uploadURL' : '',
	  'clickablesSelector' : '',
	  'passToken' : 'N',
	  'loadDataFields' : '',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'uploadCheckURL' : '',
	  'uploadFailedModifierFunction' : 'apwClickFileUploadFailedModifierBlank',
	  'uploadFailedProcessingFunction' : 'apwClickFileUploadFailedProcessingBlank',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickFileUploadHoverInBlank',
	  'hoverOutFunction' : 'apwClickFileUploadHoverOutBlank',
	  'uploadElementID' : '',
	  'uploadTimeOut' : 0,
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickFileUploadData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickFileUploadData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwClickFileUploadRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwClickFileUploadRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('clickablesModifierFunction', sets.clickablesModifierFunction);
	  elt.data('uploadFinishedModifierFunction', sets.uploadFinishedModifierFunction);
	  elt.data('uploadUnfinishedModifierFunction', sets.uploadUnfinishedModifierFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('loadDataFields', sets.loadDataFields);
	  elt.data('loadDataPreparationFunction', sets.loadDataPreparationFunction);
	  elt.data('loadDataAdditionalString', sets.loadDataAdditionalString);
	  elt.data('passToken', sets.passToken);
	  elt.data('uploadURL', sets.uploadURL);
	  elt.data('uploadFinishedProcessingFunction', sets.uploadFinishedProcessingFunction);
	  elt.data('uploadCheckURL', sets.uploadCheckURL);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('uploadFailedModifierFunction', sets.uploadFailedModifierFunction);
	  elt.data('uploadFailedProcessingFunction', sets.uploadFailedProcessingFunction);
	  elt.data('uploadElementID', sets.uploadElementID);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('uploadTimeOut', sets.uploadTimeOut);
	  elt.data('currentTimerValue', 0);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  elt.data('timerRunning','N');
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  //Add apwID to the clickable element.
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1){
		var datTrackerSelectorName = ev1.data.dName;
		var modFunc = $(datTrackerSelectorName).data("clickablesModifierFunction");
		var loadDataFlds = $(datTrackerSelectorName).data("loadDataFields");
		var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
		var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
		var clickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var optTok = $(datTrackerSelectorName).data("passToken");
		var timeRun = $(datTrackerSelectorName).data("timerRunning");
		var reqState = $(datTrackerSelectorName).data("requiredState");
		var clickedItem = $(clickSel);
		var runFlag = 1;
		if(reqState.length > 0)
		{
			var curState = clickedItem.attr("apwstate");
			if(curState == reqState)
			{
				runFlag = 1;
			}
			else
			{
				runFlag = 0;	
			}
		}
		else
		{
			runFlag = 1;	
		}
			
		if(runFlag == 1)
		{
			var timely = new Date().getTime();
			$(datTrackerSelectorName).data("currentTimerValue", timely);
			//alert("Time at click is... " + timely);
			
			var modCall = modFunc + "(this)";
			var ret2 = eval(modCall);
			
			var dataString = "";
			var datCounter = 0;
			
			//alert("Starting data stuff...");
			if(loadDataFlds.length > 1)
			{
				var obj = jQuery.parseJSON(loadDataFlds);
				for (var prop in obj)
				{
					var varName = obj[prop];
					var tmpDataValue = "";
					var strValue = "";
					if(varName.substring(0,5) == "_apw_")
					{
						tmpDataValue = apwDataManagerGetGlobalVariable(varName);
					}
					else
					{
						tmpDataValue = $(clickSel).data(obj[prop]);
					}
					strValue = String(tmpDataValue);
					if(datCounter > 0)
					{
						dataString += "&";
					}
					dataString += prop + "=" + strValue.replace(/&/g, "%26");
					datCounter++;
				}	
			}
			
			var endString = "";
			if(optTok == "Y")
			{
				accTok = apwGetAccessToken();
				if(dataString.length > 0)
				{
					endString = dataString + "&t=" + accTok;
				}
				else
				{
					endString = "t=" + accTok;
				}
			}
			else
			{
				endString = dataString;
			}
			
			if(loadDataAdd.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + loadDataAdd;	
				}
				else
				{
					endString = loadDataAdd;	
				}
			}
			
			var dataFuncResult = "";
			if(loadDataFunc.length > 0)
			{
				var loadDataFuncCall = loadDataFunc + "()";
				dataFuncResult = eval(loadDataFuncCall);
				
				if(dataFuncResult.length > 0)
				{
					if(endString.length > 0)
					{
						endString += "&" + dataFuncResult;	
					}
					else
					{
						endString = dataFuncResult;	
					}	
				}
			}
			
			//alert("Ending data stuff...");
			//Create a new iFrame element positioned off the screen...
			//Include a new <form> with the appropriate action, method, etc...
			var winNameRand = Math.floor(Math.random() * 100000);
			var callName = "iFrame" + winNameRand;
			//alert("iFrame name is... " + callName);
			var newElString = '<iframe id="' + callName + '" name="' + callName + '" style="position:absolute;left:-9999px;z-index:11111111;"></iframe>';
			var fullObject = $(newElString);
			fullObject.prependTo('body');
			setTimeout(function(){apwClickFileUploadFinishFrameLoad(callName,datTrackerSelectorName,endString);}, 300);
			//Add the handle for the iFrame to the apwClickFileUpload handler data so it can be removed later...
			$(datTrackerSelectorName).data("currentFrame", callName);
			
			//Fire up the background monitor timed process to check for completion in our current window...if we are not already running...
			if(timeRun == "N")
			{
				$(datTrackerSelectorName).data("timerRunning", "Y");
				setTimeout("apwClickFileUploadCompletionMonitor('" + datTrackerSelectorName + "')", 1000);
			}
		}
	   };
	   
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(sets.clickablesSelector, curAPWID, contextRepresentative);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickFileUploadFinishFrameLoad(frameName, DTSN, dataString)
{
	//alert("newElString value is: " + newElString);
	//var fullObject = $("#" + frameName);
	//fullObject.append($("<html>"));
	//fullObject.find("html").append($("<head>"));
	//fullObject.find("html").append($("<body>"));
	//alert("Count of new iFrame object... " + fullObject.length);
	var urly = $(DTSN).data("uploadURL");
	var cloneID = $(DTSN).data("uploadElementID");
	//var frameObject = $("#" + frameName);
	//alert("Length of frame object is... " + frameObject.length);
	var formID = "upForm" + frameName;
	$(DTSN).data("currentForm", formID);
	var formString = '<form name="' + formID + '" id="' + formID + '" target="' + frameName + '" action="' + urly + '" method="POST" enctype="multipart/form-data" style="position:absolute;left:-9600px;z-index:11111111;"></form>';
	
	var formEl = $(formString);
	//Clone the target FILE input element, including deep data...
	//alert("Amount of items in form objecct... " + formEl.length);
	var copySel = "#" + cloneID;
	var origContainer = $(copySel);
	//alert("Value in file box... " + origContainer.val());
	//alert("Context of original file box... " + origContainer.context);
	var copyContainer = $(copySel).clone(true);
	//origContainer.hide();
	copyContainer.insertAfter(origContainer);
	//alert("Contents of copied FILE input... " + copyContainer.val());
	origContainer.attr("id", "tmpAPWFILE");
	origContainer.appendTo(formEl);

	//Loop through the data string, breaking it out and creating "hidden" input items in the form...
	var datArray = dataString.split("&");
	for(i = 0; i < datArray.length; i++)
	{
		var tmpDat = datArray[i].split("=");
		var tmpEl = '<input type="hidden" name="' + tmpDat[0] + '" value="' + tmpDat[1] + '" />';
		formEl.append($(tmpEl));
	}
	//alert(formEl.html());
	//Attach the form to the iFrame...
	//fullObject.contents().find('body').append(formEl);
	//alert("Contents of iFrame before append... " + fullObject.html());
	//fullObject.append(formEl);
	//fullObject.contents().find('body').append(formEl);
	//fullObject.contents().find('body').append('<div id="testicle"></div>');
	//var myObj = fullObject.contents().find('body').find('#testicle');
	//alert("Length of myObj is... " + myObj.length);
	//var conObj = myObj.contentWindow.document;
	//var conObj = myObj.context;
	//alert("Context object raw is... " + conObj);
	//var finalForm = $(formEl);
	//finalForm.context = conObj;
	//var testObj = $('#testDD',$('#' + frameName).get(0).contentDocument).clone();
	//testObj.context = conObj;
	//alert("Context of testObj is... " + testObj.context);
	//fullObject.contents().find('body').append(testObj);
	//var testObj2 = $('<input type="checkbox" />');
	//fullObject.contents().find('body').append(testObj2);
	//alert("Context of FormEl is... " + formEl.context);
	//alert("Context of final Form is... " + finalForm.context);
	//fullObject.contents().find('body').append(finalForm);
	//fullObject.contents().find('body').append('<input type="file" name="myFile" value="C:\pictures\mypic.jpg" />');
	//alert("Contents of iFrame after append... " + fullObject.html());
	//fullObject.prependTo('body');
	$(formEl).prependTo('body');
	//Call a delayed thread to submit the form...
	setTimeout("apwClickFileUploadSubmitForm('" + formID + "','" + frameName + "')", 300);
}

function apwClickFileUploadSubmitForm(formID, frameName)
{
	var formSel = "#" + formID;
	//var frameSel = "#" + frameName;
	//var foundFrame = $(frameSel);
	var foundForm = $(formSel);
	//alert("Contents of found frame... " + foundFrame.find("body").html());
	//var foundForm = $(frameSel).contents().find("body").find('form');
	//alert("items in found form... " + foundForm.length);
	foundForm.submit();
}

function apwClickFileUploadCompletionMonitor(datTrackerSel)
{
	if($(datTrackerSel).length > 0)
	{
		//We are still "alive" on the screen... so check to see if we've finished Oauth
		var theClickSel = $(datTrackerSel).data("clickablesSelector");
		var urly = $(datTrackerSel).data("uploadCheckURL");
		var contextRep = $(datTrackerSel).data("contextRepresentative");
		var optTok = $(datTrackerSel).data("passToken");
		var loadDataFlds = $(datTrackerSel).data("loadDataFields");
		var loadDataAdd = $(datTrackerSel).data("loadDataAdditionalString");
		var loadDataFunc = $(datTrackerSel).data("loadDataPreparationFunction");
		
		var dataString = "";
		var datCounter = 0;
		
		//alert(loadDataFlds);
		if(loadDataFlds.length > 1)
		{
			var obj = jQuery.parseJSON(loadDataFlds);
			for (var prop in obj)
			{
				var varName = obj[prop];
				var tmpDataValue = "";
				var strValue = "";
				if(varName.substring(0,5) == "_apw_")
				{
					tmpDataValue = apwDataManagerGetGlobalVariable(varName);
				}
				else
				{
					tmpDataValue = $(theClickSel).data(obj[prop]);
				}
				strValue = String(tmpDataValue);
				if(datCounter > 0)
				{
					dataString += "&";
				}
				dataString += prop + "=" + strValue.replace(/&/g, "%26");
				datCounter++;
			}	
		}
		
		var endString = "";
		if(optTok == "Y")
		{
			accTok = apwGetAccessToken();
			if(dataString.length > 0)
			{
				endString = dataString + "&t=" + accTok;
			}
			else
			{
				endString = "t=" + accTok;
			}
		}
		else
		{
			endString = dataString;
		}
		
		if(loadDataAdd.length > 0)
		{
			if(endString.length > 0)
			{
				endString += "&" + loadDataAdd;	
			}
			else
			{
				endString = loadDataAdd;	
			}
		}

		var dataFuncResult = "";
		if(loadDataFunc.length > 0)
		{
			var loadDataFuncCall = loadDataFunc + "()";
			dataFuncResult = eval(loadDataFuncCall);
			
			if(dataFuncResult.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + dataFuncResult;	
				}
				else
				{
					endString = dataFuncResult;	
				}	
			}
		}
		
		var contextRepObj = $('#' + contextRep)[0];
		var whatClicked = $(theClickSel)[0];
		$('#' + contextRep).data('apwClickedItem', whatClicked);
		jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
		var datTrackName = $(this).data("mainDataSelector");
		var targEl2 = $(this).data("apwClickedItem");
		var finModFunc = $(datTrackName).data("uploadFinishedModifierFunction");
		var finProcFunc = $(datTrackName).data("uploadFinishedProcessingFunction");
		var unfinModFunc = $(datTrackName).data("uploadUnfinishedModifierFunction");
		var failedModFunc = $(datTrackName).data("uploadFailedModifierFunction");
		var failedProcFunc = $(datTrackName).data("uploadFailedProcessingFunction");
		var timeOut = $(datTrackName).data("uploadTimeOut");
		var curTimeCount = $(datTrackName).data("currentTimerValue");
		var curFrame = "#" + $(datTrackName).data("currentFrame");
		var curForm = "#" + $(datTrackName).data("currentForm");
		alert (dat);
		var datPiece = dat.substring(0,1);
		if(datPiece == "1")
		{
			//We have finished processing the Oauth.
			//Call the 2 appropriate functions and then quit calling ourselves (by NOT calling again).
			var finCall = finModFunc + "(targEl2)";
			var ret6 = eval(finCall);
			
			var procCall = finProcFunc + "(dat)";
			var ret13 = eval(procCall);
			$(datTrackName).data("timerRunning", "N");
			
			//Remove the current iFrame from the document.
			$(curFrame).remove();
			$(curForm).remove();
		}
		else
		{
			if(dat == "0")
			{
				var weCanRun = 1;
				
				if(timeOut == 0)
				{
					//Do nothing because we are not judging timeout.
				}
				else
				{
					var timely = new Date().getTime();
					var diffTime = timely - curTimeCount;
					//alert("Time at check is... " + timely + " and diffTime is... " + diffTime + " and timeOut setting is... " + timeOut);
					if(diffTime > timeOut)
					{
						weCanRun = 0;
					}
					else
					{
						weCanRun = 1;
					}
				}
				
				if(weCanRun == 1)
				{
					//We have confirmed that upload is NOT finished.
					//Call the function for unfinished business...
					var unfinCall = unfinModFunc + "(targEl2)";
					var ret3 = eval(unfinCall);
					
					//Call ourselves again so we can continue checking...
					setTimeout("apwClickFileUploadCompletionMonitor('" + datTrackName + "')", 500);	
				}
				else
				{
					//We have confirmed that upload failed.
					//Call the functions for failure processing...
					//alert("Failed from timeout");
					var failCall1 = failedModFunc + "(targEl2)";
					var retF1 = eval(failCall1);
					var failCall2 = failedProcFunc + "()";
					var retF2 = eval(failCall2);
					
					//Remove the current iFrame from the document.
					$(curFrame).remove();
					$(curForm).remove();
					
					//We are done for now. Reset the timer so we can run again...
					$(datTrackName).data("timerRunning", "N");
				}
			}
			else
			{
				if(dat == "-1")
				{
					//We have confirmed that upload failed.
					//Call the functions for failure processing...
					var failCall1 = failedModFunc + "(targEl2)";
					var retF1 = eval(failCall1);
					var failCall2 = failedProcFunc + "()";
					var retF2 = eval(failCall2);
					
					//Remove the current iFrame from the document.
					$(curFrame).remove();
					$(curForm).remove();
					
					//We are done for now. Reset the timer so we can run again...
					$(datTrackName).data("timerRunning", "N");
				}
				else
				{
					//We have a response that we don't recognize. Treat it as an AJAX failure.
					//That means we do nothing, except kill the timer flag so we can run again.
					$(datTrackName).data("timerRunning", "N");
				}
			}
		}
		}, error: function(obj, code){
			/*
			On failure we just want to cancel our timed process.
			This is because we can't reach the URL that checks for upload process completion.
			Do nothing except kill the timer flag so we can run again.
			*/
			var datTrackName = $(this).data("mainDataSelector");
			$(datTrackName).data("timerRunning", "N");
			}});
	}
}

function apwClickFileUploadClickedItemModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickFileUploadFinishedModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickFileUploadUnfinishedModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickFileUploadFinishedProcessingBlank(serverResponse)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickFileUploadFailedModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickFileUploadFailedProcessingBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickFileUploadHoverInBlank(curElement)
{
	
}

function apwClickFileUploadHoverOutBlank(curElement)
{
	
}

(function( $ ) {
  $.fn.apwClickLoader = function(options) {
  	
	var settings = $.extend( {
      'targetElement' : '',
      'loadingDisplayFunction' : 'apwClickLoaderDisplayLoaderBlank',
	  'loadingFinishDisplayFunction' : 'apwClickLoaderDisplayLoaderFinishBlank',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'passToken' : 'N',
	  'loadURL' : '',
	  'clickablesSelector' : '',
	  'loadingStateFunction' : 'apwClickLoaderLoadingStateBlank',
	  'selectedStateFunction' : 'apwClickLoaderSelectedStateBlank',
	  'loadFailedFunction' : 'apwClickLoaderLoadFailedBlank',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickLoaderHoverInBlank',
	  'hoverOutFunction' : 'apwClickLoaderHoverOutBlank',
	  'loadDataFields' : '',
	  'allowLateLoads' : 'N',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickLoaderData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickLoaderData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwClickLoaderRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwClickLoaderRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  //alert(contextRepresentativeSelector);
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('targetelement', sets.targetElement);
	  elt.data('loadingdisplayfunction', sets.loadingDisplayFunction);
	  elt.data('loadingfinishdisplayfunction', sets.loadingFinishDisplayFunction);
	  elt.data("passtoken", sets.passToken);
	  elt.data('loadurl', sets.loadURL);
	  elt.data('clickablesselector', sets.clickablesSelector);
	  elt.data('loadingstatefunction', sets.loadingStateFunction);
	  elt.data('selectedstatefunction', sets.selectedStateFunction);
	  elt.data('loadfailedfunction', sets.loadFailedFunction);
	  elt.data('loaddatafields', sets.loadDataFields);
	  elt.data('loaddatapreparationfunction', sets.loadDataPreparationFunction);
	  elt.data('loaddataadditionalstring', sets.loadDataAdditionalString);
	  elt.data('managehover', sets.manageHover);
	  elt.data('hoverinfunction', sets.hoverInFunction);
	  elt.data('hoveroutfunction', sets.hoverOutFunction);
	  elt.data('requiredstate', sets.requiredState);
	  elt.data('allowlateloads', sets.allowLateLoads);
	  elt.data('presence', 'Y');
	  elt.data('contextrepresentative', contextRepresentative);
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('maindataselector', datTrackerSelectorName);
	  
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var clickSel = $(datTrackerSelectorName).data("clickablesselector");
		  var hovInFunc = $(datTrackerSelectorName).data("hoverinfunction");
		  var hovCall = hovInFunc + "(this, '" + clickSel + "')";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var clickSel = $(datTrackerSelectorName).data("clickablesselector");
		  var hovOutFunc = $(datTrackerSelectorName).data("hoveroutfunction");
		  var hovCall = hovOutFunc + "(this, '" + clickSel + "')";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1)
	  {
		var datTrackerSelectorName = ev1.data.dName;
		var targEl = $(datTrackerSelectorName).data("targetelement");
		var loadFunc = $(datTrackerSelectorName).data("loadingdisplayfunction");
		var optTok = $(datTrackerSelectorName).data("passtoken");
		var urly = $(datTrackerSelectorName).data("loadurl");
		var loadStateFunc = $(datTrackerSelectorName).data("loadingstatefunction");
		var selStateFunc = $(datTrackerSelectorName).data("selectedstatefunction");
		var loadDataFlds = $(datTrackerSelectorName).data("loaddatafields");
		var loadDataAdd = $(datTrackerSelectorName).data("loaddataadditionalstring");
		var loadDataFunc = $(datTrackerSelectorName).data("loaddatapreparationfunction");
		var clickSel = $(datTrackerSelectorName).data("clickablesselector");
		var contextRep = $(datTrackerSelectorName).data("contextrepresentative");
		var reqState = $(datTrackerSelectorName).data("requiredstate");
		
		var runFlag = 1;
		if(reqState.length > 0)
		{
			var curState = $(this).attr("apwstate");
			if(curState == reqState)
			{
				runFlag = 1;
			}
			else
			{
				runFlag = 0;	
			}
		}
		else
		{
			runFlag = 1;	
		}
		
		if(runFlag == 1)
		{
			var loadDispCall = loadFunc + "('#" + targEl + "')";
			var ret1 = eval(loadDispCall);
			var loadStateCall = loadStateFunc + "(this, '" + clickSel + "')";
			var ret2 = eval(loadStateCall);
			
			//Set a random number value into the clickable item AND the main data holder
			//This is for content load locking to ensure slow requests don't overwrite more recent ones
			var locky = Math.floor(Math.random() * 100000);
			$('#' + contextRep).data("apwclickloaderlockvalue", locky);
			$(datTrackerSelectorName).data("loaderlockvalue", locky);
			
			var dataString = "";
			var datCounter = 0;
			
			//alert(loadDataFlds);
			if(loadDataFlds.length > 1)
			{
				var obj = jQuery.parseJSON(loadDataFlds);
				for (var prop in obj)
				{
					var varName = obj[prop];
					var tmpDataValue = "";
					var strValue = "";
					if(varName.substring(0,5) == "_apw_")
					{
						tmpDataValue = apwDataManagerGetGlobalVariable(varName);
					}
					else
					{
						tmpDataValue = $(this).data(obj[prop]);
					}
					strValue = String(tmpDataValue);
					if(datCounter > 0)
					{
						dataString += "&";
					}
					dataString += prop + "=" + strValue.replace(/&/g, "%26");
					datCounter++;
				}	
			}
			
			var endString = "";
			if(optTok == "Y")
			{
				accTok = apwGetAccessToken();
				if(dataString.length > 0)
				{
					endString = dataString + "&t=" + accTok;
				}
				else
				{
					endString = "t=" + accTok;
				}
			}
			else
			{
				endString = dataString;
			}
			
			if(loadDataAdd.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + loadDataAdd;	
				}
				else
				{
					endString = loadDataAdd;	
				}
			}
			
			var dataFuncResult = "";
			if(loadDataFunc.length > 0)
			{
				var loadDataFuncCall = loadDataFunc + "()";
				dataFuncResult = eval(loadDataFuncCall);
				
				if(dataFuncResult.length > 0)
				{
					if(endString.length > 0)
					{
						endString += "&" + dataFuncResult;	
					}
					else
					{
						endString = dataFuncResult;	
					}	
				}
			}
			
			//var contextRepObj = $('#' + contextRep)[0];
			$('#' + contextRep).data('apwclickeditem', this);
			var tmpContRep = $("#" + contextRep).clone(true);
			var contextRepObj = tmpContRep[0];
			
			jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
				var datTrackName = $(this).data("maindataselector");
				var myLockValue = $(this).data("apwclickloaderlockvalue");
				var targEl2 = $(datTrackName).data("targetelement");
				var loadFinishFunc = $(datTrackName).data("loadingfinishdisplayfunction");
				var clickSel2 = $(datTrackName).data("clickablesselector");
				var selStateFunc2 = $(datTrackName).data("selectedstatefunction");
				var mainLockValue = $(datTrackName).data("loaderlockvalue");
				var allowLate = $(datTrackName).data("allowlateloads");
				
				//Check to see if the locks match. If not, we must be LATE and don't want to do stuff anymore.
				//Unless we have allowLateLoads set to "Y", in which case we ignore locks.
				if((myLockValue == mainLockValue) || (allowLate == "Y"))
				{
				var loadFinDispCall = loadFinishFunc + "('#" + targEl2 + "')";
				var ret3 = eval(loadFinDispCall);
				
				$('#' + targEl2).empty();
				$('#' + targEl2).append(dat);
				
				var clickedobj = $(this).data("apwclickeditem");
				var selStateCall = selStateFunc2 + "(clickedobj, '" + clickSel2 + "')";
				var ret4 = eval(selStateCall);}else{/*Do nothing. Lock didn't match.*/}}, error: function(obj, code){
					var datTrackName = $(this).data("maindataselector");
					var failFunc = $(datTrackName).data("loadfailedfunction");
					var clickSel3 = $(datTrackName).data("clickablesselector");
					var mainLockValue = $(datTrackName).data("loaderlockvalue");
					var myLockValue = $(this).data("apwclickloaderlockvalue");
					
					//Check to see if there is a different lock value stored.
					//If so, we don't want to do anything because we are LATE and something else
					//is currently loading.
					if(myLockValue == mainLockValue)
					{
						var clickedobj = $(this).data("apwclickeditem");
						var failCall = failFunc + "(clickedobj, '" + clickSel3 + "')";
						var ret4 = eval(failCall);
					}
					}});
		}
	   };
	  
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(sets.clickablesSelector, curAPWID, contextRepresentative);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickLoaderLoadingStateBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickLoaderSelectedStateBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickLoaderDisplayLoaderBlank(targetElementSelector)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickLoaderDisplayLoaderFinishBlank(targetElementSelector)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickLoaderLoadFailedBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickLoaderHoverInBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickLoaderHoverOutBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

(function( $ ) {
  $.fn.apwClickOauth = function(options) {
  	
	var settings = $.extend( {
      'clickablesModifierFunction' : 'apwClickOauthClickedItemModifierBlank',
	  'oauthFinishedModifierFunction' : 'apwClickOauthFinishedModifierBlank',
	  'oauthUnfinishedModifierFunction' : 'apwClickOauthUnfinishedModifierBlank',
	  'oauthFinishedProcessingFunction' : 'apwClickOauthFinishedProcessingBlank',
	  'oauthURL' : '',
	  'windowHeight' : 400,
	  'windowWidth' : 400,
	  'clickablesSelector' : '',
	  'passToken' : 'N',
	  'loadDataFields' : '',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickOauthHoverInBlank',
	  'hoverOutFunction' : 'apwClickOauthHoverOutBlank',
	  'oauthCheckURL' : '',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickOauthData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickOauthData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwClickOauthRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwClickOauthRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('clickablesModifierFunction', sets.clickablesModifierFunction);
	  elt.data('oauthFinishedModifierFunction', sets.oauthFinishedModifierFunction);
	  elt.data('oauthUnfinishedModifierFunction', sets.oauthUnfinishedModifierFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('loadDataFields', sets.loadDataFields);
	  elt.data('loadDataPreparationFunction', sets.loadDataPreparationFunction);
	  elt.data('loadDataAdditionalString', sets.loadDataAdditionalString);
	  elt.data('passToken', sets.passToken);
	  elt.data('oauthURL', sets.oauthURL);
	  elt.data('windowHeight', sets.windowHeight);
	  elt.data('windowWidth', sets.windowWidth);
	  elt.data('oauthFinishedProcessingFunction', sets.oauthFinishedProcessingFunction);
	  elt.data('oauthCheckURL', sets.oauthCheckURL);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  elt.data('timerRunning','N');
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  //Add apwID to the clickable element.
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1){
		var datTrackerSelectorName = ev1.data.dName;
		var modFunc = $(datTrackerSelectorName).data("clickablesModifierFunction");
		var loadDataFlds = $(datTrackerSelectorName).data("loadDataFields");
		var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
		var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
		var clickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var optTok = $(datTrackerSelectorName).data("passToken");
		var urly = $(datTrackerSelectorName).data("oauthURL");
		var winH = $(datTrackerSelectorName).data("windowHeight");
		var winW = $(datTrackerSelectorName).data("windowWidth");
		var timeRun = $(datTrackerSelectorName).data("timerRunning");
		var reqState = $(datTrackerSelectorName).data("requiredState");
		var clickedItem = $(clickSel);
		var runFlag = 1;
		if(reqState.length > 0)
		{
			var curState = clickedItem.attr("apwstate");
			if(curState == reqState)
			{
				runFlag = 1;
			}
			else
			{
				runFlag = 0;	
			}
		}
		else
		{
			runFlag = 1;	
		}
			
		if(runFlag == 1)
		{
		
			var modCall = modFunc + "(this)";
			var ret2 = eval(modCall);
			
			var dataString = "";
			var datCounter = 0;
			
			//alert(loadDataFlds);
			if(loadDataFlds.length > 1)
			{
				var obj = jQuery.parseJSON(loadDataFlds);
				for (var prop in obj)
				{
					var varName = obj[prop];
					var tmpDataValue = "";
					var strValue = "";
					if(varName.substring(0,5) == "_apw_")
					{
						tmpDataValue = apwDataManagerGetGlobalVariable(varName);
					}
					else
					{
						tmpDataValue = $(clickSel).data(obj[prop]);
					}
					strValue = String(tmpDataValue);
					if(datCounter > 0)
					{
						dataString += "&";
					}
					dataString += prop + "=" + strValue.replace(/&/g, "%26");
					datCounter++;
				}	
			}
			
			var endString = "";
			if(optTok == "Y")
			{
				accTok = apwGetAccessToken();
				if(dataString.length > 0)
				{
					endString = dataString + "&t=" + accTok;
				}
				else
				{
					endString = "t=" + accTok;
				}
			}
			else
			{
				endString = dataString;
			}
			
			if(loadDataAdd.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + loadDataAdd;	
				}
				else
				{
					endString = loadDataAdd;	
				}
			}
			
			var dataFuncResult = "";
			if(loadDataFunc.length > 0)
			{
				var loadDataFuncCall = loadDataFunc + "()";
				dataFuncResult = eval(loadDataFuncCall);
				
				if(dataFuncResult.length > 0)
				{
					if(endString.length > 0)
					{
						endString += "&" + dataFuncResult;	
					}
					else
					{
						endString = dataFuncResult;	
					}	
				}
			}
			
			//Open the new window for Oauth processing...
			var winNameRand = Math.floor(Math.random() * 100000);
			var callURL = urly + "?" + endString;
			//alert(callURL);
			var callName = "OAuth Window " + winNameRand;
			//alert(callName);
			var callParams = "width=" + winW + ",height=" + winH + ",menubar=no,status=no,location=no,toolbar=no,scrollbars=no";
			//alert(callParams);
			window.open(callURL,callName,callParams);
			
			//Fire up the background monitor timed process to check for completion in our current window...if we are not already running...
			if(timeRun == "N")
			{
				$(datTrackerSelectorName).data("timerRunning", "Y");
				setTimeout("apwClickOauthCompletionMonitor('" + datTrackerSelectorName + "')", 2000);
			}
		}
	   };
	   
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(sets.clickablesSelector, curAPWID, contextRepresentative);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickOauthCompletionMonitor(datTrackerSel)
{
	if($(datTrackerSel).length > 0)
	{
		//We are still "alive" on the screen... so check to see if we've finished Oauth
		var theClickSel = $(datTrackerSel).data("clickablesSelector");
		var urly = $(datTrackerSel).data("oauthCheckURL");
		var contextRep = $(datTrackerSel).data("contextRepresentative");
		
		var accTok = apwGetAccessToken();
		var endString = "t=" + accTok;
		
		var contextRepObj = $('#' + contextRep)[0];
		var whatClicked = $(theClickSel)[0];
		$('#' + contextRep).data('apwClickedItem', whatClicked);
		jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
		var datTrackName = $(this).data("mainDataSelector");
		var targEl2 = $(this).data("apwClickedItem");
		var finModFunc = $(datTrackName).data("oauthFinishedModifierFunction");
		var finProcFunc = $(datTrackName).data("oauthFinishedProcessingFunction");
		var unfinModFunc = $(datTrackName).data("oauthUnfinishedModifierFunction");
		if(dat == "1")
		{
			//We have finished processing the Oauth.
			//Call the 2 appropriate functions and then quit calling ourselves (by NOT calling again).
			var finCall = finModFunc + "(targEl2)";
			var ret6 = eval(finCall);
			
			var procCall = finProcFunc + "()";
			var ret13 = eval(procCall);
			$(datTrackName).data("timerRunning", "N");
		}
		else
		{
			if(dat == "0")
			{
				//We have confirmed that Oauth is NOT finished.
				//Call the function for unfinished business...
				var unfinCall = unfinModFunc + "(targEl2)";
				var ret3 = eval(unfinCall);
				
				//Call ourselves again so we can continue checking...
				setTimeout("apwClickOauthCompletionMonitor('" + datTrackName + "')", 1000);
			}
			else
			{
				//We have a response that we don't recognize. Treat it as an AJAX failure.
				//That means we do nothing, except kill the timer flag so we can run again.
				$(datTrackName).data("timerRunning", "N");
			}
		}
		}, error: function(obj, code){
			/*
			On failure we just want to cancel our timed process.
			This is because we can't reach the URL that checks for Oauth process completion.
			Do nothing except kill the timer flag so we can run again.
			*/
			var datTrackName = $(this).data("mainDataSelector");
			$(datTrackName).data("timerRunning", "N");
			}});
	}
}

function apwClickOauthClickedItemModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickOauthFinishedModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickOauthUnfinishedModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickOauthFinishedProcessingBlank()
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickOauthHoverInBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickOauthHoverOutBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwClickPopUp = function(options) {
  	
	var settings = $.extend( {
      'openClickablesModifierFunction' : 'apwClickPopUpOpenClickedItemModifierBlank',
	  'closeClickablesModifierFunction' : 'apwClickPopUpCloseClickedItemModifierBlank',
	  'clickablesSelector' : '',
	  'width' : 40,
	  'height' : 0,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#000000',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#FFFFFF',
	  'fillFromID' : '',
	  'hoverPosition' : 'below',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickPopUpHoverInBlank',
	  'hoverOutFunction' : 'apwClickPopUpHoverOutBlank',
	  'clickOff' : 'N',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickPopUpData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickPopUpData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwPopUp" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwPopUp" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('openClickablesModifierFunction', sets.openClickablesModifierFunction);
	  elt.data('closeClickablesModifierFunction', sets.closeClickablesModifierFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('offsetTop', sets.offsetTop);
	  elt.data('offsetLeft', sets.offsetLeft);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('isOpen', 'N');
	  elt.data('fillFromID', sets.fillFromID);
	  elt.data('hoverPosition', sets.hoverPosition);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('clickOff', sets.clickOff);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('popUpName', finalDDName);
	  elt.data('presence', 'Y');
	  //alert(datTrackerSelectorName);
	  
	  //Add apwID to the hoverable element.
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 2009\nLibrary: apwClickPopUp\nType: Input parameters invalid\nCause:Pop Up window width is set to 0 or less.");
	  }
	  
	  if(sets.clickablesSelector.length < 1)
	  {
		  alert("AppWorks Exception 2011\nLibrary: apwClickPopUp\nType: Input parameters invalid\nCause:Selector string for click-able items is blank. See parameter 'clickablesSelector' in documentation.");
	  }
	  
	  if(sets.fillFromID.length < 1)
	  {
		  alert("AppWorks Exception 2012\nLibrary: apwClickPopUp\nType: Input parameters invalid\nCause:Element ID for filling Pop Up area is blank. See parameter 'fillFromID' in documentation.");
	  }
	  
	  if($(sets.clickablesSelector).length > 0)
	  {
		  var posit = $(sets.clickablesSelector).offset();
		  
		  //Create the new DIV element and attach it to the clickable item.
		  var newElString = '<div id="' + finalDDName + '" style="display:none;position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';
		  if(sets.height == 0)
		  {
			  //Do nothing - do not add a fixed height or add overflow:auto
			  //This should let the drop down area automatically adjust height to match the content.
		  }
		  else
		  {
			  newElString += 'height:' + sets.height + 'px;';
			  newElString += "overflow:auto;";
		  }
		  if(sets.hoverPosition == "below")
		  {
				newElString += 'top:' + (posit.top + $(sets.clickablesSelector).height() + sets.offsetTop) + 'px;';
				newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  }
		  else
		  {
			  if(sets.hoverPosition == "above")
			  {
					newElString += 'top:' + (posit.top -(sets.height - sets.offsetTop)) + 'px;';
					newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
			  }
			  else
			  {
				  if(sets.hoverPosition == "left")
				  {
						newElString += 'left:' + (posit.left -(sets.width - sets.offsetLeft)) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
				  else
				  {
						newElString += 'left:' + (posit.left + $(sets.clickablesSelector).width() + sets.offsetLeft) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
			  }
		  }
		  if(sets.border == "Y")
		  {
			  newElString += 'border-width:thin;border-style:solid;border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
	
		  $('body').prepend(newElString);
		  
		  //Grab the specified content from elsewhere in the document and put it in the drop down space.
		  //This is a TOTAL HACK because for some reason the new DIV is not available until after we exit this setup function.
		  //We have to call it from another function, delayed by 500ms.
		  //Everyone - therefore - will have to hide their content (make it display:none) so it doesn't show for a moment then disappear.
		  var laterCall = setTimeout("apwClickPopUpLoadExistingContent('" + finalDDName + "','" + sets.fillFromID + "')",500);
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1)
	  	{
			var DTSN = ev1.data.dName;
			var clickSel = $(DTSN).data("clickablesSelector");
		  var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				apwClickPopUpToggle(DTSN);
			}
		};
		
	  if(sets.clickOff == "Y")
	  {
			var observerFunc = function(ev2)
			{
				var DTSN = ev2.data.dName;
				var clickedItem = $(ev2.target);
				apwClickPopUpHandleOutsideClick(DTSN, clickedItem);
			};
			
			$(document).bind('click', {dName:datTrackerSelectorName}, observerFunc);
			apwRegistryAddBinding(sets.clickablesSelector, curAPWID, 'document', 'Y', 'click', observerFunc);
	  }
	  
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContentElement(sets.clickablesSelector, curAPWID, finalDDName);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickPopUpLoadExistingContent(ddName,pullFromID)
{
	//Don't try to do anything if this parameter is empty.
	if(pullFromID.length > 0)
	{
		$('#' + ddName).append($('#' + pullFromID));
		$('#' + pullFromID).show();
	}
}

function apwClickPopUpToggle(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("popUpName");
	if(currentState == "N")
	{
		$(datTrackerSelectorName).data("isOpen", "Y");
		var openModFunc = $(datTrackerSelectorName).data("openClickablesModifierFunction");
		var openCall = openModFunc + "()";
		var clickableThing = $(datTrackerSelectorName).data("clickablesSelector");
		var hovPos = $(datTrackerSelectorName).data("hoverPosition");
		var offTop = $(datTrackerSelectorName).data("offsetTop");
		var offLeft = $(datTrackerSelectorName).data("offsetLeft");
		var setH = $(datTrackerSelectorName).data("height");
		var setW = $(datTrackerSelectorName).data("width");
		var posit = $(clickableThing).offset();
		var curTop = posit.top;
		var curLeft = posit.left;
		var newTop = 0;
		var newLeft = 0;
		if(hovPos == "below")
		  {
				newTop = (curTop + $(clickableThing).height() + offTop);
				newLeft = (curLeft + offLeft);
		  }
		  else
		  {
			  if(hovPos == "above")
			  {
					newTop = (curTop -(setH - offTop));
					newLeft = (curLeft + offLeft);
			  }
			  else
			  {
				  if(hovPos == "left")
				  {
						newLeft = (curLeft -(setW - offLeft));
						newTop = (curTop + offTop);
				  }
				  else
				  {
						newLeft = (curLeft + $(clickableThing).width() + offLeft);
						newTop = (curTop + offTop);
				  }
			  }
		  }
		
		$("#" + ddHandle).css("top", newTop + "px");
		$("#" + ddHandle).css("left", newLeft + "px");
		$('#' + ddHandle).show();
		var ret2 = eval(openCall);
	}
	else
	{
		$(datTrackerSelectorName).data("isOpen", "N");
		var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
		var closeCall = closeModFunc + "()";
		$('#' + ddHandle).hide();
		var ret3 = eval(closeCall);
	}	
}

function apwClickPopUpHandleOutsideClick(datTrackerSelectorName, eventTarget)
{
	var clickableThing = $(datTrackerSelectorName).data("clickablesSelector");
	var theDDName = "#" + $(datTrackerSelectorName).data("popUpName");
	if((eventTarget.parents(clickableThing).length > 0) || (eventTarget.is(clickableThing)) || (eventTarget.is(theDDName)) || (eventTarget.parents(theDDName).length > 0))
	{
		//Do nothing because we have clicked inside the active drop-down area or the clickable that triggers it.
	}
	else
	{
		//We have clicked outside of the active area. Close the drop down if it is currently open.
		var currentState = $(datTrackerSelectorName).data("isOpen");
		if(currentState == "Y")
		{
			$(datTrackerSelectorName).data("isOpen", "N");
			var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
			var closeCall = closeModFunc + "()";
			var ret3 = eval(closeCall);
			$(theDDName).hide();	
		}
	}
}

function apwClickPopUpOpenClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPopUpCloseClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPopUpHoverInBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickPopUpHoverOutBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwClickPopUpDynamic = function(options) {
  	
	var settings = $.extend( {
      'openClickablesModifierFunction' : 'apwClickPopUpDynamicOpenClickedItemModifierBlank',
	  'closeClickablesModifierFunction' : 'apwClickPopUpDynamicCloseClickedItemModifierBlank',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'loadingDisplayFunction' : 'apwClickPopUpDynamicLoadingDisplayBlank',
	  'loadingFinishDisplayFunction' : 'apwClickPopUpDynamicLoadingDisplayFinishBlank',
	  'loadFailedFunction' : 'apwClickPopUpDynamicLoadFailedBlank',
	  'clickablesSelector' : '',
	  'width' : 40,
	  'height' : 0,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#000000',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#FFFFFF',
	  'fillFromURL' : '',
	  'loadDataFields' : '',
	  'passToken' : 'N',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickPopUpDynamicHoverInBlank',
	  'hoverOutFunction' : 'apwClickPopUpDynamicHoverOutBlank',
	  'hoverPosition' : 'below',
	  'clickOff' : 'N',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickPopUpDynamicData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickPopUpDynamicData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwClickPopUpDynamicRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwClickPopUpDynamicRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwPopUp" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwPopUp" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('openClickablesModifierFunction', sets.openClickablesModifierFunction);
	  elt.data('closeClickablesModifierFunction', sets.closeClickablesModifierFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('offsetTop', sets.offsetTop);
	  elt.data('offsetLeft', sets.offsetLeft);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('isOpen', 'N');
	  elt.data('fillFromURL', sets.fillFromURL);
	  elt.data('passToken', sets.passToken);
	  elt.data('loadDataFields', sets.loadDataFields);
	  elt.data('hoverPosition', sets.hoverPosition);
	  elt.data('loadDataPreparationFunction', sets.loadDataPreparationFunction);
	  elt.data('loadDataAdditionalString', sets.loadDataAdditionalString);
	  elt.data('loadingDisplayFunction', sets.loadingDisplayFunction);
	  elt.data('loadingFinishDisplayFunction', sets.loadingFinishDisplayFunction);
	  elt.data('loadFailedFunction', sets.loadFailedFunction);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('clickOff', sets.clickOff);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('popUpName', finalDDName);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  //Add apwID to the hoverable element.
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 1009\nLibrary: apwClickPopUpDynamic\nType: Input parameters invalid\nCause:Pop Up window width is set to 0 or less.");
	  }
	  
	  if(sets.clickablesSelector.length < 1)
	  {
		  alert("AppWorks Exception 1011\nLibrary: apwClickPopUpDynamic\nType: Input parameters invalid\nCause:Selector string for click-able items is blank. See parameter 'clickablesSelector' in documentation.");
	  }
	  
	  if(sets.fillFromURL.length < 1)
	  {
		  alert("AppWorks Exception 1012\nLibrary: apwClickPopUpDynamic\nType: Input parameters invalid\nCause:URL setting to fill Pop Up is blank. See parameter 'fillFromURL' in documentation.");
	  }
	  
	  if($(sets.clickablesSelector).length > 0)
	  {
		  var posit = $(sets.clickablesSelector).offset();
		  
		  //Create the new DIV element and attach it to the clickable item.
		  var newElString = '<div id="' + finalDDName + '" style="display:none;position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';
		  if(sets.height == 0)
		  {
			  //Do nothing - do not add a fixed height or add overflow:auto
			  //This should let the drop down area automatically adjust height to match the content.
		  }
		  else
		  {
			  newElString += 'height:' + sets.height + 'px;';
			  newElString += "overflow:auto;";
		  }
		  if(sets.hoverPosition == "below")
		  {
				newElString += 'top:' + (posit.top + $(sets.clickablesSelector).height() + sets.offsetTop) + 'px;';
				newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  }
		  else
		  {
			  if(sets.hoverPosition == "above")
			  {
					newElString += 'top:' + (posit.top -(sets.height - sets.offsetTop)) + 'px;';
					newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
			  }
			  else
			  {
				  if(sets.hoverPosition == "left")
				  {
						newElString += 'left:' + (posit.left -(sets.width - sets.offsetLeft)) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
				  else
				  {
						newElString += 'left:' + (posit.left + $(sets.clickablesSelector).width() + sets.offsetLeft) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
			  }
		  }
		  if(sets.border == "Y")
		  {
			  newElString += 'border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
	
		  $('body').prepend(newElString);
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1)
	  	{
			var DTSN = ev1.data.dName;
			var clickSel = $(DTSN).data("clickablesSelector");
		  var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				apwClickPopUpDynamicToggle(DTSN);
			}
		};
	  
	  if(sets.clickOff == "Y")
	  {
			var observerFunc = function(ev2)
			{
				var DTSN = ev2.data.dName;
				var clickedItem = $(ev2.target);
				apwClickPopUpDynamicHandleOutsideClick(DTSN, clickedItem);
			};
			
			$(document).bind('click', {dName:datTrackerSelectorName}, observerFunc);
			apwRegistryAddBinding(sets.clickablesSelector, curAPWID, 'document', 'Y', 'click', observerFunc);
	  }
	  
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(sets.clickablesSelector, curAPWID, contextRepresentative);
	  apwRegistryAddContentElement(sets.clickablesSelector, curAPWID, finalDDName);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickPopUpDynamicToggle(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("popUpName");
	if(currentState == "N")
	{
		$(datTrackerSelectorName).data("isOpen", "Y");
		var openModFunc = $(datTrackerSelectorName).data("openClickablesModifierFunction");
		var loadFunc = $(datTrackerSelectorName).data("loadingDisplayFunction");
		var loadDataFlds = $(datTrackerSelectorName).data("loadDataFields");
		var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
		var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
		var optTok = $(datTrackerSelectorName).data("passToken");
		var theClickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var urly = $(datTrackerSelectorName).data("fillFromURL");
		var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
		var openCall = openModFunc + "()";
		var loadCall = loadFunc + "('" + ddHandle + "')";
		var hovPos = $(datTrackerSelectorName).data("hoverPosition");
		var offTop = $(datTrackerSelectorName).data("offsetTop");
		var offLeft = $(datTrackerSelectorName).data("offsetLeft");
		var setH = $(datTrackerSelectorName).data("height");
		var setW = $(datTrackerSelectorName).data("width");
		var posit = $(theClickSel).offset();
		var curTop = posit.top;
		var curLeft = posit.left;
		var newTop = 0;
		var newLeft = 0;
		if(hovPos == "below")
		  {
				newTop = (curTop + $(theClickSel).height() + offTop);
				newLeft = (curLeft + offLeft);
		  }
		  else
		  {
			  if(hovPos == "above")
			  {
					newTop = (curTop -(setH - offTop));
					newLeft = (curLeft + offLeft);
			  }
			  else
			  {
				  if(hovPos == "left")
				  {
						newLeft = (curLeft -(setW - offLeft));
						newTop = (curTop + offTop);
				  }
				  else
				  {
						newLeft = (curLeft + $(theClickSel).width() + offLeft);
						newTop = (curTop + offTop);
				  }
			  }
		  }
		
		$("#" + ddHandle).css("top", newTop + "px");
		$("#" + ddHandle).css("left", newLeft + "px");
		$('#' + ddHandle).show();
		var ret2 = eval(openCall);
		var ret14 = eval(loadCall);
		
		var dataString = "";
		var datCounter = 0;
		
		//alert(loadDataFlds);
		if(loadDataFlds.length > 1)
		{
			var obj = jQuery.parseJSON(loadDataFlds);
			for (var prop in obj)
			{
				var varName = obj[prop];
				var tmpDataValue = "";
				var strValue = "";
				if(varName.substring(0,5) == "_apw_")
				{
					tmpDataValue = apwDataManagerGetGlobalVariable(varName);
				}
				else
				{
					tmpDataValue = $(theClickSel).data(obj[prop]);
				}
				strValue = String(tmpDataValue);
				if(datCounter > 0)
				{
					dataString += "&";
				}
				dataString += prop + "=" + strValue.replace(/&/g, "%26");
				datCounter++;
			}	
		}
		
		var endString = "";
		if(optTok == "Y")
		{
			accTok = apwGetAccessToken();
			if(dataString.length > 0)
			{
				endString = dataString + "&t=" + accTok;
			}
			else
			{
				endString = "t=" + accTok;
			}
		}
		else
		{
			endString = dataString;
		}
		
		if(loadDataAdd.length > 0)
		{
			if(endString.length > 0)
			{
				endString += "&" + loadDataAdd;	
			}
			else
			{
				endString = loadDataAdd;	
			}
		}
		
		var dataFuncResult = "";
		if(loadDataFunc.length > 0)
		{
			var loadDataFuncCall = loadDataFunc + "()";
			dataFuncResult = eval(loadDataFuncCall);
			
			if(dataFuncResult.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + dataFuncResult;	
				}
				else
				{
					endString = dataFuncResult;	
				}	
			}
		}
		
		var contextRepObj = $('#' + contextRep)[0];
		$('#' + contextRep).data('apwClickedItem', this);
		jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
		var datTrackName = $(this).data("mainDataSelector");
		var targEl2 = $(datTrackName).data("popUpName");
		var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
		var clickSel2 = $(datTrackName).data("clickablesSelector");
		
		var loadFinDispCall = loadFinishFunc + "('" + targEl2 + "')";
		var ret3 = eval(loadFinDispCall);
		
		$('#' + targEl2).empty();
		$('#' + targEl2).append(dat);}, error: function(obj, code){
			var datTrackName = $(this).data("mainDataSelector");
			var failFunc = $(datTrackName).data("loadFailedFunction");
			var ddHandle = $(datTrackName).data("popUpName");
			
			var failCall = failFunc + "('" + ddHandle + "')";
			var ret16 = eval(failCall);
			}});
	}
	else
	{
		$(datTrackerSelectorName).data("isOpen", "N");
		var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
		var closeCall = closeModFunc + "()";
		$('#' + ddHandle).hide();
		var ret3 = eval(closeCall);
	}	
}

function apwClickPopUpDynamicHandleOutsideClick(datTrackerSelectorName, eventTarget)
{
	var clickableThing = $(datTrackerSelectorName).data("clickablesSelector");
	var theDDName = "#" + $(datTrackerSelectorName).data("popUpName");
	if((eventTarget.parents(clickableThing).length > 0) || (eventTarget.is(clickableThing)) || (eventTarget.is(theDDName)) || (eventTarget.parents(theDDName).length > 0))
	{
		//Do nothing because we have clicked inside the active drop-down area or the clickable that triggers it.
	}
	else
	{
		//We have clicked outside of the active area. Close the drop down if it is currently open.
		var currentState = $(datTrackerSelectorName).data("isOpen");
		if(currentState == "Y")
		{
			$(datTrackerSelectorName).data("isOpen", "N");
			var closeModFunc = $(datTrackerSelectorName).data("closeClickablesModifierFunction");
			var closeCall = closeModFunc + "()";
			var ret3 = eval(closeCall);
			$(theDDName).hide();	
		}
	}
}

function apwClickPopUpDynamicOpenClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPopUpDynamicCloseClickedItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPopUpDynamicLoadingDisplayBlank(dropDownName)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPopUpDynamicLoadingDisplayFinishBlank(dropDownName)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPopUpDynamicLoadFailedBlank(dropDownName)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickPopUpDynamicHoverInBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickPopUpDynamicHoverOutBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwClickPopUpload = function(options) {
  	
	var settings = $.extend( {
      'clickablesModifierFunction' : 'apwClickPopUploadClickedItemModifierBlank',
	  'uploadFinishedModifierFunction' : 'apwClickPopUploadFinishedModifierBlank',
	  'uploadUnfinishedModifierFunction' : 'apwClickPopUploadUnfinishedModifierBlank',
	  'uploadFinishedProcessingFunction' : 'apwClickPopUploadFinishedProcessingBlank',
	  'uploadURL' : '',
	  'windowHeight' : 400,
	  'windowWidth' : 400,
	  'clickablesSelector' : '',
	  'passToken' : 'N',
	  'loadDataFields' : '',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickPopUploadHoverInBlank',
	  'hoverOutFunction' : 'apwClickPopUploadHoverOutBlank',
	  'uploadCheckURL' : '',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickPopUploadData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickPopUploadData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwClickPopUploadRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwClickPopUploadRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('clickablesModifierFunction', sets.clickablesModifierFunction);
	  elt.data('uploadFinishedModifierFunction', sets.uploadFinishedModifierFunction);
	  elt.data('uploadUnfinishedModifierFunction', sets.uploadUnfinishedModifierFunction);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('loadDataFields', sets.loadDataFields);
	  elt.data('loadDataPreparationFunction', sets.loadDataPreparationFunction);
	  elt.data('loadDataAdditionalString', sets.loadDataAdditionalString);
	  elt.data('passToken', sets.passToken);
	  elt.data('uploadURL', sets.uploadURL);
	  elt.data('windowHeight', sets.windowHeight);
	  elt.data('windowWidth', sets.windowWidth);
	  elt.data('uploadFinishedProcessingFunction', sets.uploadFinishedProcessingFunction);
	  elt.data('uploadCheckURL', sets.uploadCheckURL);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  elt.data('timerRunning','N');
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  //Add apwID to the clickable element.
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this)";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1){
		var datTrackerSelectorName = ev1.data.dName;
		var modFunc = $(datTrackerSelectorName).data("clickablesModifierFunction");
		var loadDataFlds = $(datTrackerSelectorName).data("loadDataFields");
		var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
		var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
		var clickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var optTok = $(datTrackerSelectorName).data("passToken");
		var urly = $(datTrackerSelectorName).data("uploadURL");
		var winH = $(datTrackerSelectorName).data("windowHeight");
		var winW = $(datTrackerSelectorName).data("windowWidth");
		var timeRun = $(datTrackerSelectorName).data("timerRunning");
		var reqState = $(datTrackerSelectorName).data("requiredState");
		var clickedItem = $(clickSel);
		var runFlag = 1;
		if(reqState.length > 0)
		{
			var curState = clickedItem.attr("apwstate");
			if(curState == reqState)
			{
				runFlag = 1;
			}
			else
			{
				runFlag = 0;	
			}
		}
		else
		{
			runFlag = 1;	
		}
			
		if(runFlag == 1)
		{
		
			var modCall = modFunc + "(this)";
			var ret2 = eval(modCall);
			
			var dataString = "";
			var datCounter = 0;
			
			//alert(loadDataFlds);
			if(loadDataFlds.length > 1)
			{
				var obj = jQuery.parseJSON(loadDataFlds);
				for (var prop in obj)
				{
					var varName = obj[prop];
					var tmpDataValue = "";
					var strValue = "";
					if(varName.substring(0,5) == "_apw_")
					{
						tmpDataValue = apwDataManagerGetGlobalVariable(varName);
					}
					else
					{
						tmpDataValue = $(clickSel).data(obj[prop]);
					}
					strValue = String(tmpDataValue);
					if(datCounter > 0)
					{
						dataString += "&";
					}
					dataString += prop + "=" + strValue.replace(/&/g, "%26");
					datCounter++;
				}	
			}
			
			var endString = "";
			if(optTok == "Y")
			{
				accTok = apwGetAccessToken();
				if(dataString.length > 0)
				{
					endString = dataString + "&t=" + accTok;
				}
				else
				{
					endString = "t=" + accTok;
				}
			}
			else
			{
				endString = dataString;
			}
			
			if(loadDataAdd.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + loadDataAdd;	
				}
				else
				{
					endString = loadDataAdd;	
				}
			}
			
			var dataFuncResult = "";
			if(loadDataFunc.length > 0)
			{
				var loadDataFuncCall = loadDataFunc + "()";
				dataFuncResult = eval(loadDataFuncCall);
				
				if(dataFuncResult.length > 0)
				{
					if(endString.length > 0)
					{
						endString += "&" + dataFuncResult;	
					}
					else
					{
						endString = dataFuncResult;	
					}	
				}
			}
			
			//Open the new window for Oauth processing...
			var winNameRand = Math.floor(Math.random() * 100000);
			var callURL = urly + "?" + endString;
			//alert(callURL);
			var callName = "Upload Window " + winNameRand;
			//alert(callName);
			var callParams = "width=" + winW + ",height=" + winH + ",menubar=no,status=no,location=no,toolbar=no,scrollbars=no";
			//alert(callParams);
			window.open(callURL,callName,callParams);
			
			//Fire up the background monitor timed process to check for completion in our current window...if we are not already running...
			if(timeRun == "N")
			{
				$(datTrackerSelectorName).data("timerRunning", "Y");
				setTimeout("apwClickPopUploadCompletionMonitor('" + datTrackerSelectorName + "')", 2000);
			}
		}
	   };
	   
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(sets.clickablesSelector, curAPWID, contextRepresentative);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickPopUploadCompletionMonitor(datTrackerSel)
{
	if($(datTrackerSel).length > 0)
	{
		//We are still "alive" on the screen... so check to see if we've finished the upload
		var theClickSel = $(datTrackerSel).data("clickablesSelector");
		var urly = $(datTrackerSel).data("uploadCheckURL");
		var contextRep = $(datTrackerSel).data("contextRepresentative");
		
		var accTok = apwGetAccessToken();
		var endString = "t=" + accTok;
		
		var contextRepObj = $('#' + contextRep)[0];
		var whatClicked = $(theClickSel)[0];
		$('#' + contextRep).data('apwClickedItem', whatClicked);
		jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
		var datTrackName = $(this).data("mainDataSelector");
		var targEl2 = $(this).data("apwClickedItem");
		var finModFunc = $(datTrackName).data("uploadFinishedModifierFunction");
		var finProcFunc = $(datTrackName).data("uploadFinishedProcessingFunction");
		var unfinModFunc = $(datTrackName).data("uploadUnfinishedModifierFunction");
		
		if(dat == "1")
		{
			//We have finished processing the upload.
			//Call the 2 appropriate functions and then quit calling ourselves (by NOT calling again).
			var finCall = finModFunc + "(targEl2)";
			var ret6 = eval(finCall);
			
			var procCall = finProcFunc + "()";
			var ret13 = eval(procCall);
			$(datTrackName).data("timerRunning", "N");
		}
		else
		{
			if(dat == "0")
			{
				//We have confirmed that upload is NOT finished.
				//Call the function for unfinished business...
				var unfinCall = unfinModFunc + "(targEl2)";
				var ret3 = eval(unfinCall);
				
				//Call ourselves again so we can continue checking...
				setTimeout("apwClickPopUploadCompletionMonitor('" + datTrackName + "')", 1000);
			}
			else
			{
				//We have a response that we don't recognize. Treat it as an AJAX failure.
				//That means we do nothing, except kill the timer flag so we can run again.
				$(datTrackName).data("timerRunning", "N");
			}
		}
		}, error: function(obj, code){
			/*
			On failure we just want to cancel our timed process.
			This is because we can't reach the URL that checks for Oauth process completion.
			Do nothing except kill the timer flag so we can run again.
			*/
			var datTrackName = $(this).data("mainDataSelector");
			$(datTrackName).data("timerRunning", "N");
			}});
	}
}

function apwClickPopUploadClickedItemModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPopUploadFinishedModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickPopUploadUnfinishedModifierBlank(curElement)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickPopUploadFinishedProcessingBlank()
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickPopUploadHoverInBlank(curElement)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPopUploadHoverOutBlank(curElement)
{
	//Do nothing. I'm just a placeholder.
}

(function( $ ) {
  $.fn.apwClickPostUp = function(options) {
  	
	var settings = $.extend( {
      'postingDisplayFunction' : 'apwClickPostUpDisplayPostingBlank',
	  'postingFinishDisplayFunction' : 'apwClickPostUpDisplayPostedBlank',
	  'postingClickablesModifierFunction' : 'apwClickPostUpPostingStateBlank',       //change visuals before posting to the server
	  'postingFinishClickablesModifierFunction' : 'apwClickPostUpPostedStateBlank',  //information got to the server
	  'postingResponseHandlerFunction' : 'apwClickPostUpResponseHandlerBlank',
	  'postingFailedFunction' : 'apwClickPostUpPostFailedBlank',                     //information did not get to the server
	  'postDataPreparationFunction' : '',
	  'postDataAdditionalString' : '',
	  'passToken' : 'N',
	  'postURL' : '',
	  'clickablesSelector' : '',
	  'manageHover' : 'N',
	  'hoverInFunction' : 'apwClickPostUpHoverInBlank',
	  'hoverOutFunction' : 'apwClickPostUpHoverOutBlank',
	  'itemsToPost' : '',
	  'requiredState' : '',
	  'passClickedObjectToResponseHandler' : 'N',
	  'postItemsAsData' : 'N'
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwClickPostUpData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwClickPostUpData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwClickPostUpRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwClickPostUpRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('postingDisplayFunction', sets.postingDisplayFunction);
	  elt.data('postingFinishDisplayFunction', sets.postingFinishDisplayFunction);
	  elt.data("postingClickablesModifierFunction", sets.postingClickablesModifierFunction);
	  elt.data('postingFinishClickablesModifierFunction', sets.postingFinishClickablesModifierFunction);
	  elt.data('postingResponseHandlerFunction', sets.postingResponseHandlerFunction);
	  elt.data('postingFailedFunction', sets.postingFailedFunction);
	  elt.data('passToken', sets.passToken);
	  elt.data('postURL', sets.postURL);
	  elt.data('clickablesSelector', sets.clickablesSelector);
	  elt.data('itemsToPost', sets.itemsToPost);
	  elt.data('postDataPreparationFunction', sets.postDataPreparationFunction);
	  elt.data('postDataAdditionalString', sets.postDataAdditionalString);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('manageHover', sets.manageHover);
	  elt.data('hoverInFunction', sets.hoverInFunction);
	  elt.data('hoverOutFunction', sets.hoverOutFunction);
	  elt.data('passClickedObjectToResponseHandler', sets.passClickedObjectToResponseHandler);
	  elt.data('postItemsAsData', sets.postItemsAsData);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  var curAPWID = parseInt($(sets.clickablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.clickablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  var enterFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var clickSel = $(datTrackerSelectorName).data("clickablesSelector");
		  var hovInFunc = $(datTrackerSelectorName).data("hoverInFunction");
		  var hovCall = hovInFunc + "(this, '" + clickSel + "')";
		  var ret1 = eval(hovCall);
	  };
	  
	  var leaveFunc = function(ev2)
	  {
		  var datTrackerSelectorName = ev2.data.dName;
		  var clickSel = $(datTrackerSelectorName).data("clickablesSelector");
		  var hovOutFunc = $(datTrackerSelectorName).data("hoverOutFunction");
		  var hovCall = hovOutFunc + "(this, '" + clickSel + "')";
		  var ret1 = eval(hovCall);
	  };
	  
	  var clickFunc = function(ev1)
	  {

		var datTrackerSelectorName = ev1.data.dName;
		var curLockStatus = $(datTrackerSelectorName).data("PostingLocked");
		var curState = $(this).attr("apwstate");
		var reqState = $(datTrackerSelectorName).data("requiredState");
		var runFlag = 1;
		if(reqState.length > 0)
		{
			var curState = $(this).attr("apwstate");
			if(curState == reqState)
			{
				runFlag = 1;
			}
			else
			{
				runFlag = 0;	
			}
		}
		else
		{
			runFlag = 1;	
		}
		if((curLockStatus == "Y") || (runFlag == 0))
		{
			//We are locked or the clickable item is not in the correct state. Can't proceed.
		}
		else
		{
		var postDispFunc = $(datTrackerSelectorName).data("postingDisplayFunction");
		var optTok = $(datTrackerSelectorName).data("passToken");
		var urly = $(datTrackerSelectorName).data("postURL");
		var postStateFunc = $(datTrackerSelectorName).data("postingClickablesModifierFunction");
		var loadDataFlds = $(datTrackerSelectorName).data("itemsToPost");
		var loadDataAdd = $(datTrackerSelectorName).data("postDataAdditionalString");
		var loadDataFunc = $(datTrackerSelectorName).data("postDataPreparationFunction");
		var clickSel = $(datTrackerSelectorName).data("clickablesSelector");
		var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
		var postItemType = $(datTrackerSelectorName).data("postItemsAsData");
		
		var postDispCall = postDispFunc + "()";
		var postDispCallResult = eval(postDispCall);
		var postStateCall = postStateFunc + "(this, '" + clickSel + "')";
		var postStateCallResult = eval(postStateCall);
		
		//Set a lock on this ClickPostUp instance, so we can't post up again until this one is done... even
		//if the UI developer forgets to disable the clickable items.
		$(datTrackerSelectorName).data("PostingLocked", "Y");	
		
		var dataString = "";
		var datCounter = 0;
		
		//alert(loadDataFlds);
		if(loadDataFlds.length > 1)
		{
			var obj = jQuery.parseJSON(loadDataFlds);
			for (var prop in obj)
			{
				var varName = obj[prop];
				var tmpDataValue = "";
				var strValue = "";
				if(varName.substring(0,5) == "_apw_")
				{
					tmpDataValue = apwDataManagerGetGlobalVariable(varName);
				}
				else
				{
					if(postItemType == "Y")
					{
						tmpDataValue = $(this).data(obj[prop]);
					}
					else
					{
						tmpDataValue = $("#" + obj[prop]).val();
					}
				}
				strValue = String(tmpDataValue);
				if(datCounter > 0)
				{
					dataString += "&";
				}
				dataString += prop + "=" + strValue.replace(/&/g, "%26");
				datCounter++;
			}	
		}
		
		var endString = "";
		if(optTok == "Y")
		{
			accTok = apwGetAccessToken();
			if(dataString.length > 0)
			{
				endString = dataString + "&t=" + accTok;
			}
			else
			{
				endString = "t=" + accTok;
			}
		}
		else
		{
			endString = dataString;
		}
		
		if(loadDataAdd.length > 0)
		{
			if(endString.length > 0)
			{
				endString += "&" + loadDataAdd;	
			}
			else
			{
				endString = loadDataAdd;	
			}
		}

		var dataFuncResult = "";
		if(loadDataFunc.length > 0)
		{
			var loadDataFuncCall = loadDataFunc + "(this)";
			dataFuncResult = eval(loadDataFuncCall);
			
			if(dataFuncResult.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + dataFuncResult;	
				}
				else
				{
					endString = dataFuncResult;	
				}	
			}
		}
		//alert (endString);
		//Set the data container name as data in the clicked element.
		//This is so we can get it back upon AJAX success function call, because we will be out of scope.
		//It's a bit of a hack... but it will work just fine.
		var contextRepObj = $('#' + contextRep)[0];
		$('#' + contextRep).data('apwClickedItem', this);
		
		jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
			var datTrackName = $(this).data("mainDataSelector");
			$(datTrackName).data("PostingLocked", "N");
			var postFinishFunc = $(datTrackName).data("postingFinishDisplayFunction");
			var clickSel2 = $(datTrackName).data("clickablesSelector");
			var postedStateFunc = $(datTrackName).data("postingFinishClickablesModifierFunction");
			var postResponseHandlerFunc = $(datTrackName).data("postingResponseHandlerFunction");
			var wantsClickObjPassed = $(datTrackName).data("passClickedObjectToResponseHandler");
			var clickedObj = $(this).data("apwClickedItem");
			
			var postFinDispCall = postFinishFunc + "()";
			var postFinDispCallResult = eval(postFinDispCall);
			
			var postedStateCall = postedStateFunc + "(clickedObj, '" + clickSel2 + "')";
			var postedStateCallResult = eval(postedStateCall);
			
			if(wantsClickObjPassed == "Y")
			{
				var postRespHandCall1 = postResponseHandlerFunc + "('" + dat + "', clickedObj)";
				var postRespHandCallResult1 = eval(postRespHandCall1);
			}
			else
			{
				var postRespHandCall = postResponseHandlerFunc + "('" + dat + "')";
				var postRespHandCallResult = eval(postRespHandCall);	
			}
			
			}, error: function(obj, code){
				var datTrackName = $(this).data("mainDataSelector");
				$(datTrackName).data("PostingLocked", "N");
				var failFunc = $(datTrackName).data("postingFailedFunction");
				var clickSel3 = $(datTrackName).data("clickablesSelector");
				var clickedObj = $(this).data("apwClickedItem");
				var failCall = failFunc + "(clickedObj, '" + clickSel3 + "')";
				var ret4 = eval(failCall);
				}});
		}/*End of ELSE clause for lock check */
	   };
	  
	  $(document).delegate(sets.clickablesSelector, 'click', {dName:datTrackerSelectorName}, clickFunc);
	  
	  apwRegistryAddDataStore(sets.clickablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(sets.clickablesSelector, curAPWID, contextRepresentative);
	  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'click', clickFunc);
	  
	  if(sets.manageHover == "Y")
	  {
		  $(document).delegate(sets.clickablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
		  $(document).delegate(sets.clickablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, leaveFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseenter', enterFunc);
		  apwRegistryAddHandler(sets.clickablesSelector, curAPWID, 'document', sets.clickablesSelector, 'mouseleave', leaveFunc);
	  }
  };
})( jQuery );

function apwClickPostUpPostingStateBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPostUpPostedStateBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPostUpDisplayPostingBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPostUpDisplayPostedBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPostUpPostFailedBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.
}

function apwClickPostUpResponseHandlerBlank(postResponse)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickPostUpHoverInBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.	
}

function apwClickPostUpHoverOutBlank(curElement, selectorString)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwEnterKeyHandler = function(options) {
  	
	var settings = $.extend( {
      'actionFunction' : 'apwEnterKeyHandlerActionBlank',
	  'scopeList' : '',
	  'trackingSelector' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwEnterKeyHandlerData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwEnterKeyHandlerData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('actionFunction', sets.actionFunction);
	  elt.data('scopeList', sets.scopeList);
	  elt.data('trackingSelector', sets.trackingSelector);
	  elt.data('presence', 'Y');
	  //alert(datTrackerSelectorName);
	  
	  var curAPWID = parseInt($(sets.trackingSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.trackingSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  var keyFunc = function(ev1)
	  	{
		//Check to see if the enter key was pushed.
		if(ev1.which == 13)
		{
			ev1.preventDefault();
			var DTSN = ev1.data.dName;
			var actFunc = $(DTSN).data("actionFunction");
			var sList = $(DTSN).data("scopeList");
			
			if(sList.length > 0)
			{
				//Some scope has been defined, so we need to split the comma delimited list
				//and only process if we are in scope.
				var curFocus = $(document.activeElement).attr("id");
				var splitResult = sList.split(",");
				for(i = 0; i < splitResult.length; i++)
				{
					if(curFocus == splitResult[i])
					{
						var actCall2 = actFunc + "()";
						var ret2 = eval(actCall2);
					}
				}
			}
			else
			{
				//The scope is "ALL" so we trigger no matter where the user's cursor is siting.
				var actCall = actFunc + "()";
				var ret1 = eval(actCall);
			}
		}
	   };
	  
	  $(document).bind('keypress', {dName:datTrackerSelectorName}, keyFunc);
	  
	  apwRegistryAddDataStore(sets.trackingSelector, curAPWID, datTrackerName);
	  apwRegistryAddBinding(sets.trackingSelector, curAPWID, 'document', 'Y', 'keypress', keyFunc);
  };
})( jQuery );

function apwEnterKeyHandlerActionBlank()
{
	//Do nothing. I'm just a placeholder.
}

(function( $ ) {
  $.fn.apwHoverPopUp = function(options) {
  	
	var settings = $.extend( {
      'openHoverablesModifierFunction' : 'apwHoverPopUpOpenHoveredItemModifierBlank',
	  'closeHoverablesModifierFunction' : 'apwHoverPopUpCloseHoveredItemModifierBlank',
	  'hoverablesSelector' : '',
	  'width' : 40,
	  'height' : 0,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#ccc',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#F5F5F5',
	  'fillFromID' : '',
	  'hoverPosition' : 'below',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwHoverPopUpData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwHoverPopUpData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwPopUp" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwPopUp" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('openHoverablesModifierFunction', sets.openHoverablesModifierFunction);
	  elt.data('closeHoverablesModifierFunction', sets.closeHoverablesModifierFunction);
	  elt.data('hoverablesSelector', sets.hoverablesSelector);
	  elt.data('offsetTop', sets.offsetTop);
	  elt.data('offsetLeft', sets.offsetLeft);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('isOpen', 'N');
	  elt.data('fillFromID', sets.fillFromID);
	  elt.data('hoverPosition', sets.hoverPosition);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('popUpName', finalDDName);
	  elt.data('presence', 'Y');
	  //alert(datTrackerSelectorName);
	  
	  //Add apwID to the hoverable element.
	  var curAPWID = parseInt($(sets.hoverablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.hoverablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 4009\nLibrary: apwHoverPopUp\nType: Input parameters invalid\nCause:Pop Up window width is set to 0 or less.");
	  }
	  
	  if(sets.hoverablesSelector.length < 1)
	  {
		  alert("AppWorks Exception 4011\nLibrary: apwHoverPopUp\nType: Input parameters invalid\nCause:Selector string for hover-able items is blank. See parameter 'hoverablesSelector' in documentation.");
	  }
	  
	  if(sets.fillFromID.length < 1)
	  {
		  alert("AppWorks Exception 4012\nLibrary: apwHoverPopUp\nType: Input parameters invalid\nCause:Element ID for filling Pop Up area is blank. See parameter 'fillFromID' in documentation.");
	  }
	  
	  if($(sets.hoverablesSelector).length > 0)
	  {
		  var posit = $(sets.hoverablesSelector).offset();
		  
		  //Create the new DIV element and attach it to the clickable item.
		  var newElString = '<div id="' + finalDDName + '" style="display:none;position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';
		  if(sets.height == 0)
		  {
			  //Do nothing - do not add a fixed height or add overflow:auto
			  //This should let the drop down area automatically adjust height to match the content.
		  }
		  else
		  {
			  newElString += 'height:' + sets.height + 'px;';
			  newElString += "overflow:auto;";
		  }
		  if(sets.hoverPosition == "below")
		  {
				newElString += 'top:' + (posit.top + $(sets.hoverablesSelector).height() + sets.offsetTop) + 'px;';
				newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  }
		  else
		  {
			  if(sets.hoverPosition == "above")
			  {
					newElString += 'top:' + (posit.top -(sets.height - sets.offsetTop)) + 'px;';
					newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
			  }
			  else
			  {
				  if(sets.hoverPosition == "left")
				  {
						newElString += 'left:' + (posit.left -(sets.width - sets.offsetLeft)) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
				  else
				  {
						newElString += 'left:' + (posit.left + $(sets.hoverablesSelector).width() + sets.offsetLeft) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
			  }
		  }
		  if(sets.border == "Y")
		  {
			  newElString += 'border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
	
		  $('body').prepend(newElString);
		  
		  //Grab the specified content from elsewhere in the document and put it in the drop down space.
		  //This is a TOTAL HACK because for some reason the new DIV is not available until after we exit this setup function.
		  //We have to call it from another function, delayed by 500ms.
		  //Everyone - therefore - will have to hide their content (make it display:none) so it doesn't show for a moment then disappear.
		  var laterCall = setTimeout("apwHoverPopUpLoadExistingContent('" + finalDDName + "','" + sets.fillFromID + "')",500);
	  }
	  
	  var enterFunc = function(ev1)
	  	{
			var DTSN = ev1.data.dName;
			var clickSel = $(DTSN).data("hoverablesSelector");
		  var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				apwHoverPopUpOpen(DTSN);
			}
		};
	  
	  var exitFunc = function(ev2)
	  	{
			var DTSN = ev2.data.dName;
			apwHoverPopUpClose(DTSN);
		};
	  
	  $(document).delegate(sets.hoverablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
	  $(document).delegate(sets.hoverablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, exitFunc);
	  
	  apwRegistryAddDataStore(sets.hoverablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContentElement(sets.hoverablesSelector, curAPWID, finalDDName);
	  apwRegistryAddHandler(sets.hoverablesSelector, curAPWID, 'document', sets.hoverablesSelector, 'mouseenter', enterFunc);
	  apwRegistryAddHandler(sets.hoverablesSelector, curAPWID, 'document', sets.hoverablesSelector, 'mouseleave', exitFunc);
  };
})( jQuery );

function apwHoverPopUpLoadExistingContent(ddName,pullFromID)
{
	//Don't try to do anything if this parameter is empty.
	if(pullFromID.length > 0)
	{
		$('#' + ddName).append($('#' + pullFromID));
		$('#' + pullFromID).show();
	}
}

function apwHoverPopUpOpen(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("popUpName");
	if(currentState == "N")
	{
		$(datTrackerSelectorName).data("isOpen", "Y");
		var hovSel = $(datTrackerSelectorName).data("hoverablesSelector");
		var hovPos = $(datTrackerSelectorName).data("hoverPosition");
		var offTop = $(datTrackerSelectorName).data("offsetTop");
		var offLeft = $(datTrackerSelectorName).data("offsetLeft");
		var setH = $(datTrackerSelectorName).data("height");
		var setW = $(datTrackerSelectorName).data("width");
		var openModFunc = $(datTrackerSelectorName).data("openHoverablesModifierFunction");
		var posit = $(hovSel).offset();
		var curTop = posit.top;
		var curLeft = posit.left;
		var newTop = 0;
		var newLeft = 0;
		if(hovPos == "below")
		  {
				newTop = (curTop + $(hovSel).height() + offTop);
				newLeft = (curLeft + offLeft);
		  }
		  else
		  {
			  if(hovPos == "above")
			  {
					newTop = (curTop -(setH - offTop));
					newLeft = (curLeft + offLeft);
			  }
			  else
			  {
				  if(hovPos == "left")
				  {
						newLeft = (curLeft -(setW - offLeft));
						newTop = (curTop + offTop);
				  }
				  else
				  {
						newLeft = (curLeft + $(hovSel).width() + offLeft);
						newTop = (curTop + offTop);
				  }
			  }
		  }
		
		$("#" + ddHandle).css("top", newTop + "px");
		$("#" + ddHandle).css("left", newLeft + "px");
		
		var openCall = openModFunc + "()";
		$('#' + ddHandle).show();
		var ret2 = eval(openCall);
	}
}

function apwHoverPopUpClose(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("popUpName");
	if(currentState == "Y")
	{
		$(datTrackerSelectorName).data("isOpen", "N");
		var closeModFunc = $(datTrackerSelectorName).data("closeHoverablesModifierFunction");
		var closeCall = closeModFunc + "()";
		$('#' + ddHandle).hide();
		var ret2 = eval(closeCall);
	}
}

function apwHoverPopUpOpenHoveredItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwHoverPopUpCloseHoveredItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

(function( $ ) {
  $.fn.apwHoverPopUpDynamic = function(options) {
  	
	var settings = $.extend( {
      'openHoverablesModifierFunction' : 'apwHoverPopUpDynamicOpenHoveredItemModifierBlank',
	  'closeHoverablesModifierFunction' : 'apwHoverPopUpDynamicCloseHoveredItemModifierBlank',
	  'loadingDisplayFunction' : 'apwHoverPopUpDynamicLoadingDisplayBlank',
	  'loadingFinishDisplayFunction' : 'apwHoverPopUpDynamicLoadingDisplayFinishBlank',
	  'loadFailedFunction' : 'apwHoverPopUpDynamicLoadFailedBlank',
	  'hoverablesSelector' : '',
	  'width' : 40,
	  'height' : 0,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#000000',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#FFFFFF',
	  'fillFromURL' : '',
	  'passToken' : 'N',
	  'loadDataFields' : '',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'hoverPosition' : 'below',
	  'requiredState' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwHoverPopUpDynamicData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwHoverPopUpDynamicData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwHoverPopUpDynamicRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwHoverPopUpDynamicRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwPopUp" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwPopUp" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('openHoverablesModifierFunction', sets.openHoverablesModifierFunction);
	  elt.data('closeHoverablesModifierFunction', sets.closeHoverablesModifierFunction);
	  elt.data('hoverablesSelector', sets.hoverablesSelector);
	  elt.data('offsetTop', sets.offsetTop);
	  elt.data('offsetLeft', sets.offsetLeft);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('isOpen', 'N');
	  elt.data('fillFromURL', sets.fillFromURL);
	  elt.data('passToken', sets.passToken);
	  elt.data('loadDataFields', sets.loadDataFields);
	  elt.data('loadDataPreparationFunction', sets.loadDataPreparationFunction);
	  elt.data('loadDataAdditionalString', sets.loadDataAdditionalString);
	  elt.data('loadingDisplayFunction', sets.loadingDisplayFunction);
	  elt.data('loadingFinishDisplayFunction', sets.loadingFinishDisplayFunction);
	  elt.data('loadFailedFunction', sets.loadFailedFunction);
	  elt.data('hoverPosition', sets.hoverPosition);
	  elt.data('requiredState', sets.requiredState);
	  elt.data('popUpName', finalDDName);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  //Add apwID to the hoverable element.
	  var curAPWID = parseInt($(sets.hoverablesSelector).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(sets.hoverablesSelector).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 3009\nLibrary: apwHoverPopUpDynamic\nType: Input parameters invalid\nCause:Pop Up window width is set to 0 or less.");
	  }
	  
	  if(sets.hoverablesSelector.length < 1)
	  {
		  alert("AppWorks Exception 3011\nLibrary: apwHoverPopUpDynamic\nType: Input parameters invalid\nCause:Selector string for hover-able items is blank. See parameter 'hoverablesSelector' in documentation.");
	  }
	  
	  if(sets.fillFromURL.length < 1)
	  {
		  alert("AppWorks Exception 3012\nLibrary: apwHoverPopUpDynamic\nType: Input parameters invalid\nCause:URL setting to fill Pop Up is blank. See parameter 'fillFromURL' in documentation.");
	  }
	  
	  if($(sets.hoverablesSelector).length > 0)
	  {
		  var posit = $(sets.hoverablesSelector).offset();
		  
		  //Create the new DIV element and attach it to the clickable item.
		  var newElString = '<div id="' + finalDDName + '" style="display:none;position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';
		  if(sets.height == 0)
		  {
			  //Do nothing - do not add a fixed height or add overflow:auto
			  //This should let the drop down area automatically adjust height to match the content.
		  }
		  else
		  {
			  newElString += 'height:' + sets.height + 'px;';
			  newElString += "overflow:auto;";
		  }
		  if(sets.hoverPosition == "below")
		  {
				newElString += 'top:' + (posit.top + $(sets.hoverablesSelector).height() + sets.offsetTop) + 'px;';
				newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  }
		  else
		  {
			  if(sets.hoverPosition == "above")
			  {
					newElString += 'top:' + (posit.top -(sets.height - sets.offsetTop)) + 'px;';
					newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
			  }
			  else
			  {
				  if(sets.hoverPosition == "left")
				  {
						newElString += 'left:' + (posit.left -(sets.width - sets.offsetLeft)) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
				  else
				  {
						newElString += 'left:' + (posit.left + $(sets.hoverablesSelector).width() + sets.offsetLeft) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
			  }
		  }
		  if(sets.border == "Y")
		  {
			  newElString += 'border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
	
		  $('body').prepend(newElString);
	  }
	  
	  var enterFunc = function(ev1)
	  	{
			var DTSN = ev1.data.dName;
			var clickSel = $(DTSN).data("hoverablesSelector");
		  var clickedItem = $(clickSel);
		  var reqState = $(DTSN).data("requiredState");
		  var runFlag = 1;
			if(reqState.length > 0)
			{
				var curState = clickedItem.attr("apwstate");
				if(curState == reqState)
				{
					runFlag = 1;
				}
				else
				{
					runFlag = 0;	
				}
			}
			else
			{
				runFlag = 1;	
			}
			
			if(runFlag == 1)
			{
				apwHoverPopUpDynamicOpen(DTSN);
			}
		};
	  
	  var exitFunc = function(ev2)
	  	{
			var DTSN = ev2.data.dName;
			apwHoverPopUpDynamicClose(DTSN);
		};
	  
	  $(document).delegate(sets.hoverablesSelector, 'mouseenter', {dName:datTrackerSelectorName}, enterFunc);
	  $(document).delegate(sets.hoverablesSelector, 'mouseleave', {dName:datTrackerSelectorName}, exitFunc);
	  
	  apwRegistryAddDataStore(sets.hoverablesSelector, curAPWID, datTrackerName);
	  apwRegistryAddContentElement(sets.hoverablesSelector, curAPWID, finalDDName);
	  apwRegistryAddContextRepresentative(sets.hoverablesSelector, curAPWID, contextRepresentative);
	  apwRegistryAddHandler(sets.hoverablesSelector, curAPWID, 'document', sets.hoverablesSelector, 'mouseenter', enterFunc);
	  apwRegistryAddHandler(sets.hoverablesSelector, curAPWID, 'document', sets.hoverablesSelector, 'mouseleave', exitFunc);
  };
})( jQuery );

function apwHoverPopUpDynamicOpen(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("popUpName");
	if(currentState == "N")
	{
		$(datTrackerSelectorName).data("isOpen", "Y");
		var openModFunc = $(datTrackerSelectorName).data("openHoverablesModifierFunction");
		var loadFunc = $(datTrackerSelectorName).data("loadingDisplayFunction");
		var loadDataFlds = $(datTrackerSelectorName).data("loadDataFields");
		var loadDataAdd = $(datTrackerSelectorName).data("loadDataAdditionalString");
		var loadDataFunc = $(datTrackerSelectorName).data("loadDataPreparationFunction");
		var optTok = $(datTrackerSelectorName).data("passToken");
		var theClickSel = $(datTrackerSelectorName).data("hoverablesSelector");
		var urly = $(datTrackerSelectorName).data("fillFromURL");
		var contextRep = $(datTrackerSelectorName).data("contextRepresentative");
		var openCall = openModFunc + "()";
		var loadCall = loadFunc + "('" + ddHandle + "')";
		var hovPos = $(datTrackerSelectorName).data("hoverPosition");
		var offTop = $(datTrackerSelectorName).data("offsetTop");
		var offLeft = $(datTrackerSelectorName).data("offsetLeft");
		var setH = $(datTrackerSelectorName).data("height");
		var setW = $(datTrackerSelectorName).data("width");
		var posit = $(theClickSel).offset();
		var curTop = posit.top;
		var curLeft = posit.left;
		var newTop = 0;
		var newLeft = 0;
		if(hovPos == "below")
		  {
				newTop = (curTop + $(theClickSel).height() + offTop);
				newLeft = (curLeft + offLeft);
		  }
		  else
		  {
			  if(hovPos == "above")
			  {
					newTop = (curTop -(setH - offTop));
					newLeft = (curLeft + offLeft);
			  }
			  else
			  {
				  if(hovPos == "left")
				  {
						newLeft = (curLeft -(setW - offLeft));
						newTop = (curTop + offTop);
				  }
				  else
				  {
						newLeft = (curLeft + $(theClickSel).width() + offLeft);
						newTop = (curTop + offTop);
				  }
			  }
		  }
		
		$("#" + ddHandle).css("top", newTop + "px");
		$("#" + ddHandle).css("left", newLeft + "px");
		$('#' + ddHandle).show();
		var ret2 = eval(openCall);
		var ret14 = eval(loadCall);
		
		var dataString = "";
		var datCounter = 0;
		
		//alert(loadDataFlds);
		if(loadDataFlds.length > 1)
		{
			var obj = jQuery.parseJSON(loadDataFlds);
			for (var prop in obj)
			{
				var varName = obj[prop];
				var tmpDataValue = "";
				var strValue = "";
				if(varName.substring(0,5) == "_apw_")
				{
					tmpDataValue = apwDataManagerGetGlobalVariable(varName);
				}
				else
				{
					tmpDataValue = $(theClickSel).data(obj[prop]);
				}
				strValue = String(tmpDataValue);
				if(datCounter > 0)
				{
					dataString += "&";
				}
				dataString += prop + "=" + strValue.replace(/&/g, "%26");
				datCounter++;
			}	
		}
		
		var endString = "";
		if(optTok == "Y")
		{
			accTok = apwGetAccessToken();
			if(dataString.length > 0)
			{
				endString = dataString + "&t=" + accTok;
			}
			else
			{
				endString = "t=" + accTok;
			}
		}
		else
		{
			endString = dataString;
		}
		
		if(loadDataAdd.length > 0)
		{
			if(endString.length > 0)
			{
				endString += "&" + loadDataAdd;	
			}
			else
			{
				endString = loadDataAdd;	
			}
		}
		
		var dataFuncResult = "";
		if(loadDataFunc.length > 0)
		{
			var loadDataFuncCall = loadDataFunc + "()";
			dataFuncResult = eval(loadDataFuncCall);
			
			if(dataFuncResult.length > 0)
			{
				if(endString.length > 0)
				{
					endString += "&" + dataFuncResult;	
				}
				else
				{
					endString = dataFuncResult;	
				}	
			}
		}
		
		var contextRepObj = $('#' + contextRep)[0];
		$('#' + contextRep).data('apwClickedItem', this);
		jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
		var datTrackName = $(this).data("mainDataSelector");
		var targEl2 = $(datTrackName).data("popUpName");
		var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
		var clickSel2 = $(datTrackName).data("hoverablesSelector");
		
		var loadFinDispCall = loadFinishFunc + "('" + targEl2 + "')";
		var ret3 = eval(loadFinDispCall);
		
		$('#' + targEl2).empty();
		$('#' + targEl2).append(dat);}, error: function(obj, code){
			var datTrackName = $(this).data("mainDataSelector");
			var failFunc = $(datTrackName).data("loadFailedFunction");
			var ddHandle = $(datTrackName).data("popUpName");
			
			var failCall = failFunc + "('" + ddHandle + "')";
			var ret16 = eval(failCall);
			}});
	}
}

function apwHoverPopUpDynamicClose(datTrackerSelectorName)
{
	var currentState = $(datTrackerSelectorName).data("isOpen");
	var ddHandle = $(datTrackerSelectorName).data("popUpName");
	if(currentState == "Y")
	{
		$(datTrackerSelectorName).data("isOpen", "N");
		var closeModFunc = $(datTrackerSelectorName).data("closeHoverablesModifierFunction");
		var closeCall = closeModFunc + "()";
		$('#' + ddHandle).hide();
		var ret2 = eval(closeCall);
	}
}

function apwHoverPopUpDynamicOpenHoveredItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwHoverPopUpDynamicCloseHoveredItemModifierBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwHoverPopUpDynamicLoadingDisplayBlank(dropDownName)
{
	//Do nothing. I'm just a placeholder.
}

function apwHoverPopUpDynamicLoadingDisplayFinishBlank(dropDownName)
{
	//Do nothing. I'm just a placeholder.
}

function apwHoverPopUpDynamicLoadFailedBlank(dropDownName)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwInputChangeMonitor = function(options) {
  	
	var settings = $.extend( {
      'targetElement' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwInputChangeMonitorData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwInputChangeMonitorData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('targetElement', sets.targetElement);
	  elt.data('presence', 'Y');
	  //alert(datTrackerSelectorName);
	  
	  var targElSelly = "#" + sets.targetElement;
	  var curAPWID = parseInt($(targElSelly).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(targElSelly).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  var originalValue = "";
	  
	  var setOfItems = $(targElSelly + " *:input");
	  for(j = 0; j < setOfItems.length; j++)
	  {
		  originalValue = originalValue + String($(setOfItems[j]).val());
	  }

	  elt.data('originalValue', originalValue);
	  
	  $(targElSelly).attr("apwChanged", "N");
	  
	  setTimeout("apwInputChangeMonitorTimedObserver('#" + sets.targetElement + "', '" + datTrackerSelectorName + "')", 350);
	  
	  apwRegistryAddDataStore(targElSelly, curAPWID, datTrackerName);
  };
})( jQuery );

function apwInputChangeMonitorTimedObserver(objectSelector, datTrackerSel)
{
	if($(datTrackerSel).length > 0)
	{
		var currentValue = "";
	  
		  var setOfItems = $(objectSelector + " *:input");
		  for(j = 0; j < setOfItems.length; j++)
		  {
			  currentValue = currentValue + String($(setOfItems[j]).val());
		  }
		var origValue = String($(datTrackerSel).data("originalValue"));
		  if(currentValue == origValue)
		  {
			//We have the same value we started with. Set the flag to "N"
			$(objectSelector).attr("apwChanged", "N");
		  }
		  else
		  {
			//Something must have changed. Set the flag to "Y"
			$(objectSelector).attr("apwChanged", "Y");
		  }
		setTimeout("apwInputChangeMonitorTimedObserver('" + objectSelector + "', '" + datTrackerSel + "')", 350);
	}
}

(function( $ ) {
  $.fn.apwInputValidator = function(options) {
  	
	var settings = $.extend( {
      'targetElement' : '',
      'validationFunction' : 'apwInputValidatorRequired',
	  'passFunction' : 'apwInputValidatorPassBlank',
	  'failFunction' : 'apwInputValidatorFailBlank'
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwInputValidatorData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwInputValidatorData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('targetElement', sets.targetElement);
	  elt.data('validationFunction', sets.validationFunction);
	  elt.data('passFunction', sets.passFunction);
	  elt.data("failFunction", sets.failFunction);
	  elt.data('presence', 'Y');
	  //alert(datTrackerSelectorName);
	  
	  var targElSelly = "#" + sets.targetElement;
	  var curAPWID = parseInt($(targElSelly).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(targElSelly).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  var keyFunc = function(ev1)
	  {
		if(ev1.which == 13)
		{
			//Do nothing - the user hit the "enter" key and we trap that differently.
		}
		else
		{
			var DTSN = ev1.data.dName;
			var valFunc = $(DTSN).data("validationFunction");
			var pasFunc = $(DTSN).data("passFunction");
			var faiFunc = $(DTSN).data("failFunction");
			
			var curValue = $(this).val();
			//alert(curValue);
			var valCall = valFunc + "('" + curValue + "')";
			var ret1 = eval(valCall);
			
			if(ret1 == 1)
			{
				//We passed the validation. Add a flag to the element so it can be validated from outside this function.
				$(this).data("apwValidated", "Y");
				
				//Call the pass function
				var pasCall = pasFunc + "()";
				var ret2 = eval(pasCall);
			}
			else
			{
				//We failed the validation. Add a flag to the element so it can be rejected from outside this function.
				$(this).data("apwValidated", "N");
				
				//Call the fail function
				var faiCall = faiFunc + "()";
				var ret3 = eval(faiCall);
			}	
		}
	   };
	  
	  
	  var changeFunc = function(ev2)
	  {
		var DTSN = ev2.data.dName;
		var valFunc = $(DTSN).data("validationFunction");
		var pasFunc = $(DTSN).data("passFunction");
		var faiFunc = $(DTSN).data("failFunction");
		
		var curValue = $(this).val();
		//alert(curValue);
		var valCall = valFunc + "('" + curValue + "')";
		var ret1 = eval(valCall);
		
		if(ret1 == 1)
		{
			//We passed the validation. Add a flag to the element so it can be validated from outside this function.
			$(this).data("apwValidated", "Y");
			
			//Call the pass function
			var pasCall = pasFunc + "()";
			var ret2 = eval(pasCall);
		}
		else
		{
			//We failed the validation. Add a flag to the element so it can be rejected from outside this function.
			$(this).data("apwValidated", "N");
			
			//Call the fail function
			var faiCall = faiFunc + "()";
			var ret3 = eval(faiCall);
		}
	   };
	   
	   
	  $(document).delegate('#' + sets.targetElement, 'keyup', {dName:datTrackerSelectorName}, keyFunc);
	  $(document).delegate('#' + sets.targetElement, 'change', {dName:datTrackerSelectorName}, changeFunc);
	  
	  setTimeout("apwInputValidatorTimedObserver('#" + sets.targetElement + "', '" + datTrackerSelectorName + "')", 250);
	  
	  apwRegistryAddDataStore(targElSelly, curAPWID, datTrackerName);
	  apwRegistryAddHandler(targElSelly, curAPWID, 'document', targElSelly, 'keyup', keyFunc);
	  apwRegistryAddHandler(targElSelly, curAPWID, 'document', targElSelly, 'change', changeFunc);
  };
})( jQuery );

function apwInputValidatorTimedObserver(objectSelector, datTrackerSel)
{
	if($(datTrackerSel).length > 0)
	{
		//Added check if the object is still present.
		//When removing an input element that is being monitored, we can still have
		//a timed observer iteration or two left to run... and it can't find the object.
		//This throws a 'length' is null or not an object error in IE7 and IE8.
		var curObject = $(objectSelector);
		if(curObject.length > 0)
		{
			var enteredValue = $(objectSelector).val();
			var validityCheck = $(objectSelector).data("apwValidated");
			  if((enteredValue.length > 0) && (validityCheck != "Y"))
			  {
				//This section checks if there is anything in the box on a timer.
				//This handles all kinds of auto-complete functionality or strange copy-paste stuff.
				//We simply call the "change()" event for the clickable item so we don't repeat code here.
				$(objectSelector).change();
			  }
			setTimeout("apwInputValidatorTimedObserver('" + objectSelector + "', '" + datTrackerSel + "')", 250);
		}
	}
}

function apwInputValidatorPassBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwInputValidatorFailBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwInputValidatorRequired(inputValue)
{
	if(inputValue.length > 0)
	{
		//There is something in the box. Return 1 for success.
		return 1;
	}
	else
	{
		//We failed. There is no input in the box. Return 0 for failure.
		return 0;
	}
}

function apwInputValidatorEmail(inputValue)
{
	//Start by checking length
	if(inputValue.length < 6)
	{
		//Too short for any valid email. Reject
		return 0;
	}
	else
	{
		//Long enough, now check for only 1 @ symbol
		var symbolCount = apwSubstringCount(inputValue, "@");
		if(symbolCount != 1)
		{
			//There is not JUST ONE @ symbol. Reject
			return 0;
		}
		else
		{
			//Ok - we have a single @ symbol. Now check that there is at least 1 character before the @ symbol.
			var symbolPosition = inputValue.indexOf("@", 0);
			if(symbolPosition < 1)
			{
				//The @ symbol does NOT have at least one character before it. Reject
				return 0;
			}
			else
			{
				//There is at least 1 character before the @. Now check that the stuff before the @ has the right type of characters
				var beforeSymbol = inputValue.substring(0, symbolPosition);
				var regExp = /^([a-zA-Z0-9.+_-]+)$/;
				if(regExp.test(beforeSymbol) == false)
				{
					//We don't have the right characters at the start. Reject
					return 0;
				}
				else
				{
					//It looks like the characters are pretty good. Now check that there is at least 1 "." after the @ symbol.
					var afterSymbol = inputValue.substring((symbolPosition + 1));
					var dotCount1 = apwSubstringCount(afterSymbol, ".");
					if(dotCount1 < 1)
					{
						//We do not have any periods after the @ symbol. Reject
						return 0;
					}
					else
					{
						//We have at least 1. Now check that the stuff between the @ and first . is at least 1 character
						var dotPosition = afterSymbol.indexOf(".", 0);
						var betweenSymbolAndDot = afterSymbol.substring(0, dotPosition);
						if(betweenSymbolAndDot.length < 1)
						{
							//There is nothing between the @ and the ".". Reject
							return 0;
						}
						else
						{
							//We have content between the @ and . Now check it's quality
							var regExp2 = /^([a-zA-Z0-9_-]+)$/;
							if(regExp2.test(betweenSymbolAndDot) == false)
							{
								//Incorrect character types - Reject
								return 0;
							}
							else
							{
								//Character set looks good. Now check for a minimum of 2 characters after the last dot
								var lastDotPosition = afterSymbol.lastIndexOf(".");
								var afterLastDot = afterSymbol.substring((lastDotPosition + 1));
								if(afterLastDot.length < 2)
								{
									//There are not enough characters after the last dot to make a valid domain. Reject
									return 0;
								}
								else
								{
									//We have enough characters. Now check that they are alpha characters
									var regExp3 = /^([a-zA-Z]{2,})$/;
									if(regExp3.test(afterLastDot) == false)
									{
										//Incorrect character types - Reject
										return 0;
									}
									else
									{
										//We finally have a valid email. Accept
										return 1;
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

function apwInputValidatorPassword(inputValue)
{
	if(inputValue.length < 6)
	{
		//Password is too short. Reject
		return 0;
	}
	else
	{
		//Looks good - we are only checking the length
		return 1;
	}
}

function apwSubstringCount(haystack, needle)
{
    var n=0;
    var pos=0;

    while(true){
        pos=haystack.indexOf(needle,pos);
        if(pos!=-1){ n++; pos+=needle.length;}
        else{break;}
    }
    return(n);
}

(function( $ ) {
  $.fn.apwManualLoader = function(options) {
  	
	var settings = $.extend( {
      'targetElement' : '',
      'loadingDisplayFunction' : 'apwManualLoaderDisplayLoaderBlank',
	  'loadingFinishDisplayFunction' : 'apwManualLoaderDisplayLoaderFinishBlank',
	  'passToken' : 'N',
	  'loadURL' : '',
	  'loadFailedFunction' : 'apwManualLoaderLoadFailedBlank',
	  'loadData' : ''
    }, options);
      
    var sets = settings;
	  
	var targEl = sets.targetElement;
	var loadFunc = sets.loadingDisplayFunction;
	var optTok = sets.passToken;
	var urly = sets.loadURL;
	var loadDispCall = loadFunc + "('#" + targEl + "')";
	var ret1 = eval(loadDispCall);
	var loadFinFunc = sets.loadingFinishDisplayFunction;
	var loadFailFunc = sets.loadFailedFunction;
	var endString = sets.loadData;
	
	if(optTok == "Y")
	{
		accTok = apwGetAccessToken();
		if(endString.length > 0)
		{
			endString += "&t=" + accTok;
		}
		else
		{
			endString += "t=" + accTok;
		}
	}
	
	var contextRepresentative = "apwManualLoaderRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwManualLoaderRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;

	var cRep = $(contextRepresentativeSelector);
	cRep.data('presence', 'Y');
	cRep.data('selfReference', contextRepresentative);
	cRep.data('targetElement', targEl);
	cRep.data('loadingFinishDisplayFunction', loadFinFunc);
	cRep.data('loadFailedFunction', loadFailFunc);
	var contextRepObj = $(contextRepresentativeSelector)[0];
	
	jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
		var conRepName = $(this).data("selfReference");
		var targEl2 = $(this).data("targetElement");
		var loadFinishFunc = $(this).data("loadingFinishDisplayFunction");

		var loadFinDispCall = loadFinishFunc + "('#" + targEl2 + "')";
		var ret3 = eval(loadFinDispCall);
		
		$('#' + targEl2).empty();
		$('#' + targEl2).append(dat);
		
		$("#" + conRepName).remove();
		}, error: function(obj, code){
			var conRepName = $(this).data("selfReference");
			var failFunc = $(this).data("loadFailedFunction");
			var failCall = failFunc + "()";
			var ret4 = eval(failCall);
			$("#" + conRepName).remove();
			}});
  };
})( jQuery );

function apwManualLoaderDisplayLoaderBlank(targetElementSelector)
{
	//Do nothing. I'm just a placeholder.
}

function apwManualLoaderDisplayLoaderFinishBlank(targetElementSelector)
{
	//Do nothing. I'm just a placeholder.
}

function apwManualLoaderLoadFailedBlank()
{
	//Do nothing. I'm just a placeholder.
}

(function( $ ) {
  $.fn.apwManualPopUpTemporary = function(options) {
  	
	var settings = $.extend( {
	  'width' : 40,
	  'height' : 0,
	  'offsetLeft' : 0,
	  'offsetTop' : 0,
	  'border' : 'Y',
	  'borderColor' : '#000000',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#FFFFFF',
	  'copyFromID' : '',
	  'hoverPosition' : 'below',
	  'timeBeforeFade' : 3000,
	  'fadeSpeed' : 400,
	  'customContent' : '',
	  'contentInsertionSelector' : '',
	  'anchorElement' : ''
    }, options);
      
      var sets = settings;
	  var anchorSel = "#" + sets.anchorElement;
	  //Create a name for the new DIV we are appending. Make sure it doesn't already exist.
	  var finalDDName = "apwManualPopUpTemporary" + (Math.floor(Math.random() * 10000));
	  while($("#" + finalDDName).length > 0)
	  {
		finalDDName = "apwManualPopUpTemporary" + (Math.floor(Math.random() * 10000));  
	  }
	  
	  //Throw settings errors as needed
	  if(sets.width < 1)
	  {
		  alert("AppWorks Exception 37009\nLibrary: apwManualPopUpTemporary\nType: Input parameters invalid\nCause:Pop Up window width is set to 0 or less.");
	  }
	  
	  if(sets.anchorElement.length < 1)
	  {
		  alert("AppWorks Exception 37011\nLibrary: apwManualPopUpTemporary\nType: Input parameters invalid\nCause:Element ID for Anchor Element is blank. See parameter 'anchorElement' in documentation.");
	  }
	  
	  if(sets.copyFromID.length < 1)
	  {
		  alert("AppWorks Exception 37012\nLibrary: apwManualPopUpTemporary\nType: Input parameters invalid\nCause:Element ID for copying into Pop Up area is blank. See parameter 'copyFromID' in documentation.");
	  }
	  
	  if($(anchorSel).length > 0)
	  {
		  var posit = $(anchorSel).offset();
		  
		  //Create the new DIV element and attach it to the clickable item.
		  var newElString = '<div id="' + finalDDName + '" style="position:absolute;z-index:999999;';
		  newElString += 'width:' + sets.width + 'px;';
		  if(sets.height == 0)
		  {
			  //Do nothing - do not add a fixed height or add overflow:auto
			  //This should let the drop down area automatically adjust height to match the content.
		  }
		  else
		  {
			  newElString += 'height:' + sets.height + 'px;';
			  newElString += "overflow:auto;";
		  }
		  if(sets.hoverPosition == "below")
		  {
				newElString += 'top:' + (posit.top + $(anchorSel).height() + sets.offsetTop) + 'px;';
				newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
		  }
		  else
		  {
			  if(sets.hoverPosition == "above")
			  {
					newElString += 'top:' + (posit.top -(sets.height - sets.offsetTop)) + 'px;';
					newElString += 'left:' + (posit.left + sets.offsetLeft) + 'px;';
			  }
			  else
			  {
				  if(sets.hoverPosition == "left")
				  {
						newElString += 'left:' + (posit.left -(sets.width - sets.offsetLeft)) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
				  else
				  {
						newElString += 'left:' + (posit.left + $(anchorSel).width() + sets.offsetLeft) + 'px;';
						newElString += 'top:' + (posit.top + sets.offsetTop) + 'px;';
				  }
			  }
		  }
		  if(sets.border == "Y")
		  {
			  newElString += 'border-width:thin;border-style:solid;border-color:' + sets.borderColor + ';';
		  }
		  
		  if(sets.solidBackground == "Y")
		  {
			  newElString += 'background-color:' + sets.backgroundColor + ';';
		  }
		  
		  newElString += '"></div>';
		  
		  var newElContainer = $().add(newElString);
		  var copySel = "#" + sets.copyFromID;
		  var copyContainer = $(copySel).clone();
		  copyContainer.prependTo(newElContainer);
		  copyContainer.show();
		  var inText = sets.customContent;
		  var inTextSel = sets.contentInsertionSelector;
		  copyContainer.find(inTextSel).html(inText);
		  newElContainer.prependTo('body');
		  
		  var laterCall = setTimeout("apwManualPopUpTemporaryFadeAndRemove('" + finalDDName + "'," + sets.fadeSpeed + ")", sets.timeBeforeFade);
	  }
  };
})( jQuery );

function apwManualPopUpTemporaryFadeAndRemove(popUpID,fadeSpeed)
{
	var popUpSel = "#" + popUpID;
	$(popUpSel).fadeOut(fadeSpeed, function(){$(this).remove();});
}

(function( $ ) {
  $.fn.apwManualPostUp = function(options) {
  	
	var settings = $.extend( {
      'postingDisplayFunction' : 'apwManualPostUpPostingDisplayBlank',
	  'postingFinishDisplayFunction' : 'apwManualPostUpPostingDisplayFinishBlank',
	  'postingResponseHandlerFunction' : 'apwManualPostUpResponseHandlerBlank',
	  'passToken' : 'N',
	  'postURL' : '',
	  'postFailedFunction' : 'apwManualPostUpPostFailedBlank',
	  'postData' : ''
    }, options);
      
    var sets = settings;
	
	var procFunc = sets.postingResponseHandlerFunction;
	var loadFunc = sets.postingDisplayFunction;
	var optTok = sets.passToken;
	var urly = sets.postURL;
	var loadDispCall = loadFunc + "()";
	var ret1 = eval(loadDispCall);
	var loadFinFunc = sets.postingFinishDisplayFunction;
	var loadFailFunc = sets.postFailedFunction;
	var endString = sets.postData;
	
	if(optTok == "Y")
	{
		accTok = apwGetAccessToken();
		if(endString.length > 0)
		{
			endString += "&t=" + accTok;
		}
		else
		{
			endString += "t=" + accTok;
		}
	}
	
	var contextRepresentative = "apwManualPostUpRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwManualPostUpRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;

	var cRep = $(contextRepresentativeSelector);
	cRep.data('presence', 'Y');
	cRep.data('selfReference', contextRepresentative);
	cRep.data('postingResponseHandlerFunction', procFunc);
	cRep.data('postingFinishDisplayFunction', loadFinFunc);
	cRep.data('postFailedFunction', loadFailFunc);
	var contextRepObj = $(contextRepresentativeSelector)[0];
	jQuery.ajax({type: "POST", context:contextRepObj , url: urly, data:endString, dataType: "html", success: function(dat){																												
		var conRepName = $(this).data("selfReference");
		var procFunc = $(this).data("postingResponseHandlerFunction");
		var loadFinishFunc = $(this).data("postingFinishDisplayFunction");

		var loadFinDispCall = loadFinishFunc + "()";
		var ret3 = eval(loadFinDispCall);
		
		var procCall = procFunc + "(dat)";
		var ret84 = eval(procCall);
		
		$("#" + conRepName).remove();
		
		}, error: function(obj, code){
			var conRepName = $(this).data("selfReference");
			var failFunc = $(this).data("postFailedFunction");
			var failCall = failFunc + "()";
			var ret4 = eval(failCall);
			$("#" + conRepName).remove();
			}});
  };
})( jQuery );

function apwManualPostUpPostingDisplayBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwManualPostUpPostingDisplayFinishBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwManualPostUpPostFailedBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwManualPostUpResponseHandlerBlank(inResponse)
{
	//Do nothing. I'm just a placeholder.	
}

(function( $ ) {
  $.fn.apwModalWindow = function(options) {
  	
	var settings = $.extend( {
      'loadingPreprocessFunction' : 'apwModalWindowLoadingPreprocessBlank',
	  'loadingDisplayFunction' : 'apwModalWindowLoadingDisplayBlank',
	  'loadingFinishDisplayFunction' : 'apwModalWindowLoadingFinishDisplayBlank',
	  'loadingFailFunction' : 'apwModalWindowLoadingFailBlank',
	  'closeFinishFunction' : 'apwModalWindowCloseFinishBlank',
	  'closeCancelFunction' : 'apwModalWindowCloseCancelBlank',
	  'width' : 300,
	  'height' : 300,
	  'border' : 'Y',
	  'borderColor' : '#000000',
	  'solidBackground' : 'Y',
	  'backgroundColor' : '#FFFFFF',
	  'loadURL' : '',
	  'passToken' : 'N',
	  'overlayGraphic' : 'images/grayout.png',
	  'loadDataString' : ''
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwModalWindowData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwModalWindowData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwModalWindowRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwModalWindowRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('loadingPreprocessFunction', sets.loadingPreprocessFunction);
	  elt.data('loadingDisplayFunction', sets.loadingDisplayFunction);
	  elt.data('loadingFinishDisplayFunction', sets.loadingFinishDisplayFunction);
	  elt.data('loadingFailFunction', sets.loadingFailFunction);
	  elt.data('closeFinishFunction', sets.closeFinishFunction);
	  elt.data('closeCancelFunction', sets.closeCancelFunction);
	  elt.data('width', sets.width);
	  elt.data('height', sets.height);
	  elt.data('border', sets.border);
	  elt.data('borderColor', sets.borderColor);
	  elt.data('solidBackground', sets.solidBackground);
	  elt.data('backgroundColor', sets.backgroundColor);
	  elt.data('loadURL', sets.loadURL);
	  elt.data('passToken', sets.passToken);
	  elt.data('overlayGraphic', sets.overlayGraphic);
	  elt.data('loadDataString', sets.loadDataString);
	  elt.data('presence', 'Y');
	  elt.data('contextRepresentative', contextRepresentative);
	  //alert(datTrackerSelectorName);
	  
	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('maindataselector', datTrackerSelectorName);
	  
	  var curAPWID = Math.floor(Math.random() * 100000);
	  
	  //Create the new modal window elements and attach them to the very beginning under the BODY tag.
	  var modalString = '<div id="apwModalWindow" data-maindataselector="' + datTrackerSelectorName + '" apwid="' + curAPWID + '" style="position:absolute;top:0px;left:0px;z-index:9999;width:100%;height:100%;background-image:url(\'' + sets.overlayGraphic + '\');background-repeat:repeat;"><input type="text" id="apwModalWindowDefaultTabber" style="position:absolute;left:-5000px;" /><div id="apwModalWindowContent" style="position:absolute;z-index:10000;';
	  modalString += 'width:' + sets.width + 'px;';
	  modalString += 'height:' + sets.height + 'px;';
	  modalString += "overflow:hidden;";
	  if(sets.border == "Y")
	  {
		  modalString += 'border-width:thin;border-style:solid;border-color:' + sets.borderColor + ';';
	  }
	  
	  if(sets.solidBackground == "Y")
	  {
		  modalString += 'background-color:' + sets.backgroundColor + ';';
	  }
	  
	  var calcTop = 0;
	  var calcLeft = 0;
	  var winHeight = $(window).height();
	  var winWidth = $(window).width();
	  calcTop = Math.round((winHeight / 2) - (sets.height / 2));
	  calcLeft = Math.round((winWidth / 2) - (sets.width / 2));
	  
	  modalString += 'top:' + calcTop + 'px;';
	  modalString += 'left:' + calcLeft + 'px;';
	  
	  modalString += '"></div></div>';

	  $("body").prepend(modalString);
	  
	  //Now that we've added the modal view, call the starting functions and load the URL...
	  var preProcCall = sets.loadingPreprocessFunction + "()";
	  var ret10 = eval(preProcCall);
	  
	  var loadDispCall = sets.loadingDisplayFunction + "('#apwModalWindowContent')";
	  var ret11 = eval(loadDispCall);
	  
	  var endString = "";
	  
	  if(sets.passToken == "Y")
		{
			accTok = apwGetAccessToken();
			if(sets.loadDataString.length > 0)
			{
				endString = sets.loadDataString + "&t=" + accTok;
			}
			else
			{
				endString = "t=" + accTok;
			}
		}
		else
		{
			endString = sets.loadDataString;
		}
	  
	  var contextRepObj = $(contextRepresentativeSelector)[0];
	  
	  jQuery.ajax({type: "POST", context:contextRepObj , url: sets.loadURL, data:endString, dataType: "html", success: function(dat){																												
		var datTrackName = $(this).data("maindataselector");
		var loadFinishFunc = $(datTrackName).data("loadingFinishDisplayFunction");
		
		var loadFinDispCall = loadFinishFunc + "('#apwModalWindowContent')";
		var ret3 = eval(loadFinDispCall);
		
		$('#apwModalWindowContent').empty();
		$('#apwModalWindowContent').append(dat);}, error: function(obj, code){
			var datTrackName = $(this).data("maindataselector");
			var failFunc = $(datTrackName).data("loadingFailFunction");
			var failCall = failFunc + "('#apwModalWindowContent')";
			var ret16 = eval(failCall);
			}});
	  
	  var tabControllerDown = function(ev1)
	  {
		  var keyNumber = ev1.keyCode;
		  if(keyNumber == 9)
		  {
			  setTimeout('apwModalWindowHandleTabKey()',25);
		  }
	  };
	  
	  var tabControllerPress = function(ev2)
	  {
		  var keyNumber = ev2.keyCode;
		  if(keyNumber == 9)
		  {
			  setTimeout('apwModalWindowHandleTabKey()',25);
		  }
	  };
	  
	  $(document).bind('keydown', {dName:datTrackerSelectorName}, tabControllerDown);
	  $(document).bind('keypress', {dName:datTrackerSelectorName}, tabControllerPress);
	  
	  apwRegistryAddDataStore('#apwModalWindow', curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative('#apwModalWindow', curAPWID, contextRepresentative);
	  apwRegistryAddBinding('#apwModalWindow', curAPWID, 'document', 'Y', 'keydown', tabControllerDown);
	  apwRegistryAddBinding('#apwModalWindow', curAPWID, 'document', 'Y', 'keypress', tabControllerPress);
  };
})( jQuery );

function apwModalWindowCloseFinish()
{
	var datTrackSel = $("#apwModalWindow").data("maindataselector");
	var finFunc = $(datTrackSel).data("closeFinishFunction");
	var finCall = finFunc + "()";
	$("#apwModalWindow").remove();
	var ret1 = eval(finCall);
}

function apwModalWindowCloseCancel()
{
	var datTrackSel = $("#apwModalWindow").data("maindataselector");
	var finFunc = $(datTrackSel).data("closeCancelFunction");
	var finCall = finFunc + "()";
	$("#apwModalWindow").remove();
	var ret1 = eval(finCall);
}

function apwModalWindowHandleTabKey()
{
	var acty = document.activeElement;
	var jActy = $(acty);
	var jPar = jActy.parents('#apwModalWindow');
	if(jPar.length > 0)
	{
		//We are in the modal window. Do nothing.	
	}
	else
	{
		//We have gone outside the modal window. Put the user back at the start of the modal.
		$("#apwModalWindow *:input:first").focus();
	}
}

function apwModalWindowLoadingPreprocessBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwModalWindowLoadingDisplayBlank(displayAreaHandle)
{
	//Do nothing. I'm just a placeholder.
}

function apwModalWindowLoadingFinishDisplayBlank(displayAreaHandle)
{
	//Do nothing. I'm just a placeholder.
}

function apwModalWindowLoadingFailBlank(displayAreaHandle)
{
	//Do nothing. I'm just a placeholder.
}

function apwModalWindowCloseFinishBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwModalWindowCloseCancelBlank()
{
	//Do nothing. I'm just a placeholder.
}

(function( $ ) {
  $.fn.apwScreenHeightAdjuster = function(options) {
  	
	var settings = $.extend( {
      'heightSubtraction' : 0,
	  'itemList' : '',
	  'minimumHeight' : 40,
	  'maximumHeight' : 0
    }, options);
      
	var sets = settings;
	
	//Get the current screen height (immediately after page has finished loading)
	var scrHeight = $(window).height();
	var finalHeight = scrHeight - sets.heightSubtraction;
	
	//Check to see if we have gone below the minimum requested height.
	//If we have, set the new height equal to the minimum.
	if(finalHeight < sets.minimumHeight)
	{
		finalHeight = sets.minimumHeight;	
	}
	
	//If we have a maximum height set, check to see if we have surpassed it.
	//If we did, set the new height equal to the maximum.
	if(sets.maximumHeight != 0)
	{
		//We have a max height set. Now compare.
		if(finalHeight > sets.maximumHeight)
		{
			finalHeight = sets.maximumHeight;	
		}
	}
	
	//Loop through the list of IDs that were passed into the plugin.
	//For each item, set its height to the new desired height.
	var splitResult = sets.itemList.split(",");
	for(i = 0; i < splitResult.length; i++)
	{
		$("#" + splitResult[i]).height(finalHeight);
	}
  };
})( jQuery );

(function( $ ) {
  $.fn.apwScrollFlow = function(options) {
  	
	var settings = $.extend( {
      'targetElement' : '',
      'loadingBottomDisplayFunction' : 'apwScrollFlowDisplayLoaderBottomBlank',
	  'loadingBottomFinishDisplayFunction' : 'apwScrollFlowDisplayLoaderBottomFinishBlank',
	  'loadBottomFailedFunction' : 'apwScrollFlowLoadFailedBottomBlank',
	  'loadingTopDisplayFunction' : 'apwScrollFlowDisplayLoaderTopBlank',
	  'loadingTopFinishDisplayFunction' : 'apwScrollFlowDisplayLoaderTopFinishBlank',
	  'loadTopFailedFunction' : 'apwScrollFlowLoadFailedTopBlank',
	  'passToken' : 'N',
	  'loadURL' : '',
	  'loadDataPreparationFunction' : '',
	  'loadDataAdditionalString' : '',
	  'startingNumber' : 0,
	  'endingNumber' : 1,
	  'numberToAdd' : 1,
	  'scanSelector' : '',
	  'scanDataName' : '',
	  'endingFlag' : '',
	  'scrollingElement' : ''
    }, options);
      
      var sets = settings;
	  
	  var datTrackerName = "apwScrollFlowData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwScrollFlowData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + datTrackerName + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  var contextRepresentative = "apwScrollFlowRep" + (Math.floor(Math.random() * 10000));
	  var testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  
	  while(testRetrieval2 == "Y")
	  {
		  contextRepresentative = "apwScrollFlowRep" + (Math.floor(Math.random() * 10000));
		  testRetrieval2 = $('#' + contextRepresentative).data("presence");
	  }
	  
	  $(document.body).append('<span id="' + contextRepresentative + '"></span>');
	  var contextRepresentativeSelector = "#" + contextRepresentative;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('targetElement', sets.targetElement);
	  elt.data('loadingBottomDisplayFunction', sets.loadingBottomDisplayFunction);
	  elt.data('loadingBottomFinishDisplayFunction', sets.loadingBottomFinishDisplayFunction);
	  elt.data('loadingTopDisplayFunction', sets.loadingTopDisplayFunction);
	  elt.data('loadingTopFinishDisplayFunction', sets.loadingTopFinishDisplayFunction);
	  elt.data("passToken", sets.passToken);
	  elt.data('loadURL', sets.loadURL);
	  elt.data('loadDataPreparationFunction', sets.loadDataPreparationFunction);
	  elt.data('loadDataAdditionalString', sets.loadDataAdditionalString);
	  elt.data('loadBottomFailedFunction', sets.loadBottomFailedFunction);
	  elt.data('loadTopFailedFunction', sets.loadTopFailedFunction);
	  elt.data('startingNumber', sets.startingNumber);
	  elt.data('endingNumber', sets.endingNumber);
	  elt.data('numberToAdd', sets.numberToAdd);
	  elt.data('scanSelector', sets.scanSelector);
	  elt.data('scanDataName', sets.scanDataName);
	  elt.data('endingFlag', sets.endingFlag);
	  elt.data('scrollingElement', sets.scrollingElement);
	  elt.data('ajaxLock', 0);
	  elt.data('trackHeight', $('#' + sets.targetElement).height());
	  elt.data('lastScrollTop', 0);
	  elt.data('contextRepresentative', contextRepresentative);

	  var cRep = $(contextRepresentativeSelector);
	  cRep.data('presence', 'Y');
	  cRep.data('mainDataSelector', datTrackerSelectorName);
	  
	  var targElSelly = "#" + sets.targetElement;
	  var curAPWID = parseInt($(targElSelly).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(targElSelly).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  
	  //Set the ending ID so the user of this function cannot accidentally enter the wrong ending number and cause unwanted loads.
	  var lastID = $(sets.scanSelector + ":last").data(sets.scanDataName);
	  elt.data("endingNumber", lastID);
	  
	  //Set the starting ID so the user of this function cannot accidentally enter the wrong starting number and cause unwanted loads.
	  var firstID = $(sets.scanSelector + ":first").data(sets.scanDataName);
	  elt.data("startingNumber", firstID);
	  
	  apwRegistryAddDataStore(targElSelly, curAPWID, datTrackerName);
	  apwRegistryAddContextRepresentative(targElSelly, curAPWID, contextRepresentative);
	  
	  setTimeout("apwScrollFlowCheckScrolling('" + datTrackerSelectorName + "')", 200);
  };
})( jQuery );

function apwScrollFlowCheckScrolling(datTrackerSel){
	if($(datTrackerSel).length > 0)
	{
		setTimeout("apwScrollFlowCheckScrolling('" + datTrackerSel + "')", 200);
		var trackEl = $(datTrackerSel).data("trackingElement");
		var tHeight = $(datTrackerSel).data("trackHeight");
		var scrollEl = $(datTrackerSel).data("scrollingElement");
		var scrollElSel = "#" + scrollEl;
		var lastScrollTop = $(datTrackerSel).data("lastScrollTop");
		var curScrollTop = $(scrollElSel).scrollTop();
		$(datTrackerSel).data("lastScrollTop", curScrollTop);
		
		if (tHeight - $(scrollElSel).scrollTop() <= ($(scrollElSel).outerHeight() + 20))
		{
			//See if we should even care about the scroll position - is the content tall enough to scroll?
			if(tHeight > $(scrollElSel).outerHeight())
			{
				//We are at the bottom. Now load more data...
				var locky = $(datTrackerSel).data("ajaxLock");
				if(locky == 0)
				{
					var optTok = $(datTrackerSel).data("passToken");
					var urly = $(datTrackerSel).data("loadURL");
					var endNum = $(datTrackerSel).data("endingNumber");
					var numToAdd = $(datTrackerSel).data("numberToAdd");
					var endFlag = $(datTrackerSel).data("endingFlag");
					var loadDataAdd = $(datTrackerSel).data("loadDataAdditionalString");
					var loadDataFunc = $(datTrackerSel).data("loadDataPreparationFunction");
					
					//If we are already viewing the last item, don't proceed...
					if(endNum == endFlag)
					{
						//Do nothing - we are already at the end of the items.
					}
					else
					{
						//We are OK to proceed loading more items...
						$(datTrackerSel).data("ajaxLock", 1);
						
						//Call the loading display function...
						var loadDispFunc = $(datTrackerSel).data("loadingBottomDisplayFunction");
						var loadDispCall = loadDispFunc + "()";
						var ret77 = eval(loadDispCall);
						
						//Go get the new items...
						var contRep = $(datTrackerSel).data("contextRepresentative");
						var thas = $('#' + contRep)[0];
						
						var endString = "";
						if(optTok == "Y")
						{
							var accTok = apwGetAccessToken();
							endString = "id=" + endNum + "&n=" + numToAdd + "&t=" + accTok;	
						}
						else
						{
							endString = "id=" + endNum + "&n=" + numToAdd;
						}
						
						if(loadDataAdd.length > 0)
						{
							endString += "&" + loadDataAdd;	
						}
						
						var dataFuncResult = "";
						if(loadDataFunc.length > 0)
						{
							var loadDataFuncCall = loadDataFunc + "()";
							dataFuncResult = eval(loadDataFuncCall);
							
							if(dataFuncResult.length > 0)
							{
								endString += "&" + dataFuncResult;	
							}
						}
						//alert("Data going out from ScrollFlow: " + endString);
						jQuery.ajax({type: "POST", context:thas , url: urly, data:endString, dataType: "html", success: function(dat){
							var mainDatSel = $(this).data("mainDataSelector");
							var targEl = $(mainDatSel).data("targetElement");
							var loadFinFunc = $(mainDatSel).data("loadingBottomFinishDisplayFunction");
							var loadFinCall = loadFinFunc + "()";
							var ret99 = eval(loadFinCall);
							$('#' + targEl).append(dat);
							
							//Now get the last ID from the newly loaded items, and then pull the number from it...
							var scanEl = $(mainDatSel).data("scanSelector");
							var scanDat = $(mainDatSel).data("scanDataName");
							var curID = $(scanEl + ":last").data(scanDat);
							$(mainDatSel).data("endingNumber", curID);
							$(mainDatSel).data("trackHeight", $("#" + targEl).height());
							$(mainDatSel).data("ajaxLock", 0);
							
																										   }, error: function(obj, code){
								   var mainDatSel = $(this).data("mainDataSelector");
								   var failFunc = $(mainDatSel).data("loadBottomFailedFunction");
									var failCall = failFunc + "()";
									var ret16 = eval(failCall);
									$(mainDatSel).data("ajaxLock", 0);
																											   
																											   }});
					}
				}
			}
		}
		else
		{
			if(curScrollTop != lastScrollTop)
			{
				if (curScrollTop == 0)
				{
					//See if we should even care about the scroll position - is the content tall enough to scroll?
					if(tHeight > $(scrollElSel).outerHeight())
					{
						//We are at the top. Now load more data if we are open...
						var locky = $(datTrackerSel).data("ajaxLock");
						if(locky == 0)
						{
							var optTok = $(datTrackerSel).data("passToken");
							var urly = $(datTrackerSel).data("loadURL");
							var startNum = $(datTrackerSel).data("startingNumber");
							var numToAdd = $(datTrackerSel).data("numberToAdd");
							var loadDataAdd = $(datTrackerSel).data("loadDataAdditionalString");
							var loadDataFunc = $(datTrackerSel).data("loadDataPreparationFunction");
							
							//If we are already viewing the first available item, don't proceed...
							if(startNum <= 1)
							{
								//Do nothing - we are already at the start of the items.
							}
							else
							{
								//We are OK to proceed loading more items...
								$(datTrackerSel).data("ajaxLock", 1);
								
								//Call the loading display function...
								var loadDispFunc = $(datTrackerSel).data("loadingTopDisplayFunction");
								var loadDispCall = loadDispFunc + "()";
								var ret77 = eval(loadDispCall);
								
								//Go get the new items...
								var contRep = $(datTrackerSel).data("contextRepresentative");
								var thas = $('#' + contRep)[0];
								
								var endString = "";
								var realStartNum = 0;
								var realNumToAdd = 0;
								
								if((startNum - 1) < numToAdd)
								{
									realNumToAdd = (startNum - 1);
									realStartNum = 0;
								}
								else
								{
									realStartNum = (startNum - 1) - numToAdd;
									realNumToAdd = numToAdd;
								}
								
								if(optTok == "Y")
								{
									var accTok = apwGetAccessToken();
									endString = "id=" + realStartNum + "&n=" + realNumToAdd + "&t=" + accTok;	
								}
								else
								{
									endString = "id=" + realStartNum + "&n=" + realNumToAdd;
								}
								
								if(loadDataAdd.length > 0)
								{
									endString += "&" + loadDataAdd;	
								}
								
								var dataFuncResult = "";
								if(loadDataFunc.length > 0)
								{
									var loadDataFuncCall = loadDataFunc + "()";
									dataFuncResult = eval(loadDataFuncCall);
									
									if(dataFuncResult.length > 0)
									{
										endString += "&" + dataFuncResult;	
									}
								}
								//alert("Data going out from ScrollFlow: " + endString);
								jQuery.ajax({type: "POST", context:thas , url: urly, data:endString, dataType: "html", success: function(dat){
									var mainDatSel = $(this).data("mainDataSelector");
									var targEl = $(mainDatSel).data("targetElement");
									var loadFinFunc = $(mainDatSel).data("loadingTopFinishDisplayFunction");
									var loadFinCall = loadFinFunc + "()";
									var ret99 = eval(loadFinCall);
									$('#' + targEl).prepend(dat);
									
									//Now get the last ID from the newly loaded items, and then pull the number from it...
									var scanEl = $(mainDatSel).data("scanSelector");
									var scanDat = $(mainDatSel).data("scanDataName");
									var curID = $(scanEl + ":first").data(scanDat);
									$(mainDatSel).data("startingNumber", curID);
									$(mainDatSel).data("trackHeight", $("#" + targEl).height());
									$(mainDatSel).data("ajaxLock", 0);
									
																												   }, error: function(obj, code){
										   var mainDatSel = $(this).data("mainDataSelector");
										   var failFunc = $(mainDatSel).data("loadTopFailedFunction");
											var failCall = failFunc + "()";
											var ret16 = eval(failCall);
											$(mainDatSel).data("ajaxLock", 0);
																													   
																													   }});
							}
						}
					}
				}
			}
		}
	}
	else
	{
		//We don't want to do anything anymore. We must have been called after this handler was deallocated.
		//Note the lack of another setTimeout() call here. That effectively stops the processing for this handler.
	}								  											  
}

function apwScrollFlowDisplayLoaderBottomBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwScrollFlowDisplayLoaderBottomFinishBlank()
{
	//Do nothing. I'm just a placeholder.	
}

function apwScrollFlowLoadFailedBottomBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwScrollFlowDisplayLoaderTopBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwScrollFlowDisplayLoaderTopFinishBlank()
{
	//Do nothing. I'm just a placeholder.	
}

function apwScrollFlowLoadFailedTopBlank()
{
	//Do nothing. I'm just a placeholder.
}

(function( $ ) {
  $.fn.apwTimedAction = function(options) {
  	
	var settings = $.extend( {
	  'actionFunction' : 'apwTimedActionBlank',
	  'timeOutFunction' : 'apwTimedActionTimeOutBlank',
	  'killFunction' : 'apwTimedActionKillBlank',
	  'respawnFunction' : 'apwTimedActionRespawnBlank',
	  'trackingElement' : '',
	  'timeOut' : 0,
	  'timerHandle' : '',
	  'timeInterval' : 500
    }, options);
      
      var sets = settings;
	  
	  //Create data element in document
	  //Use random number appended to AppWorks function name, and check that it doesn't already exist
	  var datTrackerName = "apwTimedActionData" + (Math.floor(Math.random() * 10000));
	  var testRetrieval = $('#' + datTrackerName).data("presence");
	  
	  while(testRetrieval == "Y")
	  {
		  datTrackerName = "apwTimedActionData" + (Math.floor(Math.random() * 10000));
		  testRetrieval = $('#' + datTrackerName).data("presence");
	  }
	  //If an apwTimedAction already exists with the same handle, remove it.
	  //Duplicates should not exist with the same handle.
	  var existingCollection = $("span[apwtimerhandle=" + sets.timerHandle + "]");
	  if(existingCollection.length > 0)
	  {
		  var existDataHandle = "#" + $("span[apwtimerhandle=" + sets.timerHandle + "]").attr("id");
		  $(existDataHandle).remove();
	  }
	  $(document.body).append('<span id="' + datTrackerName + '" apwTimerHandle="' + sets.timerHandle + '"></span>');
	  var datTrackerSelectorName = "#" + datTrackerName;
	  
	  //Set data in the element so we can get it later
	  var elt = $(datTrackerSelectorName);
	  elt.data('actionFunction', sets.actionFunction);
	  elt.data('timeOutFunction', sets.timeOutFunction);
	  elt.data('killFunction', sets.killFunction);
	  elt.data('respawnFunction', sets.respawnFunction);
	  elt.data('trackingElement', sets.trackingElement);
	  elt.data('timeInterval', sets.timeInterval);
	  elt.data('timeOut', sets.timeOut);
	  elt.data('presence', 'Y');
	  elt.data('keepAlive', 'Y');
	  //alert(datTrackerSelectorName);
	  var trackElSel = "#" + sets.trackingElement;
	  
	  //Add apwID to the clickable element.
	  var curAPWID = parseInt($(trackElSel).attr("apwid"));
	  if(isNaN(curAPWID))
	  {
		  //There was not a number in the attribute. Assign one.
		  var newAPWID = Math.floor(Math.random() * 100000);
		  $(trackElSel).attr("apwid", newAPWID);
		  curAPWID = newAPWID;
	  }
	  var timely = new Date().getTime();
	  elt.data('startingTimerCount', timely);
	  setTimeout("apwTimedActionProcessInterval('" + datTrackerSelectorName + "')", sets.timeInterval);
	  
	  apwRegistryAddDataStore(trackElSel, curAPWID, datTrackerName);
  };
})( jQuery );

function apwTimedActionProcessInterval(DTSN)
{
	if($(DTSN).length > 0)
	{
		var keepMe = $(DTSN).data("keepAlive");
		if(keepMe == "Y")
		{
			var timeOutness = $(DTSN).data("timeOut");
			if(timeOutness > 0)
			{
				//The commander has set a valid timeout period. Now check if we are past it.
				var timeness = new Date().getTime();
				var starTime = $(DTSN).data("startingTimerCount");
				var diffTime = timeness - starTime;
				if(diffTime > timeOutness)
				{
					//Call the timeOut handler
					var timeOutFunc = $(DTSN).data("timeOutFunction");
					var timeOutCall = timeOutFunc + "()";
					var retTime = eval(timeOutCall);
				}
				else
				{
					var inty = $(DTSN).data("timeInterval");
					var acty = $(DTSN).data("actionFunction");
					
					var actCall = acty + "()";
					var ret1 = eval(actCall);
					
					setTimeout("apwTimedActionProcessInterval('" + DTSN + "')", inty);
				}
			}
			else
			{
				//This is cheap - we have a copy of the same code above...
				//But this works fine. We do NOT have a timeout set (the default is 0) and so we just run.
				var inty = $(DTSN).data("timeInterval");
				var acty = $(DTSN).data("actionFunction");
				
				var actCall = acty + "()";
				var ret1 = eval(actCall);
				
				setTimeout("apwTimedActionProcessInterval('" + DTSN + "')", inty);
			}
		}
		else
		{
			//Do nothing - We are killing the thread because the kill switch has been triggered.
		}
	}
}

function apwTimedActionKillProcessing(theHandle)
{
	var realDataHandle = "#" + $("span[apwtimerhandle=" + theHandle + "]").attr("id");
	$(realDataHandle).data("keepAlive","N");
	
	//Call the kill handler
	var killFunc = $(realDataHandle).data("killFunction");
	var killCall = killFunc + "()";
	var retKill = eval(killCall);
}

function apwTimedActionRespawnProcessing(theHandle)
{
	var realDataHandle = "#" + $("span[apwtimerhandle=" + theHandle + "]").attr("id");
	$(realDataHandle).data("keepAlive","Y");
	setTimeout("apwTimedActionProcessInterval('" + realDataHandle + "')", 100);
	
	//Call the respawn handler
	var spawnFunc = $(realDataHandle).data("respawnFunction");
	var spawnCall = spawnFunc + "()";
	var retSpawn = eval(spawnCall);
}

function apwTimedActionBlank()
{
	//Do nothing. I'm just a placeholder.
}

function apwTimedActionTimeOutBlank()
{
	//Do nothing. I'm just a placeholder.	
}

function apwTimedActionKillBlank()
{
	//Do nothing. I'm just a placeholder.	
}

function apwTimedActionRespawnBlank()
{
	//Do nothing. I'm just a placeholder.	
}

function AppWorks_Start()
{
	$(document).apwRegistry();
	apwFixBrowserIssues();
}