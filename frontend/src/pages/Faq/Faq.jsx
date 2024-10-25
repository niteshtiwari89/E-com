import React from "react";
import "./Faq.css";

const FAQPage = () => {
    return (
        <div className="faq-container">
            <h1 className="faq-title">Frequently Asked Questions (FAQ)</h1>

            <div className="faq-item">
                <h2>1. How do I place an order?</h2>
                <p>
                    To place an order, browse through our product categories, select the items you want, choose the size/quantity, and click "Add to Cart." Once you're ready, click on the cart icon in the top-right corner and proceed to checkout. Enter your delivery details within Nagpur city and complete your purchase by following the payment instructions.
                </p>
            </div>

            <div className="faq-item">
                <h2>2. What areas do you deliver to?</h2>
                <p>We currently only deliver within Nagpur city. If you are located outside Nagpur, unfortunately, we cannot process your order at this time.</p>
            </div>

            <div className="faq-item">
                <h2>3. What payment methods do you accept?</h2>
                <p>We accept the following payment methods:</p>
                <ul>
                    <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                    <li>UPI Payments</li>
                    <li>Net Banking</li>
                    <li>Cash on Delivery (available within Nagpur city)</li>
                </ul>
            </div>

            <div className="faq-item">
                <h2>4. How can I track my order?</h2>
                <p>Once your order has been shipped, we will send you a tracking number via email or SMS. You can use this to track the delivery status on our website or through the delivery partner’s tracking service.</p>
            </div>

            <div className="faq-item">
                <h2>5. What is your return policy?</h2>
                <p>We offer a 15-day return policy for items purchased within Nagpur. Products must be in their original condition with tags intact. For more details, please visit our Returns & Refunds page or contact our local support team for assistance.</p>
            </div>

            <div className="faq-item">
                <h2>6. How long does delivery take?</h2>
                <p>We aim to deliver orders within 1-2 business days within Nagpur city. In some cases, same-day delivery is available depending on your location and the time of your order.</p>
            </div>

            <div className="faq-item">
                <h2>7. Can I cancel or modify my order?</h2>
                <p>Once an order is placed, it cannot be modified. However, you can cancel your order within 12 hours of placing it, provided it has not been shipped yet. Please contact our customer service team immediately with your order details.</p>
            </div>

            <div className="faq-item">
                <h2>8. Is there a delivery fee?</h2>
                <p>We offer free delivery on orders above ₹500 within Nagpur city. For orders below ₹500, a nominal delivery charge will be applied at checkout.</p>
            </div>

            <div className="faq-item">
                <h2>9. What if I receive a damaged or wrong product?</h2>
                <p>If you receive a damaged or incorrect product, please contact our customer service team within 48 hours of delivery. We will arrange for a replacement or refund at no additional cost to you.</p>
            </div>

            <div className="faq-item">
                <h2>10. Are my personal and payment details secure?</h2>
                <p>Yes, your personal and payment details are secure. Our website uses SSL encryption, and we comply with all necessary data protection regulations.</p>
            </div>

            <div className="faq-item">
                <h2>11. How can I contact customer support?</h2>
                <p>You can reach our customer support team via email at support@nagpurstore.com or call us at (123) 456-7890. Our support is available Monday to Saturday, 9 AM to 7 PM.</p>
            </div>

            <div className="faq-item">
                <h2>12. Do you offer any discounts or local promotions?</h2>
                <p>Yes, we frequently offer discounts and promotions exclusive to our Nagpur-based customers. Sign up for our newsletter and follow us on social media to stay updated on the latest local offers.</p>
            </div>
        </div>
    );
};

export default FAQPage;
