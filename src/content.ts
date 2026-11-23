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
      note: "The closest airport to the venue.",
    },
    { name: "Miami International (MIA)", note: "More flight choices, a longer drive south." },
    { name: "Palm Beach International (PBI)", note: "Another option, a longer drive north." },
  ],
  parking: "The hotel offers all-day parking for $20. In and out is fine.",
  hotels: null as null | { name: string; note: string; url?: string }[],
};

// RSVP deadline: waiting on the couple. Leave null to show "coming soon".
export const rsvp = {
  deadline: null as string | null,
  open: false,
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
