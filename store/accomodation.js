// function reservationForm() {
//   return {
//     selectedRoom: '',
//     accommodation: Alpine.store('accommodation'),
//     getPrice(roomType) {
//       const room = this.accommodation.rooms.find(room => room.type === roomType);
//       return room ? room.price : 0;
//     },
//     getRoomPhoto(roomType) {
//       const room = this.accommodation.rooms.find(room => room.type === roomType);
//       return room ? room.photo : '';
//     },
//   };
// }

// document.addEventListener('alpine:init', () => {
//   Alpine.store('accommodation', {
//     rooms: [
//       { type: 'Single Room', price: 25000, photo: 'images/Rooms/single.jpg' },
//       { type: 'Double Room', price: 35000, photo: 'path-to-double-room-photo.jpg' },
//       { type: 'Triple Room', price: 40000, photo: 'path-to-triple-room-photo.jpg' },
//     ],

//     room_types: {
//       single_room: 'Single Room',
//       double_room: 'Double Room',
//       triple_room: 'Triple Room',
//     },
    

//   });
// });

