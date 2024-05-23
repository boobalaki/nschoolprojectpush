import { Button, Col, Row, Collapse } from "antd";
import "./index.css";
import FullstackBanner from "./images/software.jpeg";
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
    label: "Introduction",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is
            web development or website ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Modern
            Technologies and the evolution of PHP
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Web
            application architecture
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is
            WWW ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is
            HTTP ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is
            URL ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is
            W3C ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is
            DNS ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> An
            introduction to domain names, web servers, and website hosting.
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Introduction to HTML& CSS
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Introduction to JAVASCRIPT
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Introduction to JQUERY
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Introduction to Angular JS
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Web Development Basic",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Basic
            knowledge of Web designing & Layouts, Color Schemes, Fonts
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Responsive designs
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is
            HTML & CSS?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What are
            web pages ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Absolute
            vs Relative URL
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Static
            Vs Dynamic Websites
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Client
            side Vs Server side Scripting
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> How web
            works ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> SEO
            basics
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> The term
            ” REQUEST & RESPONSE “
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Databases Basics
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "HTML & HTML5",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is
            web development or website ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Structure
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Syntax,
            do types & extension of HTML document
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Tags,
            Attributes and Elements
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Layouts,Block level and inline elements
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Manipulating Text & Images, Linking Pages, comments
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Page
            Titles, Meta Tags, Paragraphs, Headings
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Tables,
            DIV, SPAN
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> HTML
            Forms and Input, Lists, field sets
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Borders
            & Alignment
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> HTML
            iframes
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Scrollbars Colors, color
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> names,
            values
          </li>
          <li className="mb-2 font-semibold">Introduction to HTML5</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> HTML5
            new elements
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> HTML5
            form elements, types, attributes
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> A very
            simple HTML document exercise
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "4",
    label: "CSS",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What is CSS ?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            How does CSS work?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Types and syntax of CSS
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Identification and grouping of elements (class and id)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Cascading Properties, selectors, Table Properties
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Colors, Hexadecimal Colors and backgrounds
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Links, Fonts, Images and Text

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Margins, Paddings, Borders
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> The box model
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> CSS Navigation Bars
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Layering Styles with Multiple Classes
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Common CSS Property Values
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Pixels, Lengths, Floating elements (floats), Positioning of elements
          </li>
          <li className="mb-2 font-semibold"> CSS Media Types</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Image Sprites
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Rounded Corners, Gradients, nested selectors

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Web -standards and validation
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Examples of template building
          </li>
        </ul>
      </div>
    ),
  },

  {
    key: "5",
    label: "Javascript",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> An overview of JavaScript
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Data types, Variables, Expressions in JavaScript, Popup Boxes, Operators
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Conditional Statements, Loop Statements, Comments

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />JavaScript Events, Client side validation, Basics of DOM
(class and id)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            JavaScript functions, objects
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Exception Handling, Debugging
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Arrays, Strings, Date, Number, Regular expressions

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> DOM with HTML & CSS
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> DOM Methods, Events
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> JSON
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Ajax
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
    label: "Node Dev Environment",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Install Nodejs


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Working in REPL
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Nodejs Console

         </li>
         
          
        </ul>
      </div>
    ),
  },

  {
    key: "20",
    label: "Node.js Modules",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Functions, Buffer, Module


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Module Types
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Core Modules & Local Modules


         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Module. Exports


         </li>
          
        </ul>
      </div>
    ),
  },

  {
    key: "21",
    label: "NPM",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Functions, Buffer, Module </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Adding dependency in package.json
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Installing packages globally </li>
         <li className="mb-2">Updating packages </li>  
        </ul>
      </div>
    ),
  },

  {
    key: "22",
    label: "Creating Web Server",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Creating Web Server</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Handling http requests
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Sending requests</li>
          
        </ul>
      </div>
    ),
  },
  {
    key: "23",
    label: "File System",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Read File & Writing a File
</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Writing a file asynchronously
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Opening a file & Deleting a file </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Other IO Operations </li>
          </ul>
      </div>
    ),
  },

  {
    key: "24",
    label: "Debugging Node.js Application",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Core Node JS debugger

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Debugging with Visual Studio
          </li>
                    
        </ul>
      </div>
    ),
  },
  {
    key: "25",
    label: "Events & Express.JS ",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Event Emitter class</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Returning event emitter
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Inhering events


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Configuring routes
(class and id)
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Working with express
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />    Serving static files </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Working with middle ware
</li>
 </ul>
      </div>
    ),
  },

  {
    key: "26",
    label: "Database Connectivity",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Connection string

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Configuring
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Working with select command ,Updating records, Deleting records
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            MongoDB
          </li>      
        </ul>
      </div>
    ),
  },

  {
    key: "27",
    label: "MongoDB",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> 
            Concepts & SQL and Complex Transactions </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Installing MongoDB
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> JSON
             </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Dynamic Schema & Mongo import
(class and id) </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Command Line Options </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Cursors & Query Language: Basic Concepts Projection </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Query Language: Advantages of a Dynamic Schema</li>
<li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Shell: Queries</li>
 </ul>
      </div>
    ),
  },
  {
    key: "28",
    label: "CRUD, ADMIN COMMANDS",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> 
            Insertion , Update , save Command </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Partial Updates & Document Limits
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Removing Documents
             </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Multi Update
(class and id)
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  collection.stats() & collection.drop() </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   mongostat and mongotop </li>
         </ul>
      </div>
    ),
  },

];

