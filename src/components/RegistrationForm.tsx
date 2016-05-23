import * as React from 'react';

const LoginForm = () => (
  <form>
    <div className='form-group'>
      <label for='email'>Email Address</label>
      <input type='email' className='form-control' placeholder='email' />
    </div>
    <button type='submit' className='btn btn-default'>Submit</button>
  </form>
)

export default LoginForm;
