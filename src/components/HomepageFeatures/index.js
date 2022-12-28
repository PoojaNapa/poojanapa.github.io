import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import logo from "../../../static/learn_logo.png"

const FeatureList = [
  {
    title: 'Learn New Concepts',
    // img_link: logo,    
    Svg: require("@site/static/home.svg").default,
    description: (
      <>
        Summaries, Flowcharts
      </>
    ),
  },
  {
    title: 'Interesting Write-ups',
    // img_link: logo,    
    Svg: require("@site/static/write.svg").default,
    description: (
      <>
        Blog
      </>
    ),
  },
  {
    title: 'Course Materials',
    // img_link: logo,    
    Svg: require("@site/static/home.svg").default,
    description: (
      <>
        Notes, Projects
      </>
    ),
  },  
];

function Feature({Svg, title, description}) {
  // function Feature({img_link, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {
        // <img_link className = {styles.featureSvg} role = "img"/>
        /* {<img src = {img_link} className = {styles.featureSvg} /> */
        /* {<src className = {styles.featureSvg} role = "img"/> */
        <Svg className={styles.featureSvg} role="img" />
        }
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
