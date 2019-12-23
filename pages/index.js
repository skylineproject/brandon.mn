import Layout from "../layouts";
import { theme } from "../constants";

const Intro = () => (
  <section id="intro">
    <div />
    <div id="intro-image" className="me">
      <img
        src="https://s3.amazonaws.com/brandon.mn/me.jpeg"
        style={{ maxWidth: "25rem" }}
      />
    </div>
    <div id="intro-deets">
      <h2>
        an independent software engineer and tech community organizer based in
        minneapolis, mn.
      </h2>
      <div>
        <p>
          I'm creative tech partner at{" "}
          <a href="https://plakeside.com">PlakeSide</a>, a software studio for
          the live event industry.
        </p>
        <p>
          I am on the board of{" "}
          <a href="https://javascriptmn.com">JavaScriptMN</a> and{" "}
          <a href="https://serverless.mn">ServerlessMN</a>, and help out with{" "}
          <a href="https://mplsjrdevs.com">Mpls Jr Devs</a>.
        </p>
        <p>
          Previously, I was a research software engineer for digital agency
          powerhouse <a href="https://www.space150.com">space150</a>, and helped
          build identity management systems for the{" "}
          <a href="https://umn.edu">University of Minnesota</a>.
        </p>
      </div>
    </div>
    <style jsx>{`
      h2 {
        margin: 0;
      }
      #intro {
        display: grid;
        grid-template-columns: 1fr;
        grid-column-gap: 2rem;
      }
      #intro-deets {
        margin: 1rem;
        padding: 2rem;
        border-left: 0.25rem ${theme.quinary} solid;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      #intro-image {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
      }
      #intro-image img {
        z-index: 1;
        max-width: 100%;
        margin: 1rem;
      }
      li:before {
        font-size: 0.25rem;
      }

      @media (min-width: 700px  and max-width: 800px) {
        #intro {
          grid-template-columns: 0.5fr 2fr 4fr 0.5fr;
        }
      }

      @media (min-width: 800px) {
        #intro {
          grid-template-columns: 1fr 2fr 4fr 1fr;
          margin: 3rem 0;
        }
      }
    `}</style>
  </section>
);

export default () => (
  <Layout>
    <Intro />
  </Layout>
);
