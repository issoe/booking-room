import img1 from './picture/img1.jpg';
import img2 from './picture/img2.jpg';
import img3 from './picture/img3.jpg';
import img5 from './picture/img5.jpg';
import img4 from './picture/img4.png';
import room1 from './picture/room1.jpeg';
import room2 from './picture/room2.jpg';
import room3 from './picture/room3.jpg';

export const HotelsData = [
    {
        title: "HotelsRuby Hotel and Suite",
        png: img1,
        discription: "269 Lê Thánh Tôn, Quận 1, TP. HCM",
        id: 'HT51001'
    },
    {
        title: "Mường Thanh Luxury",
        png: img2,
        discription: "270 Võ Nguyên Giáp, TP. Đà Nẵng",
        id: 'HT43001'
    },
    {
        title: "Serene Hotel",
        png: img3,
        discription: "274 Võ Nguyên Giáp, TP. Đà Nẵng",
        id: 'HT43002'
    },
    {
        title: "Diamond Palace",
        png: img4,
        discription: "584 Âu Cơ, Tân Bình, TP. HCM",
        id: 'PL51002'
    },
    {
        title: "Marina Bay Resort and Spa",
        png: img5,
        discription: "115 Trần Phú, TP. Vũng Tàu",
        id: 'RS72001'
    }
];

export const RoomsData = [
    {
        roomamount: 20,
        png: room1,
        discription: "Normal room",
        price: 1000000,
        id: 'N1',
        hotelID: 'HT51001'
    },
    {
        roomamount: 10,
        png: room2,
        discription: "Vip room",
        price: 4000000,
        id: 'V1',
        hotelID: 'HT51001'
    },
    {
        roomamount: 10,
        png: room3,
        discription: "Suite room",
        price: 3000000,
        id: 'Sr',
        hotelID: 'HT43001'
    },
];