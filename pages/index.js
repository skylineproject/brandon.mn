import Layout from "../layouts";
import cx from "classnames";

const BioLede = () => (
  <h2 className={cx("text-2xl", "font-extrabold")}>
    an independent software engineer and tech community organizer based in
    minneapolis, mn.
  </h2>
);

const BioLink = ({ children, href }) => (
  <a href={href} className={cx("text-quinary underline")}>
    {children}
  </a>
);

const BioSegment = ({ children }) => <p className={cx("py-2")}>{children}</p>;

const Intro = () => (
  <section
    className={cx("text-tertiary", "md:flex", "md:mx-auto", "m-4", "max-w-4xl")}
  >
    <div>
      <img
        className={cx("mx-auto", "w-3/5", "max-w-1/4", "sm:max-w-sm", 'sm:w-full', 'py-4')}
        src="https://s3.amazonaws.com/brandon.mn/me.jpeg"
        alt="Brandon Johnson"
      />
    </div>
    <div className={cx("px-8", 'pt-1', "md:self-center")}>
      <BioLede />
      <div>
        <BioSegment>
          I'm a bit of a hodge-podge. In the past year, I've helped clients
          build RFID access control systems, prototype social networks, deploy
          hybrid mobile apps, and improve their legacy React codebases. Your
          kind of hodge-podge?{" "}
          <BioLink href="mailto:brandon@leftblank.co">Let's talk.</BioLink>
          <div className="my-4">
            <div className="py-4 md:flex items-top justify-between">
              <div className="w-full">
                <p>some clients + friends: </p>
                <ul className="list-disc list-inside">
                  <li>modern logic</li>
                  <li>safe haus group</li>
                  <li>haroldson art &amp; design</li>
                </ul>
              </div>
              <div className="text-justify w-full pt-2 md:pt-0">
                <p>some things we've done: </p>
                <ul className="list-disc list-inside text-left">
                  <li>web &amp; native apps</li>
                  <li>IoT dev &amp; mgmt</li>
                  <li>24x7 event support</li>
                </ul>
              </div>
            </div>
            <a
              className="bg-hexinary px-2 py-1 font-bold text-primary hover:text-quinary"
              target="blank"
              rel="noopener noreferrer"
              href="https://www.notion.so/brandonjohnson/Brandon-Johnson-left-blank-co-01e5d8741cad4388b2cdffc2cb91d1ca"
            >
              see case studies
          </a>

          </div>

        </BioSegment>
        <BioSegment>
          I am on the board of{" "}
          <BioLink href="https://javascriptmn.com">JavaScriptMN</BioLink> and{" "}
          <BioLink href="https://serverless.mn">ServerlessMN</BioLink>, two of
          the largest (now-virtual) software meetups in the Twin Cities area.
        </BioSegment>
        <BioSegment>
          Previously, I was a research software engineer for digital agency{" "}
          <BioLink href="https://www.space150.com">space150</BioLink>, and
          helped build outage processes and identity management systems for the{" "}
          <BioLink href="https://umn.edu">University of Minnesota</BioLink>.
        </BioSegment>
      </div>
    </div>
  </section>
);

export default () => (
  <Layout>
    <Intro />
  </Layout>
);
