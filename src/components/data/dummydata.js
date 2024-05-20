import { PieChart, Code, BarChart,AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, YouTube, GitHub, Settings, CropRotate, ViewInAr } from "@mui/icons-material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGithub, faGithubAlt, faHtml5, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },

  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "Hello I'M",
    name: "Mahmoud ElSheikh",
    post: "Front-end Devoloper",
    design: "UI / UX",
    desc: " I'am detail-oriented and innovative Front-End Developer with over [1] years of experience in designing and implementing dynamic, user-friendly web applications.",
  },
]
export const about = [
  {
    desc: "I'am Proficient in modern web technologies including HTML5, CSS3, JavaScript, and React, with a strong focus on responsive design and user experience. Adept at collaborating with cross-functional teams to deliver high-quality software solutions. Passionate about staying updated with the latest industry trends and continuously improving technical skills.",
    desc1: `Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript
    Frameworks/Libraries: React
    Tools/Platforms: Git,npm, 
    Design: Responsive Web Design, UI/UX Principles, Figma, Adobe XD
    Version Control: Git, GitHub, GitLab
    Other: RESTful APIs, AJAX, JSON, SEO best practices`,
    cover: "./images/1.jpg",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Creative Design",
    desc: "I'am Creative and detail-oriented Front-End experience in blending technical expertise with innovative design solutions to create visually stunning, user-centric web applications. ",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Clean Code",
    desc: "I'am Highly skilled and meticulous Front-End Developer experience in crafting clean, maintainable, and efficient code for dynamic web applications. ",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Responsive Design",
    desc: "I'am Versatile and experienced Front-End Developer expertise in creating responsive, user-friendly web applications. ",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Material UI	",
    desc: "I'am Innovative and detail-oriented Front-End Developer experience in building dynamic and visually appealing web applications.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Material UI Icons",
    desc: "I'am Experienced and creative Front-End Developer experience in crafting dynamic and responsive web applications.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Awesome Support",
    desc: "I'am Dedicated and innovative Front-End Developerexperience in creating dynamic, user-friendly web applications.",
  },
]
export const project = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faHtml5} />,
    title: "HTml",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faCss3} />,
    title: "Css",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faJs} />,
    title: "Java_script",
  },
  {
    id: 4,
    icon:<FontAwesomeIcon icon={faReact} />,
    title: "React",
  },
  {
    id: 5,
    icon:<FontAwesomeIcon icon={faGithub} />,
    title: "Github",
  },
  {
    id: 6,
    icon:<FontAwesomeIcon icon={faBootstrap} />,
    title: "Bootstrap",
  },
  {
    id: 7,
    icon:<FontAwesomeIcon icon={faSass} />,
    title: "Sass",
  },
  {
    id: 8,
    icon:<FontAwesomeIcon icon={faGithubAlt} />,
    title: "Gitlab",
  },
  
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/2.png",
    name: "Brand",
    url: 'https://full-blue.vercel.app/',
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/1.png",
    name: "Brand",
    url: 'https://senior-phi.vercel.app/',
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/3.png",
    name: "Brand",
    url: 'https://advansid.vercel.app/',
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/4.png",
    name: "Brand",
    url: 'https://dasshdbord-89bbf0sl5-elbrins8850s-projects.vercel.app/',
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/5.png",
    name: "Brand",
    url: 'https://company-eight-eosin.vercel.app/',
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/6.png",
    name: "Brand",
    url: 'https://api-templete-kappa.vercel.app/',
    category: "development",
    title: "Brex Logo",
  },
]

export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "30.0018701 ",
    text2: "6 of Octaber",
  },
  {
    icon: <PhoneIphone />,
    text1: "01080572942",
    text2: "01115882130",
  },
  {
    icon: <EmailOutlined />,
    text1: "elbrins8850@gmail.com",
  },
]
export const social = [
  {
    icon: <Facebook />,
    url:'https://www.facebook.com/profile.php?id=100037649483901&mibextid=ZbWKwL'
  },

  {
    icon: <GitHub />,
    url: 'https://github.com/elbrins8850'
    
  },
  {
    icon: <YouTube />,
    url: 'https://youtube.com/@codek-wi6ct?si=at0g8WEBy51DDPEH'
  },
]
