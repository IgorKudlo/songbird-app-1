import React from 'react';

const Pagination = ({ numberQuestion }) => {

  const listPagination = [
    { id: 0, title: 'Разминка' },
    { id: 1, title: 'Воробьиные' },
    { id: 2, title: 'Лесные птицы' },
    { id: 3, title: 'Певчие птицы' },
    { id: 4, title: 'Хищные птицы' },
    { id: 5, title: 'Морские птицы' },
  ];

  return (
    <div className="header d-flex">
      <ul className="pagination">
        {
          listPagination.map((item) => (
            <li className={`page-item ${numberQuestion === item.id ? 'active' : ''}`} key={item.id}>
              <a className="page-link" href="/#">{item.title}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination
