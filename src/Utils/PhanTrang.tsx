import React, { useState } from 'react';

interface PhanTrangProps {
  onPageChange: 
  (pageNumber: number) => void;
  totalPages: number;
}

const PhanTrang: React.FC<PhanTrangProps> = ({ totalPages, onPageChange }) => {
  
  const [SimplePage, setSimplePage] = useState(1);

  const handletransformPage = (Numberofpage: number) => {
    onPageChange(Numberofpage);
    setSimplePage(Numberofpage);
  };

  const PageNumbers = [];

  for (var i = 1; i <= totalPages; i++) {
    PageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="Mucluc">
        {PageNumbers.map((Number) => (
          <li key={Number} 
          className={`item-table ${Number===SimplePage ? 'danghoatdong' : ''}`}>
            <button className="linkP" 
            onClick={() => handletransformPage (Number)}>{Number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PhanTrang;