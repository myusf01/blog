/* eslint-disable @next/next/no-img-element */
import { useAuth0 } from '@auth0/auth0-react'

export default function Form({ onSubmit, text, textSet }) {
  const { loginWithPopup, isAuthenticated, logout, user } = useAuth0()
  return (
    <form className="mt-10" onSubmit={onSubmit}>
      <textarea
        rows="3"
        className="border border-gray-400 w-full block p-4 rounded"
        value={text}
        onChange={e => {
          textSet(e.target.value)
        }}
      ></textarea>
      <div className="mt-4">
        {isAuthenticated ? (
          <div className="flex items-center">
            <button className="btn-blue">Send</button>
            <img src={user.picture} alt={user.name} width={30} className="rounded-full mx-2" />
            <span>{user.name}</span>
            <button
              type="button"
              onClick={() =>
                logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
              }
              className="btn-red ml-auto"
            >
              {' '}
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn-blue"
              type="button"
              onClick={() => loginWithPopup()}
            >
              {' '}
              Login
            </button>
          </div>
        )}
      </div>
    </form>
  )
}
