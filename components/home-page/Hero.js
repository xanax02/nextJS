import Image from "next/image";

import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="Photo of Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Max</h1>
      <p>
        I blog about web development -espeacially front end framework like React
        and NextJs.
      </p>
    </section>
  );
};

export default Hero;
