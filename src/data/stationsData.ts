export interface StaffBreakdown {
  title: string;
  count: number;
}

export interface Engineer {
  name: string;
  photo: string;
  bio: string;
  comment: string;
}

export interface SuccessStory {
  title: string;
  image: string;
  story: string;
}

export interface Station {
  name: string;
  image: string;
  region: string;
  address: string;
  phone: string;
  email: string;
  engineer: Engineer;
  staff: {
    total: number;
    breakdown: StaffBreakdown[];
  };
  functions: string[];
  successStories: SuccessStory[];
}

export const defaultStation: Station = {
  name: "ATDC Station",
  image: "https://images.unsplash.com/photo-1506184169200-67f9a6593556?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  region: "Kenya",
  address: "Ministry of Agriculture, Kenya",
  phone: "+254 700 000 000",
  email: "info@atdc.agriculture.go.ke",
  engineer: {
    name: "Station Engineer",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    bio: "The center engineer oversees all technical operations and training programs at this ATDC station.",
    comment: "We are dedicated to serving farmers in this region and promoting sustainable agricultural practices."
  },
  staff: {
    total: 12,
    breakdown: [
      { title: "Agricultural Engineers", count: 2 },
      { title: "Agricultural Extension Officers", count: 4 },
      { title: "Administrative Staff", count: 3 },
      { title: "Support Staff", count: 3 }
    ]
  },
  functions: [
    "Training farmers on modern agricultural techniques",
    "Supporting agricultural mechanization",
    "Promoting sustainable farming practices",
    "Demonstrating appropriate technologies",
    "Conducting research on local farming challenges",
    "Providing extension services to local communities"
  ],
  successStories: [
    {
      title: "Community Transformation Project",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      story: "Through training and support from our ATDC, a local farming community adopted improved agricultural practices that increased their productivity by 35% and significantly improved their livelihoods."
    }
  ]
};

