
document.addEventListener('DOMContentLoaded', function() {
    const topicSelect = document.getElementById('topic');
    const otherInput = document.getElementById('otherInput');

    topicSelect.addEventListener('change', function() {
        if (this.value === 'Other') {
            otherInput.style.display = 'block';
            otherInput.required = true;
        } else {
            otherInput.style.display = 'none';
            otherInput.required = false;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const eventDate = new Date(2026, 3, 10, 9, 0, 0);

    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            document.getElementById("days").textContent = "000";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").textContent = days
            .toString()
            .padStart(3, "0");

        document.getElementById("hours").textContent = hours
            .toString()
            .padStart(2, "0");

        document.getElementById("minutes").textContent = minutes
            .toString()
            .padStart(2, "0");

        document.getElementById("seconds").textContent = seconds
            .toString()
            .padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});




document.addEventListener("DOMContentLoaded", function () {

    const topic = document.getElementById("topic");
    const otherInput = document.getElementById("otherInput");

    
    if (topic && otherInput) {
        topic.addEventListener("change", function () {
            if (this.value === "Other") {
                otherInput.style.display = "block";
                this.classList.add("shrink");
            } else {
                otherInput.style.display = "none";
                otherInput.value = "";
                this.classList.remove("shrink");
            }
        });
    }

    const selects = document.querySelectorAll('.form-control-select');

    selects.forEach(select => {
        select.addEventListener('change', function () {
            if (this.value === "") {
                this.style.color = "#777"; 
            } else {
                this.style.color = "#000"; 
            }
        });
    });

});








const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});


const isRegisterPage = document.querySelector('form[action="register.html"]') !== null;
const isLoginPage = document.querySelector('form[action="login.html"]') !== null;

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}


function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

if (isRegisterPage) {
    const registerForm = document.querySelector('form[action="register.html"]');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullname = registerForm.fullname.value.trim();
        const email = registerForm.email.value.trim();
        const password = registerForm.password.value;
        const repeatPassword = registerForm.repeat_password.value;

        
        if (!fullname || !email || !password || !repeatPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== repeatPassword) {
            alert('Passwords do not match.');
            return;
        }

        let users = getUsers();

        if (users.some(user => user.email === email)) {
            alert('This email is already registered.');
            return;
        }

       
        users.push({ fullname, email, password });
        saveUsers(users);

        alert('Registration successful! You can now log in.');
        registerForm.reset();
        window.location.href = 'login.html'; 
    });
}

// ===== Login Page =====
if (isLoginPage) {
    const loginForm = document.querySelector('form[action="login.html"]');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = loginForm.email.value.trim();
        const password = loginForm.password.value;

        let users = getUsers();

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert(`Welcome, ${user.fullname}!`);
            
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password.');
        }
    });
}





