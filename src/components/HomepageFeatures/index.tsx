import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Effortless Development",
        Svg: require("@site/static/img/rocket.svg").default,
        description: (
            <>
                Our framework is designed to simplify your development process,
                allowing you to get your project off the ground with ease and
                speed.
            </>
        ),
    },
    {
        title: "Streamlined Functionality",
        Svg: require("@site/static/img/scissors.svg").default,
        description: (
            <>
                Focus on what really matters with our framework's streamlined
                features, freeing up your time to focus on building the core
                functionality of your project.
            </>
        ),
    },
    {
        title: "Flexible and Adaptable",
        Svg: require("@site/static/img/wrench.svg").default,
        description: (
            <>
                Powered by vanilla PHP, our framework is fully customizable and
                can be easily adapted to suit your specific needs, allowing you
                to create your project your way.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
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
