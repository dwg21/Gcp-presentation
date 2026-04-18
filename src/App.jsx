import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

const aisleData = [
  {
    id: "intro",
    label: "Intro",
    title: "Intro",
    subtitle: "From Manchester to Tesco through engineering, travel, and a reset in direction",
    color: "#ee1c2e",
    position: [-13, 0, -5],
    shelfSize: [1.7, 4.8, 9.5],
    markerOffset: [0, 0, -5.8],
    details: [
      "I am from Manchester and studied Aerospace Engineering at the University of Sheffield from 2018 to 2021.",
      "My degree gave me a strong grounding in analytical thinking, structured problem solving, and working through complex systems in a disciplined way.",
      "After graduating in 2021, I spent three years travelling, which gave me time to broaden my perspective, build confidence, and think carefully about the kind of career I wanted to pursue.",
      "That period away from formal study helped me return with much more clarity about wanting to work in technology and build practical systems that people rely on every day.",
      "In 2024, I joined the Tesco Software Engineering Graduate Scheme and moved to London to begin that next chapter.",
      "This portfolio tells the story of that transition: from engineering student, to traveller, to software engineering graduate building experience across different teams and problem spaces.",
    ],
    introPresentation: {
      kicker: "Opening Frame",
      lead:
        "I am from Manchester and studied Aerospace Engineering at the University of Sheffield from 2018 to 2021. My degree was not in software, but it gave me a strong grounding in analytical thinking, structured problem solving, and working through complex systems.",
      story:
        "After graduating in 2021, I spent three years travelling. That period gave me time to broaden my perspective, build confidence, and think more carefully about the kind of work I wanted to do. By the time I returned, I had much more clarity that I wanted to work in technology and build systems that people use in everyday life.",
      transition:
        "In 2024, I joined the Tesco Software Engineering Graduate Scheme and moved to London. This portfolio tells the story of that transition, from engineering student, to traveller, to software engineering graduate learning across stores, product teams, internal platforms, and large backend systems.",
      timeline: [
        { year: "2018-2021", text: "Studied Aerospace Engineering at the University of Sheffield" },
        { year: "2021-2024", text: "Travelled and took time to reset direction before starting my career" },
        { year: "2024", text: "Joined Tesco's Software Engineering Graduate Scheme and moved to London" },
      ],
    },
  },
  {
    id: "store-placement",
    label: "Store Placement",
    title: "Store Placement",
    subtitle: "Hands-on experience inside a Tesco Extra store",
    color: "#00539f",
    position: [-8, 0, -5],
    shelfSize: [1.7, 4.8, 9.5],
    markerOffset: [0, 0, -5.8],
    details: [
      "I worked at the Colney Hatch Extra store to understand how a Tesco store operates day to day.",
      "During the placement, I spent time across a range of roles including checkout, customer service, stacking shelves, and online picking.",
      "That hands-on exposure helped me see how different parts of the store connect together operationally and how much coordination sits behind the customer experience.",
      "I also attended management meetings, which gave me a clearer view of store priorities, decision-making, and the realities of running a large retail environment.",
    ],
    presentation: {
      kicker: "Placement Focus",
      overview:
        "My Store Placement was based at Colney Hatch Extra, where I spent time learning how a Tesco store operates from the inside. Rather than sitting within a software team, this placement gave me direct exposure to the day-to-day reality of store operations and the people who keep them running.",
      cards: [
        {
          title: "What I Experienced",
          body: "I rotated through a number of different roles across the store, including checkout, customer service, stacking shelves, and online picking. Each role gave me a different perspective on how stores balance customers, stock, fulfilment, and pace of work across the day.",
        },
        {
          title: "Why It Was Valuable",
          body: "This placement helped me understand that Tesco is not just a digital platform or an engineering organisation. It is a live retail operation, and seeing that first-hand gave much more context to the systems, tools, and processes that software teams ultimately support.",
        },
      ],
      spotlightTitle: "What I Was Exposed To",
      spotlight: [
        "Checkout",
        "Customer Service",
        "Shelf Stacking",
        "Online Picking",
        "Store Management Meetings",
      ],
      learningTitle: "What I Learned",
      learnings: [
        "How a large Tesco store operates across multiple functions at once",
        "How colleague roles differ but still depend on each other to keep the store moving",
        "How operational priorities shape the reality behind customer experience",
        "How management decisions in store connect to the wider Tesco business",
      ],
      takeaway:
        "This placement gave me important commercial and operational context. It helped me understand the human side of Tesco, the pace of store life, and the real-world environment that many Tesco systems are ultimately built to support.",
    },
  },
  {
    id: "labs",
    label: "Labs",
    title: "Labs",
    subtitle: "Team placement in Tesco Labs building a new MVP",
    color: "#f28f16",
    position: [-3, 0, -5],
    shelfSize: [1.7, 4.8, 9.5],
    markerOffset: [0, 0, -5.8],
    details: [
      "Labs was a team placement in Tesco Labs where we were asked to come up with a novel idea that would benefit Tesco and its customers, then turn it into a working MVP.",
      "My team created a shopping list integration for Tesco Scan As You Shop, designed to improve the TSAYS experience and make in-store shopping more seamless.",
      "We built the MVP for Android in Kotlin, which gave me exposure to a different platform and a different style of engineering work.",
      "This was where I first really learned how to work as an engineer in a team, including how to use git flows collaboratively and how to support and mentor others while building together.",
    ],
    presentation: {
      kicker: "Placement Focus",
      overview:
        "Labs was a team placement in Tesco Labs where the goal was to identify a new idea that could benefit Tesco and its customers, then turn that idea into a working MVP. It was much more product-oriented and experimental than my other placements.",
      cards: [
        {
          title: "What We Built",
          body: "My team came up with a shopping list integration for Tesco Scan As You Shop. The idea was to make TSAYS more useful and connected by helping customers bring their planning directly into the in-store shopping journey.",
        },
        {
          title: "Why It Was Valuable",
          body: "This placement was not only about building software. It was also about taking an idea from concept through to a working prototype, which meant thinking about customer value, usability, collaboration, and how to prove that an idea was worth building.",
        },
      ],
      spotlightTitle: "Technology Used",
      spotlight: [
        "Kotlin",
        "Android",
        "Tesco Scan As You Shop",
        "MVP Prototyping",
        "Team Delivery",
      ],
      learningTitle: "What I Learned",
      learnings: [
        "How to work properly as an engineer inside a team rather than as an individual contributor",
        "How to use git flows and collaborate safely on a shared codebase",
        "How to build an MVP from an idea and keep momentum around a product concept",
        "How to mentor and support others while still delivering technical work",
      ],
      takeaway:
        "Labs was where I really started to feel like an engineer working in a team. It combined product thinking, delivery, collaboration, and mentoring, and it gave me confidence in taking ideas forward with other people.",
    },
  },
  {
    id: "slots",
    label: "Slots",
    title: "Slots",
    subtitle: "Frontend placement in LEGO, working on the Tesco website",
    color: "#00a7e1",
    position: [2, 0, -5],
    shelfSize: [1.7, 4.8, 9.5],
    markerOffset: [0, 0, -5.8],
    details: [
      "This was my frontend placement in LEGO, working on the Tesco website as part of an MFE project.",
      "Within that, I worked in the Slots subteam looking after the page where customers book delivery and collection slots.",
      "It was my first experience working in a professional engineering team, so it gave me a strong foundation in how software is built and delivered in a real product environment.",
      "Through this placement, I learned agile ways of working, coding standards, team processes, and the day-to-day expectations of contributing to a production codebase.",
      "It was also where I started to understand how a user-facing feature fits into a wider platform, and how small frontend decisions can affect customer experience at scale.",
    ],
    presentation: {
      kicker: "Placement Focus",
      overview:
        "My Slots placement was a frontend role in LEGO, working on the Tesco website as part of an MFE project. Within that setup, I worked in the Slots subteam, which looked after the page where customers choose delivery and Click+Collect slots.",
      cards: [
        {
          title: "What The Team Owned",
          body: "The team looked after the booking flow for delivery and collection slots. That meant working on a customer-facing product area where clarity, reliability, and responsiveness mattered because users were making real shopping decisions in the moment.",
        },
        {
          title: "Why It Mattered",
          body: "This was a core customer journey. The slot booking flow sits at the point where convenience, fulfilment, and customer expectation all meet, so even small frontend changes had to be made carefully and with a strong awareness of user impact.",
        },
      ],
      spotlightTitle: "Technology Used",
      spotlight: [
        "React",
        "TypeScript",
        "GraphQL",
        "Storybook",
        "React Testing Library",
      ],
      learningTitle: "What I Learned",
      learnings: [
        "How agile ceremonies work in practice, not just in theory",
        "How coding standards and review processes shape a shared codebase",
        "How teams organise work, communicate, and deliver incrementally",
        "What it means to build changes safely in a production environment",
      ],
      takeaway:
        "More than anything, this placement gave me my foundation. It was where I learned how modern frontend engineering works in a real team and where I started building the habits I would carry into the rest of the graduate scheme.",
    },
  },
  {
    id: "connect",
    label: "Connect",
    title: "Connect",
    subtitle: "Full stack placement in Tesco's supply chain tooling platform",
    color: "#1f7a5a",
    position: [8, 0, -5],
    shelfSize: [1.7, 4.8, 9.5],
    markerOffset: [0, 0, -5.8],
    details: [
      "Connect was my full stack placement within Tesco's supply chain tooling platform.",
      "I worked in Spartans, a sub-team focused on upgrading and decommissioning OPS, a legacy system used by stores for stock forecasting data.",
      "This placement gave me exposure across both frontend and backend development, working with a React frontend, a Spring Boot backend, and an MSQL database.",
      "It helped me move beyond purely frontend work and understand how data, services, and user interfaces fit together in a larger operational platform.",
    ],
    presentation: {
      kicker: "Placement Focus",
      overview:
        "Connect was a full stack placement in Tesco's supply chain tooling platform. I worked in Spartans, a sub-team focused on upgrading and decommissioning OPS, a legacy system that supported stores with stock forecasting data.",
      cards: [
        {
          title: "What The Team Worked On",
          body: "The work sat in an operational part of the business rather than a direct customer journey. That meant building and improving systems that stores rely on behind the scenes, especially around the data and tooling that supports stock planning and forecasting.",
        },
        {
          title: "Why It Was Interesting",
          body: "This placement exposed me to the challenge of working around a legacy system while moving toward something more modern. It involved understanding existing behaviour, supporting change carefully, and contributing to a platform that had real operational importance.",
        },
      ],
      spotlightTitle: "Technology Used",
      spotlight: [
        "React",
        "Spring Boot",
        "MSQL",
        "Full Stack Development",
        "Legacy Modernisation",
      ],
      learningTitle: "What I Learned",
      learnings: [
        "How frontend and backend development connect across a full stack product",
        "How operational tooling differs from customer-facing product work",
        "How legacy systems shape engineering decisions and delivery approaches",
        "How to think about change, risk, and migration in an established platform",
      ],
      takeaway:
        "This placement expanded my perspective from frontend delivery into full stack engineering. It was where I became more comfortable thinking about systems end to end and where I saw how engineering work can improve critical internal tools, not just customer-facing experiences.",
    },
  },
  {
    id: "identity",
    label: "Identity",
    title: "Identity",
    subtitle: "Pure backend placement in Tesco Identity",
    color: "#7a3bb2",
    position: [13, 0, -5],
    shelfSize: [1.7, 4.8, 9.5],
    markerOffset: [0, 0, -5.8],
    details: [
      "Identity was my third placement and it was a pure backend role in the Identifiers team.",
      "Identity is the system Tesco uses to verify users and colleagues, so it sits at the centre of a critical, high-volume platform.",
      "The Identifiers team looks after the lifecycle of identifiers and the APIs responsible for actions such as registering new users, deleting users, and collapsing accounts together.",
      "This placement gave me experience working on backend systems where scale, accuracy, and reliability were essential.",
    ],
    presentation: {
      kicker: "Placement Focus",
      overview:
        "Identity was my third placement and a pure backend role in the Identifiers team. The wider Identity platform is used by Tesco to verify users and colleagues, making it a high-volume and business-critical area of engineering.",
      cards: [
        {
          title: "What The Team Owned",
          body: "The Identifiers team was responsible for the lifecycle of identifiers. That included backend APIs handling actions such as registering new users, deleting users, and collapsing or combining accounts together when needed.",
        },
        {
          title: "Why It Mattered",
          body: "Because Identity sits at the core of how users and colleagues are recognised and verified, the work had to be highly reliable. It was a platform where backend correctness, consistency, and scale were especially important.",
        },
      ],
      spotlightTitle: "Technology Used",
      spotlight: [
        "Spring Boot",
        "PostgreSQL",
        "Vert.x",
        "Backend APIs",
        "High Volume Systems",
      ],
      learningTitle: "What I Learned",
      learnings: [
        "How backend services are designed and maintained in a high-volume environment",
        "How critical platform APIs support user lifecycle events end to end",
        "How data integrity and reliability matter when working on identity systems",
        "How to think about engineering work in terms of scale, robustness, and operational risk",
      ],
      takeaway:
        "This placement gave me my first deep exposure to backend engineering inside a large platform team. It taught me how much care is needed when working on systems that sit at the heart of authentication, identity, and account lifecycle management.",
    },
  },
];

