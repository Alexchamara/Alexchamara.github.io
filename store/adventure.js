document.addEventListener('alpine:init', () => {
  Alpine.store('adventure', {

    adventure_reservation: {
      adventure_type: "Scuba Diving",
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

    //js code need for store the data
    updateAdventure() {
      localStorage.setItem(
        "user_adventure_reservation",
        JSON.stringify(this.$store.adventure.adventure_reservation)
      );
    },

    init() {
      this.adventure_reservation =
        JSON.parse(localStorage.getItem("user_adventure_reservation")) || this.adventure_reservation;
    },

  })
})