export const stationsData: Record<string, Station> = {
  "mpeketoni": {
    name: "ATDC Mpeketoni",
    image: "/lovable-uploads/ad276c5e-d66b-428d-bc21-c665d0afe25c.png",
    region: "Coast",
    address: "Mpeketoni, Lamu County",
    phone: "+254 712 345 678",
    email: "mpeketoni@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. Omar Hassan",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Hassan is a certified agricultural engineer with over 15 years of experience in coastal farming systems and irrigation technology.",
      comment: "Our center focuses on helping coastal farmers adapt to changing climate conditions while maximizing productivity through sustainable practices."
    },
    staff: {
      total: 15,
      breakdown: [
        { title: "Agricultural Engineers", count: 3 },
        { title: "Agricultural Extension Officers", count: 5 },
        { title: "Administrative Staff", count: 4 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training farmers on coastal agricultural practices",
      "Supporting fisheries and aquaculture development",
      "Demonstrating salt-tolerant crop varieties",
      "Promoting sustainable irrigation systems",
      "Conducting research on coastal farming challenges",
      "Providing extension services to local communities"
    ],
    successStories: [
      {
        title: "Regenerative Coconut Farming Initiative",
        image: "https://images.unsplash.com/photo-1622971446533-9b7e33a663d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "Through training provided by Mombasa ATDC, a cooperative of 50 coconut farmers in Kilifi County adopted regenerative farming practices. They have seen a 30% increase in yield and have developed value-added products that increased their income by 45% within two years."
      },
      {
        title: "Tilapia Farming Transformation",
        image: "https://images.unsplash.com/photo-1594224664126-ae14e49be679?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "A group of youth from Kwale County received training in sustainable tilapia farming. With initial support from Mombasa ATDC, they established a successful aquaculture enterprise that now supplies restaurants across the coast region and provides employment for 15 young people."
      },
      {
        title: "Drought-Resistant Crops Program",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "Working with small-scale farmers in drought-prone areas, we introduced drought-resistant crop varieties that have increased food security for over 200 families even during extended dry periods."
      },
      {
        title: "Women's Agricultural Cooperative",
        image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "Through our training and support programs, a women's agricultural cooperative has grown from 15 to 75 members, creating sustainable livelihoods and improving nutrition in their community."
      },
      {
        title: "Youth in Agriculture Initiative",
        image: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "Our specialized youth program has trained over 100 young people in modern farming techniques, with 60% of graduates now running their own agricultural enterprises."
      },
      {
        title: "Sustainable Irrigation Project",
        image: "https://images.unsplash.com/photo-1591105577035-4c8c55d0f6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "Implementation of water-efficient irrigation systems has helped farmers reduce water usage by 40% while increasing crop yields by 25%, creating a more sustainable approach to farming in water-scarce regions."
      }
    ]
  },
  "mtwapa": {
    name: "ATDC Mtwapa",
    image: "/lovable-uploads/110e6d67-493c-4314-bce6-0d3ad2358ce8.png",
    region: "Coast",
    address: "Mtwapa, Kilifi County",
    phone: "+254 723 456 789",
    email: "mtwapa@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. Lucy Kamau",
      photo: "https://images.unsplash.com/photo-1601841197690-6f0838bdb005?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Kamau specializes in coastal agricultural technologies and has pioneered several innovative farming projects.",
      comment: "At Mtwapa ATDC, we focus on coastal agricultural research and development to enhance food security in the region."
    },
    staff: {
      total: 18,
      breakdown: [
        { title: "Agricultural Engineers", count: 4 },
        { title: "Agricultural Extension Officers", count: 6 },
        { title: "Administrative Staff", count: 5 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training on coastal agricultural techniques",
      "Developing and promoting vertical farming systems",
      "Supporting rooftop garden initiatives",
      "Promoting hydroponics and aquaponics",
      "Conducting research on urban food security",
      "Providing extension services to coastal farmers"
    ],
    successStories: [
      {
        title: "Kibera Vertical Gardens Project",
        image: "https://images.unsplash.com/photo-1524207874394-5ec7c8c8e1a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "Nairobi ATDC helped implement a community vertical garden project in Kibera, Kenya's largest informal settlement. The project has enabled over 200 households to grow their own vegetables, improving nutrition and providing a source of income through selling surplus produce."
      },
      {
        title: "School Farming Program",
        image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "Through a partnership with 15 schools in Nairobi County, the ATDC has established school gardens that serve as learning laboratories for students. These gardens now provide fresh vegetables for school feeding programs and have been integrated into the curriculum."
      }
    ]
  },
  "nakuru": {
    name: "ATDC Nakuru",
    image: "/lovable-uploads/779c56b6-c1af-4e6c-bb82-25559402520c.png",
    region: "Rift Valley",
    address: "Nakuru-Eldoret Highway, Nakuru",
    phone: "+254 734 567 890",
    email: "nakuru@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. David Odhiambo",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Odhiambo is an expert in agricultural innovation and technology transfer with extensive experience in the Rift Valley region.",
      comment: "We are dedicated to introducing innovative agricultural technologies that are suitable for the diverse Rift Valley landscape."
    },
    staff: {
      total: 16,
      breakdown: [
        { title: "Agricultural Engineers", count: 3 },
        { title: "Agricultural Extension Officers", count: 6 },
        { title: "Administrative Staff", count: 4 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training on rice farming techniques",
      "Supporting aquaculture development",
      "Promoting integrated rice-fish farming",
      "Developing solutions for lake basin challenges",
      "Conducting research on water management",
      "Providing extension services to lake region farmers"
    ],
    successStories: [
      {
        title: "Women's Rice Cooperative",
        image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "Kisumu ATDC helped establish a women's rice farming cooperative in Ahero that has grown to 120 members. The cooperative has adopted improved rice varieties and farming techniques, resulting in yield increases of over 40% and the establishment of a rice processing facility."
      },
      {
        title: "Youth Aquaculture Initiative",
        image: "https://images.unsplash.com/photo-1559113202-7e00c8c7e929?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        story: "A group of 30 young entrepreneurs received comprehensive training in cage fish farming on Lake Victoria. With mentorship from Kisumu ATDC, they have established a thriving business that produces over 5 tonnes of fish monthly and has created jobs for 50 people in the community."
      }
    ]
  },
  "bungoma": {
    name: "ATDC Bungoma",
    image: "/lovable-uploads/6e0f94ff-4fa7-4701-bc2d-69b0182f64ba.png",
    region: "Western",
    address: "Bungoma-Malaba Road, Bungoma",
    phone: "+254 745 678 901",
    email: "bungoma@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. Florence Wekesa",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Wekesa has dedicated her career to improving agricultural practices in Western Kenya with a focus on sustainable farming.",
      comment: "Our center works closely with local communities to develop and implement agricultural solutions tailored to Western Kenya's unique needs."
    },
    staff: {
      total: 16,
      breakdown: [
        { title: "Agricultural Engineers", count: 3 },
        { title: "Agricultural Extension Officers", count: 6 },
        { title: "Administrative Staff", count: 4 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training on crop production techniques",
      "Supporting livestock development",
      "Promoting sustainable farming practices",
      "Demonstrating appropriate technologies",
      "Conducting research on local farming challenges",
      "Providing extension services to local farmers"
    ],
    successStories: [
      {
        title: "Community Farming Project",
        image: "https://images.unsplash.com/photo-1506184169200-67f9a6593556?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        story: "Through training and support from our ATDC, a local farming community adopted improved agricultural practices that increased their productivity by 35% and significantly improved their livelihoods."
      }
    ]
  },
  "siakago": {
    name: "ATDC Siakago",
    image: "/lovable-uploads/0dec4fcd-07ca-4057-9198-a6e5b1961d49.png",
    region: "Eastern",
    address: "Embu-Meru Road, Siakago",
    phone: "+254 756 789 012",
    email: "siakago@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. James Mutua",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Mutua is specialized in agricultural training programs and development strategies for Eastern Kenya.",
      comment: "We empower farmers in Eastern Kenya with the knowledge and skills needed to improve productivity and sustainability."
    },
    staff: {
      total: 16,
      breakdown: [
        { title: "Agricultural Engineers", count: 3 },
        { title: "Agricultural Extension Officers", count: 6 },
        { title: "Administrative Staff", count: 4 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training on crop production techniques",
      "Supporting livestock development",
      "Promoting sustainable farming practices",
      "Demonstrating appropriate technologies",
      "Conducting research on local farming challenges",
      "Providing extension services to local farmers"
    ],
    successStories: [
      {
        title: "Community Farming Project",
        image: "https://images.unsplash.com/photo-1506184169200-67f9a6593556?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        story: "Through training and support from our ATDC, a local farming community adopted improved agricultural practices that increased their productivity by 35% and significantly improved their livelihoods."
      }
    ]
  },
  "bukura": {
    name: "ATDC Bukura",
    image: "/lovable-uploads/25322486-92b7-45ea-837c-4360c9f718fc.png",
    region: "Western",
    address: "Kakamega-Kisumu Road, Bukura",
    phone: "+254 767 890 123",
    email: "bukura@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. Patrick Ouma",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Ouma has extensive experience in agricultural mechanization and training farmers on modern farming techniques.",
      comment: "Our center specializes in agricultural mechanization and training to help farmers improve efficiency and productivity."
    },
    staff: {
      total: 16,
      breakdown: [
        { title: "Agricultural Engineers", count: 3 },
        { title: "Agricultural Extension Officers", count: 6 },
        { title: "Administrative Staff", count: 4 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training on crop production techniques",
      "Supporting livestock development",
      "Promoting sustainable farming practices",
      "Demonstrating appropriate technologies",
      "Conducting research on local farming challenges",
      "Providing extension services to local farmers"
    ],
    successStories: [
      {
        title: "Community Farming Project",
        image: "https://images.unsplash.com/photo-1506184169200-67f9a6593556?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        story: "Through training and support from our ATDC, a local farming community adopted improved agricultural practices that increased their productivity by 35% and significantly improved their livelihoods."
      }
    ]
  },
  "ruiru": {
    name: "ATDC Ruiru",
    image: "/lovable-uploads/237d93b7-93f1-44f9-9c4b-94e1268412a8.png",
    region: "Central",
    address: "Thika Road, Ruiru",
    phone: "+254 778 901 234",
    email: "ruiru@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. Catherine Wanjiku",
      photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Wanjiku is an agricultural expert focusing on urban and peri-urban farming techniques in Central Kenya.",
      comment: "We are committed to helping farmers in Central Kenya adapt to modern agricultural practices and technologies."
    },
    staff: {
      total: 16,
      breakdown: [
        { title: "Agricultural Engineers", count: 3 },
        { title: "Agricultural Extension Officers", count: 6 },
        { title: "Administrative Staff", count: 4 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training on crop production techniques",
      "Supporting livestock development",
      "Promoting sustainable farming practices",
      "Demonstrating appropriate technologies",
      "Conducting research on local farming challenges",
      "Providing extension services to local farmers"
    ],
    successStories: [
      {
        title: "Community Farming Project",
        image: "https://images.unsplash.com/photo-1506184169200-67f9a6593556?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        story: "Through training and support from our ATDC, a local farming community adopted improved agricultural practices that increased their productivity by 35% and significantly improved their livelihoods."
      }
    ]
  },
  "homabay": {
    name: "ATDC Homabay",
    image: "/lovable-uploads/2a47bab3-fc95-46fb-a1e8-335b55df074b.png",
    region: "Nyanza",
    address: "Kisumu-Homabay Road, Homabay",
    phone: "+254 789 012 345",
    email: "homabay@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. Michael Otieno",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Otieno specializes in agricultural development and support programs for the Nyanza region.",
      comment: "Our center focuses on developing and implementing agricultural solutions tailored to the unique needs of the Nyanza region."
    },
    staff: {
      total: 16,
      breakdown: [
        { title: "Agricultural Engineers", count: 3 },
        { title: "Agricultural Extension Officers", count: 6 },
        { title: "Administrative Staff", count: 4 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training on crop production techniques",
      "Supporting livestock development",
      "Promoting sustainable farming practices",
      "Demonstrating appropriate technologies",
      "Conducting research on local farming challenges",
      "Providing extension services to local farmers"
    ],
    successStories: [
      {
        title: "Community Farming Project",
        image: "https://images.unsplash.com/photo-1506184169200-67f9a6593556?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        story: "Through training and support from our ATDC, a local farming community adopted improved agricultural practices that increased their productivity by 35% and significantly improved their livelihoods."
      }
    ]
  },
  "siaya": {
    name: "ATDC Siaya",
    image: "/lovable-uploads/d0c15681-662b-4837-a17c-4178efc8f433.png",
    region: "Nyanza",
    address: "Kisumu-Busia Road, Siaya",
    phone: "+254 790 123 456",
    email: "siaya@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. Rose Achieng",
      photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Achieng is passionate about sustainable farming practices and agricultural technologies for Nyanza region.",
      comment: "We focus on promoting sustainable farming practices and introducing new agricultural technologies to farmers in Siaya."
    },
    staff: {
      total: 16,
      breakdown: [
        { title: "Agricultural Engineers", count: 3 },
        { title: "Agricultural Extension Officers", count: 6 },
        { title: "Administrative Staff", count: 4 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training on crop production techniques",
      "Supporting livestock development",
      "Promoting sustainable farming practices",
      "Demonstrating appropriate technologies",
      "Conducting research on local farming challenges",
      "Providing extension services to local farmers"
    ],
    successStories: [
      {
        title: "Community Farming Project",
        image: "https://images.unsplash.com/photo-1506184169200-67f9a6593556?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        story: "Through training and support from our ATDC, a local farming community adopted improved agricultural practices that increased their productivity by 35% and significantly improved their livelihoods."
      }
    ]
  },
  "katumani": {
    name: "ATDC Katumani",
    image: "/lovable-uploads/2a47bab3-fc95-46fb-a1e8-335b55df074b.png",
    region: "Eastern",
    address: "Machakos-Wote Road, Katumani",
    phone: "+254 701 234 567",
    email: "katumani@atdc.agriculture.go.ke",
    engineer: {
      name: "Eng. Samuel Mwangi",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Eng. Mwangi is an expert in arid and semi-arid land agriculture with over 20 years of experience.",
      comment: "Our center specializes in developing agricultural solutions for arid and semi-arid regions to ensure food security."
    },
    staff: {
      total: 16,
      breakdown: [
        { title: "Agricultural Engineers", count: 3 },
        { title: "Agricultural Extension Officers", count: 6 },
        { title: "Administrative Staff", count: 4 },
        { title: "Support Staff", count: 3 }
      ]
    },
    functions: [
      "Training on crop production techniques",
      "Supporting livestock development",
      "Promoting sustainable farming practices",
      "Demonstrating appropriate technologies",
      "Conducting research on local farming challenges",
      "Providing extension services to local farmers"
    ],
    successStories: [
      {
        title: "Community Farming Project",
        image: "https://images.unsplash.com/photo-1506184169200-67f9a6593556?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        story: "Through training and support from our ATDC, a local farming community adopted improved agricultural practices that increased their productivity by 35% and significantly improved their livelihoods."
      }
    ]
  }
};
