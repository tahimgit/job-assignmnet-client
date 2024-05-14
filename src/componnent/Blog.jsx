

const Blog = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            Access Token:
          </h2>
          <p className="mb-2">
            An access token acts as a credential granting an
            application permission to access an API. It signifies the
            authorization given to the application to retrieve specific
            resources on behalf of the user. Access tokens are typically
            short-lived and expire after a designated period to bolster
            security.
          </p>
          <h2 className="text-2xl font-semibold mb-2">
            Refresh Token:
          </h2>
          <p className="mb-2">
            Conversely, a refresh token serves as a credential
            utilized to acquire a new access token once the current one expires.
            It provides a mechanism for maintaining long-term authentication
            without necessitating the user to repeatedly log in. Refresh tokens
            often possess a lengthier lifespan compared to access tokens..
          </p>
          
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Express.js:</h2>
          <p className="mb-2">
            Express JS: embodies a minimalist web application framework tailored
            for Node.js. It furnishes a robust suite of functionalities for
            crafting web and mobile applications, streamlining the creation of
            APIs, and managing HTTP requests and responses. Renowned for its
            simplicity, adaptability, and scalability, Express.js stands as a
            favored choice among developers for crafting server-side
            applications and APIs.
          </p>
         
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Nest.js:</h2>
          <p className="mb-2">
            stands as a progressive Node.js framework engineered for
            constructing efficient, dependable, and scalable server-side
            applications. Constructed atop Express.js, Nest.js enhances it with
            a modular, dependency-injection-based architecture inspired by
            Angular. Nest.js fosters a structured approach to backend
            application development, facilitating ease of maintenance and
            scalability of codebases. Additionally, it seamlessly integrates
            TypeScript and advocates for the adoption of design patterns like
            MVC (Model-View-Controller) to craft enterprise-grade applications.
          </p>
    
        </div>

      </div>
    </div>
  );
};

export default Blog;
