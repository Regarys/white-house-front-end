import { useState } from 'react';
import PropTypes from "prop-types";

function Dropdown({ label, children }) {
  const [ open, setOpen ] = useState(false);

  return(
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={() =>setOpen(!open)}>
        {label}
      </div>
      <div className={`dropdown-content ${open ? "open" : ""}` } onClick={() => setOpen(!open)}>
        {children}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
