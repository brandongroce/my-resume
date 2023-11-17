/**
 * Resume data file - Brandon Groce
 * @version 1.4.22
 * 
 */

import { ContentActivities, ContentEducation, ContentExperience, ContentReferences, ContentSkills, Education, Resume, Sections, Skills } from "./resume.types"

/* Heading Constants */
export const name:string = "Brandon Groce"
export const phone:string = "206-550-3950"
export const title:string = "Software Engineer"
export const email:string = "brandon@groce.dev"
export const address1:string = "XXXX S Eddy St"
export const address2:string = "Seattle, WA  98118"


/* Skills Section */
const serverSection:ContentSkills = {
    type: "Server", 
    primary: [
        "Linux",
        "Node",
        "Apache", 
        "Nginx", 
        "AWS", 
        "Docker"
    ],
    secondary: [
        "Tomcat", 
        "Jetty",
        "IIS",
        "Kubernetes"
    ],
    focus: [
        "Configuration",
        "Shell Scripting & Tools",
        "Build Processes",
        "VCS Administration",
        "Deployment",
        "Scalability",
        "Microservices"
    ]
}
const dbSection:ContentSkills = {
    type: "Persistence", 
    primary: [
        "SQL",
        "MongoDB",
        "Memcached",
        "Redis",
        "GraphQL"
    ],
    secondary: [
        "Hibernate",
        "PDO",
        "Prisma",
        "ElasticSearch"
    ],
    focus: [
        "Performance",
        "Schema",
        "Entity Relation",
        "Normalization"
    ]
}
const codeSection:ContentSkills = {
    type: "Language", 
    primary: [
        "JavaScript",
        "TypeScript", 
        "PHP", 
        "HTML",
        "CSS"
    ],
    secondary: [
        "Java", 
        "Swift", 
        "Python",
        "Bash"
    ],
    focus: [
        "OOP", 
        "FP",
        "Documentation",
        "Logging",
        "Testing",
        "Optimization"
    ]
}
const frameworkSection:ContentSkills = {
    type: "Framework", 
    primary: [
        "React",
        "Next",
        "Express",
        "Meteor",
        "Angular", 
        "Drupal",
        "Wordpress",
        "Cypress"
    ],
    secondary: [
        "Spring",
        "Symfony",
        "Sencha",
        "Backbone",
        "Drools",
        "Loopback",
        "Selenium"
    ],
    focus: [
        "MVC",
        "Prototyping",
        "APIs",
        "eCommerce",
        "Auth",
        "Encryption",
        "Webservices",
        "FEs"
    ]
}
export const skills:ContentSkills[] = [ codeSection, frameworkSection, serverSection, dbSection ]
export const tools:(string)[] = [
    "Agile",
    "Rally",
    "REST",
    "Git",
    "Gulp",
    "CasperJS",
    "PhantomJS",
    "Docker",
    "Jenkins",
    "Maven",
    "Jira",
    "Photoshop",
    "Grunt",
    "Yeoman",
    "Protractor",
    "Karma",
    "Jasmine",
    "ES6",
    "New Relic",
    "Compass"
]