const items2 = [
  {
    key: "1",
    label:
      "As a fresher it is good to do a full-stack developer course to get a good job?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
          Not the fresher or the well-trained developer, if you up skill your
          knowledge in a full stack course then definitely you will find a
          better career.
        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "What does a full-stack developer do?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
          A full-stack developer is a professional who can handle back-end
          development tasks such as databases, servers, and systems engineering,
          as well as front-end web development and UI work. Depending on the
          project, your work might include a mobile stack, a web stack, or a
          native application stack.
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Who should take up full stack development training?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
          Undergraduates and fresher looking to make their career in full stack
          and MEAN stack. Developers, Designers and freelancers who want to
          build their own apps.
        </div>
      </div>
    ),
  },
  {
    key: "4",
    label:
      "What are the prerequisites for taking up a full stack development course?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
          We do not enforce any pre-requisites for learners who want to up skill
          their knowledge. Everybody is welcome to enroll in this course.
        </div>
      </div>
    ),
  },
  {
    key: "5",
    label:
      "What kind of projects are included as part of the full stack development training?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        KITKAT Software Technologics offers you the most updated, relevant and high value
          real-time projects as part of the training program.
        </div>
      </div>
    ),
  },
  {
    key: "6",
    label: "Do you provide a discount?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
          Sometimes we do have discounts for our courses and make some offer
          announcements during the festival time
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

const FullStackComponent = () => {
  return (
    <div>
      <div className="banner bg-[#49adcc4a] p-8">
        <div className="container m-auto">
          <Row gutter={32} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={24}>
              <div>
                <div className="text-3xl font-semibold">
                  Get Hands-on knowledge with Real-Time projects from our
                  dedicated Full Stack Course in Coimbatore.
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
                src={FullstackBanner}
                alt="kjhdba" style={{width:"70%",height:"200px"}}
                className="animate-bounce"
              />
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}  >
              <img
                src={FullstackBanner}
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
            Full Stack Course in Coimbatore
          </div>
          <div className="text-base">
            Nschool Academy offers an exceptional{" "}
            <span className="font-semibold">
              Full Stack Developer Course in Coimbatore,
            </span>{" "}
            which equips learners with the necessary skills to construct dynamic
            and responsive web applications using both backend and frontend
            technologies. The course commences with fundamental web programming
            concepts, progresses to essential JavaScript and jQuery principles,
            and culminates in the design of custom user interfaces with Angular
            or React. Our experienced mentors will provide guidance in creating
            scalable backend applications with Express and Node.js, imparting
            the most sought-after skills from trainers dedicated to your
            success.
          </div>
          <div className="text-base mt-6">
            Through practical Full Stack course in Coimbatore, you will acquire
            proficiency in handling data using MongoDB. Our hands-on training
            will transform you into a versatile professional, highly
            sought-after in the development industry. In today’s competitive
            landscape, proficiency in only one software or website development
            type, such as frontend or backend, is no longer sufficient. Instead,
            the Full Stack Course in Coimbatore prepares you for all aspects of
            web development. prepares you for everything.
          </div>
        </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Full Stack with React, Angular, JavaScript, Node js
          </div>
          <div className="text-base">
            At Nschool Academy’s{" "}
            <span className="font-semibold">
              Best Full Stack Course in Coimbatore,
            </span>{" "}
            you will be equipped with the fundamental knowledge of Git,
            front-end web development, JavaScript, Angular, and other
            programming languages. This will serve as a strong foundation before
            delving into the industry’s top two libraries and frameworks, React
            JS and Node JS. The course is designed to teach you the principles
            from scratch while simultaneously creating an industry-ready
            single-page web application.Furthermore, the course will also cover
            the deployment and management of applications utilizing the DevOps
            process. As a full-stack developer, you will be responsible for
            overseeing the complete user interface (UI) design and aesthetics,
            including HTML and CSS code. The course will provide you with the
            necessary experience in developing online applications using HTML5,
            CSS3, AngularJS, Node.js, JavaScript, jQuery, MySQL, Redis, Docker,
            Git, Express.js, MongoDB, Jenkins, AWS, Azure, and other relevant
            technologies.
          </div>
        </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Full Stack with React, Angular, JavaScript, Node js
          </div>
          <div>
            <Row gutter={32} style={{ margin: 0 }}>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    LIVE Project:
                  </span>{" "}
                  The Full Stack course offered by KITKAT Software Technologics in Coimbatore
                  provides comprehensive instruction through extensive practical
                  exercises and individualized attention to ensure optimal
                  results for each student. Our program includes a real-time
                  live project as part of the Full Stack training curriculum.
                  Our trainers assist students in crafting a professional CV and
                  bolstering their confidence by offering valuable insights into
                  interview questions and techniques through mock interviews.
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    Flexibility:
                  </span>{" "}
                  KITKAT Software Technologics offers a versatile batch schedule, catering to
                  both weekend and weekday learners, as well as those seeking a
                  fast-track Full Stack Course in Coimbatore. It is noteworthy
                  that all eligible students who successfully complete the
                  program will receive 100% placement assistance.
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    Learn from Industry Experts:
                  </span>{" "}
                  The KITKAT Software Technologics in Coimbatore boasts proficient full-stack
                  trainers who possess extensive programming expertise and are
                  proficient in both frontend and backend technologies. They
                  possess a comprehensive understanding of programming languages
                  such as HTML, CSS, JavaScript, React, Angular, Node.js, and
                  others, as well as the ability to design, manage, and execute
                  database queries.
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    24*7 support:
                  </span>{" "}
                  KITKAT Software Technologics offers round-the-clock assistance and
                  personalized Full Stack Developer Development sessions with
                  proficient mentors, aimed at equipping learners with the
                  requisite competencies and mindset to secure employment
                  commensurate with their qualifications.
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section4 bg-[#49adcc8f]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
            Why Full Stack Course ?
          </div>
          <div className="text-base text-center pb-4">
            Our KITKAT Software Technologics Full Stack Course in Coimbatore programs have
            been meticulously crafted by proficient instructors to cater to the
            requirements of the global industry. The courseware has been
            developed by industry experts to emphasize both frontend and backend
            technologies. The development of a web application in contemporary
            times necessitates the utilization of sophisticated approaches and
            technologies. In essence, web application development entails the
            collaboration of a team of specialists from diverse technological
            backgrounds to work on the web application and development process.
            Frontend developers, backend developers, and database specialists
            are among the various specializations available.
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
                  A full-stack developer possesses the ability to operate
                  autonomously across all tiers of Web Application and
                  Development. This Developer exhibits proficiency in both
                  client-side or frontend software and server-side or backend
                  software, as well as databases, and is capable of effectively
                  working on mobile and native apps. This is why, in comparison
                  to other types of developers, full-stack developers are highly
                  sought-after in the market. KITKAT Software Technologics Full Stack
                  Developer course offers comprehensive instruction on the
                  entire end-to-end Web Development process, overseen by
                  certified professionals in real-time. Additionally, we provide
                  full-stack online training with placement support tailored to
                  your specific requirements.
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
            Why Should You Attend Nschool Academies Full Stack Course in
            Coimbatore?
          </div>
          <div className="text-base pb-4">
            One of the primary rationales for enrolling in the{" "}
            <span className="font-semibold">
              Full Stack Developer Course in Coimbatore
            </span>{" "}
            is to gain a comprehensive understanding of current industry trends
            and business requirements. By participating in live classroom
            instruction, you will receive placement-oriented training and
            enhance your curriculum vitae. The Full Stack Course in Coimbatore
            is renowned for producing some of the most formidable talent in the
            world, and enrolling in it may prove to be a significant career
            advancement opportunity.KITKAT Software Technologics is widely regarded as one of
            the premier full-stack training institutes in Coimbatore, providing
            students with an exceptional platform to study and explore the
            subject matter under the guidance of industry professionals. Our
            institution is committed to assisting our students in realizing
            their aspirations and achieving their goals.
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
            There are no technical requirements to join the Full stack web
            development training course as the basic programming technologies
            are covered here.
          </div>
        </div>
      </div>
      <div className="section9 bg-[#1b424e] pt-8">
        <div className="container mx-auto md:px-6 xl:px-24">
          <section>
            <h2 className="text-center text-3xl font-bold mb-6 text-white">
              Prerequisite
            </h2>
            <h2 className="mb-6 pl-6 pr-6 text-2xl font-bold text-white">
              Full Stack Course Highlights
            </h2>
            <div className="mb-6 pl-6 pr-6 text-base text-white">
              Full Stack web development has been gaining popularity for quite
              some time and is currently in high-demand. Full Stack development
              is an exciting career path for both freshers and experienced
              individuals.
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
                      Full Stack Developer
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Web Developer
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Frontend Developer
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Backend Developer
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Web Designer
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

export default FullStackComponent;
