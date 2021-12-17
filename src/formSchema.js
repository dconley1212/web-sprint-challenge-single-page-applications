import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Your name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().trim(),
  peperoni: yup.boolean(),
  onions: yup.boolean(),
  peppers: yup.boolean(),
  olives: yup.boolean(),
  special: yup.string().trim(),
});

export default formSchema;
