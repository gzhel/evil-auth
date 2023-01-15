interface ValidationItem {
  [key: string]: {
    value: number | boolean | string | RegExp;
    message: string;
  };
}

export interface InputPasswordProps {
  className?: string;
  name: string;
  register: any;
  errors: any;
  watch: any;
  required: boolean;
  validation: ValidationItem;
}
