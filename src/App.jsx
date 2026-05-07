import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Factory,
  Fuel,
  Fan,
  Mail,
  MapPinned,
  PackageCheck,
  PhoneCall,
  PlugZap,
  Route,
  ShieldCheck,
  Sun,
  Store,
  Truck,
  UserRound,
  Warehouse,
} from 'lucide-react'
import heroImage from './assets/south-india-logistics-hero.png'
import './App.css'

const slideUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const metrics = [
  { value: '7', label: 'owned commercial vehicles' },
  { value: 'B2B', label: 'contract transport model' },
  { value: 'Multi-city', label: 'intrastate goods movement' },
]

const lanes = [
  'Perundurai - Coimbatore - Ooty',
  'Perundurai - Salem - Krishnagiri - Dharmapuri - Hosur',
  'Perundurai - Thanjavur - Thiruvarur',
  'Perundurai - Tirchy',
]

const profilePoints = [
  'Fleet Transport Company',
  'Contract Goods Transportation Service Provider',
  'B2B Intrastate Road Freight Partner',
  'Dedicated Fleet Contract Transportation Model',
]

const experiencePoints = [
  'Started in 1995',
  'Owner-managed business',
  'Continuing contract transport service',
  'Long-term private company support',
]

const services = [
  {
    icon: BriefcaseBusiness,
    title: 'Contract Goods Transportation',
    copy: 'Dedicated vehicle support for private companies that need regular goods movement through monthly, per-trip, route, or long-term transport agreements.',
  },
  {
    icon: Route,
    title: 'Intrastate Road Freight',
    copy: 'City-to-city road transport within the operating state for factories, warehouses, distributors, and branch networks.',
  },
  {
    icon: Warehouse,
    title: 'Company Location Support',
    copy: 'Warehouse, distributor, factory, and company location transport support for routine business dispatches.',
  },
  {
    icon: Factory,
    title: 'Regular Route-Based Trips',
    copy: 'Scheduled trips across selected city routes with practical coordination for vehicle availability and route timing.',
  },
]

const fleet = [
  { icon: Truck, label: '7 owned commercial vehicles' },
  { icon: Fuel, label: 'Route-based vehicle assignment' },
  { icon: Clock3, label: 'Scheduled trip availability' },
  { icon: ShieldCheck, label: 'Maintenance-focused operations' },
]

const industries = [
  { icon: Factory, label: 'Manufacturing' },
  { icon: Boxes, label: 'FMCG and packaging' },
  { icon: Store, label: 'Retail distribution' },
  { icon: Building2, label: 'Industrial supplies' },
  { icon: Warehouse, label: 'Wholesale trading' },
  { icon: PackageCheck, label: 'Agricultural products' },
]

const trustPoints = [
  'Direct owner communication',
  '7 owned vehicles',
  'Regular multi-city route support',
  'Contract-focused transport service',
  'Practical coordination for business goods movement',
  'Reliable vehicle availability',
  'Long-term business relationship approach',
]

