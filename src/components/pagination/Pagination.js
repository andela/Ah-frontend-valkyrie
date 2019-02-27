import React from "react";
import PropTypes, { element } from "prop-types";
import SpecialPageItem from "./specialPageItem";
import "./styles/pagination.css";


const PaginationComponent = ({
  goToFirst, goToLast, goToNext, goToPrevious, children,
}) => (
  <div>
    <nav aria-label="Page navigation example" className="Pagination">
      <ul className="pagination">
        <SpecialPageItem clicked={goToFirst} icon="fas fa-less-than" arialLabel="First" />
        <SpecialPageItem clicked={goToPrevious} arialLabel="Previous" icon="fas fa-backward" />
        {children}
        <SpecialPageItem clicked={goToNext} arialLabel="Next" icon="fas fa-forward" />
        <SpecialPageItem clicked={goToLast} icon="fas fa-greater-than" arialLabel="Last" />
      </ul>
    </nav>
  </div>
);
PaginationComponent.propTypes = {
  goToFirst: PropTypes.func.isRequired,
  goToLast: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
  goToPrevious: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(element).isRequired,
};

export default PaginationComponent;
