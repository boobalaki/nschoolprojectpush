import { Button, Col, Row, Collapse } from "antd";
import "./index.css";
import FullstackBanner from "./images/software.jpeg";
import Inplant from "./images/inpant13.png";
import android from "./images/android.png"
import fullstack3 from "./images/design.jpeg";
import fullstack4 from "./images/tech.jpeg";
import fullstack5 from "./images/web.jpeg";
import fullstack7 from "./images/fullstack7.webp";
import fullstack6 from "./images/fullstack6.png";
import fullstack8 from "./images/fullstack8.webp";
import fullstack9 from "./images/fullstack9.png";
import fullstack16 from "./images/fullstack16.webp";
import full1 from "./images/full1.png";
import full2 from "./images/full2.png";
import full3 from "./images/full3.png";
import crs1 from "./images/crs1.png";
import crs2 from "./images/crs2.png";
import crs3 from "./images/crs3.webp";
import crs4 from "./images/crs4.png";
import crs5 from "./images/crs5.png";
import crs6 from "./images/crs6.png";
import crs7 from "./images/crs7.png";
import crs8 from "./images/crs8.png";
import crs9 from "./images/crs9.png";
import crs10 from "./images/crs10.png";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  IssuesCloseOutlined,
  LaptopOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "Programming Language",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Introduction to Program Kotlin/Java
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> JVM JRE JDK  </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Variables, Data Types
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Operators
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Control Statement
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> OOPs Concepts
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Exception handling
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Multi-threading (Thread class & Runnable Interface)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Array, String
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Collections – Array List, Hash Mapping
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Introduction to Android",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Architecture
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Core Building blocks
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Layouts & Drawable Resources
          </li>
          </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "Android Widgets",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Form widgets
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Layouts & Views
          </li>   
        </ul>
      </div>
    ),
  },
  {
    key: "4",
    label: "Activities and Intents    ",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Activities and Activities Life Cycle</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Intent (Implicit, explicit)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Intent other usages
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Shared Preferences
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Bundle
          </li>
         </ul>
      </div>
    ),
  },

  {
    key: "5",
    label: "Local Service    ",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Introduction to services
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Bluetooth
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  WIFI</li>
             </ul>
      </div>
    ),
  },

  {
    key: "6",
    label: "Adapter",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Base Adapter, Simple Adapter, Array Adapter

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            What is Angular ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Layout Inflator

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Recycler View & Adapter
          </li>         
        </ul>
      </div>
    ),
  },

  {
    key: "7",
    label: "Fragment",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Fragments Life cycle
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Fragments Transition
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />TabView & Navigation View
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Library Integration</li></ul>
      </div>
    ),
  },
  {
    key: "8",
    label: "Database",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Database introduction
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            SQLite Database Helper
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />REALM Database
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "9",
    label: "Web Services"
    ,
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />JSON Parsing
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Methods(GET, POST, PUT, DELETE)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Form URL encoded value
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Retrofit
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "10",
    label: "Add-on Features    ",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Google Map Integration
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            FireBase Cloud Storage
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Two Way Data Binding
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Notification
          </li>
        </ul>
      </div>
    ),
  },

];

const items2 = [
  {
    key: "1",
    label:
      "What is the scope of android?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Once you complete your android training you can apply for job profiles like Mobile app developer, Android engineer, Mobile architect, Mobile lead software engineer, Android developer, Android engineer, Mobile developer
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "Is it hard to learn android app development?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        The Android app development is not as difficult as many people think. So once the students get the conceptual principles of developing an android app, the learning becomes much easier sessions and needs of the industry that will demand the students’ time and commitment
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Should we know java basics before learning android?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Java is a language used for creating Android Applications. So, the knowledge of Java is mandatory to learn Android programming
        </div>
      </div>
    ),
  },
  {
    key: "4",
    label:
      "Do you provide placement assistance?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        We provide 100% placement assistance and our placement record is 100% too. We are very proud of the fact that all our students are well-placed in top-level companies
        </div>
      </div>
    ),
  },
  {
    key: "5",
    label:
   " Will KITKAT Software Technologics help me with placements after my iOS course completion?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        We have a placement cell that provides 100% placement assistance to our students. The cell also contributes by training students in mock interviews and discussions even after the course completion
        </div>
      </div>
    ),
  },
  {
    key: "6",
    label: "Why should I learn Android course from KITKAT Software Academy?",
    children: (
      <div>
Check the below features and decide the reasons to join our training institute.
      <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
      
     <div> <li>Expert Faculties</li>
      <li>Fully hands-on training</li>
      <li>No PPT based learning</li>
      <li>100% job oriented training</li>
      <li>Flexible scheduled classes</li>
      <li>Ensured interviews</li>
      <li>Affordable cost</li>
      </div></div>
    </div>
    ),
  },
];

