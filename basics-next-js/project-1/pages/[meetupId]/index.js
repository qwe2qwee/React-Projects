import NewMeetupForm from "@/components/meetups/NewMeetupForm";

NewMeetupForm;

const NewMeetupPage = () => {
  const addMeetupHandler = (eneteredMeetupData) => {
    console.log(eneteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
