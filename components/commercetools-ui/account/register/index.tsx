import React, { useState } from 'react';
import { BusinessTypes } from 'helpers/hooks/useAccount';
import { useFormat } from 'helpers/hooks/useFormat';
import Redirect from 'helpers/redirect';
import { Reference, ReferenceLink } from 'helpers/reference';
import { useAccount } from 'frontastic';
import Image, { NextFrontasticImage } from 'frontastic/lib/image';

export interface RegisterProps {
  logo?: NextFrontasticImage;
  loginLink?: Reference;
}

const businessTypes = [
  {
    label: 'Pharmaceuticals',
    value: BusinessTypes.Pharmaceuticals,
  },
  {
    label: 'Office supply',
    value: BusinessTypes.OfficeSupply,
  },
  {
    label: 'Others',
    value: BusinessTypes.Others,
  },
];

const Register: React.FC<RegisterProps> = ({ logo, loginLink }) => {
  //i18n messages
  const { formatMessage: formatErrorMessage } = useFormat({ name: 'error' });
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const { formatMessage: formatSuccessMessage } = useFormat({ name: 'success' });
  const { formatMessage } = useFormat({ name: 'common' });

  //account actions
  const { register, loggedIn } = useAccount();

  //register data
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    lastName: '',
    firstName: '',
    businessType: null,
  });

  //error
  const [error, setError] = useState('');

  //success
  const [success, setSuccess] = useState('');

  //processing...
  const [loading, setLoading] = useState(false);

  //handle text input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //data validation
  const validate = () => {
    //validation schema
    const passwordsMatch = data.password === data.confirmPassword;

    //UI error messages
    if (!passwordsMatch)
      setError(formatErrorMessage({ id: 'password.noMatch', defaultMessage: "Passwords don't match" }));

    //return a boolean representing the data validity
    return passwordsMatch;
  };

  //form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validate data
    if (!validate()) return;
    //processing starts
    setLoading(true);
    //try registering the user with given credentials
    try {
      // set email as confirmed by default for demo
      const response = await register({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        company: data.company,
        confirmed: true,
        businessType: data.businessType,
      });
      if (!response.accountId) {
        setError(
          formatErrorMessage({ id: 'account.create.fail', defaultMessage: "Sorry. We couldn't create your account.." }),
        );
        setSuccess('');
      } else {
        setError('');
        setSuccess(
          formatSuccessMessage({
            id: 'account.created',
            defaultMessage: 'A verification email was sent to {email} ✓',
            values: { email: data.email },
          }),
        );
      }
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
    //processing ends
    setLoading(false);
  };

  if (loggedIn) return <Redirect target="/" />;

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="relative h-12 dark:invert">
            <Image {...logo} alt="Logo" layout="fill" objectFit="contain" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-light-100">
            {formatAccountMessage({ id: 'account.create.new', defaultMessage: 'Create a new account' })}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {formatAccountMessage({ id: 'account.alreadyHave', defaultMessage: 'Already have an account?' })}{' '}
            <ReferenceLink target={loginLink} className="font-medium text-accent-400 underline hover:text-accent-500">
              {formatAccountMessage({ id: 'account.login.here', defaultMessage: 'Login here' })}
            </ReferenceLink>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow dark:bg-primary-200 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {success && <p className="text-sm text-green-600" dangerouslySetInnerHTML={{ __html: success }}></p>}
              {error && <p className="text-sm text-accent-400">{error}</p>}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                  {formatMessage({ id: 'emailAddress', defaultMessage: 'Email Address' })}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="basis-1/2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                    {formatMessage({ id: 'company', defaultMessage: 'Company' })}
                  </label>
                  <div className="mt-1">
                    <input
                      id="company"
                      name="company"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                  {formatMessage({ id: 'firstName', defaultMessage: 'firstName' })}
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                  {formatMessage({ id: 'lastName', defaultMessage: 'Lastname' })}
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-light-100">
                  {formatAccountMessage({ id: 'password', defaultMessage: 'Password' })}
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700 dark:text-light-100"
                >
                  {formatAccountMessage({ id: 'password.confirm', defaultMessage: 'Confirm Password' })}
                </label>
                <div className="mt-1">
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-accent-400 py-2 px-4 text-sm font-medium text-white shadow-sm transition-colors duration-200 ease-out hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 disabled:bg-gray-200"
                  disabled={loading}
                >
                  {formatAccountMessage({ id: 'sign.up', defaultMessage: 'Sign up' })}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
