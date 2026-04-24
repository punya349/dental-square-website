export interface Service {
  slug: string
  title: string
  shortDescription: string
  image: string
  icon: string
  category: "general" | "cosmetic" | "orthodontics" | "surgical" | "pediatric" | "diagnostic"
  overview: string
  introText?: string
  benefits: string[]
  uses?: string[]
  implantInfo?: {
    title: string
    description: string
  }
  rctInfo?: {
    title: string
    points: string[]
  }
  safetyInfo?: {
    title: string
    description: string
  }
  whyChooseUs?: string[]
  fillingTypes?: {
    name: string
    points: string[]
  }[]
  veneerTypes?: {
    name: string
    points: string[]
  }[]
  crownBridgeTypes?: {
    name: string
    points: string[]
  }[]
  whatAreCrowns?: {
    description: string
    restores: string[]
  }
  whatAreBridges?: {
    description: string
    helps: string[]
  }
  whoNeedsIt?: string[]
  digitalBenefits?: string[]
  durability?: string
  painInfo?: string[]
  whatAreImplants?: {
    description: string
    provides: string[]
  }
  dentureProblems?: string[]
  whatAreFixedImplantTeeth?: {
    description: string
    points: string[]
  }
  whyModernChoice?: string[]
  comparisonFixed?: string[]
  comparisonRemovable?: string[]
  whyFeelsNatural?: string
  implantPainInfo?: string[]
  cbctPlanning?: string[]
  idealCandidate?: string[]
  implantTypes?: string[]
  whatIsRCT?: {
    description: string
    helps: string[]
  }
  whoNeedsRCT?: string[]
  whenIsRCTNecessary?: {
    points: string[]
    warning: string
  }
  painlessRCT?: string[]
  rotaryTechnology?: {
    description: string
    advantages: string[]
  }
  singleSittingRCT?: {
    description: string
    benefits: string[]
  }
  clinicFeatures?: string[]
  rctDuration?: string[]
  afterRCT?: {
    description: string
    points: string[]
  }
  whatIsPediatricDentistry?: {
    description: string
    approach: string
  }
  whyPediatricCareImportant?: string[]
  pediatricServices?: {
    name: string
    points: string[]
  }[]
  whatPediatricCanHelp?: string[]
  whatIsPreventiveDentistry?: {
    description: string
    focus: string
  }
  whyPreventiveCareImportant?: string[]
  preventiveServices?: string[]
  dentalSealants?: string[]
  whatPreventiveHelps?: string[]
  whatAreDentures?: {
    description: string
    helps: string[]
  }
  partialDentures?: {
    description: string
    types: {
      name: string
      description: string
    }[]
  }
  completeDentures?: {
    description: string
    types: string[]
  }
  immediateDentures?: string[]
  whyChooseRemovableDentures?: string[]
  dentureLimitations?: string[]
  dentureCare?: string[]
  whatIsSmileDesigning?: {
    description: string
    helps: string[]
  }
  whoNeedsSmileDesigning?: string[]
  smileDesigningTreatments?: {
    name: string
    points: string[]
  }[]
  whatSmileDesigningCanFix?: {
    issues: string[]
    result: string
  }
  digitalSmilePlanning?: string[]
  isSmileDesigningPainful?: string[]
  whatIsSurgicalExtraction?: {
    description: string
    requiredWhen: string[]
  }
  whenSurgicalExtractionNeeded?: string[]
  surgicalExtractionTypes?: {
    name: string
    points: string[]
  }[]
  cbctRoleInExtraction?: string[]
  isSurgicalExtractionPainful?: string[]
  recoveryAfterExtraction?: string[]
  postExtractionCare?: string[]
  whatAreBraces?: {
    description: string
    helps: string[]
  }
  whyChooseBraces?: string[]
  bracesTypes?: {
    name: string
    points: string[]
  }[]
  whatBracesCanCorrect?: string[]
  invisalignInfo?: {
    description: string
    intro: string
  }
  invisalignBenefits?: string[]
  invisalignProcess?: {
    step: number
    title: string
    description: string
  }[]
  whatInvisalignCanCorrect?: string[]
  whatIsTeethWhitening?: string
  whyProfessionalWhitening?: string[]
  causesOfDiscoloration?: string[]
  howWhiteningWorks?: string
  howLongWhiteningLasts?: {
    duration: string
    dependsOn: string[]
    note: string
  }
  issuesItCanFix?: string[]
  procedureSteps?: {
    title: string
    points: string[]
  }[]
  indirectFillings?: {
    description: string
    recommendedWhen: string[]
    types: string[]
  }
  postCare?: string[]
  procedure: {
    step: number
    title: string
    description: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
}

export const services: Service[] = [
  {
    slug: "fixed-teeth-with-implants",
    title: "Fixed Teeth With Implants",
    shortDescription: "A modern solution for missing teeth that restores your ability to chew, speak, and smile confidently.",
    image: "/images/services/dental-implants.jpg",
    icon: "pin",
    category: "surgical",
    overview: "At Dr Arora's Dental Square, fixed dental implants restore your ability to chew, speak, and smile confidently. These advanced solutions are designed to function like natural teeth and provide long-term stability.",
    introText: "A modern solution for missing teeth.",
    benefits: [
      "Natural look and feel",
      "Strong and stable",
      "Improved chewing ability",
      "Enhanced confidence",
      "Long-lasting results",
      "Prevents bone loss"
    ],
    whatAreImplants: {
      description: "Dental implants are artificial tooth roots placed in the jawbone to support fixed teeth.",
      provides: ["Strong foundation for replacement teeth", "Natural appearance", "Long-term durability"]
    },
    dentureProblems: [
      "Slip or move while eating or speaking",
      "Cause discomfort or sore spots",
      "Reduced chewing efficiency",
      "Can affect speech",
      "May lead to gradual bone loss",
      "Feel bulky or unnatural"
    ],
    whatAreFixedImplantTeeth: {
      description: "Fixed implant-supported teeth are securely anchored into the jawbone using implants.",
      points: ["Look and feel like natural teeth", "Do not move or slip", "Provide strong biting force", "Improve comfort and confidence"]
    },
    whyModernChoice: [
      "No slipping or clicking",
      "Long-lasting and durable",
      "Preserve jawbone and facial structure",
      "Improve chewing efficiency",
      "Restore natural smile"
    ],
    comparisonFixed: [
      "Stable and secure",
      "Natural appearance",
      "Better chewing ability",
      "Long-term solution"
    ],
    comparisonRemovable: [
      "Can move or slip",
      "Less stable",
      "Reduced chewing efficiency",
      "Require frequent adjustments"
    ],
    whyFeelsNatural: "Dental implants replace the root of the tooth, stimulating the jawbone and maintaining facial structure. This makes them feel stable, secure, and natural—unlike removable dentures.",
    implantPainInfo: [
      "Performed under local anesthesia",
      "Minimal discomfort",
      "Quick recovery"
    ],
    cbctPlanning: [
      "Precise implant placement",
      "Better treatment planning",
      "Safer procedures"
    ],
    idealCandidate: [
      "Have missing teeth",
      "Wear loose or uncomfortable dentures",
      "Want a fixed, long-term solution",
      "Desire better chewing ability and comfort"
    ],
    implantTypes: [
      "Single tooth implants",
      "Multiple implants",
      "Full-mouth fixed teeth",
      "Implant-supported dentures"
    ],
    whyChooseUs: [
      "28+ years of clinical excellence",
      "Advanced 3D CBCT technology",
      "Expert implant specialists",
      "Precise treatment planning",
      "Natural-looking results",
      "Comfortable procedures"
    ],
    procedure: [
      { step: 1, title: "3D CBCT Evaluation", description: "Advanced 3D imaging to assess bone density and plan precise implant placement." },
      { step: 2, title: "Implant Placement", description: "Titanium post is surgically placed into the jawbone under local anesthesia." },
      { step: 3, title: "Healing Period", description: "3-6 months for the implant to fuse with the bone (osseointegration)." },
      { step: 4, title: "Abutment Placement", description: "Connector piece is attached to the implant to support the crown." },
      { step: 5, title: "Crown Placement", description: "Custom-made crown is secured to complete your new tooth." }
    ],
    faq: [
      { question: "Am I a candidate for dental implants?", answer: "Most adults with good general health are candidates. We evaluate your bone density and overall health using advanced 3D CBCT imaging." },
      { question: "How long does the implant process take?", answer: "The complete process typically takes 3-6 months, allowing time for proper healing and integration." },
      { question: "Are dental implants painful?", answer: "The procedure is performed under anesthesia, so you will not feel pain. Post-operative discomfort is manageable." },
      { question: "How long do implants last?", answer: "With proper care, dental implants can last a lifetime." }
    ]
  },
  {
    slug: "fixed-prosthesis-crown-bridge",
    title: "Fixed Prosthesis with Crown & Bridge",
    shortDescription: "High-quality dental crowns and bridges that restore both function and aesthetics.",
    image: "/images/services/crown-bridge.jpg",
    icon: "layers",
    category: "general",
    overview: "Damaged, broken, or missing teeth can affect your smile, chewing ability, and confidence. At Dr Arora's Dental Square, we provide high-quality dental crowns and bridges that restore both function and aesthetics using advanced digital dentistry techniques.",
    introText: "Our restorations are carefully designed for comfort, precision, durability, and natural appearance.",
    benefits: [
      "Restore chewing efficiency",
      "Improve speech",
      "Enhance smile aesthetics",
      "Protect weak teeth",
      "Prevent tooth movement",
      "Long-term durability"
    ],
    whatAreCrowns: {
      description: "A dental crown is a protective cap placed over a damaged or weakened tooth. Crowns fully cover the visible part of the tooth, making it strong and functional again.",
      restores: ["Strength", "Shape", "Function", "Appearance"]
    },
    whatAreBridges: {
      description: "A dental bridge is used to replace one or more missing teeth by anchoring artificial teeth to adjacent natural teeth or implants.",
      helps: ["Restore chewing and speech", "Maintain facial structure", "Prevent neighboring teeth from shifting"]
    },
    whoNeedsIt: [
      "A tooth weakened after root canal treatment",
      "Broken or cracked teeth",
      "Large fillings with insufficient tooth structure",
      "Severely worn teeth",
      "Missing teeth"
    ],
    crownBridgeTypes: [
      {
        name: "Porcelain / Ceramic Crowns",
        points: ["Highly aesthetic", "Natural tooth-like appearance", "Ideal for front teeth"]
      },
      {
        name: "Zirconia Crowns",
        points: ["Extremely strong and durable", "Metal-free", "Suitable for back teeth and bridges"]
      },
      {
        name: "Porcelain Fused to Metal (PFM)",
        points: ["Strong metal base with aesthetic porcelain layer", "Commonly used for bridges"]
      },
      {
        name: "Implant-Supported Crowns & Bridges",
        points: ["Fixed replacement for missing teeth", "Do not rely on neighboring teeth", "Long-lasting solution"]
      }
    ],
    digitalBenefits: [
      "Better accuracy and fit",
      "Reduced chairside time",
      "Enhanced patient comfort",
      "Improved durability",
      "Long-lasting results"
    ],
    durability: "With proper care and regular dental check-ups, crowns and bridges can last 10-15 years or longer.",
    painInfo: [
      "No, the procedure is comfortable",
      "Performed under local anesthesia if needed",
      "Well tolerated by patients"
    ],
    whyChooseUs: [
      "28+ years of clinical excellence",
      "Expertise in prosthetic dentistry",
      "Advanced digital technology",
      "High-quality materials",
      "Natural-looking results",
      "Clean and hygienic environment"
    ],
    procedureSteps: [
      {
        title: "Examination & Planning",
        points: ["Clinical evaluation", "Digital X-rays or CBCT (if required)", "Shade and material selection"]
      },
      {
        title: "Tooth Preparation",
        points: ["Minimal reshaping of the tooth", "Preservation of maximum natural structure", "Painless procedure"]
      },
      {
        title: "Digital Impressions",
        points: ["Accurate digital scanning", "No messy impression materials"]
      },
      {
        title: "Fabrication",
        points: ["Designed using CAD-CAM technology", "Crafted for precision and aesthetics"]
      },
      {
        title: "Final Placement",
        points: ["Trial fitting", "Bite and shade check", "Permanent cementation"]
      }
    ],
    procedure: [
      { step: 1, title: "Examination & Planning", description: "Clinical evaluation with digital X-rays and shade selection." },
      { step: 2, title: "Tooth Preparation", description: "Minimal reshaping while preserving maximum natural structure." },
      { step: 3, title: "Digital Impressions", description: "Accurate digital scanning with no messy materials." },
      { step: 4, title: "Fabrication", description: "Designed using CAD-CAM technology for precision." },
      { step: 5, title: "Final Placement", description: "Trial fitting, bite check, and permanent cementation." }
    ],
    faq: [
      { question: "Is a crown necessary after root canal?", answer: "Yes, it protects the tooth and prevents fracture." },
      { question: "Do crowns look natural?", answer: "Yes, they are designed to match your natural teeth." },
      { question: "Can bridges replace multiple missing teeth?", answer: "Yes, depending on support." },
      { question: "How do I care for crowns or bridges?", answer: "Maintain oral hygiene and visit your dentist regularly." },
      { question: "Can crowns or bridges fall out?", answer: "Rarely, but proper care ensures long-lasting results." }
    ]
  },
  {
    slug: "teeth-straightening",
    title: "Teeth Straightening - Braces & Invisalign",
    shortDescription: "Straighten your teeth and transform your smile with braces or clear aligners.",
    image: "/images/services/orthodontics.jpg",
    icon: "grid",
    category: "orthodontics",
    overview: "Orthodontic treatments like braces and clear aligners help correct teeth alignment, improve bite, and enhance overall dental health and aesthetics.",
    introText: "Straighten your teeth and transform your smile.",
    benefits: [
      "Correct teeth alignment",
      "Improve bite and function",
      "Enhance smile aesthetics",
      "Suitable for all age groups",
      "Multiple treatment options"
    ],
    whatAreBraces: {
      description: "Dental braces are orthodontic devices used to correct teeth alignment and jaw positioning.",
      helps: [
        "Gradually move teeth into proper alignment",
        "Improve bite and function",
        "Enhance smile aesthetics"
      ]
    },
    whyChooseBraces: [
      "Suitable for complex corrections",
      "Continuous alignment control",
      "Effective for all age groups",
      "Reliable and precise results"
    ],
    bracesTypes: [
      {
        name: "Metal Braces",
        points: ["Strong and durable", "Cost-effective", "Ideal for complex cases"]
      },
      {
        name: "Ceramic Braces",
        points: ["Tooth-colored brackets", "Less visible than metal braces", "Aesthetic option"]
      },
      {
        name: "Self-Ligating Braces",
        points: ["Faster treatment time", "Less friction", "Fewer adjustments required"]
      },
      {
        name: "Lingual Braces",
        points: ["Placed behind teeth", "Completely hidden", "Ideal for aesthetic concerns"]
      }
    ],
    whatBracesCanCorrect: [
      "Crooked or misaligned teeth",
      "Gaps between teeth",
      "Overbite / underbite",
      "Crossbite",
      "Crowding",
      "Jaw alignment issues"
    ],
    invisalignInfo: {
      description: "Clear aligners are transparent, removable trays designed to gradually straighten teeth without wires or brackets.",
      intro: "A modern, discreet alternative to braces."
    },
    invisalignBenefits: [
      "Nearly invisible",
      "Removable for eating and cleaning",
      "Comfortable and smooth",
      "No dietary restrictions",
      "Fewer clinic visits"
    ],
    invisalignProcess: [
      { step: 1, title: "Digital Smile Assessment", description: "Scan and plan treatment." },
      { step: 2, title: "Customized Aligners", description: "Series of aligners created." },
      { step: 3, title: "Gradual Tooth Movement", description: "Each aligner worn for 1-2 weeks." },
      { step: 4, title: "Final Results & Retainers", description: "Retainers maintain alignment." }
    ],
    whatInvisalignCanCorrect: [
      "Mild to moderate misalignment",
      "Spacing issues",
      "Crowding",
      "Overbite / underbite",
      "Relapse after previous braces"
    ],
    whyChooseUs: [
      "Expert orthodontic care",
      "Advanced digital planning",
      "Multiple treatment options",
      "Personalized treatment approach",
      "High-quality results"
    ],
    procedureSteps: [
      {
        title: "Orthodontic Consultation",
        points: ["Assessment and treatment planning"]
      },
      {
        title: "Braces Placement",
        points: ["Brackets and wires fixed on teeth"]
      },
      {
        title: "Tooth Movement",
        points: ["Gentle pressure moves teeth gradually"]
      },
      {
        title: "Regular Adjustments",
        points: ["Periodic visits for alignment corrections"]
      },
      {
        title: "Retainers",
        points: ["Maintain results after treatment"]
      }
    ],
    procedure: [
      { step: 1, title: "Orthodontic Consultation", description: "Assessment and treatment planning." },
      { step: 2, title: "Braces Placement", description: "Brackets and wires fixed on teeth." },
      { step: 3, title: "Tooth Movement", description: "Gentle pressure moves teeth gradually." },
      { step: 4, title: "Regular Adjustments", description: "Periodic visits for alignment corrections." },
      { step: 5, title: "Retainers", description: "Maintain results after treatment." }
    ],
    faq: [
      { question: "Are braces suitable for all ages?", answer: "Yes, children, teenagers, and adults can benefit." },
      { question: "How long does treatment take?", answer: "Typically 12-24 months depending on case." },
      { question: "Do braces hurt?", answer: "Mild discomfort after adjustments is normal." },
      { question: "Can I eat normally with braces?", answer: "Avoid hard, sticky, and crunchy foods." },
      { question: "Are aligners removable?", answer: "Yes, but should be worn 20-22 hours daily." },
      { question: "Do aligners affect speech?", answer: "Slight change initially, normalizes quickly." }
    ]
  },
  {
    slug: "smile-designing",
    title: "Smile Designing",
    shortDescription: "Advanced cosmetic dental procedure that enhances the overall appearance of your smile.",
    image: "/images/services/smile-designing.jpg",
    icon: "sparkles",
    category: "cosmetic",
    overview: "Smile designing is an advanced cosmetic dental procedure that enhances the overall appearance of your smile. Using digital analysis, facial measurements, and dental evaluation, we create a personalized smile that improves aesthetics, balance, and confidence.",
    introText: "Transform your smile with personalized smile designing at Dr Arora's Dental Square.",
    benefits: [
      "Enhanced facial aesthetics",
      "Improved dental function",
      "Boosted confidence",
      "Natural-looking results",
      "Personalized treatment"
    ],
    whatIsSmileDesigning: {
      description: "Smile designing focuses on improving the look of your teeth, gums, lips, and overall facial harmony.",
      helps: [
        "Enhance facial aesthetics",
        "Improve dental function",
        "Boost confidence"
      ]
    },
    whoNeedsSmileDesigning: [
      "Discolored or stained teeth",
      "Gaps between teeth",
      "Crooked or misaligned teeth",
      "Chipped or broken teeth",
      "Gummy smile",
      "Uneven tooth size or shape",
      "Old or unattractive dental work"
    ],
    smileDesigningTreatments: [
      {
        name: "Orthodontics (Braces / Aligners)",
        points: ["Correct crooked teeth", "Fix spacing issues", "Improve bite alignment"]
      },
      {
        name: "Porcelain Veneers",
        points: ["Correct discoloration", "Close gaps", "Improve shape and alignment", "Provide a natural, aesthetic finish"]
      },
      {
        name: "Enamel Recontouring",
        points: ["Smooth uneven edges", "Improve symmetry", "Enhance smile balance"]
      },
      {
        name: "Gum Contouring",
        points: ["Correct gummy smiles", "Reshape gum line", "Improve tooth proportions"]
      },
      {
        name: "Dental Implants",
        points: ["Replace missing teeth", "Restore function and aesthetics", "Provide long-term stability"]
      }
    ],
    whatSmileDesigningCanFix: {
      issues: [
        "Yellow or stained teeth",
        "Gaps between teeth",
        "Crooked or overlapping teeth",
        "Uneven gum lines",
        "Short, worn, or broken teeth",
        "Missing teeth"
      ],
      result: "A smile that looks natural, youthful, and confident."
    },
    digitalSmilePlanning: [
      "Digital impressions",
      "Smile simulation",
      "Advanced imaging and planning"
    ],
    isSmileDesigningPainful: [
      "Minimally invasive",
      "Comfortable procedures",
      "Performed under local anesthesia if needed"
    ],
    whyChooseUs: [
      "28+ years of clinical excellence",
      "Multi-specialty expertise",
      "Advanced digital dentistry",
      "Personalized smile design",
      "High-quality materials",
      "Natural-looking results",
      "Patient-friendly environment"
    ],
    procedureSteps: [
      {
        title: "Smile Analysis",
        points: ["Comprehensive evaluation of teeth, gums, and facial features"]
      },
      {
        title: "Digital Smile Design",
        points: ["Preview your new smile with digital imaging"]
      },
      {
        title: "Treatment Planning",
        points: ["Customized plan combining appropriate procedures"]
      },
      {
        title: "Treatment Execution",
        points: ["Procedures performed in optimal sequence"]
      },
      {
        title: "Final Reveal",
        points: ["Your transformed smile with aftercare instructions"]
      }
    ],
    procedure: [
      { step: 1, title: "Smile Analysis", description: "Comprehensive evaluation of your teeth, gums, and facial features." },
      { step: 2, title: "Digital Smile Design", description: "Preview your new smile with digital imaging before treatment begins." },
      { step: 3, title: "Treatment Planning", description: "Customized plan combining appropriate procedures for your goals." },
      { step: 4, title: "Treatment Execution", description: "Procedures are performed in optimal sequence for best results." },
      { step: 5, title: "Final Reveal", description: "Your transformed smile is revealed with aftercare instructions." }
    ],
    faq: [
      { question: "What treatments are included in smile designing?", answer: "It may include veneers, whitening, bonding, contouring, gum reshaping, and orthodontics depending on your needs." },
      { question: "How long does the process take?", answer: "Depending on the treatments involved, it can take from a few weeks to several months." },
      { question: "Is smile designing permanent?", answer: "Many components are long-lasting, with some treatments like veneers lasting 10-15 years with proper care." },
      { question: "Is smile designing painful?", answer: "Most procedures are minimally invasive and performed under local anesthesia if needed." },
      { question: "Can I preview my new smile?", answer: "Yes, we use digital smile simulation to show you your new smile before treatment begins." }
    ]
  },
  {
    slug: "dental-veneers",
    title: "Dental Veneers",
    shortDescription: "Custom-made thin shells to improve the color, shape, size, and alignment of teeth.",
    image: "/images/services/dental-veneers.jpg",
    icon: "layers",
    category: "cosmetic",
    overview: "Dental veneers are thin, custom-made shells designed to cover the front surface of teeth. They are bonded permanently to improve the color, shape, size, and alignment of teeth—giving you a natural, confident smile.",
    introText: "Veneers are an excellent option for patients looking for a smile makeover without extensive orthodontic treatment.",
    benefits: [
      "Instant smile improvement",
      "Natural look",
      "Durable",
      "Minimally invasive",
      "Boosts confidence"
    ],
    issuesItCanFix: [
      "Gaps between teeth",
      "Chipped teeth",
      "Stained or discolored teeth",
      "Uneven teeth",
      "Mild misalignment"
    ],
    veneerTypes: [
      {
        name: "Porcelain Veneers",
        points: ["Highly aesthetic", "Long-lasting", "Stain-resistant"]
      },
      {
        name: "Composite Veneers",
        points: ["Economical", "Faster treatment", "Easy repair"]
      },
      {
        name: "Lumineers",
        points: ["Ultra-thin", "Minimal preparation", "Conservative option"]
      }
    ],
    procedureSteps: [
      {
        title: "Consultation & Smile Analysis",
        points: ["Examination of teeth and gums", "Smile planning", "Shade and shape selection"]
      },
      {
        title: "Tooth Preparation",
        points: ["Minimal enamel reshaping", "Preserves tooth structure", "Painless"]
      },
      {
        title: "Digital Impressions",
        points: ["Accurate digital scans", "No messy impressions"]
      },
      {
        title: "Fabrication & Placement",
        points: ["Precision-crafted veneers", "Trial fitting", "Final bonding"]
      }
    ],
    whyChooseUs: [
      "Advanced smile designing",
      "Experienced dentists",
      "High precision",
      "Premium materials",
      "Personalized care"
    ],
    procedure: [
      { step: 1, title: "Consultation", description: "Examination of teeth and gums with smile planning." },
      { step: 2, title: "Preparation", description: "Minimal enamel reshaping while preserving tooth structure." },
      { step: 3, title: "Impressions", description: "Accurate digital scans with no messy impressions." },
      { step: 4, title: "Placement", description: "Precision-crafted veneers are trial fitted and bonded." }
    ],
    faq: [
      { question: "How long do veneers last?", answer: "10-15 years or more with proper care." },
      { question: "Are they painful?", answer: "No, the procedure is comfortable and minimally invasive." },
      { question: "Do they look natural?", answer: "Yes, veneers are custom-made to match your natural teeth." },
      { question: "Can they replace braces?", answer: "For mild alignment cases only. Severe misalignment requires orthodontic treatment." }
    ]
  },
{
    slug: "painless-root-canal",
    title: "Painless Root Canal Treatment",
    shortDescription: "Modern, painless root canal treatment that saves your natural tooth while eliminating pain and infection.",
    image: "/images/services/root-canal-treatment.jpg",
    icon: "heart",
    category: "general",
    overview: "Tooth pain does not have to mean tooth loss. At Dr Arora's Dental Square, we provide modern, painless root canal treatment (RCT) that saves your natural tooth while eliminating pain and infection.",
    introText: "With advanced rotary instruments, digital diagnostics, and single-sitting techniques, root canal treatment is now comfortable, efficient, and highly successful.",
    benefits: [
      "Saves your natural tooth",
      "Eliminates pain and infection",
      "Prevents tooth extraction",
      "Maintains natural smile aesthetics",
      "Restores chewing efficiency"
    ],
    whatIsRCT: {
      description: "Root canal treatment is a procedure used to remove infected or inflamed pulp from inside the tooth. After cleaning and disinfecting the canals, the tooth is sealed to prevent reinfection.",
      helps: [
        "Relieve tooth pain",
        "Eliminate infection",
        "Save the natural tooth",
        "Restore normal chewing function"
      ]
    },
    whoNeedsRCT: [
      "Persistent or severe tooth pain",
      "Sensitivity to hot or cold",
      "Pain while biting or chewing",
      "Swelling in gums near the tooth",
      "Darkening or discoloration of a tooth",
      "Deep cavities or cracked teeth"
    ],
    whenIsRCTNecessary: {
      points: [
        "Tooth decay reaches the nerve",
        "Trauma damages the tooth pulp",
        "Repeated dental procedures irritate the nerve",
        "Infection spreads within the tooth"
      ],
      warning: "Delaying treatment can lead to abscess formation and tooth loss."
    },
    painlessRCT: [
      "Performed under effective local anesthesia",
      "Comparable to a routine filling",
      "Gentle techniques ensure minimal discomfort"
    ],
    rotaryTechnology: {
      description: "At Dr Arora's Dental Square, RCT is performed using advanced rotary endodontic systems.",
      advantages: [
        "Faster treatment",
        "More precise cleaning",
        "Better shaping of canals",
        "Reduced post-operative pain",
        "Higher success rate"
      ]
    },
    singleSittingRCT: {
      description: "Most root canal treatments are completed in a single visit.",
      benefits: [
        "Immediate pain relief",
        "Fewer dental visits",
        "Reduced risk of reinfection",
        "Time-saving and convenient"
      ]
    },
    clinicFeatures: [
      "Rotary endodontic systems",
      "Digital X-rays",
      "Apex locators",
      "Strict sterilization protocols",
      "Comfortable treatment rooms"
    ],
    rctDuration: [
      "Most cases: 45-60 minutes (single sitting)",
      "Complex cases may require multiple visits"
    ],
    afterRCT: {
      description: "After root canal treatment, a dental crown is usually recommended to:",
      points: [
        "Protect the treated tooth",
        "Restore strength",
        "Prevent fractures"
      ]
    },
    whyChooseUs: [
      "28+ years of clinical excellence",
      "Advanced rotary technology",
      "Single-sitting treatments",
      "Painless procedures",
      "High success rate",
      "Strict sterilization protocols"
    ],
    procedureSteps: [
      {
        title: "Diagnosis & Digital Imaging",
        points: ["Accurate diagnosis using X-rays or CBCT"]
      },
      {
        title: "Local Anesthesia",
        points: ["Ensures complete comfort during the procedure"]
      },
      {
        title: "Removal of Infected Pulp",
        points: ["Infected tissue is carefully removed"]
      },
      {
        title: "Cleaning & Shaping",
        points: ["Canals are cleaned using rotary instruments"]
      },
      {
        title: "Disinfection & Sealing",
        points: ["Canals are disinfected and sealed"]
      },
      {
        title: "Restoration",
        points: ["Tooth is restored with filling or crown"]
      }
    ],
    procedure: [
      { step: 1, title: "Diagnosis & Digital Imaging", description: "Accurate diagnosis using X-rays or CBCT." },
      { step: 2, title: "Local Anesthesia", description: "Ensures complete comfort during the procedure." },
      { step: 3, title: "Removal of Infected Pulp", description: "Infected tissue is carefully removed." },
      { step: 4, title: "Cleaning & Shaping", description: "Canals are cleaned using rotary instruments." },
      { step: 5, title: "Disinfection & Sealing", description: "Canals are disinfected and sealed." },
      { step: 6, title: "Restoration", description: "Tooth is restored with filling or crown." }
    ],
    faq: [
      { question: "Is root canal treatment painful?", answer: "No, modern RCT is virtually painless." },
      { question: "Can RCT be done in one visit?", answer: "Yes, most cases are completed in a single sitting." },
      { question: "How long does a treated tooth last?", answer: "With proper care and crown placement, it can last a lifetime." },
      { question: "What is the success rate?", answer: "RCT has a success rate of 90-95%." },
      { question: "Is a crown necessary after RCT?", answer: "Yes, it strengthens and protects the tooth." }
    ]
  },
  {
    slug: "braces-children-teens",
    title: "Braces for Children & Teens",
    shortDescription: "Orthodontic braces for children and teenagers to improve smile alignment.",
    image: "/images/services/braces-children.jpg",
    icon: "smile",
    category: "orthodontics",
    overview: "Early orthodontic intervention can guide jaw growth and correct alignment issues while your child is still developing. Dr. Rachna Arora, our specialist orthodontist, provides comprehensive braces treatment for children and teenagers in a friendly, comfortable environment, setting them up for a lifetime of healthy, beautiful smiles.",
    benefits: [
      "Guides proper jaw development",
      "Corrects bite issues early",
      "Prevents more complex treatment later",
      "Child-friendly, comfortable experience",
      "Expert orthodontist with 28+ years experience",
      "Various options including colored bands"
    ],
    procedure: [
      { step: 1, title: "Initial Assessment", description: "Complete evaluation of your child's teeth, bite, and jaw development." },
      { step: 2, title: "Treatment Planning", description: "Customized plan based on your child's specific needs and age." },
      { step: 3, title: "Braces Fitting", description: "Braces are carefully fitted with your child's comfort in mind." },
      { step: 4, title: "Regular Check-ups", description: "Periodic visits for adjustments and progress monitoring." },
      { step: 5, title: "Retention", description: "Retainers ensure the beautiful results are maintained." }
    ],
    faq: [
      { question: "What is the best age for braces?", answer: "While it varies, most children benefit from an evaluation around age 7, with treatment often starting between 9-14 years." },
      { question: "How long will my child need braces?", answer: "Treatment typically takes 18-36 months depending on the complexity of the case." },
      { question: "Can my child play sports with braces?", answer: "Yes, with a protective mouthguard, your child can continue their activities safely." }
    ]
  },
  {
    slug: "cosmetic-restorative-dentistry",
    title: "Cosmetic & Restorative Dentistry",
    shortDescription: "Advanced tooth-coloured fillings that restore strength while maintaining natural appearance.",
    image: "/images/services/cosmetic-restorative.jpg",
    icon: "layers",
    category: "cosmetic",
    overview: "Dental cavities and minor tooth damage no longer require dark metallic fillings. At Dr Arora's Dental Square, we use advanced tooth-coloured composite fillings that restore the strength of your teeth while maintaining their natural appearance.",
    introText: "Our fillings are designed to blend seamlessly with your natural teeth — so your smile looks healthy, clean, and confident.",
    benefits: [
      "Natural tooth-like appearance",
      "Strong bonding",
      "Mercury-free",
      "Minimal tooth cutting",
      "Long-lasting",
      "Suitable for all teeth"
    ],
    fillingTypes: [
      {
        name: "Composite Resin Fillings",
        points: ["Match natural tooth colour", "Strong and durable", "Bond directly to the tooth", "Most commonly used today"]
      },
      {
        name: "Glass Ionomer Cement Fillings",
        points: ["Release fluoride", "Suitable for children", "Used for root surfaces"]
      },
      {
        name: "Silver Amalgam Fillings",
        points: ["Strong but unaesthetic", "Metallic appearance", "Less used now"]
      },
      {
        name: "Ceramic Fillings",
        points: ["Highly aesthetic", "Strong and durable", "Used for indirect restorations"]
      }
    ],
    indirectFillings: {
      description: "Indirect fillings are fabricated outside the mouth and then bonded to the tooth.",
      recommendedWhen: ["Tooth damage is extensive", "More durability is needed"],
      types: ["Inlays", "Onlays", "Ceramic restorations"]
    },
    postCare: [
      "Avoid chewing until numbness wears off",
      "Avoid hard/sticky foods for 24 hours",
      "Maintain oral hygiene",
      "Regular checkups"
    ],
    whyChooseUs: [
      "Advanced materials",
      "Precision techniques",
      "Painless procedures",
      "Hygienic environment",
      "Long-lasting results"
    ],
    procedure: [
      { step: 1, title: "Remove Decay", description: "Damaged or decayed tooth structure is carefully removed." },
      { step: 2, title: "Clean Cavity", description: "The cavity is thoroughly cleaned and prepared." },
      { step: 3, title: "Match Shade", description: "We select the perfect shade to match your natural teeth." },
      { step: 4, title: "Place Composite", description: "Composite material is placed in layers for strength." },
      { step: 5, title: "Cure with Light", description: "Special light hardens each layer of the filling." },
      { step: 6, title: "Shape & Polish", description: "The filling is shaped and polished for a natural finish." }
    ],
    faq: [
      { question: "Are composite fillings strong?", answer: "Yes, suitable for most chewing forces." },
      { question: "How long do they last?", answer: "7-10 years or longer with proper care." },
      { question: "Is the procedure painful?", answer: "No, done under anesthesia if needed." },
      { question: "Can silver fillings be replaced?", answer: "Yes, we can replace old silver amalgam fillings with tooth-coloured composites." },
      { question: "Will it be visible?", answer: "No, matches natural teeth seamlessly." },
      { question: "Can children get fillings?", answer: "Yes, we offer child-friendly filling options." }
    ]
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription: "A brighter smile that leaves a lasting impression.",
    image: "/images/services/teeth-whitening.jpg",
    icon: "sun",
    category: "cosmetic",
    overview: "At Dr Arora's Dental Square, we offer professional teeth whitening treatments that safely remove stains and restore the natural brightness of your teeth—often in a single visit. Our procedures are dentist-supervised, enamel-safe, and designed for visible, long-lasting results.",
    introText: "A brighter smile that leaves a lasting impression.",
    benefits: [
      "Faster than home remedies",
      "More predictable results",
      "Safe for teeth and gums",
      "Long-lasting brightness"
    ],
    whatIsTeethWhitening: "Teeth whitening is a cosmetic dental procedure that lightens the natural color of teeth by removing stains and discoloration caused by lifestyle habits, aging, or medications.",
    whyProfessionalWhitening: [
      "Faster than home remedies",
      "More predictable results",
      "Safe for teeth and gums",
      "Long-lasting brightness"
    ],
    causesOfDiscoloration: [
      "Tea, coffee, red wine, and colored beverages",
      "Smoking and tobacco use",
      "Poor oral hygiene",
      "Age-related enamel thinning",
      "Certain medications",
      "Fluorosis or developmental defects"
    ],
    howWhiteningWorks: "Whitening gel releases oxygen molecules that penetrate enamel and break down stains without damaging the tooth structure when performed professionally.",
    howLongWhiteningLasts: {
      duration: "6-18 months",
      dependsOn: [
        "Diet and beverage habits",
        "Smoking",
        "Oral hygiene",
        "Regular dental cleanings"
      ],
      note: "Touch-up sessions may be recommended."
    },
    whyChooseUs: [
      "Dentist-supervised whitening systems",
      "Safe, enamel-friendly techniques",
      "Immediate visible results",
      "Hygienic and comfortable environment",
      "Personalized after-care guidance"
    ],
    procedureSteps: [
      {
        title: "Dental Examination",
        points: ["Check teeth and gums before treatment"]
      },
      {
        title: "Teeth Cleaning (if required)",
        points: ["Remove plaque and surface stains"]
      },
      {
        title: "Shade Selection",
        points: ["Record current tooth shade"]
      },
      {
        title: "Gum Protection",
        points: ["Protective barrier applied to gums"]
      },
      {
        title: "Whitening Gel Application",
        points: ["Professional whitening gel applied"]
      },
      {
        title: "Light Activation",
        points: ["Activated using advanced whitening light"]
      },
      {
        title: "Final Evaluation",
        points: ["Teeth rinsed and results assessed"]
      }
    ],
    procedure: [
      { step: 1, title: "Dental Examination", description: "Check teeth and gums before treatment." },
      { step: 2, title: "Teeth Cleaning", description: "Remove plaque and surface stains if required." },
      { step: 3, title: "Shade Selection", description: "Record current tooth shade." },
      { step: 4, title: "Gum Protection", description: "Protective barrier applied to gums." },
      { step: 5, title: "Whitening Gel Application", description: "Professional whitening gel applied." },
      { step: 6, title: "Light Activation", description: "Activated using advanced whitening light." },
      { step: 7, title: "Final Evaluation", description: "Teeth rinsed and results assessed. Procedure time: 30-60 minutes." }
    ],
    faq: [
      { question: "Is teeth whitening safe?", answer: "Yes, when performed under dental supervision." },
      { question: "Does whitening cause sensitivity?", answer: "Mild temporary sensitivity may occur and usually resolves within 24-48 hours." },
      { question: "How many shades whiter will my teeth become?", answer: "Typically 2-6 shades depending on initial color." },
      { question: "Does whitening work on crowns or fillings?", answer: "No, it works only on natural teeth." },
      { question: "Who should avoid whitening?", answer: "Pregnant women or patients with untreated cavities or severe sensitivity should consult first." },
      { question: "Can I eat after whitening?", answer: "Avoid colored foods and drinks for at least 24 hours." },
      { question: "Are home whitening products effective?", answer: "They provide limited results; professional whitening is faster and more effective." },
      { question: "How often can I whiten my teeth?", answer: "Usually once a year or as recommended." }
    ]
  },
  {
    slug: "preventive-dentistry",
    title: "Preventive Dentistry",
    shortDescription: "Protecting your smile before problems begin.",
    image: "/images/services/teeth-cleaning.jpg",
    icon: "shield",
    category: "general",
    overview: "Preventive dentistry focuses on maintaining oral health and preventing dental issues before they start. Regular check-ups, professional cleanings, and early detection help keep your teeth and gums healthy for life.",
    introText: "Prevention is always easier, safer, and more comfortable than treatment.",
    benefits: [
      "Detects problems early when treatment is simple",
      "Maintains healthy teeth and gums",
      "Prevents tooth decay and gum disease",
      "Reduces the need for complex dental procedures",
      "Saves time, discomfort, and long-term costs"
    ],
    whatIsPreventiveDentistry: {
      description: "Preventive dentistry includes all measures taken to avoid dental problems such as cavities, gum disease, and enamel wear.",
      focus: "It focuses on early detection, regular care, and maintaining long-term oral health."
    },
    whyPreventiveCareImportant: [
      "Detects problems early when treatment is simple",
      "Maintains healthy teeth and gums",
      "Prevents tooth decay and gum disease",
      "Reduces the need for complex dental procedures",
      "Saves time, discomfort, and long-term costs"
    ],
    preventiveServices: [
      "Routine dental check-ups",
      "Comprehensive oral examinations",
      "Early detection of cavities and gum disease",
      "Professional teeth cleaning",
      "Polishing to remove plaque and tartar",
      "Fluoride treatments",
      "Sealants for cavity protection",
      "Gum care and hygiene treatments",
      "Oral hygiene guidance",
      "Suitable for both children and adults"
    ],
    dentalSealants: [
      "Protective coating on chewing surfaces",
      "Prevents decay in molars",
      "Especially helpful for children and teenagers",
      "Quick and painless procedure"
    ],
    whatPreventiveHelps: [
      "Prevention of cavities",
      "Early detection of gum disease",
      "Control of plaque and tartar buildup",
      "Maintenance of oral hygiene",
      "Early diagnosis of oral health issues",
      "Protection of enamel",
      "Long-term dental wellness"
    ],
    whyChooseUs: [
      "Focus on prevention and early care",
      "Advanced diagnostic tools",
      "Gentle and patient-friendly approach",
      "Personalized treatment plans",
      "Long-term oral health focus"
    ],
    procedureSteps: [
      {
        title: "Oral Examination",
        points: ["Teeth, gums, and oral tissues are examined"]
      },
      {
        title: "Professional Cleaning",
        points: ["Plaque and tartar are removed"]
      },
      {
        title: "Preventive Treatments",
        points: ["Fluoride or sealants applied if needed"]
      },
      {
        title: "Personalized Advice",
        points: ["Guidance on brushing, flossing, and diet"]
      },
      {
        title: "Regular Follow-Ups",
        points: ["Ensures long-term oral health"]
      }
    ],
    procedure: [
      { step: 1, title: "Oral Examination", description: "Teeth, gums, and oral tissues are examined." },
      { step: 2, title: "Professional Cleaning", description: "Plaque and tartar are removed." },
      { step: 3, title: "Preventive Treatments", description: "Fluoride or sealants applied if needed." },
      { step: 4, title: "Personalized Advice", description: "Guidance on brushing, flossing, and diet." },
      { step: 5, title: "Regular Follow-Ups", description: "Ensures long-term oral health." }
    ],
    faq: [
      { question: "How often should I visit the dentist?", answer: "Every 6 months or as recommended." },
      { question: "Is professional cleaning painful?", answer: "No, it is generally comfortable." },
      { question: "Can preventive care stop cavities completely?", answer: "It significantly reduces risk when combined with good home care." },
      { question: "Are fluoride treatments safe?", answer: "Yes, they strengthen enamel and prevent decay." },
      { question: "Is preventive care necessary if I have no pain?", answer: "Yes, many dental issues develop without symptoms." }
    ]
  },
  {
    slug: "complete-partial-dentures",
    title: "Removable Partial & Complete Dentures",
    shortDescription: "Custom-made removable dentures to restore function, comfort, and confidence.",
    image: "/images/services/removable-dentures.jpg",
    icon: "grid",
    category: "general",
    overview: "Removable dentures are prosthetic teeth designed to replace missing teeth and restore function, comfort, and confidence. They are custom-made, easy to use, and can be removed by the patient—making them a practical and affordable solution for tooth replacement.",
    introText: "Our dentures are crafted for comfort, natural appearance, and reliable function.",
    benefits: [
      "Restore smile and confidence",
      "Improve speech",
      "Improve chewing ability",
      "Support facial structure",
      "Affordable tooth replacement option"
    ],
    whatAreDentures: {
      description: "Dentures are removable appliances that replace missing teeth and surrounding tissues.",
      helps: [
        "Restore chewing ability",
        "Improve speech",
        "Enhance facial appearance",
        "Support overall oral health"
      ]
    },
    partialDentures: {
      description: "Used when some natural teeth remain. They fill gaps and prevent shifting of teeth, helping maintain proper bite and alignment.",
      types: [
        { name: "Flexible Partial Dentures", description: "Comfortable and aesthetic" },
        { name: "Cast Metal Partial Dentures", description: "Strong and durable" },
        { name: "Acrylic Partial Dentures", description: "Cost-effective" }
      ]
    },
    completeDentures: {
      description: "Used when all teeth are missing. They restore the full arch (upper or lower).",
      types: [
        "Conventional complete dentures",
        "Immediate dentures",
        "Implant-supported overdentures"
      ]
    },
    immediateDentures: [
      "Placed immediately after tooth removal",
      "No waiting period without teeth",
      "Help maintain appearance and function"
    ],
    whyChooseRemovableDentures: [
      "Non-surgical solution",
      "Cost-effective",
      "Easy to clean and maintain",
      "Custom-made for comfort and fit"
    ],
    dentureLimitations: [
      "May require adjustment over time",
      "Slight movement during eating or speaking",
      "Needs regular cleaning and maintenance"
    ],
    dentureCare: [
      "Clean dentures daily",
      "Remove and rinse after meals",
      "Soak dentures overnight",
      "Maintain oral hygiene",
      "Visit dentist regularly for adjustments"
    ],
    whyChooseUs: [
      "28+ years of clinical excellence",
      "Custom-fitted dentures",
      "Natural-looking results",
      "Comfortable and reliable",
      "Affordable options"
    ],
    procedureSteps: [
      {
        title: "Consultation & Assessment",
        points: ["Oral health evaluation", "Discussion of denture options"]
      },
      {
        title: "Impressions & Measurements",
        points: ["Precise impressions taken", "Bite registration"]
      },
      {
        title: "Try-In Appointment",
        points: ["Trial dentures tested for fit", "Appearance and comfort check"]
      },
      {
        title: "Final Fitting",
        points: ["Completed dentures fitted", "Adjustments made"]
      },
      {
        title: "Follow-Up Care",
        points: ["Regular check-ups", "Adjustments as needed"]
      }
    ],
    procedure: [
      { step: 1, title: "Consultation & Assessment", description: "Oral health evaluation and discussion of denture options." },
      { step: 2, title: "Impressions & Measurements", description: "Precise impressions and bite registration taken." },
      { step: 3, title: "Try-In Appointment", description: "Trial dentures tested for fit, appearance, and comfort." },
      { step: 4, title: "Final Fitting", description: "Completed dentures fitted and adjusted." },
      { step: 5, title: "Follow-Up Care", description: "Regular check-ups and adjustments as needed." }
    ],
    faq: [
      { question: "Are dentures comfortable?", answer: "Yes, they are designed for comfort, though slight adjustment time is normal." },
      { question: "How long do dentures last?", answer: "Typically 5-7 years with proper care." },
      { question: "Can I eat normally with dentures?", answer: "Yes, start with soft foods and gradually return to normal diet." },
      { question: "Do dentures look natural?", answer: "Yes, they are custom-made to match your face and smile." },
      { question: "Should I remove dentures at night?", answer: "Yes, to allow gums to rest and maintain hygiene." }
    ]
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription: "Gentle and specialized dental care for children.",
    image: "/images/services/pediatric-dentistry.jpg",
    icon: "smile",
    category: "pediatric",
    overview: "Pediatric dentistry focuses on the oral health of infants, children, and adolescents, ensuring a comfortable and positive dental experience.",
    introText: "Our goal is to build healthy dental habits early, prevent dental problems, and help children grow up with confident, healthy smiles.",
    benefits: [
      "Prevents cavities and dental problems early",
      "Encourages good oral hygiene habits",
      "Helps correct habits like thumb sucking",
      "Promotes proper growth of teeth",
      "Reduces dental anxiety in children"
    ],
    whatIsPediatricDentistry: {
      description: "Pediatric dentistry provides child-friendly dental care with a focus on prevention, education, and early treatment.",
      approach: "It combines specialized techniques and a caring approach to make dental visits stress-free for children."
    },
    whyPediatricCareImportant: [
      "Prevents cavities and dental problems early",
      "Encourages good oral hygiene habits",
      "Helps correct habits like thumb sucking and mouth breathing",
      "Promotes proper growth and development of teeth",
      "Reduces dental anxiety in children"
    ],
    pediatricServices: [
      {
        name: "Preventive Dental Care",
        points: ["Routine dental check-ups", "Professional cleaning", "Fluoride applications", "Pit and fissure sealants"]
      },
      {
        name: "Restorative Treatments",
        points: ["Tooth-colored fillings", "Pediatric crowns", "Treatment of dental cavities"]
      },
      {
        name: "Habit & Growth Management",
        points: ["Habit correction (thumb sucking, tongue thrusting)", "Space maintainers", "Monitoring growth and tooth eruption"]
      },
      {
        name: "Emergency Care",
        points: ["Dental trauma management", "Tooth fractures", "Pain and swelling relief"]
      }
    ],
    whatPediatricCanHelp: [
      "Prevention of dental cavities",
      "Early detection of tooth decay",
      "Healthy eruption of permanent teeth",
      "Gum health in children",
      "Management of dental anxiety",
      "Correction of harmful oral habits"
    ],
    whyChooseUs: [
      "Child-friendly environment",
      "Gentle and patient-focused approach",
      "Preventive care and education focus",
      "Personalized treatment for every child",
      "Comfortable and positive experience"
    ],
    procedureSteps: [
      {
        title: "Child-Friendly Examination",
        points: ["Gentle and relaxed dental check-up"]
      },
      {
        title: "Oral Health Assessment",
        points: ["Evaluation of teeth, gums, and bite"]
      },
      {
        title: "Preventive or Required Treatment",
        points: ["Age-appropriate treatments recommended"]
      },
      {
        title: "Parent Guidance",
        points: ["Advice on diet, brushing techniques, and oral habits"]
      },
      {
        title: "Regular Follow-Ups",
        points: ["Ensures healthy growth and early detection of issues"]
      }
    ],
    procedure: [
      { step: 1, title: "Child-Friendly Examination", description: "Gentle and relaxed dental check-up." },
      { step: 2, title: "Oral Health Assessment", description: "Evaluation of teeth, gums, and bite." },
      { step: 3, title: "Preventive or Required Treatment", description: "Age-appropriate treatments recommended." },
      { step: 4, title: "Parent Guidance", description: "Advice on diet, brushing techniques, and oral habits." },
      { step: 5, title: "Regular Follow-Ups", description: "Ensures healthy growth and early detection of issues." }
    ],
    faq: [
      { question: "When should my child visit the dentist for the first time?", answer: "By the first birthday or within six months of the first tooth eruption." },
      { question: "Are dental X-rays safe for children?", answer: "Yes, digital X-rays use minimal radiation and are safe when needed." },
      { question: "Why treat baby teeth if they fall out?", answer: "They are important for chewing, speech, and guiding permanent teeth." },
      { question: "How often should my child visit the dentist?", answer: "Every 6 months or as advised." },
      { question: "What if my child is scared?", answer: "We use a gentle, friendly approach to make children feel comfortable." },
      { question: "Can thumb sucking affect teeth?", answer: "Yes, prolonged habits can affect jaw growth and alignment." },
      { question: "Are fluoride treatments safe?", answer: "Yes, when used appropriately they prevent cavities." }
    ]
  },
  {
    slug: "3d-cbct-digital-diagnostics",
    title: "3D CBCT & Digital Diagnostics",
    shortDescription: "Advanced and accurate dental diagnosis under one roof.",
    image: "/images/services/cbct-scanner.jpg",
    icon: "scan",
    category: "diagnostic",
    overview: "Cone Beam Computed Tomography (CBCT) is a modern 3D imaging technology that provides detailed visualization of teeth, jaw, nerves, and surrounding structures — enabling precise diagnosis and treatment planning.",
    benefits: [
      "High precision 3D imaging",
      "Lower radiation compared to traditional CT scans",
      "Quick and comfortable scanning procedure",
      "Accurate assessment of bone structure and anatomy",
      "Better treatment planning and outcomes"
    ],
    uses: [
      "Dental implant planning",
      "Orthodontic treatment planning",
      "Root canal (endodontic) evaluation",
      "Diagnosis of cysts, tumors, and infections",
      "Facial trauma and jaw assessment"
    ],
    implantInfo: {
      title: "CBCT for Dental Implants",
      description: "CBCT allows us to measure bone height and width accurately, locate nerves and sinuses precisely, and plan implants safely and effectively. This ensures long-lasting implants with minimal risk."
    },
    rctInfo: {
      title: "CBCT for Root Canal Treatment",
      points: [
        "Detect hidden infections",
        "Identify root canal anatomy",
        "Improve success rate of RCT"
      ]
    },
    safetyInfo: {
      title: "Is CBCT Safe?",
      description: "Yes. CBCT uses minimal radiation and is performed only when clinically necessary, following strict safety protocols."
    },
    whyChooseUs: [
      "Advanced technology",
      "Experienced specialists",
      "Precise diagnosis",
      "Patient-focused care"
    ],
    procedure: [
      { step: 1, title: "Quick & Painless", description: "The procedure is quick and completely painless." },
      { step: 2, title: "No Preparation", description: "No special preparation is required before the scan." },
      { step: 3, title: "Fast Scan", description: "The scan is completed within seconds." },
      { step: 4, title: "Instant Results", description: "Results are immediately available for evaluation." }
    ],
    faq: [
      { question: "Is CBCT painful?", answer: "No, the scan is completely painless." },
      { question: "How long does the scan take?", answer: "Usually less than 60 seconds." },
      { question: "Is CBCT required for every patient?", answer: "No, it is recommended only when necessary." },
      { question: "Will I get results immediately?", answer: "Yes, results are available instantly for evaluation." }
    ]
  },
  {
    slug: "surgical-tooth-extraction",
    title: "Surgical Tooth Extraction",
    shortDescription: "Safe and precise removal of teeth when necessary.",
    image: "/images/services/tooth-extraction.jpg",
    icon: "scissors",
    category: "surgical",
    overview: "Surgical tooth extraction is a specialized procedure used to remove teeth that cannot be easily extracted through routine methods. At Dr Arora's Dental Square, we ensure a comfortable, precise, and safe experience using advanced techniques and technology.",
    introText: "Safe and precise removal of teeth when necessary.",
    benefits: [
      "Gentle and minimally invasive techniques",
      "Advanced imaging for precision",
      "Reduced trauma and faster healing",
      "Strict sterilization and hygiene",
      "Experienced dental professionals"
    ],
    whatIsSurgicalExtraction: {
      description: "Surgical extraction is a specialized procedure for removing teeth that cannot be extracted through routine methods.",
      requiredWhen: [
        "Teeth are impacted (not fully erupted)",
        "Teeth are broken or severely damaged",
        "Teeth have complex root structures",
        "Teeth cannot be removed with simple forceps"
      ]
    },
    whenSurgicalExtractionNeeded: [
      "Impacted wisdom teeth",
      "Severely decayed or broken teeth",
      "Teeth that failed root canal treatment",
      "Teeth causing infection or pain",
      "Orthodontic or treatment-related extractions",
      "Traumatic dental injuries"
    ],
    surgicalExtractionTypes: [
      {
        name: "Impacted Wisdom Tooth Removal",
        points: ["Removal of teeth trapped in gums or jawbone", "Prevents pain, swelling, and infection"]
      },
      {
        name: "Surgical Removal of Broken Teeth",
        points: ["For teeth fractured below the gum line", "Requires precise access"]
      },
      {
        name: "Complex Root Extractions",
        points: ["Teeth with curved or multiple roots", "Requires surgical technique"]
      },
      {
        name: "Pre-Prosthetic Extractions",
        points: ["Done before dentures, implants, or orthodontics"]
      }
    ],
    cbctRoleInExtraction: [
      "Accurate positioning of teeth",
      "Assessing proximity to nerves and sinuses",
      "Safer and more precise surgical planning"
    ],
    isSurgicalExtractionPainful: [
      "Performed under effective local anesthesia",
      "Virtually painless procedure",
      "Minimal discomfort during treatment"
    ],
    recoveryAfterExtraction: [
      "Mild swelling or discomfort for 2-3 days",
      "Most patients resume normal activities within 24-48 hours",
      "Post-operative care instructions provided"
    ],
    postExtractionCare: [
      "Avoid rinsing for first 24 hours",
      "Apply ice packs to reduce swelling",
      "Eat soft foods",
      "Avoid smoking or alcohol",
      "Take prescribed medications"
    ],
    whyChooseUs: [
      "28+ years of clinical excellence",
      "Advanced CBCT imaging",
      "Gentle and minimally invasive techniques",
      "Reduced trauma and faster healing",
      "Strict sterilization protocols",
      "Experienced dental professionals"
    ],
    procedureSteps: [
      {
        title: "Clinical Examination & Imaging",
        points: ["Detailed evaluation using X-rays or CBCT"]
      },
      {
        title: "Local Anesthesia",
        points: ["Ensures complete comfort"]
      },
      {
        title: "Surgical Access",
        points: ["Small incision made if required"]
      },
      {
        title: "Tooth Removal",
        points: ["Tooth removed carefully with minimal trauma"]
      },
      {
        title: "Cleaning & Closure",
        points: ["Area cleaned and sutures placed if needed"]
      }
    ],
    procedure: [
      { step: 1, title: "Clinical Examination & Imaging", description: "Detailed evaluation using X-rays or CBCT." },
      { step: 2, title: "Local Anesthesia", description: "Ensures complete comfort." },
      { step: 3, title: "Surgical Access", description: "Small incision made if required." },
      { step: 4, title: "Tooth Removal", description: "Tooth removed carefully with minimal trauma." },
      { step: 5, title: "Cleaning & Closure", description: "Area cleaned and sutures placed if needed." }
    ],
    faq: [
      { question: "Is surgical extraction safe?", answer: "Yes, when performed with proper planning and modern techniques." },
      { question: "Will I need stitches?", answer: "Sometimes, stitches are placed and usually removed after a few days." },
      { question: "How long does it take?", answer: "Most procedures take 30-60 minutes." },
      { question: "Can I eat after extraction?", answer: "Soft foods are recommended for the first 24 hours." },
      { question: "When can I return to normal activities?", answer: "Usually within 1-2 days." }
    ]
  }
]

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "general", label: "General Dentistry" },
  { id: "cosmetic", label: "Cosmetic" },
  { id: "orthodontics", label: "Orthodontics" },
  { id: "surgical", label: "Surgical" },
  { id: "pediatric", label: "Pediatric" },
  { id: "diagnostic", label: "Diagnostics" },
]
