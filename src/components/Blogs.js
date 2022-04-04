import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>Wellcome to our blogs</h1>

      <h3>Question1: What is context API?</h3>
      <p>
        The Context API is a React component structure that enables us to
        communicate data across all layers of the application. Rather than "prop
        drilling" or transmitting props from grandma to kid to parent, Context
        is also advertised as a leaner Redux state management technique. It used
        to be possible to do this using a module, which led to the rise of state
        management frameworks like Redux. It's easy to obtain data from the
        store using libraries like Redux. But let's focus on the Context API.
      </p>
    </div>
  );
};

export default Blogs;
