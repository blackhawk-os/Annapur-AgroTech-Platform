import React from 'react';

interface TermsAndPrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndPrivacyModal: React.FC<TermsAndPrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/50 backdrop-blur-md flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        
        {/* Terms And Conditions */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#88B04B]">Terms and Conditions</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          
          <div className="text-sm text-gray-700 space-y-4">
            <p><strong>Last updated: June 10, 2025</strong></p>
            
            <p>Welcome to our Local Marketplace for Farmers. Please read these Terms and Conditions carefully before using our website.</p>
            
            <p>By accessing or using the platform, you agree to be bound by these Terms. If you do not agree, please do not use our service.</p>
            
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Who Can Use the Platform</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>You must be at least 18 years old to register and use this site.</li>
                  <li>You agree to provide accurate information during registration.</li>
                  <li>You are responsible for maintaining the confidentiality of your account.</li>
                </ul>
              </li>
              
              <li>
                <strong>User Roles</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Farmers can list agricultural products for sale.</li>
                  <li>Buyers (individuals, businesses) can browse, bid, and buy listed items.</li>
                  <li>Admins may monitor activity and manage disputes.</li>
                </ul>
              </li>

              <li>
                <strong>Product Listings</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Farmers must provide accurate details (name, price, photos, location)</li>
                  <li>False or misleading information is strictly prohibited.</li>
                  <li>Illegal or banned products are not allowed on the platform.</li>
                </ul>
              </li>

              <li>
                <strong>Bidding System</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Buyers can place bids on available products.</li>
                  <li>The seller has the right to accept or reject any bid.</li>
                  <li>Bids, once accepted, are considered binding agreements.</li>
                </ul>
              </li>

              <li>
                <strong>Payment & Transactions</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Currently, payments may be handled via cash on delivery or mutual agreement.</li>
                  <li>Future support for digital payments (e.g., eSewa, Khalti) may be added.</li>
                </ul>
              </li>

              <li>
                <strong>Dispute Resolution</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Any disputes between buyer and seller must first be resolved between parties.</li>
                  <li>The platform may step in to assist, but is not liable for damages or losses.</li>
                </ul>
              </li>

              <li>
                <strong>Location Services</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>The platform may use location data to enhance services(e.g., nearby listings).</li>
                  <li>You must allow location permissions for better recovery.</li>
                </ul>
              </li>

              <li>
                <strong>Prohibited Activities</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Misuse of the platform, including spam, fraud, or harassment, will result in account suspension or ban.</li>
                  <li>Impersonation or unauthorized access is strictly prohibited.</li>
                </ul>
              </li>

              <li>
                <strong>Intellectual Property</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>All content, branding, and system designs belong to the platform unless otherwise stated.</li>
                  <li>Users must not copy or redistribute platform materials without permission.</li>
                </ul>
              </li>

              <li>
                <strong>Privacy</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>We collect basic personal and location data for account creation and platform improvement.</li>
                  <li>Your data is safe with us and will not be shared without your consent.</li>
                  <li>Read our <span className="text-[#88B04B] underline cursor-pointer">PRIVACY POLICY</span> below for more details.</li>
                </ul>
              </li>

              <li>
                <strong>Changes to Terms</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>We may update these Terms occasionally. You will be notified of major changes. Continued use of the platform means you accept the updated terms.</li>
                </ul>
              </li>
              
              <li>
                <strong>Contact Us</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>If you have any questions or concerns, please reach out to our support team at:</li>
                  <li>📧 support@annapur.com</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

       {/* Privacy Policy */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#88B04B]">Privacy Policy</h2>
          </div>
          
          <div className="text-sm text-gray-700 space-y-4">
            <p><strong>Last updated: June 10, 2025</strong></p>
            
            <p>We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data on our platform.</p>
            
            
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Information We Collect</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>Personal Information: Name, phone number, email address, etc.</li>
                  <li>Location Data: Collected to display nearby buyers or sellers on the map.</li>
                  <li>Product Listings and Activity: Products you list, bids you make, and transactions.</li>
                  <li>Device Information: Browser type, operating system, etc. (optional for analytics)</li>
                </ul>
              </li>

              <li>
                <strong>How we use your information</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>To create and manage your account.</li>
                  <li>To match farmers with local buyers based on location.</li>
                  <li>To improve platform functionality and user experience.</li>
                  <li>To send notifications (e.g., bids, messages, confirmations).</li>
                  </ul>
              </li>

              <li>
                <strong>Data Sharing and Disclosure</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>We do not share your data with third parties without your explicit consent.
                    We may disclose your data only if required by law or to protect platform integrity.</li>
                </ul>
              </li>

              <li>
                <strong>Location Data Usage</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>We use location data to show relevant nearby products or users.
                       Your live location is never shared publicly and is only used for in-app features.</li>
                </ul>
              </li>

              <li>
                <strong>Data Security</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>We implement appropriate security measures (e.g., encryption, access control) to keep your data safe.</li>
                </ul>
              </li>

              <li>
                <strong>User Rights</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>You can access, update, or delete your personal data.</li>
                  <li>You may disable location permissions anytime (but this may limit functionality).</li>
                </ul>
              </li>

              <li>
                <strong>Cookies and Tracking</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>We may use cookies to enhance your experience and collect usage analytics.</li>
                </ul>
              </li>

              <li>
                <strong>Changes to This Policy</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>We may update this Privacy Policy occasionally. Changes will be notified within the platform.</li>
                </ul>
              </li>
              
              <li>
                <strong>Contact Us</strong>
                <ul className="list-disc pl-5 mt-1">
                  <li>For any questions or concerns regarding your privacy, contact us at:</li>
                  <li>📧 support@annapur.com</li>
                </ul>
              </li>
            </ol>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#88B04B] text-white px-4 py-2 rounded-md hover:bg-[#7a9e43] transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacyModal;