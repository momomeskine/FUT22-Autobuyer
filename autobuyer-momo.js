var moneySound = new Audio();
moneySound.src = "data:audio/mpeg;base64,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"
 
$(document.head).append(`
  <style>
   
 
  .ut-pinned-list-container.ut-content-container {
    width: 53%;
    float: left;
    display:inline-block;
  }
 
  #tm-ui-zone {
    color: #0000FF;
    background: #0f0f1d;
    height: 800px;
    font-size: 1.3em;
    padding: 0.2em
  }
 
  .SearchWrapper button {
    padding: 5px;
    margin: 5px;
  }
 
  #tm-ui-zone input {
    font-size: .6em;
  }
  #tm-rpm {
    width:2em;
  }
  #tm-req-countdown {
    width:3em;
  }
  #tm-maxbid {
    width:8em;
  }
 
  #progressTransferMarket {
    width: 98%;
    height: 70%;
    color: #0000FF;
    background:#000000;
    font-size: .8em;
  }
 
  #unassigned-zone button {
    background: #000000;
    margin-right: 1em;
    padding: .2em;
    font-size: .8em;
  }
 
  .ut-market-search-filters-view {
    display: inline;
  }
 
 
  #ut-search-wrapper {
    display: inline-block;
  }
  </style>
`);
 
var log = "C LE BOT DE MOMO LES REUFS GO SNIPER TOUT LES JOUEURS\n";
;
$(getAppMain().getRootViewController().getPresentedViewController().getCurrentViewController().getCurrentController()._view.__root).append('<article class="SearchWrapper" id="tm-ui-zone" style="display:inline-block;float:left;width: 45%; left: 75%">List?<input type="checkbox" id = "auto_list_checkbox" name="auto_list_checkbox" value="0" /><button type="button" onclick="clear_transfer_list()" id="tm-clear" style="float:left;display:block;width:30%;text-align:center;background:#ccc;">Clear TL</button>RPM: <select id="rpm-selector"><option value="1">10<option value="1.5">20<option value="2">30</option><option value="2.5">40</option></option></select><br /><br />Min List Price: <input type="text" id = "min_list_price" value="0" />Max List Price: <input type="text" id = "max_list_price" value="0" /><br />Rating Threshold for Listing: <input type="text" id="rating-threshold" value = "99" /><textarea id="progressTransferMarket">' + log + '</textarea><button type="button" onclick="button_clear_click()" id="tm-clear" style="float:left;display:block;width:30%;text-align:center;background:#ccc;">Clear</button><button type="button" onclick="button_start_click()" id="tm-start" style="float:left;display:block;width:30%;text-align:center;background:#ccc;">Start</button><button type="button" onclick="button_stop_click()" id="tm-stop" style="float:left;display:block;width:30%;text-align:center;background:#ccc;">Stop</button></article>');
 
var scrollLogToBottom = function scrollLogToBottom() {
  var log = $('#progressTransferMarket');
  if (log.length) {
    log.scrollTop(log[0].scrollHeight - log.height());
  }
};
 
scrollLogToBottom();
 
var addMessage = function addMessage(msg) {
  var oldLog = log;
  var n = new Date();
  var m = n.getMinutes();
  m = m < 10 ? "0" + m : m;
  var s = n.getSeconds();
  s = s < 10 ? "0" + s : s;
  var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
  var timestamp = `${n.getHours()}:${m}:${s}`;
  var message = "[" + timestamp + "] " + msg + "\n";
  log = oldLog + message;
  $('#progressTransferMarket').val(log);
  scrollLogToBottom();
};
 
 
 
function randomizeMaxPrice() {
  var increment = (Math.round(Math.random() * 10) * 1000)  * (Math.random() > 0.5 ? 100 : (Math.random()> 0.5 ? 10 : 1));
  var randomPrice = Math.random() > 0.5 ? 14000000 + increment : 14000000 - increment;
  return randomPrice;
}
 
function formatAuctionItem(itemData) {
  return `${itemData.rating} ${itemData._staticData.name}`;
}
 
 
function button_start_click() {
  if (abizzle_running === true) {
    addMessage("Already looking!");
  } else {
    abizzle_running = true;
    addMessage("Starting Engine...");
    addMessage("Searching Now.");
    trybuy();
  }
}
 
function button_stop_click() {
  if (abizzle_running === false) {
    addMessage("Already Deactivated");
  } else {
    abizzle_running = false;
  }
}
 
function getDelay(rpm) {
  var intv = (5/rpm);
  var tolerance = intv/4 * (Math.random() * 0.75);
  var direction = Math.random() > 0.5 ? 1 : -1;
  var delay = Math.round(intv + (tolerance * direction));
  return delay * 1000;
};
/**
class PinEvent {
  static sendPageView(pageId, delay = 2000) {
    return new Promise(resolve =>
      setTimeout(() => {
        services.PIN.sendData(enums.PIN.EVENT.PAGE_VIEW, {
          type: PIN_PAGEVIEW_EVT_TYPE,
          pgid: pageId,
        });
        resolve();
      }, delay));
  }
}**/
 
 
function clear_transfer_list() {
  services.Item.clearSoldItems().observe(this, function _clearSoldComplete(t, response) {
    t.unobserve(this),
    addMessage("Transfer List Cleared")
  });
}
 
function update_num_tl() {
  var numtl;
  services.Item.requestTransferItems().observe(this, function _onRequestItemsComplete(t, response) {
    t.unobserve(this);
    numItemsOnTransferList = response.data.items.length;
    addMessage("Number on the Transfer List: " + numItemsOnTransferList);
  });
}
 
