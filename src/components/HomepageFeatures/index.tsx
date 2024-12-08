import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Image: ImageData;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Regular Routine",
    Image: require("@site/static/img/main_1.jpg").default,
    description: <></>,
  },
  {
    title: "Keep Studying",
    Image: require("@site/static/img/main_2.jpg").default,
    description: <></>,
  },
  {
    title: "Never Give-up",
    Image: require("@site/static/img/main_3.jpg").default,
    description: <></>,
  },
];

function Feature({ title, Image, description }: FeatureItem) {
  console.log(Image);
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Image} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
