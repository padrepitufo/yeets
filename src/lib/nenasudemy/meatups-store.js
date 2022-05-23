//putu onu pausu 

import { writable } from 'svelte/store';

const meatups = writable([
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 5 boring hours!',
      description:'In this MeatUp, our best, but boring, experts will be teaching the basics of code!',
      imageUrl:'https://i.pinimg.com/originals/1f/5a/2a/1f5a2ae53ad9cc5c4051d34b79b12321.jpg',
      address: '69th Geek Road, 21210 Your Moms House',
      contactEmail: 'XxcodergeekxX1277@test.com',
      isFavorite: false
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: "Let\'s go for some swimming!",
      description: 'We will be teaching how to swim, and some fun games! No drowning allowed!!',
      imageUrl:'https://i.pinimg.com/564x/df/8f/27/df8f2774d1ec45a0c2ff43647103e947.jpg',
      address: '96th Slippy St. , 12345 Artic Ocean',
      contactEmail: 'AquaMansMothersHusbandsWife@test.com',
      isFavorite: false
    }
  ]);
  
  const customMeatupsStore = {
    subscribe: meatups.subscribe,
    addMeatup: meatupData => {
      const newMeatup = {
        ...meatupData,
        id: Math.random().toString(),
        isFavorite: false
      };
      meatups.update(items => {
        return [newMeatup, ...items];
      });
    },
    updateMeatup: (id, meatupData) => {
      meatups.update(items => {
        const meatupIndex = items.findIndex(i => i.id === id);
        const updatedMeatup = { ...items[meatupIndex], ...meatupData };
        const updatedMeatups = [...items];
        updatedMeatups[meatupIndex] = updatedMeatup;
        return updatedMeatups;
      });
    },
    removeMeatup: (id) => {
      meatups.update(items => {
        return items.filter(i => i.id !== id);
      });
    },
    toggleFavorite: id => {
      meatups.update(items => {
        const updatedMeatup = { ...items.find(m => m.id === id) };
        updatedMeatup.isFavorite = !updatedMeatup.isFavorite;
        const meatupIndex = items.findIndex(m => m.id === id);
        const updatedMeatups = [...items];
        updatedMeatups[meatupIndex] = updatedMeatup;
        return updatedMeatups;
      });
    }
  };
  
  export default customMeatupsStore;