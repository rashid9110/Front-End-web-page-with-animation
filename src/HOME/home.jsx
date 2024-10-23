import React from "react";
import "./home.css";

const Home = () => {
  const Home = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <main className="hero container">
        <div className="content">
          <h1>SHOP THE LATEST SHOES FOR EVERY OCCASION</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>

          <div className="shopping">
            <p className="shopingApp">Also Available On</p>

            <div className="brand-icons">
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/amazon.png" alt="amazon-logo" />
              </a>
              <a
                href="https://www.flipkart.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/flipkart.png" alt="flipkart-logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="image1">
          <div className="image">
            <img src="/images/hero-image.png" alt="image" />
          </div>
        </div>
      </main>
      <div className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        consectetur iste aliquid facere possimus tenetur ab aspernatur quia
        numquam. Nobis a laborum ipsa illum maiores dolorem, libero omnis
        voluptate sint at? Omnis, porro corrupti! Eligendi impedit dolores animi
        sunt dolorum mollitia minus iste cupiditate assumenda optio magnam quod
        culpa odio provident unde fugiat voluptates enim eum quibusdam explicabo
        nulla, quos officiis? Libero officia consequatur provident sequi illum
        repellat. Reprehenderit ipsa dolorem deserunt distinctio inventore vero
        mollitia placeat quaerat in dolore ducimus enim quis similique, libero
        nostrum delectus expedita nemo pariatur quam id modi consequatur hic cum
        nulla? At commodi eveniet culpa dolorum explicabo, consequatur, placeat
        nostrum dolorem architecto quod hic quo? Maiores voluptatibus
        doloremque, suscipit quo quae deserunt! Optio non aperiam
        exercitationem, iusto dignissimos a officiis sint necessitatibus natus
        quae, commodi, quibusdam sit temporibus tenetur totam sequi incidunt
        consectetur? Assumenda inventore modi ratione nam sit consequatur velit
        quam neque nesciunt distinctio nisi nemo, quas vel praesentium amet
        doloremque deserunt error! Quis alias eius cupiditate fuga earum
        molestiae dignissimos nostrum est quisquam iusto, placeat aliquid
        excepturi esse nemo iste quaerat? Debitis voluptatum praesentium iure,
        consequuntur quos, vel voluptas numquam, explicabo ducimus a
        repellendus? Delectus harum sint fugiat magnam esse iste repellendus!
        Perspiciatis laborum repellendus dolorum, ducimus exercitationem ab
        repellat necessitatibus dolore nulla quos dolor modi enim ipsum vero
        alias, quisquam sequi numquam corrupti, quia ratione dolores similique
        fuga iste? Culpa omnis nam quaerat quo, nihil tempore aliquam labore est
        vel maiores maxime accusantium tempora laboriosam porro asperiores,
        atque earum sunt? Dolores voluptas eveniet ex voluptatum, placeat
        voluptatibus aut iste! Beatae, sapiente laboriosam aperiam illum dolorum
        odit voluptatem quidem voluptates sint voluptatum, iusto possimus,
        nesciunt nemo et cupiditate neque nihil. Autem, ipsam adipisci similique
        ullam sed dolores quo maxime, a quae sint eaque fugiat hic vitae?
        Mollitia nostrum deleniti rerum ipsa neque, pariatur cumque voluptates
        labore aperiam perspiciatis, unde vero voluptatibus ducimus placeat odio
        delectus illum minus quisquam dignissimos nobis maxime repudiandae.
        Doloremque, nostrum perspiciatis tempora suscipit natus aliquam unde
        eius dolorum voluptas hic laborum est voluptates? Sint, doloremque vero
        facilis nobis excepturi ad voluptate saepe illo, quam facere numquam
        animi adipisci accusamus, nemo voluptatibus commodi! Earum doloribus
        illo porro cum nihil nulla eum debitis asperiores temporibus ad, esse,
        reiciendis ipsam? Ullam quas adipisci sequi rerum unde impedit mollitia
        recusandae tenetur beatae placeat, saepe ab est soluta cum quibusdam
        dolorum, officia consequatur obcaecati quis blanditiis cumque! Delectus
        ab repellat omnis dolor, fugit voluptate facilis provident voluptatum
        nostrum odit repudiandae eveniet in! Aliquid nostrum quae ea similique
        placeat necessitatibus error, eveniet nam quaerat officia porro enim
        dolores, commodi cum optio consectetur dolor molestias tenetur nisi ab
        excepturi. Obcaecati et autem excepturi cum eveniet, atque esse incidunt
        laudantium. Cumque, recusandae adipisci id quaerat distinctio fuga
        molestiae corporis harum commodi dolorem expedita unde doloribus vel
        soluta architecto nihil quis maiores placeat dicta. Blanditiis ducimus
        sapiente earum perspiciatis eius consectetur consequatur recusandae
        ratione. Vitae dicta dolorum deserunt quia repellat sit similique. Quas,
        a laborum iure nulla cum aperiam, velit blanditiis, autem aut quo
        deleniti perferendis reprehenderit!
      </div>
      <div className="footer">
        <footer>
          <p>© 2024 Md Rashid Alam. All rights reserved.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
            Modi vero natus veniam optio debitis aspernatur soluta vel nesciunt
            necessitatibus.
            </p>
            <div className="image-footer">
          <img src="/images/amazon.png" alt="image" />
          <img src="/images/flipkart.png" alt="image" />
          <img src="/images/brand_logo.png" alt="image" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