const scenicAisles = [
  { id: "scenic-1", position: [-15.5, 0, -5], shelfSize: [1.05, 4.4, 8.8] },
  { id: "scenic-2", position: [15.5, 0, -5], shelfSize: [1.05, 4.4, 8.8] },
];

const obstacleBounds = [
  { minX: -16.0, maxX: -15.0, minZ: -9.4, maxZ: -0.6 },
  { minX: -13.85, maxX: -12.15, minZ: -9.9, maxZ: -0.2 },
  { minX: -8.85, maxX: -7.15, minZ: -9.9, maxZ: -0.2 },
  { minX: -3.85, maxX: -2.15, minZ: -9.9, maxZ: -0.2 },
  { minX: 1.15, maxX: 2.85, minZ: -9.9, maxZ: -0.2 },
  { minX: 7.15, maxX: 8.85, minZ: -9.9, maxZ: -0.2 },
  { minX: 12.15, maxX: 13.85, minZ: -9.9, maxZ: -0.2 },
  { minX: 15.0, maxX: 16.0, minZ: -9.4, maxZ: -0.6 },
  { minX: -16.0, maxX: -3.8, minZ: 4.0, maxZ: 5.0 },
  { minX: 3.8, maxX: 16.0, minZ: 4.0, maxZ: 5.0 },
  { minX: -15.6, maxX: 15.6, minZ: -14.8, maxZ: -13.8 },
];