/* Experience Section */
const homesite:ContentExperience = {
    name: "American Family Insurance | Homesite | Assurestart", 
    products: "amfam.com | homesite.com",
    type: "FTE", 
    position: "Software Engineer | Team Lead | Manager",
    detail: "Commercial Lines, Auto, Home",
    date: "Aug 2016 - Oct 2020", 
    duties: [
        "Designed and developed an front page portable commercial insurance widget to start quoting based on industry and employees",
        "Created a nodejs express data service to simplify deployment of commercial insurance widget changes",
        "Architected a rules system and service to manage individual whitelabel partner needs based on LOB, state, and industry",
        "Worked with teams to develop, fix, and maintain commercial insurance front end application built on Drupal",
        "Worked with remote teams in Boston and Madison to support home and auto LOB applications built in backbone, react, loopback, express, spring",
        "Heavily involved in front end, workflow, and executor node microservices as well as complex insurance spring/drools rules engine",
        "Rebuilt and modernized old auto quoting system to new React FE",
        "Created new master data object service for managing quotes using graphQL",
        "Integrated data and a/b systems including splunk, new relic, google analytics, optimizely",
        "Participated in react training camp (1 week), on site agile training (3 months), and many offsite conferences",
        "Re-engineered and optimized memcache and redis systems",
        "Was promoted 3 times and ultimately hired and lead/managed a team to rebuild a new home insurance quoting platform",
        "Planned and designed architecture for new home quoting platform, including front-end, services, integrations, persistence, and operations",
        "Worked with stakeholders, teams, POs & PMs with planning and lead meetings and presentations in 3 states",
        "Trained, hired, assisted, and mentored many employees across a large number of teams",
        "Consistently received awards and bonuses for meeting and exceeding team/company expectations"
    ]
}
const disney:ContentExperience = {
    name: "The Walt Disney Company | DTSS",
    products: "disneystore | starwars | abc | marvel",
    type: "Contractor",
    position: "Solution Engineer",
    detail: "Onboarding | Identity",
    date: "Feb 2015 - Aug 2016",
    duties: [
        "System integration with technologies including JavaScript/CSS, Objective-C, Android-SDK, Java, Ruby",
        "Assisted in on-boarding developers to multiple identity platforms for full lifecycle",
        "Work with other internal development teams to help them migrate their sites, applications, and systems",
        "Troubleshooting, debugging, and analysis of code written and maintained by other teams",
        "Contribute features and bug fixes to external and internal code repositories (Java, Angular, PHP)",
        "Work with technical writers to continuously improve documentation",
        "Lead meetings on integration, tools, process improvements, and compliance",
        "In depth troubleshooting across multiple internal systems and external applications",
        "Built multiple tools to support onboarding, compliance, reporting, and testing efforts",
        "Worked efficiently with heavy workloads, aggressive timelines and multiple business units",
        "Oversaw and managed over 30 projects from initial design to production launch",
        "Assisted with localization efforts for UI, email, account recovery and marketing in 10+ languages",
        "Developed innovative applications for Innovation Days and won first place 2015 for most immediate need"
    ]
}
const area52:ContentExperience = {
    name: "Area 52 Games | SBI",
    products: "area52games.com | smartbombinteractive.com",
    type: "FTE",
    position: "Senior Platform Engineer",
    detail: "MMO Game Studio – Star Wars Attack Squadrons | Animal Jam",
    date: "Jun 2012 – Feb 2015",
    duties: [
        "Sole architect and engineer of full platform stack for Star Wars IP MMO game",
        "Worked solutions with publishers, IP owners, and foreign (Asia) investors",
        "Built game front end container site with authentication (symfony2, jquery, mongo, oauth)",
        "Created customized Drupal content, game, and account management app (drupal, mysql, mongo)",
        "Developed high performance client / server applications (backbone, node, jquery, underscore, amdJS)",
        "Built clean, browser and platform compliant, xhtml layouts from PSD asset files (photoshop)",
        "Designed and developed platform rest services platform app (spring, jetty)",
        "Integrated with 3rd party APIs (PlaySpan, DisneyID, Disney Guest Experience, Facebook)",
        "Designed and created secure provider agnostic game token session auth system (jquery, spring, node)"
    ]
}
const gazillion:ContentExperience = {
    name: "Gazillion | The Amazing Society", 
    products: "gazillion.com | amazingsociety.com",
    type: "FTE", 
    position: "Web Application Engineer", 
    detail: "MMO Game Studio – Marvel Super Hero Squad Online",
    date: "Sep 2010 – Jun 2012",
    duties: [
        "Created and maintained the platform from conception - to launch – to currently 2 million+ users",
        "Maintained and extended CSR application (codeigniter, jquery, pure)",
        "Worked and integrated with Spring Webservices and Unity3d Client",
        "Integrated with 3rd party APIs (PlaySpan, Parature, Google In-App Payments, Facebook, WildTangent)",
        "Internationalized Website and supplied a shippable product for our in game catalog (Magento)",
        "Built clean, browser and platform compliant, xhtml layouts from PSD asset files",
        "Extended WordPress with 20+ custom plugins for content, billing, and game administration",
        "Designed and constructed DB schema for new features and SQL procedures to assist with deployment"
    ]
}
const consideropen:ContentExperience = {
    name: "Consider: Open", 
    products: "consideropen.com",
    type:  "Contractor", 
    position: "Lead Developer", 
    detail: "Full Service Web Design and Development Agency",
    date: "Mar 2010 – Sep 2010",
    duties: [
        "Conceptualized ideas for monetization of assets and future development",
        "Lead and implemented team building and best practices exercises as well as optimization techniques",
        "Contributed to reusable code base by building and abstracting Paypal objects and WordPress Plugins",
        "Assisted in project management, UX, UI and database schema design",
        "Coded a startup social networking application",
        "Contributed a payment module to an existing social networking application",
        "Built a knowledge base for an established software company"
    ]
}
const healthglobalconnect:ContentExperience = {
    name: "Health Global Connect", 
    products: "healthglobalconnect.com", 
    type: "Contractor | Volunteer",
    position: "Web Developer", 
    detail: "Social Networking Startup – Support for Cancer Patients", 
    date: "Mar 2009 – Sep 2009",
    duties: [
        "Developed a social networking site from the ground up in a team environment",
        "Built a full featured messaging system in CodeIgniter utilizing ajax and jQuery technologies",
        "Created a model for storing hierarchical data in MySQL with improved query performance",
        "Promoted from unpaid intern/volunteer to paid contract employee"
    ]
}
const myself:ContentExperience = {
    name: "Brandon Groce", 
    products: "various",
    type: "Consultant",
    detail: "various", 
    date: "2006 - Present",
    duties: [
        "Consultant for Metaverse Mod Squad building Zen Desk applications and server api applications",
        "Consultant for customer portal application integration with data services – www.viableware.com",
        "Prototyped a recipe library, aggregation, and grocery shopping application in 3 weeks. The project was funded - www.gatheredtable.com",
        "Created and developed bids and proposals for websites, cms, apps, modules, ecommerce, and more",
        "Primary developer and consultant for Modern Dog Design (20 years in service) – moderndog.com",
        "Designed, developed, and deployed local karaoke company website – myabsolutekaraoke.com",
        "Built mobile karaoke application utilizing jQuery mobile – mobile.myabsolutekaraoke.com",
        "Developer and consultant for VillageOnCall - now caringbridge support planner - www.caringbridge.org"
    ]
}
export const experience:ContentExperience[] = [ homesite, disney, area52, gazillion, consideropen, healthglobalconnect, myself ]

