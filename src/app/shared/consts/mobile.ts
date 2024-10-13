import { Imobile } from "../models/mobile";

export let mobileProducts:Array<Imobile>= [
    {
        id: 1,
        name: 'iPhone 13',
        brand: 'Apple',
        price: 59999,
        actualprice:65999,
        image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
        isAvailable: true,
        rating: 4.9,
        noOfItem: 50,
        getDiscount:9,
        specifications: {
          ram: '4 GB',
          storage: '128 GB',
          display: '6.1 inch Super Retina XDR',
          camera: '12MP dual-camera',
          battery: '3240 mAh'
        }
      },
      {
        id: 2,
        name: 'Samsung Galaxy S21',
        brand: 'Samsung',
        price: 30899,
        actualprice:33999,
        image: '',
        isAvailable: false,
        rating: 4.5,
        noOfItem: 0,
        getDiscount:9,
        specifications: {
          ram: '8 GB',
          storage: '128 GB',
          display: '6.2 inch Dynamic AMOLED',
          camera: '64MP + 12MP + 12MP',
          battery: '4000 mAh'
        }
      },
      {
        id: 3,
        name: 'Google Pixel 6',
        brand: 'Google',
        price: 6499,
        actualprice:9999,
        getDiscount:35,
        image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png',
        isAvailable: false,
        rating: 3.9,
        noOfItem: 0,
        specifications: {
          ram: '8 GB',
          storage: '128 GB',
          display: '6.4 inch OLED',
          camera: '50MP + 12MP',
          battery: '4614 mAh'
        }
      },
      {
        id: 4,
        name: 'OnePlus 9 Pro',
        brand: 'OnePlus',
        price: 11499,
        actualprice:12499,
        image: '',
        isAvailable: true,
        rating: 2.9,
        noOfItem: 5,
        getDiscount:8,
        specifications: {
          ram: '12 GB',
          storage: '256 GB',
          display: '6.7 inch Fluid AMOLED',
          camera: '48MP + 50MP + 8MP + 2MP',
          battery: '4500 mAh'
        }
      },
      {
        id: 5,
        name: 'Xiaomi Mi 11',
        brand: 'Xiaomi',
        price: 9999,
        actualprice:11499,
        getDiscount:13,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
        isAvailable: true,
        rating: 4.8,
        noOfItem: 9,
        specifications: {
          ram: '8 GB',
          storage: '128 GB',
          display: '6.81 inch AMOLED',
          camera: '108MP + 13MP + 5MP',
          battery: '4600 mAh'
        }
      },
      {
        id: 6,
        name: 'Sony Xperia 1 III',
        brand: 'Sony',
        price: 9999,
        actualprice:11499,
        image: '',
        isAvailable: true,
        rating: 2.5,
        noOfItem: 10,
        getDiscount:13,
        specifications: {
          ram: '12 GB',
          storage: '256 GB',
          display: '6.5 inch OLED',
          camera: '12MP triple-camera',
          battery: '4500 mAh'
        }
      },
      {
        id: 7,
        name: 'LG Velvet',
        brand: 'LG',
        price: 9999,
        actualprice:11499,
        image: '',
        isAvailable: false,
        rating: 1.5,
        noOfItem: 0,
        getDiscount:8,
        specifications: {
          ram: '6 GB',
          storage: '128 GB',
          display: '6.8 inch P-OLED',
          camera: '48MP + 8MP + 5MP',
          battery: '4300 mAh'
        }
      },
      {
        id: 8,
        name: 'Huawei P40 Pro',
        brand: 'Huawei',
        price: 11499,
        actualprice:12499,
        image: '',
        isAvailable: true,
        rating: 3.5,
        noOfItem: 5,
        getDiscount:8,
        specifications: {
          ram: '8 GB',
          storage: '256 GB',
          display: '6.58 inch OLED',
          camera: '50MP + 40MP + 12MP',
          battery: '4200 mAh'
        }
      },
      {
        id: 9,
        name: 'Motorola Moto G Power',
        brand: 'Motorola',
        price: 2428,
        actualprice:2999,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
        isAvailable: true,
        rating: 4.5,
        noOfItem: 2,
        getDiscount:19,
        specifications: {
          ram: '4 GB',
          storage: '64 GB',
          display: '6.6 inch IPS LCD',
          camera: '48MP + 2MP + 2MP',
          battery: '5000 mAh'
        }
      },
      {
        id: 10,
        name: 'Nokia 8.3',
        brand: 'Nokia',
        price: 7034,
        actualprice:9999,
        image: '',
        isAvailable: true,
        rating: 4.5,
        noOfItem: 1,
        getDiscount:8,
        specifications: {
          ram: '8 GB',
          storage: '128 GB',
          display: '6.81 inch IPS LCD',
          camera: '64MP + 12MP + 2MP + 2MP',
          battery: '4500 mAh'
        }
      }
  
]