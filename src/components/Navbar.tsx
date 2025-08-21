import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    if (location.pathname !== '/') {
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="heading-md text-primary-600">Flower Shop</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hover:text-primary-600 transition-colors font-medium"
            >
              Shop
            </Link>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="hover:text-primary-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#collections"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('collections');
              }}
              className="hover:text-primary-600 transition-colors font-medium"
            >
              Collections
            </a>
            <Link
              to="/contact"
              className="hover:text-primary-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop">
              <Button className="btn-primary">Shop Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-card mt-2 py-4 px-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="hover:text-primary-600 transition-colors font-medium py-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hover:text-primary-600 transition-colors font-medium py-2"
              onClick={closeMenu}
            >
              Shop
            </Link>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="hover:text-primary-600 transition-colors font-medium py-2"
            >
              About
            </a>
            <a
              href="#collections"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('collections');
              }}
              className="hover:text-primary-600 transition-colors font-medium py-2"
            >
              Collections
            </a>
            <Link
              to="/contact"
              className="hover:text-primary-600 transition-colors font-medium py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link to="/shop" onClick={closeMenu}>
              <Button className="btn-primary w-full">Shop Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
