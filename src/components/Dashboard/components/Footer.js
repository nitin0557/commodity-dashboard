export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t py-8 px-6  bg-customLight dark:bg-customDark dark:text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-2">Opion</h2>
          <p className="text-gray-600 text-sm mb-4">
            Ease of shopping is our main focus. With powerful search features
            and customizable filters, you can easily find the products you are
            looking for.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-500 hover:text-black">
              🌐
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              📷
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              💼
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Get Started</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Service</li>
            <li>Contact Us</li>
            <li>Affiliate Program</li>
            <li>About Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Get Started</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Dashboard</li>
            <li>Platform</li>
            <li>Workout Library</li>
            <li>App Design</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Subscribe</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        © 2024 MaxFit — Twitter — Instagram — Facebook
      </div>
    </footer>
  );
}
