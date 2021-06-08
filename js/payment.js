var FUNDING_SOURCES = [
  paypal.FUNDING.VENMO,
  paypal.FUNDING.CREDIT,
  paypal.FUNDING.CARD,
];
let order_price=0;
$('input[name=twetts]').change(function (e) { 
    let price = $(this).attr('price');
    order_price=price;
});
// Loop over each funding source / payment method
FUNDING_SOURCES.forEach(function(fundingSource) {
  // Initialize the buttons
  var button = paypal.Buttons({
    fundingSource: fundingSource,

    style: {
      shape: 'rect',
      label: 'pay',
      height: 50,
    },
    commit: true,
    // Set up the transaction
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{ amount: { value: order_price } }],

        application_context: {
          shipping_preference: 'NO_SHIPPING',
        },
      });
    },

    // Finalize the transaction
    onApprove: function(data_) {
      console.log(data_);
      console.log(data_.orderID);
      console.log(data_.payerID);

      $.ajax({
        url: '/payment',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data_.orderID),
        success: function(data) {
          console.log(data);
          window.location = '/reports';
        },
      });
    },
  });

  // Check if the button is eligible
  if (button.isEligible()) {
    // Render the standalone button for that funding source
    button.render('#paypal-button-container');
  }
});
