import react from "react";
import axios from "axios";

import withAnalytics from "../src/hocs/withAnalytics";

const Detail = ({ user }) => {
  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} width="200" />
    </div>
  );
};

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `htpps://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

export default withAnalytics()(Detail);
