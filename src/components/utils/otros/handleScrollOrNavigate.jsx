export const handleScrollOrNavigate = (id, navigate, location) => {
  if (location.pathname !== "/") {
    navigate("/", { state: { scrollTo: id } });
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};