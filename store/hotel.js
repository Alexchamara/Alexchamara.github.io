document.addEventListener('alpine:init', () => {
    Alpine.store('hotel', {
        hotelName: 'The Rimbario Royal Hotel',
        address: 'The Rimbario, 53, Srimath Kudarathwatta Mawatha, Kandy 20000, Sri Lanka.',
        phone: '+94 112 545 422',
        Inquiries: 'infor@therimbariohotel.com',
        Reservations: 'reservations@therimbariohotel.com',
        website: 'https://therimbariohotel.com',
        facebook: 'https://www.facebook.com/therimbariohotel',
        instagram: 'https://www.instagram.com/therimbariohotel',
        cover: './images/Home/exciting_imgs/room.webp',

        check_dates: {
            checkIn: '',
            checkOut: '',
            promo_code: '',
        },

        promo_code: {
            code: 'Promo123',
            discount: 5,
        },

        updateHotel() {
            localStorage.setItem(
              "user_check_dates",
              JSON.stringify(this.$store.hotel.check_dates)
            );
        },
        
        init() {
        this.check_dates =
          JSON.parse(localStorage.getItem("user_check_dates")) || this.check_dates;
        },
        
    })
})