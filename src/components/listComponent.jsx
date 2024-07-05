import React from "react";

const List = ({ children, className, to }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={to || "#"}
      onClick={() => scrollToSection(to)}
      className={`block py-2 pr-4 pl-3 text-gray-700 font-Modarat border border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${className}`}
    >
      {children}
    </a>
  );
};

export default List;
