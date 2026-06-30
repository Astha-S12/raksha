import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow p-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default PageLayout;