import React from 'react'

const InputJest = () => {
  return (
    <div>
        <h2>Jest with Input</h2>

        <form>
            <input type="text" name="uname" id="uname" placeholder='Enter Username'/>
            <input type="password" name="password" id="password" />
        </form>
    </div>
  )
}

export default InputJest