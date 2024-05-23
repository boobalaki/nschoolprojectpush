import { Button, Col, Row, Collapse } from "antd";
import "./index.css";
import FullstackBanner from "./images/software.jpeg";
import Inplant from "./images/inpant13.png";
import fullstack3 from "./images/design.jpeg";
import fullstack4 from "./images/tech.jpeg";
import digital from "./images/digital.png"
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
    label: "Introduction to Digital Marketing   ",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />What is digital marketing?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  How Has Digital Marketing Evolved?

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Definition of digital marketing
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> History and evolution of digital marketing

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Difference between traditional marketing and digital marketing

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Types of digital marketing approaches – pull and push digital marketing

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Why is digital marketing important?

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Types of online presence
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> How does digital marketing fulfill the definition of marketing?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Who needs digital marketing services?    
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> The 4ps of marketing and their implications for digital marketing

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Segmentation strategies for digital marketing

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Pulling together the five forms of segmentation for digital marketing -personas
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Digital marketing platforms

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Digital marketing platforms

          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "2",
    label: "Website Planning and Creation",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Define your target audience
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Organize your concepts and materials
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Create a directory structure (also called site map)
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Create a sketch of the pages you intend to create
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Design and refine the look and feel of the site
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "3",
    label: "Search Engine Optimisation (SEO)",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Introduction about Search engine
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Working Methodology
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />SEO Fundamentals and Concepts
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Organic and Inorganic Results
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Website Indexing
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Google Processing
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "4",
    label: "On Page Optimization",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> 404 Not Found
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            URL Optimization
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Meta Data Optimization
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Image Optimization
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Internal Linking          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}  Content Keyword </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}  Content Keyword Optimization</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}  Header Tags </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Responsive Design   </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Schema.org </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Social Media connect
 </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} URL Canonicalization </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}  Landing Page Optimization
</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} No-Follow and Do-Follow </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Creating Sitemap XML/HTML
 </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Robot.Txt  </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}  Anchor Links Optimization