const movementKeys = {
  ArrowUp: "forward",
  KeyW: "forward",
  ArrowDown: "backward",
  KeyS: "backward",
  ArrowLeft: "left",
  KeyA: "left",
  ArrowRight: "right",
  KeyD: "right",
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function collides(x, z) {
  return obstacleBounds.some(
    (bound) =>
      x > bound.minX && x < bound.maxX && z > bound.minZ && z < bound.maxZ,
  );
}

function App() {
  const [activeAisleId, setActiveAisleId] = useState(aisleData[0].id);
  const [nearbyAisleId, setNearbyAisleId] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [playerPosition, setPlayerPosition] = useState([0, 0, 4]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panelExpanded, setPanelExpanded] = useState(false);

  const activeAisle =
    aisleData.find((aisle) => aisle.id === activeAisleId) ?? aisleData[0];

  useEffect(() => {
    if (!nearbyAisleId || panelOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        setActiveAisleId(nearbyAisleId);
        setPanelOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nearbyAisleId, panelOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === "Escape") {
        setPanelOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      setZoomLevel((currentZoom) =>
        clamp(currentZoom + event.deltaY * 0.0012, 0.72, 1.35),
      );
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="app-shell">
      <div className="hud top-left">
        <p className="eyebrow">Tesco Graduate Store</p>
        <h1>Walk Through My Graduate Experience</h1>
        {/* <p>
          Use <strong>WASD</strong> or the arrow keys to move the shopping
          assistant around the store. The view stays fixed like a Sims-style
          cutaway layout, with longer supermarket aisles and placement zones.
        </p> */}
      </div>

      <div className="hud top-right">
        <h2>Controls</h2>
        <p>`W / A / S / D` move</p>
        <p>`Mouse wheel` zooms view</p>
        <p>`Space` opens aisle details</p>
        <p>`Esc` closes the detail panel</p>
      </div>

      <div className={`scene-frame ${panelOpen ? "dimmed" : ""}`}>
        <Canvas camera={{ position: [0, 40, 32], fov: 26 }} shadows>
          <color attach="background" args={["#cfe3ff"]} />
          <ambientLight intensity={1.8} />
          <directionalLight
            castShadow
            intensity={2.4}
            position={[10, 22, 12]}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <FixedView zoomLevel={zoomLevel} />
          <StoreScene
            activeAisleId={activeAisleId}
            nearbyAisleId={nearbyAisleId}
            setNearbyAisleId={setNearbyAisleId}
            movementLocked={panelOpen}
            playerPosition={playerPosition}
            setPlayerPosition={setPlayerPosition}
          />
        </Canvas>
      </div>

      <div className={`world-dim ${panelOpen ? "visible" : ""}`} />

      <div
        className={`interaction-prompt ${nearbyAisleId && !panelOpen ? "visible" : ""}`}
      >
        {nearbyAisleId ? (
          <>
            <p className="prompt-title">
              {aisleData.find((aisle) => aisle.id === nearbyAisleId)?.title}
            </p>
            <p>Press `Space` to explore this aisle</p>
          </>
        ) : null}
      </div>

      <div className="hud bottom-left">
        <h2>Current position</h2>
        <p>
          X {playerPosition[0].toFixed(1)} / Z {playerPosition[2].toFixed(1)}
        </p>
        <p>
          Nearby aisle:{" "}
          <strong>
            {nearbyAisleId
              ? aisleData.find((aisle) => aisle.id === nearbyAisleId)?.title
              : "None"}
          </strong>
        </p>
      </div>

      <div
        className={`detail-panel ${panelOpen ? "open" : ""} ${panelExpanded ? "expanded" : ""}`}
      >
        <button
          className="fullscreen-button icon-button"
          type="button"
          onClick={() => setPanelExpanded((current) => !current)}
          aria-label={
            panelExpanded ? "Restore panel width" : "Expand panel width"
          }
          title={panelExpanded ? "Restore panel width" : "Expand panel width"}
        >
          {panelExpanded ? "⤢" : "⤢"}
        </button>
        <button
          className="close-button"
          type="button"
          onClick={() => setPanelOpen(false)}
        >
          Close
        </button>
        <div className="detail-panel-content">
          <h2>{activeAisle.title}</h2>
          <p className="panel-subtitle">{activeAisle.subtitle}</p>
          {activeAisle.introPresentation ? (
            <IntroPresentation aisle={activeAisle} />
          ) : activeAisle.presentation ? (
            <AislePresentation aisle={activeAisle} />
          ) : (
            <>
              <ul>
                {activeAisle.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p className="panel-note">
                Replace this placeholder copy with the real detail for each
                placement, project area, or section of your graduate journey.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function IntroPresentation({ aisle }) {
  const { introPresentation } = aisle;

  return (
    <div className="intro-presentation">
      <section className="intro-hero-card">
        <p className="presentation-kicker">{introPresentation.kicker}</p>
        <p className="intro-lead">{introPresentation.lead}</p>
      </section>

      <section className="intro-story-grid">
        <article className="presentation-card">
          <h3>How I Got Here</h3>
          <p>{introPresentation.story}</p>
        </article>
        <article className="presentation-card">
          <h3>Why This Portfolio Exists</h3>
          <p>{introPresentation.transition}</p>
        </article>
      </section>

      <section className="intro-timeline">
        <h3>Timeline</h3>
        <div className="timeline-list">
          {introPresentation.timeline.map((item) => (
            <article className="timeline-item" key={item.year}>
              <p className="timeline-year">{item.year}</p>
              <p className="timeline-text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function AislePresentation({ aisle }) {
  const { presentation } = aisle;

  return (
    <div className="presentation-layout">
      <div className="presentation-hero">
        <p className="presentation-kicker">{presentation.kicker}</p>
        <p className="presentation-overview">{presentation.overview}</p>
      </div>

      <div className="presentation-grid">
        {presentation.cards.map((card) => (
          <article className="presentation-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>

      <section className="presentation-band">
        <h3>{presentation.spotlightTitle}</h3>
        <div className="presentation-tags">
          {presentation.spotlight.map((item) => (
            <span key={item} className="presentation-tag">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="presentation-band">
        <h3>{presentation.learningTitle}</h3>
        <ul className="presentation-list">
          {presentation.learnings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="presentation-summary">
        <h3>Key Takeaway</h3>
        <p>{presentation.takeaway}</p>
      </section>
    </div>
  );
}

function StoreScene({
  activeAisleId,
  nearbyAisleId,
  setNearbyAisleId,
  movementLocked,
  playerPosition,
  setPlayerPosition,
}) {
  const keysRef = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });
  const targetPosition = useRef(new THREE.Vector3(...playerPosition));

  useEffect(() => {
    const onKeyDown = (event) => {
      if (movementLocked) {
        return;
      }
      const action = movementKeys[event.code];
      if (action) {
        keysRef.current[action] = true;
      }
    };

    const onKeyUp = (event) => {
      const action = movementKeys[event.code];
      if (action) {
        keysRef.current[action] = false;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [movementLocked]);

  useEffect(() => {
    if (movementLocked) {
      keysRef.current = {
        forward: false,
        backward: false,
        left: false,
        right: false,
      };
    }
  }, [movementLocked]);

  useFrame((_, delta) => {
    const step = movementLocked ? 0 : 5 * delta;
    let nextX = targetPosition.current.x;
    let nextZ = targetPosition.current.z;

    if (keysRef.current.forward) {
      nextZ -= step;
    }
    if (keysRef.current.backward) {
      nextZ += step;
    }
    if (keysRef.current.left) {
      nextX -= step;
    }
    if (keysRef.current.right) {
      nextX += step;
    }

    nextX = clamp(nextX, -15, 15);
    nextZ = clamp(nextZ, -14, 5);

    if (!collides(nextX, targetPosition.current.z)) {
      targetPosition.current.x = nextX;
    }
    if (!collides(targetPosition.current.x, nextZ)) {
      targetPosition.current.z = nextZ;
    }

    const closestAisle = aisleData.reduce(
      (closest, aisle) => {
        const distance = targetPosition.current.distanceTo(
          new THREE.Vector3(
            aisle.position[0] + aisle.markerOffset[0],
            0,
            aisle.position[2] + aisle.markerOffset[2],
          ),
        );

        if (distance < closest.distance) {
          return { id: aisle.id, distance };
        }
        return closest;
      },
      { id: null, distance: Infinity },
    );

    const detectedAisleId =
      closestAisle.distance < 2.6 ? closestAisle.id : null;

    if (nearbyAisleId !== detectedAisleId) {
      setNearbyAisleId(detectedAisleId);
    }

    setPlayerPosition([
      Number(targetPosition.current.x.toFixed(3)),
      0,
      Number(targetPosition.current.z.toFixed(3)),
    ]);
  });

  return (
    <>
      <StoreShell />
      <Floor />
      <CarPark />
      {scenicAisles.map((aisle) => (
        <ScenicAisle key={aisle.id} aisle={aisle} />
      ))}
      <EntranceWall />
      <Signage />
      {aisleData.map((aisle) => (
        <Aisle
          key={aisle.id}
          aisle={aisle}
          highlighted={nearbyAisleId === aisle.id || activeAisleId === aisle.id}
        />
      ))}
      <Player targetPosition={targetPosition} />
    </>
  );
}

function FixedView({ zoomLevel }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(0, 0, -4.5);
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame((_, delta) => {
    const targetPosition = new THREE.Vector3(0, 40 * zoomLevel, 32 * zoomLevel);
    camera.position.lerp(targetPosition, 1 - Math.exp(-delta * 5));
    camera.lookAt(0, 0, -4.5);
  });

  return null;
}

function StoreShell() {
  return (
    <group>
      <mesh position={[0, 4, -15]} receiveShadow>
        <boxGeometry args={[34, 8, 1]} />
        <meshStandardMaterial color="#eef5ff" />
      </mesh>

      <mesh position={[0, 8.25, -15]} receiveShadow>
        <boxGeometry args={[34, 0.8, 1.2]} />
        <meshStandardMaterial color="#00539f" />
      </mesh>

      <mesh position={[-16.5, 4, -4.5]} receiveShadow>
        <boxGeometry args={[1, 8, 21]} />
        <meshStandardMaterial color="#eef5ff" />
      </mesh>

      <mesh position={[16.5, 4, -4.5]} receiveShadow>
        <boxGeometry args={[1, 8, 21]} />
        <meshStandardMaterial color="#eef5ff" />
      </mesh>

      <mesh position={[0, 0.2, 5.6]} castShadow receiveShadow>
        <boxGeometry args={[34, 0.4, 1]} />
        <meshStandardMaterial color="#8ba8c7" />
      </mesh>

      <mesh position={[0, 0.5, -14.25]} castShadow receiveShadow>
        <boxGeometry args={[34, 1, 1.2]} />
        <meshStandardMaterial color="#ccd7e7" />
      </mesh>
    </group>
  );
}

function Floor() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[36, 24]} />
        <meshStandardMaterial color="#f4f0e7" />
      </mesh>
      {[-10, -5, 0, 5, 10].map((x) => (
        <mesh
          key={`tile-${x}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[x, 0.01, -4.5]}
          receiveShadow
        >
          <planeGeometry args={[0.2, 24]} />
          <meshStandardMaterial color="#dfd7c8" />
        </mesh>
      ))}
      {[-12, -7, -2, 3].map((z) => (
        <mesh
          key={`cross-${z}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.01, z]}
          receiveShadow
        >
          <planeGeometry args={[36, 0.2]} />
          <meshStandardMaterial color="#dfd7c8" />
        </mesh>
      ))}
    </group>
  );
}

function CarPark() {
  const parkedCars = [
    { id: "car-1", position: [-12.6, 0, 9.2], color: "#d5303f" },
    { id: "car-2", position: [-7.9, 0, 9.2], color: "#244f89" },
    { id: "car-3", position: [8.1, 0, 9.2], color: "#5a6472" },
    { id: "car-4", position: [12.8, 0, 9.2], color: "#e7a83a" },
  ];

  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.018, 10.1]}
        receiveShadow
      >
        <planeGeometry args={[36, 8.2]} />
        <meshStandardMaterial color="#768291" />
      </mesh>

      {[-15.3, -10.6, -5.9, -1.2, 3.5, 8.2, 12.9].map((x) => (
        <mesh
          key={`bay-line-${x}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[x, 0.03, 9.8]}
          receiveShadow
        >
          <planeGeometry args={[0.12, 5.3]} />
          <meshStandardMaterial color="#f7f7f2" />
        </mesh>
      ))}

      {[-2.1, -1.1, -0.1, 0.9, 1.9].map((x) => (
        <mesh
          key={`crossing-${x}`}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[x, 0.035, 10.1]}
          receiveShadow
        >
          <planeGeometry args={[0.55, 8.2]} />
          <meshStandardMaterial color="#fffdf7" />
        </mesh>
      ))}

      {parkedCars.map((car) => (
        <ParkedCar key={car.id} position={car.position} color={car.color} />
      ))}
    </group>
  );
}

function ParkedCar({ position, color }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow position={[0, 0.35, 0]}>
        <boxGeometry args={[2.6, 0.28, 4.2]} />
        <meshStandardMaterial color="#232c38" />
      </mesh>

      <mesh castShadow receiveShadow position={[0, 0.72, 0.1]}>
        <boxGeometry args={[2.1, 0.66, 2.5]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh castShadow receiveShadow position={[0, 0.9, 0.1]}>
        <boxGeometry args={[1.7, 0.36, 1.6]} />
        <meshStandardMaterial color="#bdd8f5" transparent opacity={0.82} />
      </mesh>

      {[
        [-1.05, 0.22, -1.45],
        [1.05, 0.22, -1.45],
        [-1.05, 0.22, 1.45],
        [1.05, 0.22, 1.45],
      ].map((wheel, index) => (
        <mesh
          key={`${color}-wheel-${index}`}
          castShadow
          receiveShadow
          position={wheel}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.34, 0.34, 0.24, 20]} />
          <meshStandardMaterial color="#121722" />
        </mesh>
      ))}
    </group>
  );
}

function Aisle({ aisle, highlighted }) {
  const color = highlighted ? aisle.color : "#d8c9ad";
  const [width, height, depth] = aisle.shelfSize;

  return (
    <group position={aisle.position}>
      <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh castShadow receiveShadow position={[0, height + 0.4, 0]}>
        <boxGeometry args={[width + 0.3, 0.3, depth + 0.4]} />
        <meshStandardMaterial color="#274870" />
      </mesh>

      {[-3.8, -2.4, -1.0, 0.4, 1.8, 3.2].map((zOffset) => (
        <mesh
          key={zOffset}
          position={[0, height * 0.56, zOffset]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[width - 0.25, 0.16, 0.18]} />
          <meshStandardMaterial color="#f9eecf" />
        </mesh>
      ))}

      {[-3.8, -2.4, -1.0, 0.4, 1.8, 3.2].map((zOffset, index) => (
        <mesh
          key={`product-${aisle.id}-${zOffset}`}
          position={[0.18, height * 0.68, zOffset + 0.08]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[width - 0.7, 0.34, 0.4]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#ffd06a" : "#9bd5ff"}
          />
        </mesh>
      ))}

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, height + 1.35, -depth / 2 - 1.3]} castShadow>
          <cylinderGeometry args={[0.95, 0.95, 0.4, 32]} />
          <meshStandardMaterial color={aisle.color} emissive={aisle.color} />
        </mesh>
      </Float>

      <Text
        position={[0, height + 2.15, -depth / 2 - 1.3]}
        fontSize={0.54}
        maxWidth={4}
        color="#111111"
        outlineWidth={0.03}
        outlineColor="#f7f4ea"
        anchorX="center"
        anchorY="middle"
      >
        {aisle.label}
      </Text>

      <mesh
        position={[0, 0.06, -depth / 2 - 1.3]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[1.2, 32]} />
        <meshStandardMaterial color={highlighted ? "#d7f1ff" : "#f0e5cf"} />
      </mesh>
    </group>
  );
}

function ScenicAisle({ aisle }) {
  const [width, height, depth] = aisle.shelfSize;

  return (
    <group position={aisle.position}>
      <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial color="#fff9ee" />
      </mesh>

      <mesh castShadow receiveShadow position={[0, height + 0.32, 0]}>
        <boxGeometry args={[width + 0.2, 0.24, depth + 0.35]} />
        <meshStandardMaterial color="#567aa0" />
      </mesh>

      {[-3.5, -2.1, -0.7, 0.7, 2.1, 3.5].map((zOffset, index) => (
        <mesh
          key={`${aisle.id}-${zOffset}`}
          castShadow
          receiveShadow
          position={[0, height * 0.58, zOffset]}
        >
          <boxGeometry args={[width - 0.18, 0.14, 0.18]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? "#f7e6a7" : "#b2d7f7"}
          />
        </mesh>
      ))}
    </group>
  );
}

function EntranceWall() {
  return (
    <group position={[0, 0, 4.45]}>
      <mesh castShadow receiveShadow position={[-9.9, 2.4, 0]}>
        <boxGeometry args={[12.2, 4.8, 0.5]} />
        <meshStandardMaterial color="#f2f7ff" />
      </mesh>
      <mesh castShadow receiveShadow position={[9.9, 2.4, 0]}>
        <boxGeometry args={[12.2, 4.8, 0.5]} />
        <meshStandardMaterial color="#f2f7ff" />
      </mesh>

      <mesh castShadow receiveShadow position={[-9.9, 5.1, 0]}>
        <boxGeometry args={[12.5, 0.45, 0.7]} />
        <meshStandardMaterial color="#00539f" />
      </mesh>
      <mesh castShadow receiveShadow position={[9.9, 5.1, 0]}>
        <boxGeometry args={[12.5, 0.45, 0.7]} />
        <meshStandardMaterial color="#00539f" />
      </mesh>

      <mesh castShadow receiveShadow position={[-3.8, 2.4, 0.04]}>
        <boxGeometry args={[0.12, 4.8, 0.18]} />
        <meshStandardMaterial color="#dcecff" />
      </mesh>
      <mesh castShadow receiveShadow position={[3.8, 2.4, 0.04]}>
        <boxGeometry args={[0.12, 4.8, 0.18]} />
        <meshStandardMaterial color="#dcecff" />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 4.82, 0.04]}>
        <boxGeometry args={[7.6, 0.16, 0.18]} />
        <meshStandardMaterial color="#dcecff" />
      </mesh>

      {[-10.2, 10.2].map((x) => (
        <group key={`front-window-block-${x}`} position={[x, 2.6, 0.34]}>
          <mesh castShadow receiveShadow position={[0, 0, -0.06]}>
            <boxGeometry args={[7.05, 3.7, 0.22]} />
            <meshStandardMaterial color="#eaf3fc" />
          </mesh>
          <mesh castShadow receiveShadow position={[0, 0, -0.01]}>
            <boxGeometry args={[6.35, 3.02, 0.08]} />
            <meshStandardMaterial color="#2e4057" />
          </mesh>
          <mesh castShadow receiveShadow position={[0, 0, 0.05]}>
            <boxGeometry args={[6.15, 2.86, 0.04]} />
            <meshStandardMaterial color="#b9e0ff" transparent opacity={0.55} />
          </mesh>

          {[-2.02, 0, 2.02].map((xOffset) => (
            <mesh
              key={`window-mullion-v-${x}-${xOffset}`}
              castShadow
              receiveShadow
              position={[xOffset, 0, 0.07]}
            >
              <boxGeometry args={[0.14, 2.95, 0.08]} />
              <meshStandardMaterial color="#f6fbff" />
            </mesh>
          ))}

          {[-1.45, 1.45].map((yOffset) => (
            <mesh
              key={`window-mullion-h-${x}-${yOffset}`}
              castShadow
              receiveShadow
              position={[0, yOffset, 0.07]}
            >
              <boxGeometry args={[6.18, 0.14, 0.08]} />
              <meshStandardMaterial color="#f6fbff" />
            </mesh>
          ))}

          <mesh castShadow receiveShadow position={[0, -1.78, 0.02]}>
            <boxGeometry args={[7.1, 0.16, 0.16]} />
            <meshStandardMaterial color="#d7e6f6" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Signage() {
  return (
    <group>
      {[-10.2, 10.2].map((x) => (
        <group key={`tesco-sign-${x}`}>
          <Text
            position={[x, 5.9, 4.8]}
            fontSize={1.25}
            color="#c41524"
            outlineWidth={0.04}
            outlineColor="#f7f4ea"
            anchorX="center"
            anchorY="middle"
          >
            TESCO
          </Text>
          {[-1.95, -0.65, 0.65, 1.95].map((offset) => (
            <TescoStripe
              key={`tesco-bar-${x}-${offset}`}
              position={[x + offset, 4.86, 4.8]}
              color="#00539f"
            />
          ))}
        </group>
      ))}
    </group>
  );
}

function TescoStripe({ position, color }) {
  const geometry = useMemo(() => {
    const width = 0.72;
    const height = 0.18;
    const slant = 0.16;
    const shape = new THREE.Shape();

    shape.moveTo(-width / 2 - slant, -height / 2);
    shape.lineTo(width / 2 - slant, -height / 2);
    shape.lineTo(width / 2 + slant, height / 2);
    shape.lineTo(-width / 2 + slant, height / 2);
    shape.closePath();

    const stripeGeometry = new THREE.ExtrudeGeometry(shape, {
      depth: 0.08,
      bevelEnabled: false,
    });

    stripeGeometry.center();
    return stripeGeometry;
  }, []);

  return (
    <mesh position={position} castShadow receiveShadow geometry={geometry}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Player({ targetPosition }) {
  const group = useRef();
  const head = useRef();
  const torso = useRef();
  const leftArm = useRef();
  const rightArm = useRef();
  const leftLeg = useRef();
  const rightLeg = useRef();
  const facing = useRef(0);
  const smoothedSpeed = useRef(0);
  const shadow = useRef();

  useFrame((_, delta) => {
    if (!group.current) {
      return;
    }

    const target = targetPosition.current;
    const nextPosition = new THREE.Vector3(target.x, 0, target.z);
    const previousPosition = group.current.position.clone();
    group.current.position.lerp(nextPosition, 1 - Math.exp(-delta * 12));

    const movement = new THREE.Vector2(
      target.x - group.current.position.x,
      target.z - group.current.position.z,
    );
    if (movement.lengthSq() > 0.0002) {
      facing.current = Math.atan2(movement.x, movement.y);
    }
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      facing.current,
      0.18,
    );

    const displacement = previousPosition.distanceTo(group.current.position);
    const speed = displacement / Math.max(delta, 0.001);
    smoothedSpeed.current = THREE.MathUtils.lerp(
      smoothedSpeed.current,
      speed,
      0.18,
    );

    const walkStrength = Math.min(smoothedSpeed.current / 4, 1);
    const walkTime = performance.now() * 0.009;
    const swing = Math.sin(walkTime) * 0.7 * walkStrength;
    const bounce = Math.abs(Math.sin(walkTime * 2)) * 0.12 * walkStrength;

    if (torso.current) {
      torso.current.position.y = 1.75 + bounce;
      torso.current.rotation.z = Math.sin(walkTime) * 0.04 * walkStrength;
    }
    if (head.current) {
      head.current.position.y = 3.58 + bounce * 0.7;
      head.current.rotation.z = Math.sin(walkTime) * 0.02 * walkStrength;
    }
    if (leftArm.current) {
      leftArm.current.rotation.x = swing;
    }
    if (rightArm.current) {
      rightArm.current.rotation.x = -swing;
    }
    if (leftLeg.current) {
      leftLeg.current.rotation.x = -swing;
    }
    if (rightLeg.current) {
      rightLeg.current.rotation.x = swing;
    }
    if (shadow.current) {
      const scale = 1 + walkStrength * 0.08 - bounce * 0.12;
      shadow.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={group} position={[0, 0, 4]} scale={1.5}>
      <mesh
        ref={shadow}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.02, 0]}
      >
        <circleGeometry args={[0.92, 32]} />
        <meshStandardMaterial color="#000000" transparent opacity={0.16} />
      </mesh>

      <group ref={leftLeg} position={[-0.42, 0.92, 0]}>
        <mesh castShadow receiveShadow position={[0, -0.55, 0]}>
          <boxGeometry args={[0.44, 1.1, 0.44]} />
          <meshStandardMaterial color="#222f53" />
        </mesh>
      </group>
      <group ref={rightLeg} position={[0.42, 0.92, 0]}>
        <mesh castShadow receiveShadow position={[0, -0.55, 0]}>
          <boxGeometry args={[0.44, 1.1, 0.44]} />
          <meshStandardMaterial color="#222f53" />
        </mesh>
      </group>

      <mesh castShadow receiveShadow position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.62, 0.75, 0.3, 32]} />
        <meshStandardMaterial color="#433a33" />
      </mesh>

      <group ref={torso} position={[0, 1.75, 0]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.5, 1.8, 0.9]} />
          <meshStandardMaterial color="#00539f" />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0.08, 0.47]}>
          <boxGeometry args={[1.05, 1.1, 0.08]} />
          <meshStandardMaterial color="#f5f8ff" />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0.46, 0.52]}>
          <boxGeometry args={[0.46, 0.36, 0.08]} />
          <meshStandardMaterial color="#ee1c2e" />
        </mesh>
        <mesh castShadow receiveShadow position={[0.34, -0.02, 0.52]}>
          <boxGeometry args={[0.26, 0.44, 0.08]} />
          <meshStandardMaterial color="#d7e8f9" />
        </mesh>
      </group>

      <group ref={head} position={[0, 3.58, 0]}>
        <mesh castShadow receiveShadow position={[0, -0.18, 0]}>
          <cylinderGeometry args={[0.54, 0.6, 0.45, 32]} />
          <meshStandardMaterial color="#f1c39a" />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.66, 0.7, 0.34, 32]} />
          <meshStandardMaterial color="#e3c15a" />
        </mesh>
        <mesh castShadow receiveShadow position={[-0.18, -0.12, 0.54]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color="#1f2a44" />
        </mesh>
        <mesh castShadow receiveShadow position={[0.18, -0.12, 0.54]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial color="#1f2a44" />
        </mesh>
        <mesh castShadow receiveShadow position={[0, -0.34, 0.56]}>
          <boxGeometry args={[0.22, 0.04, 0.04]} />
          <meshStandardMaterial color="#a75c52" />
        </mesh>
      </group>

      <group ref={leftArm} position={[-0.98, 2.18, 0]}>
        <mesh castShadow receiveShadow position={[0, -0.75, 0]}>
          <boxGeometry args={[0.34, 1.5, 0.34]} />
          <meshStandardMaterial color="#f1c39a" />
        </mesh>
      </group>
      <group ref={rightArm} position={[0.98, 2.18, 0]}>
        <mesh castShadow receiveShadow position={[0, -0.75, 0]}>
          <boxGeometry args={[0.34, 1.5, 0.34]} />
          <meshStandardMaterial color="#f1c39a" />
        </mesh>
      </group>

      <Float speed={2.4} rotationIntensity={0.1} floatIntensity={0.18}>
        <Text
          position={[0, 5.05, 0]}
          fontSize={0.38}
          color="#111111"
          outlineWidth={0.024}
          outlineColor="#f7f4ea"
          anchorX="center"
          anchorY="middle"
        >
          Daniel
        </Text>
      </Float>
    </group>
  );
}

export default App;