const translations = {
    en: {
        menu_home: "Home",
        menu_conf: "Conference",
        menu_prog: "Program",
        menu_submission: "Paper Submission",
        menu_registration: "Registration",
        

        welcome_title: "Welcome to AIITA 2026",
        welcome_subtitle: "2026 6th International Conference on Artificial Intelligence and Industrial Technology Applications",

        countdown_title: "Countdown to the meeting:",
        days: "DAYS",
        hours: "HOURS",
        minutes: "MINUTES",
        seconds: "SECONDS",

        topics_title: "TOPICS",
        topics_subtitle: "The topics of interest for submission include:",

        menu_login: "Login",
        topic_smart_manufacturing: "Smart Manufacturing & Automated Production",
        topic_ai_analytics: "Artificial Intelligence & Industrial Data Analytics",
        topic_intelligent_optimization: "Industrial Internet of Things and Data Analytics",
        countdown: "Countdown to the meeting",

        footer_home: "HOME",
        footer_conference: "CONFERENCE",
        footer_program: "PROGRAM",
        footer_submission: "PAPER SUBMISSION",
        footer_registration: "REGISTRATION",
        footer_login: "LOGIN",
        footer_text: "2026 6th International Conference on Artificial Intelligence and Industrial Technology Applications (AIITA 2026) http://www.aiita.net/",
        footer_register: "REGISTER",



        about_title: "About AIITA 2026",

        about_p1: "Artificial Intelligence (AI) has emerged as a captivating topic in modern academic and scientific circles. As a particularly novel research direction, it consistently generates groundbreaking studies and inventions related to artificial intelligence and computing. Furthermore, AI finds extensive applications across diverse fields, encompassing robotics, decision-making, control systems, simulation applications, and numerous other domains.",

        about_p2: "The 2026 6th International Conference on Artificial Intelligence and Industrial Technology Applications (AIITA 2026) is scheduled to take place in Chongqing, China, from April 10 to 12, 2026. This conference aims to serve as a platform for exploring and discussing innovative ideas and remarkable achievements in AI and computer applications, bridging the gap between theoretical research and practical applications. AIITA warmly welcomes authors to submit their articles highlighting ongoing research results, projects, surveys, and industrial experiences that showcase significant advancements in all related areas.",
        history_title: "History",
        history_subtitle: "AIITA 2021-2025",

       history_2025_p1: `
            <p>AIITA 2025 was held in Xi’an, China on March 28–30. More than 200 participants joined the event,
            contributing to active academic exchange in artificial intelligence and industrial technology fields.</p>
        `,
        history_2025_keynote: "Keynote Speeches",
        history_2025_keynote_list: `
            <ul>
                <li><strong>Prof. Wei Huang</strong> – Flexible electronics and advanced productivity</li>
                <li><strong>Prof. Ying Tan</strong> – FWA and its applications</li>
                <li><strong>Prof. Junwei Han</strong> – AI Empowering Medicine Science: Preliminary Exploration and Practice</li>
                <li><strong>Prof. Ke Tang</strong> – Learn to Optimize</li>
                <li><strong>Prof. Xianguang Kong</strong> – Industrial Internet data assetization and large models</li>
            </ul>
        `,
        history_2025_parallel: "Parallel Sessions",
        history_2025_parallel_list: `
            <ul>
                <li>AI + industrial applications, data governance & LLMs, innovative algorithms, smart factory software, and communication technologies.</li>
            </ul>
        `,

        history_2024_p1: `
            <p>AIITA 2024 was held in Guangzhou, China on April 12–14, using a hybrid onsite–online format. More than 200 authors and experts participated, fostering academic exchange in artificial intelligence and industrial technology fields.</p>
        `,
        history_2024_keynote: "Keynote Speeches",
        history_2024_keynote_list: `
            <ul>
                <li><strong>Prof. Bo Jiang</strong> – Graph Neural Networks for Pattern Recognition</li>
                <li><strong>Dr. Ran Cheng</strong> – GPU-accelerated Evolutionary Computation</li>
                <li><strong>Prof. Daowen Qiu</strong> – Quantum Model Learning</li>
                <li><strong>Prof. Si Wu</strong> – Face Image Editing via Conditional Generation</li>
                <li><strong>Prof. Wei Liu</strong> – Global Robust Output Regulation for Multi-Agent Systems</li>
            </ul>
        `,

        history_2023_p1: `
            <p>AIITA 2023 was held on March 24–26 in Suzhou, China, with more than 150 authors and experts participating in a hybrid format. The conference gathered researchers to exchange insights on artificial intelligence and industrial technology applications.</p>
        `,
        history_2023_keynote: "Keynote Speeches",
        history_2023_keynote_list: `
            <ul>
                <li><strong>Prof. Chun-Yi Su</strong> – DSoft Robot Modeling</li>
                <li><strong>Prof. Wenbing Zhao</strong> – Video-Based Pitch Type Recognition</li>
                <li><strong>Prof. Xinwei Yao</strong> – Path Planning for Mobile Robots</li>
                <li><strong>Prof. Witold Pedrycz</strong> – Challenges in Machine Learning</li>
                <li><strong>Prof. Ning Sun</strong> – Anti-Swing Control for Industrial Cranes</li>
                <li><strong>Prof. Xiangjie Kong</strong> – Intelligent Transportation Systems</li>
                <li><strong>Prof. NAGARAJA G.S.</strong> – Precision Agriculture Framework</li>
            </ul>
        `,

        history_2022_p1: `
            <p>AIITA 2022 was successfully held in Dali, China on May 13–15, 2022, with more than 120 participants joining the conference. The event provided a platform for researchers in simulation modeling and electronic information technology to exchange ideas, discuss new developments, and promote academic collaboration.</p>
        `,
        history_2022_keynote: "Keynote Speeches",
        history_2022_keynote_list: `
            <ul>
                <li><strong>Prof. Haibin Zhu</strong> – Role-Based Collaboration</li>
                <li><strong>Prof. Na Li</strong> – Antenna System Design</li>
                <li><strong>Prof. Chun-Yi Su</strong> – Soft Robot Control</li>
                <li><strong>Prof. Jianquan Ouyang</strong> – Text Summarization Model</li>
                <li><strong>Assoc. Prof. Ruhui Ma</strong> – Federated Learning System</li>
                <li><strong>Assoc. Prof. Yongquan Yan</strong> – Software Aging Analysis</li>
            </ul>
        `,
        history_2022_oral: "Oral Presentations",
        history_2022_oral_list: `
            <ul>
                <li>Over 14 researchers presented oral sessions showcasing academic progress in intelligent systems, data analysis, and industrial technology applications.</li>
            </ul>
        `,

        history_2021_p1: `
            <p>AIITA 2021 was originally planned to take place in Nanchang, China (June 18–20, 2021), but due to COVID-19 restrictions, it was held as a full virtual conference. Around 80 delegates participated online, contributing to successful academic exchange.</p>
        `,
        history_2021_keynote: "Keynote Speeches",
        history_2021_keynote_list: `
            <ul>
                <li><strong>Prof. Philippe Fournier-Viger</strong> – Discovering Interesting and Interpretable Patterns in Industrial Data</li>
                <li><strong>Assoc. Prof. Md. Shohel Sayeed</strong> – The Fourth Industrial Revolution</li>
            </ul>
        `,
        history_2021_oral: "Selected Oral Presentations",
        history_2021_oral_list: `
            <ul>
                <li><strong>Yuan Zhang</strong> – Intelligent Course Scheduling</li>
                <li><strong>Minyu Chen</strong> – Frequency Regulation in Virtual Power Plants</li>
            </ul>`,

            committee_title: "Committee",
    program_committee: "Program Committee",
    program_committee_list: `
    <br>
      <li>Prof. Jiantao Chang, School of Mechatronic Engineering, Xidian University</li>
      <li>Prof. Wenbo Chen, School of Automation, Beijing Information Science and Technology University</li>
      <li>Prof. Ju Fan, Renmin University of China</li>
      <li>Prof. Liming Fang, Nanjing University of Aeronautics and Astronautics</li>
      <li>Prof. Zhangjie Fu, Nanjing University of Information Science and Technology</li>
      <li>Prof. Sheng Gao, Central University of Finance and Economics</li>
      <li>Prof. Zhitao Guan, North China Electric Power University</li>
      <li>Prof. Daojing He, Huazhong University of Science and Technology</li>
      <li>Prof. Weiguo Jiang, Faculty of Geographical Sciences, Beijing Normal University</li>
      <li>Prof. Lanju Kong, Shandong University</li>
      <li>Prof. Xianguang Kong, Xidian University</li>
      <li>Prof. Xianglong Liu, School of Computer Science and Technology, Beihang University</li>
      <li>Prof. Hongying Meng, Brunel University of London, UK</li>
      <li>Prof. Qingqi Pei, IEEE Senior Member, Xidian University</li>
      <li>Prof. Meng Shen, Beijing Institute of Technology</li>
      <li>Prof. Jinsong Wang, Tianjin University of Technology</li>
      <li>Prof. Zhisong Xiao, Beijing Information and Technology University</li>
      <li>Prof. Jun Xu, Gaoling School of Artificial Intelligence, Renmin University of China</li>
      <li>Prof. Xinyu Xu, School of Mechatronics Engineering, Beijing Institute of Technology</li>
      <li>Prof. Haipeng Yao, School of Information and Communication Engineering, Beijing University of Posts and Telecommunications</li>
      <li>Prof. Yufeng Yue, School of Automation, Beijing Institute of Technology</li>
      <li>Prof. Nan Zhang, School of Optoelectronics, Beijing Institute of Technology</li>
      <li>Prof. Junguo Zhang, College of Engineering, Beijing Forestry University</li>
      <li>Prof. Tiesong Zhao, School of Physics and Information Engineering, Fuzhou University</li>
      <li>Assoc. Prof. Xin Chen, School of Electrical Engineering, Xi'an Jiaotong University</li>
      <li>Assoc. Prof. Guangyu Gao, School of Computer Science, Beijing Institute of Technology</li>
      <li>Assoc. Prof. Hongchen Guo, School of Cyber Science and Engineering, Beijing Institute of Technology</li>
      <li>Assoc. Prof. Hongwei Guo, School of Mechanical and Vehicle Engineering, Beijing Institute of Technology</li>
      <li>Assoc. Prof. Dengfeng Ke, School of Information Science, Beijing Language and Culture University</li>
      <li>Assoc. Prof. Chen Ma, Department of Computer Science, City University of Hong Kong</li>
      <li>Assoc. Prof. Hongbo Ma, School of Mechatronic Engineering, Xidian University</li>
      <li>Assoc. Prof. Tamás Mankovits, Head of Department of Mechanical Engineering, Faculty of Engineering, University of Debrecen</li>
      <li>Assoc. Prof. Zhaokun Wang, Tsinghua University</li>
      <li>Assoc. Prof. Qibin Wang, School of Mechatronic Engineering, Xidian University</li>
      <li>Assoc. Prof. Zhen Wang, Tianjin University of Finance and Economics, China</li>
      <li>Assoc. Prof. Xiaolei Xie, School of Mechanical Engineering, Tsinghua University</li>
      <li>Assoc. Prof. Lei Yin, School of Mechatronic Engineering, Xidian University</li>
      <li>Assoc. Prof. Fanqin Zhou, Beijing University of Posts and Telecommunications</li>
      <br>
    `,
    organizing_committee: "Organizing committee members",
    organizing_committee_list: `
    <br>
      <li>Assoc. Prof. Bo He, Beijing University of Posts and Telecommunications, China</li>
      <li>Assoc. Prof. Lanlan Rui, Beijing University of Posts and Telecommunications, China</li>
      <li>Assoc. Prof. Yang Yang, Beijing University of Posts and Telecommunications, China</li>
      <li>Assoc. Prof. Chen Zhao, Ningbo University of Technology, China</li>
      <li>Lecturer Kaile Xiao, Beijing Union University, China</li>
      <li>Lecturer Xinlei Yu, Tianjin University of Finance and Economics, China</li>
      <li>Assistant Research Fellow Zhixiang Yang, Beijing University of Posts and Telecommunications, China</li>
      <li>Assistant Research Fellow Zijia Mo, Industrial and Commercial Bank of China, China</li>
    `,
    sponsors_title: "Sponsors",
    sponsor_heading: "Sponsor",
    tech_cosponsor_heading: "Technically co-sponsored by",
    supporter_heading: "Supporter",
   page_subtitle_conference: "Exploring the Evolution, Achievements, and Vision of AIITA",
    page_subtitle_program:"Topics & Schedule Overview",

   topics_title: "TOPICS",
    topics_intro: "The topics of interest for submission include, but are not limited to:",

    topics_list: `
        <ol class="themes-list">
            <li>Artificial Intelligence in Industrial Manufacturing</li>
            <li>Industrial Automation and Intelligent Control Systems</li>
            <li>Machine Learning and Deep Learning in Industrial Technology</li>
            <li>Intelligent Sensing Technology and Industrial Monitoring System</li>
            <li>Industrial Robots and Automated Production Lines</li>
            <li>Industrial Internet of Things and Data Analytics</li>
            <li>Application of Artificial Intelligence in Quality Control and Fault Diagnosis</li>
            <li>Industrial Intelligent Transportation and Logistics Management</li>
            <li>Smart Energy and Smart Manufacturing</li>
            <li>Application of Artificial Intelligence in Industrial Design and Optimization</li>
            <li>Adaptive and Intelligent Manufacturing Systems</li>
            <li>Industrial Process Optimization and Predictive Analytics</li>
            <li>Application of Artificial Intelligence in Supply Chain Management and Production Planning</li>
            <li>Intelligent Industrial Robotics and Collaborative Robotics</li>
            <li>Data Security and Privacy Protection in Smart Manufacturing and Industrial Technologies</li>
        </ol>
    `,

    subforum1_title: "◕ I. Sub-Forum: Industrial Intelligent Computing Technologies and Applications",
    subforum1_items: `
        <p>Pooling and Cooperative Scheduling Technologies for Industrial Heterogeneous Computing Resources</p><br>
        <p>Cloud-Edge-Device Collaboration Technologies for Industrial Artificial Intelligence Computing</p><br>
        <p>Edge Intelligence and Lightweight Computing Technologies for Industrial Applications</p><br>
        <p>Energy-Efficient Scheduling and Green Computing Technologies for Industrial AI Computing</p><br>
        <p>Low-Latency Networking Technologies for Industrial Edge Devices</p><br>
        <p>QoS Evaluation Methods for Industrial Artificial Intelligence Computing</p>
    `,

    subforum2_title: "◕ II. Sub-Forum: Industrial Data Engineering Technologies and Applications",
    subforum2_items: `
        <p>Big Data Acquisition and Cleansing</p><br>
        <p>Data Annotation Tools and Techniques</p><br>
        <p>Data Lifecycle Management</p><br>
        <p>Metadata Management and Standardization</p><br>
        <p>Data Privacy and Compliance Management</p><br>
        <p>Data Conflict and Redundancy Resolution</p><br>
        <p>Data Integration and Interoperability</p><br>
        <p>Automated Data Processing Technologies</p><br>
        <p>Management and Storage of Complex Datasets</p>
    `,

    subforum3_title: "◕ III. Sub-Forum: Research and Application of High-Quality Industrial Datasets",
    subforum3_items: `
        <p>Dataset Generation and Augmentation Techniques</p><br>
        <p>Dataset Evaluation and Inspection</p><br>
        <p>Dataset Security and Privacy Protection Techniques</p><br>
        <p>Dataset Quality Control</p><br>
        <p>Intelligent Dataset Construction Techniques</p>
    `,

    subforum4_title: "◕ IV. Sub-Forum: Industrial Data Intelligence Technologies and Applications",
    subforum4_items: `
        <p>Intelligent Control Algorithms</p><br>
        <p>Machine Learning for Industrial Process Optimization</p><br>
        <p>AI Algorithms for Production Scheduling Optimization</p><br>
        <p>Model Predictive Control and Machine Learning</p><br>
        <p>Embedded Systems Development for Automated Facilities</p><br>
        <p>Deep Learning Algorithms and Industrial Image Analysis</p><br>
        <p>Nonlinear Control and Neural Network Approaches</p><br>
        <p>AI Model Optimization</p><br>
        <p>Intelligent Predictive Anomaly Detection</p><br>
        <p>Adaptive Control System Design</p>
    `,

    subforum5_title: "◕ V. Sub-Forum: Industrial Intelligent Security Technologies and Applications",
    subforum5_items: `
        <p>Control Systems and Cybersecurity</p><br>
        <p>Blockchain-based Production Traceability Systems</p><br>
        <p>Data Security and Privacy Protection Techniques</p><br>
        <p>Security Enhancement Measures for Control Systems</p><br>
        <p>IoT Device Security Management</p><br>
        <p>AI for Industrial Safety Monitoring</p><br>
        <p>Security-Enhanced Sensor Network Technologies</p><br>
        <p>Security Protocol Design for Industrial Applications</p><br>
        <p>Real-Time Threat Detection and Response Technologies</p><br>
        <p>Predictive Analytics for Security Incidents</p>
    `
,
     program_title: "PROGRAM",
        program_intro: `The following information about the schedule is for your reference:`,

        day1_title: "Day 1 - April 10, 2026",
        day1_item1: "13:00 - 17:00 Registration",

        day2_title: "Day 2 - April 11, 2026",
        day2_list: `
            <p><strong>09:00 - 12:00 Speeches of Keynote Speakers</strong></p>
            <p style="margin: 12px 12px;"><strong>12:00 - 14:00 Lunch</strong></p>
            <p style="margin: 12px 12px;"><strong>14:00 - 17:30 Oral Presentations</strong></p>
            <p ><strong>18:00 - 19:30 Banquet</strong></p>
        `,

        day3_title: "Day 3 - April 12, 2026",
        day3_item1: "09:00 - 18:00 Academic Discussion",

        program_note: `
    * The above program is a brief outline. A more detailed programme will be emailed to you after the registration deadline. 
    The actual conference schedule may vary depending on the number of participants.
`,

oral_title: `<strong style="color:#212529; font-family: Arial, sans-serif; font-size:20px;">
                Oral Presentation Instruction:
            </strong>`,

oral_list: `
    <p>1. Timing: a maximum of 15 minutes total, including speaking time and discussion. Please keep your presentation well timed.</p>
    <p>2. You can use CD or USB flash drive. Please meet your session chair 10 minutes before your session and copy your file to the computer.</p>
    <p>3. Email a backup copy to yourself in case your flash drive fails.</p>
    <p>4. Session rooms are equipped with projector, screen, pointer, microphone, and laptop with common software.</p>
    <p>5. If your presentation contains videos, ensure they are properly linked.</p>
`,

poster_title: `<strong style="color:#212529; margin-bottom:2px; font-family: Arial, sans-serif; font-size:20px;">
                Poster Presentation Instruction:
            </strong>`,

poster_list: `
    <p>1. Maximum poster size is 59.4 cm × 84.1 cm (A1).</p>
    <p>2. Posters must be clear and readable from 1 meter away.</p>
    <p>3. During your poster session, you should stay by your poster to explain and discuss with delegates.</p>
`,
 submission_title: "Submission Information",
        important_dates_title: "Important Dates",
        important_dates_list: `<li>April 10-12, 2026 Conference Dates</li>
                               <li>January 23, 2026 Full Paper Submission Date</li>
                               <li>February 23, 2026 Registration Deadline</li>
                               <li>March 10, 2026 Final Paper Submission Date</li>`,
        submission_procedures_title: "Submission Procedures",
        submission_procedures_list: `<li>Please send the full paper (Word + PDF) to the Submission System.</li>
                                     <li>Submit the full paper if you want both presentation and publication.</li>
                                     <li>Submit the abstract only if you only want to make a presentation.</li>
                                     <li>All manuscripts should be submitted through the Online Editorial System.</li> <br>`,
        submission_system_en: "Submission System (English)",
        submission_system_cn: "Submission System (Chinese)",
        templates_title: "Templates for Paper Submission",
        templates_list: `<li>Papers must follow the official template and IEEE formatting standards.</li>
                         <li>Length: minimum 4 pages, maximum 20 pages.</li>
                         <li>Keywords: at least 3, at most 10.</li> <br>`,
        templates_download: "Templates Download",
        rules_title: "Basic Rules",
        rules_list: `<li>Submissions must be original and not under review elsewhere.</li>
                     <li>Plagiarism is strictly prohibited.</li>`,
        form_title: "QUESTIONS? WRITE US A MESSAGE",
        form_subtitle: "Talk with us",
        name: "Name*",
        email: "Email*",
        gender_placeholder: "Gender*",
        female: "Female",
        male: "Male",
        other: "Other",
        prefer_not: "Prefer not to say",
        phone: "Phone*",
        id_card: "ID Card Number*",
        address: "Address",
        topic_placeholder: "Select Topic*",
        topic_paper: "Paper Submission",
        topic_registration: "Registration",
        topic_membership: "Membership",
        topic_other: "Other Questions",
        other_topic: "Please specify",
        message: "Message*",
        confirm_label: "I confirm that I've read and accept the Legal note and Privacy policy",
        submit_btn: "SEND",
       

        email: "Email:",
        password: "Password:",
        loginBtn: "Login",
        noAccount: `Don't have an account? <a href="register.html">Register here</a>`,


        fullname: "Full Name:",
        email: "Email:",
        password: "Password:",
        repeatPassword: "Repeat Password:",
        registerBtn: "Register",
        haveAccount: `Already have an account? <a href="login.html">Login here</a>`,


        reg_title: "AIITA 2026 — Registration",
        slideshow_title: "Highlights from AIITA 2025",

        fees_title: "Registration Fees",
        item: "Item", usd: "USD", cny: "CNY",
        fee1: "Regular Registration for Paper (4 pages)",
        fee2: "Extra Pages (from page 5)",
        fee3: "Attendee Without Submission",
        fee4: "Attendee Without Submission (Group ≥ 3)",
        fee5: "Extra Proceedings / Journal Copies",

        options_title: "Registration Options",
        options_subtitle: `Choose how you want to join AIITA 2026:<br>`,

        reg_cn: "Registration (Chinese)",
        reg_en: "Registration (English)",

        details_title: "Registration Procedures",
        proc1: "Registration includes conference proceedings, lunches, souvenirs, and access to all technical sessions.",
        proc2: "Registration does NOT include accommodation, visa fees, or transportation.",
        proc3: "At least one author of each accepted paper must complete registration.",
        proc4: "The Organizing Committee will confirm registration within 2–5 working days after payment.",
        proc5: "If you cannot attend, printed proceedings will be shipped to you.",

        location_title: "Location & Facilities",
        venue_text: "<strong>Venue:</strong> Will be announced soon — located in a modern conference center with full facilities, Wi-Fi, catering service, and easy transportation access.",
        transport_title: "Transportation",
        airport: "Nearest Airport: To be announced",
        metro: "Local metro & bus lines available near the venue",
        taxi: "Taxi and rideshare services easily accessible",

        contact_title: "Contact",
        email: "Email:",

        refund_title: "Refund Policy",
        ref1: "60 days before event → 70% refund",
        ref2: "30–60 days → 50% refund",
        ref3: "Within 30 days → 30% refund",
        ref4: "After the conference → No refund"
   

    },

    pt: {
        

        menu_home: "Início",
        menu_conf: "Conferência",
        menu_prog: "Programa",
        menu_submission: "Submissão de Artigos",
        menu_registration: "Inscrição",

        welcome_title: "Bem-vindo ao AIITA 2026",
        welcome_subtitle: "6ª Conferência Internacional de Inteligência Artificial e Aplicações de Tecnologia Industrial 2026",

        countdown_title: "Contagem regressiva para o evento:",
        days: "DIAS",
        hours: "HORAS",
        minutes: "MINUTOS",
        seconds: "SEGUNDOS",

        topics_title: "TÓPICOS",
        topics_subtitle: "Os tópicos de interesse para submissão incluem:",


        menu_login: "Iniciar Sessão",
        topic_smart_manufacturing: "Fabricação Inteligente e Produção Automatizada",
        topic_ai_analytics: "Inteligência Artificial e Análise de Dados Industriais",
        topic_intelligent_optimization: "Internet Industrial das Coisas e Análise de Dados",
        countdown: "Contagem decrescente para o evento",

        footer_home: "INÍCIO",
        footer_conference: "CONFERÊNCIA",
        footer_program: "PROGRAMA",
        footer_submission: "SUBMISSÃO",
        footer_registration: "REGISTO",
        footer_login: "INICIAR SESSÃO",
        footer_register: "REGISTAR",
        footer_text: "2026 6ª Conferência Internacional sobre Aplicações de Inteligência Artificial e Tecnologia Industrial (AIITA 2026) http://www.aiita.net/",




        about_title: "Sobre a AIITA 2026",

        about_p1: "A Inteligência Artificial (IA) tornou-se um tema de grande destaque nos meios académicos e científicos modernos. Como uma área de investigação particularmente recente, continua a gerar estudos inovadores e invenções relacionadas com inteligência artificial e computação. Além disso, a IA apresenta aplicações extensas em diversos domínios, incluindo robótica, tomada de decisão, sistemas de controlo, aplicações de simulação e muitos outros campos.",

        about_p2: "A 6ª Conferência Internacional sobre Aplicações de Inteligência Artificial e Tecnologia Industrial (AIITA 2026) realizar-se-á em Chongqing, China, de 10 a 12 de abril de 2026. O objetivo desta conferência é servir como uma plataforma para explorar e discutir ideias inovadoras e realizações notáveis nas áreas de IA e aplicações computacionais, promovendo a ligação entre investigação teórica e aplicações práticas. A AIITA convida calorosamente os autores a submeterem artigos que apresentem resultados de investigação em curso, projetos, revisões e experiências industriais que evidenciem avanços significativos em todas as áreas relacionadas.",


        history_title: "Histórico",
        history_subtitle: "AIITA 2021-2025",

        history_2025_p1: `
            <p>O AIITA 2025 foi realizado em Xi’an, China, de 28 a 30 de março. Mais de 200 participantes participaram do evento,
            contribuindo para um intercâmbio acadêmico ativo nas áreas de inteligência artificial e tecnologia industrial.</p>
        `,
        history_2025_keynote: "Palestras Principais",
        history_2025_keynote_list: `
            <ul>
                <li><strong>Prof. Wei Huang</strong> – Eletrônica flexível e produtividade avançada</li>
                <li><strong>Prof. Ying Tan</strong> – FWA e suas aplicações</li>
                <li><strong>Prof. Junwei Han</strong> – IA Aplicada à Medicina: Exploração e Prática Preliminar</li>
                <li><strong>Prof. Ke Tang</strong> – Aprender a Otimizar</li>
                <li><strong>Prof. Xianguang Kong</strong> – Internet Industrial e grandes modelos</li>
            </ul>
        `,
        history_2025_parallel: "Sessões Paralelas",
        history_2025_parallel_list: `
            <ul>
                <li>IA + aplicações industriais, governança de dados & LLMs, algoritmos inovadores, software de fábrica inteligente e tecnologias de comunicação.</li>
            </ul>
        `,

        history_2024_p1: `
            <p>O AIITA 2024 foi realizado em Guangzhou, China, de 12 a 14 de abril, utilizando um formato híbrido presencial–online. Mais de 200 autores e especialistas participaram, promovendo intercâmbio acadêmico em inteligência artificial e tecnologia industrial.</p>
        `,
        history_2024_keynote: "Palestras Principais",
        history_2024_keynote_list: `
            <ul>
                <li><strong>Prof. Bo Jiang</strong> – Redes Neurais para Reconhecimento de Padrões</li>
                <li><strong>Dr. Ran Cheng</strong> – Computação Evolutiva acelerada por GPU</li>
                <li><strong>Prof. Daowen Qiu</strong> – Aprendizado de Modelos Quânticos</li>
                <li><strong>Prof. Si Wu</strong> – Edição de Imagens Faciais via Geração Condicional</li>
                <li><strong>Prof. Wei Liu</strong> – Regulação Robusta Global para Sistemas Multi-Agentes</li>
            </ul>
        `,

        history_2023_p1: `
            <p>O AIITA 2023 foi realizado de 24 a 26 de março em Suzhou, China, com mais de 150 autores e especialistas participando em formato híbrido. A conferência reuniu pesquisadores para trocar ideias sobre inteligência artificial e aplicações de tecnologia industrial.</p>
        `,
        history_2023_keynote: "Palestras Principais",
        history_2023_keynote_list: `
            <ul>
                <li><strong>Prof. Chun-Yi Su</strong> – Modelagem de Robôs DSoft</li>
                <li><strong>Prof. Wenbing Zhao</strong> – Reconhecimento de Tipo de Lance por Vídeo</li>
                <li><strong>Prof. Xinwei Yao</strong> – Planejamento de Caminhos para Robôs Móveis</li>
                <li><strong>Prof. Witold Pedrycz</strong> – Desafios em Machine Learning</li>
                <li><strong>Prof. Ning Sun</strong> – Controle Anti-Oscilação para Guindastes Industriais</li>
                <li><strong>Prof. Xiangjie Kong</strong> – Sistemas de Transporte Inteligentes</li>
                <li><strong>Prof. NAGARAJA G.S.</strong> – Estrutura de Agricultura de Precisão</li>
            </ul>
        `,

        history_2022_p1: `
            <p>O AIITA 2022 foi realizado com sucesso em Dali, China, de 13 a 15 de maio de 2022, com mais de 120 participantes. O evento proporcionou uma plataforma para pesquisadores em modelagem de simulação e tecnologia da informação eletrônica trocarem ideias, discutirem novos desenvolvimentos e promoverem colaboração acadêmica.</p>
        `,
        history_2022_keynote: "Palestras Principais",
        history_2022_keynote_list: `
            <ul>
                <li><strong>Prof. Haibin Zhu</strong> – Colaboração Baseada em Função</li>
                <li><strong>Prof. Na Li</strong> – Design de Sistema de Antena</li>
                <li><strong>Prof. Chun-Yi Su</strong> – Controle de Robôs Flexíveis</li>
                <li><strong>Prof. Jianquan Ouyang</strong> – Modelo de Resumo de Texto</li>
                <li><strong>Assoc. Prof. Ruhui Ma</strong> – Sistema de Aprendizado Federado</li>
                <li><strong>Assoc. Prof. Yongquan Yan</strong> – Análise de Envelhecimento de Software</li>
            </ul>
        `,
        history_2022_oral: "Apresentações Orais",
        history_2022_oral_list: `
            <ul>
                <li>Mais de 14 pesquisadores apresentaram sessões orais mostrando progresso acadêmico em sistemas inteligentes, análise de dados e aplicações de tecnologia industrial.</li>
            </ul>
        `,

        history_2021_p1: `
            <p>O AIITA 2021 estava originalmente planejado para ocorrer em Nanchang, China (18 a 20 de junho de 2021), mas devido às restrições da COVID-19, foi realizada como conferência totalmente virtual. Cerca de 80 delegados participaram online, contribuindo para o sucesso do intercâmbio acadêmico.</p>
        `,
        history_2021_keynote: "Palestras Principais",
        history_2021_keynote_list: `
            <ul>
                <li><strong>Prof. Philippe Fournier-Viger</strong> – Descobrindo Padrões Interessantes e Interpretáveis em Dados Industriais</li>
                <li><strong>Assoc. Prof. Md. Shohel Sayeed</strong> – A Quarta Revolução Industrial</li>
            </ul>
        `,
        history_2021_oral: "Apresentações Orais Selecionadas",
        history_2021_oral_list: `
            <ul>
                <li><strong>Yuan Zhang</strong> – Programação Inteligente de Cursos</li>
                <li><strong>Minyu Chen</strong> – Regulação de Frequência em Usinas Virtuais</li>
            </ul>
        `,

        committee_title: "Comitê",
    program_committee: "Comitê do Programa",
    program_committee_list: `
    <br>
      <li>Prof. Jiantao Chang, Escola de Engenharia Mecatrônica, Universidade Xidian</li>
      <li>Prof. Wenbo Chen, Escola de Automação, Universidade de Ciências e Tecnologia de Pequim</li>
      <li>Prof. Ju Fan, Universidade Renmin da China</li>
      <li>Prof. Liming Fang, Universidade de Aeronáutica e Astronáutica de Nanjing</li>
      <li>Prof. Zhangjie Fu, Universidade de Ciências da Informação e Tecnologia de Nanjing</li>
      <li>Prof. Sheng Gao, Universidade Central de Finanças e Economia</li>
      <li>Prof. Zhitao Guan, Universidade de Energia Elétrica da China do Norte</li>
      <li>Prof. Daojing He, Universidade de Ciência e Tecnologia de Huazhong</li>
      <li>Prof. Weiguo Jiang, Faculdade de Ciências Geográficas, Universidade Normal de Pequim</li>
      <li>Prof. Lanju Kong, Universidade de Shandong</li>
      <li>Prof. Xianguang Kong, Universidade Xidian</li>
      <li>Prof. Xianglong Liu, Escola de Ciência e Tecnologia da Computação, Beihang University</li>
      <li>Prof. Hongying Meng, Brunel University of London, Reino Unido</li>
      <li>Prof. Qingqi Pei, IEEE Membro Sênior, Universidade Xidian</li>
      <li>Prof. Meng Shen, Instituto de Tecnologia de Pequim</li>
      <li>Prof. Jinsong Wang, Universidade de Tecnologia de Tianjin</li>
      <li>Prof. Zhisong Xiao, Universidade de Informação e Tecnologia de Pequim</li>
      <li>Prof. Jun Xu, Escola Gaoling de Inteligência Artificial, Universidade Renmin da China</li>
      <li>Prof. Xinyu Xu, Escola de Engenharia Mecatrônica, Instituto de Tecnologia de Pequim</li>
      <li>Prof. Haipeng Yao, Escola de Engenharia de Informação e Comunicação, Universidade de Correios e Telecomunicações de Pequim</li>
      <li>Prof. Yufeng Yue, Escola de Automação, Instituto de Tecnologia de Pequim</li>
      <li>Prof. Nan Zhang, Escola de Optoeletrônica, Instituto de Tecnologia de Pequim</li>
      <li>Prof. Junguo Zhang, Faculdade de Engenharia, Universidade Florestal de Pequim</li>
      <li>Prof. Tiesong Zhao, Escola de Física e Engenharia de Informação, Universidade de Fuzhou</li>
      <li>Assoc. Prof. Xin Chen, Escola de Engenharia Elétrica, Universidade Xi'an Jiaotong</li>
      <li>Assoc. Prof. Guangyu Gao, Escola de Ciência da Computação, Instituto de Tecnologia de Pequim</li>
      <li>Assoc. Prof. Hongchen Guo, Escola de Ciência e Engenharia Cibernética, Instituto de Tecnologia de Pequim</li>
      <li>Assoc. Prof. Hongwei Guo, Escola de Engenharia Mecânica e de Veículos, Instituto de Tecnologia de Pequim</li>
      <li>Assoc. Prof. Dengfeng Ke, Escola de Ciência da Informação, Universidade de Língua e Cultura de Pequim</li>
      <li>Assoc. Prof. Chen Ma, Departamento de Ciência da Computação, Universidade da Cidade de Hong Kong</li>
      <li>Assoc. Prof. Hongbo Ma, Escola de Engenharia Mecatrônica, Universidade Xidian</li>
      <li>Assoc. Prof. Tamás Mankovits, Chefe do Departamento de Engenharia Mecânica, Faculdade de Engenharia, Universidade de Debrecen</li>
      <li>Assoc. Prof. Zhaokun Wang, Universidade Tsinghua</li>
      <li>Assoc. Prof. Qibin Wang, Escola de Engenharia Mecatrônica, Universidade Xidian</li>
      <li>Assoc. Prof. Zhen Wang, Universidade de Finanças e Economia de Tianjin, China</li>
      <li>Assoc. Prof. Xiaolei Xie, Escola de Engenharia Mecânica, Universidade Tsinghua</li>
      <li>Assoc. Prof. Lei Yin, Escola de Engenharia Mecatrônica, Universidade Xidian</li>
      <li>Assoc. Prof. Fanqin Zhou, Universidade de Correios e Telecomunicações de Pequim</li>
      <br>
    `,
    organizing_committee: "Membros do Comitê Organizador",
    organizing_committee_list: `
    <br>
      <li>Assoc. Prof. Bo He, Universidade de Correios e Telecomunicações de Pequim, China</li>
      <li>Assoc. Prof. Lanlan Rui, Universidade de Correios e Telecomunicações de Pequim, China</li>
      <li>Assoc. Prof. Yang Yang, Universidade de Correios e Telecomunicações de Pequim, China</li>
      <li>Assoc. Prof. Chen Zhao, Universidade de Tecnologia de Ningbo, China</li>
      <li>Lecturer Kaile Xiao, Universidade de Pequim, China</li>
      <li>Lecturer Xinlei Yu, Universidade de Finanças e Economia de Tianjin, China</li>
      <li>Assistant Research Fellow Zhixiang Yang, Universidade de Correios e Telecomunicações de Pequim, China</li>
      <li>Assistant Research Fellow Zijia Mo, Banco Industrial e Comercial da China, China</li>
    `,
    sponsors_title: "Patrocinadores",
    sponsor_heading: "Patrocinador",
    tech_cosponsor_heading: "Co-patrocinado tecnicamente por",
    supporter_heading: "Apoiador",

    page_subtitle_conference: "Explorando a Evolução, Conquistas e Visão da AIITA",
    page_subtitle_program:"Visão Geral dos Tópicos e do Cronograma",


     topics_title: "TÓPICOS",
    topics_intro: "Os tópicos de interesse para submissão incluem, mas não se limitam a:",

    topics_list: `
        <ol class="themes-list">
            <li>Inteligência Artificial na Manufatura Industrial</li>
            <li>Automação Industrial e Sistemas de Controle Inteligente</li>
            <li>Aprendizado de Máquina e Deep Learning na Tecnologia Industrial</li>
            <li>Tecnologia de Sensoriamento Inteligente e Sistema de Monitoramento Industrial</li>
            <li>Robôs Industriais e Linhas de Produção Automatizadas</li>
            <li>Internet das Coisas Industrial e Análise de Dados</li>
            <li>Aplicação da IA no Controle de Qualidade e Diagnóstico de Falhas</li>
            <li>Transporte Inteligente Industrial e Gestão Logística</li>
            <li>Energia Inteligente e Manufatura Inteligente</li>
            <li>Aplicação da IA no Design e Otimização Industrial</li>
            <li>Sistemas de Manufatura Adaptativos e Inteligentes</li>
            <li>Otimização de Processos Industriais e Análises Preditivas</li>
            <li>Aplicação da IA na Gestão da Cadeia de Suprimentos e Planejamento de Produção</li>
            <li>Robótica Industrial Inteligente e Robótica Colaborativa</li>
            <li>Segurança de Dados e Proteção de Privacidade em Tecnologias Industriais Inteligentes</li>
        </ol>
    `,

    subforum1_title: "◕ I. Sub-Forum: Tecnologias e Aplicações de Computação Inteligente Industrial",
    subforum1_items: `
        <p>Tecnologias de Pooling e Agendamento Cooperativo para Recursos de Computação Heterogêneos Industriais</p><br>
        <p>Tecnologias de Colaboração Nuvem-Borda-Dispositivo para Computação de IA Industrial</p><br>
        <p>Inteligência de Borda e Tecnologias de Computação Leve para Aplicações Industriais</p><br>
        <p>Agendamento Eficiente em Energia e Tecnologias de Computação Verde</p><br>
        <p>Tecnologias de Rede de Baixa Latência para Dispositivos Industriais de Borda</p><br>
        <p>Métodos de Avaliação de QoS para Computação de Inteligência Artificial Industrial</p>
    `,

    subforum2_title: "◕ II. Sub-Forum: Tecnologias e Aplicações de Engenharia de Dados Industriais",
    subforum2_items: `
        <p>Aquisição e Limpeza de Big Data</p><br>
        <p>Ferramentas e Técnicas de Anotação de Dados</p><br>
        <p>Gestão de Ciclo de Vida de Dados</p><br>
        <p>Gestão e Padronização de Metadados</p><br>
        <p>Gestão de Privacidade e Conformidade de Dados</p><br>
        <p>Resolução de Conflitos e Redundâncias de Dados</p><br>
        <p>Integração e Interoperabilidade de Dados</p><br>
        <p>Tecnologias de Processamento Automático de Dados</p><br>
        <p>Gestão e Armazenamento de Conjuntos de Dados Complexos</p>
    `,

    subforum3_title: "◕ III. Sub-Forum: Pesquisa e Aplicação de Conjuntos de Dados Industriais de Alta Qualidade",
    subforum3_items: `
        <p>Técnicas de Geração e Aumento de Conjuntos de Dados</p><br>
        <p>Avaliação e Inspeção de Conjuntos de Dados</p><br>
        <p>Técnicas de Segurança e Proteção de Privacidade de Conjuntos de Dados</p><br>
        <p>Controle de Qualidade de Conjuntos de Dados</p><br>
        <p>Técnicas Inteligentes de Construção de Conjuntos de Dados</p>
    `,

    subforum4_title: "◕ IV. Sub-Forum: Tecnologias e Aplicações de Inteligência de Dados Industriais",
    subforum4_items: `
        <p>Algoritmos de Controle Inteligente</p><br>
        <p>Aprendizado de Máquina para Otimização de Processos Industriais</p><br>
        <p>Algoritmos de IA para Otimização do Agendamento de Produção</p><br>
        <p>Controle Preditivo Baseado em Modelos e Machine Learning</p><br>
        <p>Desenvolvimento de Sistemas Embarcados para Instalações Automatizadas</p><br>
        <p>Deep Learning e Análise de Imagens Industriais</p><br>
        <p>Controle Não-Linear e Redes Neurais</p><br>
        <p>Otimização de Modelos de IA</p><br>
        <p>Detecção Inteligente de Anomalias Preditivas</p><br>
        <p>Projeto de Sistemas de Controle Adaptativo</p>
    `,

    subforum5_title: "◕ V. Sub-Forum: Tecnologias e Aplicações de Segurança Inteligente Industrial",
    subforum5_items: `
        <p>Sistemas de Controle e Cibersegurança</p><br>
        <p>Sistemas de Rastreabilidade de Produção Baseados em Blockchain</p><br>
        <p>Técnicas de Segurança de Dados e Proteção de Privacidade</p><br>
        <p>Medidas de Reforço de Segurança para Sistemas de Controle</p><br>
        <p>Gestão de Segurança de Dispositivos IoT</p><br>
        <p>IA para Monitoramento de Segurança Industrial</p><br>
        <p>Tecnologias de Redes de Sensores com Segurança Reforçada</p><br>
        <p>Design de Protocolos de Segurança para Aplicações Industriais</p><br>
        <p>Tecnologias de Detecção e Resposta em Tempo Real</p><br>
        <p>Análises Preditivas para Incidentes de Segurança</p>
    `,
         program_title: "PROGRAMA",
        program_intro: `As seguintes informações sobre o cronograma são para sua referência:`,

        day1_title: "Dia 1 - 10 de Abril de 2026",
        day1_item1: "13:00 - 17:00 Registo",

        day2_title: "Dia 2 - 11 de Abril de 2026",
        day2_list: `
            <p><strong>09:00 - 12:00 Palestras Principais</strong></p>
            <p><strong>12:00 - 14:00 Almoço</strong></p>
            <p><strong>14:00 - 17:30 Apresentações Orais</strong></p>
            <p><strong>18:00 - 19:30 Banquete</strong></p>
        `,

        day3_title: "Dia 3 - 12 de Abril de 2026",
        day3_item1: "09:00 - 18:00 Discussão Académica",

       program_note: `
    * O programa acima é um breve resumo. Um programa mais detalhado será enviado por e-mail após o prazo de inscrição.
    O cronograma final da conferência poderá variar de acordo com o número de participantes.
`,

oral_title: `<strong style="color:#212529; margin-bottom:2px; font-family: Arial, sans-serif; font-size:20px;">
                Instruções para Apresentação Oral:
            </strong>`,

oral_list: `
    <p>1. Tempo: máximo de 15 minutos, incluindo apresentação e discussão. Por favor, controle bem o tempo.</p>
    <p>2. Pode usar CD ou pen USB. Encontre o presidente da sessão 10 minutos antes do início e copie o seu ficheiro para o computador.</p>
    <p>3. Envie uma cópia de segurança para si mesmo caso a sua pen USB falhe.</p>
    <p>4. As salas estão equipadas com projetor, ecrã, apontador, microfone e computador com software comum.</p>
    <p>5. Se a sua apresentação contiver vídeos, certifique-se de que estão corretamente vinculados.</p>
`,

poster_title: `<strong style="color:#212529; margin-bottom:2px; font-family: Arial, sans-serif; font-size:20px;">
                Instruções para Apresentação de Poster:
            </strong>`,

poster_list: `
    <p>1. O tamanho máximo do poster é 59.4 cm × 84.1 cm (A1).</p>
    <p>2. Os posters devem ser claros e legíveis a partir de 1 metro de distância.</p>
    <p>3. Durante a sessão de posters, deve permanecer junto ao seu poster para explicá-lo e discuti-lo com os participantes.</p>
`,

submission_title: "Informações de Submissão",
        important_dates_title: "Datas Importantes",
        important_dates_list: `<li>10-12 de Abril de 2026 Datas da Conferência</li>
                               <li>23 de Janeiro de 2026 Prazo de Submissão de Artigos</li>
                               <li>23 de Fevereiro de 2026 Prazo de Inscrição</li>
                               <li>10 de Março de 2026 Prazo Final de Submissão de Artigos</li>`,
        submission_procedures_title: "Procedimentos de Submissão",
        submission_procedures_list: `<li>Envie o artigo completo (Word + PDF) para o Sistema de Submissão.</li>
                                     <li>Envie o artigo completo se quiser apresentação e publicação.</li>
                                     <li>Envie apenas o resumo se quiser apenas fazer apresentação.</li>
                                     <li>Todos os manuscritos devem ser enviados através do Sistema Editorial Online.</li><br>`,
        submission_system_en: "Sistema de Submissão (Inglês)",
        submission_system_cn: "Sistema de Submissão (Chinês)",
        templates_title: "Modelos para Submissão de Artigos",
        templates_list: `<li>Os artigos devem seguir o modelo oficial e normas de formatação IEEE.</li>
                         <li>Comprimento: mínimo 4 páginas, máximo 20 páginas.</li>
                         <li>Palavras-chave: pelo menos 3, no máximo 10.</li><br>`,
        templates_download: "Download de Modelos",
        rules_title: "Regras Básicas",
        rules_list: `<li>As submissões devem ser originais e não estarem em revisão em outro lugar.</li>
                     <li>O plágio é estritamente proibido.</li>`,
        form_title: "DÚVIDAS? ENVIE-NOS UMA MENSAGEM",
        form_subtitle: "Fale conosco",
        name: "Nome*",
        email: "Email*",
        gender_placeholder: "Gênero*",
        female: "Feminino",
        male: "Masculino",
        other: "Outro",
        prefer_not: "Prefiro não dizer",
        phone: "Telefone*",
        id_card: "Número do Documento*",
        address: "Endereço",
        topic_placeholder: "Selecione o Tópico*",
        topic_paper: "Submissão de Artigo",
        topic_registration: "Inscrição",
        topic_membership: "Associação",
        topic_other: "Outras Perguntas",
        other_topic: "Por favor, especifique",
        message: "Mensagem*",
        confirm_label: "Confirmo que li e aceito o aviso legal e a política de privacidade",
        submit_btn: "ENVIAR",


        email: "Email:",
        password: "Palavra-passe:",
        loginBtn: "Entrar",
        noAccount: `Ainda não tem conta? <a href="register.html">Registre-se aqui</a>`,

        fullname: "Nome completo:",
        email: "Email:",
        password: "Palavra-passe:",
        repeatPassword: "Repetir Palavra-passe:",
        registerBtn: "Registrar",
        haveAccount: `Já tem uma conta? <a href="login.html">Faça login aqui</a>`,
        reg_title: "AIITA 2026 — Inscrição",
        slideshow_title: "Destaques do AIITA 2025",

        fees_title: "Taxas de Inscrição",
        item: "Item", usd: "USD", cny: "CNY",
        fee1: "Inscrição Regular para Artigo (4 páginas)",
        fee2: "Páginas Extras (a partir da página 5)",
        fee3: "Participante Sem Submissão",
        fee4: "Participante Sem Submissão (Grupo ≥ 3)",
        fee5: "Cópias Extras dos Anais / Revista",

        options_title: "Opções de Inscrição",
        options_subtitle: `Escolha como deseja participar do AIITA 2026:`,
        reg_cn: "Inscrição (Chinês)",
        reg_en: "Inscrição (Inglês)",

        details_title: "Procedimentos de Inscrição",
        proc1: "A inscrição inclui anais, almoço, lembranças e acesso a todas as sessões técnicas.",
        proc2: "A inscrição NÃO inclui acomodação, visto ou transporte.",
        proc3: "Pelo menos um autor de cada artigo aceito deve concluir a inscrição.",
        proc4: "O Comitê Organizador confirmará o pagamento em 2–5 dias úteis.",
        proc5: "Se não puder comparecer, os anais impressos serão enviados para você.",

        location_title: "Local e Instalações",
        venue_text: "<strong>Local:</strong> A ser anunciado — em um centro de conferências moderno com Wi-Fi, catering e fácil acesso ao transporte.",
        transport_title: "Transporte",
        airport: "Aeroporto mais próximo: A ser anunciado",
        metro: "Metro e ônibus disponíveis perto do local",
        taxi: "Táxi e serviços de rideshare facilmente acessíveis",

        contact_title: "Contato",
        email: "Email:",

        refund_title: "Política de Reembolso",
        ref1: "60 dias antes → 70% de reembolso",
        ref2: "30–60 dias → 50% de reembolso",
        ref3: "Menos de 30 dias → 30% de reembolso",
        ref4: "Após a conferência → Sem reembolso"
    }
};