</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} 301 Redirection </li>
            
        </ul>
      </div>
    ),
  },

  {
    key: "5",
    label: "Off Page Optimization",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Types of Link Building

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Difference between White Hat and Black Hat in SEO
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Directory Submission

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Social Bookmarking in SEO
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Dos and Don’ts in Link Building

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Search Engine Submission
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Article Submission
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Local Business Listing</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Image/Video Sharing </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> PPT Submission</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Press Release Submission </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Quora Blog</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Local Business Listing </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Classifieds Submission
</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Alexa Rank, Domain </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Blog Commenting</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Social Media Optimization </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Guest Blogging </li>
        </ul>
      </div>
    ),
  },

  {
    key: "6",
    label: "Social Media Optimization (SMO)",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Introduction to Social Media Networks
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            For Loop, While Loop, Do While Loop

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Concepts about SMO
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Facebook Optimization
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Twitter Optimization  </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Instagram Optimization
  </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Right Hashtag for your post
             </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Facebook, LinkedIn, YouTube, Pinterest

             </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Blogs for Business
             </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Image Optimization
             </li>
          </ul>
      </div>
    ),
  },

  {
    key: "7",
    label: "Social Media Marketing (SMM)",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Facebook Optimization    
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Fan Page vs. Profile vs. Group
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Facebook Analytics

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Facebook Advertising and Its Types in Detail
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Creating Advertising Campaigns
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}CPC vs. CPM vs. CPA </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Conversion Tracking </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Creating Strong Profiles on Twitter</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Followers, Retweets, Clicks, Conversions, HashTags </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} LinkedIn Optimization </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Individual Profile vs. Company Profile</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Database Management and Lead Generation</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Branding On LinkedIn </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Marketing on LinkedIn Groups</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Identify Target Audience and Convert Goal</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Report Generation on Post Reach</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Increasing ROI through LinkedIn Ads</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Conversion Tracking and Reporting</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}YouTube Optimization </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Channel Creation</li>
        </ul>
      </div>
    ),
  },
  {
    key: "8",
    label: "Pay-Per-Click (PPC) Advertising",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Introduction to online advertising and adwords
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Adwords account and campaign basics</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} PPC Basic</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Adwords account and campaign basics</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Adwords Tools
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Opportunities
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Optimizing Performance
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Ads Type
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Bidding Strategies
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Search Network Icon awesome check Display network
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Shopping Ads
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Video Ads
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "} Universal App Ads
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Tracking Script
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Remarketing
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Performance Monitoring and Conversion Tracking
            </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}Reports
            </li>
        </ul>
      </div>
    ),
  },
  {
    key: "9",
    label: "Content Marketing",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Introduction to Blogs

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Setting up Blog with Own Content
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Content Duration </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Making a Compelling Personality for Your Content
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Step by step instructions to Monetize Your Blog
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "10",
    label: "Keyword research and Website Analytics",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Why is Keyword Research So Important in SEO?

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Finding your Focus Keyword
 </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Competitor Keyword Research and Analysis
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Search for Related Keywords  </li> <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Searching Long Tail Keywords </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Searching Question Keywords</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Determine the Primary Goals & Objectives of Your Website
 </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Focus on Conversions  </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Define Key Performance Indicators (KPIs)
 </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Automate and Integrate Marketing Processes
 </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Track Progress and Review Strategy Regularly </li>
        </ul>
      </div>
    ),
  },
  {
    key: "11",
    label: "Digital Media Planning and Buying",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />
            What Is Media Buying?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            The Media Buying Process
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Choosing the Right DSP
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />What Is Media Planning?
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> The Media Planning Process
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> The Differences between Media Buying and Media Planning
          </li>
        </ul>
      </div>
    ),
  },

  {
    key: "12",
    label: "Web Remarketing",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> What Is Remarketing?
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            How Remarketing Works
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />The Benefits of Remarketing

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />The Different Types of Remarketing
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> 6 Tips to Leveraging Remarketing and Increasing Your Bottom Line

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />    Incorporate Remarketing in Your Digital Marketing Strategy

          </li>
          
        </ul>
      </div>
    ),
  },
  {
    key: "13",
    label: "Email Marketing",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Introduction to Email Marketing

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Using Email Marketing Software
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Building Email Lists by Quantity

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Crafting an Email
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Analysing and tracking Your Email Marketing Strategy

          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "14",
    label: "Mobile Marketing",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Location-based marketing


          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Responsive site design
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Social media advertisements

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Mobile-friendly content
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Voice search

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Text message marketing
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Videos and GIFs</li> 
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   On-site and in-app support</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   Personalize campaigns
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Opt-in forms
          </li>
        </ul>
      </div>
    ),
  },
  {
    key: "15",
    label: "E-Commerce Management",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Increase E-commerce Search Usability</li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />{" "}
            Use High-Quality Photographs and Good Product Descriptions
          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Try Personalizing the Home Page

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Focus on Consistent and Unique Content
         </li>
         <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Optimize Shopping Cart Functionality

          </li>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Build E-mail Lists</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Improve Your Social Media Strategy</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Create Landing Page </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Build Advertising Strategies</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Implement User-Generated Content </li>
          </ul>
      </div>
    ),
  },
  {
    key: "16",
    label: "Online Reputation Management",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Corporate reputation in the digital age </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Reputation and participatory culture
</li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />How online has changed the media cycle </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Managing reputation online </li>
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Towards best practice reputation management</li>
        </ul>
      </div>
    ),
  },


  {
    key: "17",
    label: "AdSense, Blogging and Affiliate Marketing",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Introduction</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Setting up your blog</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Writing blog post </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Webmaster Tools: Very important for Indexing</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Driving Traffic to the Blog </li> 
             </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Competitor Analysis",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Understanding Competitor Analysis and Intelligence</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Setting up your blog</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Writing blog post </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Webmaster Tools: Very important for Indexing</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Driving Traffic to the Blog </li> 
             </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "AdSense, Blogging and Affiliate Marketing",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Understanding Competitor Analysis and Intelligence</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Setting up your blog</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Writing blog post </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Webmaster Tools: Very important for Indexing</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Driving Traffic to the Blog </li> 
             </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "AdSense, Blogging and Affiliate Marketing",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Understanding Competitor Analysis and Intelligence</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Analysing Competitors: Segments of Analysis</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Integrating Analysis into Decision Making </li>
             </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Bing Advertising",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />
Icon awesome check</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Importing Campaigns, Ad Groups and Keywords</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Bidding and Traffic Estimation </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Import from Google Adwords</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Ads creation </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Choosing right Keywords</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Bing Ads Reports </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Conversion Tracking with Campaign Analytics </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Bing Ads Editor Account Management Tips </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Bing Ads Editor Campaign Optimization</li> 
             </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "YouTube Video Marketing & Advertising",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Create a YouTube channel for busines</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Learn about your audience</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Research your competition</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Learn from your favourite channels</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Optimize your videos to get views </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Upload and schedule your videos</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Optimize your channel to attract followers
</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Try YouTube advertising</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Try working with an influencer </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Analyse and adapt</li> 
             </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Blogging",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Blog for the right audience</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Set clear objectives</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Develop a content strategy </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Follow a blogging schedule</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Have a content promotion strategy </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Your blog needs personality </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Have action-driven content </li> 
             </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "Google AdSense",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Google Adsense Fundamentals</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Google Adsense Approval Basics</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Google Adsense Approval Strategies </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Introduction to Adsense Account Interface</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />How to use Adsense Account Interface? </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  How to place ads on websites? </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />How to place ads on blogs? </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Custom Ads Fundamentals</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Ads/DFP Planner</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />How will you earn money via Adsense?</li> 
             </ul>
      </div>
    ),
  },
  {
    key: "17",
    label: "FREEMIUM AND PREMIUM Digital Marketing Tools",
    children: (
      <div>
        <ul>
          <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Google Analytics</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Buffer</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> HubSpot </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Google Ads</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />Google Trends </li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Google Search Console</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" /> Grammarly</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />  Facebooks Ads Manager</li> 
            <li className="mb-2">
            <CheckOutlined className="text-[#49adcc] font-bold mr-2" />   LinkedIn Ads Manager</li> 
             </ul>
      </div>
    ),
  },

];

