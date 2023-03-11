import React from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <div className="flex flex-col justify-center items-center my-5 p-2">
      <Link className="mb-2" to="/products">
        NEW
      </Link>
      <Link to="/products">ALL</Link>
      <Link to="/products">Outer</Link>
      <Link to="/products">Top</Link>
      <Link to="/products">Bottom</Link>
      <Link to="/products">Acc</Link>
    </div>
  );
}
