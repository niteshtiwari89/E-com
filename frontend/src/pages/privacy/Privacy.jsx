import React from 'react';
import './Privacy.css'

const Privacypolicy = () => {
    return (
        <main className="container mx-auto p-4 bg-white">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <section>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="mb-4">
                    Welcome to [Your Website Name], operated by [Your Company Name] in Nagpur, India. Your privacy is important to us. 
                    This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit and use our website and services.
                </p>
                <p className="mb-4">
                    By accessing or using our website, you agree to this Privacy Policy. If you do not agree with any of the terms in this policy, please discontinue your use of our services.
                </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <h3 className="text-xl font-bold mb-2">a. Personal Information</h3>
                <p className="mb-4">
                    When you create an account, place an order, or engage with our website, we may collect the following personal information:
                </p>
                <ul className="list-disc ml-8 mb-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Delivery address</li>
                    <li>Payment information (such as credit/debit card details, UPI, etc.)</li>
                </ul>

                <h3 className="text-xl font-bold mb-2">b. Non-Personal Information</h3>
                <p className="mb-4">
                    We may also collect non-personal information such as:
                </p>
                <ul className="list-disc ml-8 mb-4">
                    <li>Browser type</li>
                    <li>Device type (mobile, tablet, desktop)</li>
                    <li>IP address</li>
                    <li>Pages visited on our website</li>
                    <li>Referring website</li>
                </ul>

                <h3 className="text-xl font-bold mb-2">c. Cookies and Tracking</h3>
                <p className="mb-4">
                    We use cookies and similar tracking technologies to monitor activity on our site and store information about your preferences. 
                    You can control cookie preferences through your browser settings.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information we collect to:
                </p>
                <ul className="list-disc ml-8 mb-4">
                    <li>Process your orders and transactions</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Personalize content and offers</li>
                    <li>Send marketing communications, newsletters, and promotions (you can opt-out at any time)</li>
                    <li>Prevent fraud and ensure the security of our site</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">3. Sharing Your Information</h2>
                <p className="mb-4">
                    We respect your privacy, and we do not sell or rent your personal information to third parties. However, we may share your information in the following situations:
                </p>
                <ul className="list-disc ml-8 mb-4">
                    <li><b>With Service Providers:</b> We may share your information with trusted third-party service providers, such as payment processors, delivery partners, and marketing agencies, to facilitate our services.</li>
                    <li><b>For Legal Compliance:</b> We may disclose your information if required to comply with applicable laws, regulations, or legal processes.</li>
                    <li><b>To Protect Our Rights:</b> We may share your information to enforce our terms, prevent fraud, and protect the safety of our users.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="mb-4">
                    We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. 
                    However, please be aware that no method of online transmission is 100% secure, and we cannot guarantee the absolute security of your data.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">5. Retention of Data</h2>
                <p className="mb-4">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="mb-4">
                    You have the right to:
                </p>
                <ul className="list-disc ml-8 mb-4">
                    <li>Access, correct, or delete your personal information</li>
                    <li>Opt-out of receiving marketing communications</li>
                    <li>Request restrictions on how we process your personal data</li>
                    <li>Withdraw consent at any time (this does not affect the lawfulness of processing based on consent before its withdrawal)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">7. Third-Party Links</h2>
                <p className="mb-4">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. 
                    We encourage you to read the privacy policies of any linked websites you visit.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                <p className="mb-4">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. 
                    If we become aware that we have inadvertently collected such information, we will take steps to delete it.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                    We will notify you of any significant changes by posting the updated policy on this page with the effective date.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <ul className="list-disc ml-8 mb-4">
                    <li>Email: [Your Email Address]</li>
                    <li>Phone: [Your Contact Number]</li>
                    <li>Address: [Your Office Address], Nagpur, India</li>
                </ul>
            </section>
        </main>
    );
};

export default Privacypolicy;
