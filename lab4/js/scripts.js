//GLOBAL VARIABLES
let customerType;
let invoiceTotal;
let discountPercent;
let discountAmount;
let newInvoiceTotal;


//DISPLAY BASIC MESSAGE TO THE USER
document.write('<h2>Welcome to the Invoice Application</h2>');

//ASK THE USER FOR THEIR CUSTOMER TYPE
customerType = prompt('Enter your customer type (r/w)');

//ASK THE USER FOR THE INVOICE TOTAL
invoiceTotal = prompt('Enter the invoice total');

//CHECK IF THE USER IS RETAIL OR WHOLESALE
if(customerType === 'r') {
    //CHECK RETAIL TOTAL
    if (invoiceTotal >= 1000) {
        discountPercent = .10;       
    } 
} else if (customerType === 'w') {
    //CHECK WHOLESALE TOTAL
    if (invoiceTotal >= 5000) {
        discountPercent = .25;
        
    } else if (invoiceTotal >= 2500) {
        discountPercent = .20;
    } else if (invoiceTotal >= 1000) {
        discountPercent = .15;
    } else {
        discountPercent = .10;
    }
} else {
    document.write('You entered an invalid customer type.');
}

//PERFORM CALCULATIONS
discountAmount = invoiceTotal * discountPercent; // example(5000*.25 = 1250)
newInvoiceTotal = invoiceTotal - discountAmount; // example(5000-1250 = 3750)

//DISPLAY RESULTS
if (customerType === 'r') {
    document.write('<strong>Retail Customer</strong>');
} else {
    document.write('<strong>Wholesale customer</strong>')
}

document.write(`Invoice total: $${invoiceTotal}<br>`);
document.write(`Discount percent: ${discountPercent * 100}%<br>`);
document.write(`Discount amount: $${discountAmount.toFixed(2)}<br>`);
document.write(`Grand total $${newInvoiceTotal}`);