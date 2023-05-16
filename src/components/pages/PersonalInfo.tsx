type Props = {
  header: string;
  description: string;
};

const PersonalInfo = () => {
  return (
    <div>
      <h2>Please provide your name, email address, and phone number.</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
