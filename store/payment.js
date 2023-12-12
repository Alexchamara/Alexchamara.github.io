document.addEventListener('alpine:init', () => {
    Alpine.store('payment', {
        payment_details: {
            card_number: '',
            card_holder: '',
            card_type: '',
            card_expiry: '',
            card_cvv: '',
        },

        updatePayment() {
            localStorage.setItem(
              "user_payment",
              JSON.stringify(this.$store.payment.payment_details)
            );
        },
        
        init() {
        this.payment_details =
          JSON.parse(localStorage.getItem("user_payment")) || this.payment_details;
        },
    })
})