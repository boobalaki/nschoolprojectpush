import { Button, Col, Row, Collapse } from "antd";
import "./index.css";
import mean from "./images/mean.png"
import Inplant from "./images/inpant13.png";
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
    label: "Introduction to MongoDB",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Installing MongoDB
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> The current SQL/NoSQL landscape
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Document-oriented vs. other types of storage
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Mongo’s feature set
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Common use-cases
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> MongoDB databases
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> MongoDB Collections
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />MongoDB Documents
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "CRUD Operations in Mongodb",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Creating documents
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            insert()
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> update()
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  save()
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Querying documents
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  find()
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Working with equality
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Query operators
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Building complex queries
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Updating documents
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
           Deleting documents
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
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
    key: "4",
    label: "Core concepts of Mongoose",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Understanding mongoose schemas and data types
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
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Optimizing query performance by enabling indexes
          </li>
        </ul>
      </div>
    ),
  },

  {
    key: "5",
    label: "Extending Models",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Validation of model data
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Creating custom static methods
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Creating custom instance methods

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />CRUD operations with Mongoos
          </li>
        </ul>
      </div>
    ),
  },

  {
    key: "6",
    label: "Introduction to Angular & Typescript",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Angular JS vs Latest Angular
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            What is Angular ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Angular Vs Angular2 vs Angular 4 vs Angular 5

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Web Components
(class and id)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            JavaScript and its Issues
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            What is TypeScript
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  TypeScript vs JavaScript vs ES6

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Benefits of TypeScript
          </li>
          
          
        </ul>
      </div>
    ),
  },

  {
    key: "7",
    label: "Type script",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Typing System
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Type Script Types
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Arrays Types
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Functions
(class and id)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Interfaces
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Object Oriented Programming
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Classes and Class Constructors

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Properties, Methods, Getters and Setters
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Generics and Decorators
          </li>
          
        </ul>
      </div>
    ),
  },
  {
    key: "8",
    label: "Introduction to Angular",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Angular Installation
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Angular CLI
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Serving and Building the Application

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Project Structure
(class and id)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Angular Modules
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Root and Featured Modules
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Imports, Declarations, Providers and Dependencies

          </li>
          
        </ul>
      </div>
    ),
  },
  {
    key: "9",
    label: "Components",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />What are Components
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            App Component
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Component Syntax

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Selectors, Templates and Style
(class and id)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Nested Components
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Component Life Cycle
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Initialization Hooks

          </li>
          
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Destroy Hooks

          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "10",
    label: "Data Bindings",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Angular Data Bindings
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Property & Event Bindings

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Two Way Data Binding

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Template Variables

(class and id)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Component Communications

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Input and Output
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> ViewChild

          </li>
          
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Content Projection

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Events and Event Emitters

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Listening to Event Emitters

          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "11",
    label: "Directives",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Angular Directives
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Attribute Directives

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Build In Attribute Directives

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Structural Directives

(class and id)
         </li>
        </ul>
      </div>
    ),
  },

  {
    key: "12",
    label: "Pipes",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What are Pipes
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Build In Angular Pipes

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Currency Pipe

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Number Pipe
(class and id)
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Percent Pipe

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Lower and Upper Case Pipes

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Date Pipe

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Custom Pipes

          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "13",
    label: "Services",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  What are Services in Angular

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Injectable Services
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Dependency Injection

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Singletons
(class and id)
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Export and Import Services

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Shared Services

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Providing Services

          </li>
         
        </ul>
      </div>
    ),
  },
  {
    key: "14",
    label: "Forms",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Forms Module

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Template Driven Forms
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> NgForm

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  NgModel
(class and id)
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Built-In Structural Directives

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   NgIf and NgFor Directivess

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Custom Directives

          </li>
         
        </ul>
      </div>
    ),
  },
  {
    key: "15",
    label: "Routing",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What are Routes

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            How to Configure Routes
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Router Outlet

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Router Outlet
(class and id)
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Router Navigation

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Router Parameters


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Routes for Root and Child


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Query Parameters


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />    Activated Routes


          </li>
         
        </ul>
      </div>
    ),
  },
  {
    key: "16",
    label: "Route Guards Authentication & Route Production",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Module Introduction



          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            How Authentication works in SPAs

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Introduction to JWT


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Creating a Signup Page and Route
(class and id)
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Setting up Firebase SDK

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />    Signing users up


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Signing users in


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Token introduction


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />    Sending a token


          </li>
          
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />    Route protection and redirection


          </li>
        </ul>
      </div>
    ),
  },


  {
    key: "17",
    label: "HTTP & HTTPs",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />HTTP & HTTPs Module



          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Promises
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Reactive Programming


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Observables & Subscriptions
(class and id)
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Error Handling

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />    Working with FireBase


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Accessing from MongoDB
</li>

          
        </ul>
      </div>
    ),
  },

  {
    key: "18",
    label: "Introduction to Node js",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Introduction


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            What is Node
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Traditional Web Server Model

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Node.js Process Model
         </li>
         
          
        </ul>
      </div>
    ),
  },

  {
    key: "19",
    label: "Modules in JS",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Understanding exports and require

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Creating modules
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Importing modules
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Quick tour on npm
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Installing 3rd party modules
         </li>
          
        </ul>
      </div>
    ),
  },
 
  {
    key: "25",
    label: "Events & streams ",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Event Emitter class</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Significance of Events
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Emitting and listening to events
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Types of streams
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Working with streams
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />    Composing streams using pipe </li>
           </ul>
      </div>
    ),
  },

  {
    key: "26",
    label: "Working with Process and File System",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Process object
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Handling exceptions at process level
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Listening to processing events          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Working with file system using fs module
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
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Watching for file changes
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
      "Why become a MEAN stack developer?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
          Not the fresher or the well-trained developer, if you up skill your
          knowledge in a full stack course then definitely you will find a
          better careMean stack developer is one of the most lucrative and fast-growing career paths. With the increasing adoption of Mean stack over the last few years, MEAN stack developers are in huge demand right now and are paid more than both front-end and back-end developers
      </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "What practical skill set can I expect to have upon completion of the course?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        You’ll be proficient with Angular core features, Node, Express.js and MongoDB features


        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Should we know JavaScript basics before learning mean stack?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Before starting to learn MEAN Stack, you should have good knowledge of JavaScript. Because we are going to use JavaScript Technology in the Front-end and Back-end


        </div>
      </div>
    ),
  },
  {
    key: "4",
    label:
      "Do you provide an Internship?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        We will provide you an internship with our recruiters. Through the N-school internship program you will get a chance to work with the professionals and learn the details of software development


        </div>
      </div>
    ),
  },
  {
    key: "5",
    label:
      "Will I be given sufficient practical training in Angular training?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Our course is designed to give a hands-on approach to the students in Mean stack Training. The course is made up of theoretical classes that teach the basics of each module followed by high-intensity practical sessions reflecting the current challenges and needs of the industry


        </div>
      </div>
    ),
  },
  {
    key: "6",
    label: "How could I settle my fees?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Fees could be transferred by Cash or Bank payments


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

const MeanstackComponent = () => {
  return (
    <div>
      <div className="banner bg-[#49adcc4a] p-8">
        <div className="container m-auto">
          <Row gutter={32} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={24}>
              <div>
                <div className="text-3xl font-semibold">
                  Get Hands-on knowledge with Real-Time projects from our
                  dedicated MEAN Stack training in Coimbatore.
                </div>
                <div className="mt-8 mb-12 text-base">
                Power your career with great MEAN Stack learning and specialize on MongoDB,
Express js, Angular and Node.js
                </div>
                <Button className="flex items-center h-10 pr-6 pl-6 text-base font-semibold bg-[#49adcc] text-white">
                  Enquiry Now <ArrowRightOutlined />
                </Button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <img
                src={mean}
                alt="kjhdba"
                className="animate-bounce"
              />
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <img
                src={mean}
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
          MEAN STACK DEVELOPMENT TRAINING COURSE
          </div>
          <div className="text-base">
          MEAN is an acronym for Mongo DB,{" "}
            <span className="font-semibold">
              
            </span>{" "}
            Express.js and Angularjs, all of which function upon Node.js Development. This is a platform that allows one to build applications using code as little as possible. It is a free and open-source JavaScript software stack for building dynamic websites and web applications

          </div>
          <div className="text-base mt-6">
          Courses are offered with affordable cost and some special offers are available only at KITKAT SOFTWARE TECHNOLOGY. We are having multiple class timings which suit everyone who wants to learn in their own timing. We do have fast track Mean Stack Developer training and online Mean Stack Developer training with one-to-one basis. In case you are having queries regarding the time, place and duration of the course you can contact our help desk.

          </div>
        </div>
        <div className="container m-auto p-6">
          
        </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          KEY FEATURES OF MEAN STACK DEVELOPMENT COURSE
          </div>
          <div>
            <Row gutter={32} style={{ margin: 0 }}>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You will learn to build Full Stack applications Development in JavaScript using the MEAN technologies
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                   
                  </span>{" "}
                  Understand how to develop and route a basic Single Page Applications (SPAs) using a Mean Stack.
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                   
                  </span>{" "}
                  You will learn to develop and build Restful APIs with Node.js and Express with several security features.
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You will learn to develop AngularJS Reusable Services, Filters and Directives.
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You will learn to develop a modular, maintainable Single Page Applications using Angular                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You will build an end-to-end application with exciting features and test it                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section4 bg-[#49adcc8f]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          WHY MEAN STACK DEVELOPMENT COURSE?
          </div>
          <div className="text-base text-center pb-4">
          This MEAN Stack Development Certification course is designed to give you an essence of front-end, middleware, and back-end web developer technologies. You will learn to build an end-to-end application, test and deploy code, store data using MongoDB, and much more.

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
                MEAN Stack runs on every level of the application and is a single language JavaScript. This makes MEAN stack a proficient and modern approach to Web Application Development. The highlight of Mean Stack is that it is suitable for fresher and working professionals. You will build a MEAN application from scratch with full support from your mentors. This project, which can also be a live industry project, will be reviewed by our instructors and industry experts. At the end of the certification course, you will be prepared yourself with the foundational knowledge you need to begin a career of continuous learning.

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
          WHY KITKAT SOFTWARE TECHNOLOGY FOR MEAN STACK DEVELOPMENT LEARNING?

          </div>
          <div className="text-base pb-4">
           {" "}
            <span className="font-semibold">
            KITKAT SOFTWARE TECHNOLOGY
            </span>{" "}
            MEAN Stack Developer program provides extensive hands-on training in front-end, middleware, and back-end technology skills along with phase-end and capstone projects based on real business scenarios.
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
          Before starting to learn MEAN Stack, you should have good knowledge of JavaScript. Because we are going to use JavaScript Technology in the Front-end and Back-end
.
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
            Mean Stack Development Course Highlights
            </h2>
            <div className="mb-6 pl-6 pr-6 text-base text-white">
            MEAN Stack web development has been gaining popularity for quite some time and is currently in high-demand. MEAN Stack development is an exciting career path for both freshers and experienced individuals
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
                  <Col lg={8} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Mean Stack Web Developer
                    </div>
                  </Col>
                  <Col lg={8} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Web Application Developer
                    </div>
                  </Col>
                  <Col lg={8} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Mean Stack Developer
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        
                      </span>{" "}
                     
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        
                      </span>{" "}
                     
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

export default MeanstackComponent;
