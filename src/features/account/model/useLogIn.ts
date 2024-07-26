import { useForm } from 'react-hook-form';

export const useLogIn = () => {
  const form = useForm();

  return { form };
};
