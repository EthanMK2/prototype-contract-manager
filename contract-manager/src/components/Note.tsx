import notes from "../models/job/notes";

const Note = ({ description }: notes) => {
  return <p>{description}</p>;
};

export default Note;
