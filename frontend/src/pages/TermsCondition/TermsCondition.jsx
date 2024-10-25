import React from 'react';
import './TermsCondition.css'

const TermsAndCondition = () => {
    return (
        <main className="container mx-auto p-4 bg-white">
            <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
            {/* <p className="text-sm mb-4">Last Updated: August 1, 2023</p> */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="mb-4">
                    Welcome to [Your Website Name], an ecommerce website operated by [Your Company Name]. 
                    These Terms and Conditions outline the rules and guidelines for using our website and purchasing 
                    products from us. By accessing our website and/or making a purchase, you agree to be bound by 
                    these Terms and Conditions.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Scope of Agreement</h2>
                <p className="mb-4">
                    These Terms and Conditions apply to all users of our website, including but not limited to browsers, 
                    customers, merchants, and/or contributors of content. Please read these Terms and Conditions carefully 
                    before using our website or making a purchase.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Account Registration</h2>
                <p className="mb-4">
                    To make a purchase on our website, you must register for an account. By registering for an account, 
                    you agree to provide accurate and complete information about yourself. You are responsible for maintaining 
                    the confidentiality of your account and password, and for all activities that occur under your account.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Product Information</h2>
                <p className="mb-4">
                    We strive to provide accurate and up-to-date product information on our website. However, we cannot 
                    guarantee that product descriptions, prices, or availability are accurate or complete. We reserve the 
                    right to correct any errors or inaccuracies at any time.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Ordering and Payment</h2>
                <p className="mb-4">
                    To make a purchase, you must follow the ordering process outlined on our website. You must provide valid 
                    payment information, and you agree to pay for all products ordered through our website. We accept [list 
                    payment methods, e.g. credit cards, PayPal, etc.]. We reserve the right to refuse or cancel any order at any time.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Shipping and Delivery</h2>
                <p className="mb-4">
                    We will ship products to the address you provide during the ordering process. You are responsible for ensuring 
                    that the shipping address is accurate and complete. We will not be responsible for any delays or losses caused 
                    by incorrect or incomplete shipping information.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Returns and Refunds</h2>
                <p className="mb-4">
                    You may return products within [time period, e.g. 30 days] of delivery. To initiate a return, please contact our 
                    customer service department. We will provide a refund or exchange, at our discretion, if the product is returned 
                    in its original condition.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Warranty and Liability</h2>
                <p className="mb-4">
                    We warrant that our products will be free from defects in materials and workmanship for a period of [warranty period, 
                    e.g. 1 year]. Our liability for any damages or losses arising from the use of our products is limited to the purchase 
                    price of the product.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="mb-4">
                    All content on our website, including but not limited to text, images, and software, is the property of [Your Company Name] 
                    or our licensors. You may not reproduce, modify, or distribute any content on our website without our prior written consent.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="mb-4">
                    These Terms and Conditions will be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes 
                    arising from these Terms and Conditions will be resolved through [dispute resolution process, e.g. arbitration].
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Changes to Terms and Conditions</h2>
                <p className="mb-4">
                    We reserve the right to modify or update these Terms and Conditions at any time without notice. Your continued use of our website 
                    or purchase of products from us will be deemed acceptance of any changes to these Terms and Conditions.
                </p>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about these Terms and Conditions, please contact our customer service department 
                    at [contact information].
                </p>
                <p className="mb-4">
                    By using our website or making a purchase, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
            </section>
        </main>
    );
};

export default TermsAndCondition;
