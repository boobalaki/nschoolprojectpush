import { Button, Col, Row, Collapse } from "antd";
import "./index.css";
import data from "./images/data.png"
import Inplant from "./images/inpant13.png";
import fullstack3 from "./images/design.jpeg";
import fullstack4 from "./images/tech.jpeg";
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
    label: "Introduction   ",
    children: (
      <div>
        <ul>
          <li>Data Science Libraries</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Numpy
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Pandas
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  MatplotLib
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Scikit-Learn

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Seaborn
          </li>
          
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Mathematical Operators",
    children: (
      <div>
        <ul>
          <li>File Handling</li>
          <li>Pandas an Intro</li>
          <li>Data Processing</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Getting
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Loading
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Reading
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Sorting
        </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Filtering
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "How Machine Learning is used in Data Science?",
    children: (
      <div>
        <ul>
         
           </ul>
      </div>
    ),
  },
  {
    key: "4",
    label: "Aggregate Statistics using Sum, Mean, Counting",
    children: (
      <div>
        <ul>
         
        </ul>
      </div>
    ),
  },

  {
    key: "5",
    label: "Setting Chunk size(Massive Data Handling)",
    children: (
      <div>
        <ul>
          
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Classification & Types",
    children: (
      <div>
        <ul>
          
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "K-Nearest Algorithm",
    children: (
      <div>
        <ul>
        <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Algorithm and Proof
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Support Vector Machine",
    children: (
      <div>
        <ul>
        <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Algorithm and example
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Clustering & Types",
    children: (
      <div>
        <ul>
        <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  K-means
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Hierarchical clustering
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Association clustering
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "K-Nearest Algorithm",
    children: (
      <div>
        <ul>
        <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Algorithm
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Example
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Bayes Theorem",
    children: (
      <div>
        <ul>
        <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Algorithm and Proof
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Support Vector Machine",
    children: (
      <div>
        <ul>
        <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Algorithm and example
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Clustering & Types",
    children: (
      <div>
        <ul>
        <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> K-means
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Fuzzy C-means 
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Hierarchical clustering
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Association clustering
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Bellman Equation",
    children: (
      <div>
        <ul>
          
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Back Propagation",
    children: (
      <div>
        <ul>
          
        </ul>
      </div>
    ),
  },
  {
    key: "5",
    label: "Q-learning",
    children: (
      <div>
        <ul>
          
        </ul>
      </div>
    ),
  },
  
];

const items2 = [
  {
    key: "1",
    label:
      "Whom Should I Contact If I Want To Know More Information About The Training?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        You can reach out to us by visiting our website and interact with our live chat support team. Our customer service representatives will assist you with all your queries. You can also send us an email at contact@n-school.com with your query and our Sales Team will clarify your queries or call us on +919043494941

</div>
  </div>
    ),
  },
  {
    key: "2",
    label: "What kind of projects are included as part of the training?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
       KITKAT SOFTWARE TECHNOLOGY offers you the most updated, relevant and high value real-time projects as part of the training programWe provide 100% placement assistance and our placement record is 100% too. We are very proud of the fact that all our students are well-placed in top-level companies


</div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Will I get any certification on completion of the course?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        You will receive a Data Science certification in the form of a course completion certificate by the end of the training





        </div>
      </div>
    ),
  },
  {
    key: "4",
    label:
      "Why should I learn this course from KITKAT ACADEMY",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
       KITKAT SOFTWARE TECHNOLOGY is a pioneer in providing IT courses to students, Job searchers and working experts. Expert Faculties, Fully hands-on training, No PPT based learning, 100% job oriented training, Flexible scheduled classes, Ensured interviews, and Affordable cost fees are the unique features of KITKAT SOFTWARE  TECHNOLOGY that makes you to choose us

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

const DatascienceComponent = () => {
  return (
    <div>
      <div className="banner bg-[#49adcc4a] p-8">
        <div className="container m-auto">
          <Row gutter={32} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={24}>
              <div>
                
                <div className="text-3xl font-semibold">
                Get Hands-on knowledge with Real-Time projects from our dedicated Data Science Course Training in Coimbatore
                </div>
                <div className="mt-8 mb-12 text-base">
                Power your career with great Data Science learning and specialize on Python and Data Science functionalities like Statistical Analysis and Predictive Analysis

                </div>
                <Button className="flex items-center h-10 pr-6 pl-6 text-base font-semibold bg-[#49adcc] text-white">
                  Enquiry Now <ArrowRightOutlined />
                </Button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <img
                src={data}
                alt="kjhdba"
                className="animate-bounce"
              />
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <img
                src={data}
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
BEST DATA SCIENCE COURSE IN COIMBATORE
             </div>
          <div className="text-base ms-4">
          KITKAT SOFTWARE TECHNOLOGY{" "}
            <span className="font-semibold">
            Data Science Course Training Institute in Coimbatore            </span>{" "}
            offers the most progressive certification courses that incorporate different segments like Machine Learning, Cluster Analysis, Data Mining, Cleansing, Transformation, and Deploying Data Visualization, among other things. In the course, the candidates are shown a basic arrangement of aptitudes, such as Statistical analysis, Predictive Analysis, Big Data Analytics, and more. Since the methodology of the course is hands-on rather than hypothetical, the candidates are ready for any number of tasks, be it dealing with statistical packages. This implies, without a doubt, the future will be available to a wide range of career prospects.
          </div>
        </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
         
          </div>
          <div className="text-base ms-4">
           {" "}
            <span className="font-semibold">
              
            </span>{" "}
            Data Science also known as data-driven science encourages you to make models, methodologies, and calculations that give viable utility. Data science course is likewise the act of asking inquiries and discovering answers to unknown problems which in turn motivate business esteems. This cycle includes working with a lot of existing information or characterizing the data all by yourself. These investigations are performed by making different tools or calculations sometimes in an equal or distributed architecture. You also can turn into a data scientist by selecting a good Data Science Course   in Coimbatore with placement assistance.
      
          </div>
          <div className="text-base mt-6 ms-3">
           {" "}
            <span className="font-semibold">
              
            </span>{" "}

          </div>

        </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          KEY FEATURES OF DATA SCIENCE COURSE IN COIMBATORE
          </div>
          <div>
            <Row gutter={32} style={{ margin: 0 }}>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                                    </span>{" "}
                       Learn what data science course is, the various activities of a data scientist’s job, and methodology to think and work like a data scientist.
                       </div>                               
                                                  </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  Develop hands-on skills using the tools, languages, and libraries used by professional data scientists.                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  Working with recommender software and systems and Installation and working with analytics tools.            </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  Apply various data science skills, techniques, and tools to complete a project and publish a report..                </div>
                </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  Demonstrate the ability to quickly perform ad-hoc analysis of Big Data.                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    
                  </span>{" "}
                  You will learn the master handling of large datasets using the Hadoop ecosystem.                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section4 bg-[#49adcc8f]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          WHY DATA SCIENCE COURSE IN COIMBATORE?
          </div>
          <div className="text-base text-center pb-4">
          This Data Science course in Coimbatore is designed to give you an ability to import and clean data sets.  Working with Big Data Analytics tools gain you skill to refine and practice more on Data Science languages and libraries

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
                Mastering the field of Data science Course starts with understanding and working with the core innovation used for analyzing. You’ll be expertise in complex data science calculations and their execution using Python. Once Master in Data Management and predictive analytic techniques, you will gain exposure to state-of-the-art machine learning technologies. This broad learning way will assist you with dominating over the whole data science technologies and strategies. Icon awesome arrow circle right Train from professionals with industry experience

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
          WHY KITKAT SOFTWARE ACADEMY FOR DATA SCIENCE COURSE TRAINING IN COIMBATORE?

          </div>
          <div className="text-base pb-4 ms-6">
          KITKAT SOFTWARE ACADEMY{" "}
            <span className="font-semibold">
            Data Science Course
            </span>{" "}
             training in Coimbatore provides extensive hands-on training in Data Science tools along with phase-end and capstone projects based on real business scenarios
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
          There are no prerequisites for this Data Science course with certification training in Coimbatore. If you are a beginner looking to start your career in IT, then this is one of the best courses to start with Nschool academy

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
            Data Science Course in Coimbatore Highlights
            </h2>
            <div className="mb-6 pl-6 pr-6 text-base text-white">
            Data Science has been gaining popularity for quite some time and is currently in high-demand. Data Science is an exciting career path for both freshers and experienced individuals

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
              <div className="p-0 py-1  2">
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
       <div className="ms-10">
          
      
</div>


       
        <div className="container m-auto p-6">
          
          
        
          <div className="text-center text-3xl font-semibold mt-6 mb-6">
                      </div>
          <div className="text-base text-gray-600 pb-4">
           
          </div>
          <div className="text-base text-gray-600 pb-4">
           
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
                  <Col lg={5} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Data Science Developer

                    </div>
                  </Col>
                  <Col lg={5} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        
                      </span>{" "}
                     
                    </div>
                  </Col>
                  <Col lg={5} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        
                      </span>{" "}
                      
                    </div>
                  </Col>
                  <Col lg={5} md={4} sm={24} xs={24}>
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
  )
};

export default DatascienceComponent;
