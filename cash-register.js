function checkCashRegister(price, cash, cid) {
  
  //Cash Drawer object
  function CashDrawer(status, change) {
    this.status = status;
    this.change = change;
  }

  //sum of cid
  function sumDrawer() {
    var sum = 0;
    for (var i = 0; i < cid.length; i++) {
      sum += cid[i][1]*100;
    }
    sum = Math.round(sum)/100;
    return sum;
  }
    var changeDue = cash - price;
    var sumDrawer = sumDrawer();
    var amountPaid = 0;
    var change = [];
    var cidMatch = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
  //start with largest bill and decrement

  //determine status
    var status = "OPEN";
    if (sumDrawer == changeDue) {
      status = "CLOSED";
    } else if (sumDrawer < changeDue) {
      status = "INSUFFICIENT_FUNDS";
    }

  if (sumDrawer >= changeDue) {
    for (var i = cid.length-1; i >= 0; i--) {
      
      if (parseFloat(changeDue) > 0) {
		//check if the unit is available and fits
		if (changeDue >= cidMatch[i] && cid[i][1] > 0) {
			//calculate payout
			amountPaid = Math.floor(changeDue / cidMatch[i]) * cidMatch[i];
			
			//Correct for shortages.
			if (amountPaid > cid[i][1]) {
				amountPaid = cid[i][1];
			}
        //subtract from change due
        changeDue = Math.round(changeDue*100 - amountPaid*100)/100;
        //check for exact change
        if (changeDue == 0 || cid[i][0] != "PENNY") {
		  //add to change array.
          change.push([cid[i][0], amountPaid]);
        } else {
          status = "INSUFFICIENT_FUNDS";
        }
      }
    }
    }
  }

    //create new object
    if (status === "CLOSED") {
      change = cid;
    }
    const drawer = new CashDrawer(status, change);
  return drawer;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);