import { Button, Col, Row, Collapse } from "antd";
import "./index.css";
import mern from "./images/mern.png"
import Inplant from "./images/inpant13.png";
import fullstack3 from "./images/fullstack3.png";
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
    label: "Introduction to Node js",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is node js ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> A word on event loop
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Event driven architecture
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Blocking vs non-blocking code
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Setup node js
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> The Node.js REPL
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> HelloWorld program
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Modules in JS",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Understanding exports and require
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Creating modules
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Importing modules
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Quick tour on npm
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Installing 3rd party modules 
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "Events & streams",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Significance of Events
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> EventEmitter class
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Emitting and listening to events
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Types of streams
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Working with streams
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Composing streams using pipe
          </li>
        </ul>
      </div>
    ),
  },

  {
    key: "4",
    label: "Working with Process and File System",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Process object
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Handling exceptions at process level
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Listening to processing events
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Working with file system using fs module
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Creating, Copying, deleting files
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Creating, Copying, deleting directories
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Watching for file changes
          </li>
        </ul>
      </div>
    ),
  },

  {
    key: "5",
    label: "Express js Introduction & Setup",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Installing express
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            First App with express – Demo
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Little about routes

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Little about Express middleware
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Serving static files with express
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Express application generator
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  What is express js ?
          </li>
        </ul>
      </div>
    ),
  },

  {
    key: "6",
    label: "Routing in Depth",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Route Methods
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Route Paths
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Parameterized Routes

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Route Handlers
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Express Router
          </li>
        </ul>
      </div>
    ),
  },

  {
    key: "7",
    label: "Middleware",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Types of middleware
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Error middleware
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Bodyparser, cookie parser, session management Loggers
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "8",
    label: "Template Enginesr",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />What are template engines ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            EJS
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Jade

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Handlebars
          </li>
          
        </ul>
      </div>
    ),
  },
  {
    key: "9",
    label: "Express js security",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Authentication
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            JWT
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Securing routes

          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "10",
    label: "Introduction to MongoDB",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Installing MongoDB
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            The current SQL/NoSQL landscape

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Document-oriented vs. other types of storage
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Mongo’s feature set
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Common use-cases

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            MongoDB databases
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />MongoDB Collections

          </li>
          
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  MongoDB Documents

          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "11",
    label: "CRUD Operations in Mongodb",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Significance of Events
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Creating documents

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> insert()
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />update()
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> save()
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Querying documents
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />find()
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Working with equality
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Query operators
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Building complex queries
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Updating documents
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Deleting documents
         </li>
        </ul>
      </div>
    ),
  },

  {
    key: "12",
    label: "Introduction to Mongoose",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Word on ORM/ODM
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Installing mongoose
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Connecting to MongoDB from mongoose
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "13",
    label: "Core concepts of Mongoose",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Understanding mongoose schemas and data types

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Working with Models
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Using modifiers in schema

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Using virtual fields
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Optimizing query performance by enabling indexes
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "14",
    label: "Extending Models",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Validation of model data

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Creating custom static methods

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Creating custom instance methods

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  CRUD operations with Mongoose
         </li>        </ul>
      </div>
    ),
  },
  {
    key: "15",
    label: "Introduction To React & JSX",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> React.js Syntax

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Overview of JSX and why you should use it
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Getting hold of everything you need to start coding

          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "16",
    label: "React Components",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Components and Props
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            States & Lifting state up
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Component Lifecycle
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Updating Components
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Writing your first React.js component
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Mounting Components
          </li>
        </ul>
      </div>
    ),
  },


  {
    key: "17",
    label: "JSX",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Expressions & Attributes
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            JSX Basics
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Name spaced Components
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Rendering HTML
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Rendering React Components
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Creating A Dynamic UI In React",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Keeping components stateless
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Event Delegation
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  React State full Components
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Auto binding
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Code splitting
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Context
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Event Handling In React",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Key Events
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Event Pooling
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> React.js Event Handlers
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Synthetic Event
         </li>
        </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Hooks (Architecture)",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Introducing Hooks
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            using the State Hooks
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  using the Effect Hooks
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Building Your Own Hooks
         </li>
        </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Flux (Architecture)",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Views & Controller-Views
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Flux is not MVC!
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Data Flow
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Action, Dispatcher, Store & View
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Flux Application Architecture
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Structure
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Redux (Architecture)",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Redux Overview and Concepts
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Redux App Structure 
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Async Data Fetching
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Redux-Dev-tools
         </li>
        </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Integration With Other Libraries",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Axios (  HTTP client )
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Material UI
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
      "What is the scope of MERN Stack?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        MERN Stack is one of the fastest growing development languages and has undergone a successful span of more than 25 years as far as its adoption is concerned. This success also reveals a promising future scope of MERN Stack programming language

        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "How do I become a MERN Stack expert?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Get through technically in MongoDB, Express js, React.js and Node js by joining our MERN Stack Training. Our standardized training program makes you excel the MERN stack development

        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Who should take this MERN Stack training course?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        This training is suitable for fresher, graduates as well as post graduates. If you are a professional who wants to polish your skill, then you can also join this training


        </div>
      </div>
    ),
  },
  {
    key: "4",
    label:
      "What kind of Projects will be conducted during the course?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        We conduct the live project practice during the course, wherein you can apply your knowledge and skills that you acquire through our training
  </div>
      </div>
    ),
  },
  {
    key: "5",
    label:
      "Will I get a Certificate for completing this course?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Yes, we offer a course completion certificate after you successfully complete the training program

        </div>
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

const MernstackComponent = () => {
  return (
    <div>
      <div className="banner bg-[#49adcc4a] p-8">
        <div className="container m-auto">
          <Row gutter={32} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={24}>
              <div>
                <div className="text-3xl font-semibold">
                  Get Hands-on knowledge with Real-Time projects from our
                  dedicated MERN Stack Course in Coimbatore.
                </div>
                <div className="mt-8 mb-12 text-base">
                Power your career with great MERN Stack learning and specialize on HTML, CSS,
MongoDB, Angular, Node.js and Express js
                </div>
                <Button className="flex items-center h-10 pr-6 pl-6 text-base font-semibold bg-[#49adcc] text-white">
                  Enquiry Now <ArrowRightOutlined />
                </Button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <img
                src={mern}
                alt="kjhdba"
                className="animate-bounce"
              />
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <img
                src={mern}
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
          MERN stack Development Training Course
          </div>
          <div className="text-base">
          {" "}
            <span className="font-semibold">
            
            </span>{" "}
            The term MERN stack refers to a collection of JavaScript based technologies which are used in the development of websites. MERN is the acronym for Mongo DB, Express JS, React JS, and Node JS. All of these play an integral part in transferring database from client to server. It refers to a consortium of JavaScript technologies used to develop web applications. MERN Stack is a full-stack development toolkit used to develop a fast and robust web application. It is an open source front-end web application framework managed mainly by Google and a community of people and dealings to address many of the contests of a single-page application development.
          </div>
          <div className="text-base">
          {" "}
            <span className="font-semibold">
            
            </span>{" "}
            Courses are offered with affordable cost and some special offers are available only at our NSCHOOL Academy. We are having multiple class timings which suit everyone who wants to learn in their own timing. We do have fast track MERN Stack Developer training and online MERN Stack Developer training with one-to-one basis. In case you are having queries regarding the time, place and duration of the course you can contact our help desk.
          </div>
          
        </div>
        
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          KEY FEATURES OF MERN STACK DEVELOPMENT COURSE
          </div>
          <div>
            <Row gutter={32} style={{ margin: 0 }}>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You will have an excellent understanding of HTML, CSS and MERN using MongoDB, Angular, Nodejs and Expressjs Programming as front end technologies
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You will have the basic understanding of the Testing of MERN Stack Training module.                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  
                  You will learn to develop a single page application making use of React js.
                  </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                   
                  </span>{" "}
                  MERN stack can take care of the entire development cycle starting from the front-end development to the back-end or server-side development.                </div>
             
              </Col>

              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                   
                  </span>{" "}
                  Learn all the features that includes NoSQL database technology                </div>
              </Col>
              
            </Row>
          </div>
        </div>
      </div>
      <div className="section4 bg-[#49adcc8f]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          WHY MERN STACK DEVELOPMENT COURSE?
          </div>
          <div className="text-base text-center pb-4">
          This MERN Stack Development Certification Course is designed to give you an essence of front-end, middleware, and back-end web developer technologies. You will learn to build an end-to-end application, test and deploy code, store data using MongoDB, and much more
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
                MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. The MERN stack is an excellent choice for companies wishing to develop high quality web applications. In addition, it delivers high-performance and customized technologies, allows for web applications and software to be developed very quickly!. All technologies that are involved in MERN Stack are open-source. This feature allows a developer to get solutions to queries that may evolve during development, from the available open portals. As a result, it will be beneficial for a developer

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
          Why KITKAT Software Technologics for mern stack development learning ?
          </div>
          <div className="text-base pb-4">
            
            KITKAT Software Technologics MERN Stack Developer program provides extensive hands-on training in front-end, middleware, and back-end technology skills along with phase-end and capstone projects based on real business scenarios
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
            <img src={fullstack3} alt="fullstack3" className="m-auto" />
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
          Anyone who has the passion to learn MERN Stack can join our training program and get through the MERN Stack certification course
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
            MERN STACK DEVELOPMENT COURSE HIGHLIGHTS
            </h2>
            <div className="mb-6 pl-6 pr-6 text-base text-white">
            MERN Stack web development has been gaining popularity for quite some time and is currently in high-demand. MERN Stack development is an exciting career path for both freshers and experienced individuals.

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
                        raining session facilitates a stronger understanding of
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
                  <Col lg={10} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Mern Stack Developer
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
            us to run more. Here we are presenting exclusive KITKAT software Technologics
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

export default MernstackComponent;
