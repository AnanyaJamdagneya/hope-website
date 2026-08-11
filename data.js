// HOPE website content, real 2026-2027 roster (from the HOPE Design System).
// Descriptions kept verbatim; em dashes replaced with commas per request.
window.HOPE_DATA = {
  // Featured video for the HOPE Auction tab. Drop a file at this path (mp4 plays everywhere).
  auctionVideo: 'assets/video/auction-clip.mp4',

  // Big header image on each event tab (and the home card).
  mainPhoto: {
    auction: 'assets/gallery/auction/auction-00-main.jpg',
    blooddrives: 'assets/gallery/blooddrives/00-main.jpg',
    showcase: 'assets/gallery/showcase/00-main.jpg',
  },
  // How each header image is cropped (CSS object-position) so faces aren't cut off.
  mainFocus: {
    auction: 'center 45%',
    blooddrives: 'center 42%',
    showcase: 'center 82%',
  },

  stats: [
    { value: 18,  suffix: '',  label: 'volunteering committees', color: 'var(--gold)' },
    { value: 4,   suffix: '',  label: 'blood drives every year', color: 'var(--sky)' },
    { value: 45,  prefix: '$', suffix: 'K', label: 'raised at HOPE Auction', color: 'var(--gold)' },
    { value: 11,  suffix: '×', label: 'Best Social Event at TAMS', color: 'var(--sky)' },
  ],

  events: [
    { key: 'auction', title: 'HOPE Auction & Dance', tag: 'Spring', img: 'assets/gallery/auction/auction-01.jpg',
      facts: ['Auction-style charity event', 'Voted Best Social Event at TAMS 11×', '30+ student performances', 'Raised $45,000 for Save the Children'] },
    { key: 'blooddrives', title: 'Blood Drives', tag: '4x a year', img: 'assets/ds/blooddrop-mascot.jpg',
      facts: ['4 every year with Carter BloodCare', 'Hosted in McConnell', '350-450 units of blood donated', 'Free snacks, shirts & more'] },
    { key: 'showcase', title: 'Service Showcase', tag: 'Fall', img: 'assets/ds/committee-group.jpg',
      facts: ['Every committee hosts a booth', 'Held during fall orientation', 'Find the cause that fits you'] },
  ],

  committees: [
    { name: 'Community Impact Through Art', heads: 'Krish Tadigotla, Jenna Li', tag: 'Arts', dot: 'var(--gold)', img: 'assets/ds/library.jpg', fb: 'https://www.facebook.com/share/g/1BQX7f1RSq/' },
    { name: 'Denton Nursing Home', partner: 'HOPE x TMS', heads: 'Pramiti Paraskar, Anirudh Harish', tag: 'Seniors', dot: 'var(--hope-grape)', img: 'assets/ds/nursing.jpg', fb: 'https://www.facebook.com/share/g/16s9stHSh2/' },
    { name: 'Elm Fork', heads: 'Nithyasri Ramesh, Yonas Amare', tag: 'Outdoors', dot: 'var(--hope-melon)', img: 'assets/ds/garden.jpg', fb: 'https://www.facebook.com/share/g/1H5AQGJdBd/' },
    { name: 'English for Everyone', heads: 'Sriprajnav Koduri, Deeksha Sarvi', tag: 'Tutoring', dot: 'var(--sky)', img: 'assets/ds/committee-group.jpg', fb: 'https://www.facebook.com/share/g/1D5aiuL6mW/' },
    { name: 'Finance for All', heads: 'Akshat Gupta, Arjun Mathane', tag: 'Finance', dot: 'var(--hope-melon)', img: 'assets/ds/group-outdoor.jpg', fb: 'https://www.facebook.com/share/g/1DqQvzS8uG/' },
    { name: 'Food for Thought', heads: 'Arjit Srivastava, Mathew Sun', tag: 'Food', dot: 'var(--gold)', img: 'assets/ds/group-outdoor.jpg', fb: 'https://www.facebook.com/share/g/18wHm2LTNB/' },
    { name: 'Game On', partner: 'HOPE x Sports Club', heads: 'Joshua Anojulu, Shrey Gandhi', tag: 'Sports', dot: 'var(--hope-coral)', img: 'assets/ds/group-outdoor.jpg', fb: 'https://www.facebook.com/share/g/18oRwUkzpL/' },
    { name: 'Global Virtual School', heads: 'Claire Hood, Aryan Shah', tag: 'Tutoring', dot: 'var(--sky)', img: 'assets/ds/reading.jpg', fb: 'https://www.facebook.com/share/g/15sRdaJsTs4/' },
    { name: 'High School Tutoring', partner: 'HOPE x TAS', heads: 'Aiden Attarha, Arjun Nukula, Neil Gupta', tag: 'Tutoring', dot: 'var(--sky)', img: 'assets/ds/committee-group.jpg', fb: 'https://www.facebook.com/share/g/1LeFvpS1Fi/' },
    { name: 'Hoofbeats', heads: 'Preston Tran, Rithanya Dhanasekaran', tag: 'Animals', dot: 'var(--hope-melon)', img: 'assets/ds/hoofbeats.jpg', fb: 'https://www.facebook.com/share/g/1DhsxrDs9H/' },
    { name: 'Hospitals for HOPE', heads: 'Phiona Bui, Noor Uppal', tag: 'Health', dot: 'var(--hope-blood)', img: 'assets/ds/nursing.jpg', fb: 'https://www.facebook.com/share/g/1BYpuFHrez/' },
    { name: 'Library Committee', heads: 'Jian Park, Vihaan Palwai', tag: 'Books', dot: 'var(--hope-coral)', img: 'assets/ds/library.jpg', fb: 'https://www.facebook.com/share/g/1Dy6ZUBsQm/' },
    { name: 'Little Leaps', heads: 'Sravya Pilla, Anika Vardharajan', tag: 'STEM', dot: 'var(--sky)', img: 'assets/ds/reading.jpg', fb: 'https://www.facebook.com/share/g/1Cp197KUts/' },
    { name: 'Project Pulmonary', heads: 'Nora Naveen, Anshika Janumapally', tag: 'Health', dot: 'var(--hope-blood)', img: 'assets/ds/nursing.jpg', fb: 'https://www.facebook.com/share/g/1FrysYJDo7/' },
    { name: 'Reading Buddies', heads: 'Anvitha Pasam, Sreeja Metta, Melanie Andrews', tag: 'Kids', dot: 'var(--hope-coral)', img: 'assets/ds/reading.jpg', fb: 'https://www.facebook.com/share/g/1BPAizavAc/' },
    { name: 'REVIVE', heads: 'Nitya Damera, Bella Mueller, Aayush Pal', tag: 'Kids', dot: 'var(--hope-coral)', img: 'assets/ds/committee-group.jpg', fb: 'https://www.facebook.com/share/g/1L88dSzJeL/' },
    { name: 'Shiloh Fields', partner: 'HOPE x Naturally', heads: 'Elizabeth Jiang, Catherine Xu', tag: 'Outdoors', dot: 'var(--hope-melon)', img: 'assets/ds/garden.jpg', fb: 'https://www.facebook.com/share/g/1DdUtqu8Zt/' },
    { name: 'Teen Court', partner: 'HOPE x Ballot', heads: 'Rachel John, Carice Chen', tag: 'Justice', dot: 'var(--hope-grape)', img: 'assets/ds/group-outdoor.jpg', fb: 'https://www.facebook.com/share/g/1C1NH3TQCY/' },
  ],

  // Board carousel photos that need a lower crop so the people show (CSS object-position).
  boardPhotoFocus: {
    'assets/board/anush/01.jpg': 'center 72%',
    'assets/board/anush/03.jpg': 'center 66%',
    'assets/board/ananya/03.jpg': 'center 62%',
    'assets/board/camille/01.jpg': 'center 70%',
    'assets/board/camille/02.jpg': 'center 68%',
    'assets/board/camille/04.jpg': 'center 72%',
    'assets/board/sarah/03.jpg': 'center 60%',
  },

  // Tentative 2026-2027 activity schedule (used for the countdown + timeline).
  schedule: [
    { date: '2026-08-15', label: 'Service Showcase', note: 'During Fall Orientation' },
    { date: '2026-08-20', label: 'Intro GA', note: '9:00 PM in McConnell' },
    { date: '2026-09-10', label: 'Blood Drive #1', note: 'with Carter BloodCare' },
    { date: '2026-09-24', label: 'Blood Drive #2 Info GA', note: 'JCOD announced' },
    { date: '2026-10-23', label: 'Escape Room', note: 'HOPE social event' },
    { date: '2026-11-05', label: 'Blood Drive #2', note: 'with Carter BloodCare' },
    { date: '2026-12-11', label: 'Thank You GA', note: 'End-of-semester celebration' },
    { date: '2027-02-11', label: 'Blood Drive #3', note: 'with Carter BloodCare' },
    { date: '2027-04-02', label: 'HOPE Auction', note: 'our biggest night of the year' },
    { date: '2027-04-08', label: 'Blood Drive #4', note: 'with Carter BloodCare' },
  ],

  board: [
    { role: 'President', name: 'Ananya Jamdagneya', img: 'assets/board/ananya.jpg', ring: 'var(--gold)',
      bio: "Hey y'all! My name is Ananya Jamdagneya, and I'll be your HOPE President this year! I'm from Allen High School and I'm on the General Math and Science Track at TAMS. Outside of HOPE, I'm a basketball captain and committee head for the Historical Awareness Society. In my free time, I love playing spikeball (and all other sports!), eating Torchy's queso, and watching TikTok. As President, I am the liaison between HOPE and external organizations as well as communicating with the TAMS administration. I am also responsible for coordinating events, such as HOPE Auction and all four blood drives! I'm so excited to meet everyone!" },
    { role: 'Vice President', name: 'Anush Bindlish', img: 'assets/board/anush.jpg', ring: 'var(--sky)',
      bio: "Hey hopearoos! My name is Anush Bindlish and I'll be your HOPE Vice President this year! I came from Coppell High School and I'm now on the Gen Sci track here at TAMS. I'll also be your committee head for MHMR Center, Alzheimer's Care, and OPBDF, and your tutor for Pre Cal/Cal 1. In my free time, I love doomscrolling and listening to music. As Vice President, I manage the activities of our volunteering committees, and ensure they stay active so juniors have plenty of opportunities to volunteer for causes they are passionate about. Feel free to reach out with any questions, and I'm excited to meet all of you!" },
    { role: 'Secretary', name: 'Sahana Gaddam', img: 'assets/board/sahana.jpg', ring: 'var(--hope-coral)',
      bio: "Hi fellow HOPE enthusiasts!! I'm Sahana Gaddam and I'll be your HOPE Secretary for this year. Before TAMS, I went to Coppell High School and I am currently on the General Math and Science track. Additionally, I will be your President for STUCO. I LOVE Burger King cookies (pls go try them they r amazing), boba, apples, pigs, and anything outdoors (I am SO good at spike ball). My job consists of working on the logistics for HOPE, and organizing and compiling HOPE's Google Drive + Calendar. Feel free to reach out and I can't wait to meet everyone!!" },
    { role: 'Treasurer', name: 'Gurtaj Boparai', img: 'assets/board/gurtaj.jpg', ring: 'var(--hope-melon)',
      bio: "Hey Hopearoos! My name is Gurtaj Boparai, and I'll be your HOPE Treasurer this year. I'm from Ryan High School in Denton and I'm on the Computer Science track at TAMS. Outside of HOPE, I'll also be your Pickleball Captain, men's mental health committee head, and Pen Pals committee head. In my free time I like watching shows and playing racing games. As Treasurer, I make sure HOPE's money is handled responsibly, such as making budgets for events, coordinating with sponsors, and ensuring everything we do is funded. Feel free to reach out with any questions, I can't wait to meet everyone!" },
    { role: 'Social Coordinator', name: 'Camille Liu', img: 'assets/board/camille.jpg', ring: 'var(--hope-grape)',
      bio: "Hi Hopearoos!! My name is Camille Liu and I'll be your Social Media Coordinator (SOCO) this year! I went to Flower Mound High School and am currently on the Gen Sci track. I'll also be serving as your PenPals Committee Head, Neuroscience Committee head and Precalc/Cal 1 Tutor! Some of my favorite things to do are shopping, getting dutch bros, dancing and hanging out with friends! As the SOCO, I create marketing content such as flyers, Instagram posts, along with merch designs, and deco for HOPE events. I can't wait to meet you guys and it's going to be an amazing year!" },
    { role: 'Creative Director', name: 'Sarah Tang', img: 'assets/board/sarah.jpg', ring: 'var(--sky-deep)',
      bio: "Hey hopearoos! My name is Sarah Tang and I will be your Creative Director this year! I am on the general math and science track and besides from HOPE I am also one of your volleyball captains and Precal/Cal 1 tutors! In my free time I love cafe hopping, trying new restaurants (add me on beli), and whispering to campus squirrels. I'm looking forward to getting to know yall and don't be afraid to reach out! As the creative director, it is my responsibility to lead the visual and creative tasks for HOPE- such as this website, GA (General Assembly) presentations, merch, and deco for events like the blood drives and HOPE Auction. Can't wait to meet y'all!" },
  ],

  // Per-event descriptions (shown on each event tab).
  eventCopy: {
    auction: "The HOPE Auction is our biggest night of the year, a charity gala where students put on act after act and each performance gets auctioned off to the highest bidder. Every single dollar goes straight to that year's partner charity, most recently Save the Children. With 30+ performances, a fully decked-out McConnell, and the whole academy in the crowd, it is no wonder it has been voted Best Social Event at TAMS eleven times. We raised $45,000 for Save the Children.",
    blooddrives: "Four times a year we team up with Carter BloodCare to host blood drives right in McConnell. One donation can save up to three lives, and together we collect 350 to 450 units every year. It is one of the easiest, highest-impact ways to give back, and donors walk away with free snacks, a t-shirt, and serious bragging rights (there is usually a friendly house competition too).",
    showcase: "Every fall, the Service Showcase is where all eighteen committees set up booths so new TAMS students can meet the heads, see what each committee actually does, and sign up on the spot. If you are not sure where to start, this is it: walk the room, ask questions, and find the cause that fits you.",
  },
};
