function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-base-300">
      <div>
        <p>Copyright © {year} - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
