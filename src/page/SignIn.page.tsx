import { Link } from 'react-router-dom';
import { ZodType, z } from 'zod';
import storeIcon from '../assets/logo.webp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';

type FormData = {
  email: string;
  password: string | number;
};
const SignIn = () => {
  const schema: ZodType<FormData> = z.object({
    email: z.string().min(2).max(30),
    password: z.string().min(6).max(20),
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

        <h4 className='text-center text-3xl font-bold'>Login</h4>

        {/* email */}
        <label className='form-control w-full max-w-xs'>
          <div className='label'>
            <span className='label-text capitalize'>email</span>
          </div>
          <input
            type='email'
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
            <span className='label-text capitalize'>password</span>
          </div>
          <input
            type='password'
            className='input input-bordered w-full max-w-xs'
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>

        {/* button */}
        <div className='flex flex-col gap-y-3 mt-5'>
          <button
            type='submit'
            className='btn btn-secondary capitalize tracking-wider'
          >
            login
          </button>

          <button
            type='button'
            className='btn btn-outline btn-neutral capitalize tracking-wider'
          >
            <FcGoogle className='text-2xl mr-1' />
            <span>Continue with Google</span>
          </button>

          <button
            type='button'
            className='btn btn-neutral capitalize tracking-wider'
          >
            guest user
          </button>
        </div>

        <p className='text-center'>
          Not a member yet?
          <Link
            to='/sign-up'
            className='ml-2 link link-hover link-primary capitalize'
          >
            register
          </Link>
        </p>
      </form>
    </section>
  );
};
export default SignIn;
