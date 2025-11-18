
// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, 
        behavior: "smooth",
      });
    }
  });
});

// 2. Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerHTML = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

backToTop.style.position = "fixed";
backToTop.style.bottom = "20px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px 15px";
backToTop.style.borderRadius = "50%";
backToTop.style.border = "none";
backToTop.style.background = "#0d6efd";
backToTop.style.color = "#fff";
backToTop.style.fontSize = "18px";
backToTop.style.cursor = "pointer";
backToTop.style.display = "none";
backToTop.style.zIndex = "999";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 3. Navbar Active State on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// 4. Card Hover Animation
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.02)";
    card.style.transition = "0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// 5. Simple Contact Form Validation
const contactForm = document.querySelector("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.querySelector("[name='name']").value.trim();
    const email = this.querySelector("[name='email']").value.trim();
    const message = this.querySelector("[name='message']").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill out all fields.");
      return;
    }
    alert("✅ Message sent successfully!");
    this.reset();
  });
}

// 6. Add to Cart Button + Success Message
const cartButtons = document.querySelectorAll(".addCart");

cartButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        let data = new FormData();
        data.append("name", btn.getAttribute("data-name"));
        data.append("price", btn.getAttribute("data-price"));
        data.append("img", btn.getAttribute("data-img"));

        fetch("add_to_cart.php", {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(result => {
            if(result === "success") {
                alert("🛒 Item added to cart!");
            }
        });
    });
});



    // Remove after 2.5 seconds
    setTimeout(() => {
      message.remove();
    }, 2500);
  