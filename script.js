const WHATSAPP_NUMBER = "351936709589";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const cards = document.querySelectorAll(".card");

cards[0].href = waLink(
  "Hi! I'm interested in a Custom Plan. Can you tell me more details?"
);

cards[1].href = waLink(
  "Hi! I'm interested in the Essential Check. Can you tell me how to start?"
);

cards[2].href = waLink(
  "Hi! I'm interested in the Comfort Plan. Can you tell me how to start?"
);

cards[3].href = waLink(
  "Hi! I'm interested in the Premium Home Watch. Can you tell me how to start?"
);


/* FAQ DATA */
const faqs = [
  {
    q: "What is a “Home Watch” service?",
    a: "A Home Watch service is a professional property check for homes that are empty for weeks or months. I visit the property on a schedule and send a photo report to confirm everything is safe and in good condition."
  },
  {
    q: "What areas do you cover?",
    a: "I’m based in Ericeira and cover Ericeira + nearby areas (Mafra, Ribamar, Santo Isidoro, Carvoeira, etc.). If your property is outside this area, I can still help — travel fees may apply."
  },
  {
    q: "How often do you visit the property?",
    a: "You can choose: Monthly (1 visit/month), Bi-weekly (2 visits/month), Weekly (4 visits/month). One-off visits are also available."
  },
  {
    q: "What do you check during a visit?",
    a: "Each visit includes a visual inspection, such as: doors and windows, signs of leaks or humidity, unusual smells, general condition, ventilation (when safe), mail collection (if requested). After the visit, you receive photos + a short report."
  },
  {
    q: "Do you do repairs or maintenance?",
    a: "No. I do not perform repairs. However, I can coordinate and be present for technicians (electrician, plumber, handyman, etc.) if you request it."
  },
  {
    q: "Can you hold a spare key?",
    a: "Yes. Keyholding is included for monthly clients. Keys are stored securely and never shared with anyone without your written permission (except in emergencies to protect the property)."
  },
  {
    q: "What happens if you find a problem?",
    a: "If I notice an issue (humidity, leaks, damage, etc.) I will: document it with photos, contact you immediately, recommend the next step (technician, emergency visit, etc.). No action is taken without your approval (unless urgent to prevent damage)."
  },
  {
    q: "Can you be present for deliveries or technicians?",
    a: "Yes. This is one of the most requested services. I can be present for deliveries (furniture, appliances, parcels), technicians, and scheduled maintenance. This is charged as an extra service."
  },
  {
    q: "Do you provide emergency call-outs?",
    a: "Yes. Emergency call-outs are available, depending on availability. Examples: storms / water infiltration, alarm triggered, urgent property access needed."
  },
  {
    q: "Do you offer “Arrival Preparation” before I come to Portugal?",
    a: "Yes (optional). I can prepare the home before your arrival, for example: open the property and air it, check water/electricity, ensure everything is ready and safe, basic pre-arrival check."
  },
  {
    q: "How do I pay?",
    a: "Payment is simple and can be done via MBWay or bank transfer. Monthly plans are paid in advance."
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel with 7 days notice before the next billing period."
  },
  {
    q: "Will you share my address or property photos?",
    a: "No. All information, photos, and details are private and never shared with third parties."
  },
  {
    q: "Are you insured?",
    a: "This service does not replace property insurance. Clients are strongly advised to maintain full home insurance coverage."
  },
  {
    q: "How do I get started?",
    a: "Just message me with: property location, preferred plan (monthly / bi-weekly / weekly), when you’d like the first visit. I’ll confirm availability and send the agreement."
  }
];

/* Render FAQ */
const faqList = document.getElementById("faqList");

faqs.forEach((item) => {
  const div = document.createElement("div");
  div.className = "faq-item";

  const h3 = document.createElement("h3");
  h3.textContent = item.q;

  const p = document.createElement("p");
  p.textContent = item.a;

  div.appendChild(h3);
  div.appendChild(p);
  faqList.appendChild(div);
});

/* FAQ Modal */
const faqBtn = document.getElementById("faqBtn");
const faqModal = document.getElementById("faqModal");
const closeFaq = document.getElementById("closeFaq");

faqBtn.addEventListener("click", () => {
  faqModal.classList.remove("hidden");
});

closeFaq.addEventListener("click", () => {
  faqModal.classList.add("hidden");
});

faqModal.addEventListener("click", (e) => {
  if (e.target === faqModal) faqModal.classList.add("hidden");
});

/* FAQ WhatsApp button */
document.getElementById("faqWhatsapp").href = waLink(
  "Hi! I have a question about West Coastal Home Care."
);

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function (e) {

    // Se ainda NÃO está rodado → faz flip e impede link
    if (!card.classList.contains('is-flipped')) {
      e.preventDefault();

      // Fecha outros cartões
      document.querySelectorAll('.card').forEach(c => {
        if (c !== card) {
          c.classList.remove('is-flipped');
        }
      });

      card.classList.add('is-flipped');
    }

    // Se já está rodado → não faz preventDefault
    // deixa o link abrir normalmente
  });
});
