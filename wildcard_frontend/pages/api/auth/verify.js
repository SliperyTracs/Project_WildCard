import { compareSync } from 'argon2'


async function verify({ email, password }) {
    // Look up the user in your database
    const users = await fetch('http://127.0.0.1:8000/api/admin')
    console.log(users)
    const user = users.find(obj => obj.Email==email)
  // If the user doesn't exist, return an error
  if (!user) {
    throw new Error('User not found')
  }

  // If the user exists, compare the provided password to the
  // hashed password in the database
  const passwordIsValid = compareSync(password, user.passwordHash)

  // If the passwords don't match, return an error
  if (!passwordIsValid) {
    throw new Error('Invalid password')
  }

  // If the passwords match, return the user object
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  }
}