export const education:ContentEducation = {
    school: "Seattle Central",
    grade: "3.9 GPA - Presidents List",
    program: "IT Web Development",
    details: [
        "TA'd classes", 
        "Tutored students", 
        "Gave class presentations here and at Highline College after completion"
    ]
}
export const activities:ContentActivities[] = [
    {
        heading: "Volunteer Work",
        items: [
            "Health Global Connect", 
            "National Association of Psychometrists",
            "MS Walk (emcee & DJ)"
        ]
    },
    {
        heading: "Conferences & Training",
        items: [
            "Developer Week",
            "Disney Dev Innovation Days (1st place winner)",
            "Google Hackathon (2nd place winner)",
            "Adobe Roadshow",
            "React training (on site)",
            "Agile training (on site)",
            "McCarthy core training", 
            "jQuery Hack Day", 
            "DrupalCon", 
            "WebVisions", 
            "Symfony Live", 
            "PostgreSQL conference",
            "Udemy Courses: swift/ios, iot, ai & ml, et. al."
        ]
    },
    {
        heading: "Personal Interests",
        items: [
            "35yr pianist & composer",
            "Emcee & DJ company owner/operator",
            "Build & remodel houses and campers",
            "Space and aviation nerd", 
            "Karaoke",
            "Permaculture",
            "Philomath"
        ]
    }
]
export const references:ContentReferences[] = [
    {
        name: "George Dawoud",
        phone: "650.526.6429",
        email: "george@dawouds.com", 
        description: "Platform Manager – Java Engineer @ Gazillion Entertainment - Former Java Engineer for Real Networks - 25yrs industry experience",
        relation: "I was hired and reported directly to George"
    },
    {
        name: "Clint Bush",
        phone: "650.526.6429",
        email: "george@dawouds.com", 
        description: "Platform Manager – Java Engineer @ Gazillion Entertainment - Former Java Engineer for Real Networks - 25yrs industry experience",
        relation: "I worked on a team with Clint for 4 years - I was hired by Clint"
    },
    {
        name: "Darrin West",
        phone: "650.526.6429",
        email: "george@dawouds.com", 
        description: "Platform Manager – Java Engineer @ Gazillion Entertainment - Former Java Engineer for Real Networks - 25yrs industry experience",
        relation: "I was hired and reported directly to George"
    }
]