const items2 = [
  {
    key: "1",
    label:
      "What are the benefits of taking a Digital Marketing course?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Career prospects and job security are the key drivers for students. Digital marketing positions offer high salaries and job satisfaction, and relevant skills to help students kick start their career        </div>
      </div>
    ),
  },
  {
    key: "2",
    label: "It is hard to learn Digital Marketing?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Digital marketing does not involve any software nor does it require to create any designs or write code. It is the process of creating more brand awareness for your product/ service in the digital space. It is very simple to learn although it takes considerable time and effect to gain total expertise in the subject

</div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Is Digital Marketing a good career?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Digital Marketing is huge today with every single company be it a startup or reputed one embracing online marketing technique in the big way. All companies need Digital Marketing professionals & the demand is only increasing now. So there shall be no doubt in your mind that Digital Marketing has terrific career opportunities in India



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
        We conduct the live project during the course, wherein you can apply your knowledge and skills that you acquired through our training

</div>
      </div>
    ),
  },
  {
    key: "5",
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
    key: "6",
    label: "Do you offer Digital Marketing courses online?",
    children: (
      <div>
        <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f]">
        Yes we offer Digital Marketing course online. Kindly mail us at contact@n-school.com to know more details about our online courses
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

const DigitalComponent = () => {
  return (
    <div>
      <div className="banner bg-[#49adcc4a] p-8">
        <div className="container m-auto">
          <Row gutter={32} style={{ margin: 0 }} className="items-center">
            <Col lg={12} md={12} sm={24}>
              <div>
                <div className="text-3xl font-semibold">
                  Get Hands-on knowledge with Real-Time projects from our
                  dedicated Digital Marketing  Course in Coimbatore.
                </div>
                <div className="mt-8 mb-12 text-base">
                Power your career with great Digital Marketing learning and specialize on Search
Engine Optimization(SEO), Social Media Marketing(SMM), Keyword Planner, and
Content Developing

                </div>
                <Button className="flex items-center h-10 pr-6 pl-6 text-base font-semibold bg-[#49adcc] text-white">
                  Enquiry Now <ArrowRightOutlined />
                </Button>
              </div>
            </Col>
            <Col lg={12} md={12} sm={0} xs={0}>
              <img
                src={digital}
                alt="kjhdba"
                className="animate-bounce"
              />
            </Col>
            <Col lg={0} md={0} sm={24} xs={24}>
              <img
                src={digital}
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
          Digital Marketing Course in Coimbatore          </div>
          <div className="text-base ms-4">
          KITKAT SOFTWARE TECHNOLOGY{" "}
            <span className="font-semibold">
            Digital Marketing Course inCoimbatore,
            </span>{" "}
            individuals can acquire a comprehensive understanding of digital marketing concepts, ranging from foundational to advanced levels. The training curriculum caters to both novices and professionals alike. Additionally, our esteemed mentors, possessing over 5 years of expertise, provide live instructor-led training. The course delves into various aspects of digital marketing, including SEO, SEM, SMO, Affiliate Marketing, and more. Participants will also have the opportunity to gain practical experience with tools such as Google Analytics and Canva, under the guidance of our experienced mentors. Our specialists offer hands-on instruction to ensure that students gain a thorough understanding of all devices and processes.          </div>
          
        </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          Digital Marketing Course with SEO and SMM.
          </div>
          <div className="text-base ms-4">
           {" "}
            <span className="font-semibold">
              
            </span>{" "}
            The Digital Marketing Course offered in Coimbatore is designed to provide a comprehensive understanding of Digital Marketing Strategy, Social Media Marketing, Google PPC Ads, SEO, SMM, YouTube, email marketing, Facebook Marketing, and Google Analytics through real-world projects. The course will equip you with the necessary skills to make informed decisions for your company’s development by teaching you Google Analytics and Tag Manager from the ground up through hands-on demonstrations. Upon completion of the course, you will receive a certificate as a Certified Digital Marketer.

          </div>
          <div className="text-base mt-6 ms-3">
           {" "}
            <span className="font-semibold">
              
            </span>{" "}
            This course will provide you with the knowledge and skills to build an optimized Google Ads PPC Campaign, with sample project work to increase visits to your landing page and boost sales. Additionally, the Advanced Digital Marketing Course in Coimbatore will teach you how to use retargeting and display advertising methods to generate more leads. Our Classroom Digital Marketing Courses also offer the opportunity to earn additional income by becoming an affiliate marketer through internet marketing.

          </div>

        </div>
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          Key Features of Digital Marketing Course in Coimbatore
          </div>
          <div>
            <Row gutter={32} style={{ margin: 0 }}>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    LIVE Project:                  </span>{" "}
                    Our team engages in diverse industries to cater to our clients’ needs, ranging from social media to Google AdWords. We undertake authentic Search Engine Optimization (SEO) projects to acquire practical knowledge and proficiency in fundamental SEO techniques utilized in endeavors such as website creation, paid advertising, and social media.                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    Flexibility:
                  </span>{" "}
                  KITKAT Software Technologics offers  provides Digital Marketing Training in Coimbatore on weekends, weekdays, and fast-track basis, with the option of a personalized batch schedule. We extend 100% placement support to all eligible students who have successfully completed the program.

                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    Learn from Industry Experts:
                  </span>{" "}
                  Our proficient trainers are seasoned experts with practical experience in the field of digital marketing. At Nschool Academy, our Digital Marketing Trainers devote their time and effort to each student, imparting comprehensive education and a comprehensive range of practical exercises. The digital marketing instructors equip their students with skills that are relevant to the industry.
                </div>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24} className="mb-4">
                <div className="text-base">
                  <span className="font-semibold">
                    <ArrowRightOutlined className="bg-black text-white p-1 rounded-2xl text-xs" />{" "}
                    Lifetime support
                  </span>{" "}
                  Our institute for Digital Marketing training in Coimbatore offers 24*7 support and personalized one-on-one sessions with career mentors to assist learners in acquiring the requisite skills and mindset to secure a desired job based on their qualifications.
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="section4 bg-[#49adcc8f]">
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-4 mb-8">
          Why Digital Marketing ?
          </div>
          <div className="text-base text-center pb-4">
          Digital marketing employs online platforms to advertise a business, its merchandise, or its services. This form of marketing is executed both organically and artificially, primarily through the internet and mobile devices. In contemporary times, individuals allocate a significant portion of their time to browsing the internet and utilizing mobile phones. It is noteworthy that Nschool Academy’s Digital Marketing Training in Coimbatore offers a thorough curriculum that encompasses cutting-edge digital marketing methodologies and tactics. emphasize the internet and mobile phones to reach the appropriate demographic.

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
                In the contemporary digital landscape, digital marketing has emerged as a crucial concept for the promotion of products and services. Our erudite educators possess extensive proficiency in imparting Digital Marketing education to students, enabling them to gain a comprehensive understanding of diverse tools and techniques. The Digital Marketing syllabus at Nschool Academy encompasses search engine optimization on Google, Bing, and Yahoo, along with exemplary practical projects.

.
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
          WHY KITKAT SOFTWARE ACADEMY FOR Digital MARKETING COURSE IN COIMBATORE?

          </div>
          <div className="text-base pb-4 ms-6">
          KITKAT SOFTWARE ACADEMY{" "}
            <span className="font-semibold">
            The Digital Marketing Course
            </span>{" "}
            offered by our institution in Coimbatore has been meticulously crafted to cater to the demands of the global market. Our team of highly experienced Digital Marketing instructors, possessing over a decade of platform experience, are industry leaders in their field. The course is designed to be interactive and instructor-led, with Nschool Academy in Coimbatore providing the necessary guidance. Our courseware is tailored to meet industry-specific requirements and covers essential digital marketing principles such as SEO, SEM, SMO, SMM, video marketing, and affiliate marketing. Our comprehensive digital marketing training in Coimbatore is aimed at equipping you with the most effective marketing techniques. We also offer periodic recap sessions to enable you to enhance your skills by revisiting previously learned concepts.
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
          Only learning interest matters in Digital Marketing technology training. We don’t expect technical background to get through this learning course

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
            Digital Marketing Course in Coimbatore Highlights
            </h2>
            <div className="mb-6 pl-6 pr-6 text-base text-white">
            Digital Marketing has been gaining popularity for quite some time and is currently in high-demand. Digital Marketing  is an exciting career path for both freshers and experienced individuals
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
        <div className="text-center text-3xl font-semibold mt-6 mb-6">
        Tools we covered in our digital marketing course in Coimbatore:

          </div><div className="ms-10">
          <li>Social media marketing tools
</li>
          <li>Email marketing tools
</li>
          <li>SEO (search engine optimization) tools
</li>
          <li>Graphic creation tools
</li>
          <li>Conversion optimization tools
</li>
          <li>Lead enrichment tools
</li>
          <li>Landing page and lead capture tools
</li>
      
</div>


       
        <div className="container m-auto p-6">
          <div className="text-center text-3xl font-semibold mt-6 mb-6">
          Digital Marketing Course with Placement in Coimbatore

          </div>
          <div className="text-base pb-4">
          Upon the successful completion of the Digital Marketing course in Coimbatore, Nschool Academy extends its unwavering support to all eligible students by providing 100% placement assistance. Our institution boasts an active placement cell that facilitates the employment of students in their preferred fields. Our esteemed faculty members offer invaluable guidance on interview questions and techniques, thereby enabling students to prepare for and handle interviews with the utmost professionalism and confidence. Furthermore, we have established collaborations and memoranda of understanding with small and medium-sized enterprises to provide students with opportunities to launch and advance their careers.
          
          </div>
          <div className="text-center text-3xl font-semibold mt-6 mb-6">
          Job Opportunities in Digital Marketing
          </div>
          <div className="text-base pb-4">
          Market Hiring Trends has predicted a significant surge in the demand for Digital Marketing proficiency based on the data provided. In fact, over 44% of all enterprises are currently seeking the services of a proficient marketing specialist to assist them in promoting their business online. According to a survey conducted by Goldman Sachs, the Indian Internet Industry is projected to be valued at $160 billion within the next five years, which is approximately three times its current value. As the number of Internet users has increased in recent years, so has the digital marketing industry.


          </div>
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
          Digital Marketing Certification Course in Coimbatore
          </div>
          <div className="text-base pb-4">
          The Digital Marketing Course with Certification offered by Nschool Academy in Coimbatore is widely recognized as a professional certification that attests to the candidate’s comprehensive understanding of the Digital Marketing platform and its practical application in the field. Upon completion of the course, the candidate will be equipped with the requisite skills to commence a career as a digital marketer, as evidenced by their successful completion of a real-time project experience at the conclusion of the course. The certification, which may be included with the candidate’s CV, serves to accentuate their profile during the interview process and opens the door to a diverse array of employment opportunities.
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
                  <Col lg={5} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Digital Marketing Executive

                    </div>
                  </Col>
                  <Col lg={5} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Search Engine Optimization Executive
                    </div>
                  </Col>
                  <Col lg={5} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Search Engine Optimization Executive
                    </div>
                  </Col>
                  <Col lg={5} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Content Marketing Executive
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={24} xs={24}>
                    <div className="text-lg">
                      <span className="text-5xl font-bold mr-1 text-gray-400">
                        .
                      </span>{" "}
                      Web Development Executive
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="text-2xl font-semibold mt-4 mb-8 ms-5">
      Job responsibilities of a digital marketer
      </div>
      <div className="ms-5">
      The purpose of digital marketing is to develop successful and distinctive strategies for promoting a company’s brand, goods, and services. A digital marketing professional must effectively use all marketing tools and methods, such as PPC, SEO, SEM, email, social media, and display advertising. All of the above, and more, will be included in a standard digital marketing job description:

      </div>
      <div className="ms-10">
        <li>Discover patterns and insights
</li>
        <li>Spend money on marketing.
</li>
        <li>Marketing initiatives should be strategically planned and directed.
</li>
        <li>Manage and maintain a company’s website while following best practices.
</li>
        <li>Optimize the content on the website and social media channels.
</li>
        <li>Work with different sorts of information, such as blogs, videos, audio podcasts, etc.
</li>
        <li>Keep an eye on the website’s traffic.
</li>
        <li>Metrics for performance should be implemented and analyzed.
</li>
        <li>ROI should be used to measure and evaluate goals.
</li>
        <li>Device experiments and conversion testing
</li>
        <li>Provide internal reports regularly.
</li>
        <li>Implement new and inventive interactions across platforms and technologies.
</li>
        
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

export default DigitalComponent;
