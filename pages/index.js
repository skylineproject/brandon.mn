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
        className={cx("mx-auto", "max-w-xs", "md:max-w-sm")}
        src="https://s3.amazonaws.com/brandon.mn/me.jpeg"
        alt="Brandon Johnson"
      />
    </div>
    <div className={cx("px-12", "py-4", "md:self-center")}>
      <BioLede />
      <div className={cx("py-6")}>
        <BioSegment>
          I'm a bit of a hodge-podge. In the past year, I've helped clients
          build RFID access control systems, prototype social networks, deploy
          hybrid mobile apps, and improve their legacy React codebases. Your
          kind of hodge-podge?{" "}
          <BioLink href="mailto:brandon@leftblank.co">Let's talk.</BioLink>
        </BioSegment>
        <BioSegment>
          Some folks I've worked with:
          <ul className="pl-4 pb-4 list-disc">
            <li>
              <BioLink href="https://plakeside.com">PlakeSide</BioLink>
            </li>
            <li>
              <BioLink href="https://thegeminisociety.com">
                The Gemini Society
              </BioLink>
            </li>
            <li>
              <BioLink href="https://www.instagram.com/p/CE93KSulCSH/">
                Haroldson Art &amp; Design
              </BioLink>
            </li>
          </ul>
          <a
            className="bg-hexinary px-2 py-1 font-bold text-primary hover:text-quinary"
            target="blank"
            rel="noopener noreferrer"
            href="https://www.notion.so/d94c74f48de944ffbbdb8af920a6599e?v=efd819ac6757487f8302be4a882e559a"
          >
            see case studies
          </a>
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
