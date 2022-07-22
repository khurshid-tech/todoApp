import React from "react";
const TodoList = (props) => {
  const { list, handleEdit, handleDelete } = props;
  return (
    <div className="todoList">
      {Array.isArray(list) && list.length > 0 && (
        <ul className="list-group">
          {list.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <li className="list-group-item mb-2 rounded border-0 d-flex align-items-center justify-content-between">
                  <span>{item.name}</span>
                  <div className="action-info d-flex justify-content-between">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-1"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      )}
      {list.length === 0 && <p>No Task Found.</p>}
    </div>
  );
};

export default TodoList;
