// Every word guests see lives here. Edit this file to change the site.
// Source: the couple's checklist (WEDDING-DETAILS.md, 2026-11-23).

export const couple = {
  first: "Alex",
  second: "Kaila",
};

export const wedding = {
  dateLong: "Sunday, September 19, 2027",
  dateShort: "09 . 19 . 2027",
  // 6:00 pm Eastern (daylight time) on the day.
  startISO: "2027-09-19T18:00:00-04:00",
  city: "Fort Lauderdale, Florida",
  arrive: "5:30 pm",
  start: "6:00 pm",
};

export const venue = {
  name: "Crystal Ballroom Beach Place",
  street: "17 S Fort Lauderdale Beach Blvd, r310",
  cityLine: "Fort Lauderdale, FL 33316",
  setting: "Indoors, with an outdoor terrace",
  locatedIn: "Inside the Thor Gallery at Beach Place, across from Fort Lauderdale Beach",
  // Venue FAQ (crystalballroomfortlauderdale.com/faq, read 2026-11-23): ceremony indoors, cocktail hour on the terrace.
  spaces: "The ceremony and reception are indoors in the ballroom. Cocktail hour is on the outdoor terrace.",
  mapEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent("Crystal Ballroom BeachPlace, 17 S Fort Lauderdale Beach Blvd, Fort Lauderdale, FL 33316") +
    "&z=16&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Crystal Ballroom BeachPlace, 17 S Fort Lauderdale Beach Blvd, Fort Lauderdale, FL 33316"),
  photoCredit: "Venue photos: Crystal Ballroom BeachPlace",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Crystal Ballroom Beach Place, 17 S Fort Lauderdale Beach Blvd, Fort Lauderdale, FL 33316",
    ),
};

// Times are null until the couple confirms them.
export const schedule: { name: string; time: string | null; note: string }[] = [
  { name: "Guests arrive", time: "5:30 pm", note: "Please be seated in time." },
  { name: "Ceremony", time: "6:00 pm", note: "Starts at 6 sharp." },
  { name: "Cocktail hour", time: null, note: "On the terrace." },
  { name: "Reception", time: null, note: "Dinner and dancing in the ballroom." },
];

export const welcome =
  "We are so happy you are here. We cannot wait to celebrate with the people we love most, by the ocean in Fort Lauderdale. Everything you need to know is on this page, and we will add more as the day gets closer.";

export const dressCode = {
  title: "Elegant evening attire",
  body: "We invite our guests to dress in elegant evening attire. Floor-length or midi dresses, dressy jumpsuits, and suits are welcome.",
  avoidText:
    "Please avoid wearing white, ivory, or deep wine, as these colors are reserved for the wedding party.",
  avoid: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Ivory", hex: "#F4EEDC" },
    { name: "Deep wine", hex: "#5E1A2E" },
  ],
};

export const travel = {
  airports: [
    {
      name: "Fort Lauderdale-Hollywood International (FLL)",
      note: "Closest. About 6 to 8 miles, 15 to 25 minutes by car.",
    },
    {
      name: "Miami International (MIA)",
      note: "About 45 to 60 minutes. Rideshare roughly $75 to $120.",
    },
    {
      name: "Palm Beach International (PBI)",
      note: "About 55 to 80 minutes. Rideshare roughly $85.",
    },
  ],
  parking: "The hotel offers all-day parking for $20. In and out is fine.",
};

// RSVP deadline from the couple, 2026-11-23.
export const rsvp = {
  deadline: "Sunday, August 1, 2027" as string | null,
  deadlineShort: "August 1, 2027",
  // Form closes at the end of the deadline day, Eastern time.
  closesISO: "2027-08-02T00:00:00-04:00",
};

