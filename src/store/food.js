import { defineStore } from "pinia";

export const useFoodStore = defineStore({
  id: "food",
  state: () => ({
    foods: [
      { 
        name: 'บุฟเฟต์อาหาร 1 คน', 
        price: 199, 
        type: 'food',
        image: 'https://i.pinimg.com/originals/2b/12/81/2b1281df17cd713b0435d26af6be1d8f.jpg' 
      },
      { 
        name: 'น้ำซุปหมาล่า', 
        price: 30, 
        type: 'sauce',
        image: 'https://static.wixstatic.com/media/0b8d25_3778946f01a5436f87dc2126a45b0e54~mv2.png' 
      },
      { 
        name: 'น้ำซุปต้มยำ', 
        price: 30, 
        type: 'sauce',
        image: 'https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-tom-yum-soup-sour-spicy-soup-with-shrimp-asian-food-png-image_12978332.png' 
      },
      { 
        name: 'น้ำจิ้มตีลังกาได้', 
        price: 30, 
        type: 'sauce',
        image: 'https://png.pngtree.com/png-vector/20231127/ourmid/pngtree-chinese-spicy-sauce-clipping-path-sauce-png-image_10718734.png' 
      },
      { 
        name: 'น้ำจิ้มพิเศษ', 
        price: 50, 
        type: 'sauce',
        image: 'https://png.pngtree.com/png-clipart/20231206/original/pngtree-chinese-spicy-sauce-clipping-path-photo-png-image_13782465.png' 
      },
      { 
        name: 'ข้าวผัดหมู', 
        price: 50, 
        type: 'food',
        image: 'https://www.pngitem.com/pimgs/m/536-5361711_-png-transparent-png.png' 
      },
      { 
        name: 'ผัดไทยกุ้งสด', 
        price: 50, 
        type: 'food',
        image: 'https://png.pngtree.com/png-clipart/20231017/original/pngtree-pad-thai-noodles-png-image_13339546.png' 
      },
      { 
        name: 'ข้าวผัดกุ้ง', 
        price: 50, 
        type: 'food',
        image: 'https://png.pngtree.com/png-vector/20240315/ourlarge/pngtree-thai-fried-ricewith-shrimp-fried-shrimp-dish-png-image_11852376.png' 
      },
      { 
        name: 'ข้าวผัดปู', 
        price: 50, 
        type: 'food',
        image: 'https://img.wongnai.com/p/400x0/2019/03/12/1cf6ff2e50874932a18c9cc117aa8a6b.jpg' 
      },
      { 
        name: 'น้ำเปล่า', 
        price: 10, 
        type: 'drink',
        image: 'https://png.pngtree.com/png-clipart/20231126/original/pngtree-opt-for-fresh-and-purified-drinking-water-for-picture-image_13285649.png' 
      },
      { 
        name: 'เบียร์', 
        price: 50, 
        type: 'drink',
        image: 'https://www.phuketseevalee.com/admin/images/product/singha.png' 
      },
      { 
        name: 'น้ำแข็ง', 
        price: 5, 
        type: 'drink',
        image: 'https://png.pngtree.com/png-clipart/20240131/original/pngtree-ice-bucket-empty-photo-png-image_14193298.png' 
      },
    ]
  }),
  actions: {

  }
});
