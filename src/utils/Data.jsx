import { MdOutlineDesignServices } from "react-icons/md";
import { BsFillFileEarmarkTextFill, BsPcDisplay} from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaSass, FaNodeJs, FaAngular, FaPython, FaLinkedinIn, FaGithub } from "react-icons/fa";

import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

import TNW from '../assets/img/tnw.webp'
import Google from '../assets/img/google.png'
import Nike from '../assets/img/nike.png'
import Airbnb from '../assets/img/airbnb.png'
import ItNewAfrica from '../assets/img/it-news-africa.gif'
import Smart from '../assets/img/smart.png'


export const cardInfo = [
    {
        id: 1,
        icon: <BsFillFileEarmarkTextFill />,
        title: 'Business & Product Concept',
        description: ' Analyse business and product concepts at Start-up Workshops or Ongoing Projects´ Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit.'
    },
    {
        id: 2,
        icon: <BsPcDisplay/>,
        title: 'Web & Mobile Development',
        description: 'Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and native mobile languages.'
    },
    {
        id: 3,
        icon: <MdOutlineDesignServices />,
        title: 'UX & UI Design',
        description: 'Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience.'
    }

]

export const skills = [
    {
        id: 1,
        title: 'HTML',
        icon: <FaHtml5 className='skill__icon'/>,
    },
    {
        id: 2,
        title: 'CSS',
        icon: <FaCss3Alt className='skill__icon'/>,
    },
    {
        id: 3,
        title: 'SASS',
        icon: <FaSass className='skill__icon'/>,
    },
    {
        id: 4,
        title: 'Node JS',
        icon: <FaNodeJs className='skill__icon'/>,
    },
    {
        id: 5,
        title: 'ANGULAR',
        icon: <FaAngular className='skill__icon'/>,
    },
    {
        id: 6,
        title: 'PYTHON',
        icon: <FaPython className='skill__icon'/>,
    },
]

export const studiesCase = [
    {
        id: 1,
        img: TNW,
        alt: 'tnw'
    },
    {
        id: 2,
        img: Google,
        alt: 'google'
    },
    {
        id: 3,
        img: Nike,
        alt: 'nike'
    },
    {
        id: 4,
        img: Airbnb,
        alt: 'airbnb'
    },
    {
        id: 5,
        img: ItNewAfrica,
        alt: 'itNewAfrica'
    },
]

export const cardFooterInfo = [
    {
        id: 1,
        title: 'Get in touch with us',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
        buttonText: 'Hire Us'
    },
    {
        id: 2,
        title: 'Our Projects',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
        buttonText: 'Se Projects',
        img: Smart
    }
]

export const networks = [
    {
      id: 1,
      path: 'mailto:maguizap2307@gmail.com',
      title: 'Enviar un correo electrónico a Magali Sol Zapata',
      icon: <IoIosMail/>,
    },
    {
      id: 2,
      path: 'tel:+5491160200142',
      title: 'Llamar por teléfono a Magali Sol Zapata',
      icon: <FaPhoneVolume/>,
    },
    {
      id: 3,
      path: 'https://www.linkedin.com/in/magal%C3%AD-sol-zapata-444b88234/',
      title: 'Visitar el perfil de Magali Sol Zapata en Linkedin',
      icon: <FaLinkedinIn/>,
    },
    {
      id: 4,
      path: 'https://api.whatsapp.com/send?phone=5491160200142',
      title: 'Enviale un whatsapp a Magali Sol Zapata',
      icon: <IoLogoWhatsapp/>,
    },
    {
      id: 5,
      path: 'https://github.com/magalizap',
      title: 'Visitar el perfil de Magali Sol Zapata en Github',
      icon: <FaGithub/>,
    },
  ]
  