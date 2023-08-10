import { styled } from "@mui/system";

const Paragraph = styled("p")`
  margin: 20px;
  font-weight: bold;
  width: 70%;
  color: gray;
`;

const Div = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: #c8c8c9; */
  height: 100vh;
`;

const About = () => {
  return (
    <>
      <Div>
        <Paragraph>
          Introduction: Our CRUD Operation app is a powerful and user-friendly
          web application that simplifies data management tasks. CRUD stands for
          Create, Read, Update, and Delete, which are the four essential
          functions needed to manage data effectively. This app offers a
          seamless experience for users to interact with databases, making it
          ideal for businesses, developers, and individuals seeking an intuitive
          solution for data manipulation.
        </Paragraph>
        <Paragraph>
          Create: With our app, users can effortlessly create new data entries.
          Whether it's adding new products, customers, tasks, or any other type
          of data, the process is straightforward and efficient. The
          user-friendly interface ensures that even non-technical users can
          easily create new records.
        </Paragraph>
        <Paragraph>
          Read: The app excels at reading data, allowing users to view, search,
          and filter information. Advanced search options help users find
          specific records quickly, while sorting capabilities make it easy to
          organize data based on various attributes.
        </Paragraph>
        <Paragraph>
          Update: The app empowers users to modify existing data with ease.
          Users can make changes to any field, update records, and save the
          changes securely. This feature streamlines data maintenance and
          ensures that the information remains up-to-date.
        </Paragraph>
        <Paragraph>
          Delete: When it comes to data management, removing unwanted records is
          crucial. Our app offers a secure way to delete data entries, with
          options to confirm deletion to avoid accidental removal of important
          information.
        </Paragraph>
      </Div>
    </>
  );
};

export default About;
