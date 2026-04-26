import Carousel from '../components/Carousel';

const projects = [
  {
    id: 'waste-segregator',
    level: 'Level 1 · Year 1 · 2022',
    title: 'Smart Waste Segregator',
    meta: 'APU — Individual Assignment',
    desc: 'First hands-on IoT build. Designed and wired a smart waste bin prototype using an Arduino UNO with an IR sensor for object detection, a servo motor for automated lid control, a rain sensor, and an LCD display for status feedback. Connected the device to the Arduino IoT Cloud for remote monitoring and data logging.',
    stack: [
      { label: 'Arduino UNO', primary: true },
      { label: 'IR Sensor' },
      { label: 'Servo Motor' },
      { label: 'LCD Display' },
      { label: 'Arduino IoT Cloud' },
      { label: 'C++' },
    ],
    outcomes: [
      { icon: '⚡', text: 'Physical circuit wiring and breadboard prototyping' },
      { icon: '☁️', text: 'First cloud-connected IoT device' },
      { icon: '🔧', text: 'Sensor integration and actuator control' },
    ],
    slides: [
      { src: '/media/waste-segregator/20221126_155705.jpg', alt: 'Arduino UNO build' },
      { src: '/media/waste-segregator/20221128_182911.jpg', alt: 'Circuit wiring' },
      { type: 'video', src: '/media/waste-segregator/20221208_113701.mp4' },
    ],
  },
  {
    id: 'smart-agriculture',
    level: 'Level 2 · Year 2 · 2023',
    title: 'Smart Agriculture Monitoring System',
    meta: 'APU — LPAN / IIoT Module',
    desc: 'Developed an IoT-based smart agriculture system using an ESP32 microcontroller connected to multiple environmental sensors — soil moisture, water level, humidity, temperature, and light. Sensor data was streamed to ThingSpeak and the Arduino IoT Cloud for real-time monitoring. Applied LoWPAN and Low Power Area Network (LPAN) concepts for efficient wireless communication between constrained IoT devices.',
    stack: [
      { label: 'ESP32', primary: true },
      { label: 'Soil Moisture Sensor' },
      { label: 'DHT11' },
      { label: 'ThingSpeak' },
      { label: 'Arduino IoT Cloud' },
      { label: 'LoWPAN' },
      { label: 'C++' },
    ],
    outcomes: [
      { icon: '📡', text: 'LPAN / LoWPAN low-power networking' },
      { icon: '🌱', text: 'Multi-sensor environmental monitoring' },
      { icon: '📊', text: 'Real-time cloud data streaming' },
    ],
    slides: [
      { src: '/media/smart-agriculture/20231104_210014.jpg', alt: 'Smart Agriculture build' },
    ],
  },
  {
    id: 'weather-station',
    level: 'Level 3 · Year 3 · 2024',
    title: 'Solar-Powered IoT Weather Station',
    meta: 'APU — DIOT Module',
    desc: 'Designed and built a solar-powered remote weather station with an ESP32 at its core, measuring temperature and humidity via a DHT11 sensor. Sensor data was published over MQTT to a Node-RED pipeline, stored in InfluxDB, and visualised on a live Grafana dashboard. The system ran fully standalone on solar power, demonstrating a complete end-to-end IoT data pipeline from physical hardware to cloud analytics.',
    stack: [
      { label: 'ESP32', primary: true },
      { label: 'MQTT', primary: true },
      { label: 'DHT11' },
      { label: 'Node-RED' },
      { label: 'InfluxDB' },
      { label: 'Grafana' },
      { label: 'Solar Power' },
      { label: 'C++' },
    ],
    outcomes: [
      { icon: '🔋', text: 'Solar-powered autonomous operation' },
      { icon: '📬', text: 'Full MQTT publish/subscribe pipeline' },
      { icon: '📈', text: 'Live Grafana analytics dashboard' },
    ],
    slides: [
      { src: '/media/weather-station/20240826_144348.jpg', alt: 'Full weather station' },
      { src: '/media/weather-station/20240724_014353.jpg', alt: 'Solar panel build' },
      { src: '/media/weather-station/20240724_155947.jpg', alt: 'ESP32 close-up' },
      { type: 'video', src: '/media/weather-station/20240724_014336.mp4' },
    ],
  },
  {
    id: 'fyp',
    level: 'Final Year Project · 2024–2025',
    title: 'AI-Enabled Reverse Vending Machine',
    featured: true,
    award: '🏆 Best Final Year Project — APU',
    desc: "Developed a full-stack IoT + AI system addressing Malaysia's recycling crisis (39,000 tonnes of solid waste daily). The Reverse Vending Machine (RVM) uses computer vision on a Raspberry Pi 5 to classify recyclable items, reject contaminated or non-recyclable inputs, and dispense rewards to users. An AI-powered advertising module performs real-time demographic analysis to deliver targeted awareness content, creating a secondary revenue stream. The system includes a mobile app for users, an admin web dashboard for operators, and ESP32-based sensor control. Aligned with UN SDG Goal 12: Responsible Consumption and Production.",
    stack: [
      { label: 'Raspberry Pi 5', primary: true },
      { label: 'Python', primary: true },
      { label: 'Computer Vision (AI)', primary: true },
      { label: 'ESP32' },
      { label: 'Mobile App' },
      { label: 'Admin Web App' },
      { label: 'IoT Sensors' },
      { label: 'SDG Goal 12', gold: true },
    ],
    outcomes: [
      { icon: '🏆', text: 'Best Final Year Project Award — APU Malaysia' },
      { icon: '🤖', text: 'Real-time AI classification and demographic analysis' },
      { icon: '📱', text: 'Mobile app + admin dashboard delivered' },
      { icon: '♻️', text: 'Incentive-based recycling with reward mechanism' },
    ],
    slides: [
      { src: '/media/fyp/20250128_115059.jpg', alt: 'RVM front view' },
      { src: '/media/fyp/20250128_115154.jpg', alt: 'RVM interior' },
      { src: '/media/fyp/20250128_115139.jpg', alt: 'Internal mechanics' },
      { src: '/media/fyp/20250128_115132.jpg', alt: 'Circuit board' },
      { type: 'video', src: '/media/fyp/20241209_002934.mp4' },
    ],
  },
];

