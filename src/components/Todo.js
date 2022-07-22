import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === "") {
      alert("Please add item");
      return false;
    }

    if (editId) {
      const updatedList = list.map((t) =>
        t.id === editId ? { ...t, name: item } : t
      );
      setList(updatedList);
      setEditId("");
      setItem("");
      return;
    }

    setList([...list, { id: `${item}-${Date.now()}`, name: item }]);
    setItem("");
  };

  const handleEdit = (id) => {
    let nameToEdit = list.find((item) => item.id === id).name;
    setItem(nameToEdit);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const deleteTodo = list.filter((t) => t.id !== id);
    setList(deleteTodo);
  };

  return (
    <div className="todo-section container py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-5">
              <form
                className="d-flex justify-content-center align-items-center mb-4"
                onSubmit={handleSubmit}
              >
                <div className="flex-fill">
                  <input
                    type="text"
                    placeholder="New Task..."
                    id="form2"
                    onChange={(e) => setItem(e.target.value)}
                    className="form-control"
                    value={item}
                    autoFocus
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="btn btn-info ms-2 text-white">
                  {editId ? "Update" : "Add"}
                </button>
              </form>
              <TodoList
                list={list}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
