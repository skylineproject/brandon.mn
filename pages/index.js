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
          I run <BioLink href="http://leftblank.co">Left Blank</BioLink>, a
          creative tech partner for boutique agencies, event producers, and
          other clients who need robust, quick-turnaround web and mobile apps.
        </BioSegment>
        <BioSegment>
          I also act as a partner at{" "}
          <BioLink href="https://plakeside.com">PlakeSide</BioLink>, a software
          studio for the live event industry.
        </BioSegment>
        <BioSegment>
          I am on the board of{" "}
          <BioLink href="https://javascriptmn.com">JavaScriptMN</BioLink> and{" "}
          <BioLink href="https://serverless.mn">ServerlessMN</BioLink>, and help
          out with <BioLink href="https://mplsjrdevs.com">Mpls Jr Devs</BioLink>
          .
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