const skills = [
  {
    title: 'Hardware & Embedded',
    list: 'Arduino UNO · ESP32 · Raspberry Pi 5\nSensors & Actuators · Circuit Design\nSolar Power Systems',
  },
  {
    title: 'Protocols & Networking',
    list: 'MQTT · LoWPAN · LPAN\nWi-Fi · HTTP · REST APIs\nPub/Sub Architecture',
  },
  {
    title: 'Data & Cloud',
    list: 'InfluxDB · Grafana · Node-RED\nThingSpeak · Arduino IoT Cloud\nReal-time Dashboards',
  },
  {
    title: 'Software',
    list: 'Python · C++ · Mobile App Dev\nComputer Vision (AI)\nWeb Admin Dashboards',
  },
];

export default function Portfolio() {
  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-inner">
          <div className="hero-label">IoT Project Portfolio</div>
          <div className="hero-name">Adam Sayyaf Abdulla</div>
          <div className="hero-sub">
            A journey through four years of hands-on IoT development — from first Arduino circuits to an award-winning AI-enabled smart system.
          </div>
          <div className="hero-links">
            <a href="mailto:adam.sayyaf226@gmail.com">adam.sayyaf226@gmail.com</a>
            <a href="https://github.com/sayya2" target="_blank" rel="noopener noreferrer">github.com/sayya2</a>
            <a href="https://linkedin.com/in/adam-abdulla" target="_blank" rel="noopener noreferrer">linkedin.com/in/adam-abdulla</a>
            <a href="/cv/Adam_Sayyaf_Abdulla_CV.html" target="_blank" download="Adam_Sayyaf_Abdulla_CV.html">Download CV</a>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="section-wrap">
        <div className="section-heading">Projects — Chronological</div>

        <div className="timeline">
          {projects.map(project => (
            <div key={project.id} className={`project-card${project.featured ? ' featured' : ''}`}>
              <Carousel slides={project.slides} />

              <div className="card-body">
                <div className="card-context">{project.level}</div>
                <div className="card-header">
                  <div className="card-title">{project.title}</div>
                  <div>
                    {project.award
                      ? <span className="award-badge">{project.award}</span>
                      : <span className="card-year">{project.meta}</span>
                    }
                  </div>
                </div>

                <div className="card-desc">{project.desc}</div>

                <div className="tech-row">
                  <span className="tech-label">Stack</span>
                  {project.stack.map((t, i) => (
                    <span key={i} className={`tag${t.primary ? ' primary' : t.gold ? ' gold' : ''}`}>
                      {t.label}
                    </span>
                  ))}
                </div>

                <div className="outcome-row">
                  {project.outcomes.map((o, i) => (
                    <div key={i} className="outcome-item">
                      <span className="oi">{o.icon}</span>
                      <span>{o.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <div className="section-heading" style={{ marginTop: '16px' }}>Skills Demonstrated Across Projects</div>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className="skill-group">
              <div className="skill-group-title">{s.title}</div>
              <div className="skill-list">
                {s.list.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        Adam Sayyaf Abdulla &nbsp;·&nbsp;
        <a href="mailto:adam.sayyaf226@gmail.com">adam.sayyaf226@gmail.com</a>
        &nbsp;·&nbsp;
        <a href="https://github.com/sayya2" target="_blank" rel="noopener noreferrer">github.com/sayya2</a>
      </div>
    </>
  );
}