function findTargets(searchCriteria) {
  services.Item.clearTransferMarketCache();
    return new Promise((resolve, reject) => {
      services.Item.searchTransferMarket(searchCriteria, 1).observe(
        this,
        function (obs, res) {
          if(res.status ===458) {
            sirenSound.play();
            abizzle_running = false;
            addMessage("Captcha Required. Refresh Page.");
          }
          //addMessage("search request status: " + res.status)
          if (!res.success) {
            obs.unobserve(this);
            reject(res.status);
          } else {
            //addMessage("Successfully searched");
            resolve(res.data.items);
          }
        },
      );
    });
  };
 
 
var ABIZZLE_RPM = parseFloat(document.getElementById("rpm-selector").value);
var abizzle_running = false;
var successfulBuy = false;
var duration = 3600;
var numItemsOnTransferList;
update_num_tl();
var maxAuctionsAllowed = 100;
 
 
var minBids = [150,200,250,300,350,400,450,500,550,600];
var minBuys = [200,250,300,350,400,450,500,550,600,650];
 
//var minBids = [150,200,250,300];
//var minBuys = [200,250,300,350];
minBuys.reverse()
numRandoCrit = minBids.length; 
counter = 0;
 
async function trybuy() {
    if (abizzle_running === false) {
      addMessage("Stopped")
      counter = 0;
      return;
    } else {
      counter += 1;
 
      var checkBox = document.getElementById("auto_list_checkbox");
      //addMessage("Auto list checked?: " + checkBox.checked);
      var minPriceText = document.getElementById("min_list_price");
      var maxPriceText = document.getElementById("max_list_price");
      var ratingThresholdText = document.getElementById("rating-threshold");
      //addMessage("Min List Price: " + minPriceText.value);
      //addMessage("Max List Price: " + maxPriceText.value);
 
      //if (checkBox.checked === true){
      //  addMessage("Checked");
      //} else {
      //  addMessage("Unchecked");
      //}
      //addMessage("Counter: " + counter);
 
      crit = getAppMain().getRootViewController().getPresentedViewController().getCurrentViewController().getCurrentController()._viewmodel.searchCriteria; 
      buyprice = crit.maxBuy;
      crit.maxBid = randomizeMaxPrice();
      crit.minBid = minBids[counter-1];
      crit.minBuy = minBuys[counter-1];
 
      //addMessage("crit.minBid: " + crit.minBid);
      //addMessage("crit.minBuy: " + crit.minBuy);
 
      items = await findTargets(crit);
 
      if (typeof(items) === "undefined") {
        addMessage("Mission failed, no searches found");
      } else {
        if (items.length > 0) {
          addMessage("Results Found: " + items.length);
          //addMessage("Should be trying to buy: " + items[0].getAuctionData().tradeId);
          addMessage(`expires ${items[0].getAuctionData().expires}`);
          itemtobuy = items.reverse()[0];
 
          if(!itemtobuy.getAuctionData().isWon()) {
            services.Item.bid(itemtobuy, itemtobuy.getAuctionData().buyNowPrice).observe(this, function _eBidComplete(e,t) {
              e.unobserve(this);
  
              addMessage("VBuy request status: " + t.status)
 
              if (t.status === 458) {
                sirenSound.play();
                abizzle_running = false;
                addMessage("You've Been Caught.");
              } else if (t.success){
                if(itemtobuy.getAuctionData().isWon()) {
                  //addMessage("I GOT ITTTT");
                  //addMessage($(itemtobuy.getAuctionData().tradeId));
                  moneySound.play();
                  var successfulBuyMsg = `${formatAuctionItem(itemtobuy)} bought for ${itemtobuy.getAuctionData().buyNowPrice}`;
                  addMessage(successfulBuyMsg);
 
                  if (checkBox.checked === true) {
                    setTimeout(function() {
                      services.Item.requestUnassignedItems().observe(this, function _onRequestUnassignedComplete(t, response) {
                        if (response.success & response.data.items.length > 0) {
                            if (response.data.items[0].rating < parseFloat(ratingThresholdText.value)) {
                                services.Item.list(response.data.items[0],parseFloat(minPriceText.value),parseFloat(maxPriceText.value),duration).observe(this, function _onListComplete(t, response) {
                                    addMessage("Successfully Listed bought item for " + minPriceText.value + "/" + maxPriceText.value);
                                    addMessage("Number on the Transfer List: " + numItemsOnTransferList);
                                  });
                            } else {
                                services.Item.move(response.data.items[0], enums.FUTItemPile.TRANSFER).observe(this, function _eMoveComplete(i, response) {
                                    addMessage(`${formatAuctionItem(resultItemsFactory[0])} sent to transfer list`);
                                });
                            }
                            numItemsOnTransferList += 1;
                        }
                      });
                    }, 3000);
                  }
                } else {
                  addMessage(`I fucking missed ${formatAuctionItem(itemtobuy)} for ${itemtobuy.getAuctionData().buyNowPrice}`);
                }
              } else {
                addMessage(`I missed ${formatAuctionItem(itemtobuy)} for ${itemtobuy.getAuctionData().buyNowPrice}`);
              }
            });
          } else {
            addMessage("Relax I'm trying,");
          }
        } else {
          addMessage("No Result");
        }
      }
  }
 
if (counter % numRandoCrit === 0) {
  counter = 0;
}
 
ABIZZLE_RPM = parseFloat(document.getElementById("rpm-selector").value);
//addMessage("RPM: " + ABIZZLE_RPM);
var delay = getDelay(ABIZZLE_RPM);
//addMessage("Delay will be " + delay/1000 + " seconds");
setTimeout(trybuy, delay);
};
