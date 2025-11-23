import React from 'react'

const countries = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'IN', name: 'India' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'JP', name: 'Japan' },
  { code: 'CN', name: 'China' },
  { code: 'BR', name: 'Brazil' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'RU', name: 'Russia' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'MX', name: 'Mexico' },
  { code: 'SG', name: 'Singapore' },
  { code: 'AE', name: 'UAE' },
  { code: 'KR', name: 'South Korea' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'OTHER', name: 'Other' },
];

const HandlePasswordValidation = (password1, password2) => {
  if (password1 !== password2) {
    alert("Passwords do not match!");
    return false;
  }
  return true;
};

const HandleFormSubmission = (event) => {
  event.preventDefault();
  const password1 = event.target.password1.value;
  const password2 = event.target.password2.value;
  if (!HandlePasswordValidation(password1, password2)) return;

  // Collect user data
  const user = {
    username: event.target.username.value,
    fname: event.target.fname.value,
    lname: event.target.lname.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
    gender: event.target.gender.value,
    password: password1,
    country: event.target.country.value,
  };

  // Store user data in localStorage
  let users = JSON.parse(localStorage.getItem('twix_users') || '[]');
  // Check if username or email already exists
  if (users.some(u => u.username === user.username || u.email === user.email)) {
    alert('Username or email already exists!');
    return;
  }
  users.push(user);
  localStorage.setItem('twix_users', JSON.stringify(users));
  alert('Registration successful! You can now login.');
  window.location.href = '/login';
};

const getFlagEmoji = (countryCode) => {
  return countryCode
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );
};


const Registration = () => {
  return (
    <div>
        <form className='max-w-3xl mx-auto mt-8 bg-white p-8 rounded-lg shadow flex flex-col gap-4'>
            <h1 className='text-3xl font-bold text-start mt-4 mb-2'>Registration</h1>
            <p className='text-left mb-4'>Join TwixTalks and start connecting with others today!</p>

            <div className='relative'>
              <input type="text" id='username' name='username' className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Username" />
              <label htmlFor='username' className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Username</label>
            </div>
            <div className='relative'>
              <input type="text" id='fname' name='fname' className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="First Name" />
              <label htmlFor='fname' className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>First Name</label>
            </div>
            <div className='relative'>
              <input type="text" id='lname' name='lname' className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Last Name" />
              <label htmlFor='lname' className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Last Name</label>
            </div>
            <div className='relative'>
              <input type="email" id='email' name='email' className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Email" />
              <label htmlFor='email' className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Email</label>
            </div>
            <div className='relative'>
              <input type="tel" id='phone' name='phone' className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Phone number" />
              <label htmlFor='phone' className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Phone Number</label>
            </div>
            <div className='relative'>
              <select id='gender' name='gender' className='peer border border-gray-300 p-2 w-full rounded bg-transparent focus:outline-none focus:border-blue-500'>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor='gender' className='absolute left-2 -top-4 text-sm text-blue-500 bg-white px-1'>Gender</label>
            </div>
            <div className='relative'>
              <input type="password" id='password1' name='password1' className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Password" />
              <label htmlFor='password1' className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Password</label>
            </div>
            <div className='relative'>
              <input type="password" id='password2' name='password2' className='peer border border-gray-300 p-2 w-full rounded bg-transparent placeholder-transparent focus:outline-none focus:border-blue-500' placeholder="Confirm Password" />
              <label htmlFor='password2' className='absolute left-2 top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>Confirm Password</label>
            </div>
            <div className='relative'>
              <select id='country' name='country' className='peer border border-gray-300 p-2 w-full rounded bg-transparent focus:outline-none focus:border-blue-500'>
                <option value="">Select Country</option>
                {countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.code !== 'OTHER' ? getFlagEmoji(country.code) + ' ' : ''}{country.name}
                  </option>
                ))}
              </select>
              <label htmlFor='country' className='absolute left-2 -top-4 text-sm text-blue-500 bg-white px-1'>Country</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" id="terms" className='accent-blue-500' />
              <label htmlFor="terms" className='text-sm'>I agree to the <a href="/terms" className='text-blue-500 underline'>Terms & Conditions</a></label>
            </div>
            <button type="submit" className='bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white p-2 w-full mt-2 rounded-lg shadow transition' onClick={HandleFormSubmission}>Register</button>
            <p className='text-center text-sm mt-4'>Already have an account? <a href="/login" className='text-blue-500'>Login here</a></p>
            <p className='text-center text-sm'>By registering, you agree to our <a href="/terms" className='text-blue-500'>Terms & Conditions</a></p>
        </form>
    </div>
  )
}

export default Registration