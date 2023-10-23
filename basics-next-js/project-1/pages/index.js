import MeetupList from "@/components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://th.bing.com/th/id/R.6bbf753d78a5531d421f650878cfd9d5?rik=wdtwf6V0x4I8kg&pid=ImgRaw&r=0",
    address: "Some address",
    description: "This is a second meetup!",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://th.bing.com/th/id/R.6bbf753d78a5531d421f650878cfd9d5?rik=wdtwf6V0x4I8kg&pid=ImgRaw&r=0",
    address: "Some address",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A First Meetup",
    image:
      "https://th.bing.com/th/id/R.6bbf753d78a5531d421f650878cfd9d5?rik=wdtwf6V0x4I8kg&pid=ImgRaw&r=0",
    address: "Some address",
    description: "This is a second meetup!",
  },
  {
    id: "m4",
    title: "A First Meetup",
    image:
      "https://th.bing.com/th/id/R.6bbf753d78a5531d421f650878cfd9d5?rik=wdtwf6V0x4I8kg&pid=ImgRaw&r=0",
    address: "Some address",
    description: "This is a second meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
