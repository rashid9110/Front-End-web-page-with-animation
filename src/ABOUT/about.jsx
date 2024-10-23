import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
    <section className="about">
      <div className="about-content">
        <h1 className="about-title">About Our Shopping App</h1>
        <p className="about-description">
          Welcome to our shopping app, where we bring you the best deals on your
          favorite products. Enjoy seamless shopping with our user-friendly
          interface and quick delivery services.
        </p>

        <div className="token-container">
          <div className="token">
            <img src="/images/delivery.webp" alt="Token 1" />
            <h3>Fast Delivery</h3>
            <p>Your orders arrive at your doorstep quickly and efficiently.</p>
          </div>
          <div className="token">
            <img src="/images/product.webp" alt="Token 2" />
            <h3>Best Prices</h3>
            <p>We offer competitive prices to ensure you get the best deals.</p>
          </div>
          <div className="token">
            <img src="/images/telephone.jpg" alt="Token 3" />
            <h3>24/7 Support</h3>
            <p>Our support team is here to assist you at any time.</p>
          </div>
        </div>

        <div className="video-container">
          <h2>Watch Our Introduction Video</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/your-video-id" // Replace with your YouTube video ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        
      </div>
    </section>
    <div  className="text-div">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, ullam!
          Ut, natus aut sint facere ullam placeat deserunt voluptatum odio
          incidunt. Similique, odit delectus voluptatem, labore aspernatur
          asperiores doloremque itaque consequuntur enim incidunt earum
          repellendus, animi nesciunt inventore assumenda? Quidem molestias,
          corporis cum, distinctio ratione repellat, ipsum error delectus eius
          quia rem inventore. Quibusdam dolorem quidem error sit voluptas
          repellendus nesciunt odit, aperiam eveniet expedita numquam iure
          adipisci natus harum magnam iste facilis? Aut harum sunt qui fugiat
          earum, ad nostrum et animi architecto repellat aperiam provident
          facere illo, dicta tempore maiores assumenda minima amet,
          exercitationem dolorum quo? Assumenda modi, deserunt, eveniet magnam
          similique omnis reprehenderit exercitationem dolore, illo ullam
          dolorum ut quod recusandae. Sed doloremque excepturi distinctio
          praesentium animi atque a iusto ipsa consequatur magnam quas ab
          nesciunt molestiae, quisquam rerum tempore cum odit. Rerum eos tempore
          sunt ea tenetur ipsa beatae ratione architecto harum aliquam suscipit,
          dignissimos ipsum magnam praesentium officia. Numquam sit repellat
          officiis libero reprehenderit ad cum blanditiis, ut sint quia iste
          illo, quo doloremque. Ducimus facere facilis odio, neque excepturi
          molestias nostrum nesciunt quisquam explicabo ratione sit ipsum. Ad
          nisi ratione odit excepturi rem error laborum similique nemo hic culpa
          illum tempora, ipsum vel adipisci cupiditate, nam atque sed. Corrupti
          provident atque soluta! Dolor commodi assumenda temporibus aspernatur
          perferendis beatae, libero veniam, modi dolorem mollitia quas. At
          beatae aliquam amet! Sit harum a optio in fuga, dolore doloribus
          quibusdam! Reiciendis modi odit laboriosam praesentium fugit natus
          consequatur animi facere, debitis quo. Eligendi, voluptatum molestiae!
          Harum, sequi unde officiis perspiciatis officia, quisquam sit
          consectetur esse laboriosam odio quo, reiciendis vel illo veniam earum
          quod! Saepe, perferendis ullam quas, necessitatibus rerum architecto
          tenetur molestiae cumque omnis ex, alias officia quae nam doloremque
          et modi delectus deleniti neque odio quam blanditiis magni quo ut!
          Amet commodi ullam sequi officia harum, nisi aliquid consequuntur in
          repellendus culpa ducimus a facilis quam sed fugiat consequatur
          quisquam, necessitatibus ratione itaque nam omnis obcaecati aspernatur
          perferendis nostrum. Illo modi quia ipsam quidem eius cum tenetur
          impedit odio. Reprehenderit repellat at esse dignissimos, eveniet
          commodi repudiandae sed consequuntur, quia amet eligendi provident
          necessitatibus. Quia, quisquam fugiat! Ipsum vel consequuntur nobis
          omnis iusto cupiditate. Quia, dolore. Voluptate voluptas alias minima
          quos sed adipisci est beatae sit ullam nobis cupiditate eaque tempora,
          neque, possimus nihil laboriosam labore vitae consectetur odio dolore.
          Cumque repudiandae fugiat natus, quo a quas quaerat commodi saepe
          accusamus tempore voluptates aut.
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

export default About;
