export interface ProjectItem {
  id: number;
  name: string;
  location: string;
  year: string;
  category: 'Hospitality' | 'Multifamily' | 'Commercial' | 'Institutional' | 'Custom Residential';
  blurb: string;
  images: string[];
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    name: 'Tru by Hilton (5-story hotel)',
    location: 'San Antonio, TX',
    year: '2020',
    category: 'Hospitality',
    blurb:
      'Ground-up, dual-brand prototype built with bearing metal walls & precast plank; landed by DD&B’s San Antonio office.',
    images: ['/images/DD&B Website Pics/Tru Home2 Lackland Combo/EXT_DAY.jpg'],
  },
  {
    id: 2,
    name: 'Downs Park Amphitheater',
    location: 'Anne Arundel Co., MD',
    year: '2020',
    category: 'Institutional',
    blurb:
      'Wet-land site, wood-framed open-air venue — DD&B won low bid for full ground-up build.',
    images: ['/images/DD&B Website Pics/Civic Projects Churches/Downs_Park.jpg'],
  },
  {
    id: 3,
    name: 'Jain Society Temple (phased)',
    location: 'Suburban MD (Metro DC)',
    year: '2020',
    category: 'Institutional',
    blurb:
      'Multi-phase religious facility for Jain Society of Metropolitan Washington; construction began Oct 2020.',
    images: ['/images/DD&B Website Pics/Civic Projects Churches/Jain_Temple.jpg'],
  },
  {
    id: 4,
    name: 'Downtown Austin Urban Homes',
    location: 'Austin, TX',
    year: '2020',
    category: 'Custom Residential',
    blurb:
      'Series of infill residential builds for local developers; start Q4 2020.',
    images: ['/images/DD&B Website Pics/DD&B Development Projects/Austin_Urban_Homes.jpg'],
  },
  {
    id: 5,
    name: 'Homewood Suites by Hilton – Rainey St.',
    location: 'Austin, TX',
    year: '2019',
    category: 'Hospitality',
    blurb:
      'Hilton “Development of the Year”; extended-stay tower in Austin’s Rainey Street district.',
    images: ['/images/DD&B Website Pics/Homewood Suites Austin/EXT_DAY.jpg'],
  },
  {
    id: 6,
    name: 'TownePlace Suites Marriott – Riverwalk',
    location: 'San Antonio, TX',
    year: '2010',
    category: 'Hospitality',
    blurb:
      'Award-winning adaptive-reuse: former department store converted to 117-room extended-stay hotel with added floors, courtyard & pool.',
    images: ['/images/DD&B Website Pics/TownePlace Suites Riverwalk/EXT_DAY.jpg'],
  },
  {
    id: 7,
    name: 'SpringHill Suites Marriott – Potomac Mills',
    location: 'Woodbridge, VA',
    year: 'N/A',
    category: 'Hospitality',
    blurb:
      'Ground-up Marriott suites hotel serving the Potomac Mills retail district.',
    images: ['/images/DD&B Website Pics/SpringHill Suites Potomac/EXT_DAY.jpg'],
  },
  {
    id: 8,
    name: 'Courtyard Marriott – Waldorf',
    location: 'Waldorf, MD',
    year: 'N/A',
    category: 'Hospitality',
    blurb:
      'Select-service hotel featuring Bistro, pool & fire-pit patio along US-301 corridor.',
    images: ['/images/DD&B Website Pics/Courtyard Waldorf/EXT_DAY.jpg'],
  },
  {
    id: 9,
    name: 'SpringHill Suites Marriott – Old Town',
    location: 'Alexandria, VA',
    year: 'N/A',
    category: 'Hospitality',
    blurb:
      'All-suite hotel in historic Old Town; DD&B served as general contractor.',
    images: ['/images/DD&B Website Pics/SpringHill OldTown/EXT_DAY.jpg'],
  },
  {
    id: 10,
    name: 'Holiday Inn Express – Chambersburg',
    location: 'Chambersburg, PA',
    year: 'N/A',
    category: 'Hospitality',
    blurb:
      'IHG select-service hotel off the I-81 corridor.',
    images: ['/images/DD&B Website Pics/Holiday Inn Chambersburg/EXT_DAY.jpg'],
  },
  {
    id: 11,
    name: 'Holiday Inn Express – Old Town',
    location: 'Alexandria, VA',
    year: 'N/A',
    category: 'Hospitality',
    blurb:
      'Renovation / conversion delivering updated guestrooms in a historic setting.',
    images: ['/images/DD&B Website Pics/Holiday Inn OldTown/EXT_DAY.jpg'],
  },
  {
    id: 12,
    name: 'Hilton Garden Inn – West Tech Park',
    location: 'Silver Spring, MD',
    year: 'N/A',
    category: 'Hospitality',
    blurb:
      'Mid-rise business-travel hotel integrated into West Tech office campus.',
    images: ['/images/DD&B Website Pics/HGI WestTech/EXT_DAY.jpg'],
  },
  {
    id: 13,
    name: 'TownePlace Suites Marriott – Lexington Park',
    location: 'Lexington Park, MD',
    year: 'N/A',
    category: 'Hospitality',
    blurb:
      'Extended-stay suites serving the Patuxent River / St. Mary’s aerospace cluster.',
    images: ['/images/DD&B Website Pics/TPS Lexington/EXT_DAY.jpg'],
  },
  {
    id: 14,
    name: 'Home2 Suites – Downtown',
    location: 'San Antonio, TX',
    year: 'N/A',
    category: 'Hospitality',
    blurb:
      'Modern Hilton Home2 property blocks from the Riverwalk; part of DD&B’s downtown hospitality portfolio.',
    images: ['/images/DD&B Website Pics/Home2 Suites Lubbock/EXT_DAY.jpg'],
  },
  {
    id: 15,
    name: 'Expo Plaza Retail Center',
    location: 'Belton, TX',
    year: 'N/A',
    category: 'Commercial',
    blurb:
      'Multi-tenant retail development (shell & core) built by DD&B’s Texas team.',
    images: ['/images/DD&B Website Pics/Expo Plaza/EXT_DAY.jpg'],
  },
]; 