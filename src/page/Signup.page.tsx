import { ZodType, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import storeIcon from '../assets/logo.webp';
import { Link } from 'react-router-dom';

type FormData = {
  userName: string;
  email: string | number;
  password: string;
  confirmPassword: string;
};
const SignUp = () => {
  const schema: ZodType<FormData> = z
    .object({
      userName: z.string().min(2).max(30),
      email: z.string().email(),
      password: z.string().min(6).max(20),
      confirmPassword: z.string().min(6).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: FormData) => {
    console.log(data);
  };
  return (
    <section className='h-screen grid place-items-center'>
      <form
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
        onSubmit={handleSubmit(submitData)}
      >
        <img src={storeIcon} alt='techhub icon' className='w-20 h-20 mx-auto' />

        <h4 className='text-center text-3xl font-bold'>Register</h4>

        {/* user name */}
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Username</span>
          </div>
          <input
            type='text'
            className='input input-bordered w-full max-w-xs'
            {...register('userName')}
          />
          {errors.userName && (
            <span className='text-red-700'>{errors.userName.message}</span>
          )}
        </label>
        {/* email */}
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Email</span>
          </div>
          <input
            type='text'
            className='input input-bordered w-full max-w-xs'
            {...register('email')}
          />
          {errors.email && (
            <span className='text-red-700'>{errors.email.message}</span>
          )}
        </label>
        {/* password */}
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Password</span>
          </div>
          <input
            type='password'
            className='input input-bordered w-full max-w-xs'
            {...register('password')}
          />
          {errors.password && (
            <span className='text-red-700'>{errors.password.message}</span>
          )}
        </label>
        {/* confirm password */}
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text'>Confirm Password</span>
          </div>
          <input
            type='password'
            className='input input-bordered w-full max-w-xs'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <span className='text-red-700'>
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
        <button type='submit' className='btn btn-neutral'>
          REGISTER
        </button>

        <p className='text-center'>
          Already have an account?
          <Link
            to='/sign-in'
            className='ml-2 link link-hover link-primary capitalize'
          >
            login
          </Link>
        </p>
      </form>
    </section>
  );
};
export default SignUp;