export const faq: { q: string; a: string }[] = [
  {
    q: "What time should I arrive?",
    a: "Please arrive by 5:30 pm. The event starts at 6 pm sharp, and late arrivals may not be let in until the ceremony is over.",
  },
  { q: "Is the event indoors or outdoors?", a: "The event is indoors, with an outdoor terrace." },
  { q: "Can I bring a plus-one?", a: "Plus-ones must be confirmed by Alex or Kaila." },
  { q: "Are children invited?", a: "All children must be confirmed by Alex or Kaila." },
  {
    q: "What should I wear?",
    a: "Elegant evening attire. Floor-length or midi dresses, dressy jumpsuits, and suits are welcome. Please avoid white, ivory, and deep wine; these colors are reserved for the wedding party.",
  },
  { q: "Where can I park?", a: "The hotel offers all-day parking for $20. In and out is fine." },
  {
    q: "Can I take photos during the ceremony?",
    a: "Yes, photos and videos with no flash are fine. Please do not get in the way of our photographers and videographers.",
  },
];

// RSVP replies go to a Google Form in the couple's Google account (free),
// which saves them in a Google Sheet. Filled in once the form exists.
export const rsvpForm = {
  // Form "Alex & Kaila Wedding RSVP" in the owner's Google account.
  // Edit: https://docs.google.com/forms/d/1Eo_W_Mvr7-7PLAo_uMo-ehRXWoMS1GVos5WWYNjLg6A/edit
  action:
    "https://docs.google.com/forms/d/e/1FAIpQLScvacFrl1O2gneFb9UKHYfIUs8l4Tc-cE1lGYtouzcN_ryhKQ/formResponse",
  yes: "Joyfully accepts",
  no: "Regretfully declines",
  fields: {
    name: "entry.1979156252",
    attending: "entry.621372912",
    party: "entry.172222965",
    guests: "entry.683699938",
    contact: "entry.1026671553",
    dietary: "entry.1315505789",
    message: "entry.1872510732",
  },
};

// Where to stay. Researched 2026-11-23 (research/lodging-travel-2027-09-19.md).
// All prices are ESTIMATES for a September weekend (low season), before taxes and fees.
const STAY_DATES = "checkin=2027-09-18&checkout=2027-09-20";
// Map box around Beach Place: the beach, Las Olas and Victoria Park.
const BOX = "ne_lat=26.1600&ne_lng=-80.0900&sw_lat=26.0950&sw_lng=-80.1450&search_by_map=true&zoom_level=14";
const airbnb = (q: string) =>
  `https://www.airbnb.com/s/Fort-Lauderdale-Beach--FL/homes?${STAY_DATES}&${BOX}&${q}`;

