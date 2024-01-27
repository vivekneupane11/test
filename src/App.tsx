import UIRender from "reactjs-editor";
import "./App.css";

function App() {
  return (
    <div id="test" className="App">
      <UIRender
        htmlContent={`
<main>
<header class="header">
<h1>About Us</h1>
</header>
<section class="section">
<h2>Our Mission</h2>
<p>We are dedicated to providing the best solutions for our customers. Our mission is to innovate and deliver high-quality products and services that exceed customer expectations, while maintaining a strong commitment to sustainability and social responsibility.</p>
</section>
<section class="section">
<h2>Our Team</h2>
<p>Meet the passionate individuals who make up our team. We are a diverse group of professionals with a shared vision and dedication to excellence. Each member brings unique skills and perspectives, contributing to our success and growth as a company.</p>
</section>
<section class="section">
<h2>Our Values</h2>
<p>We believe in integrity, innovation, and customer satisfaction. These values guide everything we do, from product development to customer service. We are committed to building long-term relationships with our customers based on trust, transparency, and mutual respect.</p>
</section>
<section class="section">
<h2>Our History</h2>
<p>Established in 2005, our company has grown from a small startup to a leading provider of innovative solutions in the industry. Over the years, we have overcome challenges, adapted to market changes, and continuously evolved to meet the needs of our customers.</p>
</section>
<section class="section">
<h2>Our Achievements</h2>
<p>We are proud of our achievements and milestones. From winning industry awards to expanding our global reach, each success motivates us to strive for excellence and push the boundaries of innovation further. We are excited about the future and the opportunities ahead.</p>
</section>
<footer class="footer">
<p>&copy; 2024 Your Company. All rights reserved.</p>
</footer>
</main>`}
      ></UIRender>
    </div>
  );
}

export default App;
