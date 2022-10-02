import { Field, useFormikContext } from "formik";
import { useEffect } from "react";

export const TextField = ({ label, name, icon, ...props }) => {
  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <label htmlFor={name} className="col-span-1 pr-8 lg:pr-[10px]">
        {label}
      </label>

      <div className="col-span-2">
        <div className="flex">
          <div className="py-[11px] px-[12px] border-r border-slate-300 bg-slate-200 text-slate-500 font-extralight text-sm rounded-l cursor-default">
            {icon}
          </div>
          <Field
            className="bg-white text-black px-3 py-[6px] w-full outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded-r"
            id={name}
            name={name}
            {...props}
            required
          />
        </div>
      </div>
    </div>
  );
};

export const CodeField = ({ label, name, icon, ...props }) => {
  return (
    <div className="flex justify-between gap-20">
      <label htmlFor={name} className="col-span-1">
        {label}
      </label>

      <div className="col-span-2 ">
        <div className="flex">
          <div className="py-[11px] px-[12px] border-r border-slate-300 bg-slate-200 text-slate-500 font-extralight text-sm rounded-l cursor-default">
            {icon}
          </div>
          <Field
            className="bg-white text-black px-3 py-[6px] w-[100px] outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded-r"
            id={name}
            name={name}
            {...props}
            required
          />
        </div>
      </div>
    </div>
  );
};

// export const TextField2 = ({ label, name, icon, ...props }) => {
//   return (
//     <div className="flex justify-between items-center lg:gap-20 mb-[18px]">
//       <label htmlFor={name} className="pr-6 lg:pr-[115px]">
//         {label}
//       </label>

//       <div className="flex">
//         <div className="py-[11px] px-[12px] border-r border-slate-300 bg-slate-200 text-slate-500 font-extralight text-sm rounded-l cursor-default">
//           {icon}
//         </div>
//         <Field
//           className="bg-white text-black px-3 py-[6px] w-[170px] lg:min-w-[411px] outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded-r"
//           id={name}
//           name={name}
//           {...props}
//           required
//         />
//       </div>
//     </div>
//   );
// };

export const TextArea = ({ label, name, ...props }) => {
  const {
    values: { reason },
    setFieldValue,
  } = useFormikContext();

  const value1 = "I am a robot (avoid)";
  const value2 = "I am not a human (avoid)";
  const value3 = "Complain about a post.";
  const value4 = "My transaction is not showing.";
  const value5 = "My post was rejected.";

  const message1 =
    "All right! Be more smart robot to solve our all problems and let us rest, enjoy n fun.";
  const message2 =
    "Each ad post has its own complain icon, please complain from there to make it easy for us to find and solve the problem accordingly.";
  const message3 =
    "A transaction may take a few minutes to a few days to appear depends on the mode of payment you used, please be patient. We try best to make it faster.";
  const message4 =
    "A post may be rejected if it is prone to child pornography, human traffiking, drug, weapons, hate speech, promotion of sensitive illegal items under the law of the particular area. To make internet more usable, we have to do it. Please edit your post and update.";

  useEffect(() => {
    switch (reason) {
      case value1:
        setFieldValue(name, message1);
        break;
      case value2:
        setFieldValue(name, message1);
        break;
      case value3:
        setFieldValue(name, message2);
        break;
      case value4:
        setFieldValue(name, message3);
        break;
      case value5:
        setFieldValue(name, message4);
        break;
      default:
        setFieldValue(name, "");
        break;
    }
  }, [reason, setFieldValue, name]);

  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <label htmlFor={name} className="col-span-1 pr-6 lg:pr-[115px]">
        {label}
      </label>
      <div className="col-span-2 flex">
        <Field
          as="textarea"
          rows="6"
          className="bg-white text-black px-3 py-[6px] w-full outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded"
          id={name}
          name={name}
          {...props}
        />
      </div>
    </div>
  );
};

export const TextArea2 = ({ label, name, ...props }) => {
  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <label htmlFor={name} className="col-span-1 pr-6 lg:pr-[115px]">
        {label}
      </label>
      <div className="col-span-2 flex">
        <Field
          as="textarea"
          rows="10"
          className="bg-white text-black px-3 py-[6px] w-full outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded"
          id={name}
          name={name}
          {...props}
        />
      </div>
    </div>
  );
};

export const SelectField = ({ label, name, placeholder, options }) => {
  return (
    <div className="grid grid-cols-3 mb-[18px]">
      <label htmlFor={name} className="col-span-1 pr-6 lg:pr-[10px]">
        {label}
      </label>
      <div className="col-span-2">
        <div className="flex">
          <Field
            as="select"
            name={name}
            id={name}
            required
            className="bg-white text-black px-3 py-[6px] w-full outline-none focus:ring-[3px] focus:transition focus:duration-200 ring-blue-400/50 rounded"
          >
            <option
              value=""
              className="text-slate-400"
              defaultValue={true}
              hidden
            >
              {placeholder}
            </option>
            {options.map((option, i) => (
              <option
                key={i}
                value={option.toString().split(" »").join("")}
                className=""
                disabled={option.includes("- - - ") && true}
              >
                {option.toString().split(" »").join("")}
              </option>
            ))}
          </Field>
        </div>
      </div>
    </div>
  );
};

export const CheckboxField = ({ label, name, placeholder, option }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="px-3 py-1 bg-slate-200 rounded">
        <Field type="checkbox" name={name} className="" />
      </div>
      <label>{label}</label>
    </div>
  );
};
