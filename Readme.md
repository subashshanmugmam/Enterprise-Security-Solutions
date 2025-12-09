IT Services / Cybersecurity Website - Master Frontend Project Prompt
Create a comprehensive, modern IT services and cybersecurity website with 9 complete HTML pages. This is a fully functional frontend application for an IT/cybersecurity firm offering managed services, security solutions, and client portal access with both admin and client interfaces.
Core Requirements
Technology Stack

HTML5 with semantic markup
Tailwind CSS via CDN for styling (use only core utility classes - no custom config)
Vanilla JavaScript for all interactions
Responsive Design - Mobile-first approach
RTL Support - Bidirectional language toggle
Modern UI/UX - Tech-forward design with cybersecurity aesthetics

Design Principles

Modern, tech-focused design with cybersecurity theme
Color palette: Deep blues, cyans, purples with neon accents (electric blue, cyan, green)
Dark mode aesthetic with glowing elements
Matrix-style effects, circuit board patterns, digital grid backgrounds
Animated elements suggesting security, encryption, data flow
Professional yet cutting-edge appearance
Trust-building design elements (shields, locks, certificates)

Special Navigation Requirement
Home Dropdown Menu (CRITICAL FEATURE)
The navigation must include a "Home" menu item with a dropdown that reveals two options:

Home Version 1 (links to index.html)
Home Version 2 (links to index2.html)

Visual Specification (as shown in reference image):

"Home" text with a downward chevron/arrow (▼) indicator
On hover: dropdown menu appears below
Dropdown contains:

"Home Version 1" option
"Home Version 2" option


White background dropdown with subtle shadow
Clean typography, adequate padding
Smooth slide-down animation

Implementation Details:
html<!-- Navigation structure example -->
<nav>
  <div class="menu-item-with-dropdown">
    <a href="#" class="nav-link">
      Home <svg><!-- chevron down icon --></svg>
    </a>
    <div class="dropdown-menu">
      <a href="index.html">Home Version 1</a>
      <a href="index2.html">Home Version 2</a>
    </div>
  </div>
  <a href="about.html">About</a>
  <a href="services.html">Services</a>
  <!-- more menu items -->
</nav>
Behavior:

Desktop: Show dropdown on hover
Mobile: Show dropdown on click/tap
Close dropdown when clicking outside
Active state highlighting for current page
Smooth CSS transitions


Pages to Create
1. index.html - Main Landing Page (Version 1)
Purpose: Primary homepage showcasing IT services and cybersecurity solutions
Sections:

Hero section with:

Powerful headline: "Secure Your Digital Future"
Subheadline: "Enterprise-grade IT solutions and cybersecurity services"
Two CTA buttons (Get Protected, Our Services)
Animated background: Matrix-style falling code, circuit board patterns, or particle network
Use background image: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920 (tech/server room)
Overlay with animated geometric shapes or grid lines


Trust bar:

Statistics: "500+ Protected Clients", "99.9% Uptime", "24/7 Monitoring", "Zero-Day Response"
Animated counters
Certification badges (ISO 27001, SOC 2, CISSP, etc.)


Core services grid (6 services):

Managed IT Services - Icon: 🖥️ or server icon

Image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600


Cybersecurity Solutions - Icon: 🛡️ or shield icon

Image: https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600


Cloud Services - Icon: ☁️ or cloud icon

Image: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600


Network Infrastructure - Icon: 🌐 or network icon

Image: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600


Data Backup & Recovery - Icon: 💾 or database icon

Image: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600


IT Consulting - Icon: 💡 or consultant icon

Image: https://images.unsplash.com/photo-1552664730-d307ca884978?w=600


Each card: Glowing border on hover, icon, title, description, "Learn More" link


"Why Choose Us" section:

4 key differentiators with animated icons
24/7 Support, Proactive Monitoring, Expert Team, Compliance Ready
Background: Dark with subtle grid pattern
Image: https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920


Security threat landscape:

Real-time threat map visualization (animated SVG or canvas)
Statistics on threats blocked, vulnerabilities patched
"See How We Protect You" CTA


Case studies/success stories:

3 featured client stories
Before/After metrics (downtime reduced, security score improved)
Industry badges (Healthcare, Finance, E-commerce)
Client images:

https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600
https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600
https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600




Technology stack showcase:

Logos of technologies/platforms supported
Microsoft, AWS, Cisco, VMware, Fortinet, etc.
Animated scroll or grid with hover effects
Use placeholder: https://via.placeholder.com/120x60/1e293b/64ffda?text=Tech+Logo


Client testimonials:

Carousel with 5 testimonials
Client photo, name, title, company
5-star rating
Quote about security improvements or service quality
Photos: https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150 (and variations)


Security certifications & compliance:

Badge grid showing certifications
ISO 27001, SOC 2 Type II, HIPAA, GDPR, PCI DSS
Logos: https://via.placeholder.com/150x150/0f172a/10b981?text=ISO+27001


Latest security insights:

Blog preview cards (3 recent articles)
Thumbnail, title, excerpt, "Read More"
Images: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400


Newsletter/Security alerts signup:

"Stay Ahead of Cyber Threats"
Email signup for security bulletins
Background: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920 with dark overlay


Footer with social links, Privacy Policy (#), Terms (#)

Features:

Animated hero background (particles, matrix effect, or grid)
Sticky navigation with Home dropdown
Hover effects on service cards (glow, lift)
Animated statistics counters
Threat map animation (SVG or Canvas)
Auto-playing testimonial carousel
Smooth scroll animations
Parallax effects on section backgrounds


2. index2.html - Alternative Landing Page (Version 2)
Purpose: Different design approach emphasizing security-first messaging
Sections:

Full-screen hero with split design:

Left (50%): Headline, description, CTA buttons

"Your Shield Against Cyber Threats"
"Comprehensive IT security for modern businesses"


Right (50%): 3D shield illustration or animated security visualization
Background: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920 with gradient overlay


Security assessment tool:

Interactive widget: "How Secure Is Your Business?"
Quick questionnaire (5 questions, radio buttons)
Instant security score result
"Get Full Assessment" CTA


Service showcase with tabs:

Tab navigation: Managed IT, Cybersecurity, Cloud, Compliance, Support
Each tab displays: detailed description, benefits list, typical deliverables, image
Images for each service:

https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800
https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800
https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800




Real-time security stats:

Live counter showing threats blocked today
Systems monitored
Uptime percentage
Animated number increments
Dark card with neon accents


Industries we serve:

Icon cards for 6 industries
Healthcare, Finance, Legal, E-commerce, Manufacturing, Education
Hover reveals industry-specific solutions
Icons with brief descriptions


Our approach/methodology:

4-step process visualization
Assess → Plan → Deploy → Monitor
Connected with animated lines
Each step: icon, title, description
Timeline-style layout


Team expertise:

"Meet Our Security Experts"
Grid of 6-8 team member cards
Photo, name, role, certifications (CISSP, CEH, etc.)
LinkedIn links
Team photos:

https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400
https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400
https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400




Recent security incidents prevented:

Cards showing real scenarios (anonymized)
Threat type, action taken, outcome
"How We Protected Our Clients" heading


Partner & technology ecosystem:

Strategic partners and certified platforms
Logo grid with hover descriptions
Microsoft Gold Partner, AWS Advanced Partner, etc.


Resource center preview:

Whitepapers, security guides, webinars
Download CTAs
Images: https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600


Footer

Differences from index.html:

Different hero layout (split screen vs full-width)
Interactive security assessment widget
Tabbed service display instead of cards
More emphasis on methodology and process
Team-focused presentation
Real-time statistics dashboard feel

Special Note: Both index.html and index2.html must be accessible via the Home dropdown menu in navigation.

3. services.html - Service Offerings
Purpose: Comprehensive breakdown of all IT and cybersecurity services
Sections:

Page hero:

"Our Services" headline
"Complete IT infrastructure and security solutions"
Background: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920 with overlay


Services navigation (sticky sidebar or tabs)
Detailed service sections (8-10 services):
1. Managed IT Services

Comprehensive IT management and support
24/7 monitoring, helpdesk, maintenance
Proactive system updates and patch management
Benefits list with checkmarks
Pricing models (per user, per device, flat rate)
Image: https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000
"Request Quote" button

2. Cybersecurity & Threat Protection

Advanced threat detection and response
Firewall management, intrusion prevention
Security awareness training
Penetration testing and vulnerability assessments
Image: https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000

3. Cloud Services & Migration

Cloud strategy and architecture
AWS, Azure, Google Cloud expertise
Hybrid cloud solutions
Cloud security and compliance
Image: https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000

4. Network Infrastructure

Network design and implementation
SD-WAN solutions
Wireless network deployment
Network security and segmentation
Image: https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1000

5. Data Backup & Disaster Recovery

Automated backup solutions
Business continuity planning
Disaster recovery as a service (DRaaS)
RPO/RTO optimization
Image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000

6. Compliance & Risk Management

Compliance consulting (HIPAA, PCI DSS, GDPR, SOX)
Risk assessments and audits
Policy development
Compliance monitoring and reporting
Image: https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000

7. Email & Endpoint Security

Advanced email filtering and protection
Endpoint detection and response (EDR)
Anti-virus and anti-malware
Mobile device management (MDM)
Image: https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000

8. Security Awareness Training

Employee security training programs
Phishing simulations
Security culture development
Certification tracking
Image: https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000

9. IT Consulting & Strategy

Technology roadmap development
IT infrastructure assessment
Digital transformation consulting
Budget optimization
Image: https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000

10. VoIP & Communication Systems

Unified communications solutions
VoIP phone systems
Video conferencing
Collaboration tools
Image: https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000


Service delivery models:

Comparison table: On-site, Remote, Hybrid
Response times and SLA information


Technology partners:

Certified partners and platforms
Logos with descriptions


Service packages:

Essential, Professional, Enterprise tiers
Feature comparison table
"Contact for Custom Package" option


Industry-specific solutions:

Healthcare IT
Financial services
Legal
Retail
Manufacturing
Each with tailored service bundles


Security audit offering:

Free security assessment CTA
What's included in the audit
Contact form


FAQ accordion:

10-12 common questions
Service-related inquiries


Footer

Features:

Smooth scroll navigation between services
Sticky sidebar navigation (desktop)
Service comparison tool
Pricing calculator (interactive)
Expandable service details
Video placeholders for service demos
Request quote modals for each service


4. about.html - Company Information
Purpose: Build trust through company background, team, and credentials
Sections:

Page hero:

"About Us" headline
"Protecting businesses from cyber threats since 2010"
Background: https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920


Company story:

Timeline of company history
Founded date, key milestones, growth
Office expansions, major client wins
Visual timeline with dates and descriptions


Mission, vision, values:

Three columns with icons
Detailed mission statement
Vision for cybersecurity future
Core values (Integrity, Excellence, Innovation, Security-First)


Leadership team:

Executive profiles with large photos
CEO, CTO, CISO, VP of Operations
Professional bios, certifications, LinkedIn
Images:

CEO: https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500
CTO: https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500
CISO: https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500
VP Ops: https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500




Technical team:

Grid of security engineers and consultants
8-12 team members
Certifications displayed (CISSP, CEH, CCNA, etc.)
Photos: Various from Unsplash (professional headshots)


Certifications & partnerships:

Grid of certification badges
ISO 27001, SOC 2, CISSP, CEH, CompTIA Security+
Partner statuses (Microsoft Gold, AWS Advanced, Cisco Partner)
Logos: https://via.placeholder.com/200x150/1e293b/10b981?text=Certification


Global reach:

Map showing service areas
Office locations with addresses
"Serving clients in 30+ countries"
Map image: https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200 with markers


Our approach to security:

Defense-in-depth methodology
Zero-trust architecture principles
Continuous monitoring philosophy
Diagram or infographic


Company culture:

Photos of team collaboration
Office environment
Team events
Images:

https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800
https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800




By the numbers:

Animated statistics
Team size, years in business, clients protected
Threats blocked, certifications held


Careers section:

"Join Our Team" CTA
Open positions preview
Company benefits
"View Opportunities" button
Background: https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920


Footer

Features:

Interactive timeline
Animated statistics
Expandable team member profiles
Certification verification links (mock)
Video about company culture (placeholder)


5. contact.html - Contact Page
Purpose: Multiple contact methods and inquiry forms
Sections:

Page hero:

"Get In Touch" headline
"Let's discuss your IT security needs"
Background: https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920


Contact methods grid:

24/7 Support Hotline - Phone icon

Emergency: 1-800-SEC-HELP
General: 1-800-IT-SUPPORT


Email Support - Email icon

support@securetech.com
sales@securetech.com


Schedule Consultation - Calendar icon

Book a meeting button


Visit Office - Location icon

Address with map link


Each card: icon, title, details, action button


Main contact form:

Name (First, Last) - required
Company Name - required
Email - required
Phone Number
Company Size (dropdown: 1-50, 51-200, 201-500, 500+)
Industry (dropdown: Healthcare, Finance, Legal, Retail, Manufacturing, Other)
Service Interest (checkboxes):

Managed IT
Cybersecurity
Cloud Services
Compliance
IT Consulting
Other


Current IT Environment (dropdown: No IT support, In-house team, Other MSP, Mixed)
Urgency (dropdown: Immediate, Within 1 month, 1-3 months, Exploring options)
Message (textarea) - required
Preferred Contact Method (radio: Email, Phone, Video Call)
Best time to contact (checkboxes: Morning, Afternoon, Evening)
How did you hear about us? (dropdown)
Submit button


Security assessment request:

Separate form or tab
"Request Free Security Assessment"
Simplified fields
Download security checklist option


Office locations:

Cards for 3-4 offices
City, address, phone, email
Hours of operation
"Get Directions" link
Office images:

HQ: https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600
Regional: https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600




Interactive map:

Shows all office locations
Click markers for details
Map placeholder: https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200


Emergency support section:

"Experiencing a Security Incident?"
Large red button: "Get Emergency Help Now"
24/7 incident response details
Background: Dark red gradient


Response time guarantee:

"We respond within 1 hour"
SLA information
Support tiers


Social media & resources:

Follow us section
LinkedIn, Twitter, YouTube, Facebook
Subscribe to security alerts


FAQ quick links:

5-6 common contact-related questions
Link to full FAQ


Footer

Features:

Multi-step form option (wizard)
Real-time validation
Field dependencies (show/hide fields based on selections)
File upload for detailed inquiries (support tickets)
Success confirmation with ticket number
Calendar integration for meeting scheduling (modal)
Click-to-call buttons on mobile
Copy contact details on click
Form autosave in sessionStorage


6. login.html - Authentication Page
Purpose: Secure portal access for clients and administrators
Sections:

Split screen layout:

Left (40%): Login form
Right (60%): Branded content
Right side image: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200


Login form card:

Company logo at top
"Secure Client Portal" heading
"Access your IT dashboard and support tickets"
Email/Username input with icon
Password input with show/hide toggle and icon
"Remember me" checkbox
"Forgot password?" link (triggers modal)
Login button (primary, full width)
Divider: "Or continue with"
Social login buttons:

Sign in with Microsoft (Azure AD)
Sign in with Google Workspace


"Don't have an account? Request Access" link


Right side content:

Logo at top
Headline: "Secure Access to Your IT Infrastructure"
Bullet points:

24/7 system monitoring
Real-time threat alerts
Instant support tickets
Compliance reporting


Security badges (SSL, encryption icons)
Rotating testimonial or security tip


Forgot password modal:

Email input
"Send Reset Link" button
Security note about link expiration
Success message after submit


Request access modal:

Name, Email, Company
Role (Client Admin, Employee, Contractor)
Company size
Brief message
Submit button


Security notices:

Session timeout information
Multi-factor authentication available
Security best practices link


Footer (minimal):

Privacy Policy, Terms, Security



Features:

Form validation
Password strength indicator
Password visibility toggle (eye icon)
Demo credentials display:

Admin: admin@securetech.com / admin123
Client: client@company.com / client123


Role-based redirect (admin → admin-dashboard, client → user-dashboard)
Animated form transitions
Loading state on login
Error messages for failed login
Remember me (localStorage)
Two-factor authentication code input (mockup)
Social login buttons (non-functional)
Responsive (stacked on mobile)
Animated background particles or grid


7. admin-dashboard.html - Admin Control Panel
Purpose: IT admin dashboard for managing clients, systems, and monitoring
Sections:

Top header bar:

Company logo (left)
Global search bar (search clients, tickets, systems)
Quick actions dropdown (Create Ticket, Add Client, New Alert)
Notification bell with badge count
Messages icon
Admin profile dropdown:

Profile photo: https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100
Name: "John Smith - System Administrator"
View Profile
Settings
Switch to Dark Mode
Logout




Collapsible sidebar navigation:

Dashboard (icon: 📊) - active
Monitoring (icon: 📡)
Clients (icon: 👥)
Support Tickets (icon: 🎫)
Security Alerts (icon: 🚨)
Systems (icon: 💻)
Reports (icon: 📈)
Billing (icon: 💰)
Settings (icon: ⚙️)
Documentation (icon: 📚)
Collapse/expand toggle button


Main dashboard content area:
KPI Cards Row (4 cards):

Active Clients

Number: 247
Trend: +12 this month (green, up arrow)
Icon: users icon


Open Tickets

Number: 43
Trend: -8 from last week (green, down arrow)
Icon: ticket icon


Systems Monitored

Number: 1,834
Trend: +156 (green, up arrow)
Icon: server icon


Threats Blocked Today

Number: 2,547
Trend: Live counter
Icon: shield icon


Each card: gradient background, icon, number, label, trend

System Health Overview:

Grid of status indicators
Network Status: ✅ Healthy (green)
Firewall Status: ✅ Active
Backup Status: ⚠️ 2 Systems Pending (yellow)
Security Updates: ✅ All Current
Cloud Services: ✅ Operational
Email Security: ✅ Protected
Visual gauges or progress circles

Real-Time Monitoring Dashboard:

Live threat map (animated world map with threat indicators)
Use canvas or SVG for animation
Recent threats blocked (scrolling list)
Network traffic graph (line chart)
CPU/Memory usage for critical systems
Use Chart.js for graphs or placeholder images:

https://via.placeholder.com/600x300/1e293b/64ffda?text=Network+Traffic+Graph



Recent Security Alerts Table:

Columns: Severity, Alert Type, Client, Time, Status, Actions
10 rows with data
Severity badges (Critical-red, High-orange, Medium-yellow, Low-blue)
Alert types: Malware detected, Suspicious login, DDoS attempt, etc.
Status: Resolved, In Progress, Investigating
Action buttons: View Details, Resolve, Escalate
Sortable columns
Pagination controls

Open Support Tickets:

Table or card view
Ticket ID, Client, Subject, Priority, Assigned To, Status, Age
Priority badges (Urgent, High, Normal, Low)
Status badges (New, In Progress, Waiting, Resolved)
Click to open ticket detail modal
"View All Tickets" link

Client Activity Feed:

Timeline of recent client actions
"Acme Corp - System backup completed"
"TechStart Inc - New user added"
"Global Finance - Security scan initiated"
Timestamp and client avatar
Scrollable feed

Quick Actions Panel:

Button grid:

Create Support Ticket
Add New Client
Run Security Scan
Generate Report
Schedule Maintenance
Send Alert



Upcoming Maintenance:

Calendar-style list
Scheduled system updates
Client name, system, date/time
Status indicators


Secondary views (accessed via sidebar):
Monitoring View:

Real-time system metrics
CPU, Memory, Disk, Network graphs for each monitored system
Filter by client or system type
Alert thresholds configuration
Live logs streaming

Clients View:

Data table of all clients
Company name, contact, systems count, last activity, status, actions
Search and filter
Add new client button
Click row to view client details (modal or new view)

Support Tickets View:

Kanban board option (New, In Progress, Waiting, Resolved columns)
Table view option
Create new ticket button
Filter by priority, status, assigned tech
Bulk actions (assign, close)

Security Alerts View:

Comprehensive alerts table
Advanced filtering (date range, severity, type, client)
Alert details on click
Bulk resolution option
Export to CSV

Reports View:

Report templates:

Client SLA Report
Security Incidents Report
System Uptime Report
Billing Summary


Date range selector
Generate button
Recent reports list with download links


Footer (minimal): Copyright, version number

Features:

Collapsible sidebar with smooth animation
Responsive tables with horizontal scroll on mobile
Sortable table columns (click headers)
Pagination for large datasets
Real-time data updates (simulated with setInterval)
Search functionality (filter tables)
Chart.js integration for graphs
Modal dialogs for details and actions
Notification toast messages
Drag-and-drop for Kanban board
Export data to CSV (mock download)
Dark mode toggle
Keyboard shortcuts info (modal)


8. user-dashboard.html - Client Portal
Purpose: Client self-service portal for IT support and system monitoring
Sections:

Top header:

Company logo
"Client Portal" title
Search bar (search tickets, documentation)
Notification bell
Client company name display
Profile dropdown:

Photo: https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100
Name and company
Account Settings
Help & Support
Logout