/* Layout Sections */
export const sections:Sections = {
    skills: {
        title: "Technology Summary",
        subtitle: "IT Skills",
        content: skills
    },
    experience: {
        title: "IT Work Experience",
        subtitle: "",
        content: experience
    },
    education: {
        title: "Education", 
        subtitle: "",
        content: education
    },
    activities: {
        title: "Activities", 
        subtitle: "and Volunteer Work",
        content: activities

    }, 
    references: {
        title: "References", 
        subtitle: "",
        content: references
    }
}

const resume:Resume =  {
    header: {
        name,
        title,
        email,
        phone,
        address1,
        address2
    },
    sections,
    tools
}

export default resume

/* Just for fun... */
export const moduletext = `
/**
 * Resume data file - Brandon Groce
 * @version 1.4.22
 * 
 */

import { ContentActivities, ContentEducation, ContentExperience, ContentReferences, ContentSkills, Education, Resume, Sections, Skills } from "./resume.types"

/* Heading Constants */
export const name:string = "Brandon Groce"
export const phone:string = "206-550-3950"
export const title:string = "Software Engineer"
export const email:string = "brandon@groce.dev"
export const address1:string = "XXXX S Eddy St"
export const address2:string = "Seattle, WA  98118"


/* Skills Section */
const serverSection:ContentSkills = {
    type: "Server", 
    primary: [
        "Linux",
        "Node",
        "Apache", 
        "Nginx"
    ],
    secondary: [
        "Tomcat", 
        "Jetty",
        "IIS",
        "AWS",
        "Kubernetes"
    ],
    focus: [
        "Configuration",
        "Shell Scripting",
        "Build Processes",
        "VCS Administration",
        "Deployment",
        "Scalability"
    ]
}
const dbSection:ContentSkills = {
    type: "Persistence", 
    primary: [
        "SQL",
        "MongoDB",
        "Memcache",
        "Redis"
    ],
    secondary: [
        "Hibernate",
        "PDO",
        "Prisma",
        "ElasticSearch"
    ],
    focus: [
        "Performance",
        "Schema",
        "Entity Relation",
        "Normalization"
    ]
}
const codeSection:ContentSkills = {
    type: "Language", 
    primary: [
        "JavaScript",
        "TypeScript", 
        "PHP", 
        "HTML",
        "CSS"
    ],
    secondary: [
        "Java", 
        "Swift", 
        "Python",
        "Bash"
    ],
    focus: [
        "OOP", 
        "FP",
        "Documentation",
        "Logging",
        "Testing",
        "Webservices"
    ]
}
const frameworkSection:ContentSkills = {
    type: "Framework", 
    primary: [
        "React",
        "Next",
        "Meteor",
        "Angular",
        "jQuery", 
        "Express", 
        "Drupal",
        "Wordpress",
        "Cypress"
    ],
    secondary: [
        "Spring",
        "Symfony",
        "Sencha",
        "Backbone",
        "Drools",
        "Loopback",
        "Selenium"
    ],
    focus: [
        "MVC",
        "Modules",
        "APIs",
        "eCommerce",
        "Auth",
        "Encryption"
    ]
}
export const skills:ContentSkills[] = [ codeSection, frameworkSection, serverSection, dbSection ]
export const tools:(string)[] = [
    "Agile",
    "Rally",
    "REST",
    "Git",
    "Gulp",
    "CasperJS",
    "PhantomJS",
    "Docker",
    "Jenkins",
    "Maven",
    "Jira",
    "Photoshop",
    "Grunt",
    "Yeoman",
    "Protractor",
    "Karma",
    "Jasmine",
    "ES6",
    "New Relic",
    "Compass"
]

/* Experience Section */
const homesite:ContentExperience = {
    name: "American Family Insurance | Homesite | Assurestart", 
    products: "amfam.com | homesite.com",
    type: "FTE", 
    position: "Software Engineer | Team Lead | Manager",
    detail: "Commercial Lines, Auto, Home",
    date: "Aug 2016 - Oct 2020", 
    duties: [
        "Designed and developed an front page portable commercial insurance widget to start quoting based on industry and employees",
        "Created a nodejs express data service to simplify deployment of commercial insurance widget changes",
        "Architected a rules system and service to manage individual whitelabel partner needs based on LOB, state, and industry",
        "Worked with teams to develop, fix, and maintain commercial insurance front end application built on Drupal",
        "Worked with remote teams in Boston and Madison to support home and auto LOB applications built in backbone, react, loopback, express, spring",
        "Heavily involved in front end, workflow, and executor node microservices as well as complex insurance spring/drools rules engine",
        "Rebuilt and modernized old auto quoting system to new React FE",
        "Created new master data object service for managing quotes using graphQL",
        "Integrated data and a/b systems including splunk, new relic, google analytics, optimizely",
        "Participated in react training camp (1 week), on site agile training (3 months), and many offsite conferences",
        "Re-engineered and optimized memcache and redis systems",
        "Was promoted 3 times and ultimately hired and lead/managed a team to rebuild a new home insurance quoting platform",
        "Planned and designed architecture for new home quoting platform, including front-end, services, integrations, persistence, and operations",
        "Worked with stakeholders, teams, POs & PMs with planning and lead meetings and presentations in 3 states",
        "Trained, hired, assisted, and mentored many employees across a large number of teams",
        "Consistently received awards and bonuses for meeting and exceeding team/company expectations"
    ]
}
const disney:ContentExperience = {
    name: "The Walt Disney Company | DTSS",
    products: "disneystore | starwars | abc | marvel",
    type: "Contractor",
    position: "Solution Engineer",
    detail: "Onboarding | Identity",
    date: "Feb 2015 - Aug 2016",
    duties: [
        "System integration with technologies including JavaScript/CSS, Objective-C, Android-SDK, Java, Ruby",
        "Assisted in on-boarding developers to multiple identity platforms for full lifecycle",
        "Work with other internal development teams to help them migrate their sites, applications, and systems",
        "Troubleshooting, debugging, and analysis of code written and maintained by other teams",
        "Contribute features and bug fixes to external and internal code repositories (Java, Angular, PHP)",
        "Work with technical writers to continuously improve documentation",
        "Lead meetings on integration, tools, process improvements, and compliance",
        "In depth troubleshooting across multiple internal systems and external applications",
        "Built multiple tools to support onboarding, compliance, reporting, and testing efforts",
        "Worked efficiently with heavy workloads, aggressive timelines and multiple business units",
        "Oversaw and managed over 30 projects from initial design to production launch",
        "Assisted with localization efforts for UI, email, account recovery and marketing in 10+ languages",
        "Developed innovative applications for Innovation Days and won first place 2015 for most immediate need"
    ]
}
const area52:ContentExperience = {
    name: "Area 52 Games | SBI",
    products: "area52games.com | smartbombinteractive.com",
    type: "FTE",
    position: "Senior Platform Engineer",
    detail: "MMO Game Studio – Star Wars Attack Squadrons | Animal Jam",
    date: "Jun 2012 – Feb 2015",
    duties: [
        "Sole architect and engineer of full platform stack for Star Wars IP MMO game",
        "Worked solutions with publishers, IP owners, and foreign (Asia) investors",
        "Built game front end container site with authentication (symfony2, jquery, mongo, oauth)",
        "Created customized Drupal content, game, and account management app (drupal, mysql, mongo)",
        "Developed high performance client / server applications (backbone, node, jquery, underscore, amdJS)",
        "Built clean, browser and platform compliant, xhtml layouts from PSD asset files (photoshop)",
        "Designed and developed platform rest services platform app (spring, jetty)",
        "Integrated with 3rd party APIs (PlaySpan, DisneyID, Disney Guest Experience, Facebook)",
        "Designed and created secure provider agnostic game token session auth system (jquery, spring, node)"
    ]
}
const gazillion:ContentExperience = {
    name: "Gazillion | The Amazing Society", 
    products: "gazillion.com | amazingsociety.com",
    type: "FTE", 
    position: "Web Application Engineer", 
    detail: "MMO Game Studio – Marvel Super Hero Squad Online",
    date: "Sep 2010 – Jun 2012",
    duties: [
        "Created and maintained the platform from conception - to launch – to currently 2 million+ users",
        "Maintained and extended CSR application (codeigniter, jquery, pure)",
        "Worked and integrated with Spring Webservices and Unity3d Client",
        "Integrated with 3rd party APIs (PlaySpan, Parature, Google In-App Payments, Facebook, WildTangent)",
        "Internationalized Website and supplied a shippable product for our in game catalog (Magento)",
        "Built clean, browser and platform compliant, xhtml layouts from PSD asset files",
        "Extended WordPress with 20+ custom plugins for content, billing, and game administration",
        "Designed and constructed DB schema for new features and SQL procedures to assist with deployment"
    ]
}
const consideropen:ContentExperience = {
    name: "Consider: Open", 
    products: "consideropen.com",
    type:  "Contractor", 
    position: "Lead Developer", 
    detail: "Full Service Web Design and Development Agency",
    date: "Mar 2010 – Sep 2010",
    duties: [
        "Conceptualized ideas for monetization of assets and future development",
        "Lead and implemented team building and best practices exercises as well as optimization techniques",
        "Contributed to reusable code base by building and abstracting Paypal objects and WordPress Plugins",
        "Assisted in project management, UX, UI and database schema design",
        "Coded a startup social networking application",
        "Contributed a payment module to an existing social networking application",
        "Built a knowledge base for an established software company"
    ]
}
const healthglobalconnect:ContentExperience = {
    name: "Health Global Connect", 
    products: "healthglobalconnect.com", 
    type: "Contractor | Volunteer",
    position: "Web Developer", 
    detail: "Social Networking Startup – Support for Cancer Patients", 
    date: "Mar 2009 – Sep 2009",
    duties: [
        "Developed a social networking site from the ground up in a team environment",
        "Built a full featured messaging system in CodeIgniter utilizing ajax and jQuery technologies",
        "Created a model for storing hierarchical data in MySQL with improved query performance",
        "Promoted from unpaid intern/volunteer to paid contract employee"
    ]
}
const myself:ContentExperience = {
    name: "Brandon Groce", 
    products: "various",
    type: "Consultant",
    detail: "various", 
    date: "2006 - Present",
    duties: [
        "Consultant for Metaverse Mod Squad building Zen Desk applications and server api applications",
        "Consultant for customer portal application integration with data services – www.viableware.com",
        "Prototyped a recipe library, aggregation, and grocery shopping application in 3 weeks. The project was funded - www.gatheredtable.com",
        "Created and developed bids and proposals for websites, cms, apps, modules, ecommerce, and more",
        "Primary developer and consultant for Modern Dog Design (20 years in service) – moderndog.com",
        "Designed, developed, and deployed local karaoke company website – myabsolutekaraoke.com",
        "Built mobile karaoke application utilizing jQuery mobile – mobile.myabsolutekaraoke.com",
        "Developer and consultant for VillageOnCall - now caringbridge support planner - www.caringbridge.org"
    ]
}
export const experience:ContentExperience[] = [ homesite, disney, area52, gazillion, consideropen, healthglobalconnect, myself ]

/* Education Section */
export const education:ContentEducation = {
    school: "Seattle Central",
    grade: "3.9 GPA - Presidents List",
    program: "IT Web Development",
    details: [
        "TA'd classes", 
        "Tutored students", 
        "Gave class presentations here and at Highline College after completion"
    ]
}
export const activities:ContentActivities[] = [
    {
        heading: "Volunteer Work",
        items: [
            "Health Global Connect", 
            "National Association of Psychometrists",
            "MS Walk (emcee & DJ)"
        ]
    },
    {
        heading: "Conferences & Training",
        items: [
            "Developer Week",
            "Disney Dev Innovation Days (1st place winner)",
            "Google Hackathon (2nd place winner)",
            "Adobe Roadshow",
            "React training (on site)",
            "Agile training (on site)",
            "McCarthy core training", 
            "jQuery Hack Day", 
            "DrupalCon", 
            "WebVisions", 
            "Symfony Live", 
            "PostgreSQL conference",
            "Udemy Courses: swift/ios, iot, ai & ml, et. al."
        ]
    },
    {
        heading: "Personal Interests",
        items: [
            "35yr pianist & composer",
            "Emcee & DJ company owner/operator",
            "Build & remodel houses and campers",
            "Space and aviation nerd", 
            "Karaoke",
            "Permaculture",
            "Philomath"
        ]
    }
]

/* References Section */
export const references:ContentReferences[] = [
    {
        name: "George Dawoud",
        phone: "xxx.xxx.xxxx",
        email: "xxx@xxx.com", 
        description: "Platform Manager – Java Engineer @ Gazillion Entertainment - Former Java Engineer for Real Networks - 25yrs industry experience",
        relation: "I was hired and reported directly to George"
    },
    {
        name: "Clint Bush",
        phone: "xxx.xxx.xxxx",
        email: "xxx@xxx.com", 
        description: "Platform Manager – Java Engineer @ Gazillion Entertainment - Former Java Engineer for Real Networks - 25yrs industry experience",
        relation: "I worked on a team with Clint for 4 years - I was hired by Clint"
    },
    {
        name: "Darrin West",
        phone: "xxx.xxx.xxxx",
        email: "xxx@xxx.com", 
        description: "Platform Manager – Java Engineer @ Gazillion Entertainment - Former Java Engineer for Real Networks - 25yrs industry experience",
        relation: "I was hired and reported directly to George"
    }
]

/* Layout Sections */
export const sections:Sections = {
    skills: {
        title: "Technology Summary",
        subtitle: "IT Skills",
        content: skills
    },
    experience: {
        title: "IT Work Experience",
        subtitle: "",
        content: experience
    },
    education: {
        title: "Education", 
        subtitle: "",
        content: education
    },
    activities: {
        title: "Activities", 
        subtitle: "and Volunteer Work",
        content: activities

    }, 
    references: {
        title: "References", 
        subtitle: "",
        content: references
    }
}

const resume:Resume =  {
    header: {
        name,
        title,
        email,
        phone,
        address1,
        address2
    },
    sections,
    tools
}

export default resume
`