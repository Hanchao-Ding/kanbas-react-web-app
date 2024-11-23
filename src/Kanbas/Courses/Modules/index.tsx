import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as coursesClient from "../client";
import React, { useState,useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as modulesClient from "./client";
export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div className="wd-modules">
      <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={createModuleForCourse} />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .map((module: any) => (
            <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  module.name
                ) : (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });

                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module.id}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  editModule={() => dispatch(editModule(module.id))}
                />
              </div>

              <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  LEARNING OBJECTIVES
                  <LessonControlButtons
                    moduleId={module.id} deleteModule={function (moduleId: string): void {
                      throw new Error("Function not implemented.");
                    } } editModule={function (moduleId: string): void {
                      throw new Error("Function not implemented.");
                    } }
                  />
                </li>

                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to the course
                  <LessonControlButtons
                    moduleId={module.id} deleteModule={function (moduleId: string): void {
                      throw new Error("Function not implemented.");
                    } } editModule={function (moduleId: string): void {
                      throw new Error("Function not implemented.");
                    } }
                  />
                </li>

                <li className="wd-lesson list-group-item p-3 ps-1">
                  Learn what is Web Development
                </li>

                <li className="wd-lesson list-group-item p-3 ps-1">
                  LESSON 1
                </li>

                <li className="wd-lesson list-group-item p-3 ps-1">
                  LESSON 2
                </li>
              </ul>
            </li>
          ))}

        {/* Example Module Structure for Week 2 */}
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            Week 2
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              LEARNING OBJECTIVES
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 1
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              LESSON 2
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
