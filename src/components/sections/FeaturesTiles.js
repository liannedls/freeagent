import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "My professional experiences by attribute",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-02.svg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Action-orientation & Outcomes-focus
                  </h4>
                  <p className="m-0 text-sm">
                    I strive for results. I base the quality of my work on
                    results compared to my objective. In my current and past
                    roles I have been an enthusiastic user of tools used to plan
                    and track project progress (Jira, Monday.com, Azure Devops).
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Resilience</h4>
                  <p className="m-0 text-sm">
                    I have worked in many different work environments, some of
                    which have been very challenging. I’ve shown resilience by
                    persevering in these environments (tight deadlines,
                    challenging work, and changing team structure) and following
                    through on my responsibilities, even when I felt
                    underprepared.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Creativity</h4>
                  <p className="m-0 text-sm">
                    I’ve had to employ creative solutions in many professional
                    environments. In my positions writing software I employed
                    logic based creative solutions to build novel programs. As
                    well, I have utilized my creativity when designing a UI for
                    a custom tablet.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>

                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Humility & Empathy</h4>
                  <p className="m-0 text-sm">
                    I strive to foster empathy and humility in my life and
                    career goals. This has been extremely important when working
                    with others, collegues and clients, since it allows me to
                    understand others better and build better relationships.
                    Practicing empathy in my experiences working with clients
                    has allowed me to see their perspective which in turn
                    allowed me to truely, and more efficiently, solve their
                    problems.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Passion</h4>
                  <p className="m-0 text-sm">
                    I have a passion for technology and impactful projects. I
                    want to work where I feel the work is innovative and making
                    a positive change. Some of my past work experiences include
                    working for the CRTC’s spam reporting center, working for a
                    makerspace running workshops in remote indigenous
                    communities, and working in a solar research lab on emerging
                    solar technologies. In my personal time, I enjoy building
                    personal projects, participating in hackathons, and
                    developing my skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Quick learning</h4>
                  <p className="m-0 text-sm">
                    I’ve experienced many work environments where learning
                    quickly was critical. My first job out of university I
                    joined a start-up, where I needed to learn and contribute
                    quickly. This experience was invaluable to my later
                    government positions. In my relatively short time at the
                    CRTC, working in a small team of developers (3, including
                    myself), I learned the infrastructure, developed features
                    and implemented key tools. In my two positions held within
                    the government I have received feedback that I learn and
                    contribute quickly.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-01.svg")}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Courage</h4>
                  <p className="m-0 text-sm">
                    Courage in professional environments is important. In
                    particular, giving your input and making educated decisions
                    have a lasting impact. I demonstrated courage in my current
                    role where I am consistently recommending an action plan in
                    a software infrastructure where there is no clear
                    methodology (ArcGIS Enterprise). This requires me, once I
                    have formed an educated opinion about the best course of
                    action, to implement these actions and take ownership of the
                    results.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Reflectiveness</h4>
                  <p className="m-0 text-sm">
                    Reflection has been key in making critical decisions in my
                    previous professional positions. As well, reflection was
                    essential when solving tough problems. In one of my past
                    experiences, as a research assistant, I was analyzing solar
                    irradiance data and reflection allowed me to find the cause
                    of anomalies in our data. In another professional position,
                    my current one, reflection allowed me to decide on the best
                    course of action for data management within our restrictive
                    system.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Curiosity</h4>
                  <p className="m-0 text-sm">
                    My curiosity demonstrates itself best in professional
                    capacities by my need to ask why and how. In all my previous
                    positions where I worked with legacy projects, I always
                    asked myself “Why was it made like this”. Asking these
                    questions has allowed me to better understand why certain
                    decisions were made. This has then allowed me to make
                    suggestions based on how our current environment changed
                    from when the legacy system was implemented. Also asking
                    myself, “How does this work”, has been key to understanding
                    the perspective of end users.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-03.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Team-orientation</h4>
                  <p className="m-0 text-sm">
                    In my previous positions I have worked in a variety of
                    teams. Collaboration and teamwork with a focus on collective
                    effort rather than individual tasks are, in my opinion, key
                    to a successful workplace. Having worked with many different
                    people and in many different group dynamics, a priority of
                    mine is to always to develop positive relations with others.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-06.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Problem-solving</h4>
                  <p className="m-0 text-sm">
                    From my free time spent playing chess, to my decision to
                    study engineering and my passion for software development, I
                    have always enjoyed problem solving. I am most engaged when
                    problem solving and in my professional experiences have
                    found this very rewarding. In my current position I problem
                    solve daily, from system design to operational emergencies.
                    I have experience in multiple positions which employed
                    extensive problem solving.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-tile-icon-04.svg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Persuasion</h4>
                  <p className="m-0 text-sm">
                    When providing technical advice, you often need to employ
                    persuasion to convince clients that your solution is the
                    best. This is especially important when the solution you
                    provide them may seem undesirable (cost, different process,
                    etc). In my current role, where I work primarily with
                    clients, I often have to communicate effectively to persuade
                    them that my suggestion is valuable and worth implementing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
