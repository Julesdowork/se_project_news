import "./Overlay.css";

function Overlay({ isMobileMenuOpen }) {
  return isMobileMenuOpen && <div className="overlay"></div>;
}

export default Overlay;
