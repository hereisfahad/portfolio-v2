type Employment = {
  id: number;
  name: string;
  company: string;
  date: string;
  place: string;
  link: string;
  description: string;
  skills: string[];
};

export const employment: Employment[] = [
  {
    id: 1,
    name: "Fullstack Developer",
    company: "Bitbytes",
    date: "2020 - Present",
    place: "Lahore, Pakistan",
    link: "https://bitbytes.io/",
    description: `As a Full Stack Engineer at Many Hats, my role encompassed a wide range of responsibilities aimed at delivering exceptional web applications and ensuring their seamless operation.<br/><br/> Some of my key duties included:<br/></br>
      Front-End Development:
        <p className="text-[14px] mt-[5px]">I was responsible for creating engaging user interfaces using HTML, CSS, and JavaScript/Typescript. This involved translating design mockups into responsive and visually appealing web pages.</p><br/><br/>
      Back-End Development:
        <p className="text-[14px] mt-[5px]">I designed, developed, and maintained server-side logic using languages like Node.js, Typescript, Express. This included building RESTful APIs, managing databases, and optimizing data storage and retrieval processes.</p><br/><br/>
      Database Management:
        <p className="text-[14px] mt-[5px]">I designed and maintained database schemas, ensuring data integrity and performance. This involved writing efficient SQL queries, implementing database migrations, and addressing data security concerns.</p><br/><br/>
      Version Control:
        <p className="text-[14px] mt-[5px]">I utilized Git for efficient codebase management, enabling seamless collaboration with team members and tracking changes across projects.</p><br/><br/>
      Collaboration:
        <p className="text-[14px] mt-[5px]">I actively collaborated with cross-functional teams, including UI/UX designers, product managers, and QA engineers, to align technical solutions with business goals. Effective communication and teamwork were essential in achieving project objectives.</p><br/><br/>
      Continuous Learning:
        <p className="text-[14px] mt-[5px]">Staying updated with emerging technologies, industry best practices, and coding standards was an integral part of my role. I consistently sought opportunities for skill enhancement and knowledge sharing within the team.</p><br/><br/>
      State Management with Redux:<br/>
        <p className="text-[14px] mt-[5px]">I implemented Redux to manage the application's state, providing a predictable and centralized way to handle data and UI updates. I designed and maintained the Redux store to ensure efficient data flow and consistency across the app.</p><br/>
      Middleware with Redux Saga:<br/>
        <p className="text-[14px] mt-[5px]">I utilized Redux Saga to manage side effects, such as handling asynchronous actions, API requests, and data caching, while maintaining a clear and maintainable codebase. I coordinated complex workflows and data synchronization tasks seamlessly using Redux Saga.</p><br/>
      Payment Integration with Stripe:
        <p className="text-[14px] mt-[5px]">I implemented secure payment processing within the application using Stripe. This included integrating Stripe's API to handle payment transactions, ensuring the confidentiality of sensitive payment information.</p><br/><br/>
      Firebase Integration:<br/>
        <p className="text-[14px] mt-[5px]">I integrated Firebase services into the mobile app, including Firebase Authentication for secure user authentication and authorization. Firebase Firestore was leveraged for real-time data storage and synchronization, ensuring users always had access to the latest information. Firebase Cloud Storage was used for efficient media storage and retrieval, enhancing the app's functionality.</p><br/><br/>
      Push Notifications:
        <p className="text-[14px] mt-[5px]">I implemented push notifications using Firebase Cloud Messaging (FCM), enabling real-time communication and engagement with app users. Users received timely updates and alerts, enhancing their overall app experience.</p><br/><br/>
      Performance Optimization:<br/>
        <p className="text-[14px] mt-[5px]">I optimized the app's performance, focusing on minimizing load times, reducing memory usage, and ensuring smooth animations and transitions.</p><br/><br/>
      Collaboration and Agile Workflow:<br/>
        <p className="text-[14px] mt-[5px]">I collaborated closely with designers, product managers, and other team members, following an Agile methodology to deliver features and updates on time. Efficient communication and teamwork were essential in achieving project milestones.</p><br/><br/>
      Documentation:<br/>
        <p className="text-[14px] mt-[5px]">I maintained comprehensive documentation for code, APIs, and integration processes, facilitating collaboration and knowledge sharing within the team.</p><br/><br/>
      Client Communication:<br/>
        <p className="text-[14px] mt-[5px]">I engaged in regular communication with the client, providing updates on project progress, addressing concerns, and aligning technical solutions with business goals.</p><br/><br/>
      Deployment and Hosting:<br/>
        <p className="text-[14px] mt-[5px]">I managed deployment processes, leveraging AWS and Firebase hosting services, ensuring efficient and reliable hosting of the application.</p><br/><br/>
      Continuous Integration/Continuous Deployment (CI/CD):<br/>
        <p className="text-[14px] mt-[5px]">I set up automated CI/CD pipelines to streamline the development, testing, and deployment processes, ensuring rapid and reliable releases.</p><br/><br/>

In summary, my role as a Full Stack Engineer at Many Hats required a versatile skill set that encompassed both front-end and back-end development. I was committed to delivering high-quality, scalable, and efficient solutions while fostering a colaborative and innovative work environment.
      
      `,
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Redux Saga",
      "OpenAI",
      "Tailwindcss",
      "Typescript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Cloud",
      "AWS",
      "Data Visualization",
      "Echarts",
      "Chart.js",
      "Chakra UI",
      "Ant Design",
      "MUI",
    ],
  },
];