export const stay = {
  areas: [
    { name: "Fort Lauderdale Beach (A1A)", why: "Walk to the venue and the beach. Best if you want zero driving." },
    { name: "Las Olas Boulevard", why: "Restaurants, shopping and nightlife, a short ride to the venue." },
    { name: "Victoria Park", why: "Quiet streets and homes, great for groups renting a house." },
    { name: "Lauderdale-by-the-Sea", why: "Relaxed small beach town about 15 to 20 minutes north." },
  ],
  hotels: {
    budget: {
      label: "Budget-friendly",
      range: "$110 to $200",
      items: [
        {
          name: "Sea Spray Inn",
          distance: "Lauderdale-by-the-Sea, about 15 to 20 minutes north",
          price: "$110 to $190",
          note: "",
          url: "https://seasprayinn.com/",
        },
        {
          name: "Hotels near FLL airport and Las Olas",
          distance: "10 to 15 minutes by car",
          price: "$110 to $200",
          note: "Many chain options. Book early for the best rate.",
          url: "https://www.google.com/travel/hotels/Fort%20Lauderdale?q=hotels%20near%20Fort%20Lauderdale%20Beach&dates=2027-09-18,2027-09-20",
        },
      ],
    },
    mid: {
      label: "Mid-range",
      range: "$180 to $320",
      items: [
        {
          name: "Marriott's BeachPlace Towers",
          distance: "Part of Beach Place, about a 1 to 2 minute walk",
          price: "$200 to $350",
          note: "Closest stay to the venue",
          url: "https://www.marriott.com/en-us/hotels/fllbp-marriotts-beachplace-towers/overview/",
        },
        {
          name: "Courtyard Fort Lauderdale Beach Oceanside",
          distance: "About 1 to 2 miles south, a short ride",
          price: "$170 to $280",
          note: "",
          url: "https://www.marriott.com/en-us/hotels/fllco-courtyard-oceanside-fort-lauderdale-beach/overview/",
        },
        {
          name: "Fort Lauderdale Marriott Harbor Beach Resort & Spa",
          distance: "About 2 miles south, a 10 minute ride",
          price: "$220 to $380",
          note: "",
          url: "https://www.marriott.com/en-us/hotels/fllsb-fort-lauderdale-marriott-harbor-beach-resort-and-spa/overview/",
        },
      ],
    },
    luxury: {
      label: "Luxury",
      range: "$300 to $600+",
      items: [
        {
          name: "The Ritz-Carlton, Fort Lauderdale",
          distance: "Right across Las Olas from the venue, a short walk",
          price: "$400 to $700",
          note: "",
          url: "https://www.ritzcarlton.com/en/hotels/fllrz-the-ritz-carlton-fort-lauderdale/overview/",
        },
        {
          name: "The Westin Fort Lauderdale Beach Resort",
          distance: "On A1A, about a 5 to 10 minute walk north",
          price: "$250 to $450",
          note: "",
          url: "https://www.marriott.com/en-us/hotels/flllw-the-westin-fort-lauderdale-beach-resort/overview/",
        },
        {
          name: "W Fort Lauderdale",
          distance: "On A1A, about a 10 minute walk north",
          price: "$300 to $550",
          note: "",
          url: "https://www.marriott.com/en-us/hotels/fllwh-w-fort-lauderdale/overview/",
        },
        {
          name: "Four Seasons Hotel Fort Lauderdale",
          distance: "On A1A, about a 10 to 15 minute walk north",
          price: "$500 to $900",
          note: "",
          url: "https://www.fourseasons.com/fortlauderdale/",
        },
        {
          name: "Conrad Fort Lauderdale Beach",
          distance: "On A1A, about a 10 to 15 minute walk north",
          price: "$250 to $450",
          note: "",
          url: "https://www.hilton.com/en/hotels/fllcici-conrad-fort-lauderdale-beach/",
        },
      ],
    },
  },
  rentals: {
    small: {
      who: "2 to 4 guests",
      blurb:
        "Condos and one or two bedroom apartments near the beach. Each button opens live Airbnb listings near the venue for the wedding weekend (Sept 18 to 20).",
      tiers: [
        { label: "Budget", price: "Under $175", url: airbnb("adults=2&price_max=175") },
        { label: "Comfort", price: "$175 to $325", url: airbnb("adults=3&price_min=175&price_max=325") },
        { label: "Luxury", price: "$325+", url: airbnb("adults=4&price_min=325") },
      ],
      extra: null as null | { label: string; url: string },
    },
    large: {
      who: "8 to 16 guests",
      blurb:
        "Whole houses and villas with several bedrooms, often with a pool. Great for families and bridal or groomsmen groups. Each button opens live listings for the wedding weekend.",
      tiers: [
        { label: "Value", price: "$300 to $700", url: airbnb("adults=8&min_bedrooms=3&price_min=300&price_max=700") },
        { label: "Comfort", price: "$700 to $1,200", url: airbnb("adults=10&min_bedrooms=4&price_min=700&price_max=1200") },
        { label: "Luxury villa", price: "$1,200+", url: airbnb("adults=14&min_bedrooms=5&price_min=1200") },
      ],
      extra: {
        label: "Also search large homes on Vrbo",
        url: "https://www.vrbo.com/search?destination=Fort%20Lauderdale%20Beach%2C%20Florida&startDate=2027-09-18&endDate=2027-09-20&adults=10",
      },
    },
  },
  fineprint:
    "Prices are estimates for a September weekend, before taxes and fees. Rates change, so check the hotel or listing for the real price. Book early.",
};