function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; 
        }
    });

    localStorage.setItem("site-lang", lang);
}

const savedLang = localStorage.getItem("site-lang") || "en";
applyLang(savedLang);


const langDesktop = document.querySelector(".lang-desktop");
const langMobile  = document.querySelector(".lang-mobile");


langDesktop.value = savedLang;
langMobile.value  = savedLang;


function onLangChange(e) {
    const lang = e.target.value;
    langDesktop.value = lang;
    langMobile.value  = lang;
    applyLang(lang);
}

langDesktop.addEventListener("change", onLangChange);
langMobile.addEventListener("change", onLangChange);
















let index = 0;
const slides = document.querySelectorAll(".slide");
const container = document.querySelector(".slider-container");

const total = slides.length; 

function nextSlide() {
    index++;
    container.style.transition = "transform 0.8s ease-in-out";
    container.style.transform = `translateX(-${index * 100}%)`;

   
    if (index === total - 1) {
        setTimeout(() => {
            container.style.transition = "none"; 
            container.style.transform = "translateX(0)";
            index = 0; 
        }, 800);
    }
}

setInterval(nextSlide, 4000);


let aiitaIndex = 0;
const aiitaContainer = document.getElementById("aiita-slides");
const aiitaSlides = aiitaContainer.querySelectorAll("img");
const aiitaTotal = aiitaSlides.length;

function showAIITASlide(index) {
    const slideWidth = aiitaSlides[0].clientWidth;
    aiitaContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextAIITASlide() {
    aiitaIndex++;
    if (aiitaIndex >= aiitaTotal) aiitaIndex = 0;
    showAIITASlide(aiitaIndex);
}

function prevAIITASlide() {
    aiitaIndex--;
    if (aiitaIndex < 0) aiitaIndex = aiitaTotal - 1;
    showAIITASlide(aiitaIndex);
}


let aiitaInterval = setInterval(nextAIITASlide, 4000);









document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login"); // ← BURASI DEĞİŞTİ
    const logoutMenu = document.querySelector(".logout-menu");

    if (loginButton && logoutMenu) {
        loginButton.addEventListener("click", function (e) {
            e.stopPropagation();
            logoutMenu.classList.toggle("show");
        });

        document.addEventListener("click", function () {
            logoutMenu.classList.remove("show");
        });
    }
});
















