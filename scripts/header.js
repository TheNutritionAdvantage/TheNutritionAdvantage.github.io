let appHeader = `
    <div class="header-container">
        <div class="logo-section">
            <img src="assets/apple.jpeg" alt="The Nutrition Advantage" class="logo">
            <h1>The Nutrition Advantage</h1>
        </div>
        <div class="social-icons">
            <a href="https://www.facebook.com/CatherineOhalloranRD/" target="_blank" class="social-icon">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/catherine.ohall/" target="_blank" class="social-icon">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/cohalloranRD?lang=en" target="_blank" class="social-icon">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/catherine-o-halloran-a2332b6/" target="_blank" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
    </div>
    <div class="nav-container">
        <nav>
            <ul>
                <li><a href="index.html#landing">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </div>
`;

let appFooter = `
    <p>&copy; 2025 The Nutrition Advantage. All rights reserved.</p>
    <div class="contact-info">
        <p>Email: cathy.ohalloran@sympatico.ca</p>
        <p>Phone: (416) 441-1647</p>
    </div>
`

document.getElementById("header").innerHTML = appHeader;
document.getElementById("footer").innerHTML = appFooter;