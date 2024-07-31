import dog from './Images/dog.png'
import cat from './Images/cat.png'
import bear from './Images/bear.png'
import fox from './Images/fox.png'

import mashroom from './Images/mashroom.png'
import mashroom1 from './Images/mashroom1.png'
import mashroom2 from './Images/mashroom2.png'
import head from './Images/head.png'

import human from './Images/human.png'
import human1 from './Images/human1.png'
import human2 from './Images/human2.png'
import robot from './Images/robot.png'

const trending = [
    {
        id: 1,
        mainImg: dog,
        secondImg: cat,
        thirdImg: bear,
        title: 'DSGN Animals',
        titleImg: fox,
        statistic: 1025,
        titleImgName: 'Mr Fox'
    },
    {
        id: 2,
        mainImg: mashroom,
        secondImg: mashroom1,
        thirdImg: mashroom2,
        statistic: 1025,
        title: 'Magic Mushrooms',
        titleImg: head,
        titleImgName: 'Shroomie'
    }, {
        id: 3,
        mainImg: human,
        secondImg: human1,
        thirdImg: human2,
        statistic: 1025,
        title: 'Disco Machines',
        titleImg: robot,
        titleImgName: 'BeKind2Robots'
    }
]
//================================================================================


//================================================================================
import keepitreal from './Images/keepitreal.png'
import digilab from './Images/digilab.png'
import gravityone from './Images/gravityone.png'
import jaunie from './Images/jaunie.png'
import bluewhale from './Images/bluewhale.png'
import robotica from './Images/robotica.png'
import animakid from './Images/animakid.png'
import dotgu from './Images/dotgu.png'
import ghiblier from './Images/ghiblier.png'

const creators = [
    {
        id: 1,
        img: keepitreal,
        title: 'Keepitreal',
        price: 34.53
    },
    {
        id: 2,
        img: digilab,
        title: 'DigiLab',
        price: 34.53
    },
    {
        id: 3,
        img: gravityone,
        title: 'GravityOne',
        price: 34.53
    },
    {
        id: 4,
        img: jaunie,
        title: 'Juanie',
        price: 34.53
    },
    {
        id: 5,
        img: bluewhale,
        title: 'BlueWhale',
        price: 34.53
    },
    {
        id: 6,
        img: fox,
        title: 'Mr Fox',
        price: 34.53
    },
    {
        id: 7,
        img: head,
        title: 'Shroomie',
        price: 34.53
    },
    {
        id: 8,
        img: robotica,
        title: 'Robotica',
        price: 34.53
    },
    {
        id: 9,
        img: robot,
        title: 'RustyRobot',
        price: 34.53
    },
    {
        id: 10,
        img: animakid,
        title: 'AnimeKid',
        price: 34.53
    },
    {
        id: 11,
        img: dotgu,
        title: 'Dotgu',
        price: 34.53
    },
    {
        id: 12,
        img: ghiblier,
        title: 'Ghiblier',
        price: 34.53
    }
]
//================================================================================


//================================================================================
import art from './Images/art.png'
import collectibles from './Images/collectibles.png'
import music from './Images/music.png'
import photography from './Images/photography.png'
import video from './Images/video.png'
import utility from './Images/utility.png'
import sport from './Images/sport.png'
import virtual from './Images/virtual.png'

import PaintBrush from './Images/PaintBrush.png'
import Swatches from './Images/Swatches.png'
import MusicNotes from './Images/MusicNotes.png'
import Camera from './Images/Camera.png'
import VideoCamera from './Images/VideoCamera.png'
import MagicWand from './Images/MagicWand.png'
import Basketball from './Images/Basketball.png'
import Planet from './Images/Planet.png'

const categories = [
    {
        id: 1,
        img: art,
        icon: PaintBrush,
        title: 'Art'
    },
    {
        id: 2,
        img: collectibles,
        icon: Swatches,
        title: 'Collectibles'
    },
    {
        id: 3,
        img: music,
        icon: MusicNotes,
        title: 'Music'
    },
    {
        id: 4,
        img: photography,
        icon: Camera,
        title: 'Camera'
    },
    {
        id: 5,
        img: video,
        icon: VideoCamera,
        title: 'Video'
    },
    {
        id: 6,
        img: utility,
        icon: MagicWand,
        title: 'Utility'
    },
    {
        id: 7,
        img: sport,
        icon: Basketball,
        title: 'Sport'
    },
    {
        id: 8,
        img: virtual,
        icon: Planet,
        title: 'Virtual Worlds'
    }
]
//================================================================================


//================================================================================
import galaxy from './Images/galaxy.png'
import life from './Images/life.png'
import astro from './Images/astro.png'
import moondancer from './Images/moondancer.png'
import nebulakid from './Images/nebulakid.png'
import spaceone from './Images/spaceone.png'

const discover = [
    {
        id: 1,
        image: galaxy,
        smallImg: moondancer,
        title: 'Distant Galaxy',
        name:'MoonDancer',
        price: 1.63,
        bid: 0.33
    },
    {
        id: 2,
        image: life,
        smallImg: nebulakid,
        title: 'Life On Edena',
        name:'NebulaKid',
        price: 1.23,
        bid: 0.55
    },
    {
        id: 3,
        image: astro,
        smallImg: spaceone,
        title: 'Distant Galaxy',
        name:'Spaceone',
        price: 2.50,
        bid: 0.56
    }
]


export { trending, creators, categories , discover }
