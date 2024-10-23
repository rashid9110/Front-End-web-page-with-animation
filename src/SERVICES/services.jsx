// Services.js
import React from "react";
import "./Services.css"; // Import the CSS file

const servicesData = [
  { id: 1, title: "Fast Delivery", imgSrc: "/images/fast-delivary.jpg" },
  { id: 2, title: "Best Prices", imgSrc: "/images/best-price.jpg" },
  { id: 3, title: "Quality Products", imgSrc: "/images/Quality.jpg" },
  { id: 4, title: "Customer Support", imgSrc: "/images/customer-support.jpg" },
  { id: 5, title: "Easy Returns", imgSrc: "/images/easy-returns.jpg" },
  { id: 6, title: "Secure Payments", imgSrc: "/images/secure-payments.jpg" },
];

const Services = () => {
  return (
    <>
    <div className="services-section">
      <div className="services-header">
        <h1 className="animated-header">Our Services</h1>
        <p className="animated-text">
          We offer a variety of services to make your shopping experience
          enjoyable.
        </p>
      </div>
      <div className="services-tokens">
        {servicesData.map((service) => (
          <div className="service-token" key={service.id}>
            <img
              src={service.imgSrc}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
      <div className="services-image-section">
        <img
          src="/images/services-image.jpg"
          alt="Shopping App"
          className="services-image"
        />
      </div>

      <div className="service-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit libero
        perferendis aliquid voluptates cumque quos totam? Fuga magnam qui sit
        earum saepe officiis, vero quia perspiciatis similique nisi
        exercitationem corporis et dolorem modi rem itaque. Consequatur maxime
        earum aperiam accusamus non minima corrupti magni id optio, voluptatum
        ex cum iusto doloribus similique. Dolorum quos amet placeat repellat?
        Minus, facilis! Harum, quisquam reiciendis voluptatibus rerum nulla
        recusandae repudiandae obcaecati sit maiores nam ad facilis optio
        temporibus architecto neque commodi! Libero, id. Expedita soluta natus
        nihil laborum molestiae, et atque, porro, labore qui alias blanditiis
        neque. Porro suscipit quasi illum quam omnis iure recusandae itaque,
        totam dignissimos sint magnam rem soluta. Id eveniet consectetur beatae
        libero nemo quaerat incidunt ipsa earum molestias minus pariatur
        suscipit nesciunt animi iure eligendi qui, at quam mollitia vel nam
        magni quisquam. Sequi sunt repellat eius hic, exercitationem perferendis
        perspiciatis, cupiditate aperiam, provident tenetur facilis accusantium
        eaque facere officiis voluptatem omnis atque! Qui corporis, rerum magni
        inventore accusamus cum totam modi dignissimos dolores, repellat ad amet
        aut est recusandae perferendis numquam. Cumque minus, est natus
        repellendus dolore nulla beatae corporis dicta, enim incidunt animi
        deserunt. Maxime ducimus, corrupti voluptas quaerat inventore odio.
        Obcaecati mollitia, nobis illo, excepturi aperiam dolores, accusamus
        eaque ratione dolorum fuga laboriosam eos. Cupiditate voluptatibus enim
        at? Mollitia laborum delectus expedita enim debitis tenetur praesentium
        deleniti adipisci excepturi necessitatibus quam iure neque natus
        similique dolorem, soluta, nemo aspernatur dignissimos atque eveniet
        illum saepe. Autem, doloribus assumenda nemo ipsum, at doloremque
        similique provident ullam adipisci maiores nesciunt aliquid hic unde
        veritatis ratione sapiente ducimus dicta labore voluptatem dolor minima
        dolorum reiciendis. Voluptatum labore magni nobis nihil! Ipsum amet
        nisi, magni quod similique ab voluptatum assumenda dignissimos dolore in
        perferendis labore quisquam ullam possimus sint sed laborum earum.
        Voluptas, commodi porro. Explicabo magnam aspernatur molestias, hic in
        recusandae deleniti ex expedita ab qui, repellendus ut. Alias repellat
        enim, nisi dolores quaerat ullam deserunt tempore iste eum voluptates
        illo odio quae provident temporibus ad eaque ut. Animi accusamus debitis
        asperiores dolor ad eligendi maxime nemo optio, perspiciatis pariatur
        odit ipsum sapiente iste inventore libero voluptatibus omnis provident
        quisquam aut! Molestiae hic soluta debitis ullam numquam aliquid odit,
        sunt minus necessitatibus enim, saepe iure blanditiis odio fuga. Est
        amet consectetur magnam nisi libero. Veritatis, corporis ex esse, odit
        voluptates harum placeat provident ducimus dolore eveniet quidem modi
        optio quaerat atque, laborum iusto id recusandae! Praesentium nulla
        distinctio dignissimos? Labore est tempore unde eligendi vero molestias
        nesciunt non veniam. Earum ea ad obcaecati est cum, quisquam corrupti
        molestiae rerum temporibus nostrum sapiente neque asperiores, assumenda
        dolorem explicabo dicta eos, saepe debitis qui voluptates
        exercitationem. Nam, tenetur amet fugiat mollitia consequuntur nihil
        doloremque ut magnam veritatis architecto iste ab vero est? Rerum, esse?
        Voluptatem tempore autem libero voluptate molestiae! Sapiente harum
        ipsam placeat ducimus saepe quibusdam sunt nisi illum. Quae molestiae
        illum expedita error dicta placeat sunt fugiat quisquam atque soluta
        distinctio, ullam earum, omnis quas sed fugit et praesentium quia porro
        magni quam, accusamus ex consequuntur. Cupiditate, perspiciatis dolorum?
      </div>
      
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

export default Services;
