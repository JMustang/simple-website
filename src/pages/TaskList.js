import React, { useState, useEffect } from "react";
import { getTasks, deleteTaskById } from "../services/TaskService";
import moment from "moment";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";

export default function TaskList({ history }) {
  const [tasks, setTasks] = useState([]);
  const [taskError, setTaskError] = useState("");

  useEffect(() => {
    reloadTasks();
  }, []);

  const reloadTasks = () => {
    getTasks()
      .then((res) => setTasks(res))
      .catch((err) => setTaskError(err));
  };

  const onEdit = (id) => {
    history.push("/task-edit", { id });
  };

  const onDelete = (id) => {
    deleteTaskById(id)
      .then(() => {
        reloadTasks();
      })
      .catch((err) => setTaskError(err));
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          {taskError ? (
            <div>
              <h2>Something is not working well.</h2>
            </div>
          ) : (
            tasks.map((t) => (
              <div className="col-md-3 p-2 card border-info mb-3" key={t.id}>
                <div className="card">
                  <div className="card-header bg-info text-white text-weight-bold text-uppercase">
                    <h4 className="card-text text-center">{t.title}</h4>
                  </div>
                  <div className="card-body bg-light">
                    <p>{t.description}</p>
                    <p>
                      {t.status === 1
                        ? "To do"
                        : t.status === 2
                        ? "Doing"
                        : t.status === 3
                        ? "Done"
                        : ""}
                    </p>
                  </div>
                  <div className="card-body bg-light">
                    <p>created_at {moment(t.created_at).fromNow()}</p>
                    <p>updated_at {moment(t.updated_at).fromNow()}</p>
                  </div>
                  <div className="card-footer bg-info d-flex justify-content-between">
                    <button
                      className="btn btp-outline-light border-0"
                      onClick={() => onEdit(t.id)}
                    >
                      <FaPencilAlt />
                    </button>
                    <button
                      className="btn btp-outline-light border-0"
                      onClick={() => {
                        if (window.confirm("are you sure about this?"))
                          onDelete(t.id);
                      }}
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
