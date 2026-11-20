export type Phase = 'Shared' | 'Phase 1' | 'Phase 2' | 'Phases 2 to 3'
export interface Room { id: string; title: string; dept: string; phase: Phase; img: string; text: string }
const a = (n: string) => `assets/architecture/${n}.jpg`
export const rooms: Room[] = [
 { id:'exterior-dusk', title:'Exterior at Dusk', dept:'Shared facilities', phase:'Shared', img:a('exterior-dusk'), text:'Cream walls, teal bands and rooftop solar, lit from inside. A building that looks cared for, and can work into the evening.' },
 { id:'exterior-night', title:'The Hub at Night', dept:'Shared facilities', phase:'Shared', img:a('exterior-night'), text:'Evening cohorts, events and round the clock operations, with solar and backup power planned to keep everything running.' },
 { id:'aerial-sunset', title:'Aerial View at Sunset', dept:'Shared facilities', phase:'Shared', img:a('aerial-sunset'), text:'The building in its grounds, with parking, planting and the Lagos skyline. Final boundaries are set by the survey.' },
 { id:'lobby', title:'Lobby and Reception', dept:'Shared facilities', phase:'Shared', img:a('lobby'), text:'Where every visitor, trainee and official is received, registered and directed. The first layer of security.' },
 { id:'auditorium', title:'Auditorium', dept:'Shared facilities', phase:'Shared', img:a('auditorium'), text:'Certificate ceremonies, public talks and Government briefings. Hireable for events, which supports Hub revenue.' },
 { id:'programming-lab', title:'Programming Laboratory', dept:'Technology Academy and internship centre', phase:'Phase 1', img:a('programming-lab'), text:'The heart of the Academy. Cohorts learn software, data and cloud skills by building, with placement into jobs and internships.' },
 { id:'software-office', title:'Software Engineering Office', dept:'Software engineering and product offices', phase:'Phase 1', img:a('software-office'), text:'Engineers deliver software for Government and commercial clients, with interns working beside them on live projects.' },
 { id:'war-room', title:'Project Development War Room', dept:'Project development war room', phase:'Phase 1', img:a('war-room'), text:'Plans, progress and risks on one wall, so officials and clients can follow delivery as it happens.' },
 { id:'boardroom', title:'Executive Boardroom', dept:'Management and engineering offices', phase:'Phase 1', img:a('boardroom'), text:'Board seats, audit rights and formal reviews with Government, in a room built for proper oversight.' },
 { id:'ai-centre', title:'AI and Data Science Centre', dept:'AI and data science research centre', phase:'Phase 2', img:a('ai-centre'), text:'Applied AI, analytics and local language AI, giving researchers and students real datasets to work on.' },
 { id:'cyber-bench', title:'Cybersecurity Lab: Training Bench', dept:'Cybersecurity and digital trust lab', phase:'Phase 2', img:a('cyber-bench'), text:'Authorised defensive security training on real network equipment, in a controlled room.' },
 { id:'cyber-ops', title:'Cybersecurity Lab: Operations Floor', dept:'Cybersecurity and digital trust lab', phase:'Phase 2', img:a('cyber-ops'), text:'A watch floor where analysts monitor alerts and practise incident response, under written authorisation.' },
 { id:'startup', title:'Startup Incubation and Coworking', dept:'Startup incubation and coworking', phase:'Phase 2', img:a('startup'), text:'Founders work, meet mentors and investors, and grow locally owned intellectual property. Desks can be leased.' },
 { id:'fintech', title:'Fintech Research Room', dept:'Financial technology and markets research room', phase:'Phase 2', img:a('fintech'), text:'Market data analysis and fintech training. Research and education only. No brokerage, no trading for clients.' },
 { id:'data-centre', title:'Data Centre and Research Lab', dept:'Data centre and network operations', phase:'Phases 2 to 3', img:a('data-centre'), text:'Government data hosted at home, built in modules and scaled to demand. No tier certification is claimed without formal certification.' },
 { id:'noc', title:'Network Operations Centre', dept:'Data centre and network operations', phase:'Phases 2 to 3', img:a('noc'), text:'Engineers watch network health, power and security around the clock, with solar, backup power and dual internet providers.' },
]
export const pillars = [
 { n:'01', t:'Education and talent', d:'Practical training in programming, AI, cybersecurity and cloud, with graduate placement into jobs and internships.' },
 { n:'02', t:'Engineering and product', d:'Teams of engineers assembled to build real software for Government and commercial clients.' },
 { n:'03', t:'Startups and incubation', d:'Founders get technical collaborators, mentors and space to grow locally owned companies.' },
 { n:'04', t:'Research and emerging tech', d:'AI, data science, cybersecurity and fintech research, kept in Lagos.' },
 { n:'05', t:'Government digital transformation', d:'Locally built systems and locally hosted data for public agencies, with less reliance on outside vendors.' },
]
export const phases = [
 { p:'Phase 0', t:'Due diligence', d:'Title search, site survey, structural assessment.', g:'Clear title and a sound structure' },
 { p:'Phase 1', t:'Approvals and structuring', d:'Concept design, business case, funding approval, contract.', g:'Funding approved and contract signed' },
 { p:'Phase 2', t:'Minimum viable launch', d:'Rehabilitate the priority area, power and internet. Open the Academy and engineering offices.', g:'Safe occupancy certificate' },
 { p:'Phase 3', t:'Technology build out', d:'AI lab, cybersecurity lab, incubator, first data centre module.', g:'Demand and revenue targets met' },
 { p:'Phase 4', t:'Expansion', d:'Larger data centre, regional partnerships, further floors if the structure allows.', g:'Performance review' },
]
export const roles = [
 { t:'Tutors and mentors', d:'Apply, get reviewed, then teach and mentor cohorts.' },
 { t:'Interns and students', d:'Apply, follow a learning pathway, work on assigned projects.' },
 { t:'Founders', d:'Join incubation, request collaborators, track progress.' },
 { t:'Engineers', d:'Build a skills profile, join teams, deliver project tasks.' },
 { t:'Administrators', d:'Approve applications, manage programmes, projects and reports.' },
]
