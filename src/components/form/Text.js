import React from "react";
import { useForm } from "react-hook-form";

const Text = (props) => {
  let { register } = useForm();
  const name = props.name;
  const rules = props.rules;
  return (
    <>
      <input
        type={props.type}
        className="appearance-none rounded-none relative block w-full px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
        name={props.name}
        placeholder={props.placeholder}
        id={props.id}
        {...register(name, rules)}
      />
    </>
  );
};

export default Text;