const goods = [
  { icon: ShieldCheck, label: 'Stabilizers' },
  { icon: PlugZap, label: 'Inverters and UPS units' },
  { icon: Fuel, label: 'Batteries' },
  { icon: Route, label: 'Wires and cables' },
  { icon: PackageCheck, label: 'Electrical accessories' },
  { icon: Warehouse, label: 'Water heaters' },
  { icon: Fan, label: 'Fans' },
  { icon: Factory, label: 'Pumps' },
  { icon: Store, label: 'Kitchen appliances' },
  { icon: Sun, label: 'Solar products' },
]

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    const updateHeaderVisibility = () => {
      setIsHeaderVisible(window.scrollY < 80)
    }

    updateHeaderVisibility()
    window.addEventListener('scroll', updateHeaderVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateHeaderVisibility)
  }, [])

  return (
    <main>
      <section className="hero-section">
        <img className="hero-image" src={heroImage} alt="Commercial goods vehicles on a South Indian transport corridor" />
        <div className="hero-overlay" />
        <nav className={`nav glass-panel ${isHeaderVisible ? '' : 'nav-hidden'}`} aria-label="Company">
          <a className="brand" href="#top" aria-label="Tharun Trans">
            <span className="brand-mark"><Truck size={20} /></span>
            <span>
              <strong>Tharun Trans</strong>
              <small>Contract Goods Transport</small>
            </span>
          </a>
          <div className="nav-links" aria-label="Landing page sections">
            <a href="#about">About</a>
            <a href="#fleet">Fleet</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a className="nav-contact" href="#contact">Contact</a>
          </div>
        </nav>

        <div id="top" className="hero-content">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow"><MapPinned size={18} /> Fleet transport company portfolio</p>
            <h1>Reliable Contract Transport for Business Goods Movement</h1>
            <p className="hero-text">
              Tharun Trans is an owner-managed fleet transport company operating 7 commercial
              vehicles for regular goods movement across multiple cities within Tamil Nadu. We
              support private companies with dependable route-based transport and direct owner
              coordination.
            </p>
            <div className="hero-actions" aria-label="Company highlights">
              <a href="#contact"><Mail size={18} /> Business enquiry</a>
              <span><ShieldCheck size={18} /> Owner-managed transport</span>
              <span><Truck size={18} /> Dedicated vehicle operations</span>
            </div>
          </motion.div>

          <motion.aside
            className="route-card glass-panel"
            initial={{ opacity: 0, x: 70, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="route-head">
              <span>Contract route board</span>
              <ArrowUpRight size={20} />
            </div>
            <div className="map-lines" aria-hidden="true">
              <span className="node node-a" />
              <span className="node node-b" />
              <span className="node node-c" />
              <span className="node node-d" />
            </div>
            <div className="lane-slider">
              {lanes.map((lane, index) => (
                <motion.div
                  className="lane"
                  key={lane}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.45 + index * 0.12 }}
                >
                  <Truck size={18} />
                  <span>{lane}</span>
                  <strong>{index === 0 ? 'Primary' : 'Route'}</strong>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.div
          className="metric-strip glass-panel"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="about" className="about-section section-pad">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={slideUp}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow dark"><UserRound size={18} /> About Tharun Trans</p>
          <h2>Owner-managed transport support for private company contracts.</h2>
          <p className="section-copy">
            Tharun Trans is a single-owner, owner-managed fleet company focused on private company
            contract transport, regular goods movement, and dependable multi-city operations.
          </p>
        </motion.div>

        <div className="profile-grid">
          {profilePoints.map((item, index) => (
            <motion.article
              className="profile-card glass-panel light"
              key={item}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <CheckCircle2 size={24} />
              <span>{item}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="experience-section section-pad">
        <motion.div
          className="experience-panel"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <div className="experience-year">
            <span>Since</span>
            <strong>1995</strong>
          </div>
          <div className="experience-copy">
            <p className="eyebrow dark"><Clock3 size={18} /> Transport Experience Since 1995</p>
            <h2>Decades of owner-led goods transport experience.</h2>
            <p className="section-copy">
              Saravanan K started this transport business in 1995 with a focus on dependable goods
              movement for private companies. Since then, the company has continued to provide
              contract transport support with direct owner involvement, regular vehicle availability,
              and long-term business relationships.
            </p>
            <div className="experience-highlights">
              {experiencePoints.map((point) => (
                <span key={point}><CheckCircle2 size={18} /> {point}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="fleet" className="fleet-section section-pad">
        <motion.div
          className="fleet-panel"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-heading">
            <p className="eyebrow dark"><Truck size={18} /> Fleet overview</p>
            <h2>7 commercial vehicles for regular route-based goods movement.</h2>
            <p className="section-copy">
              Vehicles are assigned based on route, load requirement, delivery schedule, and client
              contract needs. The focus is practical: availability, maintenance, route discipline,
              and dependable movement.
            </p>
          </div>
          <div className="fleet-grid">
            {fleet.map((item) => {
              const Icon = item.icon
              return (
                <div className="fleet-item" key={item.label}>
                  <Icon size={26} />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="section-heading invert">
          <p className="eyebrow"><PackageCheck size={18} /> Services</p>
          <h2>Built for companies looking for a dependable transport partner.</h2>
          <p className="section-copy invert-copy">
            This website is not a booking platform, contractor dashboard, driver app, or shipment
            tracking system. It is a company profile for B2B contract goods transportation enquiries.
          </p>
        </div>
        <div className="service-slider">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                className="service-card glass-panel"
                key={service.title}
                initial={{ opacity: 0, x: 72 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Icon size={30} />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section id="work" className="contract-work-section section-pad">
        <div className="section-heading">
          <p className="eyebrow dark"><BriefcaseBusiness size={18} /> Our Contract Work</p>
          <h2>Transport work we support for private company logistics.</h2>
          <p className="section-copy">
            We provide regular contract transport support for V-Guard Industries, helping move goods
            across selected city routes within the state. Our work focuses on vehicle availability,
            route coordination, scheduled trips, and dependable business goods movement.
          </p>
        </div>
        <motion.div
          className="work-card"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span>Client Supported</span>
            <strong>V-Guard Industries</strong>
          </div>
          <div>
            <span>Service Type</span>
            <strong>Intrastate contract goods transportation</strong>
          </div>
          <div>
            <span>Fleet</span>
            <strong>7 commercial vehicles</strong>
          </div>
          <div>
            <span>Operation Type</span>
            <strong>Regular route-based movement</strong>
          </div>
        </motion.div>
      </section>

      <section className="coverage-section section-pad">
        <div className="section-heading">
          <p className="eyebrow dark"><Route size={18} /> Service area</p>
          <h2>Intrastate coverage for industrial areas, warehouses, and business hubs.</h2>
          <p className="section-copy">
            Route planning is based on client requirements, delivery timelines, load type, and
            vehicle availability. Current positioning is suitable for city-to-city goods movement,
            industrial areas, business hubs, warehouses, distributors, and company locations within
            the state.
          </p>
        </div>
        <div className="coverage-grid">
          {lanes.map((lane) => (
            <article className="coverage-card" key={lane}>
              <MapPinned size={22} />
              <span>{lane}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="industries-section section-pad">
        <div className="section-heading invert">
          <p className="eyebrow"><Factory size={18} /> Industries served</p>
          <h2>Practical transport support for businesses that move goods regularly.</h2>
        </div>
        <div className="industries-grid">
          {industries.map((item) => {
            const Icon = item.icon
            return (
              <article className="industry-card glass-panel" key={item.label}>
                <Icon size={28} />
                <span>{item.label}</span>
              </article>
            )
          })}
        </div>
      </section>

      <section className="trust-section section-pad">
        <div className="section-heading">
          <p className="eyebrow dark"><ClipboardCheck size={18} /> Why choose us</p>
          <h2>A serious fleet partner for procurement, vendors, banks, and business owners.</h2>
        </div>
        <div className="trust-grid">
          {trustPoints.map((point) => (
            <article className="trust-card" key={point}>
              <CheckCircle2 size={22} />
              <span>{point}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="goods-section section-pad">
        <div className="goods-panel">
          <div className="section-heading">
            <p className="eyebrow dark"><Boxes size={18} /> Goods We Transport</p>
            <h2>Practical goods movement for electrical and appliance supply chains.</h2>
            <p className="section-copy">
              This section reflects the type of business goods handled through regular route-based
              transport work. It is presented as portfolio capability, not a product sales list.
            </p>
          </div>
          <div className="goods-grid">
            {goods.map((item) => {
              const Icon = item.icon
              return (
                <article className="goods-card" key={item.label}>
                  <Icon size={24} />
                  <span>{item.label}</span>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="gallery-section section-pad">
        <div className="section-heading">
          <p className="eyebrow dark"><Building2 size={18} /> Portfolio gallery</p>
          <h2>Visual proof for clients reviewing fleet capability.</h2>
        </div>
        <div className="gallery-grid">
          <article className="gallery-feature">
            <img src={heroImage} alt="Fleet transport movement" />
            <div>
              <span>Fleet movement</span>
              <strong>Contract road freight profile</strong>
            </div>
          </article>
          <article className="gallery-tile"><Truck size={34} /><span>Vehicles</span></article>
          <article className="gallery-tile"><Warehouse size={34} /><span>Loading support</span></article>
          <article className="gallery-tile"><Route size={34} /><span>City routes</span></article>
        </div>
      </section>

      <section id="contact" className="contact-section section-pad">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <div className="contact-copy">
            <p className="eyebrow"><PhoneCall size={18} /> Talk to Us</p>
            <h2>Speak directly with the owner of Tharun Trans</h2>
            <p>
              For regular goods movement, route planning, vehicle availability, or contract transport
              enquiries, you can speak directly with the person managing the fleet.
            </p>
          </div>

          <div className="contact-grid">
            <motion.article
              className="owner-card glass-panel"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="owner-avatar">SK</div>
              <div>
                <span>Owner</span>
                <strong>Saravanan K</strong>
                <small>Owner-managed fleet contact for business transport enquiries.</small>
              </div>
            </motion.article>

            <motion.article
              className="email-card glass-panel"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <div className="email-orbit" aria-hidden="true">
                <Mail size={34} />
                <span />
                <span />
              </div>
              <span>Business Email</span>
              <strong>tharuntrans8@gmail.com</strong>
            </motion.article>
          </div>

          <div className="enquiry-strip" aria-label="Business enquiry details">
            <span><PhoneCall size={18} /> Phone / WhatsApp: To be added</span>
            <span><BriefcaseBusiness size={18} /> Business enquiry details can be shared directly by email</span>
          </div>

          <div className="contact-marquee" aria-label="Operating focus">
            <span>Regular contract trips</span>
            <i />
            <span>7-vehicle fleet</span>
            <i />
            <span>Multiple city routes</span>
            <i />
            <span>Business goods transport</span>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default App
