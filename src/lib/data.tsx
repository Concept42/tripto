import AccountingIntegration from "@/components/Icons/AccountingIntegration";
import Antenna from "@/components/Icons/Antenna";
import AppStoreButton from "@/components/Icons/AppStoreButton";
import AutomaticInvoicing from "@/components/Icons/AutomaticInvoicing";
import Autopilot from "@/components/Icons/Autopilot";
import BloodDrop from "@/components/Icons/BloodDrop";
import BookingPortal from "@/components/Icons/BookingPortal";
import Building from "@/components/Icons/Building";
import ChatSquare from "@/components/Icons/ChatSquare";
import Document from "@/components/Icons/Document";
import Download from "@/components/Icons/Download";
import DriverApp from "@/components/Icons/DriverApp";
import FIT from "@/components/Icons/FIT";
import Gdpr from "@/components/Icons/Gdpr";
import GooglePlayButton from "@/components/Icons/GooglePlayButton";
import Headphones from "@/components/Icons/Headphones";
import HeartHexagon from "@/components/Icons/HeartHexagon";
import Invoice from "@/components/Icons/Invoice";
import KPI from "@/components/Icons/KPI";
import MedicalCross from "@/components/Icons/MedicalCross";
import Pencil from "@/components/Icons/Pencil";
import Plane from "@/components/Icons/Plane";
import PriceCalculation from "@/components/Icons/PriceCalculation";
import Reporting from "@/components/Icons/Reporting";
import Rocket from "@/components/Icons/Rocket";
import Rules from "@/components/Icons/Rules";
import ShiftManagement from "@/components/Icons/ShiftManagement";
import SmartphoneCheck from "@/components/Icons/SmartphoneCheck";
import TrackAndTrace from "@/components/Icons/TrackAndTrace";
import TripEntry from "@/components/Icons/TripEntry";
import Truck from "@/components/Icons/Truck";
import { TButtonVariants } from "@/components/ui/elements/Button";
import { TNavigationItem, TRenderedOnPage } from "@/utils/types";

export const languagePickerData = {
  text: "language_modal_text",
  languages: [
    {
      id: 1,
      name: "belgium",
      locales: [
        { id: 1, code: "nl", label: "nederlands" },
        { id: 2, code: "fr", label: "français" },
        { id: 3, code: "en", label: "english" }
      ]
    },
    {
      id: 2,
      name: "deutschland",
      locales: [
        { id: 1, code: "de", label: "deutsch" },
        { id: 2, code: "en", label: "english" }
      ]
    },
    {
      id: 3,
      name: "united_kingdom",
      locales: [{ id: 1, code: "en", label: "english" }]
    },
    {
      id: 4,
      name: "other",
      locales: [{ id: 1, code: "en", label: "english" }]
    }
  ]
};