const posts = [
  {
    id: 1,
    title: "Latest technologies",
    description:
      "Learning the latest technologies in Full Stack enables you to have a direct impact on your career.",
    image: full1,
  },
  {
    id: 2,
    title: "Future Scope of Full Stack",
    description:
      "The future of Full Stack development is attractive. It looks promising because of the steady growth in-demand of these professionals.",
    image: full2,
  },
  {
    id: 3,
    title: "Industry Growth",
    description:
      "30% Annual Growth for Full Stack Development jobs by 2021. You could also develop an application by yourself with a Full Stack development course.",
    image: full3,
  },
];

const AndroidComponent = () => {
  return (
    <div>
      <div className="banner bg-[#49adcc4a] p-8">
        <div className="container m-auto">
          <Row gutter={32} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={24}>
              <div>
                <div className="text-3xl font-semibold">
                  Get Hands-on knowledge with Real-Time projects from our
                  dedicated Android training Course in Coimbatore.
                </div>
                <div className="mt-8 mb-12 text-base">
                  Power your career with great Full Stack learning and
                  specialize on PHP, Python, HTML, CSS, Javascript, Angular JS
                  and Node.js.
                </div>
                <Button className="flex items-center h-10 pr-6 pl-6 text-base font-semibold bg-[#49adcc] text-white">
                  Enquiry Now <ArrowRightOutlined />
                </Button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <img
                src={android}
                alt="kjhdba"
                className="animate-bounce"
              />
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <img
                src={android}
                alt="kjhdba"
                className="mt-10 animate-bounce"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="bannerBottom bg-[#49adcc8f] pl-8 pr-8 pt-8 pb-4">
        <div className="container m-auto">
          <Row gutter={32} style={{ margin: 0 }}>
            <Col lg={6} md={6} sm={12} xs={24} className="border-r-2 mb-4">
              <div>
                <div className="text-lg mb-3">Regular training program</div>
                <Row gutter={32}>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-2">
                      <CalendarOutlined className="text-[#49adcc]" /> Duration
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-2">3 Months</div>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-2">
                      <ClockCircleOutlined className="text-[#49adcc]" /> Hours
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-2">4 Hrs / Day</div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={24} className="border-r-2 mb-4">
              <div>
                <div className="text-lg mb-3">Fast Track training program</div>
                <Row gutter={32}>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-2">
                      <CalendarOutlined className="text-[#49adcc]" /> Duration
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-2">14 days (2 Weeks)</div>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-2">
                      <ClockCircleOutlined className="text-[#49adcc]" /> Hours
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <div className="mb-2">6 Hrs / Day</div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="border-r-2 flex items-center mb-4"
            >
              <div>
                <div className="text-xl mb-3 items-center flex font-semibold">
                  <IssuesCloseOutlined className="text-[#49adcc] text-3xl mr-2" />{" "}
                  100% Job Assistance
                </div>
              </div>
            </Col>
            <Col
              lg={6}
              md={6}
              sm={12}
              xs={24}
              className="flex items-center mb-4"
            >
              <div>
                <div className="text-xl mb-3 items-center flex font-semibold">
                  <LaptopOutlined className="text-[#49adcc] text-3xl mr-2" />{" "}
                  Live Projects Training
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="section3">
        <div className="bg-[#49adcc] m-2 text-center p-2">
          <div className="border-b-4 w-48 text-2xl font-semibold text-white m-auto">
            Course Overview
          </div>
        </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-8 mb-8">
          BEST ANDROIDCOURSE IN COIMBATORE
          </div>
          <div className="text-base">
           {" "}
            <span className="font-semibold">
            Android is a Linux-based operating system
            </span>{" "}
             used for mobile devices like smartphones and tablets. It has become a popular choice for app development due to its open-source nature and user-friendly interface. At the NSCHOOL Academy, you can learn the best techniques for mobile app development from top-rated instructors. Whether you’re interested in iOS or Android app development or want to learn app design software like Xamarin, Titanium Studio, or XDK, this institute has got you covered. With the increasing demand for Android developers in today’s technology-driven world, this course can provide you with the skills and knowledge needed to excel in this field. So, join the Best Android Training Institute in Coimbatore and take your career to new heights in the world of app development.

          </div>
          
        </div>
        <div className="container m-auto p-6">
       </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          KEY FEATURES OF ANDROID COURSE IN COIMBATORE
          </div>
          <div>
            <Row gutter={32} style={{ margin: 0 }}>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You’ll learn the basics of the Java programming language that is used in Android app development training in Coimbatore.

                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                   
                  </span>{" "}
                  You’ll get deep knowledge about basic android development tools like Android Studio, Drawables, DDMS, Activity Lifecycle and Listeners.

                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                  
                  </span>{" "}
                  Developing database intensive apps using SQLite.
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You will gain the skill to create a dynamic web application with SOAP Service and JSON and display user current location in a google map.

                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  Understand how to create applications using the SQLite database management, animation, etc.
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You’ll learn how to use different Layouts and Widgets
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section4 bg-[#49adcc8f]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          WHY ANDROID APP DEVELOPMENT COURSE ?
          </div>
          <div className="text-base text-center pb-4">
          If you’re interested in becoming an Android developer, this Android Development Certification Course in Coimbatore is perfect for you. It is specifically designed to provide you with a comprehensive understanding of both front-end and back-end mobile app development technologies. Throughout the course, you will gain hands-on experience in building complete mobile applications, testing and deploying code, and storing data using the SQLite Database. By the end of the course, you will have the skills and knowledge necessary to excel in the field of Android development.
          </div>
        </div>
      </div>
      <div className="section5 bg-[#49adcc4a] p-8">
        <div className="container m-auto">
          <Row gutter={16} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={0} xs={0}>
              <img src={Inplant} alt="kjhdba" />
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <img src={Inplant} alt="kjhdba" className="mb-6" />
            </Col>
            <Col lg={12} md={12} sm={24}>
              <div>
                <div className="text-base">
                Their training program offers a comprehensive understanding of Android technology and teaches students how to create various types of apps. The courses are taught by certified experts who provide in-depth knowledge and practical skills. Additionally, NSCHOOL Academy also offers placement assistance to help Android students kickstart their careers. Whether you’re a beginner or have some experience, their Android Training Institute in Coimbatore is the perfect place to learn about Android application development using the latest techniques.
                </div>
                <div className="mt-8">
                  <div className="text-base mb-2">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Train from professionals with industry experience
                  </div>
                  <div className="text-base mb-2">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Learn theoretical concepts and gain hands-on training
                    simultaneously
                  </div>
                  <div className="text-base mb-2">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Real time Hands-On Practical Experience Training to imbibe
                    corporate practices
                  </div>
                  <div className="text-base mb-2">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Get certified at the end of the training
                  </div>
                  <div className="text-base mb-2">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Receive placement support once the training is completed
                  </div>
                  <div className="text-base mb-2">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Getting exposure to latest technology up gradations.
                  </div>
                  <div className="text-base mb-2">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Advanced lab facility and most updated syllabus and
                    materials will be provided with learning tools for easy
                    learning
                  </div>
                  <div className="text-base mb-2">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    You will have the access to contact the trainers at any
                    time.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="section6">
        <div className="container m-auto section5Container">
          <div className="m-auto p-6 contenting">
            <div className="flex justify-between items-center">
              <div className="text-3xl font-semibold text-white">
                Book Your Free Demo Class Today!
              </div>
              <div>
                <Button className="h-10 pr-6 pl-6 text-base font-semibold bg-[#cf0d67] text-white">
                  DEMO CLASS
                </Button>
              </div>
            </div>
            <div className="mt-10 text-white">
              Enhance your decision-making skills from our Free Trial Lessons at
              KITKAT Software Technologics.
            </div>
          </div>
        </div>
      </div>
      <div className="section7 bg-[#49adcc4a]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Why Should You Attend KITKAT Software Academies ANDROID TRAINING  Course in
            Coimbatore?
          </div>
          <div className="text-base pb-4">
          KITKAT Software Academies  {" "}
            <span className="font-semibold">
              
            </span>{" "}
            Android Development program provides extensive hands-on training in front-end, middleware, and back-end technology skills along with phase-end and capstone projects based on real business scenario
          </div>
          <div className="mt-6">
            <Row gutter={16} style={{ margin: 0 }}>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                  Trainers are certified professionals with over 9 years of
                  experience in their respective domains.
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                  Trained more than 500+ students in a year.
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                  Trainers teach the students to learn the practices employed by
                  the top IT companies.
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                  Have experienced multiple real-time projects in their
                  Industries
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                  Industry-experts and subject specialists who have mastered
                  running applications provide Best Full Stack Development
                  training to the students.
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                  We have restricted the batch size to empower students to have
                  great understanding and communication between our trainers and
                  students.
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
            <img src={fullstack3} alt="fullstack3" className="" />
            <img src={fullstack4} alt="fullstack4" className=" " />
            <img src={fullstack3} alt="fullstack3" className=" " />
            </Row>
          </div>
          <div className="mt-6">
            <Row gutter={16} style={{ margin: 0 }} className="justify-center">
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                Strong Theoretical & Practical Knowledge
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                Well connected with Hiring HRs in various companies.
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                Expert level Subject Knowledge and fully up-to-date on the real-world industry applications.
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                Trainers also help candidates to get placed in their respective company by Employee Referral / Internal Hiring process
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={24} className="mb-4">
                <div className="text-base text-center">
                Interactive online training classes permit complete interactivity between the student and the trainer.
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section8 bg-[#49adcc8f]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Prerequisite
          </div>
          <div className="text-base text-center pb-4">
          To join the Android training course, students need to have certain basic knowledge about core Java or any other programming language basics. Such things will greatly help them to understand the subject in a better way.

          </div>
        </div>
      </div>
      <div className="section9 bg-[#1b424e] pt-8">
        <div className="container mx-auto md:px-6 xl:px-24">
          <section>
            <h2 className="text-center text-3xl font-bold mb-6 text-white">
            Course Syllabus

            </h2>
            <h2 className="mb-6 pl-6 pr-6 text-2xl font-bold text-white">
            Android Development Course in Coimbatore Highlights

            </h2>
            <div className="mb-6 pl-6 pr-6 text-base text-white">
            Android mobile app  development has been gaining popularity for quite some time and is currently in high-demand. Android development is an exciting career path for both freshers and experienced individuals.


            </div>

            <div className="pl-6 pr-6 pb-12">
              <Collapse
                expandIcon={({ isActive }) => (
                  <div>
                    {!isActive ? (
                      <PlusOutlined className="text-white" />
                    ) : (
                      <MinusOutlined className="text-white" />
                    )}
                  </div>
                )}
                accordion
                items={items}
              />
            </div>
          </section>
        </div>
      </div>
      <div className="section10">
        <div>
          <section className="mb-32">
            <div className="bg-[#49adcc4a] text-center text-black lg:h-[400px] h-[300px] lg:pt-[80px] pt-[55px]">
              <h2 className="mb-12 text-center text-3xl font-bold">
                Program Fees
              </h2>
            </div>

            <div
              className="grid px-6 md:px-12 lg:grid-cols-3 xl:px-32"
              style={{ marginTop: "-200px" }}
            >
              <div className="p-0 py-12">
                <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none">
                  <p className="uppercase text-lg w-full bg-[#49adcc] text-white text-center p-3">
                    <strong>Beginner</strong>
                  </p>
                  <div className="border-b-2 border-neutral-100 border-opacity-100 px-6 pb-6 text-center dark:border-opacity-10">
                    <center>
                      <img
                        src={fullstack7}
                        alt="fullstack7"
                        className="mb-4 mt-4"
                      />
                    </center>
                    {/* <h3 className="mb-6 text-3xl"> */}
                      {/* <strong>₹ 12,500 </strong> */}
                      {/* <small className="text-base text-neutral-500 dark:text-neutral-300 line-through"> */}
                        {/* ₹ 15,000 */}
                      {/* </small> */}
                    {/* </h3> */}
                    <div className="bg-gray-400 max-w-36 h-8 flex items-center justify-center rounded text-white font-bold m-auto">
                      <ClockCircleOutlined className="mr-2" /> 60-75 Hours
                    </div>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside">
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        1-to-1 mode class training
                      </li>
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        You will have a clear & strong understanding on Basic
                        concepts
                      </li>
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Core Practical Training is imbibed to students here with
                        expertise support.
                      </li>
                    </ol>
                    <div className="mt-16">
                      <div className="text-center underline font-semibold text-base mb-6">
                        batch starts from
                      </div>
                      <div className="text-center text-base mb-3">
                        <CalendarOutlined className="mr-2" /> 1st week of the
                        month
                      </div>
                      <div className="text-center text-base">
                        <CalendarOutlined className="mr-2" /> 3rd week of the
                        month
                      </div>
                    </div>
                    <center>
                      <Button className="mt-8 w-full h-10 text-base font-semibold bg-[#49adcc] text-white">
                        ENROLL NOW
                      </Button>
                    </center>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                  style={{ zIndex: 1 }}
                >
                  <p className="uppercase text-lg w-full bg-[#49adcc] text-white text-center p-3">
                    <strong>Intermediate</strong>
                  </p>
                  <div className="border-b-2 border-neutral-100 border-opacity-100 px-6 pb-6 text-center dark:border-opacity-10">
                    <center>
                      <img
                        src={fullstack8}
                        alt="fullstack7"
                        className="mb-4 mt-4"
                      />
                    </center>
                    <h3 className="mb-6 text-3xl">
                      <strong>Reach us for fee discussion</strong>
                    </h3>
                    <div className="bg-gray-400 max-w-36 h-8 flex items-center justify-center rounded text-white font-bold m-auto">
                      <ClockCircleOutlined className="mr-2" /> 225 Hours
                    </div>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside">
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        1-to-1 mode class training
                      </li>
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Training session facilitates a stronger understanding of
                        Basic to Advanced concepts.
                      </li>
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Practical Training is enriched with Placement Assistance
                      </li>
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Project guidance support.
                      </li>
                    </ol>
                    <div className="mt-16">
                      <div className="text-center underline font-semibold text-base mb-6">
                        batch starts from
                      </div>
                      <div className="text-center text-base mb-3">
                        <CalendarOutlined className="mr-2" /> 1st week of the
                        month
                      </div>
                      <div className="text-center text-base">
                        <CalendarOutlined className="mr-2" /> 3rd week of the
                        month
                      </div>
                    </div>
                    <center>
                      <Button className="mt-8 w-full h-10 text-base font-semibold bg-[#49adcc] text-white">
                        CONTACT US
                      </Button>
                    </center>
                  </div>
                </div>
              </div>

              <div className="p-0 py-12">
                <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none">
                  <p className="uppercase text-lg w-full bg-[#49adcc] text-white text-center p-3">
                    <strong>Expertise</strong>
                  </p>
                  <div className="border-b-2 border-neutral-100 border-opacity-100 px-6 pb-6 text-center dark:border-opacity-10">
                    <center>
                      <img
                        src={fullstack6}
                        alt="fullstack7"
                        className="mb-4 mt-4"
                      />
                    </center>
                    <h3 className="mb-6 text-3xl">
                      <strong>100% Placement</strong>
                    </h3>
                    <div className="bg-gray-400 max-w-36 h-8 flex items-center justify-center rounded text-white font-bold m-auto">
                      <ClockCircleOutlined className="mr-2" /> 300 Hours
                    </div>
                  </div>
                  <div className="p-6">
                    <ol className="list-inside">
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        1-to-1 mode class training
                      </li>
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Latest & Advanced Technology concepts are clarified
                        here.
                      </li>
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Latest Framework is incorporated in Practical Training
                        with Placement Assurance.
                      </li>
                      <li className="mb-4 flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        Project guidance support.
                      </li>
                    </ol>
                    <div className="mt-16">
                      <div className="text-center underline font-semibold text-base mb-6">
                        batch starts from
                      </div>
                      <div className="text-center text-base mb-3">
                        <CalendarOutlined className="mr-2" /> 1st week of the
                        month
                      </div>
                      <div className="text-center text-base">
                        <CalendarOutlined className="mr-2" /> 3rd week of the
                        month
                      </div>
                    </div>
                    <center>
                      <Button className="mt-8 w-full h-10 text-base font-semibold bg-[#49adcc] text-white">
                        CONTACT US
                      </Button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="section11 bg-[#49adcc4a]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Our Training Methodology
          </div>
          <div className="text-base font-semibold text-center pb-4">
            Check out our innovative key features in training methodologies. Our
            flexible training mechanisms incorporate all techniques right from
            knowledge assessment till setting placement records.
          </div>
        </div>
        <div className="container m-auto">
          <Row gutter={16} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={0} xs={0}>
              <img src={fullstack9} alt="kjhdba" />
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <img src={fullstack9} alt="kjhdba" className="mb-6" />
            </Col>
            <Col lg={12} md={12} sm={24}>
              <div>
                <div className="mt-8">
                  <div className="text-base mb-3">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black mr-2 text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Gain knowledge from experienced professionals in the field.
                  </div>
                  <div className="text-base mb-3">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black mr-2 text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Learn both theoretical concepts and gain practical
                    experience at the same time.
                  </div>
                  <div className="text-base mb-3">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black mr-2 text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Training that provides real-world, hands-on experience in
                    order to teach proper workplace practices.
                  </div>
                  <div className="text-base mb-3">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black mr-2 text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Grab certification upon completion of training
                  </div>
                  <div className="text-base mb-3">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black mr-2 text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Receive placement assistance following completion of
                    training
                  </div>
                  <div className="text-base mb-3">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black mr-2 text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Being exposed to the most recent technological advancements.
                  </div>
                  <div className="text-base mb-3">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black mr-2 text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    Learning tools will be provided along with the most
                    up-to-date lab facilities, curriculum, and course materials
                  </div>
                  <div className="text-base mb-3">
                    <span className="font-semibold">
                      <ArrowRightOutlined className="bg-black mr-2 text-white p-1 rounded-2xl text-xs" />
                    </span>{" "}
                    You will be able to connect with the trainers at any time.
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-6 mb-6">
            Full Stack Developer Course with 100% Placement Support in
            Coimbatore
          </div>
          <div className="text-base pb-4">
          KITKAT Software Technologics has established placement partnerships with
            enterprises of varying sizes, including small, medium, and
            large-scale organizations. These firms offer employment
            opportunities for full-stack developers and related positions. To
            facilitate the placement process, Nschool Academy has established a
            dedicated Placement Team. This team provides students with
            assistance in the form of mock interviews and group discussion
            training sessions, enabling them to approach interviews with
            confidence. Whether developing a Web or Mobile Application, a
            diverse skill set and critical awareness are essential for swift
            project handling. A willingness to learn new skills on a daily basis
            is also crucial.
          </div>
          <div className="text-base pb-4">
            In light of these requirements, businesses should consider hiring a
            full-stack developer who can serve as a one-stop shop for all
            project needs, ensuring successful project completion. As the Agile
            method continues to gain popularity among businesses, the demand for
            full-stack developers is expected to increase. Developers must be
            prepared to meet this growing demand. Nschool Academy's Full Stack
            Course in Coimbatore provides students with essential skills and
            certification in the high-demand Web Development industry.
          </div>
          <div className="text-center text-3xl font-semibold mt-6 mb-6">
            Job Opportunities For Full Stack Developer
          </div>
          <div className="text-base text-gray-600 pb-4">
            PayScale.com of India states that an entry-level Full Stack
            Developer earns between Rs 3,75,000 and Rs 5,45,000. Full Stack
            Developers with 1-4 years of experience may expect to earn between
            Rs 5,53,006 and Rs 7,50,000. Full Stack Developers with 5-9 years of
            experience may wish to reach Rs 8,20,000 to Rs 1,375,689 annually.
            Furthermore, these packages may vary according to your skill set,
            years of experience, and the firm for which you work.
          </div>
          <div className="text-base text-gray-600 pb-4">
            After completing the Full Stack Developer Training In Coimbatore,
            you will be able to earn the highest Full Stack Developer Salary for
            Freshers. When you take Nschool Academy's Full Stack Training in
            Coimbatore, you will understand the stacks thoroughly and increase
            your ability to build a complete web application. Thanks to the
            support of our Expert Trainers, your knowledge is now loaded with
            the most sought-after professional talents highly desired in the
            company
          </div>
        </div>
      </div>
      <div className="section12">
        <div className="bg-white py-14 sm:py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold mb-6 leading-8 text-gray-900">
              Course Certification
            </h2>
            <h2 className="text-center text-2xl font-bold mb-14 leading-8 text-gray-900">
            KITKAT Software Technologics Certificate Holders work at companies like :
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
            <div className="mt-16">
              <Row gutter={16} style={{ margin: 0 }}>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <div>
                    <div className="text-lg font-bold">
                      Owning an IT Certification will certainly give you an
                      advantage to enrich your self-image and reputation among
                      peers. The credits of being certified are,
                    </div>
                    <div className="text-lg text-gray-600 border-l-4 border-[#49adcc] pl-3 mt-8">
                      <div className="mb-2">
                        Enhances professional credibility.
                      </div>
                      <div className="mb-2">
                        Extends knowledge skills and prepares you more for job
                        responsibilities.
                      </div>
                      <div className="mb-2">
                        Serves as a compact Ability proof.
                      </div>
                      <div className="mb-2">
                        Solid proof for improving career opportunities.
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button className="flex items-center h-10 pr-6 pl-6 text-base font-semibold bg-[#49adcc] text-white">
                        START LEARNING
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg={12} md={12} sm={24} xs={24}>
                  <img src={fullstack16} alt="fullstack16" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="section13 bg-[#49adcc8f] pb-12">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Full Stack Developer Certification Course in Coimbatore
          </div>
          <div className="text-base pb-4">
            During our Full Stack Certification Course in Coimbatore atKITKAT Software Technologics, participants will acquire the necessary abilities and
            capacities to become a professional full-stack developer under the
            guidance and mentorship of industry experts. Our comprehensive Full
            Stack Developer Course in Coimbatore is taught by Web Application
            Development specialists with over a decade of experience, ensuring
            that participants' expertise is current with market developments,
            enabling them to stay ahead of their competitors. Upon completion of
            the Full Stack Course in Coimbatore, participants will have gained
            the abilities and expertise to work on the Frontend, Backend
            development process, and the usage of databases. This certificate,
            when presented to a potential employer along with a CV, will help
            prioritize the applicant's profile during the interview and open up
            a broad range of employment prospects in the future.
          </div>
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Job Outlook
          </div>
        </div>
        <div>
          <div className="container m-auto p-6 card rounded">
            <div>
              <Row gutter={32} style={{ margin: 0 }}>
                {posts.map((post) => (
                  <Col
                    key={post.id}
                    lg={8}
                    md={8}
                    sm={24}
                    xs={24}
                    className={`${post.id !== 3 && "border-r-2"}`}
                  >
                    <div>
                      <img
                        src={post.image}
                        alt="full1"
                        className="h-14 w-14 mb-6"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                        <div>
                          <span className="absolute" />
                          {post.title}
                        </div>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm text-gray-600">
                        {post.description}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <div className="bg-gray-200 rounded p-3 mt-8">
              <div className="text-3xl font-semibold mt-4 ">
                Job Titles include
              </div>
              <div className="mb-4">
                <Row gutter={16} style={{ margin: 0 }}>
                  <Col lg={4} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Android App Developer

                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section14 bg-[#49adcc4a]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Proud to be Recognized
          </div>
          <div className="text-base text-center pb-4">
            Our service for more than a decade & our IT Trainees feedback urge
            us to run more. Here we are presenting exclusive KITKAT Software Technologics
            Reviews which are given by our students who got benefited from our
            course training.
          </div>
        </div>
      </div>
      <div className="section15 bg-[#49adcc8f] pb-4">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Related Courses
          </div>
          <div className="text-base text-center pb-4">
            Learn new skills, pursue your interests or advance your career with
            our distinctive course catalogues. Our updated syllabus on the below
            courses cover all Industry standards as per requirements.
          </div>
          <div className="mt-8">
            <Row gutter={16} style={{ margin: 0 }} className="justify-center">
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs1} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Full Stack Development
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs2} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Angular Js Training
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs3} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      IOS Training
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs4} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Android Training
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs5} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Python Development
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={16} style={{ margin: 0 }} className="justify-center">
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs6} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      PHP Development
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs7} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Node js Development
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs8} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Core Java Development
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs9} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      React js Training
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs10} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      DevOps Training
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <center>
            <Button className="flex items-center h-12 pr-8 pl-8 text-base font-semibold bg-[#49adcc] text-white mt-10 mb-4">
              View All Courses
            </Button>
          </center>
          <div className="text-3xl font-semibold mt-14 mb-6">
            Frequently Asked Questions
          </div>
          <div>
            <Collapse
              items={items2}
              expandIcon={({ isActive }) => (
                <div>
                  {!isActive ? (
                    <PlusOutlined className="text-white" />
                  ) : (
                    <MinusOutlined className="text-white" />
                  )}
                </div>
              )}
              accordion
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidComponent;
