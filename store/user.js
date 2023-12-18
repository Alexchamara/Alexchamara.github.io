document.addEventListener('alpine:init', () => {
  Alpine.store('user', {

    profile: {
      titel: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      contry: '',
      spacial_request: '',
    },

    reservation: {
      //Accomodation section........................
      hotel: 'The Rimbario Royal Hotel',
      promo_code: '',
      check_in: "",
      check_out: "",
      type_of_room: '',
      singleRoomsNum: 0,
      doubleRoomsNum: 0,
      tripleRoomsNum: 0,
      adults: 0,
      children: 0,
      infant: 0,
      extra_bed: 0,
      pool_view: false,
      garden_viwe: false,
      wifi: false,

      // final calculations
      total_cost: 0,
      final_accommodation_cost: 0,
      discount_percentage: 0,
      total_discount: 0,
      final_adventure_cost: 0,
      final_total: 0,
    },

    adventure_reservation: {
      adventure_type: "",
      adventure_date: "",
      adventure_time: "",
      ad_local_adults_num: 0,
      ad_local_children_num: 0,
      ad_foreign_adults_num: 0,
      ad_foreign_children_num: 0,
      guide_adults: 0,
      guide_children: 0,
      ad_spacial_request: '',
    },

    payment: {
      card_number: null,
      card_holder: null,
      card_type: null,
      card_expiry: {
        month: null,
        year: null,
      },
      card_cvv: null,
    },

    updateUser() {
      localStorage.setItem(
        "user_profile",
        JSON.stringify(this.$store.user.profile)
      );
      localStorage.setItem(
        "user_reservation",
        JSON.stringify(this.$store.user.reservation)
      );
      localStorage.setItem(
        "user_payment_details",
        JSON.stringify(this.$store.user.payment)
      );
      localStorage.setItem(
        "user_adventure_reservation",
        JSON.stringify(this.$store.user.adventure_reservation)
      );
    },


    init() {
      this.profile =
        JSON.parse(localStorage.getItem("user_profile")) || this.profile;
      this.reservation =
        JSON.parse(localStorage.getItem("user_reservation")) || this.reservation;
      this.payment =
        JSON.parse(localStorage.getItem("user_payment_details")) || this.payment;
      this.adventure_reservation =
        JSON.parse(localStorage.getItem("user_adventure_reservation")) || this.adventure_reservation;
    }
  });
});