export const footerData = {
  topPart: {
    links: [
      {
        id: 1,
        title: "solutions",
        links: [
          { id: 1, name: "hospitals", href: "hospitals" },
          { id: 2, name: "insurers", href: "insurers" },
          {
            id: 3,
            name: "transport_companies",
            subLinks: [
              { id: 1, name: "NEMT", href: "nemt" },
              { id: 2, name: "blood_samples", href: "blood-samples" },
              { id: 3, name: "passanger_transport", href: "passanger-transport" },
              { id: 4, name: "airport_transport", href: "airport-transport" }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "company",
        links: [
          { id: 1, name: "about_us", href: "about-us" },
          { id: 2, name: "imprint", href: "imprint" },
          { id: 3, name: "careers", href: "careers" },
          { id: 4, name: "contact_us", href: "contact-us" }
        ]
      },
      {
        id: 3,
        title: "resources",
        links: [
          { id: 1, name: "login", href: "/#" },
          { id: 2, name: "trust_center", href: "/#" },
          { id: 3, icon: <GooglePlayButton />, href: "/#" },
          { id: 4, icon: <AppStoreButton />, href: "/#" }
        ]
      }
    ]
  },
  bottomPart: {
    icons: [
      { id: 1, icon: <FIT />, href: "/#" },
      { id: 2, icon: <Gdpr />, href: "/#" },
      { id: 3, icon: <Gdpr />, href: "/#" }
    ],
    copyright: "copyright_text",
    legalLinks: [
      { id: 1, name: "privacy_policy", href: "privacy-policy" },
      { id: 2, name: "terms_and_conditions", href: "terms-and-conditions" },
      { id: 3, name: "cookie_and_policy", href: "cookie-policy" }
    ]
  }
};

export const headerData = [
  {
    id: 1,
    name: "hospitals",
    href: "hospitals"
  },
  {
    id: 2,
    name: "transport_companies",
    disabledhref: true,
    dropdown: [
      {
        id: 1,
        icon: <MedicalCross />,
        title: "NEMT",
        text: "NEMT_text",
        href: "nemt"
      },
      {
        id: 2,
        icon: <BloodDrop />,
        title: "blood_samples",
        text: "blood_samples_text",
        href: "blood-samples"
      },
      {
        id: 3,
        icon: <Truck />,
        title: "passanger_transport",
        text: "passanger_transport_text",
        href: "passanger-transport"
      },
      {
        id: 4,
        icon: <Plane />,
        title: "airport_transport",
        text: "airport_transport_text",
        href: "airport-transport"
      }
    ]
  },
  {
    id: 3,
    name: "insurers",
    href: "insurers"
  },
  {
    id: 4,
    name: "more",
    disabledhref: true,
    dropdown: [
      {
        id: 1,
        icon: <Building />,
        title: "about_us",
        text: "about_us_text",
        href: "about-us"
      },
      {
        id: 2,
        icon: <Pencil />,
        title: "imprint",
        text: "imprint_text",
        href: "imprint"
      },
      {
        id: 3,
        icon: <Rocket />,
        title: "careers",
        text: "careers_text",
        href: "careers"
      },
      {
        id: 4,
        icon: <ChatSquare />,
        title: "contact_us",
        text: "contact_us_text",
        href: "contact-us"
      },
      {
        id: 5,
        icon: <HeartHexagon />,
        title: "trust_center",
        text: "trust_center_text",
        href: "/#"
      },
      {
        id: 6,
        icon: <Download />,
        title: "download_app_android",
        href: "/#"
      },
      {
        id: 7,
        icon: <Download />,
        title: "download_app_ios",
        href: "/#"
      }
    ]
  }
] as TNavigationItem[];

export const headerButtonGroupData = [
  {
    id: 1,
    title: "login",
    href: "/#",
    variant: "secondary" as TButtonVariants
  },
  {
    id: 2,
    title: "start_testing",
    href: "/#",
    variant: "primary" as TButtonVariants
  }
];

export const homePageData = {
  hero: {
    title: "hero_title",
    hero_text: "hero_text",
    image: {
      src: "/images/Trips.png",
      alt: "Hero Image"
    },
    cta: {
      title: "get_in_contact",
      href: "contact-us",
      variant: "primary" as TButtonVariants
    },
    caroselSection: {
      title: "trusted_by_text",
      images: [
        {
          id: 1,
          src: "/images/ramp_logo.png",
          alt: "ramp logo",
          href: "https://ramp.com/"
        },
        {
          id: 2,
          src: "/images/atlassian_logo.png",
          alt: "atlassian logo",
          href: "https://www.atlassian.com/"
        },
        {
          id: 3,
          src: "/images/mistral_ai_logo.png",
          alt: "mistral ai logo",
          href: "https://mistral.ai/"
        },
        {
          id: 4,
          src: "/images/icelandair_logo.png",
          alt: "iceland air logo",
          href: "https://www.icelandair.com/"
        },
        {
          id: 5,
          src: "/images/miro_logo.png",
          alt: "miro logo",
          href: "https://miro.com/"
        },
        {
          id: 6,
          src: "/images/intercom-logo.png",
          alt: "intercom logo",
          href: "https://www.intercom.com/"
        }
      ]
    }
  },
  allInOneSoftware: {
    title: "all_in_one_title",
    cards: [
      {
        id: 1,
        label: "non_emergency_medical_transport",
        href: "nemt",
        image: { src: "/images/non_emergency_card.png", alt: "" },
        buttons: [
          {
            id: 1,
            title: "vehicle_planning",
            href: "/#",
            variant: "white" as TButtonVariants,
            icon: "external-black"
          },
          {
            id: 2,
            title: "automated_billing",
            href: "/#",
            variant: "white" as TButtonVariants,
            icon: "external-black"
          }
        ]
      },
      {
        id: 2,
        label: "hospital",
        href: "hospitals",
        image: { src: "/images/hospital_card.png", alt: "" },
        buttons: [
          {
            id: 1,
            title: "label",
            href: "/#",
            variant: "white" as TButtonVariants,
            icon: "external-black"
          },
          {
            id: 2,
            title: "label",
            href: "/#",
            variant: "white" as TButtonVariants,
            icon: "external-black"
          }
        ]
      },
      {
        id: 3,
        label: "health_insurance",
        href: "insurers",
        image: { src: "/images/health_insurance_card.png", alt: "" },
        buttons: [
          {
            id: 1,
            title: "label",
            href: "/#",
            variant: "white" as TButtonVariants,
            icon: "external-black"
          },
          {
            id: 2,
            title: "label",
            href: "/#",
            variant: "white" as TButtonVariants,
            icon: "external-black"
          }
        ]
      }
    ]
  },
  /// ImageAndText have a reverse property. If it is true, the image will be on the right side.
  imageAndText: {
    title: "welcome_to_triptomatic",
    content: ["content_1", "content_2", "content_3"],
    renderedOnPage: "homePage" as TRenderedOnPage,
    image: {
      src: "/images/welcome_to_triptomatic.png",
      alt: "Welcome to Triptomatic"
    }
  },
  testimonials: {
    title: "testimonials_title",
    renderedOnPage: "homePage" as TRenderedOnPage,
    cards: [
      {
        id: 1,
        text: "testimonial_1_text",
        companyName: "testimonial_1_company",
        personName: "testimonial_1_person",
        image: {
          src: "/images/testimonial_placeholder_person.jpg",
          alt: "Testimonial 1"
        }
      },
      {
        id: 2,
        text: "testimonial_1_text",
        companyName: "testimonial_1_company",
        personName: "testimonial_1_person",
        image: {
          src: "/images/testimonial_placeholder_person.jpg",
          alt: "Testimonial 1"
        }
      },
      {
        id: 3,
        text: "testimonial_1_text",
        companyName: "testimonial_1_company",
        personName: "testimonial_1_person",
        image: {
          src: "/images/testimonial_placeholder_person.jpg",
          alt: "Testimonial 1"
        }
      }
    ]
  }
};

export const nemtPageData = {
  hero: {
    title: "hero_title",
    hero_text: "hero_text",
    topIconCards: [
      { id: 1, icon: <Headphones />, text: "calltaking" },
      { id: 2, icon: <Antenna />, text: "dispatching" },
      { id: 3, icon: <SmartphoneCheck />, text: "execution" },
      { id: 4, icon: <Invoice />, text: "invoicing" },
      { id: 5, icon: <Reporting />, text: "reporting" }
    ],
    bottomIconCards: [
      { id: 1, icon: <BookingPortal />, text: "booking_portal" },
      { id: 2, icon: <TripEntry />, text: "trip_entry" },
      { id: 3, icon: <PriceCalculation />, text: "price_calculation" },
      { id: 4, icon: <Autopilot />, text: "autopilot_dispatching", animated: true },
      { id: 5, icon: <DriverApp />, text: "driver_app" },
      { id: 6, icon: <TrackAndTrace />, text: "track_and_trace" },
      { id: 7, icon: <KPI />, text: "kpi_dashboards" },
      { id: 8, icon: <AccountingIntegration />, text: "accounting_integration" },
      { id: 9, icon: <AutomaticInvoicing />, text: "automatic_invoicing" },
      { id: 10, icon: <Document />, text: "document_management" },
      { id: 11, icon: <ShiftManagement />, text: "shift_management" }
    ]
  },
  schedulingOnAutopilot: {
    title: "scheduling_on_autopilot",
    content: ["scheduling_text_content"],
    list: [
      "scheduling_list_content_1",
      "scheduling_list_content_2",
      "scheduling_list_content_3",
      "scheduling_list_content_4",
      "scheduling_list_content_5"
    ],
    renderedOnPage: "nemtPage" as TRenderedOnPage,
    image: {
      src: "/images/SchedulingOnAutopilot.png",
      alt: "Scheduling on Autopilot"
    }
  },
  invoicingMadeEasy: {
    title: "invoicing_made_easy",
    reverse: true,
    content: ["invoicing_text_content"],
    list: [
      "invoicing_list_content_1",
      "invoicing_list_content_2",
      "invoicing_list_content_3",
      "invoicing_list_content_4"
    ],
    renderedOnPage: "nemtPage" as TRenderedOnPage,
    image: {
      src: "/images/invoicing_made_easy.png",
      alt: "Invoicing made easy"
    }
  },
  streamLine: {
    title: "streamline_your_operations",
    iconBoxes: [
      {
        id: 1,
        title: "placeholder_title",
        text: "iconBox_text_1",
        icon: <Rules />
      },
      {
        id: 2,
        title: "placeholder_title",
        text: "iconBox_text_2",
        icon: <Rules />
      },
      {
        id: 3,
        title: "placeholder_title",
        text: "iconBox_text_3",
        icon: <Rules />
      },
      {
        id: 4,
        title: "placeholder_title",
        text: "iconBox_text_4",
        icon: <Rules />
      },
      {
        id: 5,
        title: "placeholder_title",
        text: "iconBox_text_5",
        icon: <Rules />
      },
      {
        id: 6,
        title: "placeholder_title",
        text: "iconBox_text_6",
        icon: <Rules />
      }
    ]
  },
  benefits: {
    title: "benefits_title",
    list: ["benefits_list_1", "benefits_list_2", "benefits_list_3"],
    image: {
      src: "/images/benefitsImage.png",
      alt: "Benefits - Make your life easier"
    }
  }
};

export const footerBannerData = {
  title: "footer_banner_title",
  cta: {
    title: "request_demo",
    href: "/#"
  }
};

export const hospitalsPageData = {
  hero: {
    title: "hero_title",

    hero_text: "hero_text",
    image: {
      src: "/images/HospitalsDiagram.png",
      mobileSrc: "/images/HospitalsDiagramMobile.png",
      alt: "Hospitals Diagram"
    }
  },
  simplifiedBooking: {
    title: "simplified_booking",
    background: true,
    reverse: true,
    content: ["simplified_booking_text_content"],
    list: [
      "simplified_booking_content_1",
      "simplified_booking_content_2",
      "simplified_booking_content_3",
      "simplified_booking_content_4",
      "simplified_booking_content_5"
    ],
    renderedOnPage: "hospitalsPage" as TRenderedOnPage,
    image: {
      src: "/images/SchedulingOnAutopilot.png",
      alt: "Scheduling on Autopilot"
    }
  },
  manageTransports: {
    title: "manage_transports",
    content: ["manage_transports_text_content"],
    list: ["manage_transports_content_1", "manage_transports_content_2", "manage_transports_content_3"],
    renderedOnPage: "hospitalsPage" as TRenderedOnPage,
    image: {
      src: "/images/SchedulingOnAutopilot.png",
      alt: "Scheduling on Autopilot"
    }
  },
  pricingBilling: {
    title: "pricing_billing",
    background: true,
    reverse: true,
    content: ["pricing_billing_text_content"],
    list: [
      "pricing_billing_content_1",
      "pricing_billing_content_2",
      "pricing_billing_content_3",
      "pricing_billing_content_4"
    ],
    renderedOnPage: "hospitalsPage" as TRenderedOnPage,
    image: {
      src: "/images/SchedulingOnAutopilot.png",
      alt: "Scheduling on Autopilot"
    }
  },
  robustSecurity: {
    title: "robust_security",
    content: ["robust_security_text_content"],
    list: ["robust_security_content_1", "robust_security_content_2", "robust_security_content_3"],
    renderedOnPage: "hospitalsPage" as TRenderedOnPage,
    image: {
      src: "/images/SchedulingOnAutopilot.png",
      alt: "Scheduling on Autopilot"
    }
  },
  lastSection: {
    title: "last_section_title",
    leftPart: {
      image: {
        src: "/images/SupportImage.jpg",
        alt: "Ongoing Support & Training"
      },
      title: "ongoing_support_training",
      text: "ongoing_support_training_text"
    },
    rightPart: {
      image: {
        src: "/images/ExportsImage.jpg",
        alt: "Ongoing Support & Training"
      },
      title: "exports_and_dashboard",
      text: "exports_and_dashboard_text"
    }
  }
};
export const contactPageData = {
  title: "contact_us",
  content: "contact_us_text_content"
};

const data = {
  footerData,
  headerData,
  headerButtonGroupData,
  homePageData,
  languagePickerData,
  nemtPageData,
  hospitalsPageData,
  contactPageData
};

export default data;
