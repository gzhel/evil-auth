interface ValidationItem {
  [key: string]: {
    value: number | boolean | string | RegExp;
    message: string;
  };
}

export interface FormInputProps {
  className?: string;
  name: string;
  register: any;
  errors: any;
  required: boolean;
  validation: ValidationItem;
